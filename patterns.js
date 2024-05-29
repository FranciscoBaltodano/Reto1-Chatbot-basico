export const patterns = [
    {
        pattern: /\b.*?(hola|buenos días|buenas tardes|buenas noches).*\b/ig,
        responses: [
        "¡Hola! ¿Cómo puedo ayudarte?",
        "¡Buenos días! ¿En qué puedo asistirte?",
        "¡Buenas tardes! ¿Qué necesitas?",
        "¡Buenas noches! ¿Cómo estás?"
      ]
    },
    {
      pattern: /.*\b(adiós|hasta luego|nos vemos)\b.*/i,
      responses: [
        "¡Adiós! Que tengas un buen día.",
        "¡Hasta luego! Cuídate.",
        "Nos vemos pronto."
      ]
    },
    {
      pattern: /.*\b(gracias|muchas gracias|te agradezco)\b.*/i,
      responses: [
        "¡De nada!",
        "¡No hay de qué!",
        "¡Para eso estoy!"
      ]
    },
    {
      pattern: /.*\b(cómo estás|cómo te va|qué tal)\b.*/i,
      responses: [
        "Estoy bien, gracias. ¿Y tú?",
        "Todo bien, ¿y tú?",
        "Muy bien, gracias por preguntar. ¿Cómo estás tú?"
      ]
    },
    {
      pattern: /.*\b(eres|llamas|cuál es tu nombre|cómo te llamas)\b.*/i,
      responses: [
        "Soy un chatbot creado para ayudarte.",
        "Me llamo ChatGPT, ¿y tú?",
        "Mi nombre es ChatGPT. ¿En qué puedo asistirte?"
      ]
    },
    {
      pattern: /.*\b(sirves|funcionas|haces|qué haces|cuál es tu propósito|para qué sirves)\b.*/i,
      responses: [
        "Estoy aquí para responder tus preguntas y asistirte en lo que necesites.",
        "Mi propósito es ayudarte con cualquier duda o problema que tengas.",
        "Puedo responder preguntas, dar información y asistirte en diferentes tareas."
      ]
    },
    {
      pattern: /.*\b(dónde estás|de dónde eres)\b.*/i,
      responses: [
        "Soy un programa de inteligencia artificial, no tengo una ubicación física.",
        "Estoy en la nube, siempre disponible para ayudarte.",
        "No tengo una ubicación física, existo en el mundo digital."
      ]
    },
    {
      pattern: /.*\b(clima|tiempo|qué tiempo hace|cómo está el clima)\b.*/i,
      responses: [
        "No puedo proporcionar el clima actual, pero puedes verificar en una aplicación de clima.",
        "Te recomiendo revisar una app de clima para conocer el tiempo actual.",
        "Para saber el clima actual, consulta un sitio web de pronósticos meteorológicos."
      ]
    },
    {
        pattern: /\b(cancion|canción)\b/i,
        responses: [
          "No sé cantar muy bien, pero puedo intentar: ¿Cuál prefieres? Aquí tienes una: 'Yesterday, all my troubles seemed so far away...'🎵",
          "🎵'Despacito, quiero respirar tu cuello despacito... Quiero desnudarte a besos despacito... Firmo en las paredes de tu laberinto...'🎵",
          "🎵'You are my sunshine, my only sunshine... You make me happy when skies are gray... You'll never know, dear, how much I love you...'🎵",
          "🎵'Don't stop believin', hold on to that feelin'... Streetlight, people, living just to find emotion...'🎵",
          "🎵'Let it go, let it go, can't hold it back anymore... Let it go, let it go, turn away and slam the door...'🎵",
          "🎵'Bohemian Rhapsody, Mama, just killed a man... Put a gun against his head, pulled my trigger, now he's dead...'🎵",
          "🎵'Shape of You, the club isn't the best place to find a lover, so the bar is where I go...'🎵",
          "🎵'Hotel California, such a lovely place, such a lovely face... Plenty of room at the Hotel California...'🎵",
          "🎵'Wonderwall, today is gonna be the day that they're gonna throw it back to you...'🎵",
          "🎵'Smells Like Teen Spirit, load up on guns, bring your friends... Here we are now, entertain us...'🎵",
          "🎵'Wannabe, if you wanna be my lover, you gotta get with my friends... Friendship never ends...'🎵",
          "🎵'Bohemian Rhapsody, is this the real life? Is this just fantasy... Caught in a landslide, no escape from reality...'🎵",
          "🎵'Sweet Caroline, ba ba ba, good times never seemed so good... So good, so good, so good...'🎵",
          "🎵'Don't Stop Believin', just a small town girl, living in a lonely world... She took the midnight train going anywhere...'"
        ]
      }
      
  ];
  