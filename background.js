

let color = '#3aa757'

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color })
    console.log("default bgcolor: %cgreen", `color: ${color}`)
})


// chrome.app.runtime.onLaunched.addListener(() => {
//     chrome.app.window.create("index.html", {
//         'outerBounds': {
//             width: 400,
//             height: 500,
//         }
//     })
// })