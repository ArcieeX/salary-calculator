const form = document.getElementById('form');
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  console.log("click")
	event.preventDefault();
	const data = new FormData(event.target);
	const dataObject = Object.fromEntries(data.entries());
	console.log(dataObject);
  calculate(dataObject.state, dataObject.salary, dataObject.type)
  
	form.reset();
  //above is boiler plate code
}

/*
STEPS:
1. Fix the form in HTML so it works for 3 states
2. Finish the render function
- need a div or something in your HTML to push the data into
*/


let tax;
let netPay;
let annual;
let month;



function calculate(state, salary) {
  // tax, netPay, month
  if(state === "new york") {
    tax = salary * .2;
    
  } else if (state === "colorado"){
    tax = salary * .14;
  } else {
    tax = salary * .34;
  }
  netPay = salary - tax;
  annual = (salary- tax) * 12;
  month = (salary + tax)/12;
  console.log(tax, salary);
  displayTax(tax, salary, state, netPay, month, annual);
}




function displayTax(tax, salary, state, netPay, month, annual) {
    const outputContainer = document.getElementById('output');
    outputContainer.innerHTML = `<h3>Calculated Tax Summary:</h3><p> If you make  ${salary} a year living in the region of ${state}, you will be taxed ${tax}.

    Or if you make ${salary} montly living in the region of ${state}, you will be taxed ${tax}. That means that your net pay will be ${annual}per year, or ${month} per month. Your average tax rate is ${netPay}.</p>`;

    outputContainer.style.display = "block";

    
 //appendChilder or innerHtmkl or textContent
}
