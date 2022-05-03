 # Dziro  extension

*Dziro extension has the porpuse of scrapping some information about an article in order to add it to [Dzrio app](https://dziro.vercel.app).*

Supports for chrome and firefox.

<img src="https://duckduckgo.com/i/f57f75b5.png" alt="chrome" style="width: 40px" > 
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/115px-Firefox_logo%2C_2019.svg.png"  alt="firefox" style="width: 40px"  />


---

## Development
> Required global tools
- NodeJs *(16.2.0)*
- Npm *(8.3.2)*

> Development environment 

In order to run the development process first you need to install the dependencies.

```bash
$ npm i
```
Once installed, you can run the compile process.

```bash
$ npm run dev:chrome # for chrome
$ npm run dev:firefox # for Firefox
```

--- 
## Bundle generation

To compile a prod version and generate a .zip file you can use one of the following commands.

```bash
$ npm run pkg:chrome # for chrome
$ npm run pkg:firefox # for firefox
```

You can find the resulting .zip file inside the directory of each platform under the **dist** dir.


---
## Sites support

- [X] amazon.com (Desktop)
- [X] mercadolibre.com (Desktop)
- [X] "*" (Default Desktop)
- [ ] WaltMart
- [ ] Office Depot
- [ ] Office Max
- [ ] Stradivarius
- [ ] Bershka
- [ ] Pull&Bear
- [ ] Forever 21
- [ ] Liverpool
- [ ] Nike
- [ ] Adidas
- [ ] Sears
- [ ] Flexi
- [ ] Zara
- [ ] Privalia
- [ ] El Palacio de Hierro
- [ ] Shein
- [ ] Levi's
- [ ] Promoda
- [ ] Calvin Klein
- [ ] Republic Cosmetics (Yuya)
- [ ] Sanborns
- [ ] Panam
- [ ] H&M