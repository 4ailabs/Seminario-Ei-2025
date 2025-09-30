import React from 'react';
import { 
  MapPin, 
  Sparkles, 
  Gem, 
  Brain, 
  Zap, 
  Clock, 
  Cpu, 
  Check, 
  HeartPulse, 
  Briefcase, 
  User, 
  Quote, 
  MessageCircle,
  BookOpen,
  FileText,
  Award,
  Smartphone,
  RefreshCw
} from 'lucide-react';

// Iconos optimizados con memoización
export const MapPinIcon = React.memo(({ className = "w-6 h-6" }: { className?: string }) => 
  <MapPin className={className} strokeWidth={1.5} />
);

export const SparklesIcon = React.memo(({ className = "w-6 h-6" }: { className?: string }) => 
  <Sparkles className={className} strokeWidth={1.5} />
);

export const GemIcon = React.memo(({ className = "w-6 h-6" }: { className?: string }) => 
  <Gem className={className} strokeWidth={1.5} />
);

export const BrainIcon = React.memo(() => 
  <Brain className="w-7 h-7" strokeWidth={1.5} />
);

export const EnergyIcon = React.memo(() => 
  <Zap className="w-7 h-7" strokeWidth={1.5} />
);

export const DecisionIcon = React.memo(() => 
  <Clock className="w-7 h-7" strokeWidth={1.5} />
);

export const CpuIcon = React.memo(({ className = "w-7 h-7" }: { className?: string }) => 
  <Cpu className={className} strokeWidth={1.5} />
);

export const CheckIcon = React.memo(({ className = "w-6 h-6 mr-3 text-cyan-400 flex-shrink-0 mt-1" }: { className?: string }) => 
  <Check className={className} strokeWidth={1.5} />
);

export const HeartPulseIcon = React.memo(({ className = "w-7 h-7" }: { className?: string }) => 
  <HeartPulse className={className} strokeWidth={1.5} />
);

export const BriefcaseIcon = React.memo(({ className = "w-7 h-7" }: { className?: string }) => 
  <Briefcase className={className} strokeWidth={1.5} />
);

export const UserIcon = React.memo(({ className = "w-7 h-7" }: { className?: string }) => 
  <User className={className} strokeWidth={1.5} />
);

export const QuoteIcon = React.memo(({ className = "w-6 h-6" }: { className?: string }) => 
  <Quote className={className} strokeWidth={1.5} />
);

export const WhatsAppIcon = React.memo(({ className = "w-6 h-6" }: { className?: string }) => 
  <MessageCircle className={className} strokeWidth={1.5} />
);

// Iconos para includes
export const BookOpenIcon = React.memo(({ className = "w-6 h-6" }: { className?: string }) => 
  <BookOpen className={className} strokeWidth={1.5} />
);

export const FileTextIcon = React.memo(({ className = "w-6 h-6" }: { className?: string }) => 
  <FileText className={className} strokeWidth={1.5} />
);

export const AwardIcon = React.memo(({ className = "w-6 h-6" }: { className?: string }) => 
  <Award className={className} strokeWidth={1.5} />
);

export const SmartphoneIcon = React.memo(({ className = "w-6 h-6" }: { className?: string }) => 
  <Smartphone className={className} strokeWidth={1.5} />
);

export const RefreshCwIcon = React.memo(({ className = "w-6 h-6" }: { className?: string }) => 
  <RefreshCw className={className} strokeWidth={1.5} />
);
