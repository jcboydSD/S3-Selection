//IF structure ******************************

let result;
let color1 = "red";
let color2 = "blue";
//let color1 = "yellow";
//let color2 = "blue";
//let color1 = "red";
//let color2 = "yellow";

if ((color1 == 'blue' && color2 == 'red') || (color1 == 'red' && color2 == 'blue')) {
    result = 'purple';
} else if ((color1 == 'blue' && color2 == 'yellow') || (color1 == 'yellow' && color2 == 'blue')) {
    result = 'green';
} else  if ((color1 == 'yellow' && color2 == 'red') || (color1 == 'red' && color2 == 'yellow')) {
    result = 'orange';
} else {
    result = null;
}
console.log(`If structure\nfirst color is ${color1}, second color is ${color2}\nnew color is ${result}`);

//Switch structure ******************************

//let weatherType = 'ice';
//let weatherType = 'snow';
let weatherType = 'rain';
//let weatherType = 'sun';
let weatherAction;

switch (weatherType) {
    case "ice":
        weatherAction = 'Use studded tires and chains';
        break;
    case "snow":
        weatherAction = 'Brush all snow off the car before driving';
        break;
    case "rain":
        weatherAction = 'Turn on headlights and use wipers';
        break;
    case "sun":
        weatherAction = 'Wear sunglasses';
        break;
}
console.log(`Switch structure\nWeather is ${weatherType}\n${weatherAction}`);

