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
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
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
                        <div style="width:100%; height:150px; background:#E8E6E0; border-radius:4px; display:flex; align-items:center; justify-content:center; color:#5A5A5C; font-family:'Cormorant Garamond', serif; font-size:1.1rem; font-style:italic;">${car.name}</div>
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

        // Grid details panel logic
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
                        <div class="car-details-panel__main-img" style="width:100%; height:250px; background:#E8E6E0; display:flex; align-items:center; justify-content:center; color:#5A5A5C; font-family:'Cormorant Garamond', serif; font-size:1.5rem; font-style:italic;">${car.name} — Ракурс 1</div>
                    </div>
                    <div class="car-details-panel__thumbs">
                        <div class="car-details-panel__thumb car-details-panel__thumb--active" data-index="0">Ракурс 1</div>
                        <div class="car-details-panel__thumb" data-index="1">Ракурс 2</div>
                        <div class="car-details-panel__thumb" data-index="2">Ракурс 3</div>
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

            // Find insertion index (last card in the current row)
            const cards = Array.from(grid.querySelectorAll('.car-card'));
            const cardIndex = cards.indexOf(card);
            
            let columns = 3;
            if (window.innerWidth <= 768) columns = 1;
            else if (window.innerWidth <= 1024) columns = 2;

            const rowNumber = Math.floor(cardIndex / columns);
            const lastIndexInRow = Math.min((rowNumber + 1) * columns - 1, cards.length - 1);
            const insertionTarget = cards[lastIndexInRow];

            insertionTarget.after(panel);
            activeDetailsPanel = panel;

            setTimeout(() => {
                panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 100);

            // Gallery logic
            const thumbs = panel.querySelectorAll('.car-details-panel__thumb');
            const mainImgWrapper = panel.querySelector('.car-details-panel__main-img-wrapper');
            thumbs.forEach(thumb => {
                thumb.addEventListener('click', () => {
                    thumbs.forEach(t => t.classList.remove('car-details-panel__thumb--active'));
                    thumb.classList.add('car-details-panel__thumb--active');
                    const index = thumb.dataset.index;
                    mainImgWrapper.innerHTML = `<div class="car-details-panel__main-img" style="width:100%; height:250px; background:#E8E6E0; display:flex; align-items:center; justify-content:center; color:#5A5A5C; font-family:'Cormorant Garamond', serif; font-size:1.5rem; font-style:italic;">${car.name} — Ракурс ${parseInt(index) + 1}</div>`;
                });
            });

            // Wizard initialization
            panel.addEventListener('click', (ev) => {
                if (ev.target.id === 'start-booking-btn') {
                    const infoPanel = panel.querySelector('.car-details-panel__info');
                    
                    let wizardState = {
                        step: 1,
                        start: '',
                        end: '',
                        name: '',
                        email: '',
                        phone: ''
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

                    // Event delegation for wizard controls
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
                            // Close details panel
                            const activeCard = document.querySelector('.car-card--active');
                            if (activeCard) activeCard.click();
                        }
                    });

                    renderWizard();
                }
            });
        });

        renderCatalog();
    });
}

// Node module exports for testing
if (typeof module !== 'undefined') {
    module.exports = {
        carsData,
        filterCars,
        validateDates,
        calculateCost
    };
}
