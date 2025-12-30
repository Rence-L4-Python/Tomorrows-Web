// test
import {renderGraph} from './graph.js';

window.addEventListener('DOMContentLoaded', () =>{
    const select = document.getElementById('statselector');

    if (!select){ // for fixing warnings in console logs
        return;
    }

    select.addEventListener('change', (e) => {
        const value = e.target.value;
        renderGraph(value);
    })
})