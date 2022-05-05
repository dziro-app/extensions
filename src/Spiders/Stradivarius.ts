import { Spidery } from "./Base";

/*
  * Spidery implementation for Stradivarius site
  */
export class StradivariusSpidery implements Spidery {
  static compareHost = (host: string): boolean => {
    return host.indexOf("stradivarius.com") !== -1
  }

  getImage = (): string => {
    const wrapperElement = document.querySelector("#idProductDesktopPageComponent")
    if (wrapperElement !== null) {
      const imageElement = wrapperElement.querySelector("img")
      if (imageElement !== null) {
        return imageElement.src
      }
    }
    
    return "" // Fallback case, wrapper was not found
  };
  getPrice = (): string => {
    const priceWrapperElement = document.querySelector(".product-price")
    console.log(priceWrapperElement)
    if (priceWrapperElement !== null) {
      const prices = priceWrapperElement.textContent.trim().split(" ");
      return prices[prices.length -1]
    }
    return ""
  };
}