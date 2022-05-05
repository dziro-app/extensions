 # Dziro  extension

*La extensiónde Dziro tiene como objetivo obtener la información de una página en dónde se encuentre un artículo que desee agregar a la [app Dzrio](https://dziro.vercel.app).*

Soporte para chrome y firefox.

<img src="https://duckduckgo.com/i/f57f75b5.png" alt="chrome" style="width: 40px" > 
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/115px-Firefox_logo%2C_2019.svg.png"  alt="firefox" style="width: 40px"  />


---

## Desarrollo
> Herramientas globales necesarias
- NodeJs *(16.2.0)*
- Npm *(8.3.2)*

> Ambiente de desarrollo  

Para correr el entorno de desarrollo debe instalar primero las dependencias.

```bash
$ npm i
```
Una vez hecho esto puede correr el proceso de compilación.

```bash
$ npm run dev:chrome # for Chrome
$ npm run dev:firefox # for Firefox
```

--- 
## Generar bundle
Para compilar el proyecto a una versió productiva y generar un .zip, puede correr alguno de los siguientes comandos.

```bash
$ npm run pkg:chrome # for chrome
$ npm run pkg:firefox # for firefox
```

El resultado del zip lo encontrará en el directorio de cada plataforma dentro de la carpeta **dist**

---
## Soporte de sitios

- [X] amazon.com (Desktop)
- [X] mercadolibre.com (Desktop)
- [X] "*" (Default Desktop)
- [X] WalMart
- [X] Office Depot
- [X] Office Max
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