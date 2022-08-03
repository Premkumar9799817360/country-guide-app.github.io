console.log("this is file is connected");
let searchbtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
searchbtn.addEventListener('click', () => {
        // e.preventDefault();
        let countryName = countryInp.value;
        console.log(countryName);
        let finalURL = `https://restcountries.com/v3.1/name/${countryInp.value}?fullText=true`;
        console.log(finalURL);
        //  document.write(finalURL);
        fetch(finalURL).then((response) => response.json()).then((data) => {
                console.log(data);
                console.log(data[0]);
                console.log(data[0].capital[0]);
                console.log(data[0].area);
                console.log(data[0].flags.svg);
                console.log(data[0].languages);
                console.log(data[0].name.common);
                console.log(data[0].continents[0]);
                console.log(data[0].currencies.INR.name);
                console.log(data[0].currencies.INR.symbol);
                console.log(Object.values(data[0].languages).toString().split(",").join(", "));
                console.log(Object.values(data[0].borders).toString().split(",").join(", "));


                result.innerHTML = `<img src="${data[0].flags.svg}" class="flag-img">
        <h2>${data[0].name.common}</h2>
        <div class="wrapper">
        <div class="data-wrapper">
        <h4>Capital:</h4>
        <span>${data[0].capital[0]}</span>
        </div>
</div>
<div class="wrapper">
        <div class="data-wrapper">
        <h4>Continent:</h4>
        <span>${data[0].continents[0]}</span>
        </div>
</div>
<div class="wrapper">
        <div class="data-wrapper">
        <h4>Population:</h4>
        <span>${data[0].population}</span>
        </div>
</div>
<div class="wrapper">
        <div class="data-wrapper">
        <h4>Currency:</h4>
        <span>${data[0].currencies[Object.keys(data[0].currencies)].name
                        } - ${Object.keys(data[0].currencies)[0]}</span>
        </div>
</div>
<div class="wrapper">
        <div class="data-wrapper">
        <h4>Border:</h4>
        <span>${Object.values(data[0].borders).toString().split(",").join(", ")}</span>
        </div>
</div>


<div class="wrapper">
        <div class="data-wrapper">
        <h4>Area:</h4>
        <span>${data[0].area}</span>
        </div>
</div>

<div class="wrapper">
        <div class="data-wrapper">
        <h4>Currency Symbol:</h4>
         <span>${data[0].currencies.INR.symbol}</span>
        </div>
         </div> 
<div class="wrapper">
        <div class="data-wrapper">
        <h4>Common languages:</h4>
        <span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span>
        </div>
</div>

   `;
        }).catch(() => {
                if (countryName.length == 0) {

                        result.innerHTML = `<h3>The input field cannot be empty</h3>`
                }
                else {
                        result.innerHTML = '<h3>Please enter vaild country name.</h3>'
                }
        })
});