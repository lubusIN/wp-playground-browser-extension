import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: [
    "https://wordpress.org/plugins/*"
  ]
}

window.addEventListener("load", () => {
  console.log("Open With Playground Loaded!");

  document.body.style.background = "pink";
})
