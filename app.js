let birthday = document.getElementById("birthday");
let snipper = document.getElementById("image");
let age_Year = document.querySelector(".age__calculator--years");
let age_Month = document.querySelector(".age__calculator--months");
let age_Day = document.querySelector(".age__calculator--days");
let age_Hour = document.querySelector(".age__calculator--hours");
let age_Minutes = document.querySelector(".age__calculator--minutes");
let age_Seconds = document.querySelector(".age__calculator--seconds");


birthday.addEventListener("change", function event() {
    let ageYear = new Date().getFullYear()-new Date(birthday.value).getFullYear() ;
    let ageMonth = new Date().getMonth()-new Date(birthday.value).getMonth();
    let ageDay = new Date().getDate()-new Date(birthday.value).getDate() ;
    let ageHour = new Date().getHours()-new Date(birthday.value).getHours() ;
    let ageMinutes = new Date().getMinutes()-new Date(birthday.value).getMinutes() ;
    let ageSeconds = new Date().getSeconds()-new Date(birthday.value).getSeconds() ;
    
    if (ageSeconds <0) {ageSeconds +=60, ageMinutes --}
    if (ageMinutes <0) {ageMinutes +=60, ageHour --}
    if (ageHour <0) {ageHour +=24, ageDay --}
    if (ageDay <0) {ageDay +=31, ageMonth --}
    if (ageMonth < 0) {ageMonth += 12, ageYear --}
    
    
    age_Year.firstElementChild.innerText = (ageYear +"").padStart(2,"0");
    age_Month.firstElementChild.innerText = (ageMonth+"").padStart(2,"0");
    age_Day.firstElementChild.innerText = (ageDay+"").padStart(2,"0");
    age_Hour.firstElementChild.innerText = ( ageHour+"").padStart(2,"0");
    age_Minutes.firstElementChild.innerText =(ageMinutes+"").padStart(2,"0");
    age_Seconds.firstElementChild.innerText = (ageSeconds+"").padStart(2,"0");

    setInterval(event,1000);
    snipper.style.display = "none";

});

