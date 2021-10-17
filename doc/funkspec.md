# Átváltó funkcióspecifikáció

--1-6-ig ugyan az, mint a kövspec--

A felhasználó szemszögéből kell elkészíteni az egyes pontokat

## 1. Jelenlegi helyzet





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

![Képernyőterv](/images/kepernyoterv1.png)

Mint látható a képen, a középen betöltünk egy képet, a bal felső sarokban pedi egy számláló, hogy hány képet talált el a felhasználó eddig. A jobb felső sarokban pedig a cookie-k által tárolt információk törölhetőek.

![Képernyőterv](/images/kepernyoterv2.png)

A képen látható az első használat során kitöltendő menű.

![Képernyőterv](/images/kepernyoterv3.png)

Ezen a képen egy az első használat során kitöltendő menűhöz egy kis navigációs segítség látható.





## 9. Forgatókönyvek


A felhasználó hogyan tudja használni az app-ot.
Milyen funkciót milyen lépéseken keresztül ér el (lépésenkénti leírás).


