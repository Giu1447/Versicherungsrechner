### Projektdokumentation: Giusurance Versicherungsrechner

---

#### Inhaltsverzeichnis

1. Projektübersicht
2. Funktionsweise des Versicherungsrechners
3. Styling
4. Umsetzung und Planung
5. GitHub/Projekt
6. Umsetzung des Ergebnisses
7. Umsetzung der Projektdokumentation
8. Persönliche Bewertung

---
### 1. Projektübersicht

**Projektname:** Giusurance Versicherungsrechner

**Beschreibung:** Giusurance ist ein Versicherungsrechner, der verschiedene Versicherungsangebote von Unternehmen wie AXA, Mobiliar und TCS vergleicht und anzeigt. Benutzer können ihre Versicherungsprämie berechnen und mehr über die Versicherungen erfahren.

---
### 2. Funktionsweise des Versicherungsrechners

Der Versicherungsrechner verwendet verschiedene Faktoren, um die Versicherungsprämie zu berechnen. Die Berechnung basiert auf den Eingaben des Benutzers zu folgenden Parametern:

- **Auto Typ**: günstig, mittel, teuer
- **Alter des Autos**: in Jahren
- **Standort des Autos**: Garage, Straße, Garage und Straße
- **Jährliche Kilometeranzahl**: in km
- **Alter des Fahrers**: in Jahren
- **Anzahl der Jahre mit Führerschein**

Die Versicherungsprämie wird durch Multiplikation eines Basispreises von 400 CHF mit verschiedenen Faktoren berechnet. Diese Faktoren werden entsprechend den Benutzerangaben angepasst.

**Beispielcode zur Berechnung:**

```javascript
const berechnePrämie = () => {
    let neuePraemie = 400;

    switch (autoTyp) {
        case 'günstig':
            neuePraemie *= 1.0;
            break;
        case 'mittel':
            neuePraemie *= 1.2;
            break;
        case 'teuer':
            neuePraemie *= 1.5;
            break;
        default:
            break;
    }

    if (autoAlter < 3) {
        neuePraemie *= 1.0;
    } else if (autoAlter >= 3 && autoAlter < 10) {
        neuePraemie *= 1.1;
    } else {
        neuePraemie *= 1.2;
    }

    switch (autoStandort) {
        case 'garage':
            neuePraemie *= 1.0;
            break;
        case 'strasse':
            neuePraemie *= 1.2;
            break;
        case 'garstreet':
            neuePraemie *= 1.1;
            break;
        default:
            break;
    }

    if (jahresKilometer < 5000) {
        neuePraemie *= 1.0;
    } else if (jahresKilometer >= 5000 && jahresKilometer < 15000) {
        neuePraemie *= 1.2;
    } else {
        neuePraemie *= 1.5;
    }

    if (fahrerAlter < 25) {
        neuePraemie *= 1.2;
    }

    if (fuehrerscheinJahre < 3) {
        neuePraemie *= 1.2;
    }

    setVersicherungsPraemie(neuePraemie);
    setBerechnet(true);
    setPreis(neuePraemie);
};
```

---
### Styling

1. Zuerst habe ich das Design auf Figma erstellt. 
	![alt text](https://github.com/Giu1447/Versicherungsrechner/blob/main/pictures/Wireframe.png)

2. Dann habe ich das Design mithilfe von Tailwind in meinem React Projekt umgesetzt

```javaScript
<div id="picture" className="relative h-50vh w-full">

          <img

            src="https://cdn.pixabay.com/photo/2016/12/12/15/30

            alt="placeholder"

            className="w-full h-full object-cover"

          />

          <Link

            to="/berechnen"

            className="absolute top-3/4 left-1/2

            transform -translate-x-1/2 -translate-y-1/2 border-2 rounded-lg border-gray-300

            bg-gray-300 px-5 py-2.5 font-medium text-black transition-colors

            before:absolute before:left-0 before:top-0 before:-z-10 before:h-full

            before:w-full before:origin-top-left before:scale-x-0 before:bg-black

            before:transition-transform before:duration-300 before:content-[''] hover:text-white

            before:hover:scale-x-100 before:rounded-md"

          >

            Zur Berechnung

          </Link>

        </div>
```


---
### 4. Umsetzung und Planung

#### Liste mit allen Ideen, die im Projekt anstehen:

- Implementierung von mehr Versicherungsanbieteroptionen
- Integration eines Vergleichsmoduls für verschiedene Versicherungsangebote
- Verbesserung der Benutzeroberfläche für mobile Geräte

#### Liste mit allen Ideen, die im deklarierten Zeitraum umgesetzt werden:

- Berechnungsfunktionalität für Versicherungsprämien
- Basis-Styling und Benutzeroberfläche
- Integration von React-Routing für die Navigation zwischen Seiten

#### Offen / In Bearbeitung / Erledigt:

- Offen: Integration weiterer Versicherungsangebote
- In Bearbeitung: Verbesserung der Benutzeroberfläche für mobile Geräte
- Erledigt: Berechnungsfunktionalität und Basis-Styling implementiert

---

### 5. GitHub/Projekt

- Das Projekt ist auf GitHub verfügbar und wird regelmäßig aktualisiert.
- Code-Commits und Issues werden nachgeführt und dokumentiert.

---

### 6. Umsetzung des Ergebnisses

- Das Ergebnis entspricht der Aufgabenstellung und dem initialen Entwurf.
- Kleine Abweichungen wurden schriftlich begründet und dokumentiert.
- Der Umfang der Umsetzung wurde innerhalb des festgelegten Zeitrahmens erreicht.
- Die Anwendung funktioniert wie erwartet und ist unter "[https://versicherungsrechner-coral.vercel.app/](https://versicherungsrechner-coral.vercel.app/)" deployed.
- Die Umsetzung erfolgte fachmännisch und entspricht den aktuellen Webstandards.

---

### 7. Umsetzung der Projektdokumentation

- Die gesamte Projektdokumentation ist im Git-Repository verfügbar und sofort ersichtlich.
- Das Readme enthält ein Projekt-Abstract, das den Zweck und die Funktionalität des Versicherungsrechners zusammenfasst.
- Die Struktur der Projektdokumentation ist übersichtlich und ansprechend gestaltet.
- Die Dokumentation bietet informative Details zur Funktionsweise, Umsetzung und Bewertung des Projekts.

---

### 8. Persönliche Bewertung

Die Umsetzung des Giusurance Versicherungsrechners hat meine Erwartungen übertroffen. Durch die Nutzung moderner Technologien wie React und Tailwind konnte ich eine benutzerfreundliche Anwendung entwickeln, die sowohl funktional als auch ästhetisch ansprechend ist. Die laufende Weiterentwicklung des Projekts und die Integration neuer Funktionen bleiben meine nächsten Ziele.


Giulian Mazzeo 2I
