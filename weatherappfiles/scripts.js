// let inputvalue = document.querySelector("#input-val")
// let button = document.querySelector("#SearchBtn")
// let citydata =document.querySelector("#city-name").innerHTML =data.name
// console.log(citydata);


const apikey ="fec7e27a2362e04800fe797b313f2a81"
const apiurl ="https://api.openweathermap.org/data/2.5/weather?&units=metrict&q=bangalore"

async function checkweather() {
    const response = await fetch(apiurl +`&q=banglore&appid=${apikey}`);
    console.log(response);
    
    var data = await response.json()
    console.log(data);
    
    document.querySelector("#city-name").innerHTML =data.name

}
checkweather()
