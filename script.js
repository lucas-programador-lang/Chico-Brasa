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

// Estado global do carrinho
let cart = {};

// Função para renderizar os itens do menu
function renderMenu(items) {
    const grid = document.getElementById('menu-grid');
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

// Filtros das Abas do Cardápio
function filterMenu(category) {
    // Altera classe ativa do botão
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    if(category === 'todos') {
        renderMenu(menuDatabase);
    } else {
        const filtered = menuDatabase.filter(item => item.category === category);
        renderMenu(filtered);
    }
}

// Lógica Funcional do Carrinho
function addToCart(id) {
    const item = menuDatabase.find(i => i.id === id);
    if(cart[id]) {
        cart[id].qty += 1;
    } else {
        cart[id] = { ...item, qty: 1 };
    }
    updateCartUI();
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
        cartBar.classList.add('active');
        cartCountStr.innerText = `${totalItems} ${totalItems === 1 ? 'item' : 'itens'}`;
        cartTotalStr.innerText = totalPrice.toFixed(2).replace('.', ',');
    } else {
        cartBar.classList.remove('active');
    }
}

// Controle do Modal de Checkout
function toggleModal(open) {
    const modal = document.getElementById('checkout-modal');
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
    container.innerHTML = "";
    
    let totalPrice = 0;

    Object.values(cart).forEach(item => {
        totalPrice += (item.price * item.qty);
        const row = document.createElement('div');
        row.className = 'modal-item-row';
        row.innerHTML = `
            <div>
                <strong>${item.name}</strong> <span style="color:var(--primary-orange)">x${item.qty}</span>
            </div>
            <div>
                R$ ${(item.price * item.qty).toFixed(2).replace('.',',')}
            </div>
        `;
        container.appendChild(row);
    });

    modalTotalStr.innerText = totalPrice.toFixed(2).replace('.', ',');
}

// Integração com a API do WhatsApp para Envio Automatizado
function sendWhatsApp() {
    const phoneNumber = "556992673745"; // Número formatado
    let textMessage = "🔥 *NOVO PEDIDO - CHICOS BRASA* 🔥\n\n";
    let totalPrice = 0;

    Object.values(cart).forEach(item => {
        textMessage += `▪️ *${item.qty}x* ${item.name} (R$ ${(item.price * item.qty).toFixed(2).replace('.',',')})\n`;
        totalPrice += (item.price * item.qty);
    });

    textMessage += `\n💰 *Total do Pedido:* R$ ${totalPrice.toFixed(2).replace('.',',')}\n\n`;
    textMessage += `📍 *Endereço da Loja:* Rua Idalva Fraga Moreira, 3915 - Porto Velho\n`;
    textMessage += `Por favor, confirme meu pedido e envie a chave Pix/Opções de pagamento!`;

    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    
    // Abre o WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Limpa carrinho após envio
    cart = {};
    updateCartUI();
    toggleModal(false);
}

// Inicialização da Página
document.addEventListener("DOMContentLoaded", () => {
    renderMenu(menuDatabase);
});
