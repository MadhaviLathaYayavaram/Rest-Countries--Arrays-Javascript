async function getCountries() {
    const data = await fetch ('https://restcountries.com/v3.1/all', {method:"GET"}) ;
  
    const countries = await data.json();
   // console.log (users);
    return countries;  }
  
   async function displayCountries() {
    const countries = await getCountries();
       
  const container= document.createElement("div");
  container.className ="container";
  document.body.append(container);
  
  const row=document.createElement("div");
  row.className ="row";
  document.body.append (row);
  
  countries.forEach ((country) => {
  console.log (country.flags.png);
  const column=document.createElement("div");
  column.className ="col";
  document.body.appendChild (column);
  
  const txtFlag= document.createElement ('img');
  txtFlag.className = 'info';
  txtFlag.src = country.flags.png;
  document.body.appendChild(txtFlag);
  
  const txtName= document.createElement ('h3');
  txtName.innerHTML = country.name.common;
  document.body.appendChild(txtName);
  
  const txtPopulation= document.createElement ('p');
  txtPopulation.innerHTML = '<span> <strong> Population : </strong> </span> ' + country.population;
  //txtPopulation.innerHTML = country.population;
  document.body.appendChild(txtPopulation);
  
  
  const txtCapital= document.createElement ('p');
  txtCapital.innerHTML = '<span> <strong> Capital : </strong> </span> ' +country.capital;
  document.body.appendChild(txtCapital);
  
  } );
        }
