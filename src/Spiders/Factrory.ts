/*
* Factory to decide which spider implementation fit the best
*/

import { AmazonSpidery } from "./Amazon"
import { MLSpidery } from "./ML"


const spiders = [
  AmazonSpidery,
  MLSpidery
]

export class SpiderFactory {
  SpiderClass 
  constructor(host: string) {
    for(const spider of spiders) {
      if (spider.compareHost(location.host)) {
        this.SpiderClass = spider
        break
      }
    }

    // Default one
    if (!this.SpiderClass) {
      this.SpiderClass = AmazonSpidery
    }

  }

  get () {
    return new this.SpiderClass()
  }
}