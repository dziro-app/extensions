import { Spidery } from "./Base";

/*
  * Spidery implementation for Office Depot site
  */
export class OfficeDepotSpidery implements Spidery {
  static compareHost = (host: string): boolean => {
    return host.indexOf("officedepot.com") !== -1
  }

  getImage = (): string => {
    const imageElement = document.querySelector('img[role="presentation"]') as HTMLImageElement
      if (imageElement !== null) {
        return imageElement.src
    }
    
    return "" 
  };

  getPrice = (): string => {
    const metaElement = document.querySelector('meta[property="product:sale_price:amount"]') as HTMLMetaElement
    if (metaElement) {
      return metaElement.content
    }
    return ""
  };
}