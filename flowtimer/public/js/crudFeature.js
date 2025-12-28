import {startTimer, pauseTimer} from './timer.js';
import {helpers} from './helpcounter.js';

window.addEventListener('DOMContentLoaded', () =>{
    const addButton = document.getElementById('add-task');
    const input = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const template = document.getElementById('task-template');

    const initialTask = template.content.cloneNode(true);
    const initialTaskItem = initialTask.querySelector('.task-item');
    const initialText = initialTaskItem.querySelector('.task-text');
    const initialFinish = initialTaskItem.querySelector('.finishtask');
    const initialTrack = initialTaskItem.querySelector('.tracktask');

    initialText.value = 'Sample Task';
    initialFinish.addEventListener('click', () =>{
        helpers.tasksCompleted++;
        console.log(helpers.tasksCompleted);
        initialTaskItem.remove();
    })
    initialTrack.addEventListener('click', () =>{
        const span = initialTrack.querySelector('span');
        if (initialTrack.textContent === "▶"){
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

    taskList.appendChild(initialTask);

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
            console.log(helpers.tasksCompleted);    
            taskItem.remove();
        })

        trackButton.addEventListener('click', () =>{
            const span = trackButton.querySelector('span');

            if (trackButton.textContent === "▶"){
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
})