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
  data.forEach(item => {
    const li = document.createElement("li");
    const cardImgWrap = document.createElement("div");
    const cardImg = document.createElement("img");
    const cardBody = document.createElement("div");
    const cardTitle = document.createElement("h5");
    const cardPrice = document.createElement("h5");
    const cardText = document.createElement("p");

    li.className = "card";
    cardImgWrap.className = "card-img-wrap";
    cardImg.className = "card-img";
    cardImg.src = item.url;
    cardBody.className = "card-body";
    cardTitle.className = "card-title";
    cardTitle.textContent = item.name;
    cardPrice.className = "card-price";
    cardPrice.textContent = `$ ${item.price}`;
    cardText.className = "card-text";
    cardText.textContent = item.description;

    li.appendChild(cardImgWrap).appendChild(cardImg);
    li.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardPrice);
    cardBody.appendChild(cardText);

    dataList.appendChild(li);
  });
}
ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response){
  render(response);
}); 