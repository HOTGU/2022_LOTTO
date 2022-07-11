const btn = document.querySelector("button");
const aniContainer = document.getElementById("animation-container");
const result = document.getElementById("result");

const colorArr = ["#fdcb6e", "#e17055", "#2d3436", "#d63031", "#6c5ce7", "#00b894"];
let numberArr = new Array();
let lottoNumberArr = new Array();

const createNumber = () => {
    for (v = 1; v < 46; v++) {
        numberArr.push(v);
    }
};

const randomIndex = () => {
    return Math.floor(Math.random() * numberArr.length);
};

const paintNumber = (num) => {
    aniContainer.innerHTML = "";
    const color = colorArr[Math.floor(Math.random() * colorArr.length)];
    const aniDiv = document.createElement("div");
    const numDiv = document.createElement("div");
    numDiv.innerText = num;
    numDiv.style.backgroundColor = color;
    numDiv.classList.add("lotto-item");
    aniDiv.innerText = num;
    aniDiv.style.backgroundColor = color;
    aniDiv.classList.add("circle");
    aniDiv.classList.add("animation-init");
    setTimeout(function () {
        aniDiv.classList.add("animation-fade");
    }, 100);
    setTimeout(function () {
        result.append(numDiv);
    }, 1000);
    aniContainer.append(aniDiv);
};

const getNumber = () => {
    if (lottoNumberArr.length >= 7) return alert("추첨완료");
    const index = randomIndex();
    const lottoNumber = numberArr[index];
    numberArr.splice(index, 1);
    lottoNumberArr.push(lottoNumber);
    paintNumber(lottoNumber);
    return lottoNumber;
};

const init = () => {
    createNumber();
    btn.addEventListener("click", getNumber);
};

init();
