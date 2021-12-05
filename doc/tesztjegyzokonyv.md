# Tesztjegyzőkönyv

## Alfa-tesztelés:

### Regisztráció tesztelése Chrome Chrome böngészőben 

- Tesztelő neve: Sándor Milán

- Tesztelés ideje: 2021.12.03 15:57

- Tesztelt rendszer: Windows 10 Home 20H2, Google Chrome (Hivatalos verzió) (64 bites)

- Teszteléshez használt rendszer: Selenium IDE

- Tesztelés módja:

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

- Tesztelés módja:

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

- Tesztelés módja:

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