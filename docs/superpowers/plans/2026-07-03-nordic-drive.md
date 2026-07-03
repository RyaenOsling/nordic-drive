# Nordic Drive Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a high-fidelity, premium single-page car rental website named "Nordic Drive" featuring an asymmetric hero section, an interactive expandable grid catalog with filters, and an inline multi-step booking wizard.

**Architecture:** Vanilla HTML5, CSS3 (using BEM, custom properties, and CSS Grid), and modern ES6 JavaScript. Dynamic elements (like details panel insertion and booking wizard step transition) are managed via native DOM manipulation. Tests are written in a custom Node.js script `test.js` to verify file integrity, layout assertions, and run unit tests on pure JS state/logic functions.

**Tech Stack:** HTML5, CSS3, JavaScript (ES6+), Node.js (for running tests).

## Global Constraints
- Do not touch other folders in `c:/balavstvo/sites/` except `c:/balavstvo/sites/site 3/nordic-drive/`.
- Use BEM methodology for CSS classes.
- No external CSS or JS libraries (e.g., Tailwind, jQuery, Bootstrap) — pure vanilla only.
- Implement the "Nordic & Clean" aesthetic with a light background, graphite text, and deep green accents.
- Commit after completing every task with meaningful commit messages.

---

### Task 1: Scaffolding, Git Initialization & Test Runner

**Files:**
- Create: `c:/balavstvo/sites/site 3/nordic-drive/index.html`
- Create: `c:/balavstvo/sites/site 3/nordic-drive/style.css`
- Create: `c:/balavstvo/sites/site 3/nordic-drive/script.js`
- Create: `c:/balavstvo/sites/site 3/nordic-drive/test.js`
- Create: `c:/balavstvo/sites/site 3/nordic-drive/.gitignore`

**Interfaces:**
- Consumes: None
- Produces: Base files and verification test runner.

- [ ] **Step 1: Write the failing test**
  Create the `test.js` file with assertions for basic files and structure.
  ```javascript
  const fs = require('fs');
  const path = require('path');
  const assert = require('assert').strict;

  console.log("=== Running Task 1 Tests: File Scaffolding ===");
  try {
      assert.ok(fs.existsSync(path.join(__dirname, 'index.html')), "index.html is missing");
      assert.ok(fs.existsSync(path.join(__dirname, 'style.css')), "style.css is missing");
      assert.ok(fs.existsSync(path.join(__dirname, 'script.js')), "script.js is missing");
      
      const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');
      assert.ok(html.includes('<!DOCTYPE html>'), "HTML Doctype declaration is missing");
      assert.ok(html.includes('<html lang="ru">') || html.includes('<html lang="en">'), "HTML tag or lang is missing");
      assert.ok(html.includes('<link rel="stylesheet" href="style.css">'), "CSS is not linked");
      assert.ok(html.includes('<script src="script.js"'), "JS is not linked");
      
      console.log("PASS: Basic scaffolding verified!");
  } catch (err) {
      console.error("FAIL:", err.message);
      process.exit(1);
  }
  ```

- [ ] **Step 2: Run test to verify it fails**
  Run: `node test.js`
  Expected: FAIL with "index.html is missing" or similar filesystem error.

- [ ] **Step 3: Create files with minimal implementation**
  Create the folder `c:/balavstvo/sites/site 3/nordic-drive/` and initialize the files.
  `index.html`:
  ```html
  <!DOCTYPE html>
  <html lang="ru">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nordic Drive — Premium Car Rental</title>
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <script src="script.js" defer></script>
  </body>
  </html>
  ```
  `style.css`:
  ```css
  /* Base styles */
  ```
  `script.js`:
  ```javascript
  // Application JS
  ```
  `.gitignore`:
  ```
  node_modules/
  .DS_Store
  ```

- [ ] **Step 4: Run test to verify it passes**
  Run: `node test.js`
  Expected: PASS: Basic scaffolding verified!

- [ ] **Step 5: Initialize Git and Commit**
  Run:
  ```powershell
  git init
  git add .
  git commit -m "chore: scaffold project structure and test runner"
  ```

---

### Task 2: Typography, Global Styles & Asymmetric Hero Section

**Files:**
- Modify: `c:/balavstvo/sites/site 3/nordic-drive/index.html`
- Modify: `c:/balavstvo/sites/site 3/nordic-drive/style.css`
- Modify: `c:/balavstvo/sites/site 3/nordic-drive/test.js`

**Interfaces:**
- Consumes: Task 1 scaffolding.
- Produces: Rendered Hero section with typography and design system colors.

- [ ] **Step 1: Write the failing test**
  Add assertions in `test.js` for typography fonts, CSS variables, and Hero section components.
  ```javascript
  // In test.js
  console.log("=== Running Task 2 Tests: Design System & Hero ===");
  try {
      const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');
      const css = fs.readFileSync(path.join(__dirname, 'style.css'), 'utf-8');

      // Check Google Fonts links
      assert.ok(html.includes('fonts.googleapis.com'), "Google Fonts link is missing");
      assert.ok(html.includes('Cormorant+Garamond') && html.includes('Plus+Jakarta+Sans'), "Required fonts are missing");
      
      // Check CSS Variables
      assert.ok(css.includes('--bg-primary: #F6F5F2') || css.includes('--bg-primary'), "CSS variable --bg-primary is missing");
      assert.ok(css.includes('--accent-color: #2D4239') || css.includes('--accent-color'), "CSS variable --accent-color is missing");

      // Check Hero semantic container
      assert.ok(html.includes('<header class="hero">'), "Hero element header is missing");
      assert.ok(html.includes('hero__title'), "Hero title class is missing");
      assert.ok(html.includes('hero__image'), "Hero image container is missing");
      
      console.log("PASS: Design System & Hero verified!");
  } catch (err) {
      console.error("FAIL:", err.message);
      process.exit(1);
  }
  ```

- [ ] **Step 2: Run test to verify it fails**
  Run: `node test.js`
  Expected: FAIL on Google Fonts links or CSS variables.

- [ ] **Step 3: Implement Google Fonts, CSS Variables, and Hero Section HTML/CSS**
  `index.html`:
  ```html
  <!DOCTYPE html>
  <html lang="ru">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="description" content="Nordic Drive - Аренда премиальных электромобилей в скандинавском стиле. Минимализм, честные цены, безупречный сервис.">
      <title>Nordic Drive — Premium Car Rental</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header class="hero">
          <nav class="nav">
              <a href="#" class="nav__logo">NORDIC DRIVE</a>
              <div class="nav__links">
                  <a href="#catalog" class="nav__link">Каталог</a>
                  <a href="#booking" class="nav__link nav__link--cta">Забронировать</a>
              </div>
          </nav>
          <div class="hero__container">
              <div class="hero__content">
                  <h1 class="hero__title">Чистая форма.<br>Тихое присутствие.<br>Осознанный выбор.</h1>
                  <p class="hero__description">Тщательно отобранный флот современных электромобилей для дорог Севера. Ничего лишнего. Только безупречный дизайн и абсолютный комфорт движения.</p>
                  <a href="#catalog" class="hero__btn btn">Исследовать флот</a>
              </div>
              <div class="hero__image-wrapper">
                  <img src="assets/images/hero-car.webp" alt="Polestar Premium SUV" class="hero__image">
                  <div class="hero__backdrop"></div>
              </div>
          </div>
          <div class="hero__stats">
              <div class="hero__stat-item">
                  <span class="hero__stat-num">100%</span>
                  <span class="hero__stat-label">Электро</span>
              </div>
              <div class="hero__stat-item">
                  <span class="hero__stat-num">0%</span>
                  <span class="hero__stat-label">Выбросов</span>
              </div>
              <div class="hero__stat-item">
                  <span class="hero__stat-num">24/7</span>
                  <span class="hero__stat-label">Поддержка</span>
              </div>
          </div>
      </header>
      <script src="script.js" defer></script>
  </body>
  </html>
  ```
  `style.css`:
  ```css
  :root {
      --bg-primary: #F6F5F2;
      --bg-secondary: #EFEDE8;
      --border-color: #E8E6E0;
      --text-primary: #18181A;
      --text-secondary: #5A5A5C;
      --accent-color: #2D4239;
      --accent-hover: #1E2D26;
      --accent-light: #E7ECE9;
      --error-color: #C56E52;
      --transition-smooth: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
  }

  html {
      scroll-behavior: smooth;
  }

  body {
      background-color: var(--bg-primary);
      color: var(--text-primary);
      font-family: 'Plus Jakarta Sans', sans-serif;
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
  }

  /* Typography */
  h1, h2, h3 {
      font-family: 'Cormorant Garamond', serif;
      font-weight: 500;
  }

  /* Buttons */
  .btn {
      display: inline-block;
      padding: 1rem 2rem;
      background-color: var(--accent-color);
      color: #fff;
      text-decoration: none;
      font-size: 0.9rem;
      font-weight: 500;
      letter-spacing: 0.05em;
      border: none;
      cursor: pointer;
      transition: var(--transition-smooth);
  }

  .btn:hover {
      background-color: var(--accent-hover);
  }

  /* Navigation */
  .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2rem 5%;
      border-bottom: 1px solid var(--border-color);
  }

  .nav__logo {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--text-primary);
      text-decoration: none;
      letter-spacing: 0.1em;
  }

  .nav__links {
      display: flex;
      align-items: center;
      gap: 2.5rem;
  }

  .nav__link {
      text-decoration: none;
      color: var(--text-secondary);
      font-size: 0.85rem;
      font-weight: 500;
      letter-spacing: 0.05em;
      transition: var(--transition-smooth);
  }

  .nav__link:hover {
      color: var(--text-primary);
  }

  .nav__link--cta {
      padding: 0.6rem 1.2rem;
      border: 1px solid var(--text-primary);
      color: var(--text-primary);
  }

  .nav__link--cta:hover {
      background-color: var(--text-primary);
      color: var(--bg-primary);
  }

  /* Hero Section */
  .hero {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
  }

  .hero__container {
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      align-items: center;
      padding: 4rem 5%;
      flex-grow: 1;
      gap: 4rem;
  }

  .hero__content {
      max-width: 600px;
  }

  .hero__title {
      font-size: 4rem;
      line-height: 1.1;
      margin-bottom: 2rem;
      color: var(--text-primary);
  }

  .hero__description {
      font-size: 1.1rem;
      color: var(--text-secondary);
      margin-bottom: 3rem;
      max-width: 500px;
  }

  .hero__image-wrapper {
      position: relative;
      height: 450px;
      display: flex;
      align-items: center;
      justify-content: center;
  }

  .hero__image {
      max-width: 110%;
      height: auto;
      object-fit: contain;
      z-index: 2;
      filter: drop-shadow(0 20px 40px rgba(0,0,0,0.1));
  }

  .hero__backdrop {
      position: absolute;
      width: 80%;
      height: 80%;
      background-color: var(--bg-secondary);
      right: 0;
      bottom: 0;
      z-index: 1;
      border-radius: 100px 0 0 100px;
  }

  .hero__stats {
      display: flex;
      gap: 6rem;
      padding: 3rem 5%;
      border-top: 1px solid var(--border-color);
  }

  .hero__stat-item {
      display: flex;
      flex-direction: column;
  }

  .hero__stat-num {
      font-family: 'Cormorant Garamond', serif;
      font-size: 2.5rem;
      font-weight: 500;
      color: var(--accent-color);
      line-height: 1;
  }

  .hero__stat-label {
      font-size: 0.8rem;
      color: var(--text-secondary);
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-top: 0.5rem;
  }

  @media (max-width: 1024px) {
      .hero__container {
          grid-template-columns: 1fr;
          padding: 2rem 5%;
          gap: 2rem;
      }
      .hero__image-wrapper {
          height: 300px;
          order: -1;
      }
      .hero__title {
          font-size: 2.8rem;
      }
      .hero__stats {
          gap: 3rem;
          justify-content: space-between;
      }
  }
  ```
  *(Note: We will create the image assets in Task 6, using CSS gradients or SVG shapes temporarily if needed. The test checks basic HTML/CSS definitions which are satisfied).*

- [ ] **Step 4: Run test to verify it passes**
  Run: `node test.js`
  Expected: PASS: Design System & Hero verified!

- [ ] **Step 5: Commit**
  Run:
  ```powershell
  git add index.html style.css test.js
  git commit -m "feat: design system and hero section layout with custom typography"
  ```

---

### Task 3: Catalog Grid & Filter State Logic (TDD)

**Files:**
- Modify: `c:/balavstvo/sites/site 3/nordic-drive/index.html`
- Modify: `c:/balavstvo/sites/site 3/nordic-drive/style.css`
- Modify: `c:/balavstvo/sites/site 3/nordic-drive/script.js`
- Modify: `c:/balavstvo/sites/site 3/nordic-drive/test.js`

**Interfaces:**
- Consumes: Task 2.
- Produces: Fleet catalog grid, interactive filter bar, and JS pure functions for filtering.

- [ ] **Step 1: Write the failing test**
  We will add unit test cases to `test.js` for filtering.
  First, export the filter logic in `script.js` if running in Node context.
  Add assertions in `test.js`:
  ```javascript
  console.log("=== Running Task 3 Tests: Catalog Filter Logic ===");
  try {
      const scriptPath = path.join(__dirname, 'script.js');
      // Mock standard DOM globals before requiring the script
      global.document = {
          querySelectorAll: () => [],
          querySelector: () => ({ addEventListener: () => {} })
      };
      
      const app = require(scriptPath);
      assert.ok(Array.isArray(app.carsData), "carsData is missing or not an array");
      
      // Test filter function directly
      const mockFilters = { class: 'suv', transmission: 'all', priceSort: 'default' };
      const filtered = app.filterCars(app.carsData, mockFilters);
      
      // Assert that all returned items are SUVs
      filtered.forEach(car => {
          assert.strictEqual(car.class, 'suv', `Found non-SUV car in filtered list: ${car.name}`);
      });
      
      console.log("PASS: Catalog filter logic verified!");
  } catch (err) {
      console.error("FAIL:", err.message);
      process.exit(1);
  }
  ```

- [ ] **Step 2: Run test to verify it fails**
  Run: `node test.js`
  Expected: FAIL with "Cannot find module/export" or "carsData is missing".

- [ ] **Step 3: Implement catalog HTML, grid styles, and JS filter function**
  `index.html` (Insert catalog section before `</body>`):
  ```html
  <main>
      <section id="catalog" class="catalog">
          <div class="catalog__header">
              <h2 class="catalog__title">Наш флот</h2>
              <div class="catalog__filters">
                  <div class="filter-group">
                      <span class="filter-group__label">Класс</span>
                      <button class="filter-btn active" data-filter-type="class" data-filter-value="all">Все</button>
                      <button class="filter-btn" data-filter-type="class" data-filter-value="sedan">Седан</button>
                      <button class="filter-btn" data-filter-type="class" data-filter-value="suv">Внедорожник</button>
                      <button class="filter-btn" data-filter-type="class" data-filter-value="touring">Туринг</button>
                  </div>
                  <div class="filter-group">
                      <span class="filter-group__label">Трансмиссия</span>
                      <button class="filter-btn active" data-filter-type="transmission" data-filter-value="all">Все</button>
                      <button class="filter-btn" data-filter-type="transmission" data-filter-value="auto">Автомат</button>
                      <button class="filter-btn" data-filter-type="transmission" data-filter-value="manual">Механика</button>
                  </div>
                  <div class="filter-group">
                      <span class="filter-group__label">Цена</span>
                      <select class="filter-select" id="price-sort">
                          <option value="default">По умолчанию</option>
                          <option value="asc">Сначала дешевле</option>
                          <option value="desc">Сначала дороже</option>
                      </select>
                  </div>
              </div>
          </div>
          <div class="catalog__grid" id="cars-grid">
              <!-- Dynamically populated via JS -->
          </div>
      </section>
  </main>
  ```
  `style.css` (Add catalog and card styles):
  ```css
  .catalog {
      padding: 6rem 5%;
      background-color: var(--bg-primary);
  }

  .catalog__header {
      margin-bottom: 3rem;
  }

  .catalog__title {
      font-size: 3rem;
      margin-bottom: 2rem;
  }

  .catalog__filters {
      display: flex;
      flex-wrap: wrap;
      gap: 3rem;
      align-items: center;
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 1.5rem;
  }

  .filter-group {
      display: flex;
      align-items: center;
      gap: 0.8rem;
  }

  .filter-group__label {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--text-secondary);
      margin-right: 0.5rem;
  }

  .filter-btn {
      background: none;
      border: 1px solid transparent;
      padding: 0.4rem 1rem;
      font-family: inherit;
      font-size: 0.85rem;
      cursor: pointer;
      color: var(--text-secondary);
      transition: var(--transition-smooth);
  }

  .filter-btn:hover {
      color: var(--text-primary);
  }

  .filter-btn.active {
      border-color: var(--text-primary);
      color: var(--text-primary);
  }

  .filter-select {
      background: transparent;
      border: 1px solid var(--border-color);
      padding: 0.4rem 1rem;
      font-family: inherit;
      font-size: 0.85rem;
      color: var(--text-primary);
      cursor: pointer;
      outline: none;
  }

  .catalog__grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
      transition: var(--transition-smooth);
  }

  /* Car Card */
  .car-card {
      background-color: var(--bg-secondary);
      border: 1px solid transparent;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      transition: var(--transition-smooth);
  }

  .car-card:hover {
      border-color: var(--text-primary);
      transform: translateY(-4px);
  }

  .car-card--active {
      border-color: var(--accent-color);
      background-color: var(--bg-primary);
  }

  .car-card__image-wrapper {
      height: 180px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.5rem;
      overflow: hidden;
  }

  .car-card__image {
      max-width: 100%;
      height: auto;
      object-fit: contain;
      transition: var(--transition-smooth);
  }

  .car-card:hover .car-card__image {
      transform: scale(1.05);
  }

  .car-card__meta {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 0.5rem;
  }

  .car-card__name {
      font-size: 1.4rem;
      font-weight: 500;
  }

  .car-card__price {
      font-size: 1.1rem;
      font-weight: 600;
  }

  .car-card__price span {
      font-size: 0.8rem;
      font-weight: 400;
      color: var(--text-secondary);
  }

  .car-card__specs {
      display: flex;
      gap: 1rem;
      font-size: 0.8rem;
      color: var(--text-secondary);
      margin-top: auto;
      padding-top: 1rem;
      border-top: 1px solid var(--border-color);
  }
  ```
  `script.js`:
  ```javascript
  const carsData = [
      {
          id: 'polestar-3',
          name: 'Polestar 3',
          class: 'suv',
          price: 12000,
          transmission: 'auto',
          power: '489 л.с.',
          range: '610 км',
          acceleration: '5.0 сек',
          images: ['assets/images/polestar3-1.webp', 'assets/images/polestar3-2.webp', 'assets/images/polestar3-3.webp'],
          specs: { battery: '111 кВт⋅ч', speed: '210 км/ч', capacity: '5 мест', cargo: '484 л' }
      },
      {
          id: 'volvo-ex30',
          name: 'Volvo EX30',
          class: 'suv',
          price: 7500,
          transmission: 'auto',
          power: '272 л.с.',
          range: '476 км',
          acceleration: '5.7 сек',
          images: ['assets/images/ex30-1.webp', 'assets/images/ex30-2.webp', 'assets/images/ex30-3.webp'],
          specs: { battery: '69 кВт⋅ч', speed: '180 км/ч', capacity: '5 мест', cargo: '318 л' }
      },
      {
          id: 'audi-etron-gt',
          name: 'Audi e-tron GT',
          class: 'sedan',
          price: 18000,
          transmission: 'auto',
          power: '530 л.с.',
          range: '487 км',
          acceleration: '4.1 сек',
          images: ['assets/images/etron-1.webp', 'assets/images/etron-2.webp', 'assets/images/etron-3.webp'],
          specs: { battery: '93 кВт⋅ч', speed: '245 км/ч', capacity: '4 мест', cargo: '405 л' }
      },
      {
          id: 'porsche-taycan',
          name: 'Porsche Taycan Cross Turismo',
          class: 'touring',
          price: 22000,
          transmission: 'auto',
          power: '476 л.с.',
          range: '456 км',
          acceleration: '5.1 сек',
          images: ['assets/images/taycan-1.webp', 'assets/images/taycan-2.webp', 'assets/images/taycan-3.webp'],
          specs: { battery: '93.4 кВт⋅ч', speed: '220 км/ч', capacity: '5 мест', cargo: '446 л' }
      }
  ];

  function filterCars(cars, filters) {
      return cars.filter(car => {
          if (filters.class !== 'all' && car.class !== filters.class) return false;
          if (filters.transmission !== 'all' && car.transmission !== filters.transmission) return false;
          return true;
      }).sort((a, b) => {
          if (filters.priceSort === 'asc') return a.price - b.price;
          if (filters.priceSort === 'desc') return b.price - a.price;
          return 0;
      });
  }

  // Client-side initialization
  if (typeof window !== 'undefined') {
      document.addEventListener('DOMContentLoaded', () => {
          const state = {
              activeFilters: {
                  class: 'all',
                  transmission: 'all',
                  priceSort: 'default'
              }
          };

          const grid = document.getElementById('cars-grid');
          const filterButtons = document.querySelectorAll('.filter-btn');
          const priceSelect = document.getElementById('price-sort');

          function renderCatalog() {
              grid.innerHTML = '';
              const filteredCars = filterCars(carsData, state.activeFilters);
              
              if (filteredCars.length === 0) {
                  grid.innerHTML = '<div class="catalog__empty">Автомобили с выбранными параметрами не найдены.</div>';
                  return;
              }

              filteredCars.forEach(car => {
                  const card = document.createElement('div');
                  card.className = 'car-card';
                  card.dataset.id = car.id;
                  card.innerHTML = `
                      <div class="car-card__image-wrapper">
                          <div style="width:100%; height:150px; background:#D0CFCB; border-radius:4px;"></div>
                      </div>
                      <div class="car-card__meta">
                          <h3 class="car-card__name">${car.name}</h3>
                          <div class="car-card__price">${car.price.toLocaleString('ru-RU')} <span>₽ / сут.</span></div>
                      </div>
                      <div class="car-card__specs">
                          <span>${car.power}</span>
                          <span>${car.range}</span>
                          <span>${car.transmission === 'auto' ? 'АКПП' : 'МКПП'}</span>
                      </div>
                  `;
                  grid.appendChild(card);
              });
          }

          // Filter handlers
          filterButtons.forEach(btn => {
              btn.addEventListener('click', (e) => {
                  const filterType = btn.dataset.filterType;
                  const filterValue = btn.dataset.filterValue;

                  // Update active class
                  filterButtons.forEach(b => {
                      if (b.dataset.filterType === filterType) b.classList.remove('active');
                  });
                  btn.classList.add('active');

                  state.activeFilters[filterType] = filterValue;
                  renderCatalog();
              });
          });

          priceSelect.addEventListener('change', (e) => {
              state.activeFilters.priceSort = e.target.value;
              renderCatalog();
          });

          renderCatalog();
      });
  }

  // Node module exports for testing
  if (typeof module !== 'undefined') {
      module.exports = {
          carsData,
          filterCars
      };
  }
  ```

- [ ] **Step 4: Run test to verify it passes**
  Run: `node test.js`
  Expected: PASS: Catalog filter logic verified!

- [ ] **Step 5: Commit**
  Run:
  ```powershell
  git add index.html style.css script.js test.js
  git commit -m "feat: implement catalog UI grid with functional state filters"
  ```

---

### Task 4: Dynamic Grid Expansion & Gallery Slider

**Files:**
- Modify: `c:/balavstvo/sites/site 3/nordic-drive/style.css`
- Modify: `c:/balavstvo/sites/site 3/nordic-drive/script.js`
- Modify: `c:/balavstvo/sites/site 3/nordic-drive/test.js`

**Interfaces:**
- Consumes: Task 3 catalog.
- Produces: Details drawer expanding inline within the catalog grid on click, and interactive photo gallery switcher.

- [ ] **Step 1: Write the failing test**
  Add test assertions in `test.js` verifying that the expanding container template is present and functions as expected.
  ```javascript
  console.log("=== Running Task 4 Tests: Grid Expansion Template ===");
  try {
      const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');
      const css = fs.readFileSync(path.join(__dirname, 'style.css'), 'utf-8');
      
      assert.ok(css.includes('.car-details-panel'), "Details panel styling is missing");
      assert.ok(css.includes('grid-column: 1 / -1'), "Details panel does not stretch across columns");
      
      console.log("PASS: Grid expansion template verified!");
  } catch (err) {
      console.error("FAIL:", err.message);
      process.exit(1);
  }
  ```

- [ ] **Step 2: Run test to verify it fails**
  Run: `node test.js`
  Expected: FAIL with "Details panel styling is missing".

- [ ] **Step 3: Implement Grid Expansion Styles and script.js Click Listeners**
  `style.css` (Add details panel styles):
  ```css
  /* Details Panel */
  .car-details-panel {
      grid-column: 1 / -1;
      background-color: var(--bg-secondary);
      border: 1px solid var(--text-primary);
      display: none; /* Controlled dynamically */
      grid-template-columns: 1.2fr 1fr;
      gap: 3rem;
      padding: 3rem;
      margin-top: 1rem;
      margin-bottom: 2rem;
      transition: var(--transition-smooth);
      animation: expandPanel 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  @keyframes expandPanel {
      from {
          opacity: 0;
          transform: translateY(20px);
      }
      to {
          opacity: 1;
          transform: translateY(0);
      }
  }

  .car-details-panel__gallery {
      display: flex;
      flex-direction: column;
      gap: 1rem;
  }

  .car-details-panel__main-img-wrapper {
      height: 350px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--bg-primary);
      border: 1px solid var(--border-color);
  }

  .car-details-panel__main-img {
      max-width: 90%;
      max-height: 90%;
      object-fit: contain;
  }

  .car-details-panel__thumbs {
      display: flex;
      gap: 1rem;
  }

  .car-details-panel__thumb {
      width: 80px;
      height: 60px;
      background-color: var(--bg-primary);
      border: 1px solid var(--border-color);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: var(--transition-smooth);
  }

  .car-details-panel__thumb:hover,
  .car-details-panel__thumb--active {
      border-color: var(--text-primary);
  }

  .car-details-panel__info {
      display: flex;
      flex-direction: column;
  }

  .car-details-panel__title {
      font-size: 2.2rem;
      margin-bottom: 1.5rem;
  }

  .car-details-panel__specs-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
      margin-bottom: 2.5rem;
  }

  .spec-item {
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 0.8rem;
  }

  .spec-item__label {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--text-secondary);
  }

  .spec-item__value {
      font-size: 1.1rem;
      font-weight: 500;
      margin-top: 0.2rem;
  }

  .car-details-panel__cta {
      margin-top: auto;
      text-align: center;
  }

  @media (max-width: 768px) {
      .car-details-panel {
          grid-template-columns: 1fr;
          padding: 1.5rem;
          gap: 2rem;
      }
      .car-details-panel__main-img-wrapper {
          height: 220px;
      }
  }
  ```
  `script.js` (Insert click handling logic inside DomContentLoaded handler):
  ```javascript
  // In script.js inside DOMContentLoaded:
  let activeDetailsPanel = null;

  grid.addEventListener('click', (e) => {
      const card = e.target.closest('.car-card');
      if (!card) return;

      const carId = card.dataset.id;
      const car = carsData.find(c => c.id === carId);
      if (!car) return;

      // Close current panel if exists
      if (activeDetailsPanel) {
          activeDetailsPanel.remove();
          document.querySelectorAll('.car-card').forEach(c => c.classList.remove('car-card--active'));
      }

      // If clicking same card, toggle off
      if (activeDetailsPanel && activeDetailsPanel.dataset.carId === carId) {
          activeDetailsPanel = null;
          return;
      }

      card.classList.add('car-card--active');

      // Create detailed panel element
      const panel = document.createElement('div');
      panel.className = 'car-details-panel';
      panel.style.display = 'grid';
      panel.dataset.carId = carId;
      
      panel.innerHTML = `
          <div class="car-details-panel__gallery">
              <div class="car-details-panel__main-img-wrapper">
                  <div style="width:100%; height:250px; background:#EFEDE8; display:flex; align-items:center; justify-content:center;">ФОТО 1</div>
              </div>
              <div class="car-details-panel__thumbs">
                  <div class="car-details-panel__thumb car-details-panel__thumb--active" data-index="0">ФОТО 1</div>
                  <div class="car-details-panel__thumb" data-index="1">ФОТО 2</div>
                  <div class="car-details-panel__thumb" data-index="2">ФОТО 3</div>
              </div>
          </div>
          <div class="car-details-panel__info">
              <h3 class="car-details-panel__title">${car.name}</h3>
              <div class="car-details-panel__specs-grid">
                  <div class="spec-item">
                      <span class="spec-item__label">Батарея</span>
                      <span class="spec-item__value">${car.specs.battery}</span>
                  </div>
                  <div class="spec-item">
                      <span class="spec-item__label">Запас хода</span>
                      <span class="spec-item__value">${car.range}</span>
                  </div>
                  <div class="spec-item">
                      <span class="spec-item__label">Разгон 0-100</span>
                      <span class="spec-item__value">${car.acceleration}</span>
                  </div>
                  <div class="spec-item">
                      <span class="spec-item__label">Мест</span>
                      <span class="spec-item__value">${car.specs.capacity}</span>
                  </div>
                  <div class="spec-item">
                      <span class="spec-item__label">Багажник</span>
                      <span class="spec-item__value">${car.specs.cargo}</span>
                  </div>
                  <div class="spec-item">
                      <span class="spec-item__label">Мощность</span>
                      <span class="spec-item__value">${car.power}</span>
                  </div>
              </div>
              <button class="btn car-details-panel__cta-btn" id="start-booking-btn">Перейти к бронированию</button>
          </div>
      `;

      // Find the last card in the current row
      const cards = Array.from(grid.querySelectorAll('.car-card'));
      const cardIndex = cards.indexOf(card);
      
      // Calculate how many columns are currently rendering based on window width
      let columns = 3;
      if (window.innerWidth <= 768) columns = 1;
      else if (window.innerWidth <= 1024) columns = 2;

      const rowNumber = Math.floor(cardIndex / columns);
      const lastIndexInRow = Math.min((rowNumber + 1) * columns - 1, cards.length - 1);
      const insertionTarget = cards[lastIndexInRow];

      // Insert details panel directly after the last card of the current row
      insertionTarget.after(panel);
      activeDetailsPanel = panel;

      // Scroll details panel into view smoothly
      setTimeout(() => {
          panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);

      // Gallery thumb switching
      const thumbs = panel.querySelectorAll('.car-details-panel__thumb');
      const mainImgWrapper = panel.querySelector('.car-details-panel__main-img-wrapper');
      thumbs.forEach(thumb => {
          thumb.addEventListener('click', () => {
              thumbs.forEach(t => t.classList.remove('car-details-panel__thumb--active'));
              thumb.classList.add('car-details-panel__thumb--active');
              const index = thumb.dataset.index;
              mainImgWrapper.innerHTML = `<div style="width:100%; height:250px; background:#EFEDE8; display:flex; align-items:center; justify-content:center;">ФОТО ${parseInt(index) + 1}</div>`;
          });
      });
  });
  ```

- [ ] **Step 4: Run test to verify it passes**
  Run: `node test.js`
  Expected: PASS: Grid expansion template verified!

- [ ] **Step 5: Commit**
  Run:
  ```powershell
  git add style.css script.js test.js
  git commit -m "feat: implement CSS grid expansion with dynamic DOM row detection"
  ```

---

### Task 5: Custom Inline Booking Wizard & Form Validation (TDD)

**Files:**
- Modify: `c:/balavstvo/sites/site 3/nordic-drive/style.css`
- Modify: `c:/balavstvo/sites/site 3/nordic-drive/script.js`
- Modify: `c:/balavstvo/sites/site 3/nordic-drive/test.js`

**Interfaces:**
- Consumes: Task 4 expand panel.
- Produces: 3-step dynamic booking wizard, input validation, cost computations.

- [ ] **Step 1: Write the failing test**
  Add unit tests in `test.js` to assert date range validation and pricing calculator.
  ```javascript
  console.log("=== Running Task 5 Tests: Booking Logic & Validation ===");
  try {
      const app = require(path.join(__dirname, 'script.js'));
      
      // Test validateDates function
      assert.strictEqual(app.validateDates("2026-07-04", "2026-07-03"), false, "End date cannot be before start date");
      assert.strictEqual(app.validateDates("2026-07-04", "2026-07-06"), true, "Valid sequence should pass validation");

      // Test pricing calculation
      const totalCost = app.calculateCost(10000, "2026-07-01", "2026-07-05");
      assert.strictEqual(totalCost, 40000, `Calculation error: expected 40000 but got ${totalCost}`);
      
      console.log("PASS: Booking validation logic verified!");
  } catch (err) {
      console.error("FAIL:", err.message);
      process.exit(1);
  }
  ```

- [ ] **Step 2: Run test to verify it fails**
  Run: `node test.js`
  Expected: FAIL with "validateDates is not defined" or "calculateCost is not defined".

- [ ] **Step 3: Implement validation functions and Dynamic Step Wizard markup/JS**
  `script.js` (Implement logic & wizard transition):
  ```javascript
  // Pure logical functions
  function validateDates(startStr, endStr) {
      if (!startStr || !endStr) return false;
      const start = new Date(startStr);
      const end = new Date(endStr);
      return end > start;
  }

  function calculateCost(dailyRate, startStr, endStr) {
      const start = new Date(startStr);
      const end = new Date(endStr);
      const diffTime = Math.abs(end - start);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return (diffDays || 1) * dailyRate;
  }

  // Update exports at end of script.js
  if (typeof module !== 'undefined') {
      module.exports = {
          carsData,
          filterCars,
          validateDates,
          calculateCost
      };
  }
  ```
  `style.css` (Add Wizard Layout and CSS Forms):
  ```css
  /* Wizard styling */
  .wizard {
      display: flex;
      flex-direction: column;
      height: 100%;
  }

  .wizard__header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 2rem;
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 1rem;
  }

  .wizard__step-title {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--text-secondary);
  }

  .wizard__step-title--active {
      color: var(--text-primary);
      font-weight: 600;
  }

  .wizard__body {
      flex-grow: 1;
  }

  .wizard__form {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
  }

  .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
  }

  .form-group label {
      font-size: 0.8rem;
      font-weight: 500;
      color: var(--text-secondary);
  }

  .form-input {
      padding: 0.8rem;
      background: var(--bg-primary);
      border: 1px solid var(--border-color);
      font-family: inherit;
      font-size: 0.9rem;
      outline: none;
      transition: var(--transition-smooth);
  }

  .form-input:focus {
      border-color: var(--text-primary);
  }

  .form-error {
      font-size: 0.8rem;
      color: var(--error-color);
      display: none;
  }

  .wizard__footer {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      gap: 1rem;
  }

  .wizard__summary {
      background: var(--bg-primary);
      padding: 1.5rem;
      border: 1px solid var(--border-color);
      margin-bottom: 1.5rem;
  }

  .wizard__summary-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.8rem;
      font-size: 0.9rem;
  }

  .wizard__summary-row--total {
      border-top: 1px solid var(--border-color);
      padding-top: 0.8rem;
      font-weight: 600;
      font-size: 1.1rem;
  }

  .wizard__success {
      text-align: center;
      padding: 2rem;
  }

  .wizard__success-icon {
      font-size: 3rem;
      color: var(--accent-color);
      margin-bottom: 1.5rem;
  }
  ```
  `script.js` (Dynamic Booking Wizard injection inside event delegation):
  Add listener triggers for `#start-booking-btn` inside the click handler to replace the `.car-details-panel__info` panel with the Wizard:
  ```javascript
  // Inside grid.addEventListener('click'):
  // Handle start-booking-btn click:
  panel.addEventListener('click', (ev) => {
      if (ev.target.id === 'start-booking-btn') {
          const infoPanel = panel.querySelector('.car-details-panel__info');
          
          let wizardState = {
              step: 1,
              start: '',
              end: '',
              name: '',
              email: '',
              phone: '',
              license: ''
          };

          function renderWizard() {
              if (wizardState.step === 1) {
                  infoPanel.innerHTML = `
                      <div class="wizard">
                          <div class="wizard__header">
                              <span class="wizard__step-title wizard__step-title--active">1. Даты</span>
                              <span class="wizard__step-title">2. Инфо</span>
                              <span class="wizard__step-title">3. Оплата</span>
                          </div>
                          <div class="wizard__body">
                              <div class="wizard__form">
                                  <div class="form-group">
                                      <label for="booking-start">Начало аренды</label>
                                      <input type="date" class="form-input" id="booking-start" value="${wizardState.start}">
                                  </div>
                                  <div class="form-group">
                                      <label for="booking-end">Конец аренды</label>
                                      <input type="date" class="form-input" id="booking-end" value="${wizardState.end}">
                                  </div>
                                  <div class="form-error" id="date-error">Дата окончания должна быть позже даты начала.</div>
                              </div>
                          </div>
                          <div class="wizard__footer">
                              <button class="btn btn--secondary" id="wizard-cancel" style="background:#EFEDE8; color:#18181A;">Отмена</button>
                              <button class="btn" id="wizard-next-1">Продолжить</button>
                          </div>
                      </div>
                  `;
              } else if (wizardState.step === 2) {
                  infoPanel.innerHTML = `
                      <div class="wizard">
                          <div class="wizard__header">
                              <span class="wizard__step-title">1. Даты</span>
                              <span class="wizard__step-title wizard__step-title--active">2. Инфо</span>
                              <span class="wizard__step-title">3. Оплата</span>
                          </div>
                          <div class="wizard__body">
                              <div class="wizard__form">
                                  <div class="form-group">
                                      <label for="client-name">ФИО</label>
                                      <input type="text" class="form-input" id="client-name" value="${wizardState.name}" placeholder="Иванов Иван Иванович">
                                  </div>
                                  <div class="form-group">
                                      <label for="client-email">Email</label>
                                      <input type="email" class="form-input" id="client-email" value="${wizardState.email}" placeholder="example@mail.ru">
                                  </div>
                                  <div class="form-group">
                                      <label for="client-phone">Телефон</label>
                                      <input type="tel" class="form-input" id="client-phone" value="${wizardState.phone}" placeholder="+7 (999) 999-99-99">
                                  </div>
                                  <div class="form-error" id="info-error">Пожалуйста, заполните все поля корректно.</div>
                              </div>
                          </div>
                          <div class="wizard__footer">
                              <button class="btn" id="wizard-prev-2" style="background:#EFEDE8; color:#18181A;">Назад</button>
                              <button class="btn" id="wizard-next-2">Продолжить</button>
                          </div>
                      </div>
                  `;
              } else if (wizardState.step === 3) {
                  const total = calculateCost(car.price, wizardState.start, wizardState.end);
                  infoPanel.innerHTML = `
                      <div class="wizard">
                          <div class="wizard__header">
                              <span class="wizard__step-title">1. Даты</span>
                              <span class="wizard__step-title">2. Инфо</span>
                              <span class="wizard__step-title wizard__step-title--active">3. Оплата</span>
                          </div>
                          <div class="wizard__body">
                              <div class="wizard__summary">
                                  <div class="wizard__summary-row">
                                      <span>Автомобиль</span>
                                      <span>${car.name}</span>
                                  </div>
                                  <div class="wizard__summary-row">
                                      <span>Тариф</span>
                                      <span>${car.price.toLocaleString('ru-RU')} ₽/сут.</span>
                                  </div>
                                  <div class="wizard__summary-row">
                                      <span>Даты аренды</span>
                                      <span>${wizardState.start} — ${wizardState.end}</span>
                                  </div>
                                  <div class="wizard__summary-row wizard__summary-row--total">
                                      <span>Итого</span>
                                      <span>${total.toLocaleString('ru-RU')} ₽</span>
                                  </div>
                              </div>
                          </div>
                          <div class="wizard__footer">
                              <button class="btn" id="wizard-prev-3" style="background:#EFEDE8; color:#18181A;">Назад</button>
                              <button class="btn" id="wizard-confirm">Подтвердить</button>
                          </div>
                      </div>
                  `;
              } else if (wizardState.step === 4) {
                  infoPanel.innerHTML = `
                      <div class="wizard__success">
                          <div class="wizard__success-icon">✓</div>
                          <h3>Бронирование подтверждено!</h3>
                          <p style="margin-top: 1rem; color: var(--text-secondary); font-size: 0.9rem;">
                              Спасибо за выбор Nordic Drive. Мы отправили подтверждение на email ${wizardState.email}.
                          </p>
                      </div>
                  `;
              }
          }

          // Attach local events within wizard container dynamically
          infoPanel.addEventListener('change', (e) => {
              if (e.target.id === 'booking-start') wizardState.start = e.target.value;
              if (e.target.id === 'booking-end') wizardState.end = e.target.value;
              if (e.target.id === 'client-name') wizardState.name = e.target.value;
              if (e.target.id === 'client-email') wizardState.email = e.target.value;
              if (e.target.id === 'client-phone') wizardState.phone = e.target.value;
          });

          infoPanel.addEventListener('click', (e) => {
              if (e.target.id === 'wizard-next-1') {
                  if (validateDates(wizardState.start, wizardState.end)) {
                      wizardState.step = 2;
                      renderWizard();
                  } else {
                      infoPanel.querySelector('#date-error').style.display = 'block';
                  }
              }
              if (e.target.id === 'wizard-prev-2') {
                  wizardState.step = 1;
                  renderWizard();
              }
              if (e.target.id === 'wizard-next-2') {
                  if (wizardState.name && wizardState.email.includes('@') && wizardState.phone) {
                      wizardState.step = 3;
                      renderWizard();
                  } else {
                      infoPanel.querySelector('#info-error').style.display = 'block';
                  }
              }
              if (e.target.id === 'wizard-prev-3') {
                  wizardState.step = 2;
                  renderWizard();
              }
              if (e.target.id === 'wizard-confirm') {
                  wizardState.step = 4;
                  renderWizard();
              }
              if (e.target.id === 'wizard-cancel') {
                  // Reload grid to close drawer panel
                  document.querySelector('.car-card--active').click();
              }
          });

          renderWizard();
      }
  });
  ```

- [ ] **Step 4: Run test to verify it passes**
  Run: `node test.js`
  Expected: PASS: Booking validation logic verified!

- [ ] **Step 5: Commit**
  Run:
  ```powershell
  git add style.css script.js test.js
  git commit -m "feat: implement 3-step inline booking wizard and range validation"
  ```

---

### Task 6: Visual Assets, Responsive Web Design & README

**Files:**
- Modify: `c:/balavstvo/sites/site 3/nordic-drive/index.html`
- Modify: `c:/balavstvo/sites/site 3/nordic-drive/style.css`
- Modify: `c:/balavstvo/sites/site 3/nordic-drive/script.js`
- Create: `c:/balavstvo/sites/site 3/nordic-drive/README.md`

**Interfaces:**
- Consumes: Task 1-5 features.
- Produces: Beautiful styled icons (SVGs), premium car image mockups, fully responsive layouts down to 320px mobile screens, and a developer-level README.md.

- [ ] **Step 1: Write the failing test**
  Add final check in `test.js` to assert the presence of README.md.
  ```javascript
  console.log("=== Running Task 6 Tests: Assets & Documentation ===");
  try {
      assert.ok(fs.existsSync(path.join(__dirname, 'README.md')), "README.md is missing");
      console.log("PASS: Project complete and ready for deployment!");
  } catch (err) {
      console.error("FAIL:", err.message);
      process.exit(1);
  }
  ```

- [ ] **Step 2: Run test to verify it fails**
  Run: `node test.js`
  Expected: FAIL with "README.md is missing".

- [ ] **Step 3: Create SVG Icons, mock images, add responsive touch-ups and write README.md**
  Make sure UI displays high-quality SVGs instead of blank shapes, and styles adapt well.
  Write a high-quality `README.md` detailing:
  - Concept & Style (Nordic Minimalist)
  - Features (Custom TDD setup, Expandable grid system, custom date-range wizard)
  - Coding Practices (Pure ES6, CSS variables, BEM)
  - Instructions for local development & running the test suite.

- [ ] **Step 4: Run test to verify it passes**
  Run: `node test.js`
  Expected: PASS: Project complete and ready for deployment!

- [ ] **Step 5: Commit and final push**
  Commit the files and push them to the portfolio repository.
