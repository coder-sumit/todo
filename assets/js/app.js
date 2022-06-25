// desc input
const descInput = document.getElementById('desc_input');
const descInputBox = document.getElementById('desc_input_box');

// cat input
const catInput = document.getElementById('cat_input');
const catInputBox = document.getElementById('cat_input_box');

// date input
const dateInput = document.getElementById('date_input');
const dateInputBox = document.getElementById('date_input_box');

// background color change of input on click
document.addEventListener('click', function(e){
    if(e.target == descInput){
        descInput.style.backgroundColor="#eee";
        descInputBox.style.backgroundColor="#eee";
    }else if(e.target == catInput){
        catInput.style.backgroundColor="#eee";
        catInputBox.style.backgroundColor="#eee";
    }else if(e.target == dateInput){
        dateInput.style.backgroundColor="#eee";
        dateInputBox.style.backgroundColor="#eee";
    }else{
    descInput.style.backgroundColor="#fff";
    descInputBox.style.backgroundColor="#fff";
    catInput.style.backgroundColor="#fff";
    catInputBox.style.backgroundColor="#fff";
    dateInput.style.backgroundColor="#fff";
    dateInputBox.style.backgroundColor="#fff";
    }

    // changing style of checked todos
    const Todos = document.querySelectorAll('.checkbox');
    for(i of Todos){
        if(i.checked){
            i.parentElement.style.textDecoration="line-through";
            i.parentElement.parentElement.style.backgroundColor="#B9F8D3";
        }else{
            i.parentElement.style.textDecoration="none";
            i.parentElement.parentElement.style.backgroundColor="white";

        }
    }

});

// script to delete todo

const delBtn = document.getElementById('del_btn');
delBtn.addEventListener('click', delTodo);

function delTodo(){
const Todos = document.querySelectorAll('.checkbox');

let deleteTodo = [];
for(i of Todos){
    if(i.checked){
        deleteTodo.push(i.dataset.id);
    }
}

// send delete request
let delUrl = "/delete_todo?ids="
for(i of deleteTodo){
    delUrl += i + "%";
}
window.location = delUrl;



}
