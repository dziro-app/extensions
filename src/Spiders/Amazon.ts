import { Spidery } from "./Base";

/*
  * Spidery implementation for amazon site
  */
export class AmazonSpidery implements Spidery {
  getImage = (): string => {
    const url = document
      .querySelectorAll("#imgTagWrapperId")[0]
      .querySelector("img").src;
    return url;
  };
  getPrice = (): string => {
    const price = document
      .querySelector("#corePrice_feature_div")
      .textContent.split("$")[1];
    return price;
  };
}