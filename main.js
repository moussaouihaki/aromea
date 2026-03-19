const productGrid = document.getElementById('productGrid');
const categoryFilter = document.getElementById('categoryFilter');
const modal = document.getElementById('productModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.close-modal');

let allProducts = [];

async function loadProducts() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        
        // Flatten the data for easier filtering
        allProducts = data.flatMap(cat => cat.products.map(p => ({ ...p, category: cat.category })));
        
        renderCategories(data);
        renderProducts(allProducts);
    } catch (error) {
        console.error('Erreur lors du chargement des produits:', error);
    }
}

function renderCategories(categories) {
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.classList.add('filter-btn');
        btn.textContent = cat.category;
        btn.dataset.category = cat.category;
        btn.addEventListener('click', () => filterByCategory(cat.category, btn));
        categoryFilter.appendChild(btn);
    });
}

function renderProducts(products) {
    productGrid.innerHTML = '';
    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <div class="product-category">${product.category}</div>
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <a href="#" class="btn btn-outline" style="margin-top:auto; width: 100%;">En savoir plus</a>
        `;
        card.addEventListener('click', (e) => {
            e.preventDefault();
            openProduct(product);
        });
        productGrid.appendChild(card);
    });
}

function filterByCategory(category, btn) {
    // UI update
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Filtering logic
    if (category === 'all') {
        renderProducts(allProducts);
    } else {
        const filtered = allProducts.filter(p => p.category === category);
        renderProducts(filtered);
    }
}

// Reset filter
document.querySelector('[data-category="all"]').addEventListener('click', (e) => {
    filterByCategory('all', e.target);
});

function openProduct(product) {
    modalBody.innerHTML = `
        <div class="modal-img">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="modal-info">
            <div class="product-category">${product.category}</div>
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <div class="modal-cta">
                <a href="mailto:hello@aromea.com?subject=Demande de devis: ${product.name}" class="btn btn-primary">Demander un Devis</a>
            </div>
        </div>
    `;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Stop scrolling
}

closeModal.onclick = () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Resume scrolling
};

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};

loadProducts();
