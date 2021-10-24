## 1. A Rendszer célja

A rendszer célja egy olyan kiértékelhető interaktív teszt, aminek eredményeit később statisztikailag fel lehet dolgozni.

A felhasználó dönthet arról, hogy regisztrálja magát a rendszerbe, vagy anonymus ként folytatja a teszt kitöltését. A regisztrált felhasználókat kitöltés helyszíne alapján, megyénként lehet majd megkülönböztetni.

A rendszer egy tanító felülettel kezdjen ahol, felkészíti a felhasználót a teszt kitöltésére.

A felhasználó bármikor tudja tesztet félbehagyni, hogy később tudja folytatni. A már befelyezett teszt mentése opcionális lesz, ha esetleg nem szándékozik az eredményét megosztani.

A felület fontos hogy elérhető legyen telefonon, és weben is. Webes felület kombatibilis, összes lehetséges eszköz képméretével.

A rendszer intuitív, minimalista, és esztétikus felülettel fog rendelkezni, egyszerű kezelése és felhasználóbarát felület elérése érdekében.


## 2. Projektterv

A projekt felülete HTML, CSS és JavaScript nyelveken fog készülni, illetve reszponzív lesz.
A felülethez lesznek automatizált tesztek is (unit-, illetve integrációs tesztek).

A felülethez még egy szerver oldali alkalmazás fog társulni, ami az adatbázist és a felhasználókat kezeli, illetve visszajelzéseket küldhet a kitöltött kérdőívről.
A szerver oldali alkalmazáshoz unit-, illetve integrációs tesztek fognak íródni.

A fejlesztőcsapat négy fejlesztőből áll, akik a nekik a csapatvezető által kiosztott projektrészért, illetve a tesztelésben szintén a projekt csapatvezetője által kiosztott részek teszteléséért felelnek.

Személyenkénti projektrészek:
| Név              | Felelősségkör (kódolás)                                 | Tesztelés                 |
|----------------- |-------------------------------------------------------- |-------------------------- |
| Kóti Bence       | HTML (design), illetve a szerver alkalmazásfejlesztése  | Szerver alkalmazás unit- és integrációs tesztek |
| Sándor Milán     | CSS                                                     | Frontend unit- és integrációs tesztek |
| Veress Gábor     | Szerver alkalmazás fejlesztése                          |  Szerver alkalmazás unit- és integrációs tesztek |
| Nagy Viktor Márk | JavaScript                                              | Frontend unit- és integrációs tesztek |


### Mérföldkövek

    [M-01] Szerepek egyértelműsítése és a projekthez szükséges állományok létrehozása, valamint a UI fájlok elkészítése

    [M-02] A weboldal kinézetének elkészítése, illetve a reszponzivitás megléte

    [M-03] A weboldal alap funkcionalitásának elkészítése

    [M-04] A JavaScript funkcionalitás HTML oldalba integrálása, szerver alkalmazás nélküli működés elérése

    [M-05] Szerver alkalmazás és adatbázis létrehozása, és köztük lévő kapcsolat működése

    [M-06] Szerver alkalmazással való kommunikáció elérése a weblapról

    [M-07] Kész allapot


### Ütemterv

    1. [M-01] mérföldkő elérése, ehhez egy meeting, ahol a csapat pontosan kiosztja a feladatokat, és pontos határidőket szab a részfeladatok elkészítésre

    2. [M-02]-ben megfogalmazott mérföldkő elérése, azaz a HTML és CSS fejlesztők nekilátnak az oldal kinézete és reszponzivitása kidolgozásának

    3. [M-03] mérföldkő elérése, azaz a JavaScript kódolása, illetve az ahhoz a HTML-ben szükséges elemek elkészítése

    4. [M-04] elérése, mely a Javascript integrációt jelenti a weboldal többi részéhez

    5. [M-05] -ben megfogalmazott mérföldkő elérése, azaz az adatbázis létrehozása és a szerver alkalmazás elérésének biztosítása ehhez

    6. [M-06] mérföldkő elérése, tehát a helyes funkcionalitás elérése

    7. Kész állapotra való törekvés (Felmerülő hibák javítása a hátralévő idő függvényében)


## 3. Üzleti folyamatok modellje
### 3.1. A teszt terjesztése
#### 3.1.1. Szereplők
 * Felhasználó
#### 3.1.2. Erőforrások
 * Internetkapcsolat
 * Publikus szerver
#### 3.1.3. Entitások
 * Az alkalmazás
#### 3.1.4. Folyamat
A cég megosztja az alkalmazás elérhetőségét a felhasználóval =>  
A felhasználó felkeresi a felületet =>  
(Opcionális) A felhasználó telepíti az alkalmazást (Könyebb elérhetőség)

![A terjesztés folymatának folyamatábrája](/images/terjesztes.png)
### 3.2. A tesztelés folyamata
#### 3.2.1. Szereplők
 * Felhasználó
#### 3.2.2. Erőforrások
 * Internetkapcsolat
 * Publikus szerver
#### 3.2.3. Entitások
 * Az alkalmazás
#### 3.2.4. Folyamat
![A tesztelés folymatának folyamatábrája](/images/teszteles.png)
### 3.3. Adatok feldolgozása
#### 3.3.1. Szereplők
 * A cég
 * Ügyfél
#### 3.3.2. Erőforrások
 * Publikus szerver
#### 3.3.3. Entitások
 * A teszt adatai
#### 3.3.4. Folyamat
A cég a felmérés adatait egy szabványos formában bármikor ki tudja nyerni a szerverből =>  
Az adatokat egyszerűen meg tudja osztani az ügyféllel vagy szerződővel

## 4. Követelmények

* [K01] Hordozhatóság
* [K02] Reszponzív dizájn
* [K03] Rendszerfüggetlenség
* [K04] Gyors működés
* [K05] Könnyű kezelhetőség
* [K06] Kis tárhely igény
* [K07] Bármikor megszakítható, majd folytatható kitöltés
* [K08] Felhasználó megjegyzése (legalább helyileg)

## 5. Funkcionális terv




## 6. Fizikai környezet

Az alkalmazás Android és web platformra, hordozható
eszközökre (okostelefonok, táblagépek) készül.
- Nincsenek megvásárolt komponensek.
- Kliens által biztosított eszközök:
    - Webszerver
    - Okoseszköz
- Fejlesztői eszközök:
    - Visual Studio Code
    - Onenote
    - Git
    - MySQL Workbench
- Tesztelési környezet:
    - unit tesztekhez:
        - automatizálva lesznek frontenden jest, backenden JUnit használatával
    - Chrome
    - Firefox
    - Microsoft Edge
    - Selenium

## 7. Absztrakt domain modell




## 8. Architekturális terv

A lenti képen látható a tervezett rendszer arhitektuális terve:

![Architekturális terv](/images/architekturalis-terv.png)

## 9. Adatbázisterv




## 10. Implementációs terv

A lenti képen látható a szerver implementációs terve:

![Implementációs terv](/images/impl-terv.png)

## 11. Tesztterv




## 12. Telepítési terv




## 13. Karbantartási terv



