import React from 'react';
import { Package, CheckCircle } from 'lucide-react';

interface MaterialsNeededProps {
  materials: string[];
}

const MaterialsNeeded: React.FC<MaterialsNeededProps> = ({ materials }) => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6 sm:mb-8">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-400 to-red-500 text-white rounded-lg flex items-center justify-center flex-shrink-0">
          <Package className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white leading-tight">MATERIALES NECESARIOS</h2>
      </div>
      
      <div className="bg-slate-800 p-4 sm:p-6 lg:p-8 rounded-xl border border-slate-700 hover:border-orange-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10">
        <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto">
          {materials.map((material, index) => (
            <li key={index} className="flex items-center gap-3 sm:gap-4">
              <CheckCircle className={`w-5 h-5 sm:w-6 sm:h-6 ${index % 3 === 0 ? 'text-emerald-400' : index % 3 === 1 ? 'text-cyan-400' : 'text-green-400'} flex-shrink-0`} />
              <span className="text-left flex-1">{material}</span>
            </li>
          ))}
        </ul>
        
        <div className="mt-6 sm:mt-8 p-4 sm:p-5 bg-slate-900/50 rounded-lg border border-slate-600">
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            <strong className="text-cyan-400">Nota:</strong> Todos los materiales adicionales serán proporcionados por el instituto. 
            Solo necesitas traer los elementos personales listados arriba.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MaterialsNeeded;
