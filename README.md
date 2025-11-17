# Above and Beyond – IoT Experience Pack

A curated bundle of small web applications, UI prototypes, and research notes that showcase how Internet of Things ideas can be
presented to non-technical audiences, controlled from a browser, and visualised with live-looking charts. Each sub-project can
be opened directly in the browser, making the repository a handy toolkit for demos, coursework submissions, or inspiration
when discussing IoT with stakeholders.

---

## Repository Map

| Folder | Description |
| --- | --- |
| `Above and Beyond 1/` | Multi-page informational site covering IoT basics, applications, and required skillsets. |
| `Above and Beyond 2/` | Smart-lighting controller prototype with colour pickers and custom toggle switches. |
| `Above and Beyond 3/` | Login-gated smart-car dashboard mock-up that routes two demo users to personalised pages. |
| `Above and Beyond 4/` | Supporting research paper: “Incidences of Security Failures in IoT” (`.docx`). |
| `Above and Beyond 5/` | Highcharts-based dashboard that plots monthly temperatures for four global cities. |

Static assets (images, CSS, JS) live beside their respective HTML entry points to keep each mini-project self-contained.

---

## Project Highlights

### 1. IoT Information Portal (`Above and Beyond 1/`)
* **Pages:** `index.html`, `Activity.html`, `author.html` backed by a shared `main.css` stylesheet.
* **Navigation:** Fixed Bootstrap navbar plus a vertical sidenav for in-page jumping between “Applications” and “Skills”.【F:Above and Beyond 1/index.html†L15-L46】
* **Content:** Curated copy that explains IoT domains (smart homes, healthcare, industrial, agriculture, cities, retail, transport)
and the skills required to build them, complete with royalty-free images sourced from RFPage, Verzeo, etc.【F:Above and Beyond 1/index.html†L48-L109】【F:Above and Beyond 1/index.html†L114-L166】
* **Call-to-action:** Prominent hero banner with an author link, making it suitable for presentation portfolios.【F:Above and Beyond 1/index.html†L32-L40】

### 2. Smart Lighting Control App (`Above and Beyond 2/`)
* **UI:** Three independent “Light” cards rendered inside `main.html`, each containing an HTML5 colour picker and a custom toggle switch component styled in `style.css`.【F:Above and Beyond 2/main.html†L9-L47】【F:Above and Beyond 2/style.css†L1-L59】
* **Interaction hook:** `java.js` attaches a `change` handler to every colour picker, ready for future integration with real IoT endpoints (background updates are stubbed out so the UI can be themed without affecting layout).【F:Above and Beyond 2/java.js†L1-L11】
* **Styling:** Rounded sliders, smooth transitions, and a centred container keep the prototype device-agnostic and presentation ready.【F:Above and Beyond 2/style.css†L23-L70】

### 3. Smart Car Dashboard (`Above and Beyond 3/`)
* **Login Gate:** `index.html` hosts a minimalist login form that calls `loginUser()` on submit.【F:Above and Beyond 3/index.html†L1-L19】
* **Credential Routing:** `server.js` performs client-side checks and routes `dipanshgarg` to `user1.html` (Tesla Model 3 dashboard) and `architgarg` to `user2.html` (Mercedes-Benz EQS); incorrect entries trigger an alert.【F:Above and Beyond 3/server.js†L1-L23】
* **Dashboards:** Both user pages share `style.css`, displaying hero imagery, live-data placeholders (mileage, fuel, battery, maintenance), and CTA buttons for lock/unlock/start/stop actions.【F:Above and Beyond 3/user1.html†L1-L34】【F:Above and Beyond 3/user2.html†L1-L34】【F:Above and Beyond 3/style.css†L1-L74】

### 4. Research Companion (`Above and Beyond 4/`)
* Contains `Incidences of security failures in IoT.docx`, a narrative report suitable for referencing in presentations or academic submissions. (Open the document locally in Microsoft Word or LibreOffice Writer.)

### 5. Temperature Analytics Dashboard (`Above and Beyond 5/`)
* **Chart Container:** `index.html` loads jQuery 2.1.3 and Highcharts, mounting a full-width chart holder with `id="container"`.【F:Above and Beyond 5/index.html†L1-L13】
* **Visualization Logic:** `server.js` defines titles, axes, tooltips, legends, and four city series (Tokyo, New York, Berlin, London) before instantiating the chart via `$('#container').highcharts(json);`.【F:Above and Beyond 5/server.js†L1-L48】
* **Artifacts:** Supporting report files `a&b5.docx` and `a&b5.pdf` document the problem statement and findings for the dashboard.

---

## Getting Started

### Prerequisites
* Any modern browser (Chrome, Edge, Firefox, Safari).
* Optional: lightweight HTTP server (Python, `http-server`, etc.) if you prefer not to open files directly from disk.

### Run a Project
1. Clone the repository and change into the root folder:
   ```bash
   git clone <repo-url>
   cd AboveandBeyond
   ```
2. Pick a project folder.
3. Either double-click the HTML file (quick preview) or serve the folder:
   ```bash
   # Example: serve Above and Beyond 2 on http://localhost:8000
   cd "Above and Beyond 2"
   python -m http.server 8000
   ```
4. Open the listed URL in your browser. Internet access is required for CDN-hosted Bootstrap, jQuery, Highcharts, and font assets.

Because each project is static, there is no build step and no package installation. If you want to wire the interfaces to real
hardware or cloud services, swap the stub JavaScript with API calls suited to your IoT platform of choice.

---

## Extending the Projects
* **IoT Portal:** Replace the placeholder images or add new sections in `Activity.html` to tailor the narrative to your audience.
* **Smart Lighting:** Connect the colour picker and toggle events in `java.js` to MQTT, WebSocket, or REST endpoints to drive
actual hardware.
* **Smart Car Dashboard:** Use the login guard as a template for role-based dashboards, and populate the data cards with live
telemetry from your vehicles or test rigs.
* **Temperature Dashboard:** Swap the hard-coded `series` arrays in `server.js` for dynamic data (CSV fetch, API call, etc.) and
experiment with other Highcharts modules such as exporting or range selectors.

---

## Contributing & License
This repository is primarily an academic showcase.
