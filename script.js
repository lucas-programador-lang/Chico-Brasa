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
        image: "combo-casal.png"
    },
    {
        id: 2,
        name: "Combo Chicos Classic",
        category: "combos",
        price: 32.90,
        description: "Desfrute de um sabor autêntico com o Combo Classic: Burger na Brasa, Batata Rústica crocante e um refrescante Suco de Maracujá de 500ml.",
        ifoodUrl: "https://www.ifood.com.br/delivery/porto-velho-ro/chicos-brasa-tancredo-neves/a882d49d-215e-48c1-b4d1-2d27783d858c?prato=ef447762-e9c4-464a-be71-c2e5178f2bd4",
        image: "combo-classic.png"
    },
    {
        id: 3,
        name: "Combo Insano",
        category: "combos",
        price: 42.50,
        description: "A combinação perfeita e monstruosa criada para quem tem fome de verdade. Preparado na brasa original.",
        ifoodUrl: "https://www.ifood.com.br/delivery/porto-velho-ro/chicos-brasa-tancredo-neves/a882d49d-215e-48c1-b4d1-2d27783d858c?prato=b775441c-c1f8-4040-aeed-cc91d8b1a16d",
        image: "combo-insano.png"
    },
    {
        id: 4,
        name: "Combo Prime",
        category: "combos",
        price: 34.90,
        description: "Uma combinação sofisticada de Burger na Brasa, Batata Rústica e Suco de Maracujá 500ml, perfeita para quem busca um sabor premium.",
        ifoodUrl: "https://www.ifood.com.br/delivery/porto-velho-ro/chicos-brasa-tancredo-neves/a882d49d-215e-48c1-b4d1-2d27783d858c?prato=af654a5d-e36b-43db-886f-f6388bfd78c3",
        image: "combo-prime.png"
    },
    {
        id: 5,
        name: "Combo Amigos",
        category: "combos",
        price: 110.90,
        description: "O melhor custo-benefício! 03 Xicos Insanos completos, 03 porções de Batatas Rústicas e 01 Coca-Cola de 2 litros geladinha.",
        ifoodUrl: "https://www.ifood.com.br/delivery/porto-velho-ro/chicos-brasa-tancredo-neves/a882d49d-215e-48c1-b4d1-2d27783d858c?prato=3062c8b1-8b7f-47b8-8b06-e909c4f72bb3",
        image: "combo-amigos.png"
    },
    {
        id: 6,
        name: "Chico Classic",
        category: "burgers",
        price: 28.90,
        description: "Pão brioche selado na manteiga, blend bovino 160g suculento na brasa, queijo prato, alface fresca, tomate e maionese artesanal.",
        ifoodUrl: "https://www.ifood.com.br/delivery/porto-velho-ro/chicos-brasa-tancredo-neves/a882d49d-215e-48c1-b4d1-2d27783d858c?prato=bc7ff6b6-80cc-4e8b-8c02-a14a42e54c83",
        image: "chico-classic.png"
    },
    {
        id: 7,
        name: "Brasa Prime",
        category: "burgers",
        price: 32.90,
        description: "Experiência gourmet com pão brioche, blend bovino 160g na brasa, queijo cheddar derretido, bacon crocante, cebola caramelizada e molho barbecue.",
        ifoodUrl: "https://www.ifood.com.br/delivery/porto-velho-ro/chicos-brasa-tancredo-neves/a882d49d-215e-48c1-b4d1-2d27783d858c?prato=83e074e9-1767-454a-b20c-53bc8e5eab85",
        image: "brasa-prime.png"
    },
    {
        id: 8,
        name: "Chico Insano",
        category: "burgers",
        price: 34.99,
        description: "O burger insano da casa, ultra recheado, sabor defumado marcante com ingredientes de altíssima qualidade.",
        ifoodUrl: "https://www.ifood.com.br/delivery/porto-velho-ro/chicos-brasa-tancredo-neves/a882d49d-215e-48c1-b4d1-2d27783d858c?prato=797f2310-004e-4740-8156-7d3b1daf186c",
        image: "chico-insano.png"
    },
    {
        id: 9,
        name: "Suco Maracujá 500ml",
        category: "bebidas",
        price: 15.00,
        description: "Suco natural feito na hora, super refrescante. Ideal para acompanhar o seu burger na brasa.",
        ifoodUrl: "https://www.ifood.com.br/delivery/porto-velho-ro/chicos-brasa-tancredo-neves/a882d49d-215e-48c1-b4d1-2d27783d858c?prato=a9dcded5-56fd-4bf0-8b4c-944c4f2e8710",
        image: "suco-maracuja.png"
    },
    {
        id: 10,
        name: "Coca Lata",
        category: "bebidas",
        price: 8.00,
        description: "Refrigerante Coca-Cola em lata trincando de gelada.",
        ifoodUrl: "https://www.ifood.com.br/delivery/porto-velho-ro/chicos-brasa-tancredo-neves/a882d49d-215e-48c1-b4d1-2d27783d858c?prato=8bdce751-3b8f-4106-8cf2-6b4a1f77e0d0",
        image: "coca-lata.png"
    },
    {
        id: 11,
        name: "Coca 2l",
        category: "bebidas",
        price: 15.00,
        description: "Perfeita para acompanhar os combos grandes e dividir com a galera.",
        ifoodUrl: "https://www.ifood.com.br/delivery/porto-velho-ro/chicos-brasa-tancredo-neves/a882d49d-215e-48c1-b4d1-2d27783d858c?prato=bc2c0ae4-66b5-4fb8-986f-6a1ba3fe363e",
        image: "coca-2l.png"
    }
];

let cart = {};

// URL de fallback exibida quando a imagem de um item não carrega
const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500&auto=format&fit=crop";

// Formata número para moeda brasileira (mais robusto que .replace('.', ','))
function formatBRL(value) {
    return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// CONFIGURAÇÃO DOS HORÁRIOS DA LOJA (minutos, para facilitar o cálculo)
const storeHours = {
    1: { open: 18 * 60 + 40, close: 23 * 60 },      // Segunda: 18:40 às 23:00
    2: { open: 18 * 60,      close: 23 * 60 },      // Terça: 18:00 às 23:00
    3: { open: 18 * 60,      close: 23 * 60 },      // Quarta: 18:00 às 23:00
    4: { open: 21 * 60 + 28, close: 23 * 60 },      // Quinta: 21:28 às 23:00
    5: { open: 18 * 60 + 26, close: 23 * 60 + 59 }, // Sexta: 18:26 às 23:59
    6: { open: 19 * 60 + 2,  close: 23 * 60 },      // Sábado: 19:02 às 23:00
    0: null                                          // Domingo: Fechado
};

// FUNÇÃO PARA VERIFICAR STATUS COM BASE NO HORÁRIO DE PORTO VELHO (UTC-4)
function checkStoreStatus() {
    const statusBadge = document.getElementById('status-loja');
    if (!statusBadge) return;

    let pvhDate;
    try {
        // Obtém o horário atual formatado para o fuso de Porto Velho
        const pvhDateString = new Date().toLocaleString("en-US", { timeZone: "America/Porto_Velho" });
        pvhDate = new Date(pvhDateString);
        if (isNaN(pvhDate.getTime())) throw new Error("Data inválida");
    } catch (err) {
        // Navegador sem suporte a timeZone: usa o horário local como fallback
        console.warn("Fuso horário America/Porto_Velho indisponível, usando horário local.", err);
        pvhDate = new Date();
    }

    const dayOfWeek = pvhDate.getDay();
    const currentMinutes = pvhDate.getHours() * 60 + pvhDate.getMinutes();

    const todaySchedule = storeHours[dayOfWeek];
    let isOpen = false;

    if (todaySchedule && currentMinutes >= todaySchedule.open && currentMinutes <= todaySchedule.close) {
        isOpen = true;
    }

    // Atualiza a interface gráfica com estilo premium
    statusBadge.innerHTML = isOpen
        ? `<span class="badge-open"><i class="fa-solid fa-circle" aria-hidden="true"></i> ABERTO AGORA</span>`
        : `<span class="badge-closed"><i class="fa-solid fa-circle" aria-hidden="true"></i> FECHADO NO MOMENTO</span>`;

    // Destaca o dia atual na tabela de horários
    const activeDayRow = document.getElementById(`day-${dayOfWeek}`);
    if (activeDayRow) {
        activeDayRow.classList.add('is-today');
    }
}

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

function addToCart(id) {
    const item = menuDatabase.find(i => i.id === id);
    if (!item) return;

    if (cart[id]) {
        cart[id].qty += 1;
    } else {
        cart[id] = { ...item, qty: 1 };
    }
    updateCartUI();

    const modal = document.getElementById('checkout-modal');
    if (modal && modal.classList.contains('open')) {
        renderModalItems();
    }
}

function removeFromCart(id) {
    if (cart[id]) {
        if (cart[id].qty > 1) {
            cart[id].qty -= 1;
        } else {
            delete cart[id];
        }
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
    } else if (cartBar) {
        cartBar.classList.remove('active');
    }
}

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
    cart = {};
    updateCartUI();
    toggleModal(false);
}

// Frases do toast promocional — alternam entre "peça o lanche" e "siga no Insta"
const promoPhrases = [
    "🔥 A brasa tá pegando fogo por aqui! Dá uma fugida pro cardápio e já aproveita pra seguir a gente no Insta.",
    "Seu lanche perfeito tá a um clique de distância. Bora pedir — e de quebra, segue @chicobrasa lá no Instagram? 😉",
    "Psst... o cheirinho de churrasco já tá quase saindo da tela. Corre no cardápio e não esquece de nos seguir!",
    "Hoje o dia pede um burger na brasa. E a gente pede um seguidor novo no Insta. Combinado? 🔥📲",
    "A brasa não espera, e as fotos lá no Insta também não. Vem ver o cardápio e nos seguir @chicobrasa!",
    "Fome batendo? Cardápio aberto. Instagram esperando. Só falta você. 🔥",
    "Ninguém resiste a um Chico Insano quentinho. Dá uma olhada no cardápio e passa lá no nosso Insta!"
];

let lastPromoPhraseIndex = -1;
let promoAutoHideTimer = null;

function pickPromoPhrase() {
    let index;
    do {
        index = Math.floor(Math.random() * promoPhrases.length);
    } while (index === lastPromoPhraseIndex && promoPhrases.length > 1);
    lastPromoPhraseIndex = index;
    return promoPhrases[index];
}

function showPromoToast() {
    const toast = document.getElementById('promo-toast');
    const text = document.getElementById('promo-toast-text');
    if (!toast || !text) return;

    // Não empilha um novo toast em cima de outro já visível
    if (toast.classList.contains('show')) return;

    text.textContent = pickPromoPhrase();
    toast.classList.add('show');

    clearTimeout(promoAutoHideTimer);
    promoAutoHideTimer = setTimeout(hidePromoToast, 3000);
}

function hidePromoToast() {
    const toast = document.getElementById('promo-toast');
    if (!toast) return;
    toast.classList.remove('show');
    clearTimeout(promoAutoHideTimer);
}

function initPromoToast() {
    const closeBtn = document.getElementById('promo-toast-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', hidePromoToast);
    }

    // Fecha o toast automaticamente se o cliente clicar em "Ver cardápio" ou "Seguir"
    document.querySelectorAll('.promo-toast-btn').forEach(btn => {
        btn.addEventListener('click', hidePromoToast);
    });

    // A cada 2 minutos, enquanto a pessoa estiver no site
    setInterval(showPromoToast, 1 * 60 * 1000);
}

// ============================================================
// EVENTOS — tudo via addEventListener/delegação, sem onclick inline no HTML
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
    renderMenu(menuDatabase);
    checkStoreStatus();
    initPromoToast();

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
