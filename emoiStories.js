const emojis = [
    '😀','😆','😅','🤣','🙃','😍','😡','🥶','😱','👻',
    '👾','😻','💋','👅','🧵','👠','🥾','👑','🎓','🐔',
    '🐧','🦄','🦇','🌲','🎄','🌊','🍓','🍍','🥯','🌭',
    '🍕','🍣','🥡','🤸','🎯','🧨','🔮','💉','🦠','❤️',
    '🧡','💛','💚','💙','💜','☢️','🚫','💯','🔱','🎊'
]

// const generateStory = () => {
//     let input = Number(document.querySelector("#story-length-input").value);
//     let p = document.getElementById("emoji-story");

//     const str = input;
//     // let output = [emojis.Math.floor or something like that]; 
//     // let emojis = the amount the of input.value 
//     // emojis needs to printed randomly 
//     // trying to find the right code to make output print random emojis! 
//     // p.textContext = output; this code will give me the output 



// }

const emojiStoryString = document.querySelector("#emoji-story");
const storyDescription = document.querySelector("#submit-description-btn");
const historyTitle = document.querySelector("#history-title");
const ul = document.querySelector("#description-list");
let historyCount = 0;
const emojiForm = document.querySelector("#emoji-story-form");
const descriptionButton = document.querySelector("#submit-description-btn");
let savedEmojisString = "";
let lengthInput = document.querySelector("#story-length-input");


emojiForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let randomEmojis = [];
    let savedEmojis = [];
    let num = Number(lengthInput.value);  
    for (let i = 0; i < num; i++) {
        let random = Math.floor(Math.random() * emojis.length);
        randomEmojis.push(emojis[random]);
        savedEmojis.push(emojis[random]);
    }
    emojiStoryString.textContent = `Story: ${randomEmojis.join("")}`;
    savedEmojisString = savedEmojis.join("");
   
});

descriptionButton.addEventListener("click", (event) => {
    event.preventDefault();
    historyCount++;    
    const emojiDescription = document.querySelector("#description-input");
    historyCount === 1 ? historyTitle.textContent = `${historyCount} Saved Story`: historyTitle.textContent = `${historyCount} Saved Stories`; 
    const descriptionListItem = document.createElement("li");
    descriptionListItem.textContent = `${savedEmojisString}: ${emojiDescription.value}`;
    ul.appendChild(descriptionListItem);
    emojiDescription.value = ""
    emojiStoryString.textContent = "Story:"
})