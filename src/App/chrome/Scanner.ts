import { encode } from "../../../node_modules/js-base64/base64"

import {ScanMessage} from "../Constants"
import {WindowGetter} from "../../Window"
import {SpiderFactory} from "../../Spiders/Factrory"
import {Modal} from "../../UI/Modal"


function start() {
  const spidery = new SpiderFactory(location.host)
  const wG = new WindowGetter(spidery.get())

  const info = wG.search()
  const data = JSON.stringify(info)
  let b64 = encode(data)
  new Modal(b64)
}

// @ts-ignore
chrome.runtime.onConnect.addListener(function(port) {
  port.onDisconnect.addListener(() => {
    console.log(`disconnected port:${port.name}`);
  })
  // @ts-ignore
  port.onMessage.addListener((message) => {
    if (message === ScanMessage) {
      start()
    }
  });
});

