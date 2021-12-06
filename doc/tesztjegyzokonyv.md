# Tesztjegyzőkönyv

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
