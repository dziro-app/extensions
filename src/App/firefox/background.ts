import {ScanMessage} from "../Constants"

// @ts-ignore
function sendMessage(tabs=[]) {
  const firstTab = tabs[0]
    // @ts-ignore
    browser.tabs.sendMessage(firstTab.id, ScanMessage)
      .catch((e: string) => {console.log(e)})
}

// @ts-ignore
browser.browserAction.onClicked.addListener(() => {
  // @ts-ignore
  const tabs = browser.tabs.query({
    currentWindow: true,
    active: true
  }).then(sendMessage)
});
