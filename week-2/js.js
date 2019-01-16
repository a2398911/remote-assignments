let heroTitle = document.querySelector('.hero-title');
let callBtn = document.querySelector('.callBtn');
let contentBlock = document.querySelectorAll('.connent-box');
let navbarHamButton = document.querySelector('.navbar-ham');
let navbarMenu = document.querySelector('.navbar-menu');
let closedButton = document.querySelector('.closed-button');

heroTitle.addEventListener('click', function(){
  this.textContent  = 'Have a Good Time!';
});

callBtn.addEventListener('click', ()=>{
  contentBlock.forEach(item =>{
    item.classList.remove('hidden_block');
  })
});

navbarHamButton.addEventListener('click', ()=>{
  navbarMenu.classList.add('show_block');
});

closedButton.addEventListener('click', ()=>{
  navbarMenu.classList.remove('show_block');
});

// --------------------------------------------------

// Assignment 1: Function and Array
function max(){
  let numbersArray = [...arguments];
  return numbersArray.reduce((previousValue,currentValue)=> {
    return previousValue > currentValue ? previousValue : currentValue
  });
}
console.log('1.Function and Array',max);

// Assignment 2: Object
function calculate(args){
  let result;
  if(args.op==="+"){
    result=args.n1+args.n2;
  }else if(args.op==="-"){
    result=args.n1-args.n2;
  }else{
    result="Not supported";
  }
  return result;
}
let Answer1 = {op:"+", n1:3, n2:4}
let Answer2 = {op:"-", n1:8, n2:1}
console.log('2.Object Answer:', Answer1, Answer2);


// Assignment 3: Function, Array, and Object
let result = avg({
  size:3,
  products: [
    {
      name:"Product 1",
      price:100
    },
    {
      name:"Product 2",
      price:700
    },
    {
      name:"Product 3",
      price:250
    }
  ]
});
function avg(data){
  let totalPrice = 0;
  data.products.forEach( item => totalPrice += item.price );
  return totalPrice / data.size
}
console.log('3.Function, Array, and Object', avg, 'Answer:',result);

//Assignment 5: Algorithm Practice (Advanced Optional)
function twoSum(nums, target){
  for(let i=0; i<nums.length; i++){
    for(let j=0; j<nums.length; j++){
      if( nums[i]+nums[j] == target && i!=j){
        return [i,j];
      }
    }
  }
}
console.log('5.Algorithm Practice', twoSum);