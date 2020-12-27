function load_img() { 
    var start=document.getElementById("dropstart").value;
    var end=document.getElementById("dropend").value;
    var file=start+end;
    var orinal_img=document.getElementById("map");
    orinal_img.src='img/'+file+'.png';
    load_route(file)
}





const direction={
    1:{icon:"forward", text:"Walk Stright 200Mtrs from gate", isDone :false},
    2:{icon:"left", text="Take Left after Mechanical Block", isDone :false},
    3:{icon:"forward", text="Walk Straight 50Mtrs", isDone :false},
    4:{icon:"right", text="To your right is Boys Hostel", isDone :false}
}

const mListElement = document.querySelector("#myUL");

function done(todoId) {
    const selectedTodoIndex = direction.findIndex((item) => item.id == todoId);
  
    todoList[selectedTodoIndex].isDone
      ? (todoList[selectedTodoIndex].isDone = false)
      : (todoList[selectedTodoIndex].isDone = true);
    displayTodos();
  }

  function load_route() {
    mListElement.innerHTML = "";
    document.querySelector("#myInput").value = "";
  
    todoList.forEach((item) => {
      const listElement = document.createElement("li");
      const delBtn = document.createElement("i");
  
      listElement.innerHTML = item.todoText;
      listElement.setAttribute("data-id", item.id);
  
      if (item.isDone) {
        listElement.classList.add("checked");
      }
  
      listElement.addEventListener("click", function (e) {
        const selectedId = e.target.getAttribute("data-id");
        doneTodo(selectedId);
      });
  
      mListElement.appendChild(listElement);
      listElement.appendChild(delBtn);
    });
  }
