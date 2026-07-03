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
