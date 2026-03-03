/* ============================================================
   MyFood – Shared App State & Utilities
   ============================================================ */

// ── Data ──────────────────────────────────────────────────
const RESTAURANTS = [
    {
        id: 1, name: "Spice Garden", cuisine: "Indian · Biryani · Curry",
        rating: 4.7, reviews: 2341, time: "28–38 min", distance: "1.2 km",
        minOrder: 150, deliveryFee: 30, img: "images/r1.jpg",
        tags: ["Top Rated", "Pure Veg"], open: true
    },
    {
        id: 2, name: "Burger Factory", cuisine: "American · Burgers · Fries",
        rating: 4.5, reviews: 1892, time: "20–30 min", distance: "0.8 km",
        minOrder: 100, deliveryFee: 25, img: "images/r2.jpg",
        tags: ["Best Seller"], open: true
    },
    {
        id: 3, name: "Pizza Palace", cuisine: "Italian · Pizza · Pasta",
        rating: 4.6, reviews: 3102, time: "25–35 min", distance: "1.5 km",
        minOrder: 200, deliveryFee: 0, img: "images/r3.jpg",
        tags: ["Free Delivery", "Trending"], open: true
    },
    {
        id: 4, name: "Sushi World", cuisine: "Japanese · Sushi · Ramen",
        rating: 4.8, reviews: 987, time: "35–45 min", distance: "2.1 km",
        minOrder: 300, deliveryFee: 50, img: "images/r4.jpg",
        tags: ["Premium"], open: true
    },
    {
        id: 5, name: "Dragon Wok", cuisine: "Chinese · Noodles · Dim Sum",
        rating: 4.3, reviews: 1456, time: "30–40 min", distance: "1.8 km",
        minOrder: 120, deliveryFee: 30, img: "images/r5.jpg",
        tags: [], open: true
    },
    {
        id: 6, name: "Sweet Cravings", cuisine: "Desserts · Cakes · Ice Cream",
        rating: 4.9, reviews: 765, time: "15–25 min", distance: "0.5 km",
        minOrder: 80, deliveryFee: 20, img: "images/r6.jpg",
        tags: ["New", "Top Rated"], open: true
    }
];

const MENUS = {
    1: {
        name: "Spice Garden",
        coverImg: "images/r1.jpg",
        categories: [
            {
                name: "Starters", items: [
                    { id: 101, name: "Paneer Tikka", desc: "Marinated cottage cheese grilled in tandoor with spices", price: 220, img: "images/f1.jpg", veg: true, popular: true },
                    { id: 102, name: "Chicken 65", desc: "Deep fried spicy chicken with curry leaves", price: 260, img: "images/f2.jpg", veg: false, popular: false },
                    { id: 103, name: "Veg Spring Rolls", desc: "Crispy rolls stuffed with seasoned vegetables", price: 180, img: "images/f3.jpg", veg: true, popular: false }
                ]
            },
            {
                name: "Mains", items: [
                    { id: 104, name: "Chicken Biryani", desc: "Fragrant basmati rice with tender chicken & aromatic spices", price: 320, img: "images/f4.jpg", veg: false, popular: true },
                    { id: 105, name: "Paneer Butter Masala", desc: "Rich tomato-based gravy with soft paneer cubes", price: 280, img: "images/f5.jpg", veg: true, popular: true },
                    { id: 106, name: "Dal Makhani", desc: "Slow-cooked black lentils in butter and cream", price: 240, img: "images/f6.jpg", veg: true, popular: false }
                ]
            },
            {
                name: "Breads", items: [
                    { id: 107, name: "Garlic Naan", desc: "Leavened bread with garlic butter, baked in tandoor", price: 60, img: "images/f7.jpg", veg: true, popular: false },
                    { id: 108, name: "Laccha Paratha", desc: "Flaky layered whole wheat bread", price: 50, img: "images/f8.jpg", veg: true, popular: false }
                ]
            },
            {
                name: "Desserts", items: [
                    { id: 109, name: "Gulab Jamun", desc: "Soft milk-solid dumplings in rose sugar syrup", price: 90, img: "images/f9.jpg", veg: true, popular: false },
                    { id: 110, name: "Kulfi Falooda", desc: "Traditional Indian ice cream with vermicelli & rose syrup", price: 120, img: "images/f10.jpg", veg: true, popular: true }
                ]
            }
        ]
    },
    2: {
        name: "Burger Factory",
        coverImg: "images/r2.jpg",
        categories: [
            {
                name: "Burgers", items: [
                    { id: 201, name: "Classic Cheeseburger", desc: "Juicy beef patty with cheddar, lettuce and tomato", price: 189, img: "images/f2.jpg", veg: false, popular: true },
                    { id: 202, name: "Crispy Chicken Burger", desc: "Buttermilk-fried chicken with coleslaw and pickles", price: 199, img: "images/f3.jpg", veg: false, popular: true },
                    { id: 203, name: "Veggie Supreme", desc: "Black bean patty with avocado and sriracha mayo", price: 169, img: "images/f1.jpg", veg: true, popular: false }
                ]
            },
            {
                name: "Sides", items: [
                    { id: 204, name: "Loaded Fries", desc: "Crispy fries topped with cheese sauce and jalapeños", price: 119, img: "images/f6.jpg", veg: true, popular: false },
                    { id: 205, name: "Onion Rings", desc: "Golden fried onion rings with dipping sauce", price: 99, img: "images/f7.jpg", veg: true, popular: false }
                ]
            },
            {
                name: "Drinks", items: [
                    { id: 206, name: "Chocolate Shake", desc: "Thick creamy milkshake with whipped cream", price: 149, img: "images/f10.jpg", veg: true, popular: true },
                    { id: 207, name: "Lemonade", desc: "Fresh-squeezed lemonade with mint", price: 79, img: "images/f9.jpg", veg: true, popular: false }
                ]
            }
        ]
    },
    3: {
        name: "Pizza Palace",
        coverImg: "images/r3.jpg",
        categories: [
            {
                name: "Pizzas", items: [
                    { id: 301, name: "Margherita", desc: "Classic tomato sauce with mozzarella and fresh basil", price: 299, img: "images/f4.jpg", veg: true, popular: true },
                    { id: 302, name: "Pepperoni Blast", desc: "Loaded with spicy pepperoni and extra cheese", price: 399, img: "images/f5.jpg", veg: false, popular: true },
                    { id: 303, name: "BBQ Chicken", desc: "Smoky BBQ sauce with grilled chicken and red onions", price: 379, img: "images/f8.jpg", veg: false, popular: false }
                ]
            },
            {
                name: "Pasta", items: [
                    { id: 304, name: "Pasta Arrabiata", desc: "Penne in spicy tomato sauce with garlic", price: 249, img: "images/f1.jpg", veg: true, popular: false },
                    { id: 305, name: "Pasta Carbonara", desc: "Creamy sauce with bacon and parmesan", price: 299, img: "images/f2.jpg", veg: false, popular: false }
                ]
            }
        ]
    },
    4: {
        name: "Sushi World",
        coverImg: "images/r4.jpg",
        categories: [
            {
                name: "Sushi Rolls", items: [
                    { id: 401, name: "California Roll", desc: "Crab, avocado and cucumber wrapped in sushi rice", price: 380, img: "images/f3.jpg", veg: false, popular: true },
                    { id: 402, name: "Dragon Roll", desc: "Prawn tempura inside, avocado on top", price: 450, img: "images/f4.jpg", veg: false, popular: true },
                    { id: 403, name: "Veggie Roll", desc: "Cucumber, avocado and pickled radish", price: 320, img: "images/f5.jpg", veg: true, popular: false }
                ]
            },
            {
                name: "Ramen", items: [
                    { id: 404, name: "Tonkotsu Ramen", desc: "Rich pork bone broth with chashu, soft egg and nori", price: 420, img: "images/f6.jpg", veg: false, popular: true },
                    { id: 405, name: "Shoyu Ramen", desc: "Clear soy-based broth with noodles and bamboo shoots", price: 380, img: "images/f7.jpg", veg: false, popular: false }
                ]
            }
        ]
    },
    5: {
        name: "Dragon Wok",
        coverImg: "images/r5.jpg",
        categories: [
            {
                name: "Noodles", items: [
                    { id: 501, name: "Hakka Noodles", desc: "Stir-fried noodles with mixed vegetables", price: 180, img: "images/f1.jpg", veg: true, popular: true },
                    { id: 502, name: "Chow Mein", desc: "Classic Chinese noodles with egg and soy sauce", price: 200, img: "images/f2.jpg", veg: false, popular: false }
                ]
            },
            {
                name: "Dim Sum", items: [
                    { id: 503, name: "Steamed Momos", desc: "Soft dumplings stuffed with veggies and cheese", price: 160, img: "images/f3.jpg", veg: true, popular: true },
                    { id: 504, name: "Prawn Har Gow", desc: "Translucent steamed prawn dumplings", price: 240, img: "images/f4.jpg", veg: false, popular: false }
                ]
            }
        ]
    },
    6: {
        name: "Sweet Cravings",
        coverImg: "images/r6.jpg",
        categories: [
            {
                name: "Cakes", items: [
                    { id: 601, name: "Chocolate Lava Cake", desc: "Warm chocolate cake with molten centre", price: 180, img: "images/f9.jpg", veg: true, popular: true },
                    { id: 602, name: "Cheesecake Slice", desc: "New York style baked cheesecake with berry compote", price: 220, img: "images/f10.jpg", veg: true, popular: true }
                ]
            },
            {
                name: "Ice Cream", items: [
                    { id: 603, name: "Belgian Waffle Sundae", desc: "Crispy waffle with 3 ice cream scoops and chocolate drizzle", price: 200, img: "images/f5.jpg", veg: true, popular: true },
                    { id: 604, name: "Mango Sorbet", desc: "Refreshing mango sorbet, dairy-free", price: 120, img: "images/f8.jpg", veg: true, popular: false }
                ]
            }
        ]
    }
};

// ── Cart ──────────────────────────────────────────────────
const Cart = {
    get() {
        try { return JSON.parse(localStorage.getItem('myfood_cart') || '[]'); }
        catch { return []; }
    },
    save(cart) {
        localStorage.setItem('myfood_cart', JSON.stringify(cart));
        Cart.updateBadge();
    },
    add(item, restaurantId, restaurantName) {
        let cart = Cart.get();
        // If different restaurant, ask to replace
        if (cart.length > 0 && cart[0].restaurantId !== restaurantId) {
            if (!confirm(`Your cart has items from ${cart[0].restaurantName}. Clear cart and add from ${restaurantName}?`)) return false;
            cart = [];
        }
        const existing = cart.find(c => c.id === item.id);
        if (existing) {
            existing.qty += 1;
        } else {
            cart.push({ ...item, qty: 1, restaurantId, restaurantName });
        }
        Cart.save(cart);
        Toast.show(`${item.name} added to cart 🛒`, 'success');
        return true;
    },
    remove(itemId) {
        let cart = Cart.get().filter(c => c.id !== itemId);
        Cart.save(cart);
    },
    updateQty(itemId, qty) {
        let cart = Cart.get();
        if (qty <= 0) {
            cart = cart.filter(c => c.id !== itemId);
        } else {
            const item = cart.find(c => c.id === itemId);
            if (item) item.qty = qty;
        }
        Cart.save(cart);
    },
    clear() {
        localStorage.removeItem('myfood_cart');
        Cart.updateBadge();
    },
    getCount() {
        return Cart.get().reduce((s, c) => s + c.qty, 0);
    },
    getTotal() {
        return Cart.get().reduce((s, c) => s + c.price * c.qty, 0);
    },
    updateBadge() {
        const badge = document.getElementById('cartBadge');
        if (!badge) return;
        const count = Cart.getCount();
        badge.textContent = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
    }
};

// ── User / Session ────────────────────────────────────────
const User = {
    get() {
        try { return JSON.parse(localStorage.getItem('myfood_user') || 'null'); }
        catch { return null; }
    },
    save(user) { localStorage.setItem('myfood_user', JSON.stringify(user)); },
    getDefault() {
        return { name: 'Hari Kumar', email: 'hari@example.com', phone: '+91 98765 43210', avatar: 'H', address: '42, MG Road, Bengaluru' };
    },
    init() {
        if (!User.get()) User.save(User.getDefault());
        const user = User.get();
        const avatarBtns = document.querySelectorAll('.avatar-btn');
        avatarBtns.forEach(btn => {
            btn.textContent = user.avatar || user.name[0].toUpperCase();
            btn.title = user.name;
        });
    }
};

// ── Orders ────────────────────────────────────────────────
const Orders = {
    get() {
        try { return JSON.parse(localStorage.getItem('myfood_orders') || '[]'); }
        catch { return []; }
    },
    save(orders) { localStorage.setItem('myfood_orders', JSON.stringify(orders)); },
    add(order) {
        const orders = Orders.get();
        orders.unshift({ ...order, id: 'ORD' + Date.now(), date: new Date().toISOString() });
        Orders.save(orders);
        return orders[0].id;
    }
};

// ── Toast ─────────────────────────────────────────────────
const Toast = {
    container: null,
    init() {
        if (Toast.container) return;
        Toast.container = document.createElement('div');
        Toast.container.className = 'toast-container';
        document.body.appendChild(Toast.container);
    },
    show(msg, type = '') {
        Toast.init();
        const t = document.createElement('div');
        t.className = `toast ${type}`;
        t.textContent = msg;
        Toast.container.appendChild(t);
        setTimeout(() => {
            t.style.animation = 'toastOut 0.3s ease both';
            setTimeout(() => t.remove(), 300);
        }, 2800);
    }
};

// ── Helpers ───────────────────────────────────────────────
function formatPrice(p) { return '₹' + p.toLocaleString('en-IN'); }
function getRestaurant(id) { return RESTAURANTS.find(r => r.id == id); }
function getMenu(id) { return MENUS[id]; }

function navigate(url) { window.location.href = url; }

// ── Init ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    Cart.updateBadge();
    User.init();

    // Cart icon nav
    document.querySelectorAll('[data-nav="cart"]').forEach(el => {
        el.addEventListener('click', () => navigate('cart.html'));
    });
    document.querySelectorAll('[data-nav="profile"]').forEach(el => {
        el.addEventListener('click', () => navigate('profile.html'));
    });
    document.querySelectorAll('[data-nav="home"]').forEach(el => {
        el.addEventListener('click', () => navigate('index.html'));
    });
    document.querySelectorAll('[data-nav="track"]').forEach(el => {
        el.addEventListener('click', () => navigate('tracking.html'));
    });
});
