# Notatnik API

Notatnik API to prosty serwer REST API, który pozwala na tworzenie, odczytywanie, aktualizowanie i usuwanie notatek. Projekt został stworzony w Node.js z wykorzystaniem frameworka Express oraz bazy danych PostgreSQL.

## Funkcjonalności

- Dodawanie nowych notatek
- Pobieranie wszystkich notatek
- Pobieranie notatki o danym id
- Aktualizacja notatki o danym id
- Usuwanie notatki o danym id

## Wymagania

- Node.js (wersja 12 lub nowsza)
- npm (wersja 6 lub nowsza)
- PostgreSQL

## Instalacja

1. Sklonuj repozytorium:

```
git clone https://github.com/petitoff/note-app-api.git
```

2. Zainstaluj wymagane zależności:

```
cd note-app-api
npm install
```

3. Skonfiguruj połączenie z bazą danych PostgreSQL:

Edytuj plik `db.js` i uzupełnij właściwy connection string.

4. Uruchom serwer:

```
npm start
```

## Użycie

Serwer uruchomi się na porcie 3000 (domyślnie) i będzie dostępny pod adresem `http://localhost:3000`. Aby korzystać z API, możesz użyć następujących ścieżek i metod HTTP:

- `POST /api/notes` - dodaj notatkę
- `GET /api/notes` - pobierz wszystkie notatki
- `GET /api/notes/:id` - pobierz notatkę o danym id
- `PUT /api/notes/:id` - aktualizuj notatkę o danym id
- `DELETE /api/notes/:id` - usuń notatkę o danym id

## Współpraca

Jeśli chcesz współpracować nad projektem lub zgłosić błąd, proszę utwórz issue w repozytorium GitHub lub skontaktuj się z autorem.

## Licencja

Ten projekt jest udostępniany na podstawie licencji MIT.
