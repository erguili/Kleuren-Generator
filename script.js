const colorButton = document.querySelector(".button");
const colorBody = document.querySelector("body");

const randColor = () => {
  let hexColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  return hexColor;
};

colorButton.addEventListener ( "click", () => {
    colorBody.style.backgroundColor = randColor();
    colorButton.style.backroundColor = randColor();
    }
)
