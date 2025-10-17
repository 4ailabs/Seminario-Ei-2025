import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Check, Zap } from 'lucide-react';

export default function TRSBApp() {
  const [fase, setFase] = useState(0);
  const [sessionData, setSessionData] = useState({
    fecha: new Date().toLocaleDateString('es-MX'),
    creencia: '',
    ubicacion: '',
    intensidadInicial: 0,
    sensacion: '',
    respuestaHerida: ['', '', ''],
    intensidadFinal: 0,
    cambios: ''
  });
  

  const fases = [
    {
      numero: 0,
      nombre: "INICIO",
      duracion: "2 min",
      titulo: "Preparación y Contexto",
      instrucciones: [
        "Encuentra un lugar tranquilo donde no serás interrumpido durante los próximos 12 minutos.",
        "Siéntate cómodamente con la espalda recta si es posible.",
        "Esta es tu práctica TRSB (Técnica de Reprocesamiento Somato-Cognitivo Bilateral). Es una técnica basada en neurociencia que estimula ambos hemisferios cerebrales mientras trabajas con creencias limitantes.",
        "Tiene 4 fases y dura aproximadamente 12 minutos. Sigue cada paso con atención.",
        "Cuando estés listo, presiona 'Siguiente' para comenzar."
      ],
      inputs: []
    },
    {
      numero: 1,
      nombre: "FASE 1",
      duracion: "2 min",
      titulo: "Identificación de la Creencia",
      instrucciones: [
        "Cierra los ojos suavemente o mira hacia abajo.",
        "Respira profundo 3 veces. Lentamente.",
        "Pregúntate: ¿Cuál es la creencia que más me limita en este momento? (Común: No merezco / No soy suficiente / No puedo / El mundo es peligroso)",
        "No pienses demasiado. Deja que la respuesta surja naturalmente.",
        "Ahora pregúntate: ¿Dónde siento esta creencia en mi cuerpo? (Común: Pecho / Estómago / Garganta / Hombros / Cabeza)",
        "Localiza esa sensación. ¿Cómo la describirías? (Presión / Tensión / Nudo / Vacío / Peso / Opresión)",
        "En escala de 0 a 10, donde 0 es nada y 10 es máximo, ¿cuál es la intensidad de esta sensación AHORA?",
        "Registra tus respuestas abajo. El número inicial será importante para medir tu cambio al final."
      ],
      inputs: [
        { label: "Mi creencia limitante", key: "creencia", type: "text", placeholder: "ej: No merezco / No soy suficiente / No puedo" },
        { label: "¿Dónde la siento en mi cuerpo?", key: "ubicacion", type: "text", placeholder: "ej: En el pecho / En el estómago / En la garganta" },
        { label: "¿Cómo describo esta sensación?", key: "sensacion", type: "text", placeholder: "ej: Presión, tensión, nudo, vacío, peso" },
        { label: "Intensidad inicial (0-10)", key: "intensidadInicial", type: "number", min: 0, max: 10 }
      ]
    },
    {
      numero: 2,
      nombre: "FASE 2",
      duracion: "3 min",
      titulo: "Acceso a la Herida Original",
      instrucciones: [
        "PREPARACIÓN SOMÁTICA: Cierra los ojos suavemente. Respira profundo 3 veces.",
        "Lleva tu atención a esa sensación en tu cuerpo que identificaste (en el pecho, estómago, garganta...)",
        "Siente esa sensación. No la juzgues, solo obsérvala. Permite que esté ahí.",
        "Respira hacia esa sensación. Imagina que le envías oxígeno, espacio, permiso para existir.",
        "Ahora, vamos a explorar el origen. Las preguntas pueden traer memorias, emociones o sensaciones. Todo lo que surja es válido.",
        "Manteniendo la conexión con esa sensación corporal, pregúntate:",
        "PREGUNTA 1: ¿Cuándo fue la primera vez que sentí esta creencia? ¿Qué edad tenía? (Tómate 15 segundos. Permite que una memoria, imagen o emoción emerja)",
        "No fuerces. Lo que surja es lo correcto. Puede ser claro o difuso. Registra lo que venga.",
        "PREGUNTA 2: ¿Quién me enseñó que esto era verdad? ¿Un padre, una madre, un evento? (Tómate otros 15 segundos)",
        "Observa sin juzgar. Registra tu respuesta con compasión hacia ti.",
        "PREGUNTA 3: ¿Se repitió este patrón? ¿Cómo lo usé para protegerme? (Tómate 15 segundos)",
        "Respira profundo. Lo que acabas de traer a la conciencia es valiente. Has identificado el patrón que sostiene esta creencia."
      ],
      inputs: [
        { label: "¿Cuándo fue la primera vez? ¿Qué edad tenía?", key: "respuestaHerida", index: 0, type: "text", placeholder: "ej: A los 7 años cuando mi papá me dijo que nunca sería suficiente..." },
        { label: "¿Quién me enseñó esta creencia?", key: "respuestaHerida", index: 1, type: "text", placeholder: "ej: Mi madre con su miedo constante / La vez que fracasé y fui rechazado..." },
        { label: "¿Cómo se repitió? ¿Cómo lo usé para protegerme?", key: "respuestaHerida", index: 2, type: "text", placeholder: "ej: Se volvió mi forma de no arriesgar, de mantenerme pequeño para no ser lastimado..." }
      ]
    },
    {
      numero: 3,
      nombre: "FASE 3",
      duracion: "5 min",
      titulo: "Reprocesamiento Bilateral - PALMADITAS",
      instrucciones: [
        "Cruza tus brazos sobre el pecho - mano derecha en hombro izquierdo, mano izquierda en hombro derecho. Es como darte un abrazo a ti mismo.",
        "Acomódate bien. Mantén esta posición durante los próximos 5 minutos.",
        "Ahora vas a hacer palmaditas alternadas: IZQUIERDA... DERECHA... IZQUIERDA... DERECHA... muy lentamente.",
        "El ritmo es: 1 palmadita cada 2 segundos. Lento y deliberado. Como un metrónomo amoroso.",
        "MANTÉN EL RITMO continuo durante toda esta fase mientras sigues las 3 partes que vienen abajo:",
        "PARTE A (90 seg): Reconocimiento de la herida",
        "PARTE B (60 seg): Validación y compasión hacia ti mismo",
        "PARTE C (90 seg): Instalación de la nueva verdad (palmaditas más firmes)",
        "Lee cada parte abajo y sigue las instrucciones mientras continúas las palmaditas."
      ],
      subFases: [
        {
          nombre: "PARTE A: RECONOCIMIENTO DE LA HERIDA (90 seg)",
          instrucciones: [
            "Mientras continúas las palmaditas alternadas, repite MENTALMENTE estas frases:",
            "'Reconozco esa herida' (haz 5 palmaditas mientras lo repites mentalmente)",
            "'Veo a ese niño/niña que fue enseñado que [TU CREENCIA]' (5 palmaditas)",
            "'No fue mi culpa' (5 palmaditas)",
            "'Era un niño/niña que solo quería ser visto, amado, seguro' (5 palmaditas)",
            "'Y en su lugar, aprendí miedo' (5 palmaditas)",
            "Ahora continúa las palmaditas en SILENCIO durante 30 segundos. Solo el ritmo. Solo la sensación."
          ]
        },
        {
          nombre: "PARTE B: VALIDACIÓN Y COMPASIÓN (60 seg)",
          instrucciones: [
            "Imagina a ese niño/niña de la memoria aquí contigo ahora. Mírale con compasión.",
            "Continúa las palmaditas y repite MENTALMENTE, hablándole:",
            "'A ti te digo: siento que fuiste lastimado' (5 palmaditas)",
            "'Siento que nadie te enseñó que SÍ merecías' (5 palmaditas)",
            "'Pero quiero que sepas algo importante:' (5 palmaditas)",
            "'No merecías ese dolor' (5 palmaditas)",
            "'Y lo que te enseñaron NO ES VERDAD' (5 palmaditas)",
            "Continúa las palmaditas en SILENCIO durante 45 segundos. Siente la compasión hacia ti mismo."
          ]
        },
        {
          nombre: "PARTE C: INSTALACIÓN DE LA NUEVA VERDAD (90 seg)",
          instrucciones: [
            "Ahora tus palmaditas se vuelven un poco MÁS FIRMES. Con convicción y poder.",
            "Mientras haces las palmaditas, DECLARA MENTALMENTE estas verdades con fuerza:",
            "'SÍ merezco' / 'SÍ soy suficiente' / 'SÍ puedo' - según tu creencia (10 palmaditas firmes)",
            "'Merezco/Soy/Puedo porque EXISTO' (10 palmaditas firmes)",
            "'Merezco éxito, amor, descanso, seguridad' (10 palmaditas firmes)",
            "'Merezco elegir para mí' (10 palmaditas firmes)",
            "'Desinstalo el programa viejo AHORA' (10 palmaditas firmes)",
            "'Instalo la nueva verdad en cada célula de mi cuerpo' (10 palmaditas firmes)",
            "Continúa las palmaditas FIRMES en SILENCIO durante 60 segundos. Siente la nueva verdad instalándose."
          ]
        }
      ]
    },
    {
      numero: 4,
      nombre: "FASE 4",
      duracion: "2 min",
      titulo: "Anclaje, Evaluación y Cierre",
      instrucciones: [
        "RALENTIZACIÓN: Empieza a disminuir el ritmo de las palmaditas lentamente.",
        "Cada palmadita ahora es más espaciada, más profunda. 1 palmadita cada 3 segundos.",
        "Haz 5 palmaditas muy lentamente... sintiendo cada una.",
        "ANCLAJE: Ahora coloca ambas manos sobre tu corazón.",
        "Respira profundo 3 veces. Muy lentamente. (Inhala profundo... exhala completamente... Inhala... exhala... Inhala... exhala...)",
        "Cuando estés listo, abre los ojos suavemente.",
        "Tómate 10 segundos para regresar al presente.",
        "Bienvenido de vuelta.",
        "EVALUACIÓN: La misma creencia que al inicio tenía una intensidad de [TU NÚMERO INICIAL], ¿qué intensidad tiene ahora en escala 0-10?",
        "Registra el número abajo. Observa el cambio.",
        "Pregúntate: ¿Qué cambió exactamente? ¿Qué emergió durante esta práctica? ¿Qué sentí?",
        "Registra tus observaciones en el campo de abajo.",
        "RECONOCIMIENTO: Lo que acabas de hacer fue trabajo real y valiente. Tu cerebro acaba de reprocesar una creencia que ha estado activa durante años.",
        "Para transformación permanente, practica TRSB 5 minutos diarios durante 90 días. Esta app te guiará en cada sesión."
      ],
      inputs: [
        { label: "Intensidad final (0-10)", key: "intensidadFinal", type: "number", min: 0, max: 10 },
        { label: "¿Qué cambió? ¿Qué emergió? ¿Qué sentí?", key: "cambios", type: "textarea", placeholder: "Describe: ¿Bajó la intensidad? ¿Surgieron memorias? ¿Emociones? ¿Insights? ¿Cómo te sientes ahora?" }
      ]
    }
  ];

  const faseActual = fases[fase];
  
  const actualizarInput = (key: string, valor: string | number, index: number | null = null) => {
    if (index !== null) {
      const arr = [...(sessionData[key as keyof typeof sessionData] as string[])];
      arr[index] = valor as string;
      setSessionData({ ...sessionData, [key]: arr });
    } else {
      setSessionData({ ...sessionData, [key]: valor });
    }
  };

  const siguienteFase = () => {
    if (fase < fases.length - 1) {
      setFase(fase + 1);
    }
  };

  const faseAnterior = () => {
    if (fase > 0) {
      setFase(fase - 1);
    }
  };

  const calcularCambio = () => {
    return sessionData.intensidadInicial - sessionData.intensidadFinal;
  };

  const generarReporte = () => {
    const cambio = calcularCambio();
    return `
MI SESIÓN TRSB
===============

Fecha: ${sessionData.fecha}

CREENCIA TRABAJADA:
"${sessionData.creencia}"

UBICACIÓN CORPORAL:
${sessionData.ubicacion}

SENSACIÓN:
${sessionData.sensacion}

RESULTADOS MEDIBLES:
  Intensidad Inicial: ${sessionData.intensidadInicial}/10
  Intensidad Final: ${sessionData.intensidadFinal}/10
  CAMBIO: -${cambio} puntos
  ${cambio >= 3 ? 'Cambio significativo!' : cambio >= 1 ? 'Cambio positivo' : 'Cambio sutil - continúa la práctica'}

ORIGEN IDENTIFICADO:

¿Cuándo fue la primera vez?
${sessionData.respuestaHerida[0]}

¿Quién me enseñó esta creencia?
${sessionData.respuestaHerida[1]}

¿Cómo se repitió el patrón?
${sessionData.respuestaHerida[2]}

LO QUE EMERGIÓ Y CAMBIÓ:
${sessionData.cambios}

PRÓXIMOS PASOS:
- Práctica diaria de 5 min durante 90 días
- Usa esta app cada día
- Registra tu progreso
- Observa la transformación acumulativa

RECUERDA: La neuroplasticidad es acumulativa. Cada sesión recablea tu cerebro un poco más.
    `;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 px-3 py-4 sm:p-6 text-white pb-safe overflow-y-auto overscroll-behavior-y-contain" style={{ WebkitOverflowScrolling: 'touch' }}>
      {/* Back to Home Button */}
      <div className="max-w-4xl mx-auto mb-3">
        <a 
          href="/" 
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm touch-manipulation active:scale-95"
        >
          <ChevronLeft size={18} />
          <span>Volver</span>
        </a>
      </div>

      {/* Header */}
      <div className="max-w-4xl mx-auto mb-6 sm:mb-8">
        <div className="text-center mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent leading-tight">APP TRSB</h1>
          <p className="text-cyan-200 text-sm sm:text-base mb-1">Técnica de Reprocesamiento Somato-Cognitivo Bilateral</p>
          <p className="text-slate-400 text-xs sm:text-sm">Tu guía para la práctica diaria de transformación</p>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-700/50 h-3 rounded-full overflow-hidden mb-4 shadow-inner">
          <div
            className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 h-full transition-all duration-500 shadow-lg shadow-cyan-500/50"
            style={{ width: `${((fase + 1) / fases.length) * 100}%` }}
          />
        </div>

        <div className="text-sm text-cyan-200 font-medium">
          Fase {fase + 1} de {fases.length} • {faseActual.duracion}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 border border-slate-700 shadow-xl shadow-cyan-500/5">
          {/* Fase Header */}
          <div className="mb-4 sm:mb-6">
            <div className="text-3xl sm:text-4xl mb-2">{faseActual.nombre}</div>
            <h2 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-2 sm:mb-4">{faseActual.titulo}</h2>
          </div>

          {/* Instrucciones */}
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 mb-4 sm:mb-6 border border-slate-700/50">
            <h3 className="text-base sm:text-lg font-bold text-cyan-400 mb-4 sm:mb-5 flex items-center gap-2 pb-3 border-b border-slate-700/50">
              <Zap size={18} className="text-cyan-400" /> Instrucciones
            </h3>
            <div className="space-y-4 sm:space-y-5">
              {faseActual.instrucciones.map((instr, idx) => {
                const esAccion = instr.includes(':') || instr.startsWith('PREGUNTA') || instr.startsWith('PARTE') || instr.startsWith('PREPARACIÓN') || instr.startsWith('RALENTIZACIÓN') || instr.startsWith('ANCLAJE') || instr.startsWith('EVALUACIÓN') || instr.startsWith('RECONOCIMIENTO');
                return (
                  <div key={idx} className={`${esAccion ? 'bg-slate-800/40 rounded-lg p-3 sm:p-4' : ''}`}>
                    <div className="flex gap-2 sm:gap-3 text-slate-100 text-sm sm:text-base">
                      <span className="text-cyan-400 font-bold min-w-6 sm:min-w-8 flex-shrink-0 mt-0.5">{idx + 1}</span>
                      <p className="leading-relaxed">{instr}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sub-fases (solo para fase 3) */}
          {faseActual.subFases && (
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 mb-4 sm:mb-6 border border-purple-500/30">
              <h3 className="text-base sm:text-lg font-bold text-purple-400 mb-4 sm:mb-5 pb-3 border-b border-purple-500/20">Partes del Reprocesamiento</h3>
              <div className="space-y-4 sm:space-y-5">
                {faseActual.subFases.map((subFase, idx) => {
                  // Colores por parte: A=cyan, B=purple, C=green
                  const colores = [
                    { bg: 'bg-cyan-900/20', titulo: 'text-cyan-300', frase: 'text-cyan-200' },
                    { bg: 'bg-purple-900/20', titulo: 'text-purple-300', frase: 'text-purple-200' },
                    { bg: 'bg-green-900/20', titulo: 'text-green-300', frase: 'text-green-200' }
                  ];
                  const color = colores[idx] || colores[0];
                  
                  return (
                    <div key={idx} className={`${color.bg} rounded-lg p-3 sm:p-4 border border-slate-700/30`}>
                      <h4 className={`font-bold ${color.titulo} mb-3 text-sm sm:text-base`}>{subFase.nombre}</h4>
                      <div className="space-y-2.5 sm:space-y-3">
                        {subFase.instrucciones.map((instr, i) => {
                          const esFrase = instr.startsWith("'");
                          return (
                            <div key={i} className={`text-xs sm:text-sm leading-relaxed ${esFrase ? `ml-3 sm:ml-4 ${color.frase} italic bg-slate-900/40 rounded px-3 py-2` : 'text-slate-300'}`}>
                              {esFrase ? instr : `• ${instr}`}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Input Fields */}
          {faseActual.inputs && faseActual.inputs.length > 0 && (
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 mb-4 sm:mb-6 border border-slate-700/50">
              <h3 className="text-base sm:text-lg font-bold text-cyan-400 mb-4 sm:mb-5 pb-3 border-b border-slate-700/50">Registra Aquí</h3>
              <div className="space-y-4 sm:space-y-5">
                {faseActual.inputs.map((input, idx) => (
                  <div key={idx} className="bg-slate-800/30 rounded-lg p-3 sm:p-4">
                    <label className="block text-sm sm:text-base font-semibold text-cyan-300 mb-2">
                      {input.label}
                    </label>
                    {input.type === 'textarea' ? (
                      <textarea
                        value={input.index !== undefined ? (sessionData[input.key as keyof typeof sessionData] as string[])?.[input.index] || '' : (sessionData[input.key as keyof typeof sessionData] as string) || ''}
                        onChange={(e) => actualizarInput(input.key, e.target.value, input.index)}
                        placeholder={input.placeholder}
                        rows={3}
                        className="w-full bg-slate-700/50 border border-cyan-500/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white text-sm sm:text-base placeholder-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none"
                        style={{ minHeight: '80px', maxHeight: '200px' }}
                      />
                    ) : (
                      <input
                        type={input.type}
                        value={input.index !== undefined ? (sessionData[input.key as keyof typeof sessionData] as string[])?.[input.index] || '' : (sessionData[input.key as keyof typeof sessionData] as string | number) || ''}
                        onChange={(e) => actualizarInput(input.key, input.type === 'number' ? parseInt(e.target.value) || 0 : e.target.value, input.index)}
                        placeholder={input.placeholder}
                        min={input.min}
                        max={input.max}
                        className="w-full bg-slate-700/50 border border-cyan-500/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white text-sm sm:text-base placeholder-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Resumen si es última fase */}
          {fase === fases.length - 1 && (
            <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 backdrop-blur-sm rounded-xl p-6 mb-6 border border-green-500/50 shadow-xl shadow-green-500/10">
              <h3 className="text-lg font-bold text-green-300 mb-4 flex items-center gap-2">
                <Check size={24} className="text-green-400" /> Resumen de Tu Sesión
              </h3>
              <div className="space-y-3 text-sm bg-slate-900/30 rounded-lg p-4 mb-4">
                <p className="text-slate-200"><strong className="text-green-300">Fecha:</strong> {sessionData.fecha}</p>
                <p className="text-slate-200"><strong className="text-green-300">Mi Creencia:</strong> "{sessionData.creencia}"</p>
                <p className="text-slate-200"><strong className="text-green-300">Mi Cambio:</strong> <span className="text-xl font-bold text-green-400">{sessionData.intensidadInicial} → {sessionData.intensidadFinal}</span> <span className="text-green-400">(-{calcularCambio()} puntos)</span></p>
                {calcularCambio() >= 3 && (
                  <p className="text-green-300 font-semibold mt-2">Cambio significativo! Tu sistema nervioso está reprocesando.</p>
                )}
              </div>
                <button
                  onClick={() => {
                    const reporte = generarReporte();
                    navigator.clipboard.writeText(reporte);
                    alert('Reporte de tu sesión copiado al portapapeles.\n\nPuedes guardarlo para hacer seguimiento de tu progreso en los 90 días.');
                  }}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 px-6 py-3 rounded-lg font-bold transition shadow-lg shadow-green-500/50 text-sm sm:text-base touch-manipulation active:scale-95"
                >
                  Copiar Mi Reporte de Sesión
                </button>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
          <button
            onClick={faseAnterior}
            disabled={fase === 0}
            className="flex items-center gap-2 px-6 py-3 bg-slate-700/50 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg font-bold transition border border-slate-600 w-full sm:w-auto"
          >
            <ChevronLeft size={20} /> Atrás
          </button>

          <div className="flex gap-2 flex-wrap justify-center">
            {fases.map((f, idx) => (
              <button
                key={idx}
                onClick={() => setFase(idx)}
                className={`w-10 h-10 rounded-full font-bold transition-all flex items-center justify-center shadow-lg ${
                  idx === fase
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white scale-110 shadow-cyan-500/50'
                    : idx < fase
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-green-500/50'
                    : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600 border border-slate-600'
                }`}
              >
                {idx < fase ? <Check size={20} /> : idx + 1}
              </button>
            ))}
          </div>

          <button
            onClick={siguienteFase}
            disabled={fase === fases.length - 1}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg font-bold transition shadow-lg shadow-cyan-500/50 w-full sm:w-auto"
          >
            Siguiente <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-4xl mx-auto mt-8 sm:mt-12 text-center px-2">
        <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4 sm:p-6 shadow-lg">
          <p className="text-cyan-400 font-semibold mb-2 text-sm sm:text-base">Esta app guía paso-a-paso la práctica TRSB completa (12 minutos)</p>
          <p className="text-slate-300 text-xs sm:text-sm mb-2 sm:mb-3">
            <strong>Primera sesión:</strong> 12 minutos completos (como en el webinar)
          </p>
          <p className="text-slate-300 text-xs sm:text-sm">
            <strong>Práctica diaria:</strong> 5 minutos durante 90 días para transformación permanente
          </p>
        </div>
      </div>
    </div>
  );
}

