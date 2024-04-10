import "./Background.css"
import hots from "../img/HOTS.jpg"
import React, { useEffect } from 'react';

const COUNT = 200;
const SIZES = [
    "rainDrop--s",
    "rainDrop--s",
    "rainDrop--s",
    "rainDrop--s",
    "rainDrop--m",
    "rainDrop--m",
    "rainDrop--m",
    "rainDrop--m",
    "rainDrop--l",
    "rainDrop--xl",
];

const EMOJIES = [
    "🐨",
    "🐹",
    "🐱",
    "🐿️",
    "🐥",
    "🐻",
    "🐯",
    "🐰",
    "🐋",
    "🫰",
    "💜",
];

console.log(EMOJIES)

const Background = () => {
    useEffect(() => {
        const rainContainer = document.querySelector(".rain-container");

        const genRainDrop = (size, xStart, xEnd, yStart, emoji) => {
            const myEmoji = document.createElement("div");
            myEmoji.innerText = emoji;
            myEmoji.classList.add("rainDrop", size);
            myEmoji.style.setProperty("--x-start", `${xStart}vw`);
            myEmoji.style.setProperty("--x-end", `${xEnd}vw`);
            myEmoji.style.setProperty("--y-start", `${yStart}vh`);
            myEmoji.style.setProperty("--y-end", `${yStart + 200}vh`);

            return myEmoji;
        };

        const randFromList = (items) => {
            return items[Math.floor(Math.random() * items.length)];
        };

        const getRamdom = (min, max) => {
            return Math.random() * (max - min) + min;
        };

        for (let i = 0; i < COUNT; i++) {
            const size = randFromList(SIZES);
            const xStart = getRamdom(0, 100);
            const xEnd = getRamdom(xStart - 20, xStart + 20);
            const yStart = getRamdom(-100, 0);
            const emoji = randFromList(EMOJIES);

            rainContainer.appendChild(genRainDrop(size, xStart, xEnd, yStart, emoji));
        }
    }, []);

    return (
        <div className="rain-container">
            {/* This container will be populated with raindrops */}
        </div>
    );
};

export default Background;
