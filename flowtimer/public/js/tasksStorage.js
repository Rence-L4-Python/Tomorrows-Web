import { helpers, saveHelpers } from "./helpcounter.js";
import { isFinished, startTimer, pauseTimer } from "./timer.js";

export function saveTasks(){
    const taskList = document.getElementById('task-list');
    const tasks = [];
    const items = taskList.querySelectorAll('.task-item');
    items.forEach(item =>{
        const text = item.querySelector('.task-text').value;
        const active = item.classList.contains('active-task');
        tasks.push({text, active});
    })

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function loadTasks(){
    const taskList = document.getElementById('task-list');
    const template = document.getElementById('task-template');

    const saved = JSON.parse(localStorage.getItem('tasks'));
    if (!saved) return;

    saved.forEach(task =>{
        const clone = template.content.cloneNode(true);
        const taskItem = clone.querySelector('.task-item');
        const taskText = taskItem.querySelector('.task-text');
        const finishButton = taskItem.querySelector('.finishtask');
        const trackButton = taskItem.querySelector('.tracktask');

        taskText.value = task.text;

        if (task.active){
            taskItem.classList.add('active-task');
        }

        finishButton.addEventListener('click', () =>{
            helpers.tasksCompleted++;
            saveHelpers();
            taskItem.remove();
        })

        trackButton.addEventListener('click', () =>{
            const span = trackButton.querySelector('span');

            if (trackButton.textContent === "▶"){
                if (isFinished) return;

                const currentlyActive = document.querySelector('.task-item.active-task');
                if (currentlyActive){
                    currentlyActive.classList.remove('active-task');
                }
                
                taskItem.classList.add('active-task');
                span.textContent = "⏸";
                startTimer();
            }
            else{
                span.textContent = "▶";
                pauseTimer();
            }
        })

        taskList.appendChild(clone);
    })
}