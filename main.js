let number = 0;
let hue = 0;
let saturation = 50;
let brightness = 20;
let outlineBrightness = 40;
let colorBrightness = 60;

function add()
{
	number++;
	document.getElementById("counter").textContent = number;
	counterAnimation();
	updateCounter();
}

function subtract()
{
	if (number > 0){
		number--;
		document.getElementById("counter").textContent = number;
		counterAnimation();
		updateCounter();
	}
}

function reset()
{
	if (number === 0) return;
	number = 0;
	document.getElementById("counter").textContent = number;
	counterAnimationReset();
	updateCounter();
}

ffunction changeBG() {
    hue = Math.floor(Math.random() * 360);
    saturation = Math.floor(Math.random() * 70);
    brightness = Math.floor(Math.random() * 10);

    outlineBrightness = Math.min(brightness + 20, 100);
    colorBrightness = Math.min(brightness + 40, 100);

    applyTheme();
}

function applyTheme() {
    document.body.style.background =
        `hsl(${hue}, ${saturation}%, ${brightness}%)`;

    document.querySelectorAll("button").forEach(btn => {
        btn.style.outline =
            `2px solid hsl(${hue}, ${saturation}%, ${outlineBrightness}%)`;
        btn.style.color =
            `hsl(${hue}, ${saturation}%, ${colorBrightness}%)`;
        btn.style.backgroundColor =
            `hsl(${hue}, ${saturation}%, ${colorBrightness - 40}%)`;
    });

    document.getElementById("counter").style.color =
        `hsl(${hue}, ${saturation}%, ${colorBrightness}%)`;

    document.getElementById("page-title").style.color =
        `hsl(${hue}, ${saturation}%, ${colorBrightness}%)`;
}


function counterAnimation()
{
	let display = document.getElementById("counter");
	display.style.transform = "scale(0.8) translateY(-5px)";

	setTimeout(() => {
		display.style.transform = "scale(1)";
	}, 150);
}

function counterAnimationReset() {
    let display = document.getElementById("counter");

	display.style.color = "red";
    display.style.transform = "scale(0.8) translateX(-10px)";

	setTimeout(() => {
        display.style.transform = "scale(1) translateX(0px)";
    }, 80);

    setTimeout(() => {
		display.style.color = "#949494";
        display.style.transform = "scale(0.8) translateX(20px)";
    }, 160);

    setTimeout(() => {
        display.style.transform = "scale(1) translateX(0px)";
    }, 240);

	setTimeout(() => {
        display.style.color = "red";
    }, 320);

	setTimeout(() => {
        display.style.color = "#949494";
    }, 400);
}

window.addEventListener("load", () => {
    changeBG();

    const pageTitle = document.getElementById("page-title");
    const name = document.getElementById("name");

    pageTitle.style.transform = "none";
    name.style.transform = "none";

    setTimeout(() => {
        pageTitle.style.transform = "scale(1.4)";
        name.style.transform = "scale(1.2) translateY(20px)";
    }, 300);
});

const value = document.querySelector('#counter');

function updateCounter() {
    const counter = document.getElementById("counter");
    const digits = String(number).length;
    counter.style.width = `${digits * 10}px`;
}









