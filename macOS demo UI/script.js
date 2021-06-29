var show = "100px";
var showsmall= "200px";
var hide = "-900px";

var zlow = "1";
var zhigh = "15";


saf = document.getElementById("saf");
safbox = document.getElementById("safari");
safbox.style.bottom = hide;
saf.addEventListener("click", ()=>{
    if(safbox.style.bottom == hide){ //hidden
        safbox.style.bottom = show;
        safbox.style.zIndex = zhigh;
        saf.classList.add("focus-background");
    }
    else{
        safbox.style.bottom = hide;
        safbox.style.zIndex = zlow;
        saf.classList.remove("focus-background");
    }
})

not = document.getElementById("not");
notes = document.getElementById("notes");
notes.style.bottom = hide;
not.addEventListener("click", ()=>{
    if(notes.style.bottom == hide){ //hidden
        notes.style.bottom = showsmall;
        notes.style.zIndex = zhigh;
        not.classList.add("focus-background"); 
    }
    else{
        notes.style.bottom = hide;
        notes.style.zIndex = zlow;
        not.classList.remove("focus-background");
    }
})

cal = document.getElementById("cal");
calender = document.getElementById("calender");
calender.style.bottom = hide;
cal.addEventListener("click", ()=>{
    if(calender.style.bottom == hide){ //hidden
        calender.style.bottom = show;
        calendar.style.zIndex = zhigh;
        cal.classList.add("focus-background"); 
    }
    else{
        calender.style.bottom = hide;
        calendar.style.zIndex = zlow;
        cal.classList.remove("focus-background"); 
    }
})

mu = document.getElementById("mu");
music = document.getElementById("music");
music.style.height = "0vh";
music.style.top = '300px';
mu.addEventListener("click", ()=>{
    if(music.style.height == "0vh"){ //hidden
        music.style.height = "20vh";
        music.style.zIndex = zhigh;
        mu.classList.add("focus-background");
    }
    else{
        music.style.height = "0vh";
        music.style.zIndex = zlow;
        mu.classList.remove("focus-background");
    }
})

ne = document.getElementById("ne");
news = document.getElementById("news");
news.style.bottom = hide;
ne.addEventListener("click", ()=>{
    if(news.style.bottom == hide){ //hidden
        news.style.bottom = showsmall;
        news.style.zIndex = zhigh;
        ne.classList.add("focus-background");
    }
    else{
        news.style.bottom = hide;
        news.style.zIndex = zlow;
        ne.classList.remove("focus-background");
    }
})

we = document.getElementById("we");
weather = document.getElementById("weather");
weather.style.height = "0vh";
we.addEventListener("click", ()=>{
    if(weather.style.height == "0vh"){ //hidden
        weather.style.height = "80vh";
        weather.style.zIndex = zhigh;
        we.classList.add("focus-background");
    }
    else{
        weather.style.height = "0vh";
        weather.style.zIndex = zlow;
        we.classList.remove("focus-background");
    }
})

set = document.getElementById("set");
settings = document.getElementById("settings");
settings.style.height = "0vh";
set.addEventListener("click", ()=>{
    if(settings.style.height == "0vh"){ //hidden
        settings.style.height = "80vh";
        settings.style.zIndex = zhigh;
        set.classList.add("focus-background");
    }
    else{
        settings.style.height = "0vh";
        settings.style.zIndex = zlow;
        set.classList.remove("focus-background");
    }
})

app = document.getElementById("app");
appstore = document.getElementById("appstore");
appstore.style.height = "0vh";
app.addEventListener("click", ()=>{
    if(appstore.style.height == "0vh"){ //hidden
        appstore.style.height = "80vh";
        appstore.style.zIndex = zhigh;
        app.classList.add("focus-background");
    }
    else{
        appstore.style.height = "0vh";
        appstore.style.zIndex = -1;
        app.classList.remove("focus-background");
    }
})

// Adding the Notification bar
var hidenf = "-320px";
var shownf = "0px";

shownoti = document.getElementById("show-noti");
notbar = document.getElementById("notbar");
notbar.style.right = hidenf;
shownoti.addEventListener("click", function(){
    console.log("inside");
    if(notbar.style.right == hidenf){ //hidden
        notbar.style.right = shownf;
        notbar.style.zIndex = zlow;
        // console.log("if");
    }
    else{
        // console.log("else");
        notbar.style.right = hidenf;
        notbar.style.zIndex = zlow;
    }
})

//logo dropdown
logoitem = document.getElementById("logo-item");
logodd = document.getElementById("logo-item").childNodes[2];
logodd.style.display="none";
logoitem.addEventListener("click", function(){
    if(logodd.style.display=="none"){
        logodd.style.display = "inline";
    }
    else{
        logodd.style.display = "none";
    }
})