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
    document.getElementById('time').innerHTML = time;
    document.getElementById('date').innerHTML = date;

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

// chrome window
document.querySelector(".chrome").addEventListener("click", function () {
    close_function();
    if (document.querySelector(".chrome_window").style.visibility === "visible" && document.querySelector(".chrome_window").style.display === "block") {
        document.querySelector(".chrome_window").style.visibility = "hidden";
    } else {
        document.querySelector(".chrome_window").style.visibility = "visible";
        document.querySelector(".chrome_window").style.zIndex = Number(document.querySelector(".me_window").style.zIndex) + Number(document.querySelector(".exp_window").style.zIndex) + Number(document.querySelector(".file_window").style.zIndex) + 1;
    }
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
    if (document.querySelector(".me_window").style.visibility === "visible" && document.querySelector(".me_window").style.display === "block") {
        document.querySelector(".me_window").style.visibility = "hidden";
    } else {
        document.querySelector(".me_window").style.visibility = "visible";
        document.querySelector(".me_window").style.zIndex = Number(document.querySelector(".chrome_window").style.zIndex) + Number(document.querySelector(".exp_window").style.zIndex) + Number(document.querySelector(".file_window").style.zIndex) + 1;
    }
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
    if (document.querySelector(".file_window").style.visibility === "visible" && document.querySelector(".file_window").style.display === "block") {
        document.querySelector(".file_window").style.visibility = "hidden";
    } else {
        document.querySelector(".file_window").style.visibility = "visible";
        document.querySelector(".file_window").style.zIndex = Number(document.querySelector(".chrome_window").style.zIndex) + Number(document.querySelector(".exp_window").style.zIndex) + Number(document.querySelector(".me_window").style.zIndex) + 1;
    }
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
    if (document.querySelector(".exp_window").style.visibility === "visible" && document.querySelector(".exp_window").style.display === "block") {
        document.querySelector(".exp_window").style.visibility = "hidden";
    } else {
        document.querySelector(".exp_window").style.visibility = "visible";
        document.querySelector(".exp_window").style.zIndex = Number(document.querySelector(".chrome_window").style.zIndex) + Number(document.querySelector(".me_window").style.zIndex) + Number(document.querySelector(".file_window").style.zIndex) + 1;
    }
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


// display div
$("#mrdevknown")
    .html('<object data="https://mrdevknown.blogspot.com/"/>');