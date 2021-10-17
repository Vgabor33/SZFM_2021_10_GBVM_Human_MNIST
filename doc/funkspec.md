# Átváltó funkcióspecifikáció

--1-6-ig ugyan az, mint a kövspec--

A felhasználó szemszögéből kell elkészíteni az egyes pontokat

## 1. Jelenlegi helyzet

A mai világban a kézírás akár betűkben, de szintúgy számokban kihívást tud okozni értelmezés közben az embereknek. 
Manapság a dokumentációk, továbbá kérvények már nem kézzel szokás írni, sokszor ezt nem mindenki engedheti meg magának, 
de tartalmazhatnak olyan részeket így is, mint például dátum, személyes okmányok azonosítóinak feltüntetése, amiket kéz írással lehet csak feltüntetni. 
Az értelmezésükben legtöbbször nem biztos ugyan arra ennek feldolgozója, mint aki kitöltötte, és nem mindig adja a lehetőség ilyenkor tisztázásra. 
Ilyesmi esetekre pedig nincsen olyan eszköz ami erre felkészítené az értelmezőt, a saját írástípusok ismerete alapján pedig nem képes megfejteni, aminek következménye lehet hogy a dokumentum érvénytelen, ezáltal újraírást igényel ami értékes időbe telik. 

A Magyar Kormány által szeretnénk egy olyan eszközt/statisztikát nyújtani munkatársainknak, és a kormány által támogatott intézményeknek, ami segítségével a különbözően írott számokat tényleges értékének értelmezését tudják gyakorolni, továbbá önkéntes alapon felmérhetjük az ország különböző területén, ki minek látja a számjegyeket.

## 2. Vágyott rendszer






## 3. Jelenlegi üzleti folyamatok







## 4. Igényelt üzleti folyamatok






## 5. A rendszerre vonatkozó szabályok






## 6. Követelménylista

* [K01] Hordozhatóság
* [K02] Reszponzív dizájn
* [K03] Rendszerfüggetlenség
* [K04] Gyors működés
* [K05] Könnyű kezelhetőség
* [K06] Kis tárhely igény
* [K07] Bármikor megszakítható, majd folytatható kitöltés
* [K08] Felhasználó megjegyzése (legalább helyileg)



## 7. Használati esetek

### Új felhasználó:

    A program (weboldal) első használat során megkérdezi az életkorát, tartózkodási helyét, illetve legmagasabb iskolai végzettségét a felhasználónak.Ez után rá kell nyomnia a kezdés gombra, majd az MNIST adatbázisból mutat a felhasználónak képeket a weboldal, melyekre meg kell mondani, hogy milyen számokat ábrázol a kép.


### A rendszert már korábban használt felhasználó:
    Amennyiben a felhasználó már korábban járt az oldalon, az oldal 'cookie'-k segítségével beazonosítja a felhasználót, és így folytathatja a munkát.




## 8. Képernyőtervek

### Pár képernyőter az oldal felületéhez:

![Képernyőterv](/images/képernyőterv1.png)

Mint látható a képen, a középen betöltünk egy képet, a bal felső sarokban pedi egy számláló, hogy hány képet talált el a felhasználó eddig. A jobb felső sarokban pedig a cookie-k által tárolt információk törölhetőek.

![Képernyőterv](/images/képernyőterv2.png)

A képen látható az első használat során kitöltendő menű.

![Képernyőterv](/images/képernyőterv3.png)

Ezen a képen egy az első használat során kitöltendő menűhöz egy kis navigációs segítség látható.

Egy kis prototípus: [itt](https://vikt0r.eu/mnist/)




## 9. Forgatókönyvek


A felhasználó hogyan tudja használni az app-ot.
Milyen funkciót milyen lépéseken keresztül ér el (lépésenkénti leírás).


## 10. Fogalomszótár

HTML - Hyper Text Markup Language, bővebb leírás olvasható [itt](https://en.wikipedia.org/wiki/HTML).

CSS - Cascading Style Sheets, bővebb leírás olvasható [itt](https://en.wikipedia.org/wiki/CSS)

SQL - Structured Query Language, bővebb leírás olvasható [itt](https://en.wikipedia.org/wiki/SQL)

PHP - egy széles körben használható programozási (szkript-) nyelv, bővebb leírás olvasható [itt](https://en.wikipedia.org/wiki/PHP)

cookie - egy a felhasználó számítógépén tárolt adatcsomag, mely a felhasználó azonosításában segít. Bővebb leírás [itt](https://en.wikipedia.org/wiki/HTTP_cookie)