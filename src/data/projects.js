const dream1 = require('../images/dream-cars/dream_1.jpg');
const dream2 = require('../images/dream-cars/dream_2.jpg');
const dream3 = require('../images/dream-cars/dream_3.jpg');
const dream4 = require('../images/dream-cars/dream_4.jpg');
const dream5 = require('../images/dream-cars/dream_5.jpg');
const dream6 = require('../images/dream-cars/dream_6.jpg');

export const projects = [
    {   id: 1,
        name: "Support Desk",
        development: ["MongoDB", "Express", "React", "Redux", "Node.js", "HTML", "JavaScript", "CSS"],
        images: null,
        support: ["OMDb API"],
        description: "Need IT support for your favorite electronics? Support desk is here to help. Built on the MERN stack (MongoDB, Express, React, NodeJS), users can login/signup, submit support tickets with full CRUD functionality, and view ticket notes made by the user and Support Specialist. Supported by Redux Toolkit for state handling and Mongoose for object modeling. Styling is finished with Bootstrap 5."

    },
    {   id: 2,
        name: 'Dream Cars',
        images: [dream1, dream2, dream3, dream4, dream5, dream6],
        support: ["Mapbox API", "Firestore"],
        development: ["Firebase", "React", "TailwindCSS", "HTML", "JavaScript", "CSS"],
        description: 'Looking to rent or buy your dream car? Or maybe you want to make some money selling/renting your vehicles? Dream Car has you covered. Utilizing Create React App, Firebase, Firestore, and Mapbox API; users can create an account, create car listings with full CRUD functionality, upload images, view maps, and much more. Styling is finished with TailwindCSS/daisyui.'

    },
    {   id: 3,
        name: 'React-Films',
        images: null,
        support: ["OMDb API"],
        development: ["React", "TailwindCSS", "HTML", "JavaScript", "CSS"],
        description: 'Whether you love a movie and want to remember it, or you are looking for a new film to watch, React Films can help. Utilizing CRA, Context API, and OMDb API, users can search from thousands of movie titles and save/share their favorites films. Styling is modern and sleek, built with TailwindCSS/daisyui.'

    },
    {   id: 4,
        name: 'Pokémon-J',
        images: null,
        support: ["OMDb API"],
        development: ["jQuery", "HTML", "JavaScript", "CSS"],
        description: 'Pokémon-J is a front-end web application, programmed using mostly jQuery. Utilizing AJAX and PokéAPI, users are met with a fun interactive interface providing lively pokémon sprites, along with pokémon stats.'

    },
    {
        id: 5,
        name: 'Flix',
        images: null,
        support: ["OMDb API"],
        development: ["HTML", "JavaScript", "CSS"],
        description: 'Flix is a front-end web application programmed using vanilla JavaScript.  Utilizing OMDb API and Fetch API, users can search thousands of film titles and view relevant film data.  Additionally, users can favorite and unfavorite films.  This is accomplished by saving film data to a json-server hosted by Glitch.'
    },
    {
        id: 6,
        name: 'Simply Weather',
        images: null,
        support: ["OMDb API"],
        development: ["HTML", "JavaScript", "CSS"],
        description: 'Simply Weather is a front-end web application programmed using vanilla JavaScript. Utilizing OpenWeather API and Fetch API, users can view a 7-day forecast of the location of their choosing.  Simply Weather is designed to be intuitive and simple, but still providing users with a plethora of data.'
    },
    {
        id: 7,
        name: 'GamerHaven',
        images: null,
        support: ["OMDb API"],
        development: ["Java", "Spring", "Thymeleaf", "MySQL", "HTML", "JavaScript", "CSS"],
        description: 'GamerHaven is a full-stack social media app created for gamers across the world!  Built by a team of 5, users can search over 500,000 game titles, follow other users, create posts, leave comments, and much more.  GamerHaven is built on Spring, structured using MVC, programmed with Java and SQL, utilizes Spring JPA, and connected to MySQL.'
    },
    {
        id: 8,
        name: 'GameLister',
        images: null,
        support: ["OMDb API"],
        development: ["Java", "MySQL", "HTML", "JavaScript", "CSS"],
        description: 'GameLister is a Craigslist like full-stack web application where users can create accounts, search listings, and post ads with full CRUD functionality.  Built by a team of 3, GameLister is structured using MVC, programmed with Java and SQL, utilizes Java Servlets and JDBC API, and connected to MySQL. Database security is achieved by utilizing prepared statements.'
    }
]