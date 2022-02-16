let taskbar_window = document.querySelector(".taskbar_window");
let close = document.querySelector(".fa-times");
let maximise = document.querySelector(".fa-window-restore");
let minimise = document.querySelector(".fa-minus");
let cr_close = document.querySelector(".crclose");
let cr_maximise = document.querySelector(".crmax");
let cr_minimise = document.querySelector(".crmin");
let me_close = document.querySelector(".meclose");
let me_maximise = document.querySelector(".memax");
let me_minimise = document.querySelector(".memin");
let exp_close = document.querySelector(".expclose");
let exp_maximise = document.querySelector(".expmax");
let exp_minimise = document.querySelector(".expmin");
taskbar_window.style.display = "none"

// time
function updateClock() {
    var now = new Date();
    if (now.getMinutes() < 10) { time_minutes = "0" + now.getMinutes() } else { if (now.getMinutes() == 0) { time_minutes = "00" } else { time_minutes = now.getMinutes() } }

    time = now.getHours() + ':' + time_minutes,
        date = now.toLocaleDateString();

    // set the content of the element with the ID time to the formatted string
    document.getElementById('time').innerText = time;
    document.getElementById('date').innerText = date;

    // call this function again in 1000ms
    setTimeout(updateClock, 1000);
}
updateClock();

// close start / notification
function close_function() {
    if (document.querySelector(".side_panel").classList.contains("sidebar")) {
        document.querySelector(".side_panel").classList.remove("sidebar");
        notification.classList.toggle("fas");
    }
    taskbar_window.style.display = "none";
}

const window_handle = (window_name, window1, window2, window3) => {
    if (window_name.style.visibility === "visible" && window_name.style.display === "block") {
        window_name.style.visibility = "hidden";
    } else {
        window_name.style.visibility = "visible";
        window_name.style.zIndex = Number(window1.style.zIndex) + Number(window2.style.zIndex) + Number(window3.style.zIndex) + 1;
    }
}

// chrome window
document.querySelector(".chrome").addEventListener("click", function () {
    close_function();
    let chrome_window = document.querySelector(".chrome_window");
    let window1 = document.querySelector(".me_window");
    let window2 = document.querySelector(".exp_window");
    let window3 = document.querySelector(".file_window");
    window_handle(chrome_window, window1, window2, window3);
    document.querySelector(".chrome_window").style.display = "block";
});

document.querySelector(".chrome_window").style.visibility = "hidden";

cr_close.addEventListener("click", function () {
    close_function();
    document.querySelector(".chrome_window").style.display = "none";
    document.querySelector(".chrome_window").style.visibility = "visible";
});
cr_maximise.addEventListener("click", function () {
    close_function();
    document.querySelector(".chrome_window").classList.toggle("window_max");
});
cr_minimise.addEventListener("click", function () {
    close_function();
    if (document.querySelector(".chrome_window").style.visibility === "visible") {
        document.querySelector(".chrome_window").style.visibility = "hidden";
    } else {
        document.querySelector(".chrome_window").style.visibility = "visible";
    }
});

// me window
document.querySelector(".me").addEventListener("click", function () {
    close_function();
    let chrome_window = document.querySelector(".me_window");
    let window1 = document.querySelector(".chrome_window");
    let window2 = document.querySelector(".exp_window");
    let window3 = document.querySelector(".file_window");
    window_handle(chrome_window, window1, window2, window3);
    document.querySelector(".me_window").style.display = "block";
});

document.querySelector(".me_window").style.visibility = "hidden";

me_close.addEventListener("click", function () {
    close_function();
    document.querySelector(".me_window").style.display = "none";
    document.querySelector(".me_window").style.visibility = "visible";
});
me_maximise.addEventListener("click", function () {
    close_function();
    document.querySelector(".me_window").classList.toggle("window_max");
});
me_minimise.addEventListener("click", function () {
    close_function();
    if (document.querySelector(".me_window").style.visibility === "visible") {
        document.querySelector(".me_window").style.visibility = "hidden";
    } else {
        document.querySelector(".me_window").style.visibility = "visible";
    }
});

// file window
document.querySelector(".notepad").addEventListener("click", function () {
    close_function();
    let chrome_window = document.querySelector(".file_window");
    let window1 = document.querySelector(".chrome_window");
    let window2 = document.querySelector(".exp_window");
    let window3 = document.querySelector(".me_window");
    window_handle(chrome_window, window1, window2, window3);
    document.querySelector(".file_window").style.display = "block";
});

document.querySelector(".file_window").style.visibility = "hidden";

close.addEventListener("click", function () {
    close_function();
    document.querySelector(".file_window").style.display = "none";
    document.querySelector(".file_window").style.visibility = "visible";
});
maximise.addEventListener("click", function () {
    close_function();
    document.querySelector(".file_window").classList.toggle("window_max");
});
minimise.addEventListener("click", function () {
    close_function();
    if (document.querySelector(".file_window").style.visibility === "visible") {
        document.querySelector(".file_window").style.visibility = "hidden";
    } else {
        document.querySelector(".file_window").style.visibility = "visible";
    }
});

// explorer window
document.querySelector(".explorer").addEventListener("click", function () {
    close_function();
    let chrome_window = document.querySelector(".exp_window");
    let window1 = document.querySelector(".chrome_window");
    let window2 = document.querySelector(".me_window");
    let window3 = document.querySelector(".file_window");
    window_handle(chrome_window, window1, window2, window3);
    document.querySelector(".exp_window").style.display = "block";
});

document.querySelector(".exp_window").style.visibility = "hidden";

exp_close.addEventListener("click", function () {
    close_function();
    document.querySelector(".exp_window").style.display = "none";
    document.querySelector(".exp_window").style.visibility = "visible";
});
exp_maximise.addEventListener("click", function () {
    close_function();
    document.querySelector(".exp_window").classList.toggle("window_max");
});
exp_minimise.addEventListener("click", function () {
    close_function();
    if (document.querySelector(".exp_window").style.visibility === "visible") {
        document.querySelector(".exp_window").style.visibility = "hidden";
    } else {
        document.querySelector(".exp_window").style.visibility = "visible";
    }
});

// other
notification = document.querySelector(".fa-comment-alt")
notification.addEventListener("click", function () {
    notification.classList.toggle("fas");
    document.querySelector(".sidebar_close").classList.toggle("sidebar");
});

function start() {
    if (taskbar_window.style.display === "none") {
        taskbar_window.style.display = "block";
    } else {
        taskbar_window.style.display = "none";
    }
}

// dark mode 
document.querySelector(".mode").addEventListener("click", function () {
    document.querySelector(".dark_action").classList.toggle("dark-toggle");
    document.querySelector(".desktop").classList.toggle("dark-theme");
    if (document.querySelector(".desktop").classList.contains("dark-theme")) {
        document.querySelector(".search").style.display = "none";
        document.querySelector(".dark_search").style.display = "block";
    } else {
        document.querySelector(".search").style.display = "block";
        document.querySelector(".dark_search").style.display = "none";
    }
});

// fullscreen
var elem = document.body;
var full_screen = document.querySelector(".expand");
function requestFullScreen(element) {
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

document.querySelector(".expand").addEventListener("click", function () {
    document.querySelector(".expand_action").classList.toggle("action-active");
    if (window.innerWidth == screen.width && window.innerHeight == screen.height) {
        document.exitFullscreen();
    } else {
        requestFullScreen(elem);
    }
})

document.getElementById("about").addEventListener("click", () => {
    const str = `<h1>About</h1>
    Welcome to Caterwaul: A Windows 11 themed website... One day, the idea came randomly in my mind, that I know 
    to code. So, why not make a website to display my skills. I copied the design of the Windows 11 and made an
    interesting website with the theme.
    <br/><br/>
    You can click on different icons and get some static content related to myself in theme of 
    different apps on windows. 
    <b>Happy Explroration</b>`;
    document.querySelector(".window-content").innerHTML = str;
    document.querySelector(".title_name").innerText = "About.txt - Notepad";
    if (document.querySelector(".file_window").style.visibility === "visible" && document.querySelector(".file_window").style.display === "block") {
        document.querySelector(".file_window").style.visibility = "hidden";
    } else {
        document.querySelector(".file_window").style.visibility = "visible";
        document.querySelector(".file_window").style.zIndex = Number(document.querySelector(".chrome_window").style.zIndex) + Number(document.querySelector(".exp_window").style.zIndex) + Number(document.querySelector(".me_window").style.zIndex) + 1;
    }
    document.querySelector(".file_window").style.display = "block";
})

document.getElementById("hello").addEventListener("click", () => {
    var str = `<h1>Hello People</h1>
    <p>Hi,
    I'am Shivesh, a
    Web Developer !!</p>
    <br/><br/>
    I started to code when I was 11 when I learnt Visual Basic. I was very enthusiastic to build things. 
    I have worked on some personal websites and portfolios and I am waiting for your projects to arrive at me. 
    I can create your personal portfolios, website landing pages and business/product pages.
    <br/><br/>
    Explore some of my coding projects in the browsers... Click on the chrome icon or Microsoft Edge icon to 
    get some content.
    `;
    document.querySelector(".window-content").innerHTML = str;
    if (document.querySelector(".file_window").style.visibility === "visible" && document.querySelector(".file_window").style.display === "block") {
        document.querySelector(".file_window").style.visibility = "hidden";
    } else {
        document.querySelector(".file_window").style.visibility = "visible";
        document.querySelector(".file_window").style.zIndex = Number(document.querySelector(".chrome_window").style.zIndex) + Number(document.querySelector(".exp_window").style.zIndex) + Number(document.querySelector(".me_window").style.zIndex) + 1;
    }
    document.querySelector(".file_window").style.display = "block";
})

// display div
$("#mrdevknown")
    .html('<object data="https://theshiveshnetwork.github.io/shivesh/"/>');