const btnEl = document.querySelector(".btn");
const emojiTextEl = document.querySelector(".emoji-text");

const emoji = [];

async function getEmojiAp() {
    const response = await fetch("https://emoji-api.com/emojis?access_key=e28aa79626a1629b5bb3a07156f05f59c396f45c")

    data = await response.json()

    for (i = 0; i < 1500; i++) {
        emoji.push({
            emojiName: data[i].character,
            emojiCode: data[i].unicodeName,
        })
    }
}


getEmojiAp();

btnEl.addEventListener("click", () => {
    const randomNum = Math.floor(Math.random() * emoji.length)
    btnEl.innerHTML = emoji[randomNum].emojiName;
    emojiTextEl.innerHTML = emoji[randomNum].emojiCode;
})