import { Spidery } from "./Base";

/*
  * Spidery implementation for amazon site
  */
export class AmazonSpidery implements Spidery {
  getImage = (): string => {
    const wrapperElement = document.querySelector("li.image.selected")
    if (wrapperElement !== null) {
      const imageElement = wrapperElement.querySelector("img")
      if (imageElement !== null) {
        return imageElement.src
      }
    }
    
    return "" // Fallback case, wrapper was not found
  };
  getPrice = (): string => {
    const priceWrapperElement = document.querySelector("#corePrice_feature_div")
    const rangePriceWrapperElement = document.querySelector("#corePrice_desktop")

    let realWrapper

    if (priceWrapperElement !== null) {
      realWrapper = priceWrapperElement
    } else if (rangePriceWrapperElement !== null) {
      realWrapper = rangePriceWrapperElement
    } else {
      return ""
    }
    const prices = realWrapper.textContent.trim().split("$");
    return prices[prices.length -1]
  };
}