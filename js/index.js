const display = document.getElementById("display");
const countNumber = document.getElementById("count-number");
const counterBtn = document.getElementById("count-btn");

let initialCount;

const getCount = JSON.parse(localStorage.getItem("count"));

if (getCount !== null) {
  initialCount = parseFloat(getCount);
  countNumber.innerText = initialCount;
} else {
  initialCount = parseFloat(countNumber.innerText);
}

const startCounter = () => {
  setInterval(() => {
    initialCount += 0.000005;
    countNumber.innerText = initialCount.toFixed(6);
    localStorage.setItem("count", JSON.stringify(initialCount.toFixed(6)));
  }, 1000);
};
