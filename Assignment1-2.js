// Assignment 1: Callback Function
function delayedResult(n1, n2, delayTime, callback){
  const result = +n1 + +n2;
  const callbackFunc = () => callback(result);
  
  setTimeout(callbackFunc, delayTime)
}
delayedResult(4, 5, 3000, function(result){
  console.log(result);
}); 
delayedResult(-5, 10, 2000, function(result){
  window.alert(result);
}); 

// Assignment 2: Callback Function and Advanced HTML DOM
function ajax(src, callback){
  fetch(src)
    .then(response => {
      return response.json()
    })
    .then(jsonObject => {
      callback(jsonObject)
    })
    .catch(error => {
      console.log('錯誤訊息', error)
    })
}
function render(data){
  data[0].url = 'http://www.three.co.uk/static/images/device_pages/MobileVersion/Google/Pixel_3/Just_Black/desktop/1.jpg'
  data[1].url = 'https://techcrunch.com/wp-content/uploads/2015/09/chromecast-family-with-audio.jpg?w=730&crop=1'
  data[2].url = 'https://boygeniusreport.files.wordpress.com/2017/09/google-pixelbook1.jpg?quality=98&strip=all&w=782'

  const dataList = document.querySelector('#dataList');
  let dataStr = '';
  data.forEach(item => {
    dataStr += `
    <li class="card">
      <div class="card-img-wrap"><img class="card-img" src="${item.url}" alt=""></div>
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <h5 class="card-price">$ ${item.price}</h5>
        <p class="card-text">${item.description}</p>
      </div>
    </li>
    `
  });
  dataList.innerHTML = dataStr;
}
ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response){
  render(response);
}); 