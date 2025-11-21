import {settings, loadSettings, saveSettings} from './settings.js';

// Theme arrays, each object changes the background image, sidebar icon color, hr color, and sidebar hover background color
const themes = [
  { // Default theme, 'Mountain'
    image: 'media/daniel-leone-unsplash.jpg',
    sidebarColor: 'white',
    hrColor: 'white',
    hoverBgColor: '#149FE5',
    headerColor: '#149FE5'
  },
  { // Theme 2, 'Pink Waves'
    image: 'media/aperture-vintage-unsplash.jpg',
    sidebarColor: '#770737',
    hrColor: '#770737',
    hoverBgColor: '#FFFFFF',
    headerColor: '#770737'
  },
  { // Theme 3, 'Sky High'
    image: 'media/dominik-schroder-unsplash.jpg',
    sidebarColor: '#0047AB',
    hrColor: '#0047AB',
    hoverBgColor: '#FFFFFF',
    headerColor: '#0047AB'
  },
  { // Theme 4, 'Foggy Sunrise'
    image: 'media/paul-earle-unsplash.jpg',
    sidebarColor: '#FFFFF0',
    hrColor: '#FFFFF0',
    hoverBgColor: '#149FE5',
    headerColor: '#149FE5'
  }, 
  { // Theme 5, 'Pink Gradient'
    image: 'media/pexels-codioful.jpg',
    sidebarColor: '#4169E1',
    hrColor: '#4169E1',
    hoverBgColor: '#FFFFFF',
    headerColor: '#4169E1'
  },
  { // Theme 6, 'Earthy Gradient'
    image: 'media/plufow-le-studio-unsplash.jpg',
    sidebarColor: '#0F52BA',
    hrColor: '#0F52BA',
    hoverBgColor: '#FFFFFF',
    headerColor: '#0F52BA'
  }
];

// Theme selection logic
window.addEventListener('DOMContentLoaded', () =>{
  loadSettings();

  const main = document.querySelector('main');
  const themeSelect = document.getElementById('themes');
  const themeIndex = settings.themeIndex;

  main.style.backgroundImage = `url('${themes[themeIndex].image}')`; // Default theme when settings aren't changed yet

  // https://css-tricks.com/change-color-of-svg-on-hover/ (Code reference on how to color SVGs). In CSS, the default color values for the classes are set in :root. These are then changed through the JS code below.
  document.documentElement.style.setProperty('--sidebar-icon-color', themes[themeIndex].sidebarColor);
  document.documentElement.style.setProperty('--hr-color', themes[themeIndex].hrColor);
  document.documentElement.style.setProperty('--sidebar-hover-bg', themes[themeIndex].hoverBgColor);
  document.documentElement.style.setProperty('--header-color', themes[themeIndex].headerColor);

  if (themeSelect){
    themeSelect.selectedIndex = themeIndex; // Makes it so selected option matches the current theme when going back to settings

    themeSelect.addEventListener('change', () => {
      const index = themeSelect.selectedIndex;
      settings.themeIndex = index; //Updates themeIndex which is 0 by default in settings.js to the selected index number

      main.style.backgroundImage = `url('${themes[index].image}')`;

      document.documentElement.style.setProperty('--sidebar-icon-color', themes[index].sidebarColor);
      document.documentElement.style.setProperty('--hr-color', themes[index].hrColor);
      document.documentElement.style.setProperty('--sidebar-hover-bg', themes[index].hoverBgColor);
      document.documentElement.style.setProperty('--header-color', themes[themeIndex].headerColor);

      saveSettings(); // Saves current theme settings to localStorage
    })
  }
})