const header_element = document.getElementById("header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll",
    () => {
        if (window.scrollY > lastScrollY) {
            header_element.className = "header-hide";
        }
        else {
            header_element.className = "header-show";
        }
       lastScrollY = window.scrollY;
    }
)

const hour = document.getElementsByClassName("hour")[0]
const minute = document.getElementsByClassName("minute")[0]
const second = document.getElementsByClassName("second")[0]
const colons = document.getElementsByClassName("colon");

console.log(colons)

setInterval(
    () => {
        const now = new Date();

        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const milliseconds = now.getMilliseconds();

        hour.textContent = hours;
        minute.textContent = minutes;
        second.textContent = seconds;
        if (milliseconds < 500) {
            colons[0].style.color = "black";
            colons[1].style.color = "black";
        }
        else {
            colons[0].style.color = "white";
            colons[1].style.color = "white";
        }
    },
    50
);