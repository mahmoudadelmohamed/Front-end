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
     taskInput.value = '';
  }
  e.preventDefault();
});




// Remove Element From List
taskList.addEventListener('click',function (e) {
  if(e.target.className === 'fa fa-remove') {
    if(confirm('Are You Sure, You Want To Remove The Task!')) {
      e.target.parentElement.parentElement.remove();
    }
  }
});
// Clear All Tasks
clearBtn.addEventListener('click',function() {
      while (taskList.firstChild) {
          taskList.firstChild.remove();
      }
});
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
