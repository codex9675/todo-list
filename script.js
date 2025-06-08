const input = document.querySelector(".input-text input");
const btn = document.querySelector(".input-text button");
const list = document.querySelector(".ulList ul");

const checked = document.querySelector(".checked");

btn.addEventListener("click", () => {
  const addTask = input.value;
  if (addTask === "") {
    alert("Please write anything");
  } else {
    const li = document.createElement("li");
    li.innerHTML = input.value;
    list.appendChild(li);
    const edit = document.createElement("button");
    edit.innerHTML = "✏️";
    li.appendChild(edit);
    const span = document.createElement("span");
    span.innerHTML = "&#128473";
    li.appendChild(span);
    save();

    edit.addEventListener("click", () => {
      const data = li.firstChild.textContent;
      const newData = prompt("Enter new task", data);
      if (newData !== "" && newData !== "null") {
        li.firstChild.textContent = newData.trim();
        getData();
      }
    });
  }
  input.value = "";
});

list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    save();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    save();
  }
});

const save = () => {
  localStorage.setItem("lists", list.innerHTML);
};

const getData = () => {
  list.innerHTML = localStorage.getItem("lists");
};
getData();
