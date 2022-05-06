import {ScanMessage, PortName} from "../Constants"

// @ts-ignore
chrome.action.onClicked.addListener((tab) => {
  // @ts-ignore
  const port = chrome.tabs.connect(tab.id, {name: PortName})
  port.postMessage(ScanMessage)
});