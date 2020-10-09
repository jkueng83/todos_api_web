document.getElementById("save").addEventListener("click", function () {
  saveTodo();
});

document
  .getElementById("loadTotoToChange")
  .addEventListener("click", function () {
    loadTodoToChange();
  });

function loadTodoToChange() {
  console.log("load todo to change");
  let id = document.getElementById("changeId").value;

  let url = "http://192.168.8.101:8080/todos/" + id;
  fetch(url)
    .then((response) => response.json())
    .then(function (data) {
      console.log(data);

      document.getElementById("changeName").value = data.name;
      document.getElementById("changeDescription").value = data.description;
    })

    .catch(function (err) {
      console.log(err);
    });
}

document.getElementById("saveChanges").addEventListener("click", function () {
  updateTodoByID(document.getElementById("changeId").value);
});

function updateTodoByID(id) {


  //alert("save lalelu fgag" + id); //abc

  let todo = {
    id : id,
    name: document.getElementById("changeName").value,
    description: document.getElementById("changeDescription").value,
  };
  let url = "http://192.168.8.101:8080/todos";
  fetch(url, {
    method: "PUT",
    body: JSON.stringify(todo),
    headers: {
      "content-type": "application/json",
    },
  })
    .then(function (data) {
      loadAllTodos();
    })

    .catch(function (err) {
      console.log(err);
    });


}

document
  .getElementById("deleteIdButton")
  .addEventListener("click", function () {
    deleteTodoById(document.getElementById("deleteTodoId").value);

    document.getElementById("deleteTodoId").value = "";
  });

function deleteTodoById(id) {
  console.log("delet todo by id");

  let url = "http://192.168.8.101:8080/todos/" + id;

  fetch(url, {
    method: "DELETE",
  })
    .then(function (data) {
      loadAllTodos();
    })

    .catch(function (err) {
      console.log(err);
    });
}

function saveTodo() {
  console.log("save new Todo");
  let todo = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
  };
  let url = "http://192.168.8.101:8080/todos";
  fetch(url, {
    method: "POST",
    body: JSON.stringify(todo),
    headers: {
      "content-type": "application/json",
    },
  })
    .then(function (data) {
      loadAllTodos();
    })

    .catch(function (err) {
      console.log(err);
    });
}

loadAllTodos();

function loadAllTodos() {
  console.log("load all Todos");
  let url = "http://192.168.8.101:8080/todos";
  fetch(url)
    .then((response) => response.json())
    .then(function (data) {
      // console.log(data);

      let html = "";

      data.forEach((todo) => {
        html +=
          "<li> id: " +
          todo.id +
          " - name: " +
          todo.name +
          " - description: " +
          todo.description +
          "</li>";
      });

      document.getElementById("todoList").innerHTML = html;
    })

    .catch(function (err) {
      console.log(err);
    });
}

function loadTodoById(id) {}
