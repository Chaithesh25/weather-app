// let inputvalue = document.querySelector("#input-val")
// let button = document.querySelector("#SearchBtn")
// let citydata =document.querySelector("#city-name").innerHTML =data.name
// console.log(citydata);


const weathericon = document.querySelector("#icons")
const weatherbox = document.querySelector(".weather")
const errormsg = document.querySelector("#invalid-data")



async function checkweather(input) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=fec7e27a2362e04800fe797b313f2a81`)
    var data = await response.json()
       if(data.cod!=="404" ){
        weatherbox.classList.remove("hidden")
        errormsg.classList.add("hidden")
    }else{
        weatherbox.classList.add("hidden")
        errormsg.classList.remove("hidden")
    }
    
    
    const cityname = document.querySelector("#city-name").innerHTML =data.name
    document.querySelector("#temp").innerHTML = Math.round(data.main.temp)+"°C"
    const weatherr = data.weather[0].main

     
    

    if(weatherr =="Clouds")
    {
       weathericon.src ="images/clouds.png";
        
    }else if(weatherr == "rain")
    {
        weathericon.src ="images/rain.png"
    }else if(weatherr == "mist")
    {
        weatherr.src ="images/mist.png"
    }else if(weatherr == "snow")
    {
        weatherr.src ="images/snow.png"
    }else if(weatherr == "drizzle")
    {
        weatherr.src ="images/drizzle.png"
    }

    
    
    



}


const value = document.getElementById("SearchBtn").addEventListener("click",function()
{
    const inputVal = document.getElementById("input-val")
    const input = inputVal.value

    checkweather(input)
    
})

console.log(value);


