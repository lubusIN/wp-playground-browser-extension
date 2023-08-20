import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: [
    "https://wordpress.org/plugins/*"
  ]
}

window.addEventListener("load", () => {
  addOpenPlugin()
})

function addOpenPlugin() {
  const pathParts = window.location.pathname.split('/').filter((part) => part);
  const pluginSlug = pathParts.pop();

  const pluginDownload = document.querySelector('.plugin-download');
  const playgroundBtn = `
        <a 
            class="button button-large button-secondary btn-playground" 
            role="button" 
            href="https://playground.wordpress.net/?plugin=${pluginSlug}" 
            target="_new">
                Playground
        </a>
    `;
  
    pluginDownload.insertAdjacentHTML('beforebegin', playgroundBtn);
}
