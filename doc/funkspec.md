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

A projekt célja legyen egy olyan kiértékelhető interaktív feladat, ami később olyan adatokkal szolgál amit statisztikailag fel lehet majd dolgozni. A regisztráció legyen választható, tartalmazzon valamilyen helység meghatározást hogy honnan tölti ki (pl.: megye). Az regisztrációs felület után, legyen ismertető, hogy mi a felhasználónak a feladata, ez tanulási mintákat is tartalmazzon. A mérés már tanulási mintákból is elkezdődhet, a teszt adatokból mindenképpen legyen. A tesztben megjelenő képek legyenek súlyozottan randomizálva, hogy a nehésség fokozatosan növekedjen. A weboldal megjelenése legyen kompatibilis, mobiltelefon, akár tablet képméreteivel, tehát rendelkezzen reszponzív felülettel. A tanulói és teszt képek ne foglaljanak túl sok tárhelyet. A weboldal kezelhetősége megjelenése legyen egyszerű  és lényegre törő, hogy minél több ember tudja használni. A teszt folyamatot bármikor meg lehessen szakítani, és újra lehessen folytatni. Az teszt eredményt felhasználó döntse el menteni szeretné-e. A teszt képek egymás után jövetele legyen gyors.

## 3. Jelenlegi üzleti folyamatok







## 4. Igényelt üzleti folyamatok






## 5. A rendszerre vonatkozó szabályok

A weboldalt HTML nyelven kell megírni.

A weboldhoz funkcionalitását JavaScriptnek és/vagy PHP-nek kell adnia.

A weboldal megjelenítését CSS stíluslappal kell formázni.

Adatok hosszútávú tárolására egy SQL szervert kell használni.

A weboldal CSS és JavaScript részeit külön fileban kell megadni, nem lehetnek a HTML fileba ágyazva.

A weboldalnak személyi számítógépről és okostelenfonrol is használhatónak kell lennie.

A weboldalnak tudnia kell igazodni a megjelenítő eszköz felbontásához.

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


### 9.1 Belépés
Az webes alkalmazást kétféle képpen lehet megnyitni. 
1. Amennyiben a felhasználó először használja meg kell adni az életkorát, az országot ahol él valamint a legmagasabb iskolai végzettségét. Miután ezeket megadta a "Tap to begin!" gombra nyomva használhatja az alkalmazást.
2. Amennyiben már használta az alkalmazást és a sütik nem lettek törölve, a weboldal felismeri a felhasználót és nincs szükség adatok betöltésére.

### 9.2 Az alkalmazás használata
Miután a felhasználó belépett az alkalmazásba megjeleneik egy kép az MNIST datasetből. A felhasználónak ezután meg kell adnia azt a számot amiröl úgy gondolja a képen van.

### 9.3 Felhasználói adatok törlése
Amennyiben a felhasználó törölni kívánja az alkalmazás által tárolt adatokat a jobb felső sarokban lévő "clear cookies" gombra kattintva megteheti

## 10. Fogalomszótár

HTML - Hyper Text Markup Language, bővebb leírás olvasható [itt](https://en.wikipedia.org/wiki/HTML).

CSS - Cascading Style Sheets, bővebb leírás olvasható [itt](https://en.wikipedia.org/wiki/CSS)

SQL - Structured Query Language, bővebb leírás olvasható [itt](https://en.wikipedia.org/wiki/SQL)

PHP - egy széles körben használható programozási (szkript-) nyelv, bővebb leírás olvasható [itt](https://en.wikipedia.org/wiki/PHP)

cookie - egy a felhasználó számítógépén tárolt adatcsomag, mely a felhasználó azonosításában segít. Bővebb leírás [itt](https://en.wikipedia.org/wiki/HTTP_cookie)