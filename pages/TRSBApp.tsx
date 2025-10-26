import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Check, Zap, AlertCircle, Clock, Eye, Wind, HelpCircle, Edit3, Heart, Brain, Target, Sparkles, FileText, Download } from 'lucide-react';

interface InputField {
  label: string;
  key: string;
  type: string;
  placeholder?: string;
  min?: number;
  max?: number;
  index?: number;
}

export default function TRSBApp() {
  const [modoSeleccionado, setModoSeleccionado] = useState<'completa' | 'rapida' | null>(null);
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
  const [errorValidacion, setErrorValidacion] = useState('');
  const [datosIniciales, setDatosIniciales] = useState<string>('');
  const [mostrarToast, setMostrarToast] = useState(false);
  const [mensajeToast, setMensajeToast] = useState('');
  const [animandoTransicion, setAnimandoTransicion] = useState(false);

  // Cargar datos del localStorage al iniciar
  useEffect(() => {
    const datosGuardados = localStorage.getItem('trsb_session_data');
    const faseGuardada = localStorage.getItem('trsb_current_fase');
    const modoGuardado = localStorage.getItem('trsb_modo') as 'completa' | 'rapida' | null;

    if (datosGuardados) {
      try {
        setSessionData(JSON.parse(datosGuardados));
        setDatosIniciales(datosGuardados);
      } catch (e) {
        console.error('Error al cargar datos guardados:', e);
      }
    } else {
      setDatosIniciales(JSON.stringify(sessionData));
    }

    if (faseGuardada) {
      setFase(parseInt(faseGuardada));
    }

    if (modoGuardado) {
      setModoSeleccionado(modoGuardado);
    }
  }, []);

  // Guardar datos en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem('trsb_session_data', JSON.stringify(sessionData));
    localStorage.setItem('trsb_current_fase', fase.toString());
    if (modoSeleccionado) {
      localStorage.setItem('trsb_modo', modoSeleccionado);
    }
  }, [sessionData, fase, modoSeleccionado]);

  // Detectar si hay cambios sin guardar y prevenir cierre accidental
  useEffect(() => {
    const verificarCambios = (e: BeforeUnloadEvent) => {
      const datosActuales = JSON.stringify(sessionData);
      const hayCambios = datosActuales !== datosIniciales &&
                         (sessionData.creencia !== '' ||
                          sessionData.ubicacion !== '' ||
                          sessionData.intensidadInicial > 0);

      if (hayCambios && fase < fases.length - 1) {
        e.preventDefault();
        return (e.returnValue = '');
      }
    };

    window.addEventListener('beforeunload', verificarCambios);
    return () => window.removeEventListener('beforeunload', verificarCambios);
  }, [sessionData, datosIniciales, fase]);
  

  const fases = [
    {
      numero: 0,
      nombre: "INICIO",
      duracion: "2 min",
      titulo: "Preparación y Contexto",
      instrucciones: [
        "PREPARACIÓN:Encuentra un lugar tranquilo sin interrupciones",
        "PREPARACIÓN:Siéntate cómodamente con la espalda recta",
        "CONTEXTO:Técnica TRSB: Estimula ambos hemisferios cerebrales para trabajar creencias limitantes",
        "CONTEXTO:Duración: 12 minutos en 4 fases",
        "ACCIÓN:Presiona 'Siguiente' cuando estés listo para comenzar"
      ],
      inputs: [] as InputField[]
    },
    {
      numero: 1,
      nombre: "FASE 1",
      duracion: "2 min",
      titulo: "Identificación de la Creencia",
      instrucciones: [
        "ACCIÓN:Cierra los ojos suavemente o mira hacia abajo",
        "RESPIRACIÓN:Respira profundo 3 veces, lentamente",
        "PREGUNTA:¿Cuál es la creencia que más me limita ahora?",
        "EJEMPLO:No merezco • No soy suficiente • No puedo • El mundo es peligroso",
        "REFLEXIÓN:Deja que la respuesta surja naturalmente, sin forzar",
        "PREGUNTA:¿Dónde siento esta creencia en mi cuerpo?",
        "EJEMPLO:Pecho • Estómago • Garganta • Hombros • Cabeza",
        "PREGUNTA:¿Cómo describirías esa sensación?",
        "EJEMPLO:Presión • Tensión • Nudo • Vacío • Peso • Opresión",
        "EVALUACIÓN:Intensidad de 0 a 10 (donde 0=nada, 10=máximo)",
        "REGISTRO:Anota tus respuestas abajo para medir el cambio"
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
        "ACCIÓN:Cierra los ojos suavemente",
        "RESPIRACIÓN:Respira profundo 3 veces",
        "ATENCIÓN:Lleva tu atención a la sensación corporal que identificaste",
        "OBSERVACIÓN:Siente la sensación sin juzgar, solo observa",
        "RESPIRACIÓN:Respira hacia esa sensación, envíale oxígeno y espacio",
        "CONTEXTO:Vamos a explorar el origen - todo lo que surja es válido",
        "PREGUNTA:¿Cuándo fue la primera vez que sentí esta creencia?",
        "TIEMPO:Tómate 15 segundos - permite que emerja una memoria o emoción",
        "REFLEXIÓN:No fuerces, lo que surja es correcto (claro o difuso)",
        "PREGUNTA:¿Quién me enseñó que esto era verdad?",
        "EJEMPLO:Un padre, una madre, un evento específico",
        "TIEMPO:Tómate 15 segundos",
        "PREGUNTA:¿Se repitió este patrón? ¿Cómo lo usé para protegerme?",
        "TIEMPO:Tómate 15 segundos",
        "RECONOCIMIENTO:Traer esto a la conciencia es valiente - has identificado el patrón"
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
        "POSICIÓN:Cruza brazos sobre el pecho (mano derecha en hombro izquierdo, mano izquierda en hombro derecho)",
        "PREPARACIÓN:Acomódate bien en esta posición para los próximos 5 minutos",
        "ACCIÓN:Palmaditas alternadas - IZQUIERDA... DERECHA... IZQUIERDA... DERECHA",
        "RITMO:1 palmadita cada 2 segundos - lento y deliberado",
        "IMPORTANTE:Mantén el ritmo continuo durante toda la fase",
        "ESTRUCTURA:3 partes a continuación",
        "PARTE A:Reconocimiento (90 seg)",
        "PARTE B:Validación y compasión (60 seg)",
        "PARTE C:Nueva verdad con palmaditas más firmes (90 seg)"
      ],
      subFases: [
        {
          nombre: "PARTE A: RECONOCIMIENTO DE LA HERIDA (90 seg)",
          instrucciones: [
            "INSTRUCCIÓN:Continúa palmaditas alternadas mientras repites MENTALMENTE",
            "FRASE:'Reconozco esa herida' (5 palmaditas)",
            "FRASE:'Veo a ese niño/niña que fue enseñado que [TU CREENCIA]' (5 palmaditas)",
            "FRASE:'No fue mi culpa' (5 palmaditas)",
            "FRASE:'Era un niño/niña que solo quería ser visto, amado, seguro' (5 palmaditas)",
            "FRASE:'Y en su lugar, aprendí miedo' (5 palmaditas)",
            "SILENCIO:Continúa palmaditas 30 segundos en silencio - solo ritmo y sensación"
          ]
        },
        {
          nombre: "PARTE B: VALIDACIÓN Y COMPASIÓN (60 seg)",
          instrucciones: [
            "VISUALIZACIÓN:Imagina a ese niño/niña aquí contigo, mírale con compasión",
            "INSTRUCCIÓN:Continúa palmaditas mientras repites MENTALMENTE",
            "FRASE:'A ti te digo: siento que fuiste lastimado' (5 palmaditas)",
            "FRASE:'Siento que nadie te enseñó que SÍ merecías' (5 palmaditas)",
            "FRASE:'Pero quiero que sepas algo importante' (5 palmaditas)",
            "FRASE:'No merecías ese dolor' (5 palmaditas)",
            "FRASE:'Y lo que te enseñaron NO ES VERDAD' (5 palmaditas)",
            "SILENCIO:Continúa palmaditas 45 segundos - siente la compasión hacia ti"
          ]
        },
        {
          nombre: "PARTE C: INSTALACIÓN DE LA NUEVA VERDAD (90 seg)",
          instrucciones: [
            "CAMBIO:Palmaditas MÁS FIRMES - con convicción y poder",
            "INSTRUCCIÓN:DECLARA MENTALMENTE estas verdades con fuerza",
            "AFIRMACIÓN:'SÍ merezco / SÍ soy suficiente / SÍ puedo' (10 palmaditas firmes)",
            "AFIRMACIÓN:'Merezco/Soy/Puedo porque EXISTO' (10 palmaditas firmes)",
            "AFIRMACIÓN:'Merezco éxito, amor, descanso, seguridad' (10 palmaditas firmes)",
            "AFIRMACIÓN:'Merezco elegir para mí' (10 palmaditas firmes)",
            "AFIRMACIÓN:'Desinstalo el programa viejo AHORA' (10 palmaditas firmes)",
            "AFIRMACIÓN:'Instalo la nueva verdad en cada célula' (10 palmaditas firmes)",
            "SILENCIO:Continúa palmaditas FIRMES 60 segundos - siente la nueva verdad instalándose"
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
        "RALENTIZACIÓN:Disminuye el ritmo de palmaditas lentamente",
        "RITMO:1 palmadita cada 3 segundos - más espaciadas y profundas",
        "ACCIÓN:Haz 5 palmaditas muy lentas, sintiendo cada una",
        "ANCLAJE:Coloca ambas manos sobre tu corazón",
        "RESPIRACIÓN:Respira profundo 3 veces muy lentamente",
        "EJEMPLO:Inhala profundo... exhala... Inhala... exhala... Inhala... exhala",
        "ACCIÓN:Abre los ojos suavemente cuando estés listo",
        "TIEMPO:Tómate 10 segundos para regresar al presente",
        "EVALUACIÓN:¿Qué intensidad tiene ahora la creencia? (escala 0-10)",
        "REGISTRO:Anota el número y observa el cambio",
        "REFLEXIÓN:¿Qué cambió? ¿Qué emergió? ¿Qué sentiste?",
        "RECONOCIMIENTO:Trabajo valiente - tu cerebro reprocesó una creencia de años",
        "PRÁCTICA:Para transformación permanente: 5 min diarios durante 90 días"
      ],
      inputs: [
        { label: "Intensidad final (0-10)", key: "intensidadFinal", type: "number", min: 0, max: 10 },
        { label: "¿Qué cambió? ¿Qué emergió? ¿Qué sentí?", key: "cambios", type: "textarea", placeholder: "Describe: ¿Bajó la intensidad? ¿Surgieron memorias? ¿Emociones? ¿Insights? ¿Cómo te sientes ahora?" }
      ]
    }
  ];
  
  const actualizarInput = (key: string, valor: string | number, index: number | null = null) => {
    if (index !== null) {
      const arr = [...(sessionData[key as keyof typeof sessionData] as string[])];
      arr[index] = valor as string;
      setSessionData({ ...sessionData, [key]: arr });
    } else {
      setSessionData({ ...sessionData, [key]: valor });
    }
    // Limpiar error al escribir
    if (errorValidacion) setErrorValidacion('');
  };

  const validarFaseActual = (): boolean => {
    const fasesActuales = modoSeleccionado === 'rapida'
      ? fases.filter(f => f.numero !== 2)
      : fases;
    const faseAValidar = fasesActuales[fase];

    if (!faseAValidar.inputs || faseAValidar.inputs.length === 0) {
      return true; // Fases sin inputs siempre son válidas
    }

    // Validar cada input de la fase actual
    for (const input of faseAValidar.inputs) {
      if (input.index !== undefined) {
        // Input de array (respuestaHerida)
        const valor = (sessionData[input.key as keyof typeof sessionData] as string[])?.[input.index];
        if (!valor || valor.trim() === '') {
          setErrorValidacion(`Por favor completa: ${input.label}`);
          return false;
        }
      } else {
        // Input simple
        const valor = sessionData[input.key as keyof typeof sessionData];

        if (input.type === 'number') {
          if (valor === 0 || valor === null || valor === undefined) {
            setErrorValidacion(`Por favor completa: ${input.label}`);
            return false;
          }
        } else if (input.type === 'text' || input.type === 'textarea') {
          if (!valor || (valor as string).trim() === '') {
            setErrorValidacion(`Por favor completa: ${input.label}`);
            return false;
          }
        }
      }
    }

    return true;
  };

  const siguienteFase = () => {
    const fasesActuales = modoSeleccionado === 'rapida'
      ? fases.filter(f => f.numero !== 2)
      : fases;

    if (fase < fasesActuales.length - 1) {
      // Validar antes de avanzar
      if (validarFaseActual()) {
        setErrorValidacion('');
        setAnimandoTransicion(true);

        setTimeout(() => {
          setFase(fase + 1);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setAnimandoTransicion(false);
        }, 300);
      }
    }
  };

  const faseAnterior = () => {
    if (fase > 0) {
      setErrorValidacion('');
      setAnimandoTransicion(true);

      setTimeout(() => {
        setFase(fase - 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setAnimandoTransicion(false);
      }, 300);
    }
  };

  const reiniciarSesion = () => {
    if (confirm('¿Estás seguro de que quieres reiniciar la sesión? Se perderá todo el progreso actual.')) {
      localStorage.removeItem('trsb_session_data');
      localStorage.removeItem('trsb_current_fase');
      localStorage.removeItem('trsb_modo');
      setFase(0);
      setModoSeleccionado(null);
      setSessionData({
        fecha: new Date().toLocaleDateString('es-MX'),
        creencia: '',
        ubicacion: '',
        intensidadInicial: 0,
        sensacion: '',
        respuestaHerida: ['', '', ''],
        intensidadFinal: 0,
        cambios: ''
      });
      setErrorValidacion('');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const mostrarNotificacion = (mensaje: string) => {
    setMensajeToast(mensaje);
    setMostrarToast(true);
    setTimeout(() => {
      setMostrarToast(false);
    }, 3000);
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

  // Pantalla de selección de modo
  if (!modoSeleccionado) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white px-3 py-4 sm:p-6 text-slate-800 flex items-center justify-center" style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-y' }}>
        <div className="max-w-4xl w-full mx-auto">
          {/* Back to Home */}
          <div className="mb-6">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-all duration-200 text-sm touch-manipulation active:scale-95 font-medium"
            >
              <ChevronLeft size={18} />
              <span>Volver</span>
            </a>
          </div>

          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 text-slate-900 leading-tight tracking-tight">
              Elige Tu Práctica TRSB
            </h1>
            <p className="text-slate-600 text-base sm:text-lg mb-2 font-normal">
              Selecciona el tipo de sesión que prefieres realizar
            </p>
          </div>

          {/* Opciones de modo */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {/* Modo Completo */}
            <button
              onClick={() => {
                setModoSeleccionado('completa');
                mostrarNotificacion('Modo completo seleccionado (12 min)');
              }}
              className="group bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:border-slate-300 hover:shadow-xl transition-all duration-300 shadow-sm touch-manipulation active:scale-[0.98] text-left"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center group-hover:bg-cyan-100 transition-colors duration-300">
                  <Clock size={24} className="text-cyan-600" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Sesión Completa</h2>
              </div>
              <p className="text-slate-600 text-base sm:text-lg mb-5 font-medium">12 minutos • 5 fases</p>
              <ul className="space-y-2.5 text-slate-700 text-sm sm:text-base mb-6">
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-cyan-500 flex-shrink-0 mt-1" strokeWidth={2.5} />
                  <span className="leading-relaxed">Identificación profunda de la creencia</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-cyan-500 flex-shrink-0 mt-1" strokeWidth={2.5} />
                  <span className="leading-relaxed">Acceso a la herida original</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-cyan-500 flex-shrink-0 mt-1" strokeWidth={2.5} />
                  <span className="leading-relaxed">Reprocesamiento bilateral completo</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-cyan-500 flex-shrink-0 mt-1" strokeWidth={2.5} />
                  <span className="leading-relaxed">Evaluación y anclaje profundo</span>
                </li>
              </ul>
              <div className="bg-cyan-50/50 rounded-xl p-4 border border-cyan-100">
                <p className="text-cyan-900 text-xs sm:text-sm leading-relaxed">
                  <strong className="font-semibold">Recomendado para:</strong> Primera sesión, trabajo profundo, transformación completa
                </p>
              </div>
            </button>

            {/* Modo Rápido */}
            <button
              onClick={() => {
                setModoSeleccionado('rapida');
                mostrarNotificacion('Modo rápido seleccionado (5 min)');
              }}
              className="group bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:border-slate-300 hover:shadow-xl transition-all duration-300 shadow-sm touch-manipulation active:scale-[0.98] text-left"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-colors duration-300">
                  <Zap size={24} className="text-purple-600" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Práctica Rápida</h2>
              </div>
              <p className="text-slate-600 text-base sm:text-lg mb-5 font-medium">5 minutos • 4 fases</p>
              <ul className="space-y-2.5 text-slate-700 text-sm sm:text-base mb-6">
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-purple-500 flex-shrink-0 mt-1" strokeWidth={2.5} />
                  <span className="leading-relaxed">Identificación de la creencia</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-purple-500 flex-shrink-0 mt-1" strokeWidth={2.5} />
                  <span className="leading-relaxed">Reprocesamiento bilateral directo</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-purple-500 flex-shrink-0 mt-1" strokeWidth={2.5} />
                  <span className="leading-relaxed">Evaluación y cierre rápido</span>
                </li>
              </ul>
              <div className="bg-purple-50/50 rounded-xl p-4 border border-purple-100">
                <p className="text-purple-900 text-xs sm:text-sm leading-relaxed">
                  <strong className="font-semibold">Recomendado para:</strong> Práctica diaria de 90 días, mantenimiento, sesiones regulares
                </p>
              </div>
            </button>
          </div>

          {/* Info adicional */}
          <div className="bg-slate-50/50 border border-slate-200 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-cyan-50 flex items-center justify-center">
                <Sparkles size={14} className="text-cyan-600" />
              </div>
              Recomendación
            </h3>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Si es tu primera vez, te recomendamos la <strong className="text-cyan-600 font-semibold">Sesión Completa</strong> para familiarizarte con todo el proceso.
              Para tu práctica diaria de 90 días, usa la <strong className="text-purple-600 font-semibold">Práctica Rápida</strong>.
            </p>
          </div>

          {/* Manual PDF */}
          <a
            href="https://framerusercontent.com/assets/7xbnvz17j6qSeEWlVi4O6dYms0.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-300 hover:shadow-xl transition-all duration-300 shadow-sm touch-manipulation active:scale-[0.98]"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-cyan-50 flex items-center justify-center flex-shrink-0">
                <FileText size={28} className="text-cyan-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900 mb-1 flex items-center gap-2">
                  Manual Completo TRSB
                  <Download size={16} className="text-cyan-600" />
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Descarga el manual detallado con toda la metodología, fundamentos científicos y guías de práctica
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* Toast Notification */}
        {mostrarToast && (
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 animate-slide-up">
            <div className="bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-xl px-6 py-4 shadow-2xl max-w-md mx-4">
              <p className="text-white text-sm sm:text-base text-center leading-relaxed font-medium">
                {mensajeToast}
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Filtrar fases según el modo
  const fasesActuales = modoSeleccionado === 'rapida'
    ? fases.filter(f => f.numero !== 2) // Excluir fase 2 (Acceso a herida original)
    : fases;

  const faseActual = fasesActuales[fase];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white px-3 py-4 sm:p-6 text-slate-800 pb-safe overflow-y-auto overscroll-behavior-y-contain" style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-y' }}>
      {/* Back to Home Button & Reset */}
      <div className="max-w-4xl mx-auto mb-4 flex justify-between items-center">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-all duration-200 text-sm touch-manipulation active:scale-95 font-medium"
        >
          <ChevronLeft size={18} />
          <span>Volver</span>
        </a>
        <button
          onClick={reiniciarSesion}
          className="text-xs text-slate-400 hover:text-red-500 transition-colors duration-200 touch-manipulation active:scale-95 font-medium"
        >
          Reiniciar sesión
        </button>
      </div>

      {/* Header */}
      <div className="max-w-4xl mx-auto mb-6 sm:mb-8">
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 text-slate-900 leading-tight tracking-tight">APP TRSB</h1>
          <p className="text-slate-600 text-sm sm:text-base mb-1 font-normal">Técnica de Reprocesamiento Somato-Cognitivo Bilateral</p>
          <p className="text-slate-500 text-xs sm:text-sm">Tu guía para la práctica diaria de transformación</p>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mb-4">
          <div
            className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 h-full transition-all duration-500"
            style={{ width: `${((fase + 1) / fasesActuales.length) * 100}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-700 font-medium">
            Fase {fase + 1} de {fasesActuales.length} • {faseActual.duracion}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            modoSeleccionado === 'completa'
              ? 'bg-cyan-50 text-cyan-700 border border-cyan-200'
              : 'bg-purple-50 text-purple-700 border border-purple-200'
          }`}>
            {modoSeleccionado === 'completa' ? '12 min' : '5 min'}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto">
        <div className={`bg-white rounded-2xl p-5 sm:p-7 md:p-9 mb-4 sm:mb-6 border border-slate-200 shadow-sm transition-all duration-300 ${
          animandoTransicion ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
        }`}>
          {/* Fase Header */}
          <div className="mb-6 sm:mb-8">
            <div className="text-2xl sm:text-3xl mb-2 text-slate-900 font-semibold">{faseActual.nombre}</div>
            <h2 className="text-xl sm:text-2xl font-medium text-cyan-600 mb-2 sm:mb-4 tracking-tight">{faseActual.titulo}</h2>
          </div>

          {/* Instrucciones */}
          <div className="bg-slate-50/50 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 border border-slate-200">
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-4 sm:mb-5 flex items-center gap-2 pb-3 border-b border-slate-200">
              <div className="w-6 h-6 rounded-full bg-cyan-50 flex items-center justify-center">
                <Zap size={14} className="text-cyan-600" />
              </div>
              Instrucciones
            </h3>
            <div className="space-y-2 sm:space-y-3">
              {faseActual.instrucciones.map((instr, idx) => {
                const [tipo, texto] = instr.includes(':') ? instr.split(':', 2) : ['', instr];

                // Configuración de iconos y colores por tipo
                const tipoConfig: Record<string, { icon: any, color: string, bg: string, border: string }> = {
                  'PREPARACIÓN': { icon: Target, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
                  'ACCIÓN': { icon: Zap, color: 'text-cyan-600', bg: 'bg-cyan-50', border: 'border-cyan-200' },
                  'RESPIRACIÓN': { icon: Wind, color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' },
                  'PREGUNTA': { icon: HelpCircle, color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-200' },
                  'REFLEXIÓN': { icon: Brain, color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-200' },
                  'CONTEXTO': { icon: Sparkles, color: 'text-slate-600', bg: 'bg-slate-100', border: 'border-slate-300' },
                  'TIEMPO': { icon: Clock, color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200' },
                  'REGISTRO': { icon: Edit3, color: 'text-pink-600', bg: 'bg-pink-50', border: 'border-pink-200' },
                  'EJEMPLO': { icon: Sparkles, color: 'text-slate-600', bg: 'bg-slate-100', border: 'border-slate-300' },
                  'ATENCIÓN': { icon: Eye, color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-200' },
                  'OBSERVACIÓN': { icon: Eye, color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-200' },
                  'EVALUACIÓN': { icon: Target, color: 'text-teal-600', bg: 'bg-teal-50', border: 'border-teal-200' },
                  'RECONOCIMIENTO': { icon: Heart, color: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-200' },
                  'POSICIÓN': { icon: Target, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
                  'RITMO': { icon: Clock, color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200' },
                  'IMPORTANTE': { icon: AlertCircle, color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' },
                  'ESTRUCTURA': { icon: Target, color: 'text-slate-600', bg: 'bg-slate-100', border: 'border-slate-300' },
                  'PARTE A': { icon: Sparkles, color: 'text-cyan-600', bg: 'bg-cyan-50', border: 'border-cyan-200' },
                  'PARTE B': { icon: Sparkles, color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-200' },
                  'PARTE C': { icon: Sparkles, color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' },
                  'INSTRUCCIÓN': { icon: Zap, color: 'text-cyan-600', bg: 'bg-cyan-50', border: 'border-cyan-200' },
                  'FRASE': { icon: Heart, color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-200' },
                  'SILENCIO': { icon: Wind, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
                  'VISUALIZACIÓN': { icon: Eye, color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-200' },
                  'AFIRMACIÓN': { icon: Sparkles, color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' },
                  'CAMBIO': { icon: Zap, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' },
                  'RALENTIZACIÓN': { icon: Clock, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
                  'ANCLAJE': { icon: Heart, color: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-200' },
                  'PRÁCTICA': { icon: Target, color: 'text-cyan-600', bg: 'bg-cyan-50', border: 'border-cyan-200' }
                };

                const config = tipoConfig[tipo] || { icon: Zap, color: 'text-slate-600', bg: 'bg-slate-100', border: 'border-slate-300' };
                const IconComponent = config.icon;

                return (
                  <div key={idx} className={`${config.bg}/50 ${config.border} border rounded-xl p-3 sm:p-3.5 transition-all duration-200`}>
                    <div className="flex gap-2.5 sm:gap-3 items-start">
                      <div className={`w-5 h-5 rounded-full ${config.bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <IconComponent size={12} className={`${config.color}`} strokeWidth={2.5} />
                      </div>
                      {tipo && (
                        <span className={`${config.color} font-semibold text-xs uppercase tracking-wide flex-shrink-0`}>
                          {tipo}:
                        </span>
                      )}
                      <p className="text-slate-800 text-sm sm:text-base leading-relaxed flex-1">
                        {texto || instr}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sub-fases (solo para fase 3) */}
          {faseActual.subFases && (
            <div className="bg-slate-50/50 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 border border-slate-200">
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-4 sm:mb-5 pb-3 border-b border-slate-200 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center">
                  <Heart size={14} className="text-purple-600" />
                </div>
                Partes del Reprocesamiento
              </h3>
              <div className="space-y-4">
                {faseActual.subFases.map((subFase, idx) => {
                  // Colores por parte: A=cyan, B=purple, C=green
                  const colores = [
                    { bg: 'bg-cyan-50/50', bgHeader: 'bg-cyan-50', titulo: 'text-cyan-700', border: 'border-cyan-200', iconColor: 'text-cyan-600' },
                    { bg: 'bg-purple-50/50', bgHeader: 'bg-purple-50', titulo: 'text-purple-700', border: 'border-purple-200', iconColor: 'text-purple-600' },
                    { bg: 'bg-green-50/50', bgHeader: 'bg-green-50', titulo: 'text-green-700', border: 'border-green-200', iconColor: 'text-green-600' }
                  ];
                  const color = colores[idx] || colores[0];

                  return (
                    <div key={idx} className={`${color.bg} ${color.border} border rounded-xl p-4 sm:p-5`}>
                      <h4 className={`font-semibold ${color.titulo} mb-4 text-sm sm:text-base flex items-center gap-2`}>
                        <div className={`w-6 h-6 rounded-full ${color.bgHeader} flex items-center justify-center`}>
                          <Heart size={12} className={color.iconColor} strokeWidth={2.5} />
                        </div>
                        {subFase.nombre}
                      </h4>
                      <div className="space-y-2.5">
                        {subFase.instrucciones.map((instr, i) => {
                          const [tipo, texto] = instr.includes(':') ? instr.split(':', 2) : ['', instr];

                          const tipoConfig: Record<string, { icon: any, color: string, bg: string, border: string }> = {
                            'INSTRUCCIÓN': { icon: Zap, color: 'text-cyan-600', bg: 'bg-cyan-50', border: 'border-cyan-200' },
                            'FRASE': { icon: Heart, color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-200' },
                            'SILENCIO': { icon: Wind, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
                            'VISUALIZACIÓN': { icon: Eye, color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-200' },
                            'AFIRMACIÓN': { icon: Sparkles, color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' },
                            'CAMBIO': { icon: Zap, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' }
                          };

                          const config = tipoConfig[tipo] || { icon: Sparkles, color: 'text-slate-600', bg: 'bg-slate-100', border: 'border-slate-300' };
                          const IconComponent = config.icon;

                          return (
                            <div key={i} className={`${config.bg}/50 ${config.border} border rounded-xl p-3 sm:p-3.5 bg-white/60`}>
                              <div className="flex gap-2.5 sm:gap-3 items-start">
                                <div className={`w-5 h-5 rounded-full ${config.bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                  <IconComponent size={12} className={`${config.color}`} strokeWidth={2.5} />
                                </div>
                                {tipo && (
                                  <span className={`${config.color} font-semibold text-xs uppercase tracking-wide flex-shrink-0`}>
                                    {tipo}:
                                  </span>
                                )}
                                <p className="text-slate-800 text-xs sm:text-sm leading-relaxed flex-1">
                                  {texto || instr}
                                </p>
                              </div>
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
            <div className="bg-slate-50/50 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 border border-slate-200">
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-4 sm:mb-5 pb-3 border-b border-slate-200 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-cyan-50 flex items-center justify-center">
                  <Edit3 size={14} className="text-cyan-600" />
                </div>
                Registra Aquí
              </h3>
              <div className="space-y-4">
                {faseActual.inputs.map((input, idx) => (
                  <div key={idx} className="space-y-2">
                    <label className="block text-sm sm:text-base font-medium text-slate-700">
                      {input.label}
                    </label>
                    {input.type === 'textarea' ? (
                      <textarea
                        value={input.index !== undefined ? (sessionData[input.key as keyof typeof sessionData] as string[])?.[input.index] || '' : (sessionData[input.key as keyof typeof sessionData] as string) || ''}
                        onChange={(e) => actualizarInput(input.key, e.target.value, input.index)}
                        placeholder={input.placeholder}
                        rows={3}
                        autoComplete="off"
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 text-sm sm:text-base placeholder-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all resize-none shadow-sm"
                        style={{ minHeight: '80px', maxHeight: '200px', touchAction: 'pan-y' }}
                      />
                    ) : (
                      <input
                        type={input.type}
                        value={input.index !== undefined ? (sessionData[input.key as keyof typeof sessionData] as string[])?.[input.index] || '' : (sessionData[input.key as keyof typeof sessionData] as string | number) || ''}
                        onChange={(e) => actualizarInput(input.key, input.type === 'number' ? parseInt(e.target.value) || 0 : e.target.value, input.index)}
                        placeholder={input.placeholder}
                        min={input.min}
                        max={input.max}
                        inputMode={input.type === 'number' ? 'numeric' : 'text'}
                        autoComplete="off"
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 text-sm sm:text-base placeholder-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all shadow-sm"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Resumen si es última fase */}
          {fase === fases.length - 1 && (
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 mb-6 border border-green-200 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-5 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <Check size={18} className="text-green-600" strokeWidth={2.5} />
                </div>
                Resumen de Tu Sesión
              </h3>
              <div className="space-y-4 text-sm bg-white/80 rounded-xl p-5 mb-5 border border-green-100">
                <div>
                  <span className="text-slate-600 font-medium">Fecha:</span>{' '}
                  <span className="text-slate-900 font-semibold">{sessionData.fecha}</span>
                </div>
                <div>
                  <span className="text-slate-600 font-medium">Mi Creencia:</span>{' '}
                  <span className="text-slate-900 font-semibold">"{sessionData.creencia}"</span>
                </div>
                <div>
                  <span className="text-slate-600 font-medium">Mi Cambio:</span>{' '}
                  <span className="text-2xl font-bold text-green-600">{sessionData.intensidadInicial} → {sessionData.intensidadFinal}</span>
                  {' '}<span className="text-green-600 font-semibold">(-{calcularCambio()} puntos)</span>
                </div>
                {calcularCambio() >= 3 && (
                  <div className="bg-green-100 border border-green-200 rounded-lg p-3 mt-3">
                    <p className="text-green-800 font-semibold text-sm">¡Cambio significativo! Tu sistema nervioso está reprocesando.</p>
                  </div>
                )}
              </div>
                <button
                  onClick={() => {
                    const reporte = generarReporte();
                    navigator.clipboard.writeText(reporte)
                      .then(() => {
                        mostrarNotificacion('✅ Reporte copiado al portapapeles. Guárdalo para seguimiento de tu progreso.');
                      })
                      .catch(() => {
                        mostrarNotificacion('❌ Error al copiar. Por favor, selecciona y copia manualmente.');
                      });
                  }}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-sm text-white text-sm sm:text-base touch-manipulation active:scale-[0.98]"
                >
                  Copiar Mi Reporte de Sesión
                </button>
            </div>
          )}
        </div>

        {/* Error de Validación */}
        {errorValidacion && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4 flex items-start gap-3">
            <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
            <p className="text-red-800 text-sm sm:text-base font-medium">{errorValidacion}</p>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
          <button
            onClick={faseAnterior}
            disabled={fase === 0}
            className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed rounded-xl font-semibold transition-all duration-200 border border-slate-300 w-full sm:w-auto touch-manipulation active:scale-[0.98] text-slate-700"
          >
            <ChevronLeft size={20} strokeWidth={2.5} /> Atrás
          </button>

          <div className="flex gap-2 flex-wrap justify-center">
            {fasesActuales.map((_f, idx) => (
              <div
                key={idx}
                className={`w-9 h-9 rounded-full font-semibold transition-all duration-300 flex items-center justify-center text-sm ${
                  idx === fase
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white scale-110 shadow-md'
                    : idx < fase
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-sm'
                    : 'bg-slate-200 text-slate-500 border border-slate-300'
                }`}
              >
                {idx < fase ? <Check size={18} strokeWidth={3} /> : idx + 1}
              </div>
            ))}
          </div>

          <button
            onClick={siguienteFase}
            disabled={fase === fasesActuales.length - 1}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 disabled:opacity-40 disabled:cursor-not-allowed rounded-xl font-semibold transition-all duration-200 shadow-sm text-white w-full sm:w-auto touch-manipulation active:scale-[0.98]"
          >
            Siguiente <ChevronRight size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-4xl mx-auto mt-8 sm:mt-12 text-center px-2">
        <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-sm">
          <p className={`font-semibold mb-2 text-sm sm:text-base ${
            modoSeleccionado === 'completa' ? 'text-cyan-600' : 'text-purple-600'
          }`}>
            {modoSeleccionado === 'completa'
              ? 'Práctica TRSB Completa (12 minutos)'
              : 'Práctica TRSB Rápida (5 minutos)'}
          </p>
          <p className="text-slate-600 text-xs sm:text-sm">
            {modoSeleccionado === 'completa'
              ? 'Sesión profunda para trabajar creencias desde su origen'
              : 'Práctica diaria para los 90 días de transformación'}
          </p>
        </div>
      </div>

      {/* Toast Notification */}
      {mostrarToast && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 animate-slide-up">
          <div className="bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-xl px-6 py-4 shadow-2xl max-w-md mx-4">
            <p className="text-white text-sm sm:text-base text-center leading-relaxed font-medium">
              {mensajeToast}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

