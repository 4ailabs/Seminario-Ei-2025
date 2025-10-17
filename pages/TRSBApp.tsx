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
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 px-3 py-4 sm:p-6 text-white flex items-center justify-center" style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-y' }}>
        <div className="max-w-4xl w-full mx-auto">
          {/* Back to Home */}
          <div className="mb-6">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm touch-manipulation active:scale-95"
            >
              <ChevronLeft size={18} />
              <span>Volver</span>
            </a>
          </div>

          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent leading-tight">
              Elige Tu Práctica TRSB
            </h1>
            <p className="text-slate-300 text-base sm:text-lg mb-2">
              Selecciona el tipo de sesión que prefieres realizar
            </p>
          </div>

          {/* Opciones de modo */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Modo Completo */}
            <button
              onClick={() => {
                setModoSeleccionado('completa');
                mostrarNotificacion('Modo completo seleccionado (12 min)');
              }}
              className="bg-slate-800/80 backdrop-blur-sm border-2 border-cyan-500/50 rounded-2xl p-6 sm:p-8 hover:border-cyan-400 hover:bg-slate-800 transition-all shadow-xl shadow-cyan-500/10 hover:shadow-cyan-500/20 touch-manipulation active:scale-98 text-left"
            >
              <div className="flex items-center gap-3 mb-4">
                <Clock size={32} className="text-cyan-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400">Sesión Completa</h2>
              </div>
              <p className="text-slate-200 text-base sm:text-lg mb-4 font-semibold">12 minutos • 5 fases</p>
              <ul className="space-y-3 text-slate-300 text-sm sm:text-base mb-6">
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Identificación profunda de la creencia</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Acceso a la herida original</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Reprocesamiento bilateral completo</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Evaluación y anclaje profundo</span>
                </li>
              </ul>
              <div className="bg-cyan-900/30 rounded-lg p-4 border border-cyan-500/30">
                <p className="text-cyan-200 text-xs sm:text-sm">
                  <strong>Recomendado para:</strong> Primera sesión, trabajo profundo, transformación completa
                </p>
              </div>
            </button>

            {/* Modo Rápido */}
            <button
              onClick={() => {
                setModoSeleccionado('rapida');
                mostrarNotificacion('Modo rápido seleccionado (5 min)');
              }}
              className="bg-slate-800/80 backdrop-blur-sm border-2 border-purple-500/50 rounded-2xl p-6 sm:p-8 hover:border-purple-400 hover:bg-slate-800 transition-all shadow-xl shadow-purple-500/10 hover:shadow-purple-500/20 touch-manipulation active:scale-98 text-left"
            >
              <div className="flex items-center gap-3 mb-4">
                <Zap size={32} className="text-purple-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-purple-400">Práctica Rápida</h2>
              </div>
              <p className="text-slate-200 text-base sm:text-lg mb-4 font-semibold">5 minutos • 4 fases</p>
              <ul className="space-y-3 text-slate-300 text-sm sm:text-base mb-6">
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Identificación de la creencia</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Reprocesamiento bilateral directo</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Evaluación y cierre rápido</span>
                </li>
              </ul>
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-500/30">
                <p className="text-purple-200 text-xs sm:text-sm">
                  <strong>Recomendado para:</strong> Práctica diaria de 90 días, mantenimiento, sesiones regulares
                </p>
              </div>
            </button>
          </div>

          {/* Info adicional */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-bold text-cyan-400 mb-3 flex items-center gap-2">
              <Sparkles size={20} />
              Recomendación
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
              Si es tu primera vez, te recomendamos la <strong className="text-cyan-400">Sesión Completa</strong> para familiarizarte con todo el proceso.
              Para tu práctica diaria de 90 días, usa la <strong className="text-purple-400">Práctica Rápida</strong>.
            </p>
          </div>

          {/* Manual PDF */}
          <a
            href="https://framerusercontent.com/assets/7xbnvz17j6qSeEWlVi4O6dYms0.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-500/40 rounded-xl p-6 hover:border-cyan-400/60 hover:from-cyan-900/40 hover:to-blue-900/40 transition-all shadow-lg hover:shadow-cyan-500/20 touch-manipulation active:scale-98"
          >
            <div className="flex items-center gap-4">
              <div className="bg-cyan-500/20 p-4 rounded-lg">
                <FileText size={32} className="text-cyan-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-cyan-300 mb-1 flex items-center gap-2">
                  Manual Completo TRSB
                  <Download size={18} className="text-cyan-400" />
                </h3>
                <p className="text-slate-300 text-sm">
                  Descarga el manual detallado con toda la metodología, fundamentos científicos y guías de práctica
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* Toast Notification */}
        {mostrarToast && (
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 animate-slide-up">
            <div className="bg-slate-800/95 backdrop-blur-md border border-cyan-500/50 rounded-xl px-6 py-4 shadow-2xl shadow-cyan-500/20 max-w-md mx-4">
              <p className="text-white text-sm sm:text-base text-center leading-relaxed">
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
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 px-3 py-4 sm:p-6 text-white pb-safe overflow-y-auto overscroll-behavior-y-contain" style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-y' }}>
      {/* Back to Home Button & Reset */}
      <div className="max-w-4xl mx-auto mb-3 flex justify-between items-center">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm touch-manipulation active:scale-95"
        >
          <ChevronLeft size={18} />
          <span>Volver</span>
        </a>
        <button
          onClick={reiniciarSesion}
          className="text-xs text-slate-400 hover:text-red-400 transition-colors touch-manipulation active:scale-95"
        >
          Reiniciar sesión
        </button>
      </div>

      {/* Header */}
      <div className="max-w-4xl mx-auto mb-6 sm:mb-8">
        <div className="text-center mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent leading-tight">APP TRSB</h1>
          <p className="text-cyan-200 text-sm sm:text-base mb-1">Técnica de Reprocesamiento Somato-Cognitivo Bilateral</p>
          <p className="text-slate-400 text-xs sm:text-sm mb-3">Tu guía para la práctica diaria de transformación</p>
          
          {/* Enlace al Manual */}
          <a
            href="https://framerusercontent.com/assets/7xbnvz17j6qSeEWlVi4O6dYms0.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cyan-900/30 hover:bg-cyan-900/50 border border-cyan-500/30 hover:border-cyan-400/50 rounded-lg px-4 py-2 text-cyan-300 hover:text-cyan-200 transition-all text-sm touch-manipulation active:scale-95"
          >
            <FileText size={16} />
            <span>Ver Manual Completo</span>
            <Download size={14} />
          </a>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-700/50 h-3 rounded-full overflow-hidden mb-4 shadow-inner">
          <div
            className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 h-full transition-all duration-500 shadow-lg shadow-cyan-500/50"
            style={{ width: `${((fase + 1) / fasesActuales.length) * 100}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-cyan-200 font-medium">
            Fase {fase + 1} de {fasesActuales.length} • {faseActual.duracion}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
            modoSeleccionado === 'completa'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
              : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
          }`}>
            {modoSeleccionado === 'completa' ? '12 min' : '5 min'}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto">
        <div className={`bg-slate-800/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 border border-slate-700 shadow-xl shadow-cyan-500/5 transition-all duration-300 ${
          animandoTransicion ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
        }`}>
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
            <div className="space-y-2 sm:space-y-3">
              {faseActual.instrucciones.map((instr, idx) => {
                const [tipo, texto] = instr.includes(':') ? instr.split(':', 2) : ['', instr];

                // Configuración de iconos y colores por tipo
                const tipoConfig: Record<string, { icon: any, color: string, bg: string, border: string }> = {
                  'PREPARACIÓN': { icon: Target, color: 'text-blue-400', bg: 'bg-blue-900/20', border: 'border-blue-500/30' },
                  'ACCIÓN': { icon: Zap, color: 'text-cyan-400', bg: 'bg-cyan-900/20', border: 'border-cyan-500/30' },
                  'RESPIRACIÓN': { icon: Wind, color: 'text-green-400', bg: 'bg-green-900/20', border: 'border-green-500/30' },
                  'PREGUNTA': { icon: HelpCircle, color: 'text-yellow-400', bg: 'bg-yellow-900/20', border: 'border-yellow-500/30' },
                  'REFLEXIÓN': { icon: Brain, color: 'text-purple-400', bg: 'bg-purple-900/20', border: 'border-purple-500/30' },
                  'CONTEXTO': { icon: Sparkles, color: 'text-slate-400', bg: 'bg-slate-800/30', border: 'border-slate-600/30' },
                  'TIEMPO': { icon: Clock, color: 'text-orange-400', bg: 'bg-orange-900/20', border: 'border-orange-500/30' },
                  'REGISTRO': { icon: Edit3, color: 'text-pink-400', bg: 'bg-pink-900/20', border: 'border-pink-500/30' },
                  'EJEMPLO': { icon: Sparkles, color: 'text-slate-400', bg: 'bg-slate-800/20', border: 'border-slate-600/20' },
                  'ATENCIÓN': { icon: Eye, color: 'text-indigo-400', bg: 'bg-indigo-900/20', border: 'border-indigo-500/30' },
                  'OBSERVACIÓN': { icon: Eye, color: 'text-indigo-400', bg: 'bg-indigo-900/20', border: 'border-indigo-500/30' },
                  'EVALUACIÓN': { icon: Target, color: 'text-teal-400', bg: 'bg-teal-900/20', border: 'border-teal-500/30' },
                  'RECONOCIMIENTO': { icon: Heart, color: 'text-rose-400', bg: 'bg-rose-900/20', border: 'border-rose-500/30' },
                  'POSICIÓN': { icon: Target, color: 'text-blue-400', bg: 'bg-blue-900/20', border: 'border-blue-500/30' },
                  'RITMO': { icon: Clock, color: 'text-orange-400', bg: 'bg-orange-900/20', border: 'border-orange-500/30' },
                  'IMPORTANTE': { icon: AlertCircle, color: 'text-red-400', bg: 'bg-red-900/20', border: 'border-red-500/30' },
                  'ESTRUCTURA': { icon: Target, color: 'text-slate-400', bg: 'bg-slate-800/30', border: 'border-slate-600/30' },
                  'PARTE A': { icon: Sparkles, color: 'text-cyan-400', bg: 'bg-cyan-900/20', border: 'border-cyan-500/30' },
                  'PARTE B': { icon: Sparkles, color: 'text-purple-400', bg: 'bg-purple-900/20', border: 'border-purple-500/30' },
                  'PARTE C': { icon: Sparkles, color: 'text-green-400', bg: 'bg-green-900/20', border: 'border-green-500/30' },
                  'INSTRUCCIÓN': { icon: Zap, color: 'text-cyan-400', bg: 'bg-cyan-900/20', border: 'border-cyan-500/30' },
                  'FRASE': { icon: Heart, color: 'text-purple-300', bg: 'bg-purple-900/10', border: 'border-purple-500/20' },
                  'SILENCIO': { icon: Wind, color: 'text-blue-300', bg: 'bg-blue-900/20', border: 'border-blue-500/30' },
                  'VISUALIZACIÓN': { icon: Eye, color: 'text-indigo-400', bg: 'bg-indigo-900/20', border: 'border-indigo-500/30' },
                  'AFIRMACIÓN': { icon: Sparkles, color: 'text-green-400', bg: 'bg-green-900/20', border: 'border-green-500/30' },
                  'CAMBIO': { icon: Zap, color: 'text-amber-400', bg: 'bg-amber-900/20', border: 'border-amber-500/30' },
                  'RALENTIZACIÓN': { icon: Clock, color: 'text-blue-400', bg: 'bg-blue-900/20', border: 'border-blue-500/30' },
                  'ANCLAJE': { icon: Heart, color: 'text-rose-400', bg: 'bg-rose-900/20', border: 'border-rose-500/30' },
                  'PRÁCTICA': { icon: Target, color: 'text-cyan-400', bg: 'bg-cyan-900/20', border: 'border-cyan-500/30' }
                };

                const config = tipoConfig[tipo] || { icon: Zap, color: 'text-slate-400', bg: 'bg-slate-800/20', border: 'border-slate-600/20' };
                const IconComponent = config.icon;

                return (
                  <div key={idx} className={`${config.bg} ${config.border} border rounded-lg p-2.5 sm:p-3 transition-all hover:scale-[1.01]`}>
                    <div className="flex gap-2 sm:gap-3 items-start">
                      <IconComponent size={18} className={`${config.color} flex-shrink-0 mt-0.5`} />
                      {tipo && (
                        <span className={`${config.color} font-bold text-xs uppercase tracking-wide flex-shrink-0`}>
                          {tipo}:
                        </span>
                      )}
                      <p className="text-slate-100 text-sm sm:text-base leading-relaxed flex-1">
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
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 mb-4 sm:mb-6 border border-purple-500/30">
              <h3 className="text-base sm:text-lg font-bold text-purple-400 mb-4 sm:mb-5 pb-3 border-b border-purple-500/20">Partes del Reprocesamiento</h3>
              <div className="space-y-4 sm:space-y-5">
                {faseActual.subFases.map((subFase, idx) => {
                  // Colores por parte: A=cyan, B=purple, C=green
                  const colores = [
                    { bg: 'bg-cyan-900/20', titulo: 'text-cyan-300', border: 'border-cyan-500/30' },
                    { bg: 'bg-purple-900/20', titulo: 'text-purple-300', border: 'border-purple-500/30' },
                    { bg: 'bg-green-900/20', titulo: 'text-green-300', border: 'border-green-500/30' }
                  ];
                  const color = colores[idx] || colores[0];

                  return (
                    <div key={idx} className={`${color.bg} ${color.border} border rounded-lg p-3 sm:p-4`}>
                      <h4 className={`font-bold ${color.titulo} mb-3 text-sm sm:text-base flex items-center gap-2`}>
                        <Heart size={16} className={color.titulo} />
                        {subFase.nombre}
                      </h4>
                      <div className="space-y-2">
                        {subFase.instrucciones.map((instr, i) => {
                          const [tipo, texto] = instr.includes(':') ? instr.split(':', 2) : ['', instr];

                          const tipoConfig: Record<string, { icon: any, color: string, bg: string, border: string }> = {
                            'INSTRUCCIÓN': { icon: Zap, color: 'text-cyan-400', bg: 'bg-cyan-900/20', border: 'border-cyan-500/30' },
                            'FRASE': { icon: Heart, color: 'text-purple-300', bg: 'bg-purple-900/10', border: 'border-purple-500/20' },
                            'SILENCIO': { icon: Wind, color: 'text-blue-300', bg: 'bg-blue-900/20', border: 'border-blue-500/30' },
                            'VISUALIZACIÓN': { icon: Eye, color: 'text-indigo-400', bg: 'bg-indigo-900/20', border: 'border-indigo-500/30' },
                            'AFIRMACIÓN': { icon: Sparkles, color: 'text-green-400', bg: 'bg-green-900/20', border: 'border-green-500/30' },
                            'CAMBIO': { icon: Zap, color: 'text-amber-400', bg: 'bg-amber-900/20', border: 'border-amber-500/30' }
                          };

                          const config = tipoConfig[tipo] || { icon: Sparkles, color: 'text-slate-400', bg: 'bg-slate-800/20', border: 'border-slate-600/20' };
                          const IconComponent = config.icon;

                          return (
                            <div key={i} className={`${config.bg} ${config.border} border rounded-lg p-2 sm:p-2.5`}>
                              <div className="flex gap-2 items-start">
                                <IconComponent size={16} className={`${config.color} flex-shrink-0 mt-0.5`} />
                                {tipo && (
                                  <span className={`${config.color} font-bold text-xs uppercase tracking-wide flex-shrink-0`}>
                                    {tipo}:
                                  </span>
                                )}
                                <p className="text-slate-100 text-xs sm:text-sm leading-relaxed flex-1">
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
                        autoComplete="off"
                        className="w-full bg-slate-700/50 border border-cyan-500/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white text-sm sm:text-base placeholder-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none"
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
                    navigator.clipboard.writeText(reporte)
                      .then(() => {
                        mostrarNotificacion('✅ Reporte copiado al portapapeles. Guárdalo para seguimiento de tu progreso.');
                      })
                      .catch(() => {
                        mostrarNotificacion('❌ Error al copiar. Por favor, selecciona y copia manualmente.');
                      });
                  }}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 px-6 py-3 rounded-lg font-bold transition shadow-lg shadow-green-500/50 text-sm sm:text-base touch-manipulation active:scale-95"
                >
                  Copiar Mi Reporte de Sesión
                </button>
            </div>
          )}
        </div>

        {/* Error de Validación */}
        {errorValidacion && (
          <div className="bg-red-900/50 border border-red-500/50 rounded-lg p-4 mb-4 flex items-start gap-3 animate-pulse">
            <AlertCircle size={20} className="text-red-400 flex-shrink-0 mt-0.5" />
            <p className="text-red-200 text-sm sm:text-base">{errorValidacion}</p>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
          <button
            onClick={faseAnterior}
            disabled={fase === 0}
            className="flex items-center gap-2 px-6 py-3 bg-slate-700/50 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg font-bold transition border border-slate-600 w-full sm:w-auto touch-manipulation active:scale-95"
          >
            <ChevronLeft size={20} /> Atrás
          </button>

          <div className="flex gap-2 flex-wrap justify-center">
            {fasesActuales.map((_f, idx) => (
              <div
                key={idx}
                className={`w-10 h-10 rounded-full font-bold transition-all flex items-center justify-center shadow-lg ${
                  idx === fase
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white scale-110 shadow-cyan-500/50'
                    : idx < fase
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-green-500/50'
                    : 'bg-slate-700/50 text-slate-400 border border-slate-600'
                }`}
              >
                {idx < fase ? <Check size={20} /> : idx + 1}
              </div>
            ))}
          </div>

          <button
            onClick={siguienteFase}
            disabled={fase === fasesActuales.length - 1}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg font-bold transition shadow-lg shadow-cyan-500/50 w-full sm:w-auto touch-manipulation active:scale-95"
          >
            Siguiente <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-4xl mx-auto mt-8 sm:mt-12 text-center px-2">
        <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4 sm:p-6 shadow-lg">
          <p className={`font-semibold mb-2 text-sm sm:text-base ${
            modoSeleccionado === 'completa' ? 'text-cyan-400' : 'text-purple-400'
          }`}>
            {modoSeleccionado === 'completa'
              ? 'Práctica TRSB Completa (12 minutos)'
              : 'Práctica TRSB Rápida (5 minutos)'}
          </p>
          <p className="text-slate-300 text-xs sm:text-sm">
            {modoSeleccionado === 'completa'
              ? 'Sesión profunda para trabajar creencias desde su origen'
              : 'Práctica diaria para los 90 días de transformación'}
          </p>
        </div>
      </div>

      {/* Toast Notification */}
      {mostrarToast && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 animate-slide-up">
          <div className="bg-slate-800/95 backdrop-blur-md border border-cyan-500/50 rounded-xl px-6 py-4 shadow-2xl shadow-cyan-500/20 max-w-md mx-4">
            <p className="text-white text-sm sm:text-base text-center leading-relaxed">
              {mensajeToast}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

