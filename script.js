console.log("ok");

const taskInput = document.querySelector(".task-input");
const taskAddBtn = document.querySelector(".task-add-btn");
const newTask = document.querySelector(".new-task-contenair");
const errorMessage = document.querySelector(".error-message");

taskAddBtn.addEventListener("click", () => {
    if (taskInput.value !== "") {
       
        //la main div
        const taskList = document.createElement('div');
        taskList.classList.add('task-list');
        newTask .appendChild(taskList);

        //la checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('custom-checkbox');
        taskList.appendChild(checkbox);

        //la new task
        const task = document.createElement('p');
        task.innerText = taskInput.value;
        task.classList.add('new-task-input');
        taskList.appendChild(task);

        //le btn poubelle (+icone)
        const btnTrash = document.createElement('button');
        taskList.appendChild(btnTrash);
        const trashIcon = document.createElement('i');
        trashIcon.classList.add('fa-regular', 'fa-trash-can');
        btnTrash.appendChild(trashIcon);
          
        //cocher et decocher la checkbox
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                task.classList.add('text-through');
                
            } else {
                task.classList.remove('text-through');
               
            }
        })

        //supprimer les task avec le btn trash
        btnTrash.addEventListener('click', function () {
            newTask .removeChild(taskList);
        });
        taskInput.value = "";
        
        //message d'erreur
        const paragraphError = errorMessage.querySelector('p');
        if (paragraphError) {
            errorMessage.removeChild(paragraphError);
        }
        } else {
            const paragraphError = document.createElement('p');
            paragraphError.innerText = "Le champ de saisie est vide !";
            errorMessage.appendChild(paragraphError); 
        }
    })





