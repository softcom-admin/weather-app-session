const weather = document.getElementById("weather")
const place = document.getElementById("location")
const time  = document.getElementById("time")
const temperature = document.getElementById("temperature")
const ropar = document.getElementById("ropar")
const chd = document.getElementById("chd")
const delhi = document.getElementById("delhi")

async function getWeather(url){
    const res = await fetch(url)
    // console.log(res)
    const data = res.json()
    return data

}
const locationArr = [
    ropar,chd,delhi
]
const locationObj= {
    "ropar":[30.9661,76.5231],
    "chd":[30.7400,76.7567],
    "delhi":[28.7041,77.1025]
}
// console.log(locationArr.ropar)

let urlArr
const date = new Date
ropar.addEventListener("click",()=>{
    urlArr = locationObj.ropar
    let url = `https://api.open-meteo.com/v1/forecast?latitude=${urlArr[0]}&longitude=${urlArr[1]}&current_weather=true&hourly=temperature_2m`
    getWeather(url).then((res)=>{
    console.log(res)  
    place.innerHTML = "Ropar"
    time.innerHTML = `Time : ${date.toLocaleTimeString()}
    <button onClick = "location.reload()" style="position:absolute;bottom:1rem">More Locations</button>
`
temperature.innerHTML = `Temperature : ${res.current_weather.temperature}&deg C <br>
                 Windspeed : ${res.current_weather.windspeed}  Km/h 
`
})

})

delhi.addEventListener("click",()=>{
    urlArr = locationObj.delhi
    let url = `https://api.open-meteo.com/v1/forecast?latitude=${urlArr[0]}&longitude=${urlArr[1]}&current_weather=true&hourly=temperature_2m`
    getWeather(url).then((res)=>{
    console.log(res)  
    place.innerHTML = "Delhi"
    time.innerHTML = `Time : ${date.toLocaleTimeString()}
                <button onClick = "location.reload()" style="position:absolute;bottom:1rem;">More Locations</button>
    `
    temperature.innerHTML = `Temperature : ${res.current_weather.temperature}&deg C <br>
                             Windspeed : ${res.current_weather.windspeed}  Km/h 
    `
    })

})

chd.addEventListener("click",()=>{
    urlArr = locationObj.chd
    let url = `https://api.open-meteo.com/v1/forecast?latitude=${urlArr[0]}&longitude=${urlArr[1]}&current_weather=true&hourly=temperature_2m`
    getWeather(url).then((res)=>{
    console.log(res)  
    place.innerHTML = "Chandigarh"
    time.innerHTML = `Time : ${date.toLocaleTimeString()}
                <button onClick = "location.reload()" style="position:absolute;bottom:1rem;">More Locations</button>
    `
    temperature.innerHTML = `Temperature : ${res.current_weather.temperature}&deg C <br>
                             Windspeed : ${res.current_weather.windspeed}  Km/h 
    `
    })

})


    
   
    



