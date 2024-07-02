let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let shoppinglist = document.getElementById("shoppinglist");

function createListElement() {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  shoppinglist.appendChild(li);
  input.value = "";
}

function listLength() {
  return input.value.length;
}

function addListAfterClick() {
  if (listLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (listLength() > 0 && event.key === "Enter") {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keydown", addListAfterKeypress);
