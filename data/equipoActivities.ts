export interface Activity {
    id: string;
    title: string;
    description: string;
    status: 'pending' | 'in-progress' | 'completed';
    dueDate?: string;
    assignedTo?: string;
    priority: 'high' | 'medium' | 'low';
    time?: string; // Hora específica
    platform?: string; // Plataforma (WhatsApp, Email, Instagram, etc.)
    link?: string; // Link o recurso relacionado
    notes?: string; // Notas adicionales
    deliverables?: string[]; // Entregables específicos
}

export interface WeekPlan {
    week: number;
    weekStart: string;
    weekEnd: string;
    activities: Activity[];
}

// Plan Semanal: 27 Oct - 2 Nov
// Meta: 50 → 120 Inscritos
export const equipoActivities: WeekPlan[] = [
    {
        week: 1,
        weekStart: '2025-10-27',
        weekEnd: '2025-11-02',
        activities: [
            {
                id: 'lun-1',
                title: 'Diseño gráficas anuncio',
                description: '3 gráficas intrigantes (pregunta, transformación, misterio)',
                status: 'pending',
                priority: 'high',
                assignedTo: 'Miguel',
                dueDate: '2025-10-27',
                platform: 'Diseño Canva/Photoshop',
                deliverables: [
                    'Gráfica "¿Qué pregunta cambia todo?"',
                    'Gráfica "Transformación"',
                    'Gráfica "Misterio"'
                ],
                notes: 'Usar colores vibrantes, tipografía moderna, mantén intriga sin revelar el tema'
            },
            {
                id: 'lun-2',
                title: 'Tech check Zoom + Facebook Live',
                description: 'Revisar que todo funcione correctamente',
                status: 'pending',
                priority: 'high',
                assignedTo: 'Miguel',
                dueDate: '2025-10-27',
                platform: 'Zoom Pro + Facebook Business',
                deliverables: [
                    'Verificar audio/video',
                    'Configurar pantalla compartida',
                    'Probar Facebook Live simultáneo'
                ],
                notes: 'Usar Zoom Pro para mejor calidad. Verificar conexión estable'
            },
            {
                id: 'lun-3',
                title: 'Carrusel Instagram',
                description: '5 slides "¿Qué pasaría si...?" preguntas transformadoras',
                status: 'pending',
                priority: 'high',
                assignedTo: 'Miguel',
                dueDate: '2025-10-27',
                time: 'Publicar 5:00 PM',
                platform: 'Instagram',
                deliverables: [
                    'Slide 1: "¿Qué harías si nada te limitara?"',
                    'Slide 2: "¿Y si mañana fuera diferente?"',
                    'Slide 3: "¿Cómo sería tu vida si...?"',
                    'Slide 4: "La pregunta que cambia TODO"',
                    'Slide 5: "Jueves 6pm VIVO" + CTA'
                ],
                notes: 'Publicar en feed principal, agregar stickers interactivos'
            },
            {
                id: 'lun-4',
                title: 'Portada webinar',
                description: 'Diseñar slides portada + gráficas chat',
                status: 'pending',
                priority: 'high',
                assignedTo: 'Miguel',
                dueDate: '2025-10-27'
            },
            {
                id: 'lun-5',
                title: 'Segmentar contactos WhatsApp',
                description: 'Clasificar: webinario asistentes, leads, prospectos',
                status: 'pending',
                priority: 'high',
                assignedTo: 'Beto',
                dueDate: '2025-10-27',
                deliverables: [
                    'Lista: Asistentes a webinarios anteriores',
                    'Lista: Leads calientes',
                    'Lista: Prospectos fríos'
                ],
                notes: 'Usar etiquetas en WhatsApp Business para organización'
            },
            {
                id: 'lun-6',
                title: 'Redactar copys anuncio',
                description: 'Anuncio intrigante sin revelar tema',
                status: 'pending',
                priority: 'high',
                assignedTo: 'Beto',
                dueDate: '2025-10-27'
            },
            {
                id: 'lun-7',
                title: 'Preparar listas contactos',
                description: 'Soporte para envíos',
                status: 'pending',
                priority: 'medium',
                assignedTo: 'Paola',
                dueDate: '2025-10-27'
            },
            {
                id: 'mar-1',
                title: 'Tech test Zoom',
                description: 'Testear audio, video, pantalla',
                status: 'pending',
                priority: 'high',
                assignedTo: 'Miguel',
                dueDate: '2025-10-28'
            },
            {
                id: 'mar-2',
                title: 'Editar clips testimoniales',
                description: '2-3 clips para post-webinar',
                status: 'pending',
                priority: 'medium',
                assignedTo: 'Miguel',
                dueDate: '2025-10-28'
            },
            {
                id: 'mar-3',
                title: 'Responder comentarios/DM',
                description: 'Comunidad y engagement del anuncio',
                status: 'pending',
                priority: 'medium',
                assignedTo: 'Beto',
                dueDate: '2025-10-28'
            },
            {
                id: 'mar-4',
                title: 'Crear FAQ',
                description: 'Preguntas frecuentes anticipadas',
                status: 'pending',
                priority: 'medium',
                assignedTo: 'Beto',
                dueDate: '2025-10-28'
            },
            {
                id: 'mie-1',
                title: 'Tech final y backup',
                description: 'Test final + grabar slides respaldo',
                status: 'pending',
                priority: 'high',
                assignedTo: 'Miguel',
                dueDate: '2025-10-29'
            },
            {
                id: 'mie-2',
                title: 'Setup perfecto',
                description: 'Iluminación/micrófono perfectos',
                status: 'pending',
                priority: 'high',
                assignedTo: 'Miguel',
                dueDate: '2025-10-29'
            },
            {
                id: 'mie-3',
                title: 'Diseños Facebook recordatorios',
                description: '8 diseños para Stories',
                status: 'pending',
                priority: 'high',
                assignedTo: 'Miguel',
                dueDate: '2025-10-29'
            },
            {
                id: 'mie-4',
                title: 'Copys urgencia día siguiente',
                description: 'Preparar comunicados con urgencia',
                status: 'pending',
                priority: 'high',
                assignedTo: 'Beto',
                dueDate: '2025-10-29'
            },
            {
                id: 'mie-5',
                title: 'Verificar links landing',
                description: 'Presencial + online funcionales',
                status: 'pending',
                priority: 'high',
                assignedTo: 'Beto',
                dueDate: '2025-10-29'
            },
            {
                id: 'mie-6',
                title: 'Setup final + tech check',
                description: 'Cámara, iluminación, fondo limpio',
                status: 'pending',
                priority: 'high',
                assignedTo: 'Miguel',
                dueDate: '2025-10-30'
            },
            {
                id: 'jue-1',
                title: 'WEBINAR EN VIVO',
                description: '6:00 PM - Facebook Live + Zoom simultáneo (60 min)',
                status: 'pending',
                priority: 'high',
                assignedTo: 'Miguel (Host), Beto (Moderación)',
                dueDate: '2025-10-30',
                time: '6:00 PM - 7:00 PM',
                platform: 'Facebook Live + Zoom simultáneo',
                deliverables: [
                    'Setup completo 5:30 PM',
                    'Transmisión en vivo',
                    'Moderación chat (Beto)',
                    'CTA en cada 5 minutos'
                ],
                notes: 'Estructura: Entrada (2min) - Problema (10min) - La Pregunta (15min) - Demo (10min) - Evidencia (10min) - Integración (10min) - CTA Final (3min)',
                link: 'Link de Zoom y Facebook Live'
            },
            {
                id: 'vie-1',
                title: 'Editar clips webinar',
                description: '3 Reels: 30seg, 45seg, 60seg',
                status: 'pending',
                priority: 'high',
                assignedTo: 'Miguel',
                dueDate: '2025-10-31',
                time: 'Publicar 1pm, 4pm, 7pm',
                platform: 'Instagram, Facebook, TikTok',
                deliverables: [
                    'Reel 1: 30 segundos (momento impactante)',
                    'Reel 2: 45 segundos (explicación)',
                    'Reel 3: 60 segundos (testimonio o insight)'
                ],
                notes: 'Usar transiciones rápidas, música trending, captions llamativos'
            },
            {
                id: 'vie-2',
                title: 'Subir webinar a YouTube',
                description: 'Completo con timestamps',
                status: 'pending',
                priority: 'medium',
                assignedTo: 'Miguel',
                dueDate: '2025-10-31',
                time: 'Publicar 2:00 PM',
                platform: 'YouTube',
                deliverables: [
                    'Video completo con buena calidad',
                    'Thumbnail atractivo',
                    'Descripción con timestamps',
                    'Tags relevantes'
                ],
                notes: 'Timestamps: 0:00 Introducción, 2:00 Problema, 12:00 La Pregunta, etc.'
            },
            {
                id: 'vie-3',
                title: 'Segmentar asistentes webinar',
                description: 'Crear follow-up específico',
                status: 'pending',
                priority: 'high',
                assignedTo: 'Beto',
                dueDate: '2025-10-31'
            },
            {
                id: 'sab-1',
                title: 'Mini-infografía Presencial vs Online',
                description: 'Diseño comparativo',
                status: 'pending',
                priority: 'medium',
                assignedTo: 'Miguel',
                dueDate: '2025-11-01',
                time: 'Publicar Stories: 10am, 3pm, 6pm',
                platform: 'Instagram, Facebook Stories',
                deliverables: [
                    'Diseño comparativo visual',
                    'Mencionar ambas: $9,500 MXN',
                    'Ventajas cada una'
                ],
                notes: 'Usar stickers interactivos, formato vertical para Stories'
            },
            {
                id: 'sab-2',
                title: 'Mini-video 60seg educativo',
                description: 'Contenido adicional',
                status: 'pending',
                priority: 'medium',
                assignedTo: 'Miguel',
                dueDate: '2025-11-01'
            },
            {
                id: 'sab-3',
                title: 'Análisis resultados webinar',
                description: 'Asistentes, leads, conversiones',
                status: 'pending',
                priority: 'high',
                assignedTo: 'Beto',
                dueDate: '2025-11-01'
            },
            {
                id: 'dom-1',
                title: 'Diseño variaciones urgencia',
                description: '3 variaciones "ÚLTIMAS PLAZAS"',
                status: 'pending',
                priority: 'high',
                assignedTo: 'Miguel',
                dueDate: '2025-11-02'
            },
            {
                id: 'dom-2',
                title: 'Mini-testimonial #2',
                description: 'Testimonial participante diferente',
                status: 'pending',
                priority: 'medium',
                assignedTo: 'Miguel',
                dueDate: '2025-11-02'
            },
            {
                id: 'dom-3',
                title: 'Email narrativa transformacional',
                description: 'Final semana',
                status: 'pending',
                priority: 'high',
                assignedTo: 'Beto',
                dueDate: '2025-11-02'
            },
            {
                id: 'dom-4',
                title: 'Análisis final semana',
                description: 'Meta: 120 inscritos totales. Tracking completo',
                status: 'pending',
                priority: 'high',
                assignedTo: 'Beto',
                dueDate: '2025-11-02',
                deliverables: [
                    'Total inscritos (meta: 120)',
                    'Asistentes webinar',
                    'Conversión webinar → inscritos',
                    'Email open rates',
                    'Engagement redes sociales'
                ],
                notes: 'Generar reporte para Miguel. Identificar qué funcionó y qué mejorar'
            }
        ]
    }
];

// Configuración de autenticación
// En producción, usa variables de entorno para mayor seguridad
export const EQUIPO_PASSWORD = 'seminario2025';

// Opcional: puedes crear diferentes passwords para diferentes niveles de acceso
export const ACCESS_LEVELS = {
    admin: 'admin2025',
    equipo: 'seminario2025',
    invitado: 'guest2025'
};
