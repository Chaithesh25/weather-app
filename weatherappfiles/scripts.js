// let inputvalue = document.querySelector("#input-val")
// let button = document.querySelector("#SearchBtn")
// let citydata =document.querySelector("#city-name").innerHTML =data.name
// console.log(citydata);




async function checkweather() {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=bangalore&units=metric&appid=fec7e27a2362e04800fe797b313f2a81")
    var data = await response.json()
    console.log(data);
    
    document.querySelector("#city-name").innerHTML =data.name

}
checkweather()
