//document.getElementById("count-el").innerText=5
//student counter
let count = 0
function increment(){
    count =count + 1
    console.log(count)
    document.getElementById("count-el").innerHTML=count
}
function save() {
    document.getElementById("entries").innerHTML += count + " - ";
}
