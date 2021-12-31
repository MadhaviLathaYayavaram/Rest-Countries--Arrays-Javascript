async function getCountries() {
    const data = await fetch ('https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json', {method:"GET"}) ;
  
    const countries = await data.json();
   // console.log (users);
    return countries;  }
  
 async function displayCountries() {
    const countries = await getCountries();
 const currency = countries.filter (ct => (ct.currencies).filter(c => c.name ==="United State Dollar"));
 
 
currency.forEach ((country) => {
     console.log (country.name);
     
        }
    ); 
  
   }

  displayCountries();
   
  