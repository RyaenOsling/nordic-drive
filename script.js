function validateDates(startStr, endStr) {
    if (!startStr || !endStr) return false;
    const start = new Date(startStr);
    const end = new Date(endStr);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return end > start && start >= today;
}

function getCarSvg(classType, color = '#2D4239') {
    if (classType === 'suv') {
        return `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:100%;">
            <path d="M15,55 L25,50 C25,50 40,25 70,22 C100,19 130,22 145,28 C155,32 170,42 178,50 L188,53 C192,55 195,60 195,65 L192,72 L172,72 C172,64 165,58 157,58 C149,58 142,64 142,72 L72,72 C72,64 65,58 57,58 C49,58 42,64 42,72 L10,72 L8,65 C8,60 11,56 15,55 Z" stroke="${color}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="57" cy="72" r="10" fill="#F6F5F2" stroke="${color}" stroke-width="1.8"/>
            <circle cx="57" cy="72" r="3.5" fill="${color}"/>
            <circle cx="157" cy="72" r="10" fill="#F6F5F2" stroke="${color}" stroke-width="1.8"/>
            <circle cx="157" cy="72" r="3.5" fill="${color}"/>
            <path d="M70,26 L110,26 L110,45 L65,45 Z" fill="none" stroke="${color}" stroke-width="1.2" stroke-linejoin="round"/>
            <path d="M116,26 L140,30 L135,45 L116,45 Z" fill="none" stroke="${color}" stroke-width="1.2" stroke-linejoin="round"/>
        </svg>`;
    } else if (classType === 'sedan') {
        return `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:100%;">
            <path d="M15,58 L30,52 C30,52 48,28 78,25 C108,22 135,28 150,38 C160,45 172,52 180,56 L188,58 C192,59 195,62 195,66 L192,72 L172,72 C172,64 165,58 157,58 C149,58 142,64 142,72 L72,72 C72,64 65,58 57,58 C49,58 42,64 42,72 L10,72 L8,66 C8,62 11,59 15,58 Z" stroke="${color}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="57" cy="72" r="10" fill="#F6F5F2" stroke="${color}" stroke-width="1.8"/>
            <circle cx="57" cy="72" r="3.5" fill="${color}"/>
            <circle cx="157" cy="72" r="10" fill="#F6F5F2" stroke="${color}" stroke-width="1.8"/>
            <circle cx="157" cy="72" r="3.5" fill="${color}"/>
            <path d="M75,28 L110,28 L110,48 L68,48 Z" fill="none" stroke="${color}" stroke-width="1.2" stroke-linejoin="round"/>
            <path d="M116,28 L142,32 L138,48 L116,48 Z" fill="none" stroke="${color}" stroke-width="1.2" stroke-linejoin="round"/>
        </svg>`;
    } else {
        return `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:100%;">
            <path d="M15,58 L30,52 C30,52 48,27 75,26 C102,25 145,25 155,27 C165,29 174,38 180,48 L188,53 C192,55 195,59 195,64 L192,72 L172,72 C172,64 165,58 157,58 C149,58 142,64 142,72 L72,72 C72,64 65,58 57,58 C49,58 42,64 42,72 L10,72 L8,64 C8,59 11,55 15,58 Z" stroke="${color}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="57" cy="72" r="10" fill="#F6F5F2" stroke="${color}" stroke-width="1.8"/>
            <circle cx="57" cy="72" r="3.5" fill="${color}"/>
            <circle cx="157" cy="72" r="10" fill="#F6F5F2" stroke="${color}" stroke-width="1.8"/>
            <circle cx="157" cy="72" r="3.5" fill="${color}"/>
            <path d="M72,28 L110,28 L110,48 L65,48 Z" fill="none" stroke="${color}" stroke-width="1.2" stroke-linejoin="round"/>
            <path d="M116,28 L148,28 L142,48 L116,48 Z" fill="none" stroke="${color}" stroke-width="1.2" stroke-linejoin="round"/>
        </svg>`;
    }
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
        images: [
            'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=800&q=80'
        ],
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
        images: [
            'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80'
        ],
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
        images: [
            'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80'
        ],
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
        images: [
            'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80'
        ],
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
                        <img src="${car.images[0]}" alt="${car.name}" class="car-card__image" loading="lazy">
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
                        <img src="${car.images[0]}" alt="${car.name}" class="car-details-panel__main-img" id="main-detail-img" style="width:100%; height:100%; object-fit:cover;">
                    </div>
                    <div class="car-details-panel__thumbs">
                        <div class="car-details-panel__thumb car-details-panel__thumb--active" data-index="0">
                            <img src="${car.images[0]}" alt="Ракурс 1" style="width:100%; height:100%; object-fit:cover;">
                        </div>
                        <div class="car-details-panel__thumb" data-index="1">
                            <img src="${car.images[1]}" alt="Ракурс 2" style="width:100%; height:100%; object-fit:cover;">
                        </div>
                        <div class="car-details-panel__thumb" data-index="2">
                            <img src="${car.images[2]}" alt="Ракурс 3" style="width:100%; height:100%; object-fit:cover;">
                        </div>
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
            const mainImg = panel.querySelector('#main-detail-img');
            thumbs.forEach(thumb => {
                thumb.addEventListener('click', () => {
                    thumbs.forEach(t => t.classList.remove('car-details-panel__thumb--active'));
                    thumb.classList.add('car-details-panel__thumb--active');
                    const index = parseInt(thumb.dataset.index);
                    mainImg.src = car.images[index];
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
                            wizardState.start = infoPanel.querySelector('#booking-start').value;
                            wizardState.end = infoPanel.querySelector('#booking-end').value;
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
                            wizardState.name = infoPanel.querySelector('#client-name').value;
                            wizardState.email = infoPanel.querySelector('#client-email').value;
                            wizardState.phone = infoPanel.querySelector('#client-phone').value;
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
