window.onload = function () {
  const inputTitle = document.getElementById("title");
  const btnAdd = document.getElementById("btn-add");
  const listContainer = document.querySelector("#list-container");
  const headingEl = document.querySelector("#heading");
  const btnFetchTodos = document.getElementById("btn-fetch-todos");

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

  btnFetchTodos.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        result.forEach(function (todo) {
          const liElement = document.createElement("li");
          liElement.innerHTML = todo.title;
          listContainer.appendChild(liElement);
        });
      })
      .catch(function (err) {
        console.error(err);
      });
  });

  //   setTimeout(() => {
  //     alert("After two seconds");
  //   }, 2000);

  headingEl.style.color = "red";
};

// then().catch()
// Async...await function
