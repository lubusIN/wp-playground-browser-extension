import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: [
    "https://wordpress.org/themes/",
    "https://wordpress.org/themes/*"
  ]
}

window.addEventListener("load", () => {
  addOpenTheme();
});

function addOpenTheme() {
  const themeSlug = getThemeSlug();

  // Handle when theme is loaded from themes page
  if (themeSlug === '#' || themeSlug ==='themes') {

    let themes = document.querySelectorAll('.theme .url');

    let themeClicked = () => {
      setTimeout(() => {
          const themeSlug = getThemeSlug();
          addPlaygroundButton(themeSlug);
      }, 500);
    }

    themes.forEach((theme) => {
      theme.addEventListener('click', themeClicked)
    });

    return;
  }  

  // Handle when direct theme page is load
  addPlaygroundButton(themeSlug);
}

function getThemeSlug() {
  const pathParts = window.location.pathname.split('/').filter((part) => part);
  const themeSlug = pathParts.pop();

  return themeSlug;
}

function addPlaygroundButton(themeSlug) {
  const buttonExist = document.getElementById("launch-theme-playground");
  if (buttonExist) { 
    return;
  }

  const themeActions = document.querySelector('.theme-about .theme-actions');
  const playgroundBtn = `
        <style>
          .btn-playground-theme {
            width: 100%;
            margin-bottom: 10px;
            text-align: center;
          }
        </style>
        <a 
            id="launch-theme-playground"
            class="button button-large button-secondary btn-playground btn-playground-theme" 
            role="button" 
            href="https://playground.wordpress.net/?theme=${themeSlug}" 
            target="_new">
                Playground
        </a>
    `;

    if(themeActions) {
      themeActions.insertAdjacentHTML('beforebegin', playgroundBtn);
    }
}