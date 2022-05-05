import { Spidery } from "./Base";

/*
  * Spidery implementation for walmart site
  */
export class WalmartSpidery implements Spidery {
  static compareHost = (host: string): boolean => {
    return host.indexOf("walmart.com") !== -1
  }

  getImage = (): string => {
    const wrapperElement = document.querySelector(".image-picker_mainImageContainer__g8rrD")
    if (wrapperElement !== null) {
      const imageElement = wrapperElement.querySelector("img")
      if (imageElement !== null) {
        return imageElement.src
      }
    }
    
    return "" 
  };

  getPrice = (): string => {
    const priceWrapperElement = document.querySelector("*[itemprop='price']")
    const prices = priceWrapperElement.textContent.trim().split("$");
    return prices[prices.length -1]
  };
}