const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");
//--------------------------------------Funcion agregar elemento
addBtn.addEventListener("click", (e) => {
  input.placeholder = "Escribe para poder EDITAR o AGREGAR";
  input.className = "grisesito";
  e.preventDefault();

  const text = input.value;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");

    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    li.appendChild(addEditBtn());
    ul.appendChild(li);

    input.value = "";
    empty.style.display = "none";
  } else {
    input.placeholder = "Es necesario que escribas algo";
    input.className = "rojito";
  }
});
//--------------------------------------Funcion borrar elemento

function addDeleteBtn() {

  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "Delete";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);
    console.log(item);

    const items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block";
    }
  });

  return deleteBtn;
}
//--------------------------------------Funcion editar elemento
function addEditBtn() {
  const editBtn = document.createElement("button");
  const entrada = document.getElementById("entrada");
  const pa = document.createElement("p");


  editBtn.textContent = "Edit";
  editBtn.className = "btn-edit";

  editBtn.addEventListener("click", (e) => {

    if (entrada.value <= 0) {
      input.placeholder = "EDITAR - requiere que escribas algo";
    input.className = "naranjita";
    } 
    else {
      pa.textContent = entrada.value;
      var item = e.target;
      var item1 = e.target.parentElement;
      var item2 = e.target.parentElement.childNodes[0];
      item1.replaceChild(pa, item2);
      input.value = "";

    }

  });



  return editBtn;
}