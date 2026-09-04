import React, { createContext, useContext, useState, useCallback } from 'react';
import { playSound as synthPlaySound } from '../utils/audio';

const PortfolioContext = createContext(null);

export function PortfolioProvider({ children }) {
  const [activeScene, setActiveSceneState] = useState(0);
  const [animSpeed, setAnimSpeedState] = useState(0.22);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [activeModal, setActiveModal] = useState(null); // 'resume' | 'project' | 'animGallery' | null
  const [selectedProject, setSelectedProject] = useState(null);
  const [toasts, setToasts] = useState([]);
  const [burstSignal, setBurstSignal] = useState(0);

  const playSound = useCallback((type = 'click') => {
    synthPlaySound(type, soundEnabled);
  }, [soundEnabled]);

  const showToast = useCallback((message, type = 'info') => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev.slice(-3), { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3200);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  const setActiveScene = useCallback((index, name = '') => {
    setActiveSceneState(index);
    playSound('blip');
    if (name) {
      showToast(`3D Scene: ${name}`, 'success');
    }
  }, [playSound, showToast]);

  const setAnimSpeed = useCallback((speed) => {
    setAnimSpeedState(speed);
    playSound('blip');
    showToast(`3D Playback Speed: ${speed}x`, 'info');
  }, [playSound, showToast]);

  const openModal = useCallback((modalName, projectData = null) => {
    if (projectData) {
      setSelectedProject(projectData);
    }
    setActiveModal(modalName);
    playSound('chime');
  }, [playSound]);

  const closeModal = useCallback(() => {
    setActiveModal(null);
    setSelectedProject(null);
    playSound('click');
  }, [playSound]);

  const trigger3DBurst = useCallback(() => {
    setBurstSignal(prev => prev + 1);
    playSound('chime');
    showToast('⚡ 3D Energy Surge Pulse Triggered!', 'success');
  }, [playSound, showToast]);

  return (
    <PortfolioContext.Provider
      value={{
        activeScene,
        setActiveScene,
        animSpeed,
        setAnimSpeed,
        soundEnabled,
        setSoundEnabled,
        activeModal,
        openModal,
        closeModal,
        selectedProject,
        toasts,
        showToast,
        removeToast,
        burstSignal,
        trigger3DBurst,
        playSound,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
}
