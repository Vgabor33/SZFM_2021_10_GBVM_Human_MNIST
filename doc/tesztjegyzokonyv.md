# Tesztjegyzőkönyv

## Alfa-tesztelés:

### Regisztráció tesztelése Chrome Chrome böngészőben 

- Tesztelő neve: Sándor Milán

- Tesztelés ideje: 2021.12.03 15:57

- Tesztelt rendszer: Windows 10 Home 20H2, Google Chrome (Hivatalos verzió) (64 bites)

- Teszteléshez használt rendszer: Selenium IDE

- Tesztelés módja: Szoftver használatával.

- Tesztelt eset: Regisztráció e-mail használata nélkül.

- Kapott eredmény: Sikeres regisztrálás e-mail használata nélkül.

- Várt eredmény: Sikeres regisztráció e-mail használata nélkül.

- Teszt konkluzió: A regisztrációhoz tervezetten nincs szükség e-mail használatára, a teszt sikeres kimenete pedig ezt alátámasztja.

Egyéb megjegyzés: A teszteléshez használt szoftver megfelelően szimulálta a szükséges lépéseket.

![Kép a regisztráció teszteléséről](/images/reg-teszt-wo-email.png)

### Regisztráció tesztelése e-mail-el Chrome Chrome böngészőben 

- Tesztelő neve: Sándor Milán

- Tesztelés ideje: 2021.12.03 16:29

- Tesztelt rendszer: Windows 10 Home 20H2, Google Chrome (Hivatalos verzió) (64 bites)

- Teszteléshez használt rendszer: Selenium IDE

- Tesztelés módja: Szoftver használatával.

- Tesztelt eset: Regisztráció e-mail használatával.

- Kapott eredmény: Sikeres regisztrálás e-mail használatával.

- Várt eredmény: Sikeres regisztráció e-mail használatával.

- Teszt konkluzió: A regisztrálás tervezetten e-mail-el is lehetséges, a teszt sikeres kimenete pedig ezt alátámasztja.

Egyéb megjegyzés: A teszteléshez használt szoftver megfelelően szimulálta a szükséges lépéseket.

![Kép a regisztráció teszteléséről](/images/reg-teszt-w-email.png)

### Reset gomb tesztelése Chrome Chrome böngészőben 

- Tesztelő neve: Sándor Milán

- Tesztelés ideje: 2021.12.03 16:29

- Tesztelt rendszer: Windows 10 Home 20H2, Google Chrome (Hivatalos verzió) (64 bites)

- Teszteléshez használt rendszer: Selenium IDE

- Tesztelés módja: Szoftver használatával.

- Tesztelt eset: Reset gomb használata a felületet induló állapotba helyezi.

- Kapott eredmény: Az oldal kiinduló állapotba került sikeresen.

- Várt eredmény: Reset gomb aktiválásával alapértelmezett állapotba kerül az oldal.

- Teszt konkluzió: A Reset gomb alkalmazása sikeresen elérte, hogy alapértelmezett állapot álljon elő az oldalon. A teszt sikeres kimenete pedig ezt alátámasztja.

Egyéb megjegyzés: A teszteléshez használt szoftver megfelelően szimulálta a szükséges lépéseket.

![Kép a regisztráció teszteléséről](/images/reset-button-teszt.png)

### Statisztika gomb tesztelése Brave böngészőben

- Tesztelő neve: Kóti Bence

- Tesztelés ideje: 2021.12.05 19:15

- Tesztelt rendszer: Ubuntu 20.04.3 LTS

- Teszteléshez használt rendszer: Brave 1.32

- Tesztelés módja: Manuális teszt.

- Tesztelt eset: A Statisztika gomb megnyitja a Statisztika menüt.

- Kapott eredmény: A Statisztika menü megjelent.

- Várt eredmény: A Statisztika menü megjelenik.

- Teszt konkluzió: A Statiszitka gomb megfelelően működik.

Egyéb megjegyzés: Nincs

### Statisztika menü adatait forntednek átadó JS függvény teszte

- Tesztelő neve: Kóti Bence

- Tesztelés ideje: 2021.12.05 19:18

- Tesztelt rendszer: Ubuntu 20.04.3 LTS

- Teszteléshez használt rendszer: Brave 1.32

- Tesztelés módja: Manuális teszt.

- Tesztelt eset: A Statisztika gomb megnyomásával a JavaScript függvény átadja az alap információkat a weboldalnak ami megjeleníti azokat.

- Kapott eredmény: A HTML fileban megadott információk helyet a JavaScriptben megadott információk kerültek megjelenítésre a weboldalon.

- Várt eredmény: A HTML fileban megadott információk helyet a JavaScriptben megadott információk kerülnek megjelenítésre a weboldalon.

- Teszt konkluzió: A JavaScript függvény megfelelően működik.

Egyéb megjegyzés: nincs


## PHP Funkcionalitás tesztje:

### 1. Felhasználó felvétele az adatbázisba, helyes adatokkal e-mail cím nélkül:

    ### a) Az age mező megfelelően töltődik ki az adatbázisban
    Tesztelő neve: Veress Gábor

    Tesztelés ideje: 2021.12.05 22:52

    Tesztelt rendszer: request_handler.php

    Teszteléshez használt rendszer: Windows 10 Pro 20H2

    Várt eredmény: Várt adatok esetén az adatbázisban az age mező megfelelően állítódott be

    Várt eredmény: Várt adatok esetén az adatbázisban az age mező megfelelően állítódik be

    Teszt konkluzió:  A age mező az adatbázisban a felhasználó által megadott adatoknak megfelelően állítódik be

    Egyéb megjegyzés: nincs

    ### b) Az education mező megfelelően töltődik ki az adatbázisban
    Tesztelő neve: Veress Gábor

    Tesztelés ideje: 2021.12.05 22:54

    Tesztelt rendszer: request_handler.php

    Teszteléshez használt rendszer: Windows 10 Pro 20H2

    Várt eredmény: Várt adatok esetén az adatbázisban az education mező megfelelően állítódott be

    Várt eredmény: Várt adatok esetén az adatbázisban az education mező megfelelően állítódik be

    Teszt konkluzió:  A education mező az adatbázisban a felhasználó által megadott adatoknak megfelelően állítódik be

    Egyéb megjegyzés: nincs

    ### c) A region mező megfelelően töltődik ki az adatbázisban
    Tesztelő neve: Veress Gábor

    Tesztelés ideje: 2021.12.05 22:55

    Tesztelt rendszer: request_handler.php

    Teszteléshez használt rendszer: Windows 10 Pro 20H2

    Kapott eredmény: Várt adatok esetén az adatbázisban az region mező megfelelően állítódott be

    Várt eredmény: Várt adatok esetén az adatbázisban az region mező megfelelően állítódódik be

    Teszt konkluzió:  A region mező az adatbázisban a felhasználó által megadott adatoknak megfelelően állítódik be

    Egyéb megjegyzés: nincs

    ### d) Az email mező üresen marad az adatbázisban
    Tesztelő neve: Veress Gábor

    Tesztelés ideje: 2021.12.05 22:58

    Tesztelt rendszer: request_handler.php

    Teszteléshez használt rendszer: Windows 10 Pro 20H2

    Kapott eredmény: A felhasználó felvételre került az adatbázisba, az email mező pedig üresen maradt

    Várt eredmény: A felhasználó felvételre kerül az adatbázisba, az email mező pedig üresen marad

    Teszt konkluzió: A felhasználó email cím megadása nélkül tud regisztrálni

    Egyéb megjegyzés: nincs

### 2. Meglévő felhasználóhoz email cím felvétele az adatbázisba:

    ### a)
    Tesztelő neve: Veress Gábor

    Tesztelés ideje: 2021.12.05 23:04

    Tesztelt rendszer: request_handler.php

    Teszteléshez használt rendszer: Windows 10 Pro 20H2

    Kapott eredmény: A felhasználó minden adata megmaradt az adatbázisban és az email mező helyesen kitöltődött

    Várt eredmény: A felhasználó minden adata megmarad az adatbázisban és az email mező helyesen kitöltődik

    Teszt konkluzió: Várt adatok esetén egy meglévő felhasználó email címet tud rendelni a 'fiókjához'

    Egyéb megjegyzés: nincs

### 3. Megfelelő válasz tesztelése az api-tól:

    ### a) register action sikeres visszatérésének vizsgálata
    Tesztelő neve: Veress Gábor

    Tesztelés ideje: 2021.12.05 23:08

    Tesztelt rendszer: request_handler.php

    Teszteléshez használt rendszer: Windows 10 Pro 20H2

    Kapott eredmény: A register action hatására a backend egy szerver tokent generált a felhasználó számára majd vissza is küldte azt 200-as kóddal

    Várt eredmény: A register action hatására a backend egy szerver tokent generál a felhasználó számára majd vissza is küldi azt 200-as kóddal

    Teszt konkluzió: Sikeresen regisztráció esetén a backend visszatér egy jól legenerált tokennel

    Egyéb megjegyzés: nincs

    ### b) get-userdata action sikeres visszatérésének vizsgálata
    Tesztelő neve: Veress Gábor

    Tesztelés ideje: 2021.12.05 23:11

    Tesztelt rendszer: request_handler.php

    Teszteléshez használt rendszer: Windows 10 Pro 20H2

    Kapott eredmény: A get-userdata hatására a backend vissza is küldte a felhasználó adatait, megfelelő json formátumban, 200-as kóddal

    Várt eredmény: A get-userdata hatására a backend vissza is küldi a felhasználó adatait, megfelelő json formátumban, 200-as kóddal

    Teszt konkluzió: Regisztrált felhasználó adatai lekérdezhetőek és helyes formátumban kapjuk vissza őket

    Egyéb megjegyzés: nincs


    ### c) set-email action sikeres visszatérésének vizsgálata
    Tesztelő neve: Veress Gábor

    Tesztelés ideje: 2021.12.05 23:13

    Tesztelt rendszer: request_handler.php

    Teszteléshez használt rendszer: Windows 10 Pro 20H2

    Kapott eredmény: A set-email hatására a backend felvette a felhaszáló e-mail címét az adatbázisba majd 200-as kóddal tért vissza

    Várt eredmény: A set-email hatására a backend felveszi a felhaszáló e-mail címét az adatbázisba majd 200-as kóddal tér vissza

    Teszt konkluzió: Regisztrált felhasználó email regisztrálása nem okoz hibát, és megfelelően működik

    Egyéb megjegyzés: nincs
