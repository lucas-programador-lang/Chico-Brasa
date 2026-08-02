// ============================================================
// CHICOS BRASA — Cardápio & Carrinho
// ============================================================

// Base de dados estruturada do Cardápio Chicos Brasa
const menuDatabase = [
    {
        id: 1,
        name: "Combo Casal",
        category: "combos",
        price: 99.90,
        description: "O par perfeito para compartilhar bons momentos! 2 Hambúrgueres Artesanais preparados na brasa, 2 batatas fritas crocantes e 2 bebidas refrescantes.",
        ifoodUrl: "https://www.ifood.com.br/delivery/porto-velho-ro/chicos-brasa-tancredo-neves/a882d49d-215e-48c1-b4d1-2d27783d858c?prato=4cdd55bc-806d-43b7-8a53-9ea30e6b03ea",
        image: "combo-casal.webp"
    },
    {
        id: 2,
        name: "Combo Chicos Classic",
        category: "combos",
        price: 32.90,
        description: "Desfrute de um sabor autêntico com o Combo Classic: Burger na Brasa, Batata Rústica crocante e um refrescante Suco de Maracujá de 500ml.",
        ifoodUrl: "https://www.ifood.com.br/delivery/porto-velho-ro/chicos-brasa-tancredo-neves/a882d49d-215e-48c1-b4d1-2d27783d858c?prato=ef447762-e9c4-464a-be71-c2e5178f2bd4",
        image: "combo-classic.webp"
    },
    {
        id: 3,
        name: "Combo Insano",
        category: "combos",
        price: 42.50,
        description: "A combinação perfeita e monstruosa criada para quem tem fome de verdade. Preparado na brasa original.",
        ifoodUrl: "https://www.ifood.com.br/delivery/porto-velho-ro/chicos-brasa-tancredo-neves/a882d49d-215e-48c1-b4d1-2d27783d858c?prato=b775441c-c1f8-4040-aeed-cc91d8b1a16d",
        image: "combo-insano.webp"
    },
    {
        id: 4,
        name: "Combo Prime",
        category: "combos",
        price: 34.90,
        description: "Uma combinação sofisticada de Burger na Brasa, Batata Rústica e Suco de Maracujá 500ml, perfeita para quem busca um sabor premium.",
        ifoodUrl: "https://www.ifood.com.br/delivery/porto-velho-ro/chicos-brasa-tancredo-neves/a882d49d-215e-48c1-b4d1-2d27783d858c?prato=af654a5d-e36b-43db-886f-f6388bfd78c3",
        image: "combo-prime.webp"
    },
    {
        id: 5,
        name: "Combo Amigos",
        category: "combos",
        price: 110.90,
        description: "O melhor custo-benefício! 03 Xicos Insanos completos, 03 porções de Batatas Rústicas e 01 Coca-Cola de 2 litros geladinha.",
        ifoodUrl: "https://www.ifood.com.br/delivery/porto-velho-ro/chicos-brasa-tancredo-neves/a882d49d-215e-48c1-b4d1-2d27783d858c?prato=3062c8b1-8b7f-47b8-8b06-e909c4f72bb3",
        image: "combo-amigos.webp"
    },
    {
        id: 6,
        name: "Chico Classic",
        category: "burgers",
        price: 28.90,
        description: "Pão brioche selado na manteiga, blend bovino 160g suculento na brasa, queijo prato, alface fresca, tomate e maionese artesanal.",
        ifoodUrl: "https://www.ifood.com.br/delivery/porto-velho-ro/chicos-brasa-tancredo-neves/a882d49d-215e-48c1-b4d1-2d27783d858c?prato=bc7ff6b6-80cc-4e8b-8c02-a14a42e54c83",
        image: "chico-classic.webp"
    },
    {
        id: 7,
        name: "Brasa Prime",
        category: "burgers",
        price: 32.90,
        description: "Experiência gourmet com pão brioche, blend bovino 160g na brasa, queijo cheddar derretido, bacon crocante, cebola caramelizada e molho barbecue.",
        ifoodUrl: "https://www.ifood.com.br/delivery/porto-velho-ro/chicos-brasa-tancredo-neves/a882d49d-215e-48c1-b4d1-2d27783d858c?prato=83e074e9-1767-454a-b20c-53bc8e5eab85",
        image: "brasa-prime.webp"
    },
    {
        id: 8,
        name: "Chico Insano",
        category: "burgers",
        price: 34.99,
        description: "O burger insano da casa, ultra recheado, sabor defumado marcante com ingredientes de altíssima qualidade.",
        ifoodUrl: "https://www.ifood.com.br/delivery/porto-velho-ro/chicos-brasa-tancredo-neves/a882d49d-215e-48c1-b4d1-2d27783d858c?prato=797f2310-004e-4740-8156-7d3b1daf186c",
        image: "chico-insano.webp"
    },
    {
        id: 9,
        name: "Suco Maracujá 500ml",
        category: "bebidas",
        price: 15.00,
        description: "Suco natural feito na hora, super refrescante. Ideal para acompanhar o seu burger na brasa.",
        ifoodUrl: "https://www.ifood.com.br/delivery/porto-velho-ro/chicos-brasa-tancredo-neves/a882d49d-215e-48c1-b4d1-2d27783d858c?prato=a9dcded5-56fd-4bf0-8b4c-944c4f2e8710",
        image: "suco-maracuja.webp"
    },
    {
        id: 10,
        name: "Coca Lata",
        category: "bebidas",
        price: 8.00,
        description: "Refrigerante Coca-Cola em lata trincando de gelada.",
        ifoodUrl: "https://www.ifood.com.br/delivery/porto-velho-ro/chicos-brasa-tancredo-neves/a882d49d-215e-48c1-b4d1-2d27783d858c?prato=8bdce751-3b8f-4106-8cf2-6b4a1f77e0d0",
        image: "coca-lata.webp"
    },
    {
        id: 11,
        name: "Coca 2l",
        category: "bebidas",
        price: 15.00,
        description: "Perfeita para acompanhar os combos grandes e dividir com a galera.",
        ifoodUrl: "https://www.ifood.com.br/delivery/porto-velho-ro/chicos-brasa-tancredo-neves/a882d49d-215e-48c1-b4d1-2d27783d858c?prato=bc2c0ae4-66b5-4fb8-986f-6a1ba3fe363e",
        image: "coca-2l.webp"
    }
];

let cart = {};

// URL de fallback exibida quando a imagem de um item não carrega
const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500&auto=format&fit=crop";

// Formata número para moeda brasileira (mais robusto que .replace('.', ','))
function formatBRL(value) {
    return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// ============================================================
// HORÁRIO DE FUNCIONAMENTO — fonte única de verdade
// (antes existiam duas tabelas de horário diferentes: uma em minutos,
// usada corretamente com o fuso de Porto Velho, e outra em string "HH:MM"
// que comparava com o horário LOCAL do navegador — em qualquer fuso
// diferente de Porto Velho isso dava resultado errado. Unificado aqui.)
// ============================================================
const storeHours = {
    1: { open: 18 * 60 + 40, close: 23 * 60 },      // Segunda: 18:40 às 23:00
    2: { open: 18 * 60,      close: 23 * 60 },      // Terça: 18:00 às 23:00
    3: { open: 18 * 60,      close: 23 * 60 },      // Quarta: 18:00 às 23:00
    4: { open: 21 * 60 + 28, close: 23 * 60 },      // Quinta: 21:28 às 23:00
    5: { open: 18 * 60 + 26, close: 23 * 60 + 59 }, // Sexta: 18:26 às 23:59
    6: { open: 19 * 60 + 2,  close: 23 * 60 },      // Sábado: 19:02 às 23:00
    0: null                                          // Domingo: Fechado
};

// Retorna a data/hora atual no fuso de Porto Velho, com fallback pro
// horário local do navegador caso o Intl/timeZone não seja suportado.
function getPortoVelhoNow() {
    try {
        const pvhDateString = new Date().toLocaleString("en-US", { timeZone: "America/Porto_Velho" });
        const pvhDate = new Date(pvhDateString);
        if (isNaN(pvhDate.getTime())) throw new Error("Data inválida");
        return pvhDate;
    } catch (err) {
        console.warn("Fuso horário America/Porto_Velho indisponível, usando horário local.", err);
        return new Date();
    }
}

// Única função que decide se a loja está aberta — usada tanto pelo
// badge "Aberto/Fechado" quanto pelo toast promocional.
function getStoreStatus() {
    const now = getPortoVelhoNow();
    const dayOfWeek = now.getDay();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const todaySchedule = storeHours[dayOfWeek];

    const isOpen = !!todaySchedule &&
        currentMinutes >= todaySchedule.open &&
        currentMinutes <= todaySchedule.close;

    return { isOpen, dayOfWeek };
}

// Atualiza o badge "Aberto agora" / "Fechado" e destaca o dia atual.
// Roda no carregamento e é chamada de novo periodicamente (ver init),
// assim o badge não fica "travado" caso a pessoa deixe a aba aberta
// exatamente na hora de abrir/fechar.
function checkStoreStatus() {
    const statusBadge = document.getElementById('status-loja');
    if (!statusBadge) return;

    const { isOpen, dayOfWeek } = getStoreStatus();

    statusBadge.innerHTML = isOpen
        ? `<span class="badge-open"><i class="fa-solid fa-circle" aria-hidden="true"></i> ABERTO AGORA</span>`
        : `<span class="badge-closed"><i class="fa-solid fa-circle" aria-hidden="true"></i> FECHADO NO MOMENTO</span>`;

    document.querySelectorAll('.hours-grid .is-today').forEach(el => el.classList.remove('is-today'));
    const activeDayRow = document.getElementById(`day-${dayOfWeek}`);
    if (activeDayRow) activeDayRow.classList.add('is-today');
}

// ============================================================
// RENDERIZAÇÃO DO CARDÁPIO
// ============================================================
function renderMenu(items) {
    const grid = document.getElementById('menu-grid');
    if (!grid) return;
    grid.innerHTML = "";

    if (items.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1 / -1; text-align:center; color: var(--text-muted);">Nenhum item encontrado nesta categoria.</p>`;
        return;
    }

    const fragment = document.createDocumentFragment();

    items.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.className = 'menu-item';
        itemCard.innerHTML = `
            <div class="item-img-container">
                <img src="${item.image}" alt="${item.name}" class="item-img" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMAGE}'">
            </div>
            <div class="item-content">
                <div>
                    <h3 class="item-title">${item.name}</h3>
                    <p class="item-description">${item.description}</p>
                </div>
                <div class="item-footer">
                    <span class="item-price"><span class="currency">R$</span> ${formatBRL(item.price)}</span>
                    <div class="btn-group">
                        <button type="button" class="btn-item btn-add-whatsapp" data-action="add-to-cart" data-id="${item.id}">
                            <i class="fa-solid fa-plus" aria-hidden="true"></i> Pedir pelo Whats
                        </button>
                        <a href="${item.ifoodUrl}" target="_blank" rel="noopener noreferrer" class="btn-item btn-ifood">
                            <i class="fa-solid fa-motorcycle" aria-hidden="true"></i> Ver no iFood
                        </a>
                    </div>
                </div>
            </div>
        `;
        fragment.appendChild(itemCard);
    });

    grid.appendChild(fragment);
}

function filterMenu(category, clickedButton) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        const isActive = btn === clickedButton;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-selected', String(isActive));
    });

    const filtered = category === 'todos'
        ? menuDatabase
        : menuDatabase.filter(item => item.category === category);

    renderMenu(filtered);
}

// ============================================================
// CARRINHO
// ============================================================
function addToCart(id) {
    const item = menuDatabase.find(i => i.id === id);
    if (!item) return;

    if (cart[id]) {
        cart[id].qty += 1;
    } else {
        cart[id] = { ...item, qty: 1 };
    }
    updateCartUI();
    showFeedback(item.name, cart[id].qty, 'add');

    const modal = document.getElementById('checkout-modal');
    if (modal && modal.classList.contains('open')) {
        renderModalItems();
    }
}

function removeFromCart(id) {
    const item = cart[id];
    if (!item) return;

    const name = item.name;

    if (item.qty > 1) {
        cart[id].qty -= 1;
        showFeedback(name, cart[id].qty, 'remove');
    } else {
        delete cart[id];
        showFeedback(name, 0, 'remove');
    }
    updateCartUI();

    if (Object.keys(cart).length === 0) {
        toggleModal(false);
    } else {
        renderModalItems();
    }
}

function updateCartUI() {
    const cartBar = document.getElementById('cart-bar');
    const cartCountStr = document.getElementById('cart-count');
    const cartTotalStr = document.getElementById('cart-total');

    let totalItems = 0;
    let totalPrice = 0;

    Object.values(cart).forEach(item => {
        totalItems += item.qty;
        totalPrice += item.price * item.qty;
    });

    if (totalItems > 0) {
        if (cartBar) cartBar.classList.add('active');
        if (cartCountStr) cartCountStr.textContent = `${totalItems} ${totalItems === 1 ? 'item' : 'itens'}`;
        if (cartTotalStr) cartTotalStr.textContent = formatBRL(totalPrice);

        // Pequeno "bump" visual no contador — feedback de que o carrinho mudou
        [cartCountStr, cartTotalStr].forEach(el => {
            if (!el) return;
            el.classList.remove('bump-anim');
            // eslint-disable-next-line no-unused-expressions
            void el.offsetWidth; // força reflow pra permitir reiniciar a animação
            el.classList.add('bump-anim');
        });
    } else if (cartBar) {
        cartBar.classList.remove('active');
    }
}

// ============================================================
// MODAL DE CHECKOUT
// ============================================================
function toggleModal(open) {
    const modal = document.getElementById('checkout-modal');
    if (!modal) return;

    if (open) {
        modal.classList.add('open');
        renderModalItems();
    } else {
        modal.classList.remove('open');
    }
}

function renderModalItems() {
    const container = document.getElementById('modal-items');
    const modalTotalStr = document.getElementById('modal-total-val');
    if (!container) return;

    container.innerHTML = "";
    let totalPrice = 0;
    const fragment = document.createDocumentFragment();

    Object.values(cart).forEach(item => {
        totalPrice += item.price * item.qty;
        const row = document.createElement('div');
        row.className = 'modal-item-row';
        row.innerHTML = `
            <div class="modal-item-name">
                <strong>${item.name}</strong>
                <span class="modal-item-qty-tag">x${item.qty}</span>
            </div>
            <div class="modal-item-controls">
                <span class="modal-item-subtotal">R$ ${formatBRL(item.price * item.qty)}</span>
                <button type="button" class="qty-btn qty-btn--remove" data-action="decrease" data-id="${item.id}" aria-label="Remover uma unidade de ${item.name}">−</button>
                <button type="button" class="qty-btn qty-btn--add" data-action="increase" data-id="${item.id}" aria-label="Adicionar uma unidade de ${item.name}">+</button>
            </div>
        `;
        fragment.appendChild(row);
    });

    container.appendChild(fragment);
    if (modalTotalStr) modalTotalStr.textContent = formatBRL(totalPrice);
}

function sendWhatsApp() {
    if (Object.keys(cart).length === 0) return;

    const phoneNumber = "556992673745";
    let textMessage = "🔥 *NOVO PEDIDO - CHICOS BRASA* 🔥\n\n";
    let totalPrice = 0;

    Object.values(cart).forEach(item => {
        textMessage += `▪️ *${item.qty}x* ${item.name} (R$ ${formatBRL(item.price * item.qty)})\n`;
        totalPrice += item.price * item.qty;
    });

    textMessage += `\n💰 *Total do Pedido:* R$ ${formatBRL(totalPrice)}\n\n`;
    textMessage += `📍 *Endereço da Loja:* Rua Idalva Fraga Moreira, 3915 - Porto Velho\n`;
    textMessage += `Por favor, confirme meu pedido e envie a chave Pix!`;

    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    showFeedback('Pedido enviado! Abrindo o WhatsApp...');
    cart = {};
    updateCartUI();
    toggleModal(false);
}

// ============================================================
// FEEDBACK TOAST — confirmação rápida (adicionar/remover/enviar)
// ============================================================
let feedbackHideTimer = null;

/**
 * Mostra o toast de feedback.
 * @param {string} label - nome do item (ou uma mensagem simples, se qty for null)
 * @param {number|null} qty - quantidade atual do item no carrinho.
 *   > 0  → mostra o chip "Nx" antes do nome (ex: "2x Combo Casal no carrinho")
 *   0    → item foi totalmente removido (ex: "Combo Casal removido do carrinho")
 *   null → `label` é usado como mensagem livre, sem chip (ex: envio ao WhatsApp)
 * @param {'add'|'remove'} type - cor/ícone do toast
 */
function showFeedback(label, qty = null, type = 'add') {
    const toast = document.getElementById('feedback-toast');
    const text = document.getElementById('feedback-toast-text');
    const icon = document.getElementById('feedback-toast-icon');
    if (!toast || !text) return;

    if (qty === null) {
        text.textContent = label;
    } else if (qty === 0) {
        text.textContent = `${label} removido do carrinho`;
    } else if (type === 'add' && qty === 1) {
        // Primeira unidade adicionada: mensagem simples, sem "1x"
        text.textContent = `${label} adicionado ao carrinho`;
    } else {
        // Qualquer outra contagem (2+, ou 1 restante após remover uma unidade)
        text.innerHTML = `<span class="feedback-toast-qty">${qty}x</span> ${label} no carrinho`;
    }

    toast.classList.toggle('is-remove', type === 'remove');
    if (icon) {
        icon.innerHTML = type === 'remove'
            ? '<i class="fa-solid fa-minus" aria-hidden="true"></i>'
            : '<i class="fa-solid fa-check" aria-hidden="true"></i>';
    }

    toast.classList.remove('show');
    void toast.offsetWidth; // reinicia a animação mesmo se o toast já estava visível
    toast.classList.add('show');

    clearTimeout(feedbackHideTimer);
    feedbackHideTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

// ============================================================
// PROMO TOAST — lembrete periódico (cardápio + Instagram)
// ============================================================
const promoPhrases = [
    { text: "🔥 A brasa tá pegando fogo por aqui! Dá uma fugida pro cardápio e já aproveita pra seguir a gente no Insta.", icon: 'fire' },
    { text: "Seu lanche perfeito tá a um clique de distância. Bora pedir — e de quebra, segue @chicosbrasa lá no Instagram? 😉", icon: 'insta' },
    { text: "Psst... o cheirinho de churrasco já tá quase saindo da tela. Corre no cardápio e não esquece de nos seguir!", icon: 'fire' },
    { text: "Hoje o dia pede um burger na brasa. E a gente pede um seguidor novo no Insta. Combinado? 🔥📲", icon: 'insta' },
    { text: "A brasa não espera, e as fotos lá no Insta também não. Vem ver o cardápio e nos seguir @chicosbrasa!", icon: 'insta' },
    { text: "Fome batendo? Cardápio aberto. Instagram esperando. Só falta você. 🔥", icon: 'fire' },
    { text: "Ninguém resiste a um Chico Insano quentinho. Dá uma olhada no cardápio e passa lá no nosso Insta!", icon: 'fire' }
];

const PROMO_INTERVAL_MS = 60 * 1000;   // a cada 1 minuto, verifica se pode mostrar
const PROMO_AUTOHIDE_MS = 30 * 1000;   // some sozinho depois de 30s

let lastPromoPhraseIndex = -1;
let promoAutoHideTimer = null;
let promoShownAt = 0;
let promoRemainingMs = PROMO_AUTOHIDE_MS;

function pickPromoPhrase() {
    let index;
    do {
        index = Math.floor(Math.random() * promoPhrases.length);
    } while (index === lastPromoPhraseIndex && promoPhrases.length > 1);
    lastPromoPhraseIndex = index;
    return promoPhrases[index];
}

function showPromoToast() {
    // Fora do horário de funcionamento, não faz sentido incentivar o pedido
    if (!getStoreStatus().isOpen) return;

    const toast = document.getElementById('promo-toast');
    const text = document.getElementById('promo-toast-text');
    const icon = document.getElementById('promo-toast-icon');
    if (!toast || !text) return;

    // Não empilha um novo toast em cima de outro já visível
    if (toast.classList.contains('show')) return;

    const phrase = pickPromoPhrase();
    text.textContent = phrase.text;

    if (icon) {
        icon.classList.toggle('is-insta', phrase.icon === 'insta');
        icon.innerHTML = phrase.icon === 'insta'
            ? '<i class="fa-brands fa-instagram" aria-hidden="true"></i>'
            : '<i class="fa-solid fa-fire" aria-hidden="true"></i>';
    }

    toast.style.setProperty('--promo-duration', `${PROMO_AUTOHIDE_MS}ms`);
    toast.classList.remove('paused');
    toast.classList.add('show');

    promoShownAt = Date.now();
    promoRemainingMs = PROMO_AUTOHIDE_MS;
    clearTimeout(promoAutoHideTimer);
    promoAutoHideTimer = setTimeout(hidePromoToast, PROMO_AUTOHIDE_MS);
}

function hidePromoToast() {
    const toast = document.getElementById('promo-toast');
    if (!toast) return;
    toast.classList.remove('show', 'paused');
    clearTimeout(promoAutoHideTimer);
}

function pausePromoToast() {
    const toast = document.getElementById('promo-toast');
    if (!toast || !toast.classList.contains('show')) return;

    const elapsed = Date.now() - promoShownAt;
    promoRemainingMs = Math.max(0, promoRemainingMs - elapsed);
    clearTimeout(promoAutoHideTimer);
    toast.classList.add('paused');
}

function resumePromoToast() {
    const toast = document.getElementById('promo-toast');
    if (!toast || !toast.classList.contains('show')) return;

    promoShownAt = Date.now();
    toast.classList.remove('paused');
    clearTimeout(promoAutoHideTimer);
    promoAutoHideTimer = setTimeout(hidePromoToast, promoRemainingMs);
}

function initPromoToast() {
    const toast = document.getElementById('promo-toast');
    const closeBtn = document.getElementById('promo-toast-close');

    if (closeBtn) closeBtn.addEventListener('click', hidePromoToast);

    document.querySelectorAll('.promo-toast-btn').forEach(btn => {
        btn.addEventListener('click', hidePromoToast);
    });

    if (toast) {
        toast.addEventListener('mouseenter', pausePromoToast);
        toast.addEventListener('mouseleave', resumePromoToast);
        toast.addEventListener('focusin', pausePromoToast);
        toast.addEventListener('focusout', resumePromoToast);
    }

    setInterval(showPromoToast, PROMO_INTERVAL_MS);
}

// ============================================================
// AVALIAÇÃO POR ESTRELAS + COMENTÁRIOS
// ------------------------------------------------------------
// Avaliar com estrelas continua livre, sem login (como já era).
// Deixar um COMENTÁRIO exige entrar com Google — é o que permite
// mostrar nome/foto reais e, principalmente, garantir com segurança
// (via regras do Firebase) que só o dono consegue editar/excluir o
// próprio comentário depois.
//
// Sem Firebase configurado, o site cai automaticamente pro modo
// local: estrelas funcionam (só neste navegador), comentários e o
// mural ficam desativados (exigem Firebase + Auth).
// ============================================================
const RATING_KEYS = {
    count: 'chicosbrasa_rating_count',
    sum: 'chicosbrasa_rating_sum',
    dist: 'chicosbrasa_rating_dist',
    myRating: 'chicosbrasa_my_rating'
};

const EMPTY_DIST = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
const COMMENT_MAX_LENGTH = 280;

let draftRatingValue = 0;
let currentReviewUser = null; // preenchido pelo onAuthStateChanged

function getMyRating() {
    return Number(localStorage.getItem(RATING_KEYS.myRating)) || 0;
}

// Evita HTML/scripts injetados via nome do Google ou texto do comentário
// (ambos são conteúdo de usuário e vão parar em innerHTML no mural)
function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str ?? '';
    return div.innerHTML;
}

function formatReviewDate(timestamp) {
    if (!timestamp) return 'agora mesmo';
    const d = new Date(timestamp);
    const datePart = d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
    const timePart = d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    return `${datePart} às ${timePart}`;
}

// --- Modo local (localStorage) ---
function getLocalRatingData() {
    const count = Number(localStorage.getItem(RATING_KEYS.count)) || 0;
    const sum = Number(localStorage.getItem(RATING_KEYS.sum)) || 0;
    let dist = EMPTY_DIST;
    try {
        dist = { ...EMPTY_DIST, ...JSON.parse(localStorage.getItem(RATING_KEYS.dist) || '{}') };
    } catch { /* ignora JSON inválido, usa distribuição vazia */ }
    return { count, sum, dist };
}

function saveLocalRating(value) {
    const { count, sum, dist } = getLocalRatingData();
    const newDist = { ...dist, [value]: (dist[value] || 0) + 1 };

    localStorage.setItem(RATING_KEYS.count, String(count + 1));
    localStorage.setItem(RATING_KEYS.sum, String(sum + value));
    localStorage.setItem(RATING_KEYS.dist, JSON.stringify(newDist));

    renderRatingData({ count: count + 1, sum: sum + value, dist: newDist });
}

// --- Renderização da nota (comum aos dois modos) ---
function getQualifierLabel(average) {
    if (average >= 4.5) return 'Excelente!';
    if (average >= 3.5) return 'Muito bom';
    if (average >= 2.5) return 'Bom';
    if (average >= 1.5) return 'Regular';
    return 'Precisa melhorar';
}

function renderRatingData({ count, sum, dist }) {
    const scoreRing = document.getElementById('rating-score-ring');
    const scoreNumber = document.getElementById('rating-score-number');
    const scoreStars = document.getElementById('rating-score-stars');
    const scoreQualifier = document.getElementById('rating-score-qualifier');
    const scoreCount = document.getElementById('rating-score-count');
    if (!scoreNumber || !scoreStars || !scoreCount) return;

    const average = count > 0 ? sum / count : 0;

    if (count === 0) {
        scoreNumber.textContent = '–';
        scoreStars.textContent = '☆☆☆☆☆';
        if (scoreQualifier) scoreQualifier.textContent = '';
        scoreCount.textContent = 'Ainda sem avaliações';
        if (scoreRing) scoreRing.style.setProperty('--pct', 0);
    } else {
        const roundedAvg = Math.round(average);
        scoreNumber.classList.remove('live-update');
        void scoreNumber.offsetWidth;
        scoreNumber.textContent = average.toFixed(1);
        scoreNumber.classList.add('live-update');
        scoreStars.textContent = '★★★★★'.slice(0, roundedAvg) + '☆☆☆☆☆'.slice(0, 5 - roundedAvg);
        if (scoreQualifier) scoreQualifier.textContent = getQualifierLabel(average);
        scoreCount.textContent = `${count} ${count === 1 ? 'avaliação' : 'avaliações'}`;
        if (scoreRing) scoreRing.style.setProperty('--pct', ((average / 5) * 100).toFixed(1));
    }

    for (let star = 1; star <= 5; star++) {
        const row = document.querySelector(`.rating-bar-row[data-star="${star}"]`);
        if (!row) continue;
        const votes = (dist && dist[star]) || 0;
        const pct = count > 0 ? Math.round((votes / count) * 100) : 0;
        const fill = row.querySelector('.rating-bar-fill');
        const pctLabel = row.querySelector('.rating-bar-pct');
        if (pctLabel) pctLabel.textContent = `${pct}%`;
        if (fill) {
            requestAnimationFrame(() => requestAnimationFrame(() => {
                fill.style.width = `${pct}%`;
            }));
        }
    }
}

// --- Seleção das estrelas (rascunho, antes de enviar) ---
function paintStars(upTo) {
    document.querySelectorAll('.rating-star').forEach(star => {
        const value = Number(star.dataset.value);
        star.classList.toggle('is-selected', value <= upTo);
    });
}

function selectDraftStars(value) {
    draftRatingValue = value;
    paintStars(value);
    document.querySelectorAll('.rating-star').forEach(star => {
        star.setAttribute('aria-checked', String(Number(star.dataset.value) === value));
    });
    const submitBtn = document.getElementById('rating-submit-btn');
    if (submitBtn) submitBtn.disabled = value === 0;
    const label = document.getElementById('rating-cta-label');
    if (label) label.textContent = value > 0 ? `Sua nota: ${value} de 5` : 'Toque nas estrelas pra avaliar:';
}

function lockRatingWidget(myRating) {
    const card = document.querySelector('.rating-card');
    const starsWrap = document.getElementById('rating-stars');
    const thanksStars = document.getElementById('rating-thanks-stars');
    if (!card || !starsWrap) return;

    card.classList.add('has-rated');
    starsWrap.classList.add('is-locked');
    paintStars(myRating);

    document.querySelectorAll('.rating-star').forEach(star => {
        star.setAttribute('aria-checked', String(Number(star.dataset.value) === myRating));
        star.tabIndex = -1;
    });

    if (thanksStars) {
        thanksStars.textContent = '★★★★★'.slice(0, myRating) + '☆☆☆☆☆'.slice(0, 5 - myRating);
    }
}

// --- Envio da avaliação (+ comentário/foto opcionais) ---
async function submitRating(value, comment) {
    if (getMyRating() > 0) return; // trava: esse navegador já votou
    if (!value) return;

    const trimmedComment = (comment || '').trim();
    const hasPhoto = !!selectedPhotoFile;
    const submitBtn = document.getElementById('rating-submit-btn');

    // Se tem comentário ou foto, precisa estar logado com Google antes de publicar
    if ((trimmedComment || hasPhoto) && window.__ratingsDB) {
        if (submitBtn) submitBtn.disabled = true;
        try {
            await ensureSignedIn();
        } catch (err) {
            console.error('Login com Google necessário pra comentar:', err);
            showFeedback('Entra com Google pra publicar seu comentário 🙂');
            if (submitBtn) submitBtn.disabled = false;
            return;
        }
    }

    localStorage.setItem(RATING_KEYS.myRating, String(value));
    lockRatingWidget(value);
    showFeedback(`Obrigado pela avaliação de ${value} estrela${value > 1 ? 's' : ''}!`);

    if (window.__ratingsDB) {
        submitRatingFirebase(value);
        if (trimmedComment || hasPhoto) {
            submitReviewFirebase(value, trimmedComment, selectedPhotoFile);
        }
    } else {
        saveLocalRating(value);
    }

    selectedPhotoFile = null;
}

// --- Modo Firebase: aggregate (/ratings) ---
function submitRatingFirebase(value) {
    const { ref, runTransaction, db } = window.__ratingsDB;
    const ratingsRef = ref(db, 'ratings');

    runTransaction(ratingsRef, (current) => {
        const data = current || { count: 0, sum: 0, dist: { ...EMPTY_DIST } };
        data.count = (data.count || 0) + 1;
        data.sum = (data.sum || 0) + value;
        data.dist = { ...EMPTY_DIST, ...data.dist };
        data.dist[value] = (data.dist[value] || 0) + 1;
        return data;
    }).catch(err => console.error('Não foi possível salvar a avaliação no Firebase:', err));
    // A tela atualiza sozinha via onValue (initRatingFirebaseSync)
}

function initRatingFirebaseSync() {
    const { ref, onValue, db } = window.__ratingsDB;
    onValue(ref(db, 'ratings'), (snapshot) => {
        renderRatingData(snapshot.val() || { count: 0, sum: 0, dist: { ...EMPTY_DIST } });
    });
}

// --- Modo Firebase: autenticação com Google ---
function ensureSignedIn() {
    const { auth, GoogleAuthProvider, signInWithPopup } = window.__ratingsDB;
    if (currentReviewUser) return Promise.resolve(currentReviewUser);
    return signInWithPopup(auth, new GoogleAuthProvider()).then(result => result.user);
}

function renderAuthArea() {
    const authWrap = document.getElementById('reviews-auth');
    if (!authWrap) return;

    if (currentReviewUser) {
        const name = escapeHtml(currentReviewUser.displayName || 'Você');
        const photo = currentReviewUser.photoURL;
        authWrap.innerHTML = `
            <div class="reviews-user-chip">
                ${photo ? `<img src="${escapeHtml(photo)}" alt="">` : ''}
                <span>${name}</span>
                <button type="button" class="reviews-signout-btn" id="reviews-signout-btn">Sair</button>
            </div>
        `;
        document.getElementById('reviews-signout-btn')?.addEventListener('click', () => {
            window.__ratingsDB.signOut(window.__ratingsDB.auth);
        });
    } else {
        authWrap.innerHTML = `
            <button type="button" class="reviews-google-btn" id="reviews-google-btn">
                <i class="fa-brands fa-google" aria-hidden="true"></i> Entrar com Google pra comentar
            </button>
        `;
        document.getElementById('reviews-google-btn')?.addEventListener('click', () => {
            ensureSignedIn().catch(err => {
                console.error('Erro ao entrar com Google:', err);
                showFeedback('Não foi possível entrar com o Google agora.');
            });
        });
    }
}

function initAuth() {
    const { auth, onAuthStateChanged } = window.__ratingsDB;
    onAuthStateChanged(auth, (user) => {
        currentReviewUser = user;
        renderAuthArea();
        renderReviewsWall(lastReviewsSnapshot); // reprocessa pra mostrar/ocultar editar+excluir
    });
}

// --- Modo Firebase: publicar comentário (com upload de foto, se houver) ---
async function submitReviewFirebase(stars, comment, photoBlob) {
    const { ref, push, update, serverTimestamp, db, storage, storageRef, uploadBytes, getDownloadURL } = window.__ratingsDB;
    if (!currentReviewUser) return;

    const reviewData = {
        uid: currentReviewUser.uid,
        name: currentReviewUser.displayName || 'Cliente',
        photoURL: currentReviewUser.photoURL || null, // foto do perfil Google
        stars,
        comment: comment.slice(0, COMMENT_MAX_LENGTH),
        imageURL: null, // foto anexada ao comentário (diferente da foto do perfil)
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
    };

    try {
        if (photoBlob) {
            const path = `reviews/${currentReviewUser.uid}/${Date.now()}.jpg`;
            const fileRef = storageRef(storage, path);
            await uploadBytes(fileRef, photoBlob, { contentType: 'image/jpeg' });
            reviewData.imageURL = await getDownloadURL(fileRef);
        }
        const newRef = push(ref(db, 'reviews'));
        await update(newRef, reviewData);
    } catch (err) {
        console.error('Não foi possível publicar o comentário:', err);
        showFeedback('Sua nota foi salva, mas o comentário não pôde ser publicado.');
    }
}

// --- Anexar foto ao comentário (redimensiona no navegador antes de enviar,
// economiza espaço no Storage e tempo de upload) ---
let selectedPhotoFile = null;

function resizeImageFile(file, maxDimension = 1280, quality = 0.82) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        const objectUrl = URL.createObjectURL(file);

        img.onload = () => {
            URL.revokeObjectURL(objectUrl);
            let { width, height } = img;

            if (width > height && width > maxDimension) {
                height = Math.round(height * (maxDimension / width));
                width = maxDimension;
            } else if (height >= width && height > maxDimension) {
                width = Math.round(width * (maxDimension / height));
                height = maxDimension;
            }

            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            canvas.getContext('2d').drawImage(img, 0, 0, width, height);
            canvas.toBlob(
                blob => blob ? resolve(blob) : reject(new Error('Falha ao processar imagem')),
                'image/jpeg',
                quality
            );
        };
        img.onerror = () => {
            URL.revokeObjectURL(objectUrl);
            reject(new Error('Não foi possível carregar a imagem'));
        };
        img.src = objectUrl;
    });
}

function initPhotoInput() {
    const input = document.getElementById('rating-photo-input');
    const label = document.getElementById('rating-photo-label');
    const preview = document.getElementById('rating-photo-preview');
    const previewImg = document.getElementById('rating-photo-preview-img');
    const removeBtn = document.getElementById('rating-photo-remove');
    if (!input) return;

    input.addEventListener('change', async () => {
        const file = input.files && input.files[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
            showFeedback('Escolha um arquivo de imagem.');
            input.value = '';
            return;
        }
        if (file.size > 8 * 1024 * 1024) {
            showFeedback('Imagem muito grande (máximo 8MB).');
            input.value = '';
            return;
        }

        try {
            selectedPhotoFile = await resizeImageFile(file);
            previewImg.src = URL.createObjectURL(selectedPhotoFile);
            preview.hidden = false;
            label.hidden = true;
        } catch (err) {
            console.error('Não foi possível processar a imagem:', err);
            showFeedback('Não foi possível processar essa imagem.');
        }
    });

    removeBtn?.addEventListener('click', () => {
        selectedPhotoFile = null;
        input.value = '';
        preview.hidden = true;
        label.hidden = false;
    });
}

// --- Mural de comentários ---
const INITIAL_VISIBLE_REVIEWS = 5;
const LIKED_REVIEWS_KEY = 'chicosbrasa_liked_reviews';

let lastReviewsSnapshot = {};
let visibleReviewsCount = INITIAL_VISIBLE_REVIEWS; // "Ver mais" revela +5 por vez
let reviewsSortMode = 'top'; // 'top' (Principais, por curtidas) ou 'recent' (Mais recentes)

function getLikedReviewIds() {
    try {
        return new Set(JSON.parse(localStorage.getItem(LIKED_REVIEWS_KEY) || '[]'));
    } catch {
        return new Set();
    }
}

function saveLikedReviewIds(set) {
    localStorage.setItem(LIKED_REVIEWS_KEY, JSON.stringify([...set]));
}

// Curtir é livre (sem login), igual a avaliar com estrelas — só trava
// pelo navegador pra não deixar a mesma pessoa curtir 100x o mesmo comentário.
// pendingLikes evita que um clique duplo dispare duas transações antes da
// primeira terminar (o que poderia deixar a contagem incorreta).
const pendingLikes = new Set();

function toggleLike(id) {
    if (!window.__ratingsDB) return;
    if (pendingLikes.has(id)) return; // já tem uma curtida em andamento pra esse comentário

    const { ref, runTransaction, db } = window.__ratingsDB;
    const liked = getLikedReviewIds();
    const alreadyLiked = liked.has(id);

    // Atualiza a tela na hora (otimista), sem esperar o Firebase confirmar
    if (alreadyLiked) liked.delete(id); else liked.add(id);
    saveLikedReviewIds(liked);

    const btn = document.querySelector(`[data-like-id="${id}"]`);
    if (btn) {
        const nowLiked = !alreadyLiked;
        btn.classList.toggle('is-liked', nowLiked);
        btn.setAttribute('aria-pressed', String(nowLiked));
        const icon = btn.querySelector('i');
        if (icon) icon.className = `fa-${nowLiked ? 'solid' : 'regular'} fa-thumbs-up`;

        const countSpan = btn.querySelector('span');
        if (countSpan) {
            const current = Number(countSpan.textContent) || 0;
            const next = Math.max(0, current + (nowLiked ? 1 : -1));
            countSpan.textContent = next > 0 ? next : 'Curtir';
        }
    }

    pendingLikes.add(id);
    runTransaction(ref(db, `reviews/${id}/likes`), (current) => {
        const count = current || 0;
        return alreadyLiked ? Math.max(0, count - 1) : count + 1;
    })
        .catch(err => console.error('Não foi possível curtir o comentário:', err))
        .finally(() => pendingLikes.delete(id));
}

function initReviewsWall() {
    const wall = document.getElementById('reviews-wall');
    if (!wall) return;
    wall.hidden = false;

    const { ref, onValue, query, limitToLast, db } = window.__ratingsDB;
    const reviewsQuery = query(ref(db, 'reviews'), limitToLast(50));

    onValue(reviewsQuery, (snapshot) => {
        lastReviewsSnapshot = snapshot.val() || {};
        renderReviewsWall(lastReviewsSnapshot);
    });

    document.getElementById('reviews-load-more')?.addEventListener('click', () => {
        visibleReviewsCount += 5;
        renderReviewsWall(lastReviewsSnapshot);
    });

    document.getElementById('reviews-load-less')?.addEventListener('click', () => {
        visibleReviewsCount = INITIAL_VISIBLE_REVIEWS;
        renderReviewsWall(lastReviewsSnapshot);
        document.getElementById('reviews-wall')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });

    document.querySelectorAll('.reviews-sort-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            reviewsSortMode = tab.dataset.sort;
            visibleReviewsCount = INITIAL_VISIBLE_REVIEWS; // recomeça a paginação ao trocar ordenação
            document.querySelectorAll('.reviews-sort-tab').forEach(t => {
                t.classList.toggle('active', t === tab);
                t.setAttribute('aria-selected', String(t === tab));
            });
            renderReviewsWall(lastReviewsSnapshot);
        });
    });
}

function renderReviewsWall(data) {
    const list = document.getElementById('reviews-list');
    const empty = document.getElementById('reviews-empty');
    const loadMoreBtn = document.getElementById('reviews-load-more');
    const loadLessBtn = document.getElementById('reviews-load-less');
    if (!list) return;

    let entries = Object.entries(data || {});

    if (entries.length === 0) {
        list.innerHTML = '';
        if (empty) list.appendChild(empty);
        else list.innerHTML = '<p class="reviews-empty">Nenhum comentário ainda. Seja o primeiro!</p>';
        if (loadMoreBtn) loadMoreBtn.hidden = true;
        if (loadLessBtn) loadLessBtn.hidden = true;
        return;
    }

    // "Principais" = mais curtidos primeiro (desempate: mais recente).
    // "Mais recentes" = ordem cronológica, do mais novo pro mais antigo.
    entries = entries.sort(([, a], [, b]) => {
        if (reviewsSortMode === 'top') {
            const likeDiff = (b.likes || 0) - (a.likes || 0);
            if (likeDiff !== 0) return likeDiff;
        }
        return (b.createdAt || 0) - (a.createdAt || 0);
    });

    // Só renderiza os N primeiros — evita lotar a página de comentários
    const visibleEntries = entries.slice(0, visibleReviewsCount);
    list.innerHTML = visibleEntries.map(([id, review]) => renderReviewCard(id, review)).join('');

    // Reata os eventos dos botões (innerHTML recria os elementos)
    list.querySelectorAll('[data-edit-id]').forEach(btn => {
        btn.addEventListener('click', () => startEditReview(btn.dataset.editId));
    });
    list.querySelectorAll('[data-delete-id]').forEach(btn => {
        btn.addEventListener('click', () => deleteReview(btn.dataset.deleteId, Number(btn.dataset.stars)));
    });
    list.querySelectorAll('[data-like-id]').forEach(btn => {
        btn.addEventListener('click', () => toggleLike(btn.dataset.likeId));
    });

    const remaining = entries.length - visibleEntries.length;
    if (loadMoreBtn) {
        loadMoreBtn.hidden = remaining <= 0;
        if (remaining > 0) {
            loadMoreBtn.innerHTML = `Ver mais comentários (${remaining}) <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>`;
        }
    }
    if (loadLessBtn) {
        loadLessBtn.hidden = visibleReviewsCount <= INITIAL_VISIBLE_REVIEWS;
    }
}

function renderReviewCard(id, review) {
    const isOwner = currentReviewUser && review.uid === currentReviewUser.uid;
    const name = escapeHtml(review.name || 'Cliente');
    const comment = escapeHtml(review.comment || '');
    const stars = Number(review.stars) || 0;
    const likes = Number(review.likes) || 0;
    const isLiked = getLikedReviewIds().has(id);
    const starsStr = '★★★★★'.slice(0, stars) + '☆☆☆☆☆'.slice(0, 5 - stars);
    const dateStr = formatReviewDate(review.updatedAt || review.createdAt);
    const wasEdited = review.updatedAt && review.createdAt && review.updatedAt !== review.createdAt;

    const avatar = review.photoURL
        ? `<img class="review-avatar" src="${escapeHtml(review.photoURL)}" alt="">`
        : `<span class="review-avatar-fallback">${name.charAt(0).toUpperCase()}</span>`;

    const photoHtml = review.imageURL
        ? `<a href="${escapeHtml(review.imageURL)}" target="_blank" rel="noopener noreferrer">
               <img class="review-photo" src="${escapeHtml(review.imageURL)}" alt="Foto enviada por ${name}" loading="lazy">
           </a>`
        : '';

    const ownerActions = isOwner ? `
        <button type="button" class="review-action-btn" data-edit-id="${id}">
            <i class="fa-solid fa-pen" aria-hidden="true"></i> Editar
        </button>
        <button type="button" class="review-action-btn is-danger" data-delete-id="${id}" data-stars="${stars}">
            <i class="fa-solid fa-trash" aria-hidden="true"></i> Excluir
        </button>
    ` : '';

    return `
        <div class="review-card" id="review-${id}">
            ${avatar}
            <div class="review-body">
                <div class="review-head">
                    <span class="review-name">${name}</span>
                    <span class="review-date">${dateStr}</span>
                </div>
                <div class="review-stars" aria-hidden="true">${starsStr}</div>
                ${photoHtml}
                <p class="review-text${wasEdited ? ' is-edited' : ''}">${comment}</p>
                <div class="review-actions">
                    <button type="button" class="review-action-btn review-like-btn${isLiked ? ' is-liked' : ''}" data-like-id="${id}" aria-pressed="${isLiked}">
                        <i class="fa-${isLiked ? 'solid' : 'regular'} fa-thumbs-up" aria-hidden="true"></i>
                        <span>${likes > 0 ? likes : 'Curtir'}</span>
                    </button>
                    ${ownerActions}
                </div>
            </div>
        </div>
    `;
}

function startEditReview(id) {
    const review = lastReviewsSnapshot[id];
    const card = document.getElementById(`review-${id}`);
    if (!review || !card) return;

    const body = card.querySelector('.review-body');
    const existing = body.querySelector('.review-edit-box');
    if (existing) return; // já está editando

    const box = document.createElement('div');
    box.className = 'review-edit-box';
    box.innerHTML = `
        <textarea class="rating-textarea" maxlength="${COMMENT_MAX_LENGTH}">${escapeHtml(review.comment || '')}</textarea>
        <div class="review-edit-actions">
            <button type="button" class="review-edit-save">Salvar</button>
            <button type="button" class="review-edit-cancel">Cancelar</button>
        </div>
    `;
    body.appendChild(box);

    const textarea = box.querySelector('textarea');
    textarea.focus();

    box.querySelector('.review-edit-cancel').addEventListener('click', () => box.remove());
    box.querySelector('.review-edit-save').addEventListener('click', () => {
        const newComment = textarea.value.trim();
        if (!newComment) return;
        const { ref, update, serverTimestamp, db } = window.__ratingsDB;
        update(ref(db, `reviews/${id}`), {
            comment: newComment.slice(0, COMMENT_MAX_LENGTH),
            updatedAt: serverTimestamp()
        }).then(() => {
            showFeedback('Comentário atualizado!');
        }).catch(err => {
            console.error('Não foi possível editar o comentário:', err);
            showFeedback('Não foi possível salvar a edição.');
        });
        box.remove();
    });
}

// ============================================================
// MODAL DE CONFIRMAÇÃO — substitui o confirm() feio do navegador
// Uso: const ok = await showConfirmDialog({ title, message, okLabel });
// ============================================================
function showConfirmDialog({ title = 'Tem certeza?', message = 'Essa ação não pode ser desfeita.', okLabel = 'Confirmar' } = {}) {
    return new Promise((resolve) => {
        const modal = document.getElementById('confirm-modal');
        const titleEl = document.getElementById('confirm-title');
        const messageEl = document.getElementById('confirm-message');
        const okBtn = document.getElementById('confirm-modal-ok');
        const cancelBtn = document.getElementById('confirm-modal-cancel');
        if (!modal || !okBtn || !cancelBtn) { resolve(window.confirm(message)); return; }

        titleEl.textContent = title;
        messageEl.textContent = message;
        okBtn.textContent = okLabel;
        modal.classList.add('open');

        const cleanup = (result) => {
            modal.classList.remove('open');
            okBtn.removeEventListener('click', onOk);
            cancelBtn.removeEventListener('click', onCancel);
            modal.removeEventListener('click', onOverlayClick);
            document.removeEventListener('keydown', onKeydown);
            resolve(result);
        };
        const onOk = () => cleanup(true);
        const onCancel = () => cleanup(false);
        const onOverlayClick = (e) => { if (e.target === modal) cleanup(false); };
        const onKeydown = (e) => { if (e.key === 'Escape') cleanup(false); };

        okBtn.addEventListener('click', onOk);
        cancelBtn.addEventListener('click', onCancel);
        modal.addEventListener('click', onOverlayClick);
        document.addEventListener('keydown', onKeydown);
        cancelBtn.focus();
    });
}

async function deleteReview(id, stars) {
    const confirmed = await showConfirmDialog({
        title: 'Excluir comentário?',
        message: 'Tem certeza que quer excluir seu comentário? Essa ação não pode ser desfeita.',
        okLabel: 'Excluir'
    });
    if (!confirmed) return;

    const { ref, remove, runTransaction, db } = window.__ratingsDB;

    remove(ref(db, `reviews/${id}`)).catch(err => {
        console.error('Não foi possível excluir o comentário:', err);
        showFeedback('Não foi possível excluir o comentário.');
    });

    // Reverte a contribuição desse comentário na média geral
    if (stars > 0) {
        runTransaction(ref(db, 'ratings'), (current) => {
            if (!current) return current;
            current.count = Math.max(0, (current.count || 0) - 1);
            current.sum = Math.max(0, (current.sum || 0) - stars);
            current.dist = current.dist || {};
            current.dist[stars] = Math.max(0, (current.dist[stars] || 0) - 1);
            return current;
        }).catch(err => console.error('Não foi possível atualizar a média após exclusão:', err));
    }
}

// --- Inicialização geral do widget ---
function initRatingWidget() {
    const starsWrap = document.getElementById('rating-stars');
    const commentInput = document.getElementById('rating-comment-input');
    const commentCount = document.getElementById('rating-comment-count');
    const commentBox = document.getElementById('rating-comment-box');
    const submitBtn = document.getElementById('rating-submit-btn');
    if (!starsWrap) return;

    const firebaseReady = !!window.__ratingsDB;

    if (firebaseReady) {
        initRatingFirebaseSync();
        initAuth();
        initReviewsWall();
    } else {
        renderRatingData(getLocalRatingData());
        // Sem Firebase não dá pra garantir dono do comentário com segurança
        if (commentBox) commentBox.hidden = true;
    }

    const myRating = getMyRating();
    if (myRating > 0) {
        lockRatingWidget(myRating);
        return;
    }

    starsWrap.addEventListener('click', (e) => {
        const star = e.target.closest('.rating-star');
        if (!star) return;
        selectDraftStars(Number(star.dataset.value));
    });

    starsWrap.addEventListener('mouseover', (e) => {
        const star = e.target.closest('.rating-star');
        if (!star) return;
        paintStars(Number(star.dataset.value));
    });
    starsWrap.addEventListener('mouseleave', () => paintStars(draftRatingValue));

    starsWrap.addEventListener('focusin', (e) => {
        const star = e.target.closest('.rating-star');
        if (!star) return;
        paintStars(Number(star.dataset.value));
    });
    starsWrap.addEventListener('focusout', (e) => {
        if (!starsWrap.contains(e.relatedTarget)) paintStars(draftRatingValue);
    });

    if (commentInput && commentCount) {
        commentInput.addEventListener('input', () => {
            commentCount.textContent = `${commentInput.value.length}/${COMMENT_MAX_LENGTH}`;
        });
    }

    initPhotoInput();

    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            submitRating(draftRatingValue, commentInput ? commentInput.value : '');
        });
    }
}

// ============================================================
// EVENTOS — tudo via addEventListener/delegação, sem onclick inline no HTML
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
    renderMenu(menuDatabase);
    checkStoreStatus();
    initPromoToast();
    initRatingWidget();

    // Recalcula o status "aberto/fechado" periodicamente, caso a pessoa
    // fique com a aba aberta durante a hora de abrir ou fechar a loja
    setInterval(checkStoreStatus, 60 * 1000);

    // Abas de filtro do cardápio
    const tabsContainer = document.getElementById('menu-tabs');
    if (tabsContainer) {
        tabsContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.tab-btn');
            if (!btn) return;
            filterMenu(btn.dataset.category, btn);
        });
    }

    // Botões "Pedir pelo Whats" no grid (delegado, funciona mesmo em cards recriados)
    const grid = document.getElementById('menu-grid');
    if (grid) {
        grid.addEventListener('click', (e) => {
            const btn = e.target.closest('[data-action="add-to-cart"]');
            if (!btn) return;
            addToCart(Number(btn.dataset.id));
        });
    }

    // Botões +/- dentro do modal de pedido (delegado)
    const modalItems = document.getElementById('modal-items');
    if (modalItems) {
        modalItems.addEventListener('click', (e) => {
            const btn = e.target.closest('.qty-btn');
            if (!btn) return;
            const id = Number(btn.dataset.id);
            if (btn.dataset.action === 'increase') addToCart(id);
            if (btn.dataset.action === 'decrease') removeFromCart(id);
        });
    }

    // Abrir / fechar modal e finalizar pedido
    document.getElementById('open-checkout')?.addEventListener('click', () => toggleModal(true));
    document.getElementById('close-checkout')?.addEventListener('click', () => toggleModal(false));
    document.getElementById('send-whatsapp')?.addEventListener('click', sendWhatsApp);

    const modal = document.getElementById('checkout-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target.id === 'checkout-modal') toggleModal(false);
        });
        // Fecha com a tecla Esc — acessibilidade de teclado
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('open')) {
                toggleModal(false);
            }
        });
    }
});
