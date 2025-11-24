document.addEventListener('DOMContentLoaded', function () {
    // 1. Authentication Check
    const isLoggedIn = sessionStorage.getItem('loggedIn');
    if (isLoggedIn !== 'true') {
        // If not logged in, redirect to the login page
        window.location.href = 'login.html';
        return; // Stop executing the script
    }

    // 2. Display Username
    const username = sessionStorage.getItem('username');
    if (username) {
        document.getElementById('username-display').textContent = `Bem-vindo, ${username}!`;
    }

    // 3. Logout Functionality
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            sessionStorage.removeItem('loggedIn');
            sessionStorage.removeItem('username');
            window.location.href = 'index.html';
        });
    }

    // 4. Chart Creation (Chart.js)
    // Price Optimization Chart
    const priceCtx = document.getElementById('price-optimization-chart').getContext('2d');
    new Chart(priceCtx, {
        type: 'line',
        data: {
            labels: Array.from({ length: 30 }, (_, i) => `Dia ${i + 1}`),
            datasets: [{
                label: 'Variação de Preço',
                data: Array.from({ length: 30 }, () => 250 + Math.random() * 25 - 10), // Simulating price variation around $250
                borderColor: '#3498db',
                backgroundColor: 'rgba(52, 152, 219, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });

    // Sustainability Comparison Chart
    const sustCtx = document.getElementById('sustainability-chart').getContext('2d');
    new Chart(sustCtx, {
        type: 'bar',
        data: {
            labels: ['Energia', 'Waste', 'Water', 'Community'],
            datasets: [
                {
                    label: 'Casa no Souto',
                    data: [80, 65, 75, 90], // Example data
                    backgroundColor: '#2ecc71',
                },
                {
                    label: 'Média Concorrência',
                    data: [70, 75, 60, 80], // Example data
                    backgroundColor: '#bdc3c7',
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });

    // 5. AI Assistant Logic
    const aiSendBtn = document.getElementById('ai-send');
    const aiInput = document.getElementById('ai-input');
    const aiMessages = document.getElementById('ai-messages');

    const handleAiChat = () => {
        const userMessage = aiInput.value.trim();
        if (userMessage === '') return;

        // Display user message
        const userMessageDiv = document.createElement('div');
        userMessageDiv.className = 'ai-message user';
        userMessageDiv.textContent = userMessage;
        aiMessages.appendChild(userMessageDiv);

        aiInput.value = '';
        aiMessages.scrollTop = aiMessages.scrollHeight;

        // Bot response
        setTimeout(() => {
            const botMessageDiv = document.createElement('div');
            botMessageDiv.className = 'ai-message bot';
            let botResponse = "Desculpe, não entendi. Posso ajudar com comparações de taxa de ocupação, desempenho trimestral ou análise de concorrentes.";

            if (userMessage.toLowerCase().includes("ocupação")) {
                botResponse = "A nossa taxa de ocupação é de 85%, que está 10% acima da média dos concorrentes selecionados.";
            } else if (userMessage.toLowerCase().includes("desempenho")) {
                botResponse = "No último trimestre, nosso RevPAR cresceu 7%, superando a média do mercado que foi de 4%.";
            } else if (userMessage.toLowerCase().includes("concorrentes")) {
                botResponse = "Natura Glamping tem uma forte presença online, mas nossa pontuação de sustentabilidade é 15% maior.";
            }
            
            botMessageDiv.textContent = botResponse;
            aiMessages.appendChild(botMessageDiv);
            aiMessages.scrollTop = aiMessages.scrollHeight;
        }, 500);
    };

    aiSendBtn.addEventListener('click', handleAiChat);
    aiInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleAiChat();
        }
    });
});
