//"/api/:index/",

function addData(index) {
  fetch(`/api/${index}/`)
    .then(e => e.json())
    .then(function(data) {
      document.querySelector("h3").innerText = data.city;
      document.querySelector("span").innerText = data.temp;
      document.querySelector("img").src = data.img;
    })
    .catch();
}

const buttons = document.querySelectorAll("button");

buttons[0].addEventListener("click", function() {
  addData(0);
});

buttons[1].addEventListener("click", function() {
  addData(1);
});

buttons[2].addEventListener("click", function() {
  addData(2);
});
