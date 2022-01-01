async function getCountries() {
    const data = await fetch ('https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json', {method:"GET"}) ;
  
    const countries = await data.json();
   // console.log (users);
    return countries;  }
  
 async function displayCountries() {
    const countries = await getCountries();

console.log ("The Total Population of all the countries is : " );

 var result = countries.reduce(function (acc, obj) { return acc + obj.population; }, 0)
 
 console.log (result);
 }

  displayCountries();
   
  