# Website Mie Lene Heesch

Schlichte einseitige Website (Landingpage mit Sprungmarken-Navigation), gebaut mit
[Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com).

## Lokal starten

```bash
npm install
npm run dev      # http://localhost:4321
```

## Inhalte bearbeiten

Fast alle Texte, Leistungen, Kunden und Links stehen in **einer** Datei:

```
src/content/site.ts
```

Einfach den Text zwischen den `"Anführungszeichen"` ändern. Bilder (Foto, Kundenlogos,
Arbeitsproben) kommen in den Ordner `public/` und werden in `site.ts` per Pfad referenziert
(z. B. `/mie.jpg` oder `/logos/edeka.svg`).

## Kontaktformular (Web3Forms)

Das Formular nutzt [Web3Forms](https://web3forms.com) – kostenlos, kein Server nötig.
1. Auf web3forms.com mit Mies E-Mail einen kostenlosen **Access Key** holen.
2. Den Key in `src/content/site.ts` bei `contact.web3formsKey` eintragen.
Nachrichten landen dann direkt in ihrem Postfach.

## Veröffentlichen auf IONOS

```bash
npm run build    # erzeugt den Ordner dist/
```

Den **Inhalt** des `dist/`-Ordners per SFTP in das Webspace-Verzeichnis bei IONOS hochladen
(z. B. mit FileZilla). Domain in der IONOS-Verwaltung auf dieses Verzeichnis zeigen lassen.
Es ist kein Node-Server nötig – reine statische Dateien.

## Rechtliches

`src/pages/impressum.astro` und `src/pages/datenschutz.astro` enthalten Vorlagen.
Vor dem Livegang Adresse/Angaben ergänzen und prüfen lassen. Es werden keine Cookies
und kein Tracking verwendet.
