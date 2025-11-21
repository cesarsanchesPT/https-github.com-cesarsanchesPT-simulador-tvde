import React, { useState } from 'react';
import { INFO_MODULES } from '../constants';
import { InfoModule } from '../types';
import { ChevronLeftIcon, BookOpenIcon, UserIcon, InfoIcon, LightBulbIcon, CheckCircleIcon } from '../components/Icons';

interface InfoViewProps {
  onBack: () => void;
}

export const InfoView: React.FC<InfoViewProps> = ({ onBack }) => {
  const [selectedModule, setSelectedModule] = useState<InfoModule | null>(null);

  if (selectedModule) {
    return (
      <div className="max-w-3xl mx-auto animate-fade-in pt-10 pb-20">
         <button onClick={() => setSelectedModule(null)} className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium">
           <ChevronLeftIcon className="w-5 h-5" /> Voltar aos Módulos
         </button>
         
         <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-indigo-600 p-8 text-white">
              <h2 className="text-3xl font-bold">{selectedModule.title}</h2>
              <p className="text-indigo-100 mt-2">{selectedModule.description}</p>
            </div>
            <div className="p-8 space-y-8">
               {selectedModule.content.map((section, idx) => (
                 <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.text.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700">
                           <CheckCircleIcon className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                           <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                 </div>
               ))}
            </div>
         </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto animate-fade-in pt-20 pb-10">
       <button onClick={onBack} className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium">
          <ChevronLeftIcon className="w-5 h-5" /> Voltar ao Menu
       </button>
       <h2 className="text-3xl font-bold mb-8 text-gray-900">Módulos Informativos</h2>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INFO_MODULES.map(module => (
             <div 
               key={module.id}
               onClick={() => setSelectedModule(module)}
               className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg cursor-pointer transition-all group"
             >
               <div className="bg-indigo-50 w-12 h-12 rounded-xl flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
                  {module.icon === 'BookOpenIcon' && <BookOpenIcon className="w-6 h-6" />}
                  {module.icon === 'UserIcon' && <UserIcon className="w-6 h-6" />}
                  {module.icon === 'InfoIcon' && <InfoIcon className="w-6 h-6" />}
                  {module.icon === 'LightBulbIcon' && <LightBulbIcon className="w-6 h-6" />}
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-700">{module.title}</h3>
               <p className="text-gray-500 text-sm">{module.description}</p>
             </div>
          ))}
       </div>
    </div>
  );
};