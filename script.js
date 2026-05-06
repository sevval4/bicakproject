// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Product Database
const products = {
    obsidian: {
        title: "Obsidian Şef Bıçağı",
        desc: "Mutfağın hakimi olmak isteyenler için tasarlandı. 67 katmanlı gerçek Şam çeliği bıçağı, hem keskinliğini yıllarca korur hem de göz alıcı bir estetiğe sahiptir. Abanoz ağacı sap, denge ve ergonomiyi mükemmelleştirir.",
        img: "assets/knife_obsidian_1778055226538.png",
        specs: {
            steel: "Şam Çeliği (VG-10 Çekirdek)",
            hardness: "60-62 HRC",
            handle: "Abanoz Ağacı",
            length: "33 cm (20 cm Namlu)"
        }
    },
    copper: {
        title: "Bakır Vadisi Katlanır Çakı",
        desc: "Günlük taşıma (EDC) için üst düzey bir seçenek. Eskitilmiş bakır detayları ve koyu ceviz sapıyla hem maskülen hem de zarif. Cepte rahat taşınırken, zorlu kesim işlemlerinde bile güven verir.",
        img: "assets/knife_copper_1778055294335.png",
        specs: {
            steel: "S35VN Premium Paslanmaz",
            hardness: "59-61 HRC",
            handle: "Ceviz Ağacı & Bakır",
            length: "19 cm (Açık)"
        }
    },
    carbon: {
        title: "Karbon Gölge Taktik Bıçak",
        desc: "Doğa tutkunları ve taktiksel kullanım için hafif ama yok edilemez bir tasarım. Mat karbon fiber sapı, zorlu ıslak koşullarda bile mükemmel tutuş sağlar. Siyah kaplama bıçağı yansımayı önler.",
        img: "assets/knife_carbon_1778055422591.png",
        specs: {
            steel: "D2 Yüksek Karbon",
            hardness: "58-60 HRC",
            handle: "Mat Karbon Fiber",
            length: "25 cm (12 cm Namlu)"
        }
    }
};

// Modal Logic
const modal = document.getElementById('productModal');

function openModal(productId) {
    const product = products[productId];
    if (!product) return;

    document.getElementById('modalTitle').textContent = product.title;
    document.getElementById('modalDesc').textContent = product.desc;
    document.getElementById('modalImg').src = product.img;
    
    document.getElementById('specSteel').textContent = product.specs.steel;
    document.getElementById('specHardness').textContent = product.specs.hardness;
    document.getElementById('specHandle').textContent = product.specs.handle;
    document.getElementById('specLength').textContent = product.specs.length;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});
