loadAllTodos();

function loadAllTodos() {
  console.log("load all Todos");
  let url = "http://localhost:8080/todos";
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data);

      let html = "";

      data.forEach((todo) => {
        html += "<li> id: " + todo.id + " - name: " + todo.name + "</li>";
      });

      document.getElementById("todoList").innerHTML = html;
    })

    .catch(function (err) {
      console.log(err);
    });
}
