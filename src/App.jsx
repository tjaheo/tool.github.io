import React, { useState } from 'react';
import DashboardPanel from './components/panels/DashboardPanel';
import CalculatorPanel from './components/panels/CalculatorPanel';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  // State untuk mengontrol buka/tutup sidebar (berlaku sama di semua device)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-screen bg-slate-950 text-gray-100 overflow-hidden relative">
      
      {/* ================= BACKDROP GELAP (Muncul saat sidebar terbuka) ================= */}
      {isSidebarOpen && (
        <div 
          onClick={() => setIsSidebarOpen(false)}
          className="absolute inset-0 bg-black/60 z-20 backdrop-blur-sm"
        />
      )}

      {/* ================= SIDEBAR (Drawer yang konsisten di semua device) ================= */}
      <aside className={`
        absolute inset-y-0 left-0 z-30 
        w-64 bg-slate-900 border-r border-slate-800 flex flex-col 
        transform transition-transform duration-300 ease-in-out shadow-2xl
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <h1 className="text-xl font-black text-green-400 tracking-wider">
            SFL HUB
          </h1>
          {/* Tombol close di dalam sidebar */}
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="text-gray-400 hover:text-white p-1 focus:outline-none"
          >
            ✕
          </button>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <button 
            onClick={() => { setActiveTab('dashboard'); setIsSidebarOpen(false); }}
            className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all ${
              activeTab === 'dashboard' 
                ? 'bg-green-600 text-white shadow-lg shadow-green-900/30' 
                : 'text-gray-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            📊 Dashboard
          </button>
          
          <button 
            onClick={() => { setActiveTab('calculator'); setIsSidebarOpen(false); }}
            className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all ${
              activeTab === 'calculator' 
                ? 'bg-green-600 text-white shadow-lg shadow-green-900/30' 
                : 'text-gray-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            🧮 Kalkulator
          </button>
        </nav>

        <div className="p-4 border-t border-slate-800 text-xs text-center text-gray-500">
          React App v1.0
        </div>
      </aside>

      {/* ================= KONTEN UTAMA (Full layar di semua device) ================= */}
      <main className="flex-1 flex flex-col overflow-y-auto w-full">
        
        {/* Header Atas */}
        <header className="h-16 border-b border-slate-800 bg-slate-900/50 flex items-center justify-between px-4 md:px-8 backdrop-blur shrink-0">
          
          {/* TOMBOL MENU DI SEBELAH KIRI HEADER */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 rounded-lg bg-slate-800 text-gray-200 hover:bg-slate-700 focus:outline-none border border-slate-700 transition-colors"
              title="Open Menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
            <span className="text-sm font-semibold uppercase tracking-wider text-gray-400 hidden sm:inline">
              Tab: <span className="text-white">{activeTab}</span>
            </span>
          </div>

          {/* Status di Kanan Header */}
          <div className="text-xs md:text-sm bg-slate-800 px-3 py-1 rounded-full text-green-400 border border-slate-700 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span>Online</span>
          </div>
        </header>

        {/* Area Panel */}
        <div className="p-4 md:p-8">
          {activeTab === 'dashboard' && <DashboardPanel />}
          {activeTab === 'calculator' && <CalculatorPanel />}
        </div>

      </main>

    </div>
  );
}