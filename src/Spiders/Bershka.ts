import { Spidery } from "./Base";

/*
  * Spidery implementation for Bershka site
  */
export class BershkaSpidery implements Spidery {
  static compareHost = (host: string): boolean => {
    return host.indexOf("bershka.com") !== -1
  }

  getImage = (): string => {
    const wrapperElement = document.querySelector(".image-item-wrapper")
    if (wrapperElement !== null) {
      const imageElement = wrapperElement.querySelector("img")
      if (imageElement !== null) {
        return imageElement.src
      }
    }
    
    return "" // Fallback case, wrapper was not found
  };
  getPrice = (): string => {
    const htmlElement = document.querySelector('*[data-qa-anchor="productDetailPrice"]')
    if (htmlElement) {
      const prices =  htmlElement.textContent.trim().split(" ");
      return prices[prices.length -1]
    }
  }
}