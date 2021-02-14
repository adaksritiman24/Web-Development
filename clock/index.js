let a;
let date;
let time;
let hr;
let sec;
let min;
let fhr;
let fmin;
let fsec;
let session;
let for12 = true;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById("time").style.fontFamily = 'Franklin Gothic Medium';
document.getElementById("time").style.color = "black";

function hr_12() {
    for12 = true;
    console.log("12 format");
}
function hr_24() {
    for12 = false;
    console.log("24 format");
}
setInterval(() => {
    a = new Date();
    date = "    " + a.toLocaleDateString(undefined, options);//day, month date, year
    hr = a.getHours();
    min = a.getMinutes();
    sec = a.getSeconds();
    //format hour session
    if (for12) {
        if (hr < 12) {
            session = "AM";
        } else {
            session = "PM";
        }
        hr = hr % 12;
        if (hr == 0) {
            hr = 12;
        }
    }
    //format hour, minutes and seconds
    if (hr < 10) {
        fhr = "0" + hr;
    } else {
        fhr = hr;
    }

    if (min < 10) {
        fmin = "0" + min;
    } else {
        fmin = min;
    }

    if (sec < 10) {
        fsec = "0" + sec;
    } else {
        fsec = sec;
    }

    time = "    " + fhr + ":" + fmin + ":" + fsec;
    // console.log(typeof (date + time));
    document.getElementById('time').innerHTML = time + "&nbsp";
    if (for12) {
        document.getElementById("ses").innerHTML = session;
    } else {
        document.getElementById("ses").innerHTML = "";
    }
    document.getElementById('days').innerHTML = date;
}, 500);
let light = true;
function stateChange() {
    if (light) {
        selfbtn = document.getElementById('selfbtn');
        selfbtn.style.color = "black";
        selfbtn.style.background = "aqua";
        selfbtn.innerText = "Switch to light mode"

        document.getElementById('navvy').classList.remove('bg-light');
        document.getElementById('navvy').classList.remove('navbar-light');
        // document.getElementById('navvy').classList.add('bg-dark');
        document.getElementById('navvy').classList.add('navbar-dark');
        document.getElementById('navvy').style.background = "black";

        document.getElementsByTagName('body')[0].classList.add('dark-bg');
        document.getElementsByClassName('jumbo-style')[0].classList.add('t-black');
        document.getElementsByClassName('timeclass')[0].classList.add('t-black');
        document.getElementsByClassName('timeclass')[1].classList.add('t-black');
        document.getElementById("time").style.color = "white";
        document.getElementById("ses").style.color = "white";

        document.getElementsByClassName('brw')[0].classList.add('black-bg');
        document.getElementsByClassName('bi-alarm')[0].style.color = "white";

        light = !light;
    } else {
        selfbtn = document.getElementById('selfbtn');
        selfbtn.style.color = "aqua";
        selfbtn.style.background = "black";
        selfbtn.innerText = "Switch to dark mode"

        document.getElementById('navvy').classList.remove('bg-dark');
        document.getElementById('navvy').classList.remove('navbar-dark');
        document.getElementById('navvy').classList.add('bg-light');
        document.getElementById('navvy').classList.add('navbar-light');

        document.getElementsByTagName('body')[0].classList.remove('dark-bg');
        document.getElementsByClassName('jumbo-style')[0].classList.remove('t-black');
        document.getElementsByClassName('timeclass')[0].classList.remove('t-black');
        document.getElementsByClassName('timeclass')[1].classList.remove('t-black');
        document.getElementById("time").style.color = "black";
        document.getElementById("ses").style.color = "black";

        document.getElementsByClassName('brw')[0].classList.remove('black-bg');
        document.getElementsByClassName('bi-alarm')[0].style.color = "black";
        light = !light;
    }

}