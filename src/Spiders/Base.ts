/*
 * This interface defines what methods are required to
 * be implemented for several specific website scrappers
 */
export interface Spidery {
  getImage: () => string;
  getPrice: () => string;
}
