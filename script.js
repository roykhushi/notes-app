//creating variables 

const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");//queryselectorAll is used to select all the p tags used for creating the notes


//adding the local storage in the browser so that evrytime the browser is refreshed the notes dont disapper
function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML); //whatever is written inside the notesconatiner.innerhtml that will be stored in the browser
}
//function to show notes if their exists any in the local storage
function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();


createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p"); // a p tag will be created 
    let img = document.createElement("img"); //img will be created
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable" , "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img); //whenever the button is clicked an input box with the delete icon will be created
})

// the above code is same as:
/* <p contenteditable="true" class="input-box">
<img src="images/delete.png" alt="delete-icon"></p>  
*/

notesContainer.addEventListener("click", function(e){ //if we are clicking in the notes container and the target click = img then we have to delete the parent element that is the notes container hence the notes will the deleted 
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    //saving the data in the local storage 
    //nt = short form of notes
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();s
            }
        })

    }
})


//adding a line break whenever enter is pressed

document.addEventListener("keydown" , event =>{
    if(event.key === 'Enter'){
        document.execCommand("insertLineBreak");
        event.preventDefault(); //preventing the default feature of the enter key
    }
})

function onClick(){
    var cursor = document.querySelector('.notes-container');
    div.style.pointerEvents = "auto";

    console.log("click");
}

//making the notes draggable
