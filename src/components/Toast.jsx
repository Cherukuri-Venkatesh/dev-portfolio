import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Info, CheckCircle2, AlertTriangle, X } from 'lucide-react';

export function ToastContainer() {
  const { toasts, removeToast } = usePortfolio();

  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="fixed top-20 right-4 sm:right-6 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-center gap-3 p-3.5 px-4 rounded-2xl glass-glow-ember border border-orange-500/40 text-white shadow-[0_10px_35px_rgba(255,87,34,0.25)] backdrop-blur-xl animate-float transition-all"
        >
          {toast.type === 'success' ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          ) : toast.type === 'warning' ? (
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
          ) : (
            <Info className="w-5 h-5 text-orange-400 shrink-0" />
          )}

          <div className="flex-1 text-xs font-mono font-medium leading-tight">
            {toast.message}
          </div>

          <button
            onClick={() => removeToast(toast.id)}
            className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition"
            aria-label="Dismiss toast"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
    </div>
  );
}
