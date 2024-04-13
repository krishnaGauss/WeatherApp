function getWeather(){
    console.log("I was clicked");
    const apikey = '11dfcb5ab2299b43282d0a487e6ad100';
    const city = document.getElementById("city").value;

    if(!city){
        alert("Please fill in a city");
        return;
    }

    const city_code=fetch('http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apikey}');

    console.log(city_code["lat"]);


}