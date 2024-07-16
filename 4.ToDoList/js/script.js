document.addEventListener('DOMContentLoaded', ()=>{

    const newInput = document.querySelector(".newTask");
    const addBtn = document.querySelector("#add");
    const taskList = document.querySelector("#tasks");
    const editModal = document.getElementById('edit-modal');
    const editInput = document.getElementById('edit-input');
    const saveEditButton = document.getElementById('save-edit');
    const closeModalButton = document.querySelector('.close');

    let editIndex = null;

 
    //Load tasks from local storage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    function saveTasks(){
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }


    // Update the DOM form localStorage
    function addTaskToDom(){
        taskList.innerHTML = '';
        tasks.forEach((task, index)=>{
            const taskDiv = document.createElement('div')
            taskDiv.className = `task ${task.completed ? 'bg-change' : ''}`;
            taskDiv.dataset.id = index;
            taskDiv.innerHTML=`
                
                <label class="checkbox-container">
                    <input 
                        class="custom-checkbox" 
                        type="checkbox" 
                        data-id="${index}" 
                        ${task.completed ? 'checked' : ''}
                    >
                    <span class="checkmark"></span>
                </label>
                <span class="taskItem ${task.completed ? 'completed' : ''}">${task.text}</span>
                <button class="edit" data-id="${index}">Edit</button>
                <button class="delete" data-id="${index}">Delete</button>
        
            `
            taskList.prepend(taskDiv);
        })
   }

    // Add Task Event and set task to localStorage
    function addTodo(){
        const taskText = newInput.value.trim();
        if(taskText !== ''){
            const task = {
                text: taskText,
                completed: false
            }
            tasks.push(task);
            saveTasks();
            addTaskToDom();
            newInput.value = '';
        }
    }


    taskList.addEventListener('click', (e) => {
        //Update Checkbox
        if (e.target.classList.contains('custom-checkbox')) {
            const id = e.target.dataset.id;
            tasks[id].completed = e.target.checked;
            saveTasks();

            const taskDiv = e.target.closest('.task');
            const taskText = taskDiv.querySelector('.taskItem');
            taskText.classList.toggle('completed');
            taskDiv.classList.toggle('bg-change');
        }

        // Delete Task Event
        if (e.target.classList.contains('delete')) {
            const id = e.target.dataset.id;
            tasks.splice(id, 1);
            saveTasks();
            addTaskToDom()
        }

        // Edit Task Event
        if (e.target.classList.contains('edit')) {
            editIndex = e.target.dataset.id;
            const taskText = tasks[editIndex].text
            editModal.style.display ="block";
            editInput.value = taskText;
        }


        

        
    });

    function closeEditModal(){
        editModal.style.display ="none";
    }

    function saveEdit(){
        const newText = editInput.value.trim();
        if(newText !== ''){
            tasks[editIndex].text = newText;
           
            saveTasks();
            addTaskToDom();
            closeEditModal();
        }

    }
    

   

   addBtn.addEventListener('click', addTodo);
   addTaskToDom()
   saveEditButton.addEventListener('click', saveEdit);
   closeModalButton.addEventListener('click', closeEditModal);
})

