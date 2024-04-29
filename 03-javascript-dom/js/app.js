window.onload = function () {
  const inputTitle = document.getElementById("title");
  const btnAdd = document.getElementById("btn-add");
  const listContainer = document.querySelector("#list-container");

  btnAdd.addEventListener("click", function (event) {
    event.preventDefault();
    if (inputTitle.value.trim() === "") {
      return;
    }
    const liElement = document.createElement("li");
    liElement.innerHTML = inputTitle.value;
    listContainer.appendChild(liElement);
    inputTitle.value = "";
  });
};
