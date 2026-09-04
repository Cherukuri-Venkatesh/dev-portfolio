import React, { useState, useRef, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { RESUME_DATA } from '../data/portfolioData';
import confetti from 'canvas-confetti';
import { Terminal as TerminalIcon, Play, Trash2, CornerDownLeft } from 'lucide-react';

export function TerminalSection() {
  const { openModal, setActiveScene, playSound, showToast } = usePortfolio();
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: '[SYSTEM READY]: Authentication verified for Cherukuri Venkatesh v2.5. Type "help" to inspect commands.'
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const screenRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (screenRef.current) {
      screenRef.current.scrollTop = screenRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (rawCmd) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    playSound('keypress');
    setCmdHistory(prev => [cmd, ...prev]);
    setHistoryIndex(-1);

    const userEntry = { type: 'user', text: rawCmd };
    let responseEntry = null;

    if (cmd === 'clear' || cmd === 'cls') {
      setHistory([]);
      setInputVal('');
      playSound('blip');
      return;
    }

    if (cmd === 'resume') {
      openModal('resume');
      responseEntry = { type: 'output', text: 'Opening Executive Resume Sheet...' };
    } else if (cmd === '3d') {
      openModal('animGallery');
      responseEntry = { type: 'output', text: 'Launching 3D Visual Studio Laboratory...' };
    } else if (cmd === 'sudo hire-venkatesh' || cmd === 'hire') {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
      playSound('success');
      showToast('🎉 Access Granted! Let\'s schedule the conversation.', 'success');
      responseEntry = {
        type: 'output',
        text: RESUME_DATA.terminalCommands['sudo hire-venkatesh']
      };
    } else if (RESUME_DATA.terminalCommands[cmd]) {
      playSound('blip');
      responseEntry = {
        type: 'output',
        text: RESUME_DATA.terminalCommands[cmd]
      };
    } else if (cmd.startsWith('scene ')) {
      const sceneNum = parseInt(cmd.split(' ')[1], 10);
      if (!isNaN(sceneNum) && sceneNum >= 0 && sceneNum <= 9) {
        setActiveScene(sceneNum, `Preset ${sceneNum + 1}`);
        responseEntry = { type: 'output', text: `Switched 3D WebGL scene to preset ${sceneNum}.` };
      } else {
        responseEntry = { type: 'error', text: 'Invalid scene number. Valid range is 0 to 9 (e.g. "scene 2").' };
      }
    } else {
      playSound('blip');
      responseEntry = {
        type: 'error',
        text: `zsh: command not found: ${cmd}. Type "help" to see available commands.`
      };
    }

    setHistory(prev => [...prev, userEntry, responseEntry]);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const nextIdx = Math.min(historyIndex + 1, cmdHistory.length - 1);
        setHistoryIndex(nextIdx);
        setInputVal(cmdHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(cmdHistory[nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  const clearTerminal = () => {
    setHistory([]);
    playSound('blip');
  };

  const quickCommands = ['help', 'skills', 'projects', 'coding', 'education', 'sudo hire-venkatesh'];

  return (
    <section id="terminal" className="space-y-6 scroll-mt-28">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <div className="font-mono text-xs text-cyber-cyan tracking-widest uppercase flex items-center gap-2">
            <span>// 09. INTERACTIVE CLI SANDBOX</span>
            <span className="w-12 h-[1px] bg-cyber-cyan/40"></span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white mt-1">
            System Terminal Emulator
          </h2>
        </div>
        
        {/* Quick Command Pills */}
        <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px]">
          <span className="text-slate-500 uppercase">Try:</span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-cyber-cyan border border-white/10 transition hover:scale-105"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>

      {/* Terminal Window Box */}
      <div className="glass-panel rounded-3xl border-white/15 overflow-hidden shadow-2xl">
        {/* Header Bar */}
        <div className="px-5 py-3 bg-obsidian-900/95 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              onClick={clearTerminal}
              className="w-3 h-3 rounded-full bg-rose-500/80 cursor-pointer hover:opacity-80 transition"
              title="Clear terminal buffer"
            />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="font-mono text-xs text-slate-400 ml-2">
              venkatesh@node-01:~ (zsh)
            </span>
          </div>
          <button
            onClick={clearTerminal}
            className="text-[10px] font-mono text-slate-500 hover:text-slate-300 flex items-center gap-1 transition"
          >
            <Trash2 className="w-3 h-3" />
            <span>[clear screen]</span>
          </button>
        </div>

        {/* Screen Output Buffer */}
        <div
          ref={screenRef}
          className="p-6 font-mono text-xs text-slate-200 h-80 overflow-y-auto space-y-2 select-text bg-obsidian-950/95"
        >
          {history.map((item, idx) => (
            <div key={idx}>
              {item.type === 'system' && (
                <div className="text-cyber-cyan text-xs">
                  {item.text}
                </div>
              )}
              {item.type === 'user' && (
                <div className="flex items-center gap-2 text-cyber-emerald font-bold pt-1">
                  <span>venkatesh@node:~$</span>
                  <span className="text-white font-normal">{item.text}</span>
                </div>
              )}
              {item.type === 'output' && (
                <div className="text-slate-300 whitespace-pre-wrap leading-relaxed pl-4 border-l border-white/10 my-1">
                  {item.text}
                </div>
              )}
              {item.type === 'error' && (
                <div className="text-rose-400 whitespace-pre-wrap leading-relaxed pl-4 border-l border-rose-500/40 my-1">
                  {item.text}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Input Prompt */}
        <div className="p-4 bg-obsidian-900/90 border-t border-white/10 flex items-center gap-3">
          <span className="font-mono text-xs text-cyber-emerald font-bold flex items-center gap-1 shrink-0">
            <span>venkatesh@node</span>
            <span className="text-slate-500">:</span>
            <span className="text-cyber-cyan">~</span>
            <span className="text-slate-400">$</span>
          </span>
          <input
            ref={inputRef}
            type="text"
            autoComplete="off"
            spellCheck="false"
            placeholder="type a command (e.g. 'help', 'skills', 'coding', 'contact')..."
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-white font-mono text-xs focus:outline-none placeholder:text-slate-600"
          />
          <button
            onClick={() => executeCommand(inputVal)}
            className="px-3.5 py-1.5 rounded-lg bg-cyber-cyan/20 hover:bg-cyber-cyan/30 text-cyber-cyan font-mono text-xs font-bold transition flex items-center gap-1"
          >
            <span>Run</span>
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
