// @ts-ignore
chrome.action.onClicked.addListener((tab) => {

  // @ts-ignore
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['Scanner.js']
  });
});