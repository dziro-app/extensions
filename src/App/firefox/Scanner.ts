import { encode } from "../../../node_modules/js-base64/base64"

import {WindowGetter} from "../../Window"
import {SpiderFactory} from "../../Spiders/Factrory"
import {Modal} from "../../UI/Modal"
import {ScanMessage} from  "../Constants"


function start() {
  const spidery = new SpiderFactory(location.host)
  const wG = new WindowGetter(spidery.get())


  const info = wG.search()
  const data = JSON.stringify(info)
  let b64 = encode(data)
  new Modal(b64)
}

// @ts-ignore
browser.runtime.onMessage.addListener((message: string) => {
  if (message === ScanMessage) {
    start()
  } else {
    throw new Error(`Unknown message: ${message}`)
  }
})
