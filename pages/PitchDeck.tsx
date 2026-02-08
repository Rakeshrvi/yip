
import React, { useState, useEffect } from 'react';
import { PITCH_SLIDES, MOCK_COMPETENCY, MOCK_PROGRESSION } from '../constants';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip 
} from 'recharts';

const PitchDeck: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const next = () => setActiveSlide((prev) => Math.min(prev + 1, PITCH_SLIDES.length - 1));
  const prev = () => setActiveSlide((prev) => Math.max(prev - 1, 0));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const slide = PITCH_SLIDES[activeSlide];
  const hasIllustration = !!slide.type;
  const hasRightContent = hasIllustration || !!slide.facts || !!slide.kpis;

  const renderIllustration = () => {
    switch (slide.type) {
      case 'landing':
        return (
          <div className="w-full h-full flex items-center justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 bg-slate-900 rounded-[4rem] flex items-center justify-center text-white text-[12rem] md:text-[18rem] font-black italic shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] border-[12px] border-white ring-1 ring-slate-100 rotate-3 transition-transform hover:rotate-0 duration-700">
                K
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-600/10 blur-[100px] rounded-full"></div>
            </div>
          </div>
        );

      case 'diagram':
        return (
          <div className="w-full h-full flex items-center justify-center p-6 bg-slate-50 rounded-[2.5rem] border-2 border-slate-100 shadow-inner overflow-hidden">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Central Hub */}
              <div className="absolute w-56 h-56 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex flex-col items-start justify-center z-10 shadow-2xl border-[10px] border-white ring-4 ring-blue-100 pl-10">
                <div className="text-left text-white">
                  <div className="text-4xl font-black mb-1 text-left">KSAI</div>
                  <div className="text-[10px] font-black tracking-[0.2em] opacity-90 uppercase text-left">Master Hub</div>
                </div>
              </div>
              
              {/* Connections */}
              {[
                { label: 'Students', icon: '👨‍🎓', x: '50%', y: '12%', color: 'bg-emerald-500' },
                { label: 'Teachers', icon: '👩‍🏫', x: '50%', y: '88%', color: 'bg-orange-500' },
                { label: 'Schools', icon: '🏫', x: '12%', y: '50%', color: 'bg-indigo-500' },
                { label: 'State Policy', icon: '🏛️', x: '88%', y: '50%', color: 'bg-rose-500' }
              ].map((item, i) => (
                <div key={i} className="absolute flex flex-col items-start group transition-transform duration-500 hover:scale-110" style={{ left: item.x, top: item.y, transform: 'translate(-50%, -50%)' }}>
                  <div className={`w-24 h-24 ${item.color} rounded-[2rem] shadow-xl border-4 border-white flex items-center justify-center text-5xl mb-3 transform -rotate-3 group-hover:rotate-0 transition-transform`}>
                    {item.icon}
                  </div>
                  <span className="text-sm font-black uppercase text-slate-800 bg-white border border-slate-200 px-4 py-1.5 rounded-xl shadow-sm whitespace-nowrap text-left">
                    {item.label}
                  </span>
                </div>
              ))}
              
              {/* Connection Lines Decorative */}
              <div className="absolute w-4/5 h-4/5 border-2 border-dashed border-blue-200 rounded-full opacity-40"></div>
            </div>
          </div>
        );

      case 'logic':
        return (
          <div className="w-full h-full flex flex-col justify-between p-10 bg-slate-900 rounded-[3rem] border border-slate-800 shadow-2xl">
            {[
              { step: '01', title: 'Data Ingestion', sub: 'KITE / Samagra API Connectivity', color: 'from-blue-500 to-blue-600', icon: '📡' },
              { step: '02', title: 'Normalization', sub: 'Cross-Subject Calibration Logic', color: 'from-indigo-500 to-indigo-600', icon: '⚖️' },
              { step: '03', title: 'Benchmarking', sub: 'PISA / UNESCO Policy Linking', color: 'from-violet-500 to-violet-600', icon: '🌐' },
              { step: '04', title: 'Insights Engine', sub: 'Evidence-Based Teacher Dashboards', color: 'from-slate-700 to-slate-800', icon: '💡' }
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-8 group">
                <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-3xl flex items-center justify-center text-white text-3xl font-black shadow-lg border-2 border-white/10 group-hover:scale-105 transition-transform`}>
                  {item.step}
                </div>
                <div className="flex-grow border-b border-white/5 pb-4 group-last:border-0 text-left">
                  <div className="flex items-center space-x-3 mb-1 justify-start">
                    <span className="text-2xl">{item.icon}</span>
                    <h4 className="text-xl font-black text-white uppercase tracking-tight text-left">{item.title}</h4>
                  </div>
                  <p className="text-base font-bold text-blue-400 opacity-80 text-left">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        );

      case 'comparison':
        return (
          <div className="w-full h-full flex items-center justify-center p-4">
            <div className="w-full bg-white rounded-[3rem] border-[10px] border-slate-50 shadow-2xl overflow-hidden ring-1 ring-slate-100">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="px-10 py-8 text-lg font-black uppercase tracking-[0.2em] text-left">Key Metric</th>
                    <th className="px-10 py-8 text-lg font-black uppercase tracking-[0.2em] opacity-30 text-left">Traditional</th>
                    <th className="px-10 py-8 text-lg font-black uppercase tracking-[0.2em] text-blue-400 bg-slate-800 border-l border-white/5 text-left">KSAI Platform</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { label: 'Core Unit', old: 'Absolute Marks', new: 'Proficiency Index' },
                    { label: 'Context', old: 'Syllabus Focus', new: 'Global Alignment' },
                    { label: 'Timeframe', old: 'Yearly Snapshot', new: 'Continuous Growth' },
                    { label: 'Impact', old: 'Passive Status', new: 'Predictive ROI' }
                  ].map((row, idx) => (
                    <tr key={idx} className="bg-white hover:bg-slate-50 transition-colors">
                      <td className="px-10 py-6 font-black text-slate-400 text-base text-left">{row.label}</td>
                      <td className="px-10 py-6 font-bold text-slate-800 text-lg text-left">{row.old}</td>
                      <td className="px-10 py-6 font-black bg-blue-50/50 text-blue-800 text-xl border-l border-blue-100 text-left">{row.new}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'prototype':
        const isRadar = slide.id === 12; // Competency Profile
        return (
          <div className="w-full h-full bg-slate-900 rounded-[3.5rem] p-12 flex flex-col shadow-2xl relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/20 blur-[80px]"></div>
            <div className="flex justify-between items-end mb-8 shrink-0">
              <div className="text-left">
                <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em] block mb-2 text-left">INTERFACE PREVIEW</span>
                <h3 className="text-3xl font-black text-white uppercase tracking-tight leading-none text-left">{isRadar ? 'Competency Map' : 'Mastery Timeline'}</h3>
              </div>
              <div className="flex space-x-2 pb-2">
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] font-black border border-emerald-500/30 rounded-lg">ACTIVE ENGINE</span>
              </div>
            </div>
            <div className="flex-grow min-h-0 bg-white/5 rounded-[2.5rem] border border-white/10 p-8 shadow-inner">
              <ResponsiveContainer width="100%" height="100%">
                {isRadar ? (
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={MOCK_COMPETENCY}>
                    <PolarGrid stroke="rgba(255,255,255,0.1)" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 13, fontWeight: '800' }} />
                    <Radar name="Student" dataKey="score" stroke="#3b82f6" strokeWidth={6} fill="#3b82f6" fillOpacity={0.6} />
                    <Radar name="Threshold" dataKey="globalBenchmark" stroke="#f43f5e" strokeWidth={3} fill="transparent" strokeDasharray="6 6" />
                  </RadarChart>
                ) : (
                  <AreaChart data={MOCK_PROGRESSION}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                    <XAxis dataKey="month" tick={{ fill: '#64748b', fontSize: 12, fontWeight: 'bold' }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
                    <Area type="monotone" dataKey="score" stroke="#3b82f6" strokeWidth={7} fill="#3b82f6" fillOpacity={0.15} />
                  </AreaChart>
                )}
              </ResponsiveContainer>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-6 shrink-0">
              <div className="bg-white/5 p-6 rounded-3xl border border-white/5 text-left transition-all group-hover:bg-white/10 flex flex-col items-start">
                <span className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 text-left">Student Index</span>
                <span className="text-5xl font-black text-white tracking-tighter block text-left">0.82</span>
              </div>
              <div className="bg-white/5 p-6 rounded-3xl border border-white/5 text-left transition-all group-hover:bg-white/10 flex flex-col items-start">
                <span className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 text-left">Progression</span>
                <span className="text-5xl font-black text-emerald-400 tracking-tighter block text-left">+14%</span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full h-full flex flex-col p-10 md:p-14 bg-white font-['Bricolage_Grotesque'] select-none overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 rounded-bl-[10rem] -z-10 opacity-60"></div>

      <div className={`grid ${hasRightContent ? 'grid-cols-[45%_51%]' : 'grid-cols-1 max-w-4xl mr-auto text-left'} gap-[4%] h-full items-center`}>
        
        {/* Narrative Panel */}
        <div className="flex flex-col h-full justify-center items-start py-8">
          <div className="w-full text-left">
            <div className={`flex items-center space-x-3 mb-4 justify-start shrink-0`}>
              <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-white text-3xl font-black italic shadow-xl">K</div>
              <div className="space-y-1 text-left">
                <span className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] leading-none text-left">YIP DLE 2025</span>
              </div>
            </div>
            
            <h2 className={`${slide.type === 'landing' ? 'text-7xl md:text-8xl' : 'text-5xl md:text-6xl'} font-black text-slate-900 tracking-tighter leading-[0.9] mb-4 uppercase text-left`}>
              {slide.title}
            </h2>
            
            <div className={`flex items-center mb-6 justify-start shrink-0`}>
              <div className="w-12 h-2 bg-blue-600 rounded-full mr-5 shrink-0"></div>
              <p className="text-xl md:text-2xl font-black text-blue-600 tracking-tight uppercase leading-none text-left">
                {slide.subtitle}
              </p>
            </div>

            <div className="space-y-4 w-full">
              {slide.content.map((point, idx) => (
                <div key={idx} className={`flex items-start space-x-5 group justify-start`}>
                  <div className="mt-2 w-4 h-4 bg-white border-4 border-blue-600 rounded-full flex-shrink-0 shadow-sm" />
                  <p className={`${slide.type === 'landing' ? 'text-2xl md:text-3xl italic' : 'text-xl md:text-2xl'} text-slate-800 font-bold leading-tight text-left pr-2`}>
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel: Illustrations, Facts, or KPIs */}
        {hasRightContent && (
          <div className="h-full w-full flex flex-col justify-center py-8">
            {hasIllustration ? (
              renderIllustration()
            ) : slide.facts ? (
              <div className="space-y-6 w-full animate-in fade-in slide-in-from-right-10 duration-700">
                <div className="flex items-center space-x-2 mb-2 justify-start">
                  <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
                  <span className="text-[12px] font-black text-slate-400 uppercase tracking-[0.2em] text-left">Global Evidence Base</span>
                </div>
                <div className="space-y-6">
                  {slide.facts.map((fact, fIdx) => (
                    <div key={fIdx} className="p-8 bg-slate-50 border-l-[12px] border-blue-600 rounded-r-[3rem] transition-all hover:bg-blue-50 shadow-md text-left flex flex-col items-start scale-100 hover:scale-[1.02] duration-300">
                      <p className="text-slate-900 font-bold text-2xl leading-tight italic mb-4 text-left">"{fact.text}"</p>
                      <div className="text-[12px] font-black text-blue-600 uppercase tracking-widest flex items-center text-left">
                        <span className="mr-3 text-xl">📂</span> {fact.source}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : slide.kpis ? (
              <div className="grid grid-cols-2 gap-6 w-full animate-in fade-in slide-in-from-right-10 duration-700">
                {slide.kpis.map((kpi, idx) => (
                  <div key={idx} className="p-8 bg-white border-2 border-slate-100 border-b-[10px] border-b-blue-600 rounded-[2.5rem] shadow-xl hover:shadow-2xl hover:bg-blue-50/30 transition-all flex flex-col items-start group scale-100 hover:scale-[1.05] duration-300">
                    <span className="text-[12px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 group-hover:text-blue-400 transition-colors">{kpi.label}</span>
                    <span className="text-6xl font-black text-slate-900 tracking-tighter leading-none mb-3">{kpi.value}</span>
                    {kpi.sub && <span className="text-[14px] font-bold text-blue-600/60 uppercase tracking-wider">{kpi.sub}</span>}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        )}
      </div>

      {/* Presentation Footer */}
      <div className="absolute bottom-0 left-0 w-full px-14 py-6 bg-white border-t-2 border-slate-50 flex justify-between items-center shrink-0">
        <div className="flex items-center space-x-8 text-left">
          <span className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] border-b-2 border-blue-600 pb-1 text-left">Kerala Student Academic Indices (KSAI)</span>
          <div className="w-px h-6 bg-slate-200"></div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] text-left">Redefining Educational Measurement</span>
        </div>
        <div className="flex items-center space-x-12">
           <div className="flex space-x-6">
              {['NEP 2020', 'PISA 2025', 'UNESCO GPF'].map(m => (
                <span key={m} className="text-[10px] font-black text-slate-800 border-2 border-slate-100 px-3 py-1 rounded-xl bg-slate-50 text-left">{m}</span>
              ))}
           </div>
           <div className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em] pr-4 text-left">© 2025 YIP PITCH DECK</div>
        </div>
      </div>
    </div>
  );
};

export default PitchDeck;
