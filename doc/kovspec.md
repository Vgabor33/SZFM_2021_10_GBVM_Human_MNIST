# Human MNIST követelményspecifikáció



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

Jelenleg nem folytat a cég hasonló üzleti folyamatokat.


## 4. Igényelt üzleti folyamatok
### 4.1. A teszt terjesztése
A cég generál egy új elérhetőséget a tesztfelülethez =>  
Az elérhetőséget megosztja a felhasználóval =>  
A felhasználó felkeresi a felületet
### 4.2. A tesztelés folyamata
### 4.2.1. Új felhasználó regisztrációja
Az alkalmazás megkéri a felhasználót a regisztrációra =>  
A felhasználó regisztrál e-mail címmel és jelszóval =>  
Az ezután elvégzett tesztek egy egyedi, nem lekövethető (ld. Adatkezelési Szabályzat) fiókazonosítóval kerülnek elküldésre
### 4.2.2. Alkalmazás használata regisztráció nélkül
Az alkalmazás megkéri a felhasználót a regisztrációra =>  
A felhasználó átugorja a regisztrációs lépést =>  
Az alkalmazás megoldja, hogy legalább az ugyanarról az eszközről/telepítésről érkező válaszok ugyanolyan azonosítóval rendelkezzenek
### 4.2.2. Regisztrált felhasználó tesztelésének elkezdése
Az alkalmazás képekkel prezentálja a felhasználót =>  
A felhasználó a képeknek megfelelő bemenetet visz fel =>  
Az alkalmazás elküldi a távoli szervernek a felhasználó válaszát és fiókazonosítóját
### 4.2.3. Nem Regisztrált felhasználó tesztelésének elkezdése
Az alkalmazás képekkel prezentálja a felhasználót =>  
A felhasználó a képeknek megfelelő bemenetet visz fel =>  
Az alkalmazás elküldi a távoli szervernek a felhasználó válaszát és telepítésazonosítóját
### 4.2.4. Tesztelés szünetelése
A felhasználó ideiglenesen szünetelteti a tesztelés folyamatát =>  
Az alkalmazás ennek megfelelően kezeli a szünetet, valamilyen módon megjegyzi a teszt pillanatnyi állását
### 4.2.5. Tesztelés folytatása
A felhasználó egy szünet után folytatja a tesztet =>  
Az alkalmazás könnyen és akadályok nélkül folytatja a képek prezentálását, mintha nem történt volna meg a szünet
### 4.3. Adatok feldolgozása
A cég a felmérés adatait egy szabványos formában bármikor ki tudja nyerni a szerverből =>  
Az adatokat egyszerűen meg tudja osztani az ügyféllel vagy szerződővel


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


## 7. Fogalomszótár

HTML - Hyper Text Markup Language, bővebb leírás olvasható [itt](https://en.wikipedia.org/wiki/HTML).

CSS - Cascading Style Sheets, bővebb leírás olvasható [itt](https://en.wikipedia.org/wiki/CSS)

SQL - Structured Query Language, bővebb leírás olvasható [itt](https://en.wikipedia.org/wiki/SQL)

PHP - egy széles körben használható programozási (szkript-) nyelv, bővebb leírás olvasható [itt](https://en.wikipedia.org/wiki/PHP)

