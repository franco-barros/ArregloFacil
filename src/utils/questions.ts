interface Question {
  text: string;
  category: string;
}

export const questions: Question[] = [
  { text: "El trabajo que realizo ya no me satisface.", category: "RPD" },
  {
    text: "Termino mi jornada laboral demasiado cansado/a para hacer otras actividades.",
    category: "AMF",
  },
  {
    text: "Tengo pocas posibilidades de crecer en mi trabajo.",
    category: "RPD",
  },
  {
    text: "Me siento incapaz de 'desconectar' mentalmente del trabajo.",
    category: "AMF",
  },
  {
    text: "Me cuesta tomar decisiones cuando estoy en el trabajo.",
    category: "RCC",
  },
  {
    text: "Las preocupaciones laborales me impiden dormir o descansar bien.",
    category: "AMF",
  },
  {
    text: "Ya no siento la misma conexión con las personas que trabajo.",
    category: "RPD",
  },
  { text: "Mi trabajo actual es mentalmente agotador.", category: "AMF" },
  {
    text: "En mi trabajo, cada uno se preocupa por sí mismo.",
    category: "RPD",
  },
  { text: "Estoy saturado/a por las demandas del trabajo.", category: "AMF" },
  { text: "Tengo problemas para concentrarme en el trabajo.", category: "RCC" },
  {
    text: "El trabajo que realizo me resulta cada vez más tedioso o sin sentido.",
    category: "RPD",
  },
  {
    text: "Me cuesta aprovechar el tiempo o los materiales que tengo para trabajar.",
    category: "RCC",
  },
  {
    text: "El trabajo me causa dolores de cabeza, tensión muscular o dolores abdominales.",
    category: "AMF",
  },
  {
    text: "Creo que mi rol ya no aporta el mismo valor que antes a la organización.",
    category: "RPD",
  },
  {
    text: "Tengo problemas para asistir al trabajo con regularidad.",
    category: "RCC",
  },
];
