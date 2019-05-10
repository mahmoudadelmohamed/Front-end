const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');
const filter = document.querySelector('#filter');
// Add Tasks In List
form.addEventListener('submit', function (e) {
  if (taskInput.value === '') {
      alert('hmmm, Please Add a Task!');
  }
  else {
    const list = document.createElement('li');
    list.className = 'collection-item';
    list.appendChild(document.createTextNode(taskInput.value));
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"> </i> ';
    taskList.appendChild(list);
    list.appendChild(link)
    // Store In LS
    stroreTaskInLocalStorage(taskInput.value);
     taskInput.value = '';
  }
  e.preventDefault();
});
// Store Tasks
function stroreTaskInLocalStorage(task) {
  let tasks;
   if(localStorage.getItem('tasks') === null) {
     tasks = [];
  }
  else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
// Get Tasks From LS
document.addEventListener('DOMContentLoaded', function () {
  let tasks;
   if(localStorage.getItem('tasks') === null) {
     tasks = [];
  }
  else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function (task) {
      const list = document.createElement('li');
      list.className = 'collection-item';
      list.appendChild(document.createTextNode(task));
      const link = document.createElement('a');
      link.className = 'delete-item secondary-content';
      link.innerHTML = '<i class="fa fa-remove"> </i> ';
      taskList.appendChild(list);
      list.appendChild(link)
    })
});

// Remove Element From List
taskList.addEventListener('click',function (e) {
  if(e.target.className === 'fa fa-remove') {
    if(confirm('Are You Sure, You Want To Remove The Task!')) {
      e.target.parentElement.parentElement.remove();
      // Remove From Ls
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
});
//Remove From Ls
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
   if(localStorage.getItem('tasks') === null) {
     tasks = [];
  }
  else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function (task, index) {
      if(taskItem.textContent = task) {
          tasks.splice(index,1);
       }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
// Clear All Tasks
clearBtn.addEventListener('click',function() {
  // Clear From LS
   clearFromLocalStorage();
      while (taskList.firstChild) {
          taskList.firstChild.remove();
      }

});
function clearFromLocalStorage() {
    localStorage.clear();
}
// Filter And Search For Specific Task
filter.addEventListener('keyup',function(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task) {
      const item = task.firstChild.textContent;
          if(item.toLowerCase().indexOf(text) != -1) {
              task.style.display = 'block';
          }
          else {
               task.style.display = 'none';
          }
     });
});

 /*

*/
