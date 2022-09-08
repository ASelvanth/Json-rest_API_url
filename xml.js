
const xhr = new XMLHttpRequest();

xhr.open("GET","https://restcountries.com/v3.1/all");

xhr.send();  //dial

xhr.responseType= "json"; //data format

xhr.onload = function displayResult(){
const countries = xhr.response;  //data
console.log(countries);
console.log("number of countries",countries.length);
console.log("name of countries",countries[0].name);


for (let index in countries){
    console.log(countries[+index + 1].name.common); //all countries names
    console.log(countries.flag.common);
}



};


