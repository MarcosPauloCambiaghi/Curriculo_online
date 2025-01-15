document.addEventListener("DOMContentLoaded", function () {
    console.log("Site carregado com sucesso!");

    // Função para buscar dados de clima
    const apiKey = '5691d1bc5e3ef060fc325952cc069388'; // Substitua por sua chave de API do OpenWeatherMap
    const city = 'Sao Jose do Rio Preto'; // Cidade para a qual você deseja obter o clima
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)},BR&units=metric&lang=pt_br&appid=${apiKey}`;

    function fetchWeather() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    displayWeather(data);
                } else {
                    displayError(data.message);
                }
            })
            .catch(error => {
                console.error('Erro ao buscar dados de clima:', error);
                displayError('Erro ao buscar dados de clima. Tente novamente mais tarde.');
            });
    }

    function displayWeather(data) {
        const weatherInfo = document.getElementById('weather-info');
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        weatherInfo.innerHTML = `
            <img src="${iconUrl}" alt="${description}" class="icon">
            <p>Temperatura: ${temperature}°C</p>
            <p>Descrição: ${capitalizeFirstLetter(description)}</p>
        `;
    }

    function displayError(message) {
        const weatherInfo = document.getElementById('weather-info');
        weatherInfo.innerHTML = `<p>${message}</p>`;
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    fetchWeather();

    // Função para adicionar efeitos nos ícones de curso
    const courseIcons = document.querySelectorAll('.course-icon');
    courseIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.2)'; // Aumenta o tamanho do ícone
            this.style.transition = 'transform 0.3s ease-in-out';
        });

        icon.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)'; // Volta ao tamanho normal
        });
    });

    // Adiciona o efeito de onda nos botões
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;

            let ripples = document.createElement('span');
            ripples.style.left = x + 'px';
            ripples.style.top = y + 'px';
            this.appendChild(ripples);

            setTimeout(() => {
                ripples.remove();
            }, 1000);
        });
    });

    // Função para scroll suave até a seção
    window.scrollToSection = function (sectionId) {
        document.getElementById(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    };

    // Função para exibir informações de contato
    window.displayContactInfo = function () {
        alert("Contato: (17) 98188-2328 / marcoscambiaghi@hotmail.com");
    };
});
// Adiciona o efeito de onda no botão flutuante do WhatsApp
document.addEventListener('DOMContentLoaded', function () {
    const whatsappButton = document.querySelector('.whatsapp-button');
    whatsappButton.addEventListener('click', function (e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);

        setTimeout(() => {
            ripples.remove();
        }, 1000);
    });
});
