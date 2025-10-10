/**
 * CID OC Shop - JavaScriptファイル
 * ショッピングサイトのインタラクティブ機能を実装
 * 
 * 主な機能:
 * - 商品データの管理と表示
 * - ショッピングカート機能
 * - 商品フィルタリング・ソート
 * - モーダル表示
 * - レスポンシブナビゲーション
 */

// ============================================
// グローバル変数・状態管理
// ============================================

/**
 * カートアイテムを保存する配列
 * @type {Array<Object>}
 */
let cart = [];

/**
 * 商品データ配列
 * @type {Array<Object>}
 */
let products = [
    {
        id: 1,
        name: 'モダンワイヤレスイヤホン',
        category: 'electronics',
        price: 12800,
        description: '高音質でノイズキャンセリング機能付き。長時間の使用でも快適な装着感。',
        image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
        badge: 'NEW'
    },
    {
        id: 2,
        name: 'スマートウォッチ Pro',
        category: 'electronics',
        price: 24900,
        description: '健康管理からフィットネストラッキングまで。毎日を快適にサポート。',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
        badge: 'POPULAR'
    },
    {
        id: 3,
        name: 'ミニマルバックパック',
        category: 'fashion',
        price: 8900,
        description: 'シンプルで機能的なデザイン。ビジネスにもカジュアルにも対応。',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop'
    },
    {
        id: 4,
        name: 'デザイナーズTシャツ',
        category: 'fashion',
        price: 4500,
        description: '上質なコットン素材。洗練されたデザインで日常をアップグレード。',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop'
    },
    {
        id: 5,
        name: 'セラミックコーヒーマグ',
        category: 'home',
        price: 2800,
        description: '手作りの温もりを感じる陶器製マグカップ。毎朝のコーヒータイムに。',
        image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop'
    },
    {
        id: 6,
        name: 'モダンデスクランプ',
        category: 'home',
        price: 6700,
        description: '調光機能付きのスタイリッシュなデスクランプ。作業効率を向上。',
        image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=400&fit=crop'
    },
    {
        id: 7,
        name: 'ヨガマット プレミアム',
        category: 'sports',
        price: 5400,
        description: '厚手でクッション性抜群。滑り止め加工で安全にヨガを楽しめます。',
        image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop'
    },
    {
        id: 8,
        name: 'ランニングシューズ',
        category: 'sports',
        price: 11200,
        description: '軽量で通気性に優れた設計。長距離ランニングにも最適。',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
        badge: 'SALE'
    },
    {
        id: 9,
        name: 'メカニカルキーボード',
        category: 'electronics',
        price: 15800,
        description: '打鍵感が心地よいメカニカルスイッチ採用。作業効率を大幅アップ。',
        image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop'
    },
    {
        id: 10,
        name: 'レザーウォレット',
        category: 'fashion',
        price: 7800,
        description: '本革を使用した高級感あふれる財布。使うほどに味が出ます。',
        image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop'
    },
    {
        id: 11,
        name: 'アロマディフューザー',
        category: 'home',
        price: 4200,
        description: '静音設計でリラックス空間を演出。LED照明付き。',
        image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop'
    },
    {
        id: 12,
        name: 'フィットネスダンベルセット',
        category: 'sports',
        price: 8900,
        description: '自宅でのトレーニングに最適。重量調整可能な2個セット。',
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=400&fit=crop'
    },
    {
        id: 13,
        name: 'ワイヤレスマウス',
        category: 'electronics',
        price: 3800,
        description: 'エルゴノミクスデザインで長時間の作業も快適。静音クリック採用。',
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop'
    },
    {
        id: 14,
        name: 'ポータブルBluetoothスピーカー',
        category: 'electronics',
        price: 6900,
        description: '防水仕様で屋外でも安心。重低音サウンドを楽しめる高性能スピーカー。',
        image: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=400&h=400&fit=crop',
        badge: 'POPULAR'
    },
    {
        id: 15,
        name: 'タブレットスタンド',
        category: 'electronics',
        price: 2400,
        description: 'アルミニウム製の安定感抜群なスタンド。角度調整可能で様々な用途に。',
        image: 'https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=400&h=400&fit=crop'
    },
    {
        id: 16,
        name: 'USB急速充電器',
        category: 'electronics',
        price: 3200,
        description: '複数デバイス同時充電対応。コンパクトで持ち運びに便利。',
        image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&h=400&fit=crop'
    },
    {
        id: 17,
        name: 'デザイナーズサングラス',
        category: 'fashion',
        price: 9800,
        description: 'UV400カットレンズ採用。洗練されたデザインで顔立ちを引き立てます。',
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop',
        badge: 'NEW'
    },
    {
        id: 18,
        name: 'ニットビーニー',
        category: 'fashion',
        price: 3600,
        description: '柔らかなウール素材。シンプルで合わせやすい冬の定番アイテム。',
        image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=400&h=400&fit=crop'
    },
    {
        id: 19,
        name: 'レザーベルト',
        category: 'fashion',
        price: 5400,
        description: 'イタリア製本革使用。ビジネスシーンにも最適な上質なベルト。',
        image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=400&h=400&fit=crop'
    },
    {
        id: 20,
        name: 'キャンバススニーカー',
        category: 'fashion',
        price: 6800,
        description: 'クラシックなデザインで長く愛用できる。快適な履き心地。',
        image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop'
    },
    {
        id: 21,
        name: 'セラミック植木鉢セット',
        category: 'home',
        price: 4800,
        description: 'モダンなデザインの3個セット。観葉植物を美しく飾れます。',
        image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop'
    },
    {
        id: 22,
        name: 'ミニマル壁掛け時計',
        category: 'home',
        price: 5600,
        description: 'シンプルで読みやすいデザイン。静音ムーブメント採用。',
        image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400&h=400&fit=crop'
    },
    {
        id: 23,
        name: 'ベルベットクッション',
        category: 'home',
        price: 3400,
        description: '高級感のあるベルベット素材。ソファやベッドのアクセントに。',
        image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400&h=400&fit=crop'
    },
    {
        id: 24,
        name: 'アロマキャンドルセット',
        category: 'home',
        price: 4500,
        description: '天然素材使用の3種類セット。癒しの香りで心地よい空間を。',
        image: 'https://images.unsplash.com/photo-1510380410676-6c5dcbcf954e?w=400&h=400&fit=crop',
        badge: 'POPULAR'
    },
    {
        id: 25,
        name: 'ステンレスウォーターボトル',
        category: 'sports',
        price: 3800,
        description: '保温・保冷機能付き。24時間温度キープ。環境に優しい選択。',
        image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop'
    },
    {
        id: 26,
        name: 'トレーニンググローブ',
        category: 'sports',
        price: 2800,
        description: '手のひら保護とグリップ力向上。ウエイトトレーニングに最適。',
        image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=400&h=400&fit=crop'
    },
    {
        id: 27,
        name: 'レジスタンスバンドセット',
        category: 'sports',
        price: 3200,
        description: '5段階の強度セット。自宅で効果的なトレーニングが可能。',
        image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop',
        badge: 'NEW'
    },
    {
        id: 28,
        name: 'マイクロファイバースポーツタオル',
        category: 'sports',
        price: 2200,
        description: '速乾性抜群で持ち運びに便利。ジムやアウトドアに最適。',
        image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=400&fit=crop'
    }
];

/**
 * 現在のフィルター設定を保存
 * @type {Object}
 */
let currentFilters = {
    category: 'all',
    sort: 'default'
};

// ============================================
// 初期化処理
// ============================================

/**
 * ページ読み込み時の初期化処理
 */
document.addEventListener('DOMContentLoaded', () => {
    // 商品を表示
    displayProducts(products);
    
    // カートをローカルストレージから読み込み
    loadCartFromStorage();
    
    // イベントリスナーの設定
    setupEventListeners();
    
    // ナビゲーションのスクロール効果
    setupScrollEffects();
});

// ============================================
// 商品表示機能
// ============================================

/**
 * 商品を画面に表示する関数
 * @param {Array<Object>} productsToDisplay - 表示する商品の配列
 */
function displayProducts(productsToDisplay) {
    const productsGrid = document.getElementById('productsGrid');
    
    // グリッドをクリア
    productsGrid.innerHTML = '';
    
    // 商品が見つからない場合
    if (productsToDisplay.length === 0) {
        productsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 4rem; color: var(--color-gray-medium);">該当する商品が見つかりませんでした。</p>';
        return;
    }
    
    // 各商品のカードを生成
    productsToDisplay.forEach((product, index) => {
        const productCard = createProductCard(product, index);
        productsGrid.appendChild(productCard);
    });
}

/**
 * 商品カード要素を生成する関数
 * @param {Object} product - 商品オブジェクト
 * @param {number} index - アニメーション用のインデックス
 * @returns {HTMLElement} 商品カード要素
 */
function createProductCard(product, index) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    // カードをクリックすると商品詳細を表示
    card.addEventListener('click', (e) => {
        // 「カートに追加」ボタンのクリックは除外
        if (!e.target.closest('.add-to-cart-button')) {
            showProductDetail(product);
        }
    });
    
    card.innerHTML = `
        <div class="product-image-wrapper">
            <img src="${product.image}" 
                 alt="${product.name}" 
                 class="product-image"
                 onerror="this.style.display='none';"
                 onload="this.style.zIndex='1';">
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
        </div>
        <div class="product-info">
            <div class="product-category">${getCategoryName(product.category)}</div>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-footer">
                <span class="product-price">¥${product.price.toLocaleString()}</span>
                <button class="add-to-cart-button" onclick="addToCart(${product.id}); event.stopPropagation();">
                    カートに追加
                </button>
            </div>
        </div>
    `;
    
    return card;
}

/**
 * カテゴリーIDから日本語名を取得
 * @param {string} categoryId - カテゴリーID
 * @returns {string} カテゴリーの日本語名
 */
function getCategoryName(categoryId) {
    const categories = {
        'electronics': '電子機器',
        'fashion': 'ファッション',
        'home': 'ホーム＆リビング',
        'sports': 'スポーツ'
    };
    return categories[categoryId] || categoryId;
}

// ============================================
// フィルタリング・ソート機能
// ============================================

/**
 * 商品をフィルタリングする関数
 * @param {string} category - フィルターするカテゴリー
 */
function filterProducts(category) {
    currentFilters.category = category;
    applyFiltersAndSort();
}

/**
 * 商品をソートする関数
 * @param {string} sortType - ソートの種類
 */
function sortProducts(sortType) {
    currentFilters.sort = sortType;
    applyFiltersAndSort();
}

/**
 * フィルターとソートを適用して商品を表示
 */
function applyFiltersAndSort() {
    let filteredProducts = [...products];
    
    // カテゴリーフィルター適用
    if (currentFilters.category !== 'all') {
        filteredProducts = filteredProducts.filter(
            product => product.category === currentFilters.category
        );
    }
    
    // ソート適用
    switch (currentFilters.sort) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name, 'ja'));
            break;
        default:
            // デフォルトはそのまま（おすすめ順）
            break;
    }
    
    displayProducts(filteredProducts);
}

// ============================================
// カート機能
// ============================================

/**
 * 商品をカートに追加する関数
 * @param {number} productId - 追加する商品のID
 */
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // カート内に同じ商品があるか確認
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        // 既に存在する場合は数量を増やす
        existingItem.quantity += 1;
    } else {
        // 新規追加
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    // UIを更新
    updateCartUI();
    
    // ローカルストレージに保存
    saveCartToStorage();
    
    // フィードバックアニメーション
    showAddToCartFeedback();
}

/**
 * カートからアイテムを削除する関数
 * @param {number} productId - 削除する商品のID
 */
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    saveCartToStorage();
}

/**
 * カート内のアイテム数量を更新する関数
 * @param {number} productId - 商品ID
 * @param {number} change - 数量の変化（+1 or -1）
 */
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    // 数量が0以下になったら削除
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        updateCartUI();
        saveCartToStorage();
    }
}

/**
 * カートUIを更新する関数
 */
function updateCartUI() {
    // カート数を更新
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // カートアイテムを表示
    const cartItemsContainer = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="cart-empty">カートは空です</div>';
    } else {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">¥${item.price.toLocaleString()}</div>
                    <div class="cart-item-actions">
                        <button class="quantity-button" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-button" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <button class="remove-button" onclick="removeFromCart(${item.id})">削除</button>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // 合計金額を更新
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('cartTotal').textContent = `¥${total.toLocaleString()}`;
}

/**
 * カートをローカルストレージに保存
 */
function saveCartToStorage() {
    localStorage.setItem('cidOcShopCart', JSON.stringify(cart));
}

/**
 * カートをローカルストレージから読み込み
 */
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('cidOcShopCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}

/**
 * カート追加のフィードバックアニメーション
 */
function showAddToCartFeedback() {
    const cartButton = document.getElementById('cartButton');
    cartButton.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartButton.style.transform = 'scale(1)';
    }, 200);
}

// ============================================
// モーダル機能
// ============================================

/**
 * 商品詳細モーダルを表示する関数
 * @param {Object} product - 表示する商品オブジェクト
 */
function showProductDetail(product) {
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('productModalBody');
    
    modalBody.innerHTML = `
        <div class="product-detail">
            <img src="${product.image}" alt="${product.name}" class="product-detail-image">
            <div class="product-detail-info">
                <div class="product-detail-category">${getCategoryName(product.category)}</div>
                <h2>${product.name}</h2>
                <div class="product-detail-price">¥${product.price.toLocaleString()}</div>
                <p class="product-detail-description">${product.description}</p>
                <button class="product-detail-button" onclick="addToCart(${product.id}); closeProductModal();">
                    カートに追加
                </button>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // スクロールを無効化
}

/**
 * 商品詳細モーダルを閉じる関数
 */
function closeProductModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('active');
    document.body.style.overflow = ''; // スクロールを有効化
}

/**
 * カートモーダルを開く関数
 */
function openCartModal() {
    const modal = document.getElementById('cartModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

/**
 * カートモーダルを閉じる関数
 */
function closeCartModal() {
    const modal = document.getElementById('cartModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================
// イベントリスナー設定
// ============================================

/**
 * 各種イベントリスナーを設定する関数
 */
function setupEventListeners() {
    // カートボタンのクリック
    document.getElementById('cartButton').addEventListener('click', openCartModal);
    
    // カートモーダルを閉じる
    document.getElementById('closeCartButton').addEventListener('click', closeCartModal);
    
    // 商品詳細モーダルを閉じる
    document.getElementById('closeProductModal').addEventListener('click', closeProductModal);
    
    // モーダルの背景をクリックして閉じる
    document.getElementById('cartModal').addEventListener('click', (e) => {
        if (e.target.id === 'cartModal') {
            closeCartModal();
        }
    });
    
    document.getElementById('productModal').addEventListener('click', (e) => {
        if (e.target.id === 'productModal') {
            closeProductModal();
        }
    });
    
    // カテゴリーフィルター
    document.getElementById('categoryFilter').addEventListener('change', (e) => {
        filterProducts(e.target.value);
    });
    
    // ソートフィルター
    document.getElementById('sortFilter').addEventListener('change', (e) => {
        sortProducts(e.target.value);
    });
    
    // モバイルメニューボタン
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const navMenu = document.querySelector('.nav-menu');
    
    mobileMenuButton.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuButton.classList.toggle('active');
    });
    
    // ESCキーでモーダルを閉じる
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCartModal();
            closeProductModal();
        }
    });
}

// ============================================
// スクロールエフェクト
// ============================================

/**
 * スクロール時のナビゲーション効果を設定
 */
function setupScrollEffects() {
    let lastScroll = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // スクロールダウン時にヘッダーを少し透明に
        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)';
        }
        
        lastScroll = currentScroll;
    });
}

// ============================================
// ユーティリティ関数
// ============================================

/**
 * 数値を通貨フォーマットに変換
 * @param {number} amount - 金額
 * @returns {string} フォーマットされた金額
 */
function formatCurrency(amount) {
    return `¥${amount.toLocaleString('ja-JP')}`;
}

/**
 * コンソールにウェルカムメッセージを表示（遊び心）
 */
console.log('%c🛒 CID OC Shop へようこそ！', 'color: #000; font-size: 20px; font-weight: bold;');
console.log('%c開発者の方へ: このサイトはモダンなJavaScriptで構築されています。', 'color: #666; font-size: 14px;');
console.log('%cコードを見ていただきありがとうございます！ 😊', 'color: #999; font-size: 12px;');

