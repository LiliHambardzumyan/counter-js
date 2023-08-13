let counter = document.getElementById("counter");
let decrease = document.getElementById("button-decrease");
let res = document.getElementById("button-reset");
let increase = document.getElementById("button-increase");
let count = 0;

decrease.addEventListener("click", ()=> {
    count --;
    counter.innerHTML = count;
    colors();
} )
res.addEventListener("click", ()=> {
    count = 0;
    counter.innerHTML = count;
    colors();
})
increase.addEventListener("click", ()=> {
    count ++;
    counter.innerHTML = count;
    colors();
})

function colors() {
    if(count > 0) {
        counter.style.color = "green";
    }
    if(count < 0) {
        counter.style.color = "red";
    }
    if (count === 0) {
        counter.style.color = "midnightblue";
    }
}