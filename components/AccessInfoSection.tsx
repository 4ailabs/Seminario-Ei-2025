import React from 'react';
import { MapPin, Video, Clock, Calendar, CheckCircle, ExternalLink, Phone, Mail, Users, Wifi } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const AccessInfoSection: React.FC = () => {
  const { language } = useLanguage();

  const schedule = [
    {
      day: language === 'es' ? 'Día 1 - Jueves 5 de Diciembre' : 'Day 1 - Thursday, December 5',
      time: '9:00 AM - 6:00 PM',
      activities: language === 'es' 
        ? ['Registro: 8:30 AM', 'Sesión matutina: 9:00 AM - 1:00 PM', 'Comida: 1:00 PM - 2:30 PM', 'Sesión vespertina: 2:30 PM - 6:00 PM']
        : ['Registration: 8:30 AM', 'Morning session: 9:00 AM - 1:00 PM', 'Lunch: 1:00 PM - 2:30 PM', 'Evening session: 2:30 PM - 6:00 PM']
    },
    {
      day: language === 'es' ? 'Día 2 - Viernes 6 de Diciembre' : 'Day 2 - Friday, December 6',
      time: '9:00 AM - 6:00 PM',
      activities: language === 'es'
        ? ['Sesión matutina: 9:00 AM - 1:00 PM', 'Comida: 1:00 PM - 2:30 PM', 'Sesión vespertina: 2:30 PM - 6:00 PM']
        : ['Morning session: 9:00 AM - 1:00 PM', 'Lunch: 1:00 PM - 2:30 PM', 'Evening session: 2:30 PM - 6:00 PM']
    },
    {
      day: language === 'es' ? 'Día 3 - Sábado 7 de Diciembre' : 'Day 3 - Saturday, December 7',
      time: '9:00 AM - 6:00 PM',
      activities: language === 'es'
        ? ['Sesión matutina: 9:00 AM - 1:00 PM', 'Comida: 1:00 PM - 2:30 PM', 'Sesión vespertina: 2:30 PM - 6:00 PM', 'Cierre y entrega de certificados']
        : ['Morning session: 9:00 AM - 1:00 PM', 'Lunch: 1:00 PM - 2:30 PM', 'Evening session: 2:30 PM - 6:00 PM', 'Closing and certificate presentation']
    }
  ];

  const inPersonInfo = {
    location: 'Hotel Galería Plaza Reforma',
    address: 'Paseo de la Reforma 334, Juárez, 06600 Ciudad de México, CDMX',
    phone: '+52 55 5230 1712',
    registration: language === 'es' 
      ? 'Registro el día del evento a partir de las 8:30 AM en el lobby del hotel'
      : 'On-site registration starting at 8:30 AM in the hotel lobby',
    parking: language === 'es'
      ? 'Estacionamiento disponible en el hotel (costo adicional)'
      : 'Parking available at the hotel (additional cost)',
    whatToBring: language === 'es'
      ? ['Identificación oficial', 'Confirmación de inscripción', 'Cuaderno para notas', 'Ropa cómoda']
      : ['Official ID', 'Registration confirmation', 'Notebook for notes', 'Comfortable clothing']
  };

  const onlineInfo = {
    platform: language === 'es' ? 'Plataforma de transmisión profesional' : 'Professional streaming platform',
    access: language === 'es'
      ? 'Recibirás el link de acceso por email 24 horas antes del evento'
      : 'You will receive the access link by email 24 hours before the event',
    requirements: language === 'es'
      ? ['Conexión estable a internet', 'Dispositivo con audio y video', 'Navegador actualizado (Chrome, Firefox, Safari)']
      : ['Stable internet connection', 'Device with audio and video', 'Updated browser (Chrome, Firefox, Safari)'],
    support: language === 'es'
      ? 'Soporte técnico disponible durante todo el evento'
      : 'Technical support available throughout the event'
  };

  return (
    <section id="acceso" className="bg-gradient-to-b from-blue-50 via-white to-slate-50 py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wide shadow-lg">
              {language === 'es' ? 'Información de Acceso' : 'Access Information'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6 text-slate-900 leading-tight tracking-tight">
            {language === 'es' ? 'Todo lo que necesitas saber' : 'Everything you need to know'}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 sm:mb-12 max-w-3xl mx-auto text-center leading-relaxed font-medium">
            {language === 'es'
              ? 'Horarios, ubicación y detalles de acceso para participantes presenciales y online'
              : 'Schedules, location and access details for in-person and online participants'}
          </p>
        </div>

        {/* Schedule Section */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="bg-white rounded-2xl shadow-lg border-2 border-slate-200 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                {language === 'es' ? 'Horario del Evento' : 'Event Schedule'}
              </h3>
            </div>
            <div className="space-y-6">
              {schedule.map((day, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4 sm:pl-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h4 className="text-lg sm:text-xl font-semibold text-slate-900">{day.day}</h4>
                    <div className="flex items-center gap-2 text-blue-600">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="text-sm sm:text-base font-medium">{day.time}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {day.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-slate-700">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Access Options Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* In-Person Access */}
          <div className="bg-white rounded-2xl shadow-lg border-2 border-slate-200 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {language === 'es' ? 'Modalidad Presencial' : 'In-Person Modality'}
                </h3>
              </div>
              <p className="text-blue-100 text-sm sm:text-base">
                {language === 'es' 
                  ? 'Participa directamente en el Hotel Galería Plaza Reforma'
                  : 'Participate directly at Hotel Galería Plaza Reforma'
                }
              </p>
            </div>
            <div className="p-6 sm:p-8">
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                    {language === 'es' ? 'Ubicación' : 'Location'}
                  </h4>
                  <p className="text-slate-700 text-sm sm:text-base mb-1">{inPersonInfo.location}</p>
                  <p className="text-slate-600 text-xs sm:text-sm">{inPersonInfo.address}</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Hotel+Galería+Plaza+Reforma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-xs sm:text-sm mt-2 font-medium"
                  >
                    {language === 'es' ? 'Ver en Google Maps' : 'View on Google Maps'}
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                    {language === 'es' ? 'Registro' : 'Registration'}
                  </h4>
                  <p className="text-slate-700 text-sm sm:text-base">{inPersonInfo.registration}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                    {language === 'es' ? 'Estacionamiento' : 'Parking'}
                  </h4>
                  <p className="text-slate-700 text-sm sm:text-base">{inPersonInfo.parking}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                    {language === 'es' ? 'Qué traer' : 'What to bring'}
                  </h4>
                  <ul className="space-y-1.5">
                    {inPersonInfo.whatToBring.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-700 text-sm sm:text-base">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a
                href={`tel:${inPersonInfo.phone}`}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl text-sm sm:text-base transition-all duration-200 active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                {language === 'es' ? 'Llamar al Hotel' : 'Call Hotel'}
              </a>
            </div>
          </div>

          {/* Online Access */}
          <div className="bg-white rounded-2xl shadow-lg border-2 border-slate-200 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-2">
                <Video className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {language === 'es' ? 'Modalidad Online' : 'Online Modality'}
                </h3>
              </div>
              <p className="text-purple-100 text-sm sm:text-base">
                {language === 'es'
                  ? 'Transmisión en vivo en alta calidad desde cualquier lugar'
                  : 'Live streaming in high quality from anywhere'
                }
              </p>
            </div>
            <div className="p-6 sm:p-8">
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <Wifi className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                    {language === 'es' ? 'Acceso' : 'Access'}
                  </h4>
                  <p className="text-slate-700 text-sm sm:text-base">{onlineInfo.access}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                    {language === 'es' ? 'Requisitos técnicos' : 'Technical requirements'}
                  </h4>
                  <ul className="space-y-1.5">
                    {onlineInfo.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-700 text-sm sm:text-base">
                        <span className="text-purple-600 mt-1">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                    {language === 'es' ? 'Soporte' : 'Support'}
                  </h4>
                  <p className="text-slate-700 text-sm sm:text-base">{onlineInfo.support}</p>
                </div>
              </div>

              <a
                href="https://wa.me/+525579076626?text=Hola%2C%20necesito%20información%20sobre%20el%20acceso%20online%20al%20seminario"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl text-sm sm:text-base transition-all duration-200 active:scale-[0.98]"
              >
                {language === 'es' ? 'Solicitar Link de Acceso' : 'Request Access Link'}
              </a>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="max-w-4xl mx-auto mt-12 sm:mt-16">
          <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 sm:p-8">
            <h4 className="font-bold text-amber-900 mb-4 flex items-center gap-2 text-lg sm:text-xl">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              {language === 'es' ? 'Notas Importantes' : 'Important Notes'}
            </h4>
            <ul className="space-y-3 text-slate-700 text-sm sm:text-base">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-1">•</span>
                <span>
                  {language === 'es'
                    ? 'El registro presencial comienza a las 8:30 AM cada día. Llega con tiempo para evitar retrasos.'
                    : 'In-person registration starts at 8:30 AM each day. Arrive early to avoid delays.'
                  }
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-1">•</span>
                <span>
                  {language === 'es'
                    ? 'Los participantes online recibirán el link de acceso 24 horas antes del evento por email.'
                    : 'Online participants will receive the access link 24 hours before the event by email.'
                  }
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-1">•</span>
                <span>
                  {language === 'es'
                    ? 'Para cualquier duda o problema técnico, contacta por WhatsApp: +52 55 7907 6626'
                    : 'For any questions or technical issues, contact via WhatsApp: +52 55 7907 6626'
                  }
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessInfoSection;

