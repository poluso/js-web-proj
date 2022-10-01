const mainEl = document.querySelector("#mainEl");

//mainEl.appendChild(document.createElement("span"));
mainEl.innerHTML = "Hello World";
const array = [0101, 0011010, 001010];
 
array.forEach((elOfArray) => {
    parseInt(elOfArray, 2);
})
function enumerate () {
    alert(--document.getElementById("1").value +
    --document.getElementById("2").value +
    --document.getElementById("3").value);
}