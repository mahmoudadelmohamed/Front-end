document.querySelector('.get-jokes').addEventListener('click', getJokes);
function getJokes(e) {
    const number = document.querySelector('input[type="number"]').value;
    var URL =  `http://api.icndb.com/jokes/random/${number}` ,
        Method = 'GET';
     const xhr = new XMLHttpRequest();
     xhr.open(Method, URL, true);
     xhr.onload = function () {
        if(xhr.status === 200) {
           const resivesd = JSON.parse(xhr.responseText);
           let output = '';

           if(resivesd.type === 'success') {
             resivesd.value.forEach(function(joke) {
                output += `<li> ${joke.joke}</li>`;
             });
           }
           else  {
             output += `<li> Something Wrong </li>`;
           }
           document.querySelector('.jockes').innerHTML = output;
        }
     }
     xhr.send();
    e.preventDefault();
}
//Single Customer
/*
document.getElementById('button1').addEventListener('click', loadCustomer);
 function loadCustomer(e) {
   const xhr = new XMLHttpRequest();
   xhr.open('GET', 'customer.json', true);
   xhr.onload = function () {
   //  console.log(xhr.status);
     if(xhr.status === 200) {
      // console.log(xhr.responseText);
       const customer = JSON.parse(xhr.responseText);
       const output = `<ul>
        <li> Id: ${customer.id} </li>
        <li> Name: ${customer.name} </li>
        <li> Company: ${customer.company} </li>
       <li>   Phone: ${customer.phone} </li>
       </ul>`;
       document.getElementById('customer').innerHTML = output;
     }
   }
   xhr.send();
}
// Many Customers
document.getElementById('button2').addEventListener('click', loadCustomers);
function loadCustomers() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'customers.json', true);
    xhr.onload = function() {
      let output = '';
        const customers = JSON.parse(xhr.responseText);
         for(var i = 0; i < customers.length; i ++) {
            output += `
              <ul>
                <li> Id: ${customers[i].id} </li>
                <li> Name: ${customers[i].name} </li>
                <li>  Company: ${customers[i].company} </li>
                <li>  Phone: ${customers[i].phone} </li>
             </ul>
            `;
         }
           document.getElementById('customers').innerHTML = output;

    }
    xhr.send();
}


*/
















      // HTTP Statuses
      // 200: OK
      // 403: Forbidden
      // 404: Not Found

      // readyState Values
      // 0: request not initialization
      // 1: server connection stablished
      // 2: request resivesd
      // 3: processing request
      // 4: request finished and responsed
