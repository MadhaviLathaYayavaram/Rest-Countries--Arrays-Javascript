async function getCountries() {
    const data = await fetch ('https://restcountries.com/v3.1/all', {method:"GET"}) ;
  
    const countries = await data.json();
   // console.log (users);
    return countries;  }
  
 async function displayCountries() {
    const countries = await getCountries();
  console.log (countries);
 const population = countries.filter (ct => (ct.population<=parseInt('200000'))); 
 
asian.forEach ((country) => {
     console.log (country.name);
     
        }
    ); 
  
   }

  displayCountries();
   
  