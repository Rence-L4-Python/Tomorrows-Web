import './accountModal.js';
import './timer.js';
import './settings.js';
import './themes.js';
import './graph.js';
import './customDropdown.js';
import './accountForm.js'

import {settings, saveSettings, loadSettings} from './settings.js';

loadSettings();

// testing
for (let key in settings){
    console.log(key, settings[key]);
}
