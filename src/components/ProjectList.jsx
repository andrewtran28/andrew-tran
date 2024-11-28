import Project from './Project';
import { useState } from 'react';

function ProjectList () {
    const data = [
        {
            name: "Thrift City",
            img: "/projects/thrift-city.png",
            desc: `A single-page-application of a mock online web-store. Features a homepage, store, and shopping cart to hold and purchase items.`,
            gh_url: "https://github.com/andrewtran28/shopping-cart",
            ext_url: "https://thriftcity.netlify.app/home",
            tags: ["React", "JavaScript", "API", "Router"],
        },
        {
            name: "Memory-Card Game",
            img: "/projects/memory-card-game.png",
            desc: `A React web application game that tests your memory. To play, only select the cards that you have previously not clicked before. Assets were provided by the Nookipedia API.`,
            gh_url: "https://github.com/andrewtran28/memory-card-game",
            ext_url: "https://acnh-memory-game.netlify.app/",
            tags: ["React", "JavaScript", "API"],
        },
        {
            name: "CV-Application Maker",
            img: "/projects/cv-application.png",
            desc: `A React application concept where users can input their information and generate a live preview of their CV/Résumé.`,
            gh_url: "https://github.com/andrewtran28/cv-application",
            ext_url: "https://andrewtran28-cv-application.netlify.app/",
            tags: ["React", "JavaScript", ],
        },
        {
            name: "Homepage",
            img: "/projects/homepage.png",
            desc: `A homepage that displays my GitHub projects and overview about myself. The site is responsive and adjusts to various device screen sizes. Fun fact: This page design may look familiar...`,
            gh_url: "https://github.com/andrewtran28/homepage",
            ext_url: "https://andrewtran28.github.io/homepage/",
            tags: ["React", "JavaScript", "CSS", "Responsive" ],            
        },
        {
            name: "Battleship",
            img: "/projects/battleship.png",
            desc: `Webapp of the classic Battleship game. Play against a computer player and try to destroy all of their ships before they destroy yours.`,
            gh_url: "https://github.com/andrewtran28/battleship",
            ext_url: "https://andrewtran28.github.io/battleship/",
            tags: ["JavaScript",],
        },
        {
            name: "myWeather App",
            img: "/projects/weather-app.png",
            desc: `Webapp that takes a given location and retrieves weather data from Visual Crossing API. The data is shown, as well as a related GIF from GIPHY`,
            gh_url: "https://github.com/andrewtran28/weather-app",
            ext_url: "https://andrewtran28.github.io/weather-app/",
            tags: ["JavaScript",],
        },
        {
            name: "Tic-Tac-Toe",
            img: "/projects/tictactoe.png",
            desc: `Play a game of Tic-Tac-Toe against another player.`,
            gh_url: "https://github.com/andrewtran28/tic-tac-toe",
            ext_url: "https://andrewtran28.github.io/tic-tac-toe/",
            tags: ["JavaScript",],
        },
        {
            name: "Admin Dashboard",
            img: "/projects/admin-dashboard.png",
            desc: `A webpage layout design for a general dashboard on the admin page.`,
            gh_url: "https://github.com/andrewtran28/admin-dashboard",
            ext_url: "https://andrewtran28.github.io/admin-dashboard/",
            tags: ["JavaScript",],
        },
        {
            name: "myLibrary App",
            img: "/projects/library.png",
            desc: `My Library is a simple library webapp concept that displays user-inputted book entries and keeping track of which books are read.`,
            gh_url: "https://github.com/andrewtran28/library",
            ext_url: "https://andrewtran28.github.io/library/",
            tags: ["JavaScript",],
        },
        {
            name: "Etch-Pad",
            img: "/projects/etch-pad.png",
            desc: `The magic Etch-Pad is a webapp that allows you to paint on a customizable board. Features include random colour mode, erase mode, and resizing the resolution of the canvas.`,
            gh_url: "https://github.com/andrewtran28/etch-pad",
            ext_url: "https://andrewtran28.github.io/etch-pad/",
            tags: ["JavaScript",],
        },
        {
            name: "Simple Calculator",
            img: "/projects/calculator.png",
            desc: `As the project name implies, this is a basic webapp that contains a functional, no-frills calculator.`,
            gh_url: "https://github.com/andrewtran28/calculator",
            ext_url: "https://andrewtran28.github.io/calculator/",
            tags: ["JavaScript",],
        },
        {
            name: "Sign-up Form",
            img: "/projects/signup-form.png",
            desc: `A webpage layout design for a "sign-up" form. A small concept project that demonstrates form filling and different types of input field requirements.`,
            gh_url: "https://github.com/andrewtran28/signup-form",
            ext_url: "https://andrewtran28.github.io/signup-form/",
            tags: ["JavaScript",],
        },
        {
            name: "Rock-Paper-Scissors",
            img: "/projects/rock-paper-scissors.png",
            desc: `Play Rock-Paper-Scissors against a computer player. Includes features such as changing the win condition and toggling cheats.`,
            gh_url: "https://github.com/andrewtran28/rock-paper-scissors.git",
            ext_url: "https://andrewtran28.github.io/rock-paper-scissors",
            tags: ["JavaScript",],
        },
        {
            name: "Landing Page",
            img: "/projects/landing-page.png",
            desc: `A common webpage design of a landing page for a website. This project was my introduction to CSS and flex design.`,
            gh_url: "https://github.com/andrewtran28/landing-page",
            ext_url: "https://andrewtran28.github.io/landing-page",
            tags: ["JavaScript",],
        },
        {
            name: "HTML Recipes Website",
            img: "/projects/recipes.png",
            desc: `My VERY first project and website. My introduction to HTML, CSS (as well as getting carried away with "border-radius" and "background-color").`,
            gh_url: "https://github.com/andrewtran28/recipes",
            ext_url: "https://andrewtran28.github.io/recipes",
            tags: ["JavaScript",],
        },
    ];

    const [page, setPage] = useState (0);
    const PER_PAGE = 4;
    const TOTAL_PAGES = Math.ceil(data.length/PER_PAGE);
    const startIndex = page * PER_PAGE;
    const endIndex = startIndex + PER_PAGE;
    const currentPage = data.slice(startIndex, endIndex);
    const isPreviousDisabled = (page === 0);
    const isNextDisabled = endIndex >= data.length;

    const handleNext = () => {
        if (!isNextDisabled) setPage((page) => page + 1);
    }
    
      const handlePrevious = () => {
        if (!isPreviousDisabled) setPage((page) => page - 1);
    }

    return (
        <>
            <div className="projects-cont">
                {currentPage.map((project, i) => {
                    return (
                        <Project 
                            key={i}
                            name={project.name}
                            img={project.img}
                            desc={project.desc}
                            gh_url={project.gh_url}
                            ext_url={project.ext_url}
                            tags={project.tags}
                        />
                    )
                })}
            </div>

            <div className="projects-nav">
                <button onClick={handlePrevious} disabled={isPreviousDisabled}>
                    Previous
                </button>
                <div className="projects-page-num">{page + 1} of {TOTAL_PAGES}</div>
                <button onClick={handleNext} disabled={isNextDisabled}>
                    Next
                </button>                
            </div>        
        </>

    );
} 

export default ProjectList;