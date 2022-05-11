const inputval = document.querySelector('#cityinput');
const btn = document.querySelector('#add');
const city = document.querySelector('#cityoutput');
const currenttemp = document.querySelector('#currenttemp');
const feellike = document.querySelector('#feellike');
const humidity = document.querySelector('#humidity');
const wind = document.querySelector('#wind');
const clouds = document.querySelector('#clouds');
const pressure = document.querySelector('#pressure');




const time_displayer = document.querySelector('#time');
 

btn.addEventListener('click', function(){
  let url = 'https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&units=metric&appid=4674f37c722fa851b2de3dd582ce7730';
     fetch(url)
    .then((res) => res.json()).then((data) => {
        console.log(data);
        city.innerHTML = ` ${data.sys.country}, ${data.name}`;
      
        currenttemp.innerHTML = `<span class="imgdisplay"><img src="./img/cloudy.png"/></span><span class="temp">Current Temp :</span> ${data.main.temp}<span><sup>o </sup>C</span>`;
        feellike.innerHTML = `<span class="pall"><img src="./img/like.png" alt="">:feel_likes :</span>${data.main.feels_like}<span><sup>o </sup>C</span>`;
        humidity.innerHTML = `<span class="pall"><img src="./img/humidity.png" alt="">humidity :</span> ${data.main.humidity}`;
        wind.innerHTML = `<span class="pall"><img src="./img/tornado.png" alt="">:wind :</span> ${data.wind.speed}<sapn> Km/h</span>`;
        clouds.innerHTML = `<span class="pall"><img src="./img/cloud.png" alt="">:clouds :</span> ${data.weather[0].description}`;
        pressure.innerHTML = `<span class="pall"><img src="./img/pressure.png" alt="">:pressure :</span> ${data.main.pressure}m/b`;


        let hours=new Date().getHours()
        let minutes=new Date().getMinutes()
        if(minutes<10){
        minutes="0"+minutes
       }
      if(hours>12){
        hours="0"+hours-12     
        time_displayer.innerHTML="Time : <span>"+hours+":"+minutes+" PM"
    }else{
        time_displayer.innerHTML="Time : "+hours+":"+minutes+" AM"
    }

        
    })

    const showdiv = document.querySelector('.showdiv');
    if (showdiv.style.display === "none") {
      
    } else {
      showdiv.style.display = "none";
    }
  
    
})
