var arr = ["Learning Python", "Learning JavaScript","Learning Sql"];

function Enter1() {
    var Text = document.getElementById('text');
    var table = '';
    for (let i = 0; i < arr.length; i++) {
        table = table + `<div class='matn'><li>${arr[i]}</li>
        <button onclick= 'Delete(${i})'>Delete</button>
        </div>`
    }
    Text.innerHTML = table


}
function Delete(i) {
    arr.splice(i,1)
    Enter1()
}

function Add() {
    var Word = document.getElementById('todo').value;
    arr.push(Word)
    Enter1()
}


Enter1();