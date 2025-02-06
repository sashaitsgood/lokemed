// Modal
!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);

document.addEventListener('DOMContentLoaded', function() {

    var modalButtons = document.querySelectorAll('.js-open-modal'),
        overlay      = document.querySelector('.modal-overlay'),
        closeButtons = document.querySelectorAll('.js-close-modal');

    modalButtons.forEach(function(item){

    item.addEventListener('click', function(e) {

        e.preventDefault();

        var modalId = this.getAttribute('data-modal'),
            modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
            form = modalElem.querySelector('form');
            
        modalElem.classList.add('active');
        overlay.classList.add('active');

        if (form) {
            form.reset();
        }
    }); 
}); 

    closeButtons.forEach(function(item){

    item.addEventListener('click', function(e) {
        var parentModal = this.closest('.modal');

        parentModal.classList.remove('active');
        overlay.classList.remove('active');
    });
}); 

    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {

            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.modal-overlay').classList.remove('active');
        };
    }, false);

    overlay.addEventListener('click', function() {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });
}); 


// Burger
    document.addEventListener("DOMContentLoaded", function () {
    const burgerBtn = document.getElementById("burger-btn");
    const burgerCloseIcon = burgerBtn.querySelector(".burger-btn-close");
    const burgerOpenIcon = burgerBtn.querySelector(".burger-btn-open");

    burgerBtn.addEventListener("click", function () {
        // Переключение класса на header
        document.querySelector("header").classList.toggle("open");

        // Переключение видимости иконок
        if (burgerCloseIcon.style.display === "none") {
            burgerCloseIcon.style.display = "block";
            burgerOpenIcon.style.display = "none";
        } else {
            burgerCloseIcon.style.display = "none";
            burgerOpenIcon.style.display = "block";
        }
    });
});

// Search
document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById("search_form");
    const searchBtnOpen = document.querySelector(".search_btn_open");
    const searchBtnClose = document.querySelector(".search_btn_close");


    searchBtnOpen.addEventListener("click", toggleSearchForm);
    searchBtnClose.addEventListener("click", toggleSearchForm);


    window.addEventListener('keydown', (e) => {
        if (e.key === "Escape" && searchForm.classList.contains("open")) {
            closeSearchForm();
        }
    });


    document.getElementById("search").addEventListener('click', event => {
        if (!event.target.closest("#search_form") && event.target !== document.getElementById("search_btn")) {
            closeSearchForm();
        }
    });


    function toggleSearchForm() {
        searchForm.classList.toggle("open");


        if (searchForm.classList.contains("open")) {
            searchBtnOpen.style.display = "none"; 
            searchBtnClose.style.display = "block"; 
        } else {
            searchBtnOpen.style.display = "block"; 
            searchBtnClose.style.display = "none"; 
        }
    }


    function closeSearchForm() {
        searchForm.classList.remove("open");
        searchBtnOpen.style.display = "block";
        searchBtnClose.style.display = "none";
    }
});


// Filters tab
document.addEventListener('DOMContentLoaded', () => {
    const productElements = document.querySelectorAll('.catalog .itc-slider-item');

    productElements.forEach(product => {
        if (product.querySelector('.new')) {
            product.classList.add('new');
        }
        if (product.querySelector('.sales')) {
            product.classList.add('sales');
        }
        if (product.querySelector('.popular')) {
            product.classList.add('popular');
        }
    });

    const buttons = document.querySelectorAll('.catalog_filters .button');
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            filterProducts(event.target.dataset.filter);
        });
    });
});

function filterProducts(filter) {
    const products = document.querySelectorAll('.catalog .itc-slider-item');
    const buttons = document.querySelectorAll('.catalog_filters .button');

    buttons.forEach(button => button.classList.remove('active'));

    const activeButton = Array.from(buttons).find(button => button.dataset.filter === filter);
    if (activeButton) activeButton.classList.add('active');

    products.forEach(product => {
        if (filter === 'all' || product.classList.contains(filter)) {
            product.style.visibility = 'visible';
            product.style.opacity = '1';
            product.style.position = 'static'; 
        } else {
            product.style.visibility = 'hidden';
            product.style.opacity = '0';
            product.style.position = 'absolute';
        }
    });

    // Уничтожаем текущий слайдер
    if (typeof ItcSlider !== 'undefined' && ItcSlider.destroy) {
        ItcSlider.destroy();
    }

    // Пересоздаем слайдер
    setTimeout(() => {
        ItcSlider = new ItcSlider('.itc-slider', {/* настройки */});
    }, 100);
}


// 		Margin h3
document.addEventListener("DOMContentLoaded", function () {
    // Находим все заголовки h3 в .catalog_products
    const productTitles = document.querySelectorAll('.catalog_products h3');
    
    productTitles.forEach(function (title) {
        // Определяем высоту строки заголовка
        const lineHeight = parseFloat(window.getComputedStyle(title).lineHeight);
        
        // Высчитываем количество строк (округляем до целого)
        const lines = Math.round(title.offsetHeight / lineHeight);
        
        // Если одна строка - добавляем класс single-line, если две - two-lines
        if (lines === 1) {
            title.classList.add('single-line');
        } else if (lines === 2) {
            title.classList.add('two-lines');
        }
    });
});
