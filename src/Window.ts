import { Spidery } from "./Spiders/Base";

export type DataFound = {
  title: string;
  price: string;
  image: string;
  website: string;
};

/*
  * This class is the one in charge to retrieve all the
  * data required for an Dziro Item
  */

export class WindowGetter {
  spidery;

  constructor(sp: Spidery) {
    this.spidery = sp;
  }

  search(): DataFound {
    const data: DataFound = {
      title: this.getTitle(),
      website: this.getUrl(),
      price: this.spidery.getPrice(),
      image: this.spidery.getImage(),
    };

    return data;
  }

  private getUrl(): string {
    return location.href;
  }

  private getTitle(): string {
    return document.title;
  }
}

