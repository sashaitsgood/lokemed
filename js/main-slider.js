
            const images = [
                'img/main-page-slider-item1.png', 
                'img/main-page-slider-item2.png',
                'img/main-page-slider-item3.png',
                'img/main-page-slider-item4.png'
            ];
        
            const sliderItemsContainer = document.querySelector('.slider_items');
        
            images.forEach((imageSrc, index) => {
                const img = document.createElement('img');
                img.src = imageSrc;
                img.alt = `Slide ${index + 1}`;
                img.className = `slide ${index === 0 ? 'active' : ''}`;
                sliderItemsContainer.appendChild(img);
            });
        
            const sliderData = [
                {
                    title: "Купуйте лапароскопічне обладнання",
                    subtitle: "зі знижкою до -50%",
                    description: "Ви можете придбати лапароскопічне обладнання від найкращого виробника на нашому сайті за вигідними цінами",
                    button: "Переглянути",
                    image: "img/main-page-slider-item1.png"
                },
                {
                    title: "Інноваційні медичні технології",
                    subtitle: "Локемед",
                    description: "Ми пропонуємо широкий вибір сучасного медичного обладнання для лапароскопії",
                    button: "Переглянути",
                    image: "img/main-page-slider-item2.png"
                },
                {
                    title: "Високоякісне обладнання для вашої клініки",
                    subtitle: "Локемед",
                    description: "Обирайте тільки найкраще для своєї клініки та пацієнтів",
                    button: "Переглянути",
                    image: "img/main-page-slider-item3.png"
                },
                {
                    title: "Найкращі умови для закупівлі",
                    subtitle: "Локемед",
                    description: "Забезпечте вашу клініку найкращим обладнанням за вигідними цінами",
                    button: "Переглянути",
                    image: "img/main-page-slider-item4.png"
                }
            ];
        
            let slideIndex = 0;
        
            function showSlide(n) {
                const slides = document.querySelectorAll('.slide');
                slides.forEach((slide, index) => {
                    if (index === n) {
                        slide.classList.add('active');
                    } else {
                        slide.classList.remove('active');
                    }
                });
        
                const titleElement = document.getElementById('main-title');
                const subtitleElement = document.getElementById('main-subtitle');
                const descriptionElement = document.getElementById('main-description');
                const buttonElement = document.getElementById('main-btn');
        
                titleElement.style.opacity = 0;
                subtitleElement.style.opacity = 0;
                descriptionElement.style.opacity = 0;
                buttonElement.style.opacity = 0;
        
                setTimeout(() => {
                    titleElement.innerText = sliderData[n].title;
                    subtitleElement.innerText = sliderData[n].subtitle;
                    descriptionElement.innerText = sliderData[n].description;
                    buttonElement.innerText = sliderData[n].button;
        
                    titleElement.style.opacity = 1;
                    subtitleElement.style.opacity = 1;
                    descriptionElement.style.opacity = 1;
                    buttonElement.style.opacity = 1;
                }, 1000); 
            }
        
            const prev = document.querySelector('.slider_arrow_down');
            const next = document.querySelector('.slider_arrow_up');
        
            prev.addEventListener('click', () => {
                slideIndex = (slideIndex <= 0) ? sliderData.length - 1 : slideIndex - 1;
                showSlide(slideIndex);
            });
        
            next.addEventListener('click', () => {
                slideIndex = (slideIndex >= sliderData.length - 1) ? 0 : slideIndex + 1; 
                showSlide(slideIndex);
            });
        
            showSlide(slideIndex); 
