const me = document.querySelector("#Me");
const text = document.querySelector("#text");
const text2 = document.querySelector("#text2")
const text3 = document.querySelector("#text3")
function aboutMe() {
    text.innerText = "My favorite movie is Hackers"
    text2.innerText = "My favorite code editor is vs code"
    text3.innerText = "My favorite video game is Legend of Zelda Breath Of The Wild"
}
me.onclick = aboutMe;