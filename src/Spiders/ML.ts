import { Spidery } from "./Base";

export class MLSpidery implements Spidery {
  static compareHost = (host: string): boolean => {
    return host.indexOf("mercadolibre.com") !== -1
  }
  getImage = (): string => {
    const images = document.querySelectorAll(".ui-pdp-gallery__figure")
    if (images.length  > 0) {
      const wrapper = images[0]
      const imageElement = wrapper.querySelector("img")
      if (imageElement !== null) return imageElement.src
    }
    return ""
  };

  getPrice= (): string => {
    const mainWrapper = document.querySelector(".andes-money-amount:not(.andes-money-amount--previous)")
    if (mainWrapper !== null) {
      const metaElement = mainWrapper.querySelector("meta")
      if (metaElement !== null) {
        return metaElement.content
      }
    } 
    return ""
  }
}