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

// CONFIGURAÇÃO DOS HORÁRIOS DA LOJA (Minutos convertidos para facilitar o cálculo)
const storeHours = {
    1: { open: 18*60 + 40, close: 23*60 },      // Segunda: 18:40 às 23:00
    2: { open: 18*60,      close: 23*60 },      // Terça: 18:00 às 23:00
    3: { open: 18*60,      close: 23*60 },      // Quarta: 18:00 às 23:00
    4: { open: 21*60 + 28, close: 23*60 },      // Quinta: 21:28 às 23:00
    5: { open: 18*60 + 26, close: 23*60 + 59 }, // Sexta: 18:26 às 23:59
    6: { open: 19*60 + 2,  close: 23*60 },      // Sábado: 19:02 às 23:00
    0: null                                     // Domingo: Fechado
};

// FUNÇÃO PARA VERIFICAR STATUS COM BASE NO HORÁRIO DE PORTO VELHO (UTC-4)
function checkStoreStatus() {
    const statusBadge = document.getElementById('status-loja');
    if (!statusBadge) return;

    // Obtém o horário atual formatado para o fuso de Porto Velho (America/Porto_Velho)
    const pvhDateString = new Date().toLocaleString("en-US", {timeZone: "America/Porto_Velho"});
    const pvhDate = new Date(pvhDateString);

    const dayOfWeek = pvhDate.getDay(); 
    const currentMinutes = pvhDate.getHours() * 60 + pvhDate.getMinutes();

    const todaySchedule = storeHours[dayOfWeek];
    let isOpen = false;

    if (todaySchedule) {
        // CORREÇÃO BUG 1: Inclusão explícita milimétrica do minuto final de sexta-feira
        if (currentMinutes >= todaySchedule.open && currentMinutes <= todaySchedule.close) {
            isOpen = true;
        }
    }

    // Atualiza a interface gráfica com estilo premium
    if (isOpen) {
        statusBadge.innerHTML = `<span class="badge-open"><i class="fa-solid fa-circle"></i> ABERTO AGORA</span>`;
    } else {
        statusBadge.innerHTML = `<span class="badge-closed"><i class="fa-solid fa-circle"></i> FECHADO NO MOMENTO</span>`;
    }

    // Destaca o dia atual na tabela de horários
    // CORREÇÃO BUG 2: Proteção de escopo para evitar interrupção de Script (TypeError)
    const activeDayRow = document.getElementById(`day-${dayOfWeek}`);
    if (activeDayRow) {
        activeDayRow.style.background = "rgba(230, 161, 92, 0.1)";
        activeDayRow.style.borderLeft = "3px solid var(--accent-gold)";
        activeDayRow.style.paddingLeft = "8px";
    }
}

function renderMenu(items) {
    const grid = document.getElementById('menu-grid');
    if (!grid) return;
    grid.innerHTML = "";

    items.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.className = 'menu-item';
        itemCard.innerHTML = `
            <div class="item-img-container">
                <img src="${item.image}" alt="${item.name}" class="item-img" onerror="this.src='https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500&auto=format&fit=crop'">
            </div>
            <div class="item-content">
                <div>
                    <h3 class="item-title">${item.name}</h3>
                    <p class="item-description">${item.description}</p>
                </div>
                <div class="item-footer">
                    <span class="item-price">R$ ${item.price.toFixed(2).replace('.',',')}</span>
                    <div class="btn-group">
                        <button class="btn-item btn-add-whatsapp" onclick="addToCart(${item.id})">
                            <i class="fa-solid fa-plus"></i> Pedir pelo Whats
                        </button>
                        <a href="${item.ifoodUrl}" target="_blank" class="btn-item btn-ifood">
                            <i class="fa-solid fa-motorcycle"></i> Ver no iFood
                        </a>
                    </div>
                </div>
            </div>
        `;
        grid.appendChild(itemCard);
    });
}

function filterMenu(category, event) {
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
    if(category === 'todos') {
        renderMenu(menuDatabase);
    } else {
        const filtered = menuDatabase.filter(item => item.category === category);
        renderMenu(filtered);
    }
}

function addToCart(id) {
    const item = menuDatabase.find(i => i.id === id);
    if(cart[id]) {
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
        totalPrice += (item.price * item.qty);
    });

    if(totalItems > 0) {
        if (cartBar) cartBar.classList.add('active');
        if (cartCountStr) cartCountStr.innerText = `${totalItems} ${totalItems === 1 ? 'item' : 'itens'}`;
        if (cartTotalStr) cartTotalStr.innerText = totalPrice.toFixed(2).replace('.', ',');
    } else {
        if (cartBar) cartBar.classList.remove('active');
    }
}

function toggleModal(open) {
    const modal = document.getElementById('checkout-modal');
    if(!modal) return;
    if(open) {
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

    Object.values(cart).forEach(item => {
        totalPrice += (item.price * item.qty);
        const row = document.createElement('div');
        row.className = 'modal-item-row';
        row.innerHTML = `
            <div style="flex: 1;">
                <strong>${item.name}</strong> 
                <span style="color:var(--accent-gold)">x${item.qty}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 10px;">
                <span>R$ ${(item.price * item.qty).toFixed(2).replace('.',',')}</span>
                <button onclick="removeFromCart(${item.id})" style="background:#de1212; color:white; border:none; padding:4px 10px; border-radius:6px; cursor:pointer; font-weight:bold;">-</button>
                <button onclick="addToCart(${item.id})" style="background:#28a745; color:white; border:none; padding:4px 10px; border-radius:6px; cursor:pointer; font-weight:bold;">+</button>
            </div>
        `;
        container.appendChild(row);
    });

    if (modalTotalStr) modalTotalStr.innerText = totalPrice.toFixed(2).replace('.', ',');
}

function sendWhatsApp() {
    const phoneNumber = "556992673745"; 
    // CORREÇÃO BUG 3: Alinhamento de branding textual (CHICES -> CHICOS)
    let textMessage = "🔥 *NOVO PEDIDO - CHICOS BRASA* 🔥\n\n";
    let totalPrice = 0;

    Object.values(cart).forEach(item => {
        textMessage += `▪️ *${item.qty}x* ${item.name} (R$ ${(item.price * item.qty).toFixed(2).replace('.',',')})\n`;
        totalPrice += (item.price * item.qty);
    });

    textMessage += `\n💰 *Total do Pedido:* R$ ${totalPrice.toFixed(2).replace('.',',')}\n\n`;
    textMessage += `📍 *Endereço da Loja:* Rua Idalva Fraga Moreira, 3915 - Porto Velho\n`;
    textMessage += `Por favor, confirme meu pedido e envie a chave Pix!`;

    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    cart = {};
    updateCartUI();
    toggleModal(false);
}

document.addEventListener("DOMContentLoaded", () => {
    renderMenu(menuDatabase);
    checkStoreStatus(); // Executa a validação de horário de PVH
});
