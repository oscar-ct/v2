const dream1 = require('../images/dream-cars/dream_1.jpg');
const dream2 = require('../images/dream-cars/dream_2.jpg');
const dream3 = require('../images/dream-cars/dream_3.jpg');
const dream4 = require('../images/dream-cars/dream_4.jpg');
const dream5 = require('../images/dream-cars/dream_5.jpg');
const dream6 = require('../images/dream-cars/dream_6.jpg');


const support1 = require('../images/support-desk/support_1.jpg');
const support2 = require('../images/support-desk/support_2.jpg');
const support3 = require('../images/support-desk/support_3.jpg');
const support4 = require('../images/support-desk/support_4.jpg');
const support5 = require('../images/support-desk/support_5.jpg');
const support6 = require('../images/support-desk/support_6.jpg');


const films1 = require('../images/react-films/films_1.jpg');
const films2 = require('../images/react-films/films_2.jpg');
const films3 = require('../images/react-films/films_3.jpg');
const films4 = require('../images/react-films/films_4.jpg');
const films5 = require('../images/react-films/films_5.jpg');
const films6 = require('../images/react-films/films_6.jpg');


const poke1 = require('../images/pokemon/poke_1.jpg');
const poke2 = require('../images/pokemon/poke_2.jpg');
const poke3 = require('../images/pokemon/poke_3.jpg');
const poke4 = require('../images/pokemon/poke_4.jpg');
const poke5 = require('../images/pokemon/poke_5.jpg');
const poke6 = require('../images/pokemon/poke_6.jpg');


const weather1 = require('../images/simply-weather/weather_1.jpg');
const weather2 = require('../images/simply-weather/weather_2.jpg');
const weather3 = require('../images/simply-weather/weather_3.jpg');
const weather4 = require('../images/simply-weather/weather_4.jpg');
const weather5 = require('../images/simply-weather/weather_5.jpg');
const weather6 = require('../images/simply-weather/weather_6.jpg');


const haven1 = require('../images/gamerhaven/haven_1.jpg');
const haven2 = require('../images/gamerhaven/haven_2.jpg');
const haven3 = require('../images/gamerhaven/haven_3.jpg');
const haven4 = require('../images/gamerhaven/haven_4.jpg');
const haven5 = require('../images/gamerhaven/haven_5.jpg');
const haven6 = require('../images/gamerhaven/haven_6.jpg');
const haven7 = require('../images/gamerhaven/haven_7.jpg');
const haven8 = require('../images/gamerhaven/haven_8.jpg');
const haven9 = require('../images/gamerhaven/haven_9.jpg');
const haven10 = require('../images/gamerhaven/haven_10.jpg');
const haven11 = require('../images/gamerhaven/haven_11.jpg');
const haven12 = require('../images/gamerhaven/haven_12.jpg');
const haven13 = require('../images/gamerhaven/haven_13.jpg');
const haven14 = require('../images/gamerhaven/haven_14.jpg');
const haven15 = require('../images/gamerhaven/haven_15.jpg');

const lister1 = require('../images/game-lister/lister_1.jpg');
const lister2 = require('../images/game-lister/lister_2.jpg');
const lister3 = require('../images/game-lister/lister_3.jpg');
const lister4 = require('../images/game-lister/lister_4.jpg');
const lister5 = require('../images/game-lister/lister_5.jpg');
const lister6 = require('../images/game-lister/lister_6.jpg');
const lister7 = require('../images/game-lister/lister_7.jpg');
const lister8 = require('../images/game-lister/lister_8.jpg');


export const projects = [
    {   id: 1,
        name: "Support Desk",
        github_link: "https://github.com/oscar-ct/support-desk",
        demo_link: null,
        development: ["MongoDB", "Express", "React", "Redux", "Node.js", "HTML", "JavaScript", "CSS"],
        images: [support1, support2, support3, support4, support5, support6],
        description: "Need IT support for your favorite electronics? Support desk is here to help. Built on the MERN stack (MongoDB, Express, React, NodeJS), users can login/signup, submit support tickets with full CRUD functionality, and view ticket notes made by the user and Support Specialist. Supported by Redux Toolkit for state handling and Mongoose for object modeling. Styling is finished with Bootstrap 5."

    },
    {   id: 2,
        name: 'Dream Cars',
        github_link: "https://github.com/oscar-ct/react-dream-cars",
        demo_link: "https://react-dream-cars.vercel.app/",
        images: [dream1, dream2, dream3, dream4, dream5, dream6],
        development: ["Firebase", "React", "TailwindCSS", "HTML", "JavaScript", "CSS"],
        description: 'Looking to rent or buy your dream car? Or maybe you want to make some money selling/renting your vehicles? Dream Car has you covered. Utilizing Create React App, Firebase, Firestore, and Mapbox API; users can create an account, create car listings with full CRUD functionality, upload images, view maps, and much more. Styling is finished with TailwindCSS/daisyui.'

    },
    {   id: 3,
        name: 'React-Films',
        github_link: "https://github.com/oscar-ct/react-films",
        demo_link: "https://react-films-ten.vercel.app/",
        images: [films1, films2, films3, films4, films5, films6],
        development: ["React", "TailwindCSS", "HTML", "JavaScript", "CSS"],
        description: 'Whether you love a movie and want to remember it, or you are looking for a new film to watch, React Films can help. Utilizing CRA, Context API, and OMDb API, users can search from thousands of movie titles and save/share their favorites films. Styling is modern and sleek, built with TailwindCSS/daisyui.'

    },
    {   id: 4,
        name: 'Pokémon-J',
        github_link: "https://github.com/oscar-ct/pok-mon",
        demo_link: "https://oscar-ct.github.io/pok-mon/",
        images: [poke1, poke2, poke3, poke4, poke5, poke6],
        development: ["jQuery", "HTML", "JavaScript", "CSS"],
        description: 'Pokémon-J is a front-end web application, programmed using mostly jQuery. Utilizing AJAX and PokéAPI, users are met with a fun interactive interface providing lively pokémon sprites, along with pokémon stats.'

    },
    // {
    //     id: 5,
    //     name: 'Flix',
    //     images: null,
    //     support: ["OMDb API"],
    //     development: ["HTML", "JavaScript", "CSS"],
    //     description: 'Flix is a front-end web application programmed using vanilla JavaScript.  Utilizing OMDb API and Fetch API, users can search thousands of film titles and view relevant film data.  Additionally, users can favorite and unfavorite films.  This is accomplished by saving film data to a json-server hosted by Glitch.'
    // },
    {
        id: 5,
        name: 'Simply Weather',
        github_link: "https://github.com/oscar-ct/weather-project",
        demo_link: "https://oscar-ct.github.io/weather-project/",
        images: [weather1, weather2, weather3, weather4, weather5, weather6],
        development: ["HTML", "JavaScript", "CSS"],
        description: 'Simply Weather is a front-end web application programmed using vanilla JavaScript. Utilizing OpenWeather API and Fetch API, users can view a 7-day forecast of the location of their choosing.  Simply Weather is designed to be intuitive and simple, but still providing users with a plethora of data.'
    },
    {
        id: 6,
        name: 'GamerHaven',
        github_link: "https://github.com/Cappastone/KAPPA",
        demo_link: null,
        images: [haven1, haven2, haven3, haven4, haven5, haven6, haven7, haven8, haven9, haven10, haven11, haven12, haven13, haven14, haven15],
        development: ["Java", "Spring", "Thymeleaf", "MySQL", "HTML", "JavaScript", "CSS"],
        description: 'GamerHaven is a full-stack social media app created for gamers across the world!  Built by a team of 5, users can search over 500,000 game titles, follow other users, create posts, leave comments, and much more.  GamerHaven is built on Spring, structured using MVC, programmed with Java and SQL, utilizes Spring JPA, and connected to MySQL.'
    },
    {
        id: 7,
        name: 'GameLister',
        github_link: "https://github.com/ChadListers/java-adlister/tree/main",
        demo_link: null,
        images: [lister1, lister2, lister3, lister4, lister5, lister6, lister7, lister8],
        development: ["Java", "MySQL", "HTML", "JavaScript", "CSS"],
        description: 'GameLister is a Craigslist like full-stack web application where users can create accounts, search listings, and post ads with full CRUD functionality.  Built by a team of 3, GameLister is structured using MVC, programmed with Java and SQL, utilizes Java Servlets and JDBC API, and connected to MySQL. Database security is achieved by utilizing prepared statements.'
    }
]