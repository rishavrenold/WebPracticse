// ----------------Color Generator---------------------
// let btn = document.querySelector("button");

// function genrannum() {
//   return Math.floor(Math.random() * 255);
// }
// let r = genrannum;
// let g = genrannum;
// let b = genrannum;
// let h = document.querySelector("h3");
// let d = document.querySelector("#box");
// btn.addEventListener("click", function () {
//   d.style.backgroundColor = "rgb(" + [r(), g(), b()].join(",") + ")";
//   h.innerText = "rgb(" + [r(), g(), b()].join(",") + ")";
// });

// let form=document.querySelector("form");

// form.addEventListener("submit",function(e){
//   e.preventDefault();
//   let user= this.elements[0];
//   console.log(user.value);
// })
// -----------------------TODO APP---------------------------
let input = document.querySelector("input");
let list = document.querySelector("#list");

let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = input.value;

  let delbtn = document.createElement("button");
  delbtn.classList.add("delete");
  delbtn.innerText = "Delete";
  item.appendChild(delbtn);
  list.appendChild(item);
  input.value = "";
});

list.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let parent = event.target.parentElement;
    parent.remove();
  }
});
