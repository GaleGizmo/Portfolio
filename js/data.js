export const projectsData = [
  {
    esName: "Rock the Barrio",
    engName: "Rock the Barrio",
    images: [
      "assets/img/rtbhome800x527.jpg",
      "assets/img/rtbdetails800x527.jpg",
      "assets/img/rtbedituser800x527.jpg",
      "assets/img/rtbhome_withmap800x527.jpg",
      "assets/img/rtblogin800x527.jpg",
      "assets/img/rtb_mobile_varios800x527.jpg",
    ],
    techs: { frontend: "React JS", backend: "Node.js", ddbb: "MongoDB" },
    libraries: [
      " Redux",
      " Axios",
      " Toastify",
      " GoogleMaps",
      " Gmail",
      " Bootstrap",
      " Cloudinary",
      " Nodemail",
      " Cron",
      " Date-fns",
      " Calendar",
      " Dropzone",
      " Express",
      " Mongoose",
      " Bcrypt",
      " Dotenv",
      " jwt",
      " googleapis",
    ],
    engDescription:
      "Musical events website for the Santiago de Compostela area. Registered users can comment and rate events, as well as create a list of favorite events. Registering also provides the option to receive emails with weekly events, favorites, and the latest added events.",
    esDescription:
      "Web de eventos musicales para el área de Santiago de Compostela. Los usuarios registrados pueden comentar y valorar eventos, así como crear una lista de eventos favoritos. Registrarse da opción además a recibir correos con los eventos semanales, favoritos y últimos eventos añadidos.",
    url: "https://rock-the-barrio-front-one.vercel.app/",
    github: "https://github.com/GaleGizmo/RockTheBarrioFront",
  },
  {
    esName: "Gestor de empleados",
    engName: "Employee manager",
    images: ["assets/img/GS_home800x527.jpg"],
    techs: { frontend: "HTML/JS", backend: "Node.js", ddbb: "MongoDB" },
    libraries: [" Express", " Mongoose", " Bcrypt", " Dotenv", " jwt"],
    engDescription:
      "Initial version of a web application for the assessment of workers by their supervisors. A real project for a company based in Madrid.",
    esDescription:
      "Primera versión de una aplicación web para valoración de operarios por parte de sus supervisores. Proyecto real para una empresa de Madrid.",
    url: "https://rock-the-barrio-front-one.vercel.app/",
    github: "https://github.com/GaleGizmo/RockTheBarrioFront",
  },
  {
    esName: "Álbumes Legendarios",
    engName: "Legendary Albums",
    images: ["assets/img/legendary_home800x527.jpg"],
    techs: { frontend: "Angular JS", backend: "Node.js", ddbb: "MongoDB" },
    libraries: [
      " Cloudinary",
      " Rxjs",
      " Seedrandom",
      " Tslib",
      " Zone",
      " Express",
      " Mongoose",
      " Bcrypt",
      " Dotenv",
      " jwt",
    ],
    engDescription:
      "Website that displays a list of legendary albums from the 20th and 21st centuries, with access to detailed information for each album. It includes complete CRUD (Create, Read, Update, Delete) functionality for the albums",
    esDescription:
      "Web que muestra un listado de álbumes legendarios de los siglos XX y XXI, con acceso a información detallada de cada álbum. Incluye CRUD completo de los álbumes.",
    url: "https://rock-the-barrio-front-one.vercel.app/",
    github: "https://github.com/GaleGizmo/RockTheBarrioFront",
  },
  {
    esName: "The Pixies",
    engName: "The Pixies",
    images: [
      "assets/img/pixies_home800x527.jpg",
      "assets/img/pixies_form.jpg",
      "assets/img/pixies_albumes.jpg",
    ],
    techs: { frontend: "Symfony(Twig)", backend: "Symfony", ddbb: "MySQL" },
    libraries: [" Bootstrap", " jquery", " babel", " sass"],
    engDescription:
      "Compilation of The Pixies albums, with full CRUD functionality and user management. A fairly basic-level project, PHP is not the language I feel most comfortable with",
    esDescription:
      "Recopilación de álbumes de The Pixies, con CRUD completo y gestión de usuarios. Proyecto de un nivel bastante básico, PHP no es el lenguaje en que me siento más cómodo.",
    url: "https://rock-the-barrio-front-one.vercel.app/",
    github: "https://github.com/GaleGizmo/RockTheBarrioFront",
  },
];

export const aboutText = [
  {
    engAboutTitle: "About Me",
    engViewCV:"View Resume",
    engAboutContent: " Hi! My name is Miguel Abelleira, and I'm a Junior Full Stack Developer based in Santiago de Compostela, Spain. After more than twenty years working in pharmaceutical industry, in 2022 I decided to make a 180º turn in my life and focus my career on one of my two major passions: programming. \nAs a result I've recently completed an intensive Full Stack Developer BootCamp with UpgradeHub, which has probably been one of the best decisions I've ever made. Oh, and in case you're wondering, my other big passion is music!",
  },
  {
    esAboutTitle:"Sobre mí",
    esViewCV:"Ver mi CV",
    esAboutContent: "¡Hola! Mi nombre es Miguel Abelleira y soy un Desarrollador Full Stack Junior actualmente ubicado en Santiago de Compostela, España. Después de más de veinte años trabajando en la industria farmacéutica, en 2022 decidí dar un giro de 180 grados en mi vida y centrar mi carrera profesional en una de mis dos grandes pasiones: la programación. \nComo resultado, recientemente he terminado un BootCamp de Desarrollo Full Stack con UpgradeHub, lo cual probablemente ha sido una de las mejores decisiones que he tomado nunca. ¡Ah, y por si te lo preguntabas, mi otra gran pasión es la música!",
    
  },
];

export const helloText = [
  { engHelloH2: "Welcome! My name is", engHelloH3: "And I'm a Full Stack Developer" },
  { esHelloH2: "¡Hola! Mi nombre es", esHelloH3: "y soy Desarrollador FullStack" },
];
export const navAndHelloText = [
  {
    engAboutLink: "ABOUT",
    engContactLink: "CONTACT",
    
    engPortfolioLink: "See my work",
    engMoreInfoLink:"MORE INFO",
    
  },
  {
    esAboutLink: "SOBRE MÍ",
    esContactLink: "CONTACTO",
    
    esPortfolioLink: "Mis proyectos",
    esMoreInfoLink: "DETALLES",
    
  },
];
export const contactText=[
  {
    engSectionTitle:"Contact",
    engSendMessage:"Send Message",
    engNamePlaceholder:"Name",
    engMessagePlaceholder:"Message",
    engSuccessMessage:"Thanks for your message!",
    engErrorMessage:"Oops! There was a problem submitting your form"
  },
  {
    esSectionTitle:"Contacto",
    esNamePlaceholder:"Nombre",
    esMessagePlaceholder:"Mensaje",
    esSendMessage:"Enviar Mensaje",
    esSuccessMessage:"¡Gracias por tu mensaje!",
    esErrorMessage:"¡Ups! Hubo un error en el envío del mensaje "
  }
]
