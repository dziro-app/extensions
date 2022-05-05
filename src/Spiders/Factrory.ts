/*
* Factory to decide which spider implementation fit the best
*/

import { AmazonSpidery } from "./Amazon"
import { MLSpidery } from "./ML"
import { WalmartSpidery } from "./Walmart"
import { OfficeDepotSpidery } from "./OfficeDepot"
import { OfficeMaxSpidery } from "./OfficeMax"
import { StradivariusSpidery } from "./Stradivarius"
import { DefaultSpidery } from "./Default"


const spiders = [
  AmazonSpidery,
  MLSpidery,
  WalmartSpidery,
  OfficeDepotSpidery,
  OfficeMaxSpidery,
  StradivariusSpidery
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
      this.SpiderClass = DefaultSpidery
    }

  }

  get () {
    return new this.SpiderClass()
  }
}