const inputbox = document.getElementById("input-box");
const Listcontainer = document.getElementById("list-container");


// Clear localStorage (temporary during development)
// localStorage.clear();

function addtask() {
  if (inputbox.value === "") {
    alert("you must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    Listcontainer.appendChild(li);

    let span = document.createElement("span");//online uthavelu
    span.innerHTML = "\u00D7";//
    li.appendChild(span);//
  }
  inputbox.value = "";
}

Listcontainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      savedata();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      savedata();
    }
  },
  false
);
function savedata(){
    localStorage.setItem("data", Listcontainer.innerHTML);
}

function showTask(){
    Listcontainer.innerHTML = localStorage.getItem("data");
}

showTask();
document.querySelector('button').addEventListener('click', addTask);
