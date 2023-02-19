let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == 'Ans'){
      string = eval(string);
      document.querySelector('input').value = string;
    }

    else if(e.target.innerHTML == 'DE') {   
            const inputElement = document.querySelector('input');
            const inputString = inputElement.value;
            const inputArray = inputString.split('');
            if (inputArray.length > 1) {
              inputArray.pop();
              const updatedString = inputArray.join('');
              inputElement.value = updatedString;
              string = updatedString;
            } else {
              inputElement.value = '';
              string = '';
            }
        } 

    else if(e.target.innerHTML == 'CA'){
      string = ""
      document.querySelector('input').value = string;
    }
    
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})
