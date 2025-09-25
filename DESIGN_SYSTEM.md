# 🎨 Design System - Seminario Inteligencia Energética

## Guía Completa de Estilos y Componentes

Este documento contiene todos los estilos, componentes y patrones de diseño utilizados en la aplicación del Seminario de Inteligencia Energética, para que puedas replicar el mismo estilo en otras aplicaciones.

---

## 📋 Tabla de Contenidos

1. [Colores y Paleta](#colores-y-paleta)
2. [Tipografía](#tipografía)
3. [Componentes Base](#componentes-base)
4. [Layouts y Grids](#layouts-y-grids)
5. [Animaciones y Transiciones](#animaciones-y-transiciones)
6. [Iconos y Elementos Visuales](#iconos-y-elementos-visuales)
7. [Responsive Design](#responsive-design)
8. [PWA y Performance](#pwa-y-performance)
9. [Bilingual Support](#bilingual-support)
10. [Chatbot Integration](#chatbot-integration)

---

## 🎨 Colores y Paleta

### **Colores Principales**
```css
/* Fondo Principal */
bg-slate-900          /* Fondo oscuro principal */
bg-slate-800          /* Fondo de secciones alternadas */
bg-slate-700          /* Fondo de cards y elementos */

/* Colores de Acento */
text-cyan-400         /* Color principal de acento */
bg-cyan-500           /* Botones principales */
bg-cyan-600           /* Hover de botones principales */
bg-cyan-500/20        /* Fondo sutil con acento */

/* Colores de Iconos (Estratégicos) */
text-blue-400         /* Materiales/Manuals */
text-green-400        /* Manuales/Protocols */
text-yellow-400       /* Protocolos/Energy */
text-purple-400       /* Certificación/Brain */
text-pink-400         /* App Oficial */
text-orange-400       /* Extensiones 2026 */
text-red-400          /* HeartPulse */
text-emerald-400      /* Briefcase */
text-indigo-400       /* User */

/* Colores de Texto */
text-white            /* Títulos principales */
text-slate-300        /* Texto secundario */
text-slate-400        /* Texto terciario */
text-slate-500        /* Texto deshabilitado */

/* Colores de Estado */
bg-green-500          /* WhatsApp/Éxito */
bg-yellow-400         /* Early Bird/Urgencia */
text-yellow-400       /* Destacados */
```

### **Gradientes**
```css
/* Gradiente Hero */
bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900

/* Gradiente Cards */
bg-gradient-to-br from-slate-800 to-slate-900

/* Gradiente Botones */
bg-gradient-to-r from-cyan-500 to-cyan-600
```

---

## 📝 Tipografía

### **Jerarquía de Títulos**
```css
/* H1 - Título Principal */
text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
font-bold text-white leading-tight

/* H2 - Títulos de Sección */
text-2xl sm:text-3xl md:text-4xl
font-bold text-white leading-tight

/* H3 - Subtítulos */
text-lg sm:text-xl
font-bold text-white

/* P - Texto Principal */
text-sm sm:text-base md:text-lg
text-slate-300 leading-relaxed

/* P - Texto Secundario */
text-sm sm:text-base
text-slate-400 leading-relaxed
```

### **Pesos de Fuente**
```css
font-bold     /* Títulos y elementos importantes */
font-semibold /* Subtítulos y labels */
font-medium   /* Texto destacado */
font-normal   /* Texto regular */
```

---

## 🧩 Componentes Base

### **1. Botón Principal (CTA)**
```jsx
<button className="bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 text-white font-bold py-4 px-8 rounded-full text-base sm:text-lg transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 shadow-lg touch-manipulation ripple btn-enhanced pulse-cta">
  Texto del Botón
</button>
```

### **2. Botón Secundario**
```jsx
<button className="bg-slate-700/50 hover:bg-slate-700 active:bg-slate-600 border border-slate-600 text-white font-bold py-4 px-8 rounded-full text-base sm:text-lg transition duration-300 touch-manipulation ripple btn-enhanced">
  Texto del Botón
</button>
```

### **3. Card de Información**
```jsx
<div className="bg-slate-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group">
  <div className="flex items-center mb-4">
    <div className="p-3 bg-cyan-500/10 rounded-xl group-hover:bg-cyan-500/20 transition-colors duration-300">
      {/* Icono aquí */}
    </div>
  </div>
  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
    Título
  </h3>
  <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
    Descripción
  </p>
</div>
```

### **4. Card de Testimonio**
```jsx
<div className="bg-slate-800 p-6 sm:p-8 rounded-xl border border-slate-700 relative h-full flex flex-col justify-between transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10">
  <div>
    <QuoteIcon className="absolute top-4 left-4 sm:top-6 sm:left-6 w-8 h-8 sm:w-12 sm:h-12 text-slate-700" />
    <p className="relative z-10 text-sm sm:text-base text-slate-300 mb-4 sm:mb-6 italic leading-relaxed">
      "Testimonio aquí"
    </p>
  </div>
  <div className="relative z-10 mt-auto">
    <p className="font-bold text-white text-sm sm:text-base">Nombre</p>
    <p className="text-cyan-400 text-xs sm:text-sm">Rol</p>
  </div>
</div>
```

### **5. Botón Flotante**
```jsx
<button className="fixed bottom-6 right-6 z-50 p-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 active:scale-95">
  <ArrowUp className="w-6 h-6" strokeWidth={2} />
</button>
```

---

## 📐 Layouts y Grids

### **Container Principal**
```jsx
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
  {/* Contenido */}
</div>
```

### **Grid Responsivo - 4 Columnas**
```jsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
  {/* Items */}
</div>
```

### **Grid Responsivo - 3 Columnas**
```jsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
  {/* Items */}
</div>
```

### **Grid Responsivo - 2 Columnas**
```jsx
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
  {/* Items */}
</div>
```

### **Sección con Padding**
```jsx
<section className="py-12 sm:py-16 md:py-24">
  {/* Contenido */}
</section>
```

### **Sección con Fondo Alternado**
```jsx
<section className="bg-slate-900 py-12 sm:py-16 md:py-24">
  {/* Contenido */}
</section>
```

---

## ✨ Animaciones y Transiciones

### **CSS Personalizado (index.html)**
```css
/* Ripple effect para botones */
.ripple {
  position: relative;
  overflow: hidden;
}

.ripple::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.ripple:active::before {
  width: 300px;
  height: 300px;
}

/* Enhanced button animations */
.btn-enhanced {
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-enhanced::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.btn-enhanced:hover::after {
  left: 100%;
}

/* Pulse animation para CTA buttons */
.pulse-cta {
  animation: pulse-cta 2s infinite;
}

@keyframes pulse-cta {
  0% {
    box-shadow: 0 0 0 0 rgba(6, 182, 212, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(6, 182, 212, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(6, 182, 212, 0);
  }
}

/* Fade in animation */
.fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Staggered animations */
.stagger-1 { animation-delay: 0.1s; }
.stagger-2 { animation-delay: 0.2s; }
.stagger-3 { animation-delay: 0.3s; }
.stagger-4 { animation-delay: 0.4s; }
```

### **Transiciones de Tailwind**
```css
/* Transiciones básicas */
transition duration-300 ease-in-out
transition-all duration-300
transition-colors duration-300

/* Transformaciones */
transform hover:scale-105 active:scale-95
transform hover:-translate-y-2
transform hover:scale-110

/* Opacidad */
opacity-0 group-hover:opacity-100
```

---

## 🎯 Iconos y Elementos Visuales

### **Iconos con Lucide React**
```jsx
import { 
  Sparkles, Zap, Compass, MapPin, Gem, Brain, 
  Clock, Cpu, Check, HeartPulse, Briefcase, 
  User, Quote, MessageCircle, Languages, ArrowUp, 
  Timer, BookOpen, FileText, Award, Smartphone, RefreshCw 
} from 'lucide-react';

// Iconos con colores estratégicos
<Brain className="w-7 h-7 text-purple-400" />
<Zap className="w-7 h-7 text-yellow-400" />
<Clock className="w-7 h-7 text-green-400" />
<Cpu className="w-7 h-7 text-blue-400" />
<HeartPulse className="w-7 h-7 text-red-400" />
<Briefcase className="w-7 h-7 text-emerald-400" />
<User className="w-7 h-7 text-indigo-400" />
```

### **Contenedor de Iconos**
```jsx
<div className="p-3 bg-cyan-500/10 rounded-xl group-hover:bg-cyan-500/20 transition-colors duration-300">
  {/* Icono aquí */}
</div>
```

---

## 📱 Responsive Design

### **Breakpoints de Tailwind**
```css
sm: 640px   /* Tablet pequeña */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop pequeño */
xl: 1280px  /* Desktop */
2xl: 1536px /* Desktop grande */
```

### **Patrones Responsivos Comunes**
```jsx
/* Texto responsivo */
className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"

/* Padding responsivo */
className="py-12 sm:py-16 md:py-24"

/* Grid responsivo */
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"

/* Espaciado responsivo */
className="gap-6 sm:gap-8"

/* Padding horizontal responsivo */
className="px-4 sm:px-6 lg:px-8"
```

### **Touch Optimization**
```css
touch-manipulation  /* Mejora la respuesta táctil */
min-h-[44px]       /* Altura mínima para botones táctiles */
min-w-[44px]       /* Ancho mínimo para botones táctiles */
```

---

## ⚡ PWA y Performance

### **Manifest.json**
```json
{
  "name": "Nombre de tu App",
  "short_name": "App Short",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0f172a",
  "theme_color": "#0891b2",
  "icons": [
    {
      "src": "/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### **Service Worker (sw.js)**
```javascript
const CACHE_NAME = 'tu-app-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  'https://cdn.tailwindcss.com'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
```

### **Meta Tags para PWA**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes">
<meta name="theme-color" content="#0891b2">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Tu App">
<link rel="manifest" href="/manifest.json">
```

---

## 🌐 Bilingual Support

### **Estructura de Traducciones**
```typescript
export interface Translations {
  nav: {
    home: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  // ... más secciones
}

export const translations: Record<string, Translations> = {
  es: {
    nav: {
      home: "Inicio",
      about: "Acerca de",
      contact: "Contacto"
    },
    hero: {
      title: "Título en Español",
      subtitle: "Subtítulo en Español",
      cta: "Llamada a la Acción"
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      contact: "Contact"
    },
    hero: {
      title: "Title in English",
      subtitle: "Subtitle in English",
      cta: "Call to Action"
    }
  }
};
```

### **Context de Idioma**
```typescript
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { translations } from './translations';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations['es'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const storedLang = localStorage.getItem('language');
    if (storedLang && (storedLang === 'es' || storedLang === 'en')) {
      return storedLang;
    }
    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'es' ? 'es' : 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
```

### **Toggle de Idioma**
```jsx
<div className="flex items-center gap-2">
  <Languages className="w-4 h-4 text-slate-300" />
  <button
    onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
    className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium"
  >
    {language === 'es' ? 'EN' : 'ES'}
  </button>
</div>
```

---

## 🤖 Chatbot Integration

### **Servicio de Chatbot**
```typescript
export interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export interface ChatResponse {
  text: string;
  success: boolean;
  error?: string;
}

class ChatService {
  private apiKey: string;
  private baseUrl = 'https://api.example.com/chat';

  constructor() {
    this.apiKey = import.meta.env.VITE_CHAT_API_KEY || 'YOUR_API_KEY';
  }

  async sendMessage(message: string, language: 'es' | 'en' = 'es'): Promise<ChatResponse> {
    try {
      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          message,
          language
        })
      });

      const data = await response.json();
      return {
        text: data.response,
        success: true
      };
    } catch (error) {
      return {
        text: language === 'es' 
          ? 'Lo siento, hay un problema técnico. Por favor intenta de nuevo.'
          : 'Sorry, there is a technical issue. Please try again.',
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }
}

export const chatService = new ChatService();
```

### **Componente de Chat Window**
```jsx
import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User, Loader2 } from 'lucide-react';
import { chatService, ChatMessage } from '../services/chatService';
import { useLanguage } from '../LanguageContext';

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ isOpen, onClose }) => {
  const { language, t } = useLanguage();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await chatService.sendMessage(inputMessage, language);
      
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-slate-900 rounded-2xl shadow-2xl w-full max-w-md h-[600px] flex flex-col border border-slate-700">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-cyan-500/20 rounded-lg">
              <Bot className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Asistente Virtual</h3>
              <p className="text-xs text-slate-400">Tu App</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-slate-400" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl p-3 ${
                  message.isUser
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800 text-slate-200'
                }`}
              >
                <div className="flex items-start gap-2">
                  {!message.isUser && (
                    <Bot className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  )}
                  {message.isUser && (
                    <User className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                  )}
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-slate-800 text-slate-200 rounded-2xl p-3">
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-cyan-400" />
                  <Loader2 className="w-4 h-4 animate-spin text-cyan-400" />
                  <span className="text-sm">Escribiendo...</span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-slate-700">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Escribe tu pregunta..."
              className="flex-1 bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isLoading}
              className="p-2 bg-cyan-500 hover:bg-cyan-600 disabled:bg-slate-700 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
```

### **Botón Flotante de Chat**
```jsx
import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import ChatWindow from './ChatWindow';

const ChatButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 p-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 active:scale-95 group"
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
        <div className="absolute inset-0 rounded-full bg-cyan-500 animate-ping opacity-20"></div>
      </button>

      <ChatWindow isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default ChatButton;
```

---

## 🚀 Configuración de Vercel

### **vercel.json**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/sw.js",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=0, must-revalidate"
        }
      ]
    }
  ]
}
```

### **Variables de Entorno**
```bash
# En Vercel Dashboard > Settings > Environment Variables
VITE_CHAT_API_KEY=tu_api_key_aqui
VITE_APP_TITLE=Tu App Title
VITE_APP_DESCRIPTION=Tu App Description
```

---

## 📦 Dependencias Principales

### **package.json**
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.263.1"
  },
  "devDependencies": {
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@vitejs/plugin-react": "^4.0.3",
    "typescript": "^5.0.2",
    "vite": "^4.4.5"
  }
}
```

---

## 🎯 Patrones de Uso

### **1. Estructura de Archivos**
```
src/
├── components/
│   ├── ChatButton.tsx
│   ├── ChatWindow.tsx
│   └── ...
├── services/
│   ├── chatService.ts
│   └── ...
├── translations.ts
├── LanguageContext.tsx
├── App.tsx
└── main.tsx
```

### **2. Orden de Implementación**
1. **Configurar Tailwind CSS**
2. **Crear estructura de traducciones**
3. **Implementar LanguageContext**
4. **Crear componentes base**
5. **Añadir animaciones CSS**
6. **Implementar responsive design**
7. **Configurar PWA**
8. **Integrar chatbot**
9. **Optimizar para Vercel**

### **3. Mejores Prácticas**
- **Consistencia**: Usa siempre las mismas clases de Tailwind
- **Responsive First**: Diseña primero para móvil
- **Performance**: Optimiza imágenes y usa lazy loading
- **Accessibility**: Incluye aria-labels y navegación por teclado
- **SEO**: Usa meta tags apropiados
- **Testing**: Prueba en diferentes dispositivos y navegadores

---

## 🎨 Personalización

### **Cambiar Colores Principales**
1. Reemplaza `cyan-` con tu color preferido
2. Actualiza `theme_color` en manifest.json
3. Modifica gradientes en CSS personalizado

### **Añadir Nuevas Secciones**
1. Crea componente siguiendo el patrón de cards
2. Añade traducciones en `translations.ts`
3. Implementa animaciones con delays escalonados
4. Añade enlace de navegación

### **Modificar Animaciones**
1. Ajusta delays en `AnimatedSection`
2. Modifica duraciones en CSS
3. Cambia efectos de hover en componentes

---

¡Con este design system tienes todo lo necesario para crear aplicaciones con el mismo estilo profesional y moderno! 🎉
