import { startTimer, pauseTimer } from './timer.js';
import { helpers, saveHelpers } from './helpcounter.js';
import { isFinished } from './timer.js';
import { loadTasks, saveTasks } from './tasksStorage.js';

window.addEventListener('DOMContentLoaded', () =>{
    const addButton = document.getElementById('add-task');
    const input = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const template = document.getElementById('task-template');

    if (!addButton || !input || !taskList || !template){ // for fixing warnings in console logs
        return;
    }

    addButton.addEventListener('click', () =>{
        const value = input.value.trim();
        if (!value) return;

        const clone = template.content.cloneNode(true);
        const taskItem = clone.querySelector('.task-item');
        const taskText = taskItem.querySelector('.task-text');
        const finishButton = taskItem.querySelector('.finishtask');
        const trackButton = taskItem.querySelector('.tracktask');

        taskText.value = value;

        finishButton.addEventListener('click', () =>{
            helpers.tasksCompleted++;
            saveHelpers();
            taskItem.remove();
            saveTasks();
        })

        trackButton.addEventListener('click', () =>{
            const span = trackButton.querySelector('span');

            if (trackButton.textContent === "▶"){
                if (isFinished) return; // stops button from working if timer is finished so it works like in timer.js

                const currentlyActive = document.querySelector('.task-item.active-task');
                if (currentlyActive){
                    currentlyActive.classList.remove('active-task');
                }

                taskItem.classList.add('active-task');
                span.textContent = "⏸";
                startTimer();
                return;
            }
            else{
                span.textContent = "▶";
                pauseTimer();
                return;
        }
        })

        taskList.appendChild(clone);
        input.value = '';
    })

    input.addEventListener('keypress', (e) =>{
        if (e.key === 'Enter') addButton.click();
    })
    
    loadTasks();
    setInterval(saveTasks, 1000)
})