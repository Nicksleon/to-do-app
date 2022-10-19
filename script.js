const item = document.getElementById("item");
const btnSubmit = document.getElementById("submit");
const btnClearList = document.getElementById("clear-list");
const btnItemRemove = document.getElementById("delete-btn");
const section = document.querySelector("section");
const div = document.querySelector(".list");

// submit-button
btnSubmit.addEventListener("click", () => {
  value = item.value;
  if (!!value === true) {
    const li = document.createElement("li");
    li.id = "item-list";
    li.innerHTML = value;
    // "<button class='item-delete x' id='delete-btn'>X</button>" +
    // "<button class='item-delete2'>Done</button>";
    div.appendChild(li);

    // // remove-button
    let btnRemove = document.createElement("button");
    btnRemove.className = "btn remove";
    btnRemove.innerHTML = "Remove";
    btnRemove.onclick = function () {
      li.remove();
    };
    li.appendChild(btnRemove);

    let btnDone = document.createElement("button");
    btnDone.className = "btn done";
    btnDone.innerHTML = "Done";
    btnDone.onclick = function () {
      li.remove();
    };
    li.appendChild(btnDone);
  }
});

// clear-list-button
btnClearList.addEventListener("click", () => {
  div.innerHTML = "";
});

// // remove-button
// btnItemRemove.addEventListener("click", () => {
//   const li = document.getElementById("item-list");
//   if (!!li === true) {
//     console.log(li);
//   }
//   // li.innerHTML = "";
// });
