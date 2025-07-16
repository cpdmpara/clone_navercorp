const header_element = document.getElementById("header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll",
    () => {
        if (window.scrollY > lastScrollY) {
            header_element.className = "header-hide";
        }
        else if(window.scrollY < lastScrollY) {
            header_element.className = "header-show";
        }
       lastScrollY = window.scrollY;
    }
)

const hour = document.getElementsByClassName("hour")[0]
const minute = document.getElementsByClassName("minute")[0]
const second = document.getElementsByClassName("second")[0]
const colons = document.getElementsByClassName("colon");

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

const navs = document.getElementsByClassName("nav-content");
const details = document.getElementsByClassName("detail_shell");
const main = document.getElementsByTagName("main")[0];
const footer = document.getElementsByTagName("footer")[0];
const dropdown_map = {
    회사소개: 0,
    서비스: 1,
    기술: 2,
    ESG: 3,
    투자정보: 4,
    미디어: 5
};

function blur() {
    main.style.filter = "blur(8px) brightness(20%)";
    footer.style.filter = "blur(8px) brightness(20%)";
}

function clear_blur() {
    main.style.filter = "none";
    footer.style.filter = "none";
}

for (let i = 0; i < 6; i++) {
    navs[i].addEventListener(
        "mouseover",
        (event) => {
            for (let j = 0; j < 6; j++) {
                details[j].className = "detail_shell";
            }
            details[dropdown_map[event.target.textContent]].className = "detail_shell header_show";
            blur();
        }
    )

    details[i].addEventListener(
        "mouseleave",
        (event) => {
            event.target.className = "detail_shell header_off";
            clear_blur();
        }
    )
}

navs[6].addEventListener(
    "mouseover",
    () => {
        for (let j = 0; j < 6; j++) {
            details[j].className = "detail_shell header_off";
        }
        clear_blur();
    }
)

navs[7].addEventListener(
    "mouseover",
    () => {
        for (let j = 0; j < 6; j++) {
            details[j].className = "detail_shell header_off";
        }
        clear_blur();
    }
)