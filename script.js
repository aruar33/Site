
document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll('.lang-btn');
    const translatableElements = document.querySelectorAll('[data-translate]');

    let currentLang = 'pt';

    const translations = {
        pt: {
            // Navbar
            'nav_home': 'Home',
            'nav_about': 'Sobre Nós',
            'nav_accommodation': 'Alojamento',
            'nav_reservations': 'Reservas',
            'nav_events': 'Eventos',
            'nav_packages': 'Pacotes',
            'nav_blog': 'Blog',
            'nav_contact': 'Contacto',

            // Hero Section
            'hero_title': 'Bem-vindo ao Casa no Souto',
            'hero_subtitle': 'Descubra a harmonia perfeita entre natureza, cultura e sustentabilidade',
            'hero_cta': 'Reserve Já a Sua Estadia',

            // Diferenciais Section
            'diferenciais_title': 'Porque Escolher o Casa no Souto',
            'diferenciais_subtitle': 'Uma experiência única no coração da natureza portuguesa',
            'diferenciais_sustainability_title': 'Sustentabilidade',
            'diferenciais_sustainability_text': 'Construção ecológica com materiais naturais e energias renováveis',
            'diferenciais_nature_title': 'Natureza Envolvente',
            'diferenciais_nature_text': 'Rodeado por paisagens deslumbrantes e trilhos para caminhadas',
            'diferenciais_culture_title': 'Cultura Local',
            'diferenciais_culture_text': 'Experiências autênticas com tradições e gastronomia regional',
            'diferenciais_tranquility_title': 'Tranquilidade',
            'diferenciais_tranquility_text': 'O refúgio perfeito para relaxar e reconectar-se',

            // Sobre Nós Section
            'about_title': 'Sobre o Casa no Souto',
            'about_subtitle': 'A nossa história e valores',
            'about_p1': 'O Casa no Souto nasceu do sonho de criar um espaço onde a natureza e a cultura local se encontram em harmonia. Localizado em Souto da Casa, Fundão, oferecemos uma experiência de turismo rural autêntica e sustentável.',
            'about_p2': 'Os nossos alojamentos foram cuidadosamente desenhados para minimizar o impacto ambiental, utilizando materiais naturais e técnicas de construção ecológica. Cada módulo é uma celebração da arquitetura tradicional portuguesa, adaptada ao conforto moderno.',
            'about_p3': 'Acreditamos que o turismo pode ser uma força positiva para a preservação da natureza e valorização das comunidades locais. Por isso, trabalhamos em estreita colaboração com produtores e artesãos da região.',

            // Unidades Section
            'unidades_title': 'Os Nossos Alojamentos',
            'unidades_subtitle': 'Escolha o espaço perfeito para a sua estadia',
            'unidades_family_module_title': 'Módulo Família',
            'unidades_family_module_text': 'Espaço amplo e confortável para toda a família desfrutar',
            'unidades_amenities': 'Comodidades:',
            'unidades_book_button': 'Reservar',
            'unidades_couple_module_title': 'Módulo Casal',
            'unidades_couple_module_text': 'Refúgio romântico com vista privilegiada para a natureza',
            'unidades_hiker_module_title': 'Módulo Caminhante',
            'unidades_hiker_module_text': 'Acolhimento simples e funcional para aventureiros',

            // Reservas Section
            'reservas_title': 'Reserve a Sua Estadia',
            'reservas_subtitle': 'Garanta já a sua experiência no Casa no Souto',
            'reservas_checkin': 'Data de Entrada',
            'reservas_checkout': 'Data de Saída',
            'reservas_guests': 'Número de Hóspedes',
            'reservas_accommodation_type': 'Tipo de Alojamento',
            'reservas_family_module': 'Módulo Família',
            'reservas_couple_module': 'Módulo Casal',
            'reservas_hiker_module': 'Módulo Caminhante',
            'reservas_full_name': 'Nome Completo',
            'reservas_email': 'Email',
            'reservas_phone': 'Telefone',
            'reservas_message': 'Mensagem (opcional)',
            'reservas_submit_button': 'Confirmar Reserva',

            // Eventos Section
            'eventos_title': 'Próximos Eventos',
            'eventos_subtitle': 'Descubra as atividades e experiências que temos para si',
            'eventos_event1_title': 'Workshop de Culinária Regional',
            'eventos_event1_text': 'Aprenda a preparar pratos tradicionais da Beira Baixa com chefs locais.',
            'eventos_event2_title': 'Caminhada Guiada pela Serra da Gardunha',
            'eventos_event2_text': 'Explore a flora e fauna local com um guia experiente.',
            'eventos_event3_title': 'Noite de Observação de Estrelas',
            'eventos_event3_text': 'Desfrute do céu noturno límpido do Fundão com telescópios e um astrónomo.',

            // Pacotes Section
            'pacotes_title': 'Pacotes Especiais',
            'pacotes_subtitle': 'Aproveite as nossas ofertas exclusivas para uma estadia inesquecível',
            'pacotes_package1_title': 'Escapada Romântica',
            'pacotes_package1_text': 'Para casais que procuram um refúgio tranquilo.',
            'pacotes_package1_item1': '2 Noites em Módulo Casal',
            'pacotes_package1_item2': 'Jantar Romântico',
            'pacotes_package1_item3': 'Passeio a Cavalo',
            'pacotes_see_details_button': 'Ver Detalhes',
            'pacotes_package2_title': 'Aventura em Família',
            'pacotes_package2_text': 'Diversão garantida para todas as idades.',
            'pacotes_package2_item1': '3 Noites em Módulo Família',
            'pacotes_package2_item2': 'Visita a Quinta Pedagógica',
            'pacotes_package2_item3': 'Piquenique na Natureza',
            'pacotes_package3_title': 'Retiro de Bem-Estar',
            'pacotes_package3_text': 'Relaxe e revitalize-se em plena natureza.',
            'pacotes_package3_item1': '2 Noites em Módulo Casal',
            'pacotes_package3_item2': 'Sessão de Yoga',
            'pacotes_package3_item3': 'Massagem Relaxante',

            // Blog Section
            'blog_title': 'Últimas do Blog',
            'blog_subtitle': 'Notícias, dicas e histórias do Casa no Souto',
            'blog_post1_title': 'A Importância da Sustentabilidade no Turismo',
            'blog_post1_meta': 'Por João Silva | 10 de Julho, 2024',
            'blog_post1_text': 'Descubra como o Casa no Souto integra práticas sustentáveis no seu dia a dia.',
            'blog_post2_title': 'Sabores da Beira Baixa: Uma Viagem Gastronómica',
            'blog_post2_meta': 'Por Maria Costa | 05 de Julho, 2024',
            'blog_post2_text': 'Conheça os pratos típicos e os produtos regionais que não pode perder.',
            'blog_post3_title': 'Fundão: Mais do que Cerejas, um Tesouro Escondido',
            'blog_post3_meta': 'Por Ana Pereira | 28 de Junho, 2024',
            'blog_post3_text': 'Explore as maravilhas culturais e naturais da região do Fundão.',

            // Contacto Section
            'contact_title': 'Contacte-nos',
            'contact_subtitle': 'Estamos aqui para ajudar e responder às suas questões',
            'contact_address': 'Rua Principal, 123, Souto da Casa, 6230-000 Fundão',
            'contact_map': 'Mapa da localização aqui',

            // Footer
            'footer_about_title': 'Casa no Souto',
            'footer_about_text': 'Turismo rural sustentável no coração do Fundão. Conecte-se com a natureza e a cultura local.',
            'footer_quick_links_title': 'Links Rápidos',
            'footer_contact_title': 'Contacto',
            'footer_newsletter_title': 'Newsletter',
            'footer_newsletter_text': 'Receba as últimas novidades e ofertas especiais.',
            'footer_newsletter_button': 'Subscrever',
            'footer_copyright': '© 2024 Casa no Souto. Todos os direitos reservados.',

            // Chatbot
            'chatbot_title': 'Chatbot',
            'chatbot_welcome_message': 'Olá! Como posso ajudar?',
            'chatbot_typing': 'Casa Souto está a escrever...',
            'chatbot_error': 'Desculpe, houve um erro. Tente novamente.',
        },
        en: {
            // Navbar
            'nav_home': 'Home',
            'nav_about': 'About Us',
            'nav_accommodation': 'Accommodation',
            'nav_reservations': 'Reservations',
            'nav_events': 'Events',
            'nav_packages': 'Packages',
            'nav_blog': 'Blog',
            'nav_contact': 'Contact',

            // Hero Section
            'hero_title': 'Welcome to Casa no Souto',
            'hero_subtitle': 'Discover the perfect harmony between nature, culture, and sustainability',
            'hero_cta': 'Book Your Stay Now',

            // Diferenciais Section
            'diferenciais_title': 'Why Choose Casa no Souto',
            'diferenciais_subtitle': 'A unique experience in the heart of Portuguese nature',
            'diferenciais_sustainability_title': 'Sustainability',
            'diferenciais_sustainability_text': 'Ecological construction with natural materials and renewable energies',
            'diferenciais_nature_title': 'Surrounding Nature',
            'diferenciais_nature_text': 'Surrounded by stunning landscapes and hiking trails',
            'diferenciais_culture_title': 'Local Culture',
            'diferenciais_culture_text': 'Authentic experiences with regional traditions and gastronomy',
            'diferenciais_tranquility_title': 'Tranquility',
            'diferenciais_tranquility_text': 'The perfect refuge to relax and reconnect',

            // Sobre Nós Section
            'about_title': 'About Casa no Souto',
            'about_subtitle': 'Our history and values',
            'about_p1': 'Casa no Souto was born from the dream of creating a space where nature and local culture meet in harmony. Located in Souto da Casa, Fundão, we offer an authentic and sustainable rural tourism experience.',
            'about_p2': 'Our accommodations have been carefully designed to minimize environmental impact, using natural materials and ecological construction techniques. Each module is a celebration of traditional Portuguese architecture, adapted to modern comfort.',
            'about_p3': 'We believe that tourism can be a positive force for the preservation of nature and the appreciation of local communities. Therefore, we work in close collaboration with local producers and artisans.',

            // Unidades Section
            'unidades_title': 'Our Accommodations',
            'unidades_subtitle': 'Choose the perfect space for your stay',
            'unidades_family_module_title': 'Family Module',
            'unidades_family_module_text': 'Spacious and comfortable space for the whole family to enjoy',
            'unidades_amenities': 'Amenities:',
            'unidades_book_button': 'Book',
            'unidades_couple_module_title': 'Couple Module',
            'unidades_couple_module_text': 'Romantic getaway with a privileged view of nature',
            'unidades_hiker_module_title': 'Hiker Module',
            'unidades_hiker_module_text': 'Simple and functional accommodation for adventurers',

            // Reservas Section
            'reservas_title': 'Book Your Stay',
            'reservas_subtitle': 'Guarantee your experience at Casa no Souto now',
            'reservas_checkin': 'Check-in Date',
            'reservas_checkout': 'Check-out Date',
            'reservas_guests': 'Number of Guests',
            'reservas_accommodation_type': 'Accommodation Type',
            'reservas_family_module': 'Family Module',
            'reservas_couple_module': 'Couple Module',
            'reservas_hiker_module': 'Hiker Module',
            'reservas_full_name': 'Full Name',
            'reservas_email': 'Email',
            'reservas_phone': 'Phone',
            'reservas_message': 'Message (optional)',
            'reservas_submit_button': 'Confirm Reservation',

            // Eventos Section
            'eventos_title': 'Upcoming Events',
            'eventos_subtitle': 'Discover the activities and experiences we have for you',
            'eventos_event1_title': 'Regional Cuisine Workshop',
            'eventos_event1_text': 'Learn to prepare traditional dishes from Beira Baixa with local chefs.',
            'eventos_event2_title': 'Guided Hike through Serra da Gardunha',
            'eventos_event2_text': 'Explore the local flora and fauna with an experienced guide.',
            'eventos_event3_title': 'Stargazing Night',
            'eventos_event3_text': 'Enjoy the clear night sky of Fundão with telescopes and an astronomer.',

            // Pacotes Section
            'pacotes_title': 'Special Packages',
            'pacotes_subtitle': 'Take advantage of our exclusive offers for an unforgettable stay',
            'pacotes_package1_title': 'Romantic Getaway',
            'pacotes_package1_text': 'For couples looking for a quiet retreat.',
            'pacotes_package1_item1': '2 Nights in Couple Module',
            'pacotes_package1_item2': 'Romantic Dinner',
            'pacotes_package1_item3': 'Horseback Riding',
            'pacotes_see_details_button': 'See Details',
            'pacotes_package2_title': 'Family Adventure',
            'pacotes_package2_text': 'Guaranteed fun for all ages.',
            'pacotes_package2_item1': '3 Nights in Family Module',
            'pacotes_package2_item2': 'Visit to the Pedagogical Farm',
            'pacotes_package2_item3': 'Picnic in Nature',
            'pacotes_package3_title': 'Wellness Retreat',
            'pacotes_package3_text': 'Relax and revitalize yourself in the midst of nature.',
            'pacotes_package3_item1': '2 Nights in Couple Module',
            'pacotes_package3_item2': 'Yoga Session',
            'pacotes_package3_item3': 'Relaxing Massage',

            // Blog Section
            'blog_title': 'Latest from the Blog',
            'blog_subtitle': 'News, tips and stories from Casa no Souto',
            'blog_post1_title': 'The Importance of Sustainability in Tourism',
            'blog_post1_meta': 'By João Silva | July 10, 2024',
            'blog_post1_text': 'Discover how Casa no Souto integrates sustainable practices into its daily life.',
            'blog_post2_title': 'Flavors of Beira Baixa: A Gastronomic Journey',
            'blog_post2_meta': 'By Maria Costa | July 05, 2024',
            'blog_post2_text': 'Get to know the typical dishes and regional products that you cannot miss.',
            'blog_post3_title': 'Fundão: More than Cherries, a Hidden Treasure',
            'blog_post3_meta': 'By Ana Pereira | June 28, 2024',
            'blog_post3_text': 'Explore the cultural and natural wonders of the Fundão region.',

            // Contacto Section
            'contact_title': 'Contact Us',
            'contact_subtitle': 'We are here to help and answer your questions',
            'contact_address': 'Main Street, 123, Souto da Casa, 6230-000 Fundão',
            'contact_map': 'Map of the location here',

            // Footer
            'footer_about_title': 'Casa no Souto',
            'footer_about_text': 'Sustainable rural tourism in the heart of Fundão. Connect with nature and local culture.',
            'footer_quick_links_title': 'Quick Links',
            'footer_contact_title': 'Contact',
            'footer_newsletter_title': 'Newsletter',
            'footer_newsletter_text': 'Receive the latest news and special offers.',
            'footer_newsletter_button': 'Subscribe',
            'footer_copyright': '© 2024 Casa no Souto. All rights reserved.',

            // Chatbot
            'chatbot_title': 'Chatbot',
            'chatbot_welcome_message': 'Hello! How can I help you?',
            'chatbot_typing': 'Casa Souto is typing...',
            'chatbot_error': 'Sorry, there was an error. Please try again.',
        },
        es: {
            // Navbar
            'nav_home': 'Inicio',
            'nav_about': 'Sobre Nosotros',
            'nav_accommodation': 'Alojamiento',
            'nav_reservations': 'Reservas',
            'nav_events': 'Eventos',
            'nav_packages': 'Paquetes',
            'nav_blog': 'Blog',
            'nav_contact': 'Contacto',

            // Hero Section
            'hero_title': 'Bienvenido a Casa no Souto',
            'hero_subtitle': 'Descubra la armonía perfecta entre naturaleza, cultura y sostenibilidad',
            'hero_cta': 'Reserve su Estancia Ahora',

            // Diferenciais Section
            'diferenciais_title': '¿Por qué elegir Casa no Souto?',
            'diferenciais_subtitle': 'Una experiencia única en el corazón de la naturaleza portuguesa',
            'diferenciais_sustainability_title': 'Sostenibilidad',
            'diferenciais_sustainability_text': 'Construcción ecológica con materiales naturales y energías renovables',
            'diferenciais_nature_title': 'Naturaleza Circundante',
            'diferenciais_nature_text': 'Rodeado de paisajes impresionantes y rutas de senderismo',
            'diferenciais_culture_title': 'Cultura Local',
            'diferenciais_culture_text': 'Experiencias auténticas con tradiciones y gastronomía regional',
            'diferenciais_tranquility_title': 'Tranquilidad',
            'diferenciais_tranquility_text': 'El refugio perfecto para relajarse y reconectarse',

            // Sobre Nós Section
            'about_title': 'Sobre Casa no Souto',
            'about_subtitle': 'Nuestra historia y valores',
            'about_p1': 'Casa no Souto nació del sueño de crear un espacio donde la naturaleza y la cultura local se encuentran en armonía. Ubicado en Souto da Casa, Fundão, ofrecemos una experiencia de turismo rural auténtica y sostenible.',
            'about_p2': 'Nuestros alojamientos han sido cuidadosamente diseñados para minimizar el impacto ambiental, utilizando materiales naturales y técnicas de construcción ecológica. Cada módulo es una celebración de la arquitectura tradicional portuguesa, adaptada al confort moderno.',
            'about_p3': 'Creemos que el turismo puede ser una fuerza positiva para la preservación de la naturaleza y la valorización de las comunidades locales. Por ello, trabajamos en estrecha colaboración con productores y artesanos de la región.',

            // Unidades Section
            'unidades_title': 'Nuestros Alojamientos',
            'unidades_subtitle': 'Elige el espacio perfecto para tu estancia',
            'unidades_family_module_title': 'Módulo Familiar',
            'unidades_family_module_text': 'Espacio amplio y confortable para que disfrute toda la familia',
            'unidades_amenities': 'Comodidades:',
            'unidades_book_button': 'Reservar',
            'unidades_couple_module_title': 'Módulo Pareja',
            'unidades_couple_module_text': 'Refugio romántico con una vista privilegiada de la naturaleza',
            'unidades_hiker_module_title': 'Módulo Excursionista',
            'unidades_hiker_module_text': 'Alojamiento sencillo y funcional para aventureros',

            // Reservas Section
            'reservas_title': 'Reserve su Estancia',
            'reservas_subtitle': 'Garantice su experiencia en Casa no Souto ahora',
            'reservas_checkin': 'Fecha de Entrada',
            'reservas_checkout': 'Fecha de Salida',
            'reservas_guests': 'Número de Huéspedes',
            'reservas_accommodation_type': 'Tipo de Alojamiento',
            'reservas_family_module': 'Módulo Familiar',
            'reservas_couple_module': 'Módulo Pareja',
            'reservas_hiker_module': 'Módulo Excursionista',
            'reservas_full_name': 'Nombre Completo',
            'reservas_email': 'Email',
            'reservas_phone': 'Teléfono',
            'reservas_message': 'Mensaje (opcional)',
            'reservas_submit_button': 'Confirmar Reserva',

            // Eventos Section
            'eventos_title': 'Próximos Eventos',
            'eventos_subtitle': 'Descubra las actividades y experiencias que tenemos para usted',
            'eventos_event1_title': 'Taller de Cocina Regional',
            'eventos_event1_text': 'Aprenda a preparar platos tradicionales de Beira Baixa con chefs locales.',
            'eventos_event2_title': 'Caminata Guiada por la Serra da Gardunha',
            'eventos_event2_text': 'Explore la flora y fauna local con un guía experimentado.',
            'eventos_event3_title': 'Noche de Observación de Estrellas',
            'eventos_event3_text': 'Disfrute del cielo nocturno despejado de Fundão con telescopios y un astrónomo.',

            // Pacotes Section
            'pacotes_title': 'Paquetes Especiales',
            'pacotes_subtitle': 'Aproveche nuestras ofertas exclusivas para una estancia inolvidable',
            'pacotes_package1_title': 'Escapada Romántica',
            'pacotes_package1_text': 'Para parejas que buscan un refugio tranquilo.',
            'pacotes_package1_item1': '2 Noches en Módulo Pareja',
            'pacotes_package1_item2': 'Cena Romántica',
            'pacotes_package1_item3': 'Paseo a Caballo',
            'pacotes_see_details_button': 'Ver Detalles',
            'pacotes_package2_title': 'Aventura en Familia',
            'pacotes_package2_text': 'Diversión garantizada para todas las edades.',
            'pacotes_package2_item1': '3 Noches en Módulo Familiar',
            'pacotes_package2_item2': 'Visita a la Granja Pedagógica',
            'pacotes_package2_item3': 'Picnic en la Naturaleza',
            'pacotes_package3_title': 'Retiro de Bienestar',
            'pacotes_package3_text': 'Relájese y revitalícese en plena naturaleza.',
            'pacotes_package3_item1': '2 Noches en Módulo Pareja',
            'pacotes_package3_item2': 'Sesión de Yoga',
            'pacotes_package3_item3': 'Masaje Relajante',

            // Blog Section
            'blog_title': 'Últimas del Blog',
            'blog_subtitle': 'Noticias, consejos e historias de Casa no Souto',
            'blog_post1_title': 'La Importancia de la Sostenibilidad en el Turismo',
            'blog_post1_meta': 'Por João Silva | 10 de Julio, 2024',
            'blog_post1_text': 'Descubra cómo Casa no Souto integra prácticas sostenibles en su día a día.',
            'blog_post2_title': 'Sabores de Beira Baixa: Un Viaje Gastronómico',
            'blog_post2_meta': 'Por Maria Costa | 05 de Julio, 2024',
            'blog_post2_text': 'Conozca los platos típicos y los productos regionales que no puede perderse.',
            'blog_post3_title': 'Fundão: Más que Cerezas, un Tesoro Escondido',
            'blog_post3_meta': 'Por Ana Pereira | 28 de Junio, 2024',
            'blog_post3_text': 'Explore las maravillas culturales y naturales de la región de Fundão.',

            // Contacto Section
            'contact_title': 'Contáctenos',
            'contact_subtitle': 'Estamos aquí para ayudar y responder a sus preguntas',
            'contact_address': 'Calle Principal, 123, Souto da Casa, 6230-000 Fundão',
            'contact_map': 'Mapa de la ubicación aquí',

            // Footer
            'footer_about_title': 'Casa no Souto',
            'footer_about_text': 'Turismo rural sostenible en el corazón de Fundão. Conéctese con la naturaleza y la cultura local.',
            'footer_quick_links_title': 'Enlaces Rápidos',
            'footer_contact_title': 'Contacto',
            'footer_newsletter_title': 'Boletín',
            'footer_newsletter_text': 'Reciba las últimas noticias y ofertas especiales.',
            'footer_newsletter_button': 'Suscribir',
            'footer_copyright': '© 2024 Casa no Souto. Todos los derechos reservados.',

            // Chatbot
            'chatbot_title': 'Chatbot',
            'chatbot_welcome_message': '¡Hola! ¿Cómo puedo ayudar?',
            'chatbot_typing': 'Casa Souto está escribiendo...',
            'chatbot_error': 'Lo siento, hubo un error. Inténtalo de nuevo.',
        }
    };

    function changeLanguage(lang) {
        currentLang = lang;
        translatableElements.forEach(element => {
            const key = element.dataset.translate;
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Update active button
        langButtons.forEach(button => {
            if (button.dataset.lang === lang) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.dataset.lang;
            changeLanguage(lang);
        });
    });

    // Initial language setup
    changeLanguage('pt');

    // Chatbot functionality
    const chatbotTrigger = document.getElementById('chatbotTrigger');
    const chatbotWindow = document.getElementById('chatbotWindow');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotSend = document.getElementById('chatbotSend');

    let conversationHistory = [];

    // Toggle chatbot window
    chatbotTrigger.addEventListener('click', () => {
        chatbotWindow.classList.toggle('active');
    });

    chatbotClose.addEventListener('click', () => {
        chatbotWindow.classList.remove('active');
    });

    // Send message
    chatbotSend.addEventListener('click', sendMessage);
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    async function sendMessage() {
        const message = chatbotInput.value.trim();
        if (!message) return;

        // Add user message to UI
        addMessage(message, 'user');
        chatbotInput.value = '';

        // Add to history
        conversationHistory.push({ role: 'user', parts: [{ text: message }] });

        // Show typing indicator
        const typingDiv = document.createElement('div');
        typingDiv.className = 'chatbot-message bot typing';
        typingDiv.textContent = translations[currentLang]['chatbot_typing'];
        chatbotMessages.appendChild(typingDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyBIKvg9R8xGB2qqWAzbR-RHXq_ecfvb2HQ`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [
                        { role: 'user', parts: [{ text: systemPrompts[currentLang] }] },
                        ...conversationHistory
                    ]
                })
            });

            const data = await response.json();
            const botMessage = data.candidates[0].content.parts[0].text;

            // Remove typing indicator
            chatbotMessages.removeChild(typingDiv);

            // Add bot message to UI
            addMessage(botMessage, 'bot');

            // Add to history
            conversationHistory.push({ role: 'model', parts: [{ text: botMessage }] });

        } catch (error) {
            console.error('Error:', error);
            // Remove typing indicator
            chatbotMessages.removeChild(typingDiv);
            addMessage(translations[currentLang]['chatbot_error'], 'bot');
        }
    }

    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chatbot-message ${sender}`;
        messageDiv.textContent = text;
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
});
