async function getCountries() {
    const data = await fetch ('https://restcountries.com/v3.1/all', {method:"GET"}) ;
  
    const countries = await data.json();
   // console.log (users);
    return countries;  }
  
 async function displayCountries() {
    const countries = await getCountries();
  
 const asian = countries.filter (ct => (ct.region==='Asia')); 
 
asian.forEach ((country) => {
     console.log (country.name);
     
        }
    ); 
  
   }

  displayCountries();
   
  