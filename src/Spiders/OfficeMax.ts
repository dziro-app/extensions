import { Spidery } from "./Base";

/*
  * Spidery implementation for OfficeMax site
  */
export class OfficeMaxSpidery implements Spidery {
  static compareHost = (host: string): boolean => {
    return host.indexOf("officemax.com") !== -1
  }

  getImage = (): string => {
    const imageElement = document.querySelector('img[class="product-detail__gallery-picture"]') as HTMLImageElement
      if (imageElement !== null) {
        return imageElement.src
    }
    
    return "" 
  };

  getPrice = (): string => {
    const htmlElement = document.querySelector(".skuBestPrice")
    if (htmlElement) {
      const prices =  htmlElement.textContent.trim().split("$");
      return prices[prices.length -1]
    }
    return ""
  };
}