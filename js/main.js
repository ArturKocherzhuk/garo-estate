const propertiesData = [
    { id: 1, title: "СУЧАСНА ВІЛЛА", price: 300000, area: 120, beds: 5, baths: 2, garages: 1, image: "assets/img/content/villa-1.webp", city: "miami", status: "sale", date: "2026-01-01" },
    { id: 2, title: "ЕКСКЛЮЗИВНА ВІЛЛА", price: 350000, area: 150, beds: 4, baths: 3, garages: 2, image: "assets/img/content/villa-2.webp", city: "coral gables", status: "sale", date: "2026-02-15" },
    { id: 3, title: "РОЗКІШНА ВІЛЛА", price: 280000, area: 110, beds: 3, baths: 2, garages: 1, image: "assets/img/content/villa-3.webp", city: "miami", status: "sale", date: "2026-03-10" },
    { id: 4, title: "СУПЕР ВІЛЛА", price: 420000, area: 200, beds: 6, baths: 4, garages: 2, image: "assets/img/content/villa-1.webp", city: "coral gables", status: "sale", date: "2026-01-20" },
    { id: 5, title: "КЛАСИЧНА ВІЛЛА", price: 310000, area: 130, beds: 4, baths: 2, garages: 1, image: "assets/img/content/villa-2.webp", city: "miami", status: "rent", date: "2026-04-05" },
    { id: 6, title: "ЕКО-БУДИНОК", price: 290000, area: 115, beds: 3, baths: 2, garages: 1, image: "assets/img/content/villa-3.webp", city: "coral gables", status: "sale", date: "2026-05-12" },
    { id: 7, title: "СІМЕЙНА ВІЛЛА", price: 500000, area: 250, beds: 5, baths: 4, garages: 3, image: "assets/img/content/villa-1.webp", city: "miami", status: "sale", date: "2026-06-01" },
    { id: 8, title: "ЕЛІТНИЙ КОТЕДЖ", price: 330000, area: 140, beds: 4, baths: 2, garages: 1, image: "assets/img/content/villa-2.webp", city: "coral gables", status: "rent", date: "2026-02-28" },
    { id: 9, title: "ПРИВАТНИЙ БУДИНОК", price: 275000, area: 105, beds: 3, baths: 1, garages: 1, image: "assets/img/content/villa-3.webp", city: "miami", status: "sale", date: "2026-07-15" },
    { id: 10, title: "ВІЛЛА З БАСЕЙНОМ", price: 380000, area: 160, beds: 4, baths: 3, garages: 2, image: "assets/img/content/villa-1.webp", city: "miami", status: "sale", date: "2026-08-05" },
    { id: 11, title: "БУДИНОК БІЛЯ МОРЯ", price: 250000, area: 90, beds: 2, baths: 1, garages: 1, image: "assets/img/content/villa-2.webp", city: "coral gables", status: "rent", date: "2026-09-12" },
    { id: 12, title: "ПРЕМІУМ ВІЛЛА", price: 600000, area: 300, beds: 6, baths: 5, garages: 3, image: "assets/img/content/villa-3.webp", city: "miami", status: "sale", date: "2026-10-20" },
    { id: 13, title: "ЗАТИШНА ВІЛЛА", price: 320000, area: 135, beds: 4, baths: 2, garages: 2, image: "assets/img/content/villa-1.webp", city: "coral gables", status: "sale", date: "2026-11-01" },
    { id: 14, title: "ВЕЛИКИЙ КОТЕДЖ", price: 450000, area: 210, beds: 5, baths: 4, garages: 2, image: "assets/img/content/villa-2.webp", city: "miami", status: "rent", date: "2026-12-15" },
    { id: 15, title: "КОМФОРТНИЙ ДІМ", price: 295000, area: 118, beds: 3, baths: 2, garages: 1, image: "assets/img/content/villa-3.webp", city: "coral gables", status: "sale", date: "2026-01-10" }
];

document.addEventListener("DOMContentLoaded", () => {
    
    // Автоматичне визначення активного пункту меню
    const navLinks = document.querySelectorAll('.nav-link');
    let currentPath = window.location.pathname.split('/').pop();
    
    if (currentPath === '') {
        currentPath = 'index.html'; 
    }

    navLinks.forEach(link => {
        link.classList.remove('active'); 
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active'); 
        }
    });

    // Burger Menu
    const burgerToggle = document.getElementById("burgerToggle");
    const mainNav = document.getElementById("mainNav");

    if (burgerToggle && mainNav) {
        burgerToggle.addEventListener("click", () => {
            burgerToggle.classList.toggle("active");
            mainNav.classList.toggle("active");
        });
    }

    // Modal Window (Login)
    const openModalBtn = document.getElementById("openModalBtn");
    const modalOverlay = document.getElementById("modalOverlay");
    const closeModalBtn = document.getElementById("closeModalBtn");

    if (openModalBtn && modalOverlay) {
        openModalBtn.addEventListener("click", () => {
            modalOverlay.classList.add("open");
        });

        closeModalBtn.addEventListener("click", () => {
            modalOverlay.classList.remove("open");
        });

        modalOverlay.addEventListener("click", (event) => {
            if (event.target === modalOverlay) {
                modalOverlay.classList.remove("open");
            }
        });
    }

    // Логіка для форми контактів
    const contactForm = document.getElementById("contactForm");
    const successModalOverlay = document.getElementById("successModalOverlay");
    const closeSuccessModalBtn = document.getElementById("closeSuccessModalBtn");
    const successOkBtn = document.getElementById("successOkBtn");

    if (contactForm && successModalOverlay) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault(); 
            successModalOverlay.classList.add("open");
            contactForm.reset();
        });

        const closeSuccessModal = () => {
            successModalOverlay.classList.remove("open");
        };

        if (closeSuccessModalBtn) closeSuccessModalBtn.addEventListener("click", closeSuccessModal);
        if (successOkBtn) successOkBtn.addEventListener("click", closeSuccessModal);
        
        successModalOverlay.addEventListener("click", (event) => {
            if (event.target === successModalOverlay) {
                closeSuccessModal();
            }
        });
    }

    // Advanced Search Toggle
    const btnAdvancedToggle = document.getElementById("btnAdvancedToggle");
    const advancedSearchPanel = document.getElementById("advancedSearchPanel");
    
    if (btnAdvancedToggle && advancedSearchPanel) {
        btnAdvancedToggle.addEventListener("click", () => {
            advancedSearchPanel.classList.toggle("open");
        });
    }

    // Swiper Slider
    if (typeof Swiper !== 'undefined') {
        const swiperElement = document.querySelector('.reviews-slider');
        if (swiperElement) {
            new Swiper('.reviews-slider', {
                slidesPerView: 3, 
                slidesPerGroup: 3,
                spaceBetween: 30,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    320: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 20 },
                    768: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 30 },
                    1024: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 30 }
                }
            });
        }
    }

    // Counters
    const counters = document.querySelectorAll('.counter-number');
    const speed = 200;

    const startCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 15);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };

    const countersSection = document.querySelector('.counters-section');
    if (countersSection) {
        let animated = false;
        window.addEventListener('scroll', () => {
            const sectionPos = countersSection.getBoundingClientRect().top;
            const screenPos = window.innerHeight;

            if (sectionPos < screenPos && !animated) {
                startCounters();
                animated = true;
            }
        });
    }

    // Properties Catalog Logic
    const propertiesCatalog = document.getElementById("propertiesCatalog");
    const filterForm = document.getElementById("filterForm");
    const paginationContainer = document.getElementById("paginationContainer");
    const itemsPerPageInput = document.getElementById("itemsPerPageInput");
    
    let currentProperties = [...propertiesData];
    let sortDateAsc = true;
    let sortPriceAsc = true;
    let currentPage = 1;
    let itemsPerPage = 12;

    // ФУНКЦІЯ ФІЛЬТРАЦІЇ (працює і при завантаженні, і при кліку на "Шукати")
    function applyFilters() {
        const keyword = document.getElementById("searchKeyword") ? document.getElementById("searchKeyword").value.toLowerCase() : "";
        const city = document.getElementById("searchCity") ? document.getElementById("searchCity").value.toLowerCase() : "";
        const status = document.getElementById("searchStatus") ? document.getElementById("searchStatus").value.toLowerCase() : "";
        
        const minPriceInput = document.getElementById("minPrice");
        const maxPriceInput = document.getElementById("maxPrice");
        const minPrice = minPriceInput ? parseFloat(minPriceInput.value) || 0 : 0;
        let maxPrice = maxPriceInput ? parseFloat(maxPriceInput.value) || Infinity : Infinity;
        if (maxPriceInput && maxPrice >= parseFloat(maxPriceInput.max)) maxPrice = Infinity;
        
        const minAreaInput = document.getElementById("minArea");
        const maxAreaInput = document.getElementById("maxArea");
        const minArea = minAreaInput ? parseFloat(minAreaInput.value) || 0 : 0;
        let maxArea = maxAreaInput ? parseFloat(maxAreaInput.value) || Infinity : Infinity;
        if (maxAreaInput && maxArea >= parseFloat(maxAreaInput.max)) maxArea = Infinity;
        
        const minBaths = document.getElementById("minBaths") ? parseFloat(document.getElementById("minBaths").value) || 0 : 0;
        const minBeds = document.getElementById("minBeds") ? parseFloat(document.getElementById("minBeds").value) || 0 : 0;

        currentProperties = propertiesData.filter(item => {
            const matchesKeyword = item.title.toLowerCase().includes(keyword);
            const matchesCity = city === "" || item.city.toLowerCase() === city;
            const matchesStatus = status === "" || item.status.toLowerCase() === status;
            const matchesPrice = item.price >= minPrice && item.price <= maxPrice;
            const matchesArea = item.area >= minArea && item.area <= maxArea;
            const matchesBaths = item.baths >= minBaths;
            const matchesBeds = item.beds >= minBeds;

            return matchesKeyword && matchesCity && matchesStatus && matchesPrice && matchesArea && matchesBaths && matchesBeds;
        });

        currentPage = 1;
        updateCatalog();
    }

    // Читання параметрів з URL (перенесення вибору з інших сторінок)
    const urlParams = new URLSearchParams(window.location.search);
    let hasUrlParams = Array.from(urlParams).length > 0;

    if (hasUrlParams) {
        if (urlParams.has('keyword') && document.getElementById("searchKeyword")) document.getElementById("searchKeyword").value = urlParams.get('keyword');
        if (urlParams.has('city') && document.getElementById("searchCity")) document.getElementById("searchCity").value = urlParams.get('city');
        if (urlParams.has('status') && document.getElementById("searchStatus")) document.getElementById("searchStatus").value = urlParams.get('status');
        
        if (urlParams.has('minPrice') && document.getElementById("minPrice")) document.getElementById("minPrice").value = urlParams.get('minPrice');
        if (urlParams.has('maxPrice') && document.getElementById("maxPrice")) document.getElementById("maxPrice").value = urlParams.get('maxPrice');
        if (urlParams.has('minArea') && document.getElementById("minArea")) document.getElementById("minArea").value = urlParams.get('minArea');
        if (urlParams.has('maxArea') && document.getElementById("maxArea")) document.getElementById("maxArea").value = urlParams.get('maxArea');
        if (urlParams.has('minBaths') && document.getElementById("minBaths")) document.getElementById("minBaths").value = urlParams.get('minBaths');
        if (urlParams.has('maxBaths') && document.getElementById("maxBaths")) document.getElementById("maxBaths").value = urlParams.get('maxBaths');
        if (urlParams.has('minBeds') && document.getElementById("minBeds")) document.getElementById("minBeds").value = urlParams.get('minBeds');
        if (urlParams.has('maxBeds') && document.getElementById("maxBeds")) document.getElementById("maxBeds").value = urlParams.get('maxBeds');

        // Відновлюємо стан чекбоксів
        if (urlParams.has('features')) {
            const features = urlParams.getAll('features');
            document.querySelectorAll('input[name="features"]').forEach(cb => {
                cb.checked = features.includes(cb.value);
            });
        }
    }

    function updateCatalog() {
        if (!propertiesCatalog) return;

        const totalItems = currentProperties.length;
        const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;

        if (currentPage > totalPages) currentPage = totalPages;
        if (currentPage < 1) currentPage = 1;

        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedItems = currentProperties.slice(start, end);

        propertiesCatalog.innerHTML = "";

        if (paginatedItems.length === 0) {
            propertiesCatalog.innerHTML = `<p class="no-results" style="padding:40px 0;">На жаль, за вашим запитом нічого не знайдено.</p>`;
            if (paginationContainer) paginationContainer.innerHTML = "";
            return;
        }

        paginatedItems.forEach(item => {
            const card = document.createElement("article");
            card.classList.add("property-card");

            card.innerHTML = `
                <div class="property-card__img">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="property-card__content">
                    <h3><a href="property-single.html?id=${item.id}">${item.title}</a></h3>
                    <div class="card-divider"></div>
                    <div class="property-card__meta">
                        <span class="area"><strong>Площа : </strong>${item.area} м²</span>
                        <span class="price">$ ${item.price.toLocaleString()}</span>
                    </div>
                    <div class="property-card__icons">
                        <span>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="#a5a5a5"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/></svg>
                            (${item.beds})<span class="pipe">|</span>
                        </span>
                        <span>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="#a5a5a5"><path d="M20 14V11c0-1.1-.9-2-2-2h-4V6h2V4h-4v5h-2c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v3h2v2h2v-2h8v2h2v-2h2v-3c0-1.1-.9-2-2-2z"/></svg>
                            (${item.baths})<span class="pipe">|</span>
                        </span>
                        <span>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="#a5a5a5"><path d="M12 3L4 9v2l8-6 8 6V9l-8-6z"/><path d="M16 12H8v6h8v-6zm-2 3h-4v-1h4v1z"/></svg>
                            (${item.garages})
                        </span>
                    </div>
                </div>
            `;
            propertiesCatalog.appendChild(card);
        });

        renderPagination(totalPages);
    }

    function renderPagination(totalPages) {
        if (!paginationContainer) return;
        paginationContainer.innerHTML = "";

        if (totalPages <= 1) return;

        const prevLi = document.createElement("li");
        prevLi.innerHTML = `<a href="#" class="prev ${currentPage === 1 ? 'disabled' : ''}">Попер.</a>`;
        prevLi.addEventListener("click", (e) => {
            e.preventDefault();
            if (currentPage > 1) {
                currentPage--;
                updateCatalog();
            }
        });
        paginationContainer.appendChild(prevLi);

        for (let i = 1; i <= totalPages; i++) {
            const li = document.createElement("li");
            li.innerHTML = `<a href="#" class="${i === currentPage ? 'active' : ''}">${i}</a>`;
            li.addEventListener("click", (e) => {
                e.preventDefault();
                currentPage = i;
                updateCatalog();
            });
            paginationContainer.appendChild(li);
        }

        const nextLi = document.createElement("li");
        nextLi.innerHTML = `<a href="#" class="next ${currentPage === totalPages ? 'disabled' : ''}">Наст.</a>`;
        nextLi.addEventListener("click", (e) => {
            e.preventDefault();
            if (currentPage < totalPages) {
                currentPage++;
                updateCatalog();
            }
        });
        paginationContainer.appendChild(nextLi);
    }

    if (itemsPerPageInput) {
        itemsPerPageInput.addEventListener("change", (e) => {
            let val = parseInt(e.target.value);
            if (isNaN(val) || val < 1) val = 1;
            itemsPerPage = val;
            currentPage = 1;
            updateCatalog();
        });
    }

    if (filterForm) {
        filterForm.addEventListener("submit", (e) => {
            // Тільки якщо ми на сторінці каталогу, блокуємо перезавантаження і фільтруємо JS-ом
            if (propertiesCatalog && window.location.pathname.includes('properties.html')) {
                e.preventDefault();
            } else {
                return; // Якщо ми на іншій сторінці (напр. index або property-single), форма спрацює стандартно і перекине на каталог
            }
            
            applyFilters();

            // Очищаємо параметри URL без перезавантаження сторінки (щоб лінк був красивим)
            const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
            window.history.pushState({path:newUrl},'',newUrl);
        });
    }

    // Якщо ми на сторінці каталогу, застосовуємо фільтри з URL або просто рендеримо все
    if (propertiesCatalog) {
        if (hasUrlParams) {
            applyFilters();
        } else {
            updateCatalog();
        }
    }

    const sortDateBtn = document.getElementById("sortDateBtn");
    const sortPriceBtn = document.getElementById("sortPriceBtn");

    if (sortDateBtn && sortPriceBtn) {
        sortDateBtn.addEventListener("click", () => {
            sortDateAsc = !sortDateAsc;
            currentProperties.sort((a, b) => {
                return sortDateAsc ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date);
            });
            
            sortDateBtn.classList.remove("outline");
            sortPriceBtn.classList.add("outline");
            
            if (sortDateAsc) {
                sortDateBtn.classList.add("asc");
            } else {
                sortDateBtn.classList.remove("asc");
            }
            
            currentPage = 1;
            updateCatalog();
        });

        sortPriceBtn.addEventListener("click", () => {
            sortPriceAsc = !sortPriceAsc;
            currentProperties.sort((a, b) => {
                return sortPriceAsc ? a.price - b.price : b.price - a.price;
            });
            
            sortPriceBtn.classList.remove("outline");
            sortDateBtn.classList.add("outline");
            
            if (sortPriceAsc) {
                sortPriceBtn.classList.add("asc");
            } else {
                sortPriceBtn.classList.remove("asc");
            }
            
            currentPage = 1;
            updateCatalog();
        });
    }

    const viewListBtn = document.getElementById("viewListBtn");
    const viewGridBtn = document.getElementById("viewGridBtn");

    if (viewListBtn && viewGridBtn && propertiesCatalog) {
        viewListBtn.addEventListener("click", () => {
            viewListBtn.classList.add("active");
            viewGridBtn.classList.remove("active");
            propertiesCatalog.classList.add("properties-grid--list");
            propertiesCatalog.classList.remove("properties-grid--3cols");
        });

        viewGridBtn.addEventListener("click", () => {
            viewGridBtn.classList.add("active");
            viewListBtn.classList.remove("active");
            propertiesCatalog.classList.add("properties-grid--3cols");
            propertiesCatalog.classList.remove("properties-grid--list");
        });
    }

    // Dynamic Single Property Content
    const singlePropertyContainer = document.getElementById("singlePropertyDetails");
    
    if (singlePropertyContainer && typeof propertiesData !== 'undefined') {
        const urlParams = new URLSearchParams(window.location.search);
        const propertyId = parseInt(urlParams.get('id'));

        if (propertyId) {
            const currentProperty = propertiesData.find(item => item.id === propertyId);

            if (currentProperty) {
                document.querySelector('.page-banner__title').innerText = currentProperty.title;
                
                const galleryImages = [
                    currentProperty.image,
                    "assets/img/content/villa-2.webp",
                    "assets/img/content/villa-3.webp",
                    "assets/img/content/villa-1.webp"
                ];

                const translatedCity = currentProperty.city === 'miami' ? 'МАЯМІ' : 'КОРАЛ ГЕЙБЛЗ';
                const translatedStatus = currentProperty.status === 'sale' ? 'Продаж' : 'Оренда';
                
                singlePropertyContainer.innerHTML = `
                    <div class="prop-gallery">
                        <div class="prop-gallery__main">
                            <img id="mainGalleryImage" src="${galleryImages[0]}" alt="${currentProperty.title}">
                            <div class="prop-gallery__actions">
                                <button id="favoriteBtn"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></button>
                                <button><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg></button>
                            </div>
                            <button id="galleryPrevBtn" class="prop-gallery__arrow prev"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg></button>
                            <button id="galleryNextBtn" class="prop-gallery__arrow next"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg></button>
                        </div>
                        <div class="prop-gallery__thumbs" id="galleryThumbsContainer">
                            <img src="${galleryImages[0]}" class="active" alt="Thumb">
                            <img src="${galleryImages[1]}" alt="Thumb">
                            <img src="${galleryImages[2]}" alt="Thumb">
                            <img src="${galleryImages[3]}" alt="Thumb">
                        </div>
                    </div>

                    <div class="prop-header">
                        <h2 class="prop-title">${currentProperty.title} У МІСТІ ${translatedCity}</h2>
                        <div class="prop-price">$${currentProperty.price.toLocaleString()}</div>
                    </div>

                    <div class="prop-meta">
                        <div class="prop-meta__item">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--color-primary)"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.41l9 9c.36.36.86.59 1.41.59s1.05-.23 1.41-.59l7-7c.36-.36.59-.86.59-1.41s-.23-1.05-.59-1.41zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/></svg>
                            <span>Статус</span>
                            <strong>${translatedStatus}</strong>
                        </div>
                        <div class="prop-meta__item">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M3 9h18M9 21V9"></path></svg>
                            <span>Площа</span>
                            <strong>${currentProperty.area} м²</strong>
                        </div>
                        <div class="prop-meta__item">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--color-primary)"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/></svg>
                            <span>Спальні</span>
                            <strong>${currentProperty.beds}</strong>
                        </div>
                        <div class="prop-meta__item">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--color-primary)"><path d="M20 14V11c0-1.1-.9-2-2-2h-4V6h2V4h-4v5h-2c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v3h2v2h2v-2h8v2h2v-2h2v-3c0-1.1-.9-2-2-2z"/></svg>
                            <span>Ванні кімнати</span>
                            <strong>${currentProperty.baths}</strong>
                        </div>
                        <div class="prop-meta__item">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--color-primary)"><path d="M12 3L4 9v2l8-6 8 6V9l-8-6z"/><path d="M16 12H8v6h8v-6zm-2 3h-4v-1h4v1z"/></svg>
                            <span>Гаражі</span>
                            <strong>${currentProperty.garages}</strong>
                        </div>
                    </div>

                    <div class="prop-section">
                        <h3 class="prop-section__title">Опис</h3>
                        <p class="prop-description">Це чудовий об'єкт нерухомості з продуманим плануванням та високоякісним ремонтом. Будинок розташований у тихому районі з розвиненою інфраструктурою. Великі вікна забезпечують багато природного світла, а простора ділянка ідеально підійде для сімейного відпочинку на свіжому повітрі.</p>
                    </div>

                    <div class="prop-section">
                        <h3 class="prop-section__title">Додаткові деталі</h3>
                        <div class="prop-details-table">
                            <div class="detail-row">
                                <div class="detail-label">НАБЕРЕЖНА</div>
                                <div class="detail-value">Так</div>
                            </div>
                            <div class="detail-row">
                                <div class="detail-label">РІК ПОБУДОВИ</div>
                                <div class="detail-value">2021</div>
                            </div>
                            <div class="detail-row">
                                <div class="detail-label">ПАРКОВКА</div>
                                <div class="detail-value">2 або більше місць, Накрита парковка</div>
                            </div>
                            <div class="detail-row">
                                <div class="detail-label">ІНТЕРНЕТ</div>
                                <div class="detail-value">Оптоволокно</div>
                            </div>
                            <div class="detail-row">
                                <div class="detail-label">ВИД</div>
                                <div class="detail-value">Прямий вид на океан / парк</div>
                            </div>
                            <div class="detail-row">
                                <div class="detail-label">ЛАНДШАФТ</div>
                                <div class="detail-value">Газон, декоративні дерева</div>
                            </div>
                        </div>
                    </div>

                    <div class="prop-section">
                        <h3 class="prop-section__title">Особливості</h3>
                        <div class="prop-features">
                            БАСЕЙН <span class="slash">/</span> 2 ПОВЕРХИ <span class="slash">/</span> СИСТЕМА КОНДИЦІОНУВАННЯ <span class="slash">/</span> ПРАЛЬНЯ <span class="slash">/</span> ЗОНА БАРБЕКЮ <span class="slash">/</span> СИСТЕМА БЕЗПЕКИ
                        </div>
                    </div>

                    <div class="prop-section">
                        <h3 class="prop-section__title">Відео об'єкта</h3>
                        <div class="prop-video" id="propVideoContainer">
                            <video src="assets/video/property.mp4" controls style="display:none; width: 100%; height: 400px; object-fit: cover; outline: none;"></video>
                            <img src="assets/img/content/villa-3.webp" alt="Video Cover">
                            <button class="play-btn">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                            </button>
                        </div>
                    </div>
                `;

                const favoriteBtn = document.getElementById("favoriteBtn") || document.querySelector('.prop-gallery__actions button:first-child');
                if (favoriteBtn && !favoriteBtn.dataset.favInit) {
                    favoriteBtn.dataset.favInit = "true";
                    favoriteBtn.addEventListener("click", () => {
                        favoriteBtn.classList.toggle("active");
                    });
                }

            } else {
                singlePropertyContainer.innerHTML = `<p class="no-results" style="padding: 100px 0;">Об'єкт не знайдено. <a href="properties.html" style="color:var(--color-primary);">Повернутися до каталогу</a></p>`;
            }
        }
    }

    function initGallery() {
        const galleries = document.querySelectorAll('.prop-gallery');
        galleries.forEach(gallery => {
            const mainImg = gallery.querySelector('.prop-gallery__main img');
            const prevBtn = gallery.querySelector('.prop-gallery__arrow.prev');
            const nextBtn = gallery.querySelector('.prop-gallery__arrow.next');
            const thumbs = Array.from(gallery.querySelectorAll('.prop-gallery__thumbs img'));
            
            if (!mainImg || thumbs.length === 0) return;

            let currentIndex = thumbs.findIndex(t => t.classList.contains('active'));
            if (currentIndex === -1) currentIndex = 0;

            const updateGallery = (index) => {
                mainImg.src = thumbs[index].src;
                thumbs.forEach(t => t.classList.remove('active'));
                thumbs[index].classList.add('active');
            };

            if (prevBtn) {
                if (!prevBtn.dataset.init) {
                    prevBtn.dataset.init = "true";
                    prevBtn.addEventListener('click', () => {
                        currentIndex = (currentIndex === 0) ? thumbs.length - 1 : currentIndex - 1;
                        updateGallery(currentIndex);
                    });
                }
            }

            if (nextBtn) {
                if (!nextBtn.dataset.init) {
                    nextBtn.dataset.init = "true";
                    nextBtn.addEventListener('click', () => {
                        currentIndex = (currentIndex === thumbs.length - 1) ? 0 : currentIndex + 1;
                        updateGallery(currentIndex);
                    });
                }
            }

            thumbs.forEach((thumb, index) => {
                if (!thumb.dataset.init) {
                    thumb.dataset.init = "true";
                    thumb.addEventListener('click', () => {
                        currentIndex = index;
                        updateGallery(currentIndex);
                    });
                }
            });
        });
    }

    function initVideo() {
        const videoContainers = document.querySelectorAll('.prop-video');
        videoContainers.forEach(container => {
            const video = container.querySelector('video');
            const cover = container.querySelector('img');
            const playBtn = container.querySelector('.play-btn');
            
            if (video && cover && playBtn && !playBtn.dataset.videoInit) {
                playBtn.dataset.videoInit = "true";
                playBtn.addEventListener('click', () => {
                    cover.style.display = 'none';
                    playBtn.style.display = 'none';
                    video.style.display = 'block';
                    video.play();
                });
            }
        });
    }
    
    function initFavoriteBtn() {
        const favoriteBtn = document.getElementById("favoriteBtn") || document.querySelector('.prop-gallery__actions button:first-child');
        if (favoriteBtn && !favoriteBtn.dataset.favInit) {
            favoriteBtn.dataset.favInit = "true";
            favoriteBtn.addEventListener("click", () => {
                favoriteBtn.classList.toggle("active");
            });
        }
    }

    initGallery();
    initVideo(); 
    initFavoriteBtn(); 

    const dualSliders = document.querySelectorAll('.dual-slider');
    
    function initSliders() {
        dualSliders.forEach(slider => {
            const minInput = slider.querySelector('.min-val');
            const maxInput = slider.querySelector('.max-val');
            const track = slider.querySelector('.slider-track');
            const labels = slider.nextElementSibling;
            
            if (!minInput || !maxInput || !track || !labels) return;

            const minLabel = labels.querySelector('.min-label');
            const maxLabel = labels.querySelector('.max-label');
            
            const minVal = parseInt(slider.getAttribute('data-min'));
            const maxVal = parseInt(slider.getAttribute('data-max'));
            
            const updateSlider = () => {
                let min = parseInt(minInput.value);
                let max = parseInt(maxInput.value);
                
                if (min > max) {
                    let temp = min;
                    min = max;
                    max = temp;
                    minInput.value = min;
                    maxInput.value = max;
                }
                
                const percentMin = ((min - minVal) / (maxVal - minVal)) * 100;
                const percentMax = ((max - minVal) / (maxVal - minVal)) * 100;
                
                track.style.left = percentMin + '%';
                track.style.width = (percentMax - percentMin) + '%';
                
                const suffix = slider.parentElement.querySelector('label').innerText.includes('$') || slider.parentElement.querySelector('label').innerText.includes('цін') ? '$' : 
                                (slider.parentElement.querySelector('label').innerText.includes('m2') || slider.parentElement.querySelector('label').innerText.includes('Площа') ? 'м' : '');
                
                if (minLabel) minLabel.innerText = min + suffix;
                if (maxLabel) maxLabel.innerText = max + suffix;
            };
            
            minInput.addEventListener('input', updateSlider);
            maxInput.addEventListener('input', updateSlider);
            
            updateSlider();
        });
    }

    initSliders();
});