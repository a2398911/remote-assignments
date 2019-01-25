const inputNumber = document.querySelector('.inputNumber');
const sendButton = document.querySelector('.sendButton');
const errorMessage = document.querySelector('.errorMessage');
const answer = document.querySelector('.answer');

const getData = (number) => {
  return new Promise( (resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open('get',`http://localhost:3000/getData?number=${number}`);
    req.onload = function() { resolve(this.responseText) };
    req.onerror = () => reject("Error");
    req.send();
  });
};

sendButton.addEventListener('click', (e) => {
  const inputNumberValue = inputNumber.value;
  e.preventDefault();
  
  if( (/^\+?[1-9][0-9]*$/).test(inputNumberValue) ) {
    inputNumber.classList.remove('errorStatus');
    errorMessage.classList.add('hiddenBlock');

    getData(inputNumberValue).then((result) => {
      answer.textContent = result;
    }).catch((err) => {
      console.log(err)
    });


  } else {
    inputNumber.classList.add('errorStatus');
    errorMessage.classList.remove('hiddenBlock');
    answer.textContent = '';
  }
});