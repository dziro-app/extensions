/*
* Factoru to decide which spider implementation fit the best
*/

import { AmazonSpidery } from "./Amazon"

const relation = new Map([
  ['amazon.com.mx', AmazonSpidery],
  ['default', AmazonSpidery]  
])

export class SpiderFactory {
  SpiderClass 
  constructor(host: string) {
    if(relation.has(host)) {
      this.SpiderClass = relation.get(host)
    } else {
      this.SpiderClass = relation.get("default")
    }
  }

  get () {
    return new this.SpiderClass()
  }
}