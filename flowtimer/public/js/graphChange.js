// test
import {renderGraph} from './graph.js';

window.addEventListener('DOMContentLoaded', () =>{
    const select = document.getElementById('statselector');

    select.addEventListener('change', (e) => {
        const value = e.target.value;
        renderGraph(value);
    })
})