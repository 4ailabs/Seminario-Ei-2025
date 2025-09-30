import React from 'react';
import { Package, CheckCircle } from 'lucide-react';

interface MaterialsNeededProps {
  materials: string[];
}

const MaterialsNeeded: React.FC<MaterialsNeededProps> = ({ materials }) => {
  return (
    <div className="mb-16 sm:mb-20">
      <div className="flex items-center gap-3 mb-6 sm:mb-8">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-400 to-red-500 text-white rounded-lg flex items-center justify-center">
          <Package className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">MATERIALES NECESARIOS</h2>
      </div>
      
      <div className="bg-slate-800 p-4 sm:p-6 lg:p-8 rounded-xl text-center border border-slate-700">
        <ul className="space-y-2 sm:space-y-3 lg:space-y-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
          {materials.map((material, index) => (
            <li key={index} className="flex items-center justify-center gap-2 sm:gap-3">
              <CheckCircle className={`w-4 h-4 sm:w-5 sm:h-5 ${index % 3 === 0 ? 'text-emerald-400' : index % 3 === 1 ? 'text-cyan-400' : 'text-green-400'} flex-shrink-0`} />
              <span>{material}</span>
            </li>
          ))}
        </ul>
        
        <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-slate-900/50 rounded-lg border border-slate-600">
          <p className="text-xs sm:text-sm text-slate-300">
            <strong className="text-cyan-400">Nota:</strong> Todos los materiales adicionales serán proporcionados por el instituto. 
            Solo necesitas traer los elementos personales listados arriba.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MaterialsNeeded;
