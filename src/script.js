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
 * 現在のページ名を保存
 * @type {string}
 */
let currentPage = 'home';

/**
 * 現在の決済ステップ
 * @type {number}
 */
let currentCheckoutStep = 1;

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
        name: 'シンプルなTシャツ',
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
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxb7Rl_8VReMm4MKUUdu8A3_8ClismeIX5hQ&s',
        badge: 'SALE'
    },
    {
        id: 9,
        name: 'キーボード',
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
        image: 'https://m.media-amazon.com/images/I/61-kcCin86L._UF894,1000_QL80_.jpg',
        badge: 'POPULAR'
    },
    {
        id: 15,
        name: 'モダンモニター',
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
        image: 'https://www.biccamera.com/bc/include_cms_contents/topics/osusume_charger/c202205.jpg'
    },
    {
        id: 17,
        name: 'サングラス',
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
        image: 'https://mitsuraku.jp/kiji/wp-content/uploads/2019/01/aromatherapy-candle-effect_ic.jpg',
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
        name: 'トレーニングセット',
        category: 'sports',
        price: 2800,
        description: '手のひら保護とグリップ力向上。ウエイトトレーニングに最適。',
        image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=400&h=400&fit=crop'
    },
    {
        id: 27,
        name: 'シャープペンシル',
        category: 'home',
        price: 3200,
        description: 'シンプルなデザインで使いやすい。書き心地も良い。',
        image: 'https://pentonotelife.com/cdn/shop/files/DSC_3276.jpg?v=1710558052&width=1445',
        badge: 'NEW'
    },
    {
        id: 28,
        name: 'マイクロファイバースポーツタオル',
        category: 'sports',
        price: 2200,
        description: '速乾性抜群で持ち運びに便利。ジムやアウトドアに最適。',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ta14QZ7v4OU7aavxNc99BJ0VWAhm8aO3FQ&s'
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
 * 
 * DOMContentLoadedイベント：
 * HTMLの読み込みと解析が完了した時点で実行される
 * 画像などの外部リソースの読み込みを待たない
 * 
 * 実行内容：
 * 1. 商品データを画面に表示
 * 2. 保存されたカート情報を復元
 * 3. ボタンなどのイベントリスナーを設定
 * 4. スクロール時の動的効果を設定
 */
document.addEventListener('DOMContentLoaded', () => {
    // 1. 商品を表示
    // products配列の全商品をグリッドに表示
    displayProducts(products);
    
    // 2. カートをローカルストレージから読み込み
    // 前回の訪問時にカートに入れた商品を復元
    loadCartFromStorage();
    
    // 3. イベントリスナーの設定
    // ボタンクリック、フィルター変更などのイベントを設定
    setupEventListeners();
    
    // 4. ナビゲーションのスクロール効果
    // スクロール時にヘッダーの影を変更する処理
    setupScrollEffects();
});

// ============================================
// 商品表示機能
// ============================================

/**
 * 商品を画面に表示する関数
 * 
 * 機能：
 * - 商品データを受け取り、HTMLに変換して表示
 * - フィルタリング・ソート後の表示にも使用
 * - 商品が0件の場合はメッセージを表示
 * 
 * @param {Array<Object>} productsToDisplay - 表示する商品の配列
 * 
 * 処理フロー：
 * 1. 既存のグリッド内容をクリア
 * 2. 商品数をチェック（0件の場合はメッセージ表示）
 * 3. 各商品のカードを生成してグリッドに追加
 */
function displayProducts(productsToDisplay) {
    // 商品グリッドのDOM要素を取得
    const productsGrid = document.getElementById('productsGrid');
    
    // グリッドの中身を空にする（既存の商品を削除）
    productsGrid.innerHTML = '';
    
    // 商品が見つからない場合（フィルタリング結果が0件）
    if (productsToDisplay.length === 0) {
        // エラーメッセージを表示
        productsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 4rem; color: var(--color-gray-medium);">該当する商品が見つかりませんでした。</p>';
        return; // 処理を終了
    }
    
    // 各商品のカードを生成してグリッドに追加
    // forEach: 配列の各要素に対して処理を実行
    productsToDisplay.forEach((product, index) => {
        // 商品カードのHTML要素を生成
        const productCard = createProductCard(product, index);
        // グリッドに商品カードを追加
        productsGrid.appendChild(productCard);
    });
}

/**
 * 商品カード要素を生成する関数
 * 
 * 機能：
 * - 商品データからHTMLカード要素を動的に生成
 * - 画像、名前、価格、説明、ボタンを含む
 * - クリックで商品詳細モーダルを表示
 * - アニメーション効果を適用（順番に表示）
 * 
 * @param {Object} product - 商品オブジェクト（id, name, price, image等）
 * @param {number} index - 配列のインデックス（アニメーション遅延用）
 * @returns {HTMLElement} 生成された商品カードのDOM要素
 */
function createProductCard(product, index) {
    // div要素を作成
    const card = document.createElement('div');
    // CSSクラスを設定（スタイル適用）
    card.className = 'product-card';
    // アニメーション遅延を設定（順番に表示される効果）
    // index * 0.1s = 0s, 0.1s, 0.2s, 0.3s...
    card.style.animationDelay = `${index * 0.1}s`;
    
    // カードクリック時のイベントリスナーを設定
    // 商品詳細モーダルを表示
    card.addEventListener('click', (e) => {
        // 「カートに追加」ボタンのクリックは除外
        // closest(): 最も近い親要素を検索
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
 * 
 * 機能：
 * - 商品IDから商品情報を取得
 * - カート内に既に存在する場合は数量を増やす
 * - 新規の場合はカートに追加（初期数量：1）
 * - UIを更新し、ローカルストレージに保存
 * - ユーザーにフィードバックを表示
 * 
 * @param {number} productId - 追加する商品のID
 * 
 * 処理フロー：
 * 1. 商品IDから商品データを検索
 * 2. カート内の重複チェック
 * 3. 重複なし → 新規追加、重複あり → 数量+1
 * 4. UIを更新（カート数、合計金額）
 * 5. ローカルストレージに保存
 * 6. アニメーションでフィードバック
 */
function addToCart(productId) {
    // products配列から商品IDに一致する商品を検索
    // find(): 条件に一致する最初の要素を返す
    const product = products.find(p => p.id === productId);
    // 商品が見つからない場合は処理を中断
    if (!product) return;
    
    // カート内に同じ商品があるか確認
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        // 既に存在する場合は数量を1増やす
        existingItem.quantity += 1;
    } else {
        // 新規追加
        // スプレッド構文（...）で商品データをコピーし、
        // quantityプロパティを追加
        cart.push({
            ...product,
            quantity: 1  // 初期数量は1
        });
    }
    
    // UIを更新（カート数バッジ、カート内容、合計金額）
    updateCartUI();
    
    // ローカルストレージに保存（ブラウザを閉じても保持）
    saveCartToStorage();
    
    // フィードバックアニメーション（カートアイコンを拡大）
    showAddToCartFeedback();
}

/**
 * カートからアイテムを削除する関数
 * 
 * 機能：
 * - 指定された商品IDの商品をカートから完全に削除
 * - UIを更新し、ローカルストレージに保存
 * 
 * @param {number} productId - 削除する商品のID
 * 
 * 処理：
 * - filter()で指定IDの商品以外を新しい配列として作成
 */
function removeFromCart(productId) {
    // filter(): 条件に一致する要素だけの新しい配列を作成
    // productIdに一致しないアイテムだけを残す = 削除
    cart = cart.filter(item => item.id !== productId);
    // UIを更新
    updateCartUI();
    // ローカルストレージに保存
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
 * 
 * 機能：
 * - カート数バッジを更新（ヘッダーの数字）
 * - カートモーダル内の商品リストを更新
 * - 合計金額を計算して表示
 * - カートが空の場合は「カートは空です」を表示
 * 
 * 処理内容：
 * 1. カート内の総商品数を計算してバッジを更新
 * 2. カートアイテムリストをHTMLで生成
 * 3. 合計金額を計算して表示
 * 
 * 呼び出されるタイミング：
 * - 商品をカートに追加した時
 * - 商品をカートから削除した時
 * - 商品の数量を変更した時
 * - ページ読み込み時（ローカルストレージから復元）
 */
function updateCartUI() {
    // ========== 1. カート数バッジを更新 ==========
    // ヘッダーのカートアイコン上の数字を更新
    const cartCount = document.getElementById('cartCount');
    
    // reduce(): 配列の全要素を処理して単一の値を返す
    // 全商品の数量を合計（例：3種類の商品を2個ずつ = 6）
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // ========== 2. カートアイテムリストを更新 ==========
    // モーダル内の商品リストエリアを取得
    const cartItemsContainer = document.getElementById('cartItems');
    
    // カートが空の場合
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="cart-empty">カートは空です</div>';
    } else {
        // カート内の各商品をHTMLに変換
        // map(): 配列の各要素を新しい形に変換
        // join(''): 配列を文字列に結合
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <!-- 商品画像 -->
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <!-- 商品名 -->
                    <div class="cart-item-name">${item.name}</div>
                    <!-- 商品価格（toLocaleString()でカンマ区切り） -->
                    <div class="cart-item-price">¥${item.price.toLocaleString()}</div>
                    <!-- 数量変更ボタンと削除ボタン -->
                    <div class="cart-item-actions">
                        <!-- 数量を減らすボタン -->
                        <button class="quantity-button" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <!-- 現在の数量表示 -->
                        <span class="quantity-display">${item.quantity}</span>
                        <!-- 数量を増やすボタン -->
                        <button class="quantity-button" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <!-- 商品削除ボタン -->
                        <button class="remove-button" onclick="removeFromCart(${item.id})">削除</button>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // ========== 3. 合計金額を更新 ==========
    // 各商品の（価格 × 数量）を合計
    // 例：¥1000の商品2個 + ¥2000の商品1個 = ¥4000
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    // toLocaleString(): 数値をカンマ区切りの文字列に変換
    document.getElementById('cartTotal').textContent = `¥${total.toLocaleString()}`;
}

/**
 * カートをローカルストレージに保存
 * 
 * 機能：
 * - カートの内容をブラウザに保存
 * - ページをリロードしても内容が維持される
 * - ブラウザを閉じてもデータが残る
 * 
 * ローカルストレージ：
 * - ブラウザに5-10MBまでデータを保存できる
 * - キーと値のペアで保存（キー: 'cidOcShopCart'）
 * - 文字列しか保存できないのでJSON形式に変換
 */
function saveCartToStorage() {
    // cart配列をJSON文字列に変換してローカルストレージに保存
    // JSON.stringify(): JavaScriptオブジェクト → JSON文字列
    localStorage.setItem('cidOcShopCart', JSON.stringify(cart));
}

/**
 * カートをローカルストレージから読み込み
 * 
 * 機能：
 * - 前回保存したカート情報を復元
 * - ページ読み込み時に自動で実行される
 * - 保存データがない場合は何もしない
 * 
 * 処理フロー：
 * 1. ローカルストレージからデータを取得
 * 2. データが存在すればJSON → JavaScriptオブジェクトに変換
 * 3. cart変数に代入してUIを更新
 */
function loadCartFromStorage() {
    // ローカルストレージから保存されたカートデータを取得
    const savedCart = localStorage.getItem('cidOcShopCart');
    
    // データが存在する場合のみ処理
    if (savedCart) {
        // JSON文字列をJavaScriptの配列に変換
        // JSON.parse(): JSON文字列 → JavaScriptオブジェクト
        cart = JSON.parse(savedCart);
        // UIを更新（カート数、商品リスト、合計金額）
        updateCartUI();
    }
}

/**
 * カート追加のフィードバックアニメーション
 * 
 * 機能：
 * - 商品をカートに追加した時の視覚的フィードバック
 * - カートボタンを一瞬拡大して、ユーザーに通知
 * - 200ミリ秒後に元のサイズに戻る
 * 
 * アニメーション：
 * 1. カートボタンを1.2倍に拡大
 * 2. 200ms待機
 * 3. 元のサイズに戻す
 */
function showAddToCartFeedback() {
    // カートボタンのDOM要素を取得
    const cartButton = document.getElementById('cartButton');
    // CSSのtransformで1.2倍に拡大
    cartButton.style.transform = 'scale(1.2)';
    // 200ミリ秒後に実行される関数を設定
    setTimeout(() => {
        // 元のサイズに戻す
        cartButton.style.transform = 'scale(1)';
    }, 200); // 200ms = 0.2秒
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

/**
 * ページ切り替え関数
 * 
 * 機能：
 * - 指定されたページに切り替える
 * - ナビゲーションのアクティブ状態を更新
 * - URLハッシュを更新
 * - ページトップにスクロール
 * 
 * @param {string} pageName - 切り替え先のページ名（home, products, about, contact）
 */
function switchPage(pageName) {
    // 全てのページを非表示
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });
    
    // 指定されたページを表示
    const targetPage = document.getElementById(`page-${pageName}`);
    if (targetPage) {
        targetPage.style.display = 'block';
        currentPage = pageName;
        
        // ナビゲーションのアクティブ状態を更新
        updateNavigation(pageName);
        
        // URLハッシュを更新（ブラウザの戻る/進むボタン対応）
        window.location.hash = pageName === 'home' ? '' : pageName;
        
        // ページトップにスムーズスクロール
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // モバイルメニューを閉じる
        const navMenu = document.querySelector('.nav-menu');
        const mobileMenuButton = document.getElementById('mobileMenuButton');
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            mobileMenuButton.classList.remove('active');
        }
    }
}

/**
 * ナビゲーションのアクティブ状態を更新
 * 
 * @param {string} pageName - アクティブにするページ名
 */
function updateNavigation(pageName) {
    // 全てのナビゲーションリンクからactiveクラスを削除
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // 現在のページに対応するリンクにactiveクラスを追加
    const activeLink = document.querySelector(`.nav-link[data-page="${pageName}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
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
    
    // ナビゲーションリンクのクリックイベント
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // デフォルトのアンカー動作を防止
            const pageName = link.getAttribute('data-page');
            if (pageName) {
                switchPage(pageName);
            }
        });
    });
    
    // フッターリンクのクリックイベント（利用規約など）
    const footerLinks = document.querySelectorAll('.footer-link');
    footerLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // デフォルトのアンカー動作を防止
            const pageName = link.getAttribute('data-page');
            if (pageName) {
                switchPage(pageName);
            }
        });
    });
    
    // ブラウザの戻る/進むボタンに対応
    window.addEventListener('hashchange', () => {
        const hash = window.location.hash.substring(1); // #を除去
        const page = hash || 'home';
        if (page !== currentPage) {
            switchPage(page);
        }
    });
    
    // お問い合わせフォームの送信処理
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // デフォルトの送信を防止
            
            // フォームデータを取得（実際はサーバーに送信）
            const formData = new FormData(contactForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                type: formData.get('type'),
                message: formData.get('message')
            };
            
            // 送信成功のメッセージを表示
            alert('お問い合わせを受け付けました。\n担当者より24時間以内にご連絡させていただきます。');
            
            // フォームをリセット
            contactForm.reset();
            
            console.log('お問い合わせデータ:', data);
        });
    }
    
    // ESCキーでモーダルを閉じる
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCartModal();
            closeProductModal();
        }
    });
    
    // レジに進むボタン
    const proceedToCheckoutBtn = document.getElementById('proceedToCheckout');
    if (proceedToCheckoutBtn) {
        proceedToCheckoutBtn.addEventListener('click', () => {
            // カートが空でないかチェック
            if (cart.length === 0) {
                alert('カートに商品がありません。');
                return;
            }
            // 決済ページに移動
            closeCartModal();
            switchPage('checkout');
            // 決済サマリーを更新
            updateCheckoutSummary();
        });
    }
    
    // ページ読み込み時にURLハッシュをチェック
    const initialHash = window.location.hash.substring(1);
    if (initialHash && initialHash !== 'home') {
        switchPage(initialHash);
    }
}

// ============================================
// 決済機能
// ============================================

/**
 * 決済ステップを切り替える関数
 * 
 * 機能：
 * - 3つのステップ間を移動（配送先→支払い→確認）
 * - フォームのバリデーションチェック
 * - ステップインジケーターの更新
 * - 確認画面の情報表示
 * 
 * @param {number} stepNumber - 移動先のステップ番号（1:配送先, 2:支払い, 3:確認）
 * 
 * 処理フロー：
 * 1. 現在のステップから次に進む場合、入力内容をバリデーション
 * 2. 全ステップを一旦非表示
 * 3. 指定されたステップを表示
 * 4. ステップインジケーターを更新（視覚的に進行状況を表示）
 * 5. ステップ3の場合は入力内容を確認画面に表示
 */
function nextCheckoutStep(stepNumber) {
    // ========== バリデーションチェック ==========
    // ステップ1（配送先情報）から次に進む場合
    if (currentCheckoutStep === 1 && stepNumber > 1) {
        const shippingForm = document.getElementById('shippingForm');
        // HTML5のフォームバリデーションをチェック
        if (!shippingForm.checkValidity()) {
            // エラーがある場合、ブラウザのエラーメッセージを表示
            shippingForm.reportValidity();
            return; // 処理を中断
        }
    }
    
    // ========== ステップ切り替え ==========
    // 全てのステップコンテンツを非表示にする
    for (let i = 1; i <= 3; i++) {
        const stepContent = document.getElementById(`checkout-step-${i}`);
        if (stepContent) {
            stepContent.style.display = 'none';
        }
    }
    
    // 指定されたステップのみ表示
    const targetStep = document.getElementById(`checkout-step-${stepNumber}`);
    if (targetStep) {
        targetStep.style.display = 'block';
        // 現在のステップ番号を更新
        currentCheckoutStep = stepNumber;
        
        // ステップインジケーターを更新（1→2→3の進行状況表示）
        updateStepIndicator(stepNumber);
        
        // ステップ3（確認画面）の場合、入力内容を表示
        if (stepNumber === 3) {
            displayConfirmation();
        }
    }
}

/**
 * ステップインジケーターを更新
 * 
 * @param {number} activeStep - アクティブなステップ番号
 */
function updateStepIndicator(activeStep) {
    const steps = document.querySelectorAll('.step');
    steps.forEach((step, index) => {
        const stepNum = index + 1;
        if (stepNum < activeStep) {
            step.classList.add('completed');
            step.classList.remove('active');
        } else if (stepNum === activeStep) {
            step.classList.add('active');
            step.classList.remove('completed');
        } else {
            step.classList.remove('active', 'completed');
        }
    });
}

/**
 * 決済サマリーを更新
 * 
 * 機能：
 * - 決済ページ右側のサマリーエリアを更新
 * - カート内商品の一覧表示
 * - 小計、配送料、合計金額を計算して表示
 * - 送料無料条件（5,000円以上）の判定
 * 
 * 表示内容：
 * - 各商品の画像、名前、数量、価格
 * - 小計（商品代金の合計）
 * - 配送料（5,000円未満は500円、以上は無料）
 * - 合計金額
 */
function updateCheckoutSummary() {
    const summaryItems = document.getElementById('checkoutSummaryItems');
    
    // ========== 商品リスト表示 ==========
    // カート内の各商品をサマリー形式でHTML生成
    summaryItems.innerHTML = cart.map(item => `
        <div class="summary-item">
            <!-- 商品サムネイル画像 -->
            <img src="${item.image}" alt="${item.name}" class="summary-item-image">
            <div class="summary-item-info">
                <!-- 商品名 -->
                <div class="summary-item-name">${item.name}</div>
                <!-- 数量と価格 -->
                <div class="summary-item-details">
                    数量: ${item.quantity} × ¥${item.price.toLocaleString()}
                </div>
            </div>
        </div>
    `).join('');
    
    // ========== 金額計算 ==========
    // 小計：全商品の（価格 × 数量）の合計
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    // 配送料：5,000円以上なら無料、未満なら500円
    const shipping = subtotal >= 5000 ? 0 : 500;
    // 合計：小計 + 配送料
    const total = subtotal + shipping;
    
    // ========== サマリー表示更新 ==========
    document.getElementById('summarySubtotal').textContent = `¥${subtotal.toLocaleString()}`;
    document.getElementById('summaryShipping').textContent = shipping === 0 ? '無料' : `¥${shipping.toLocaleString()}`;
    document.getElementById('summaryTotal').textContent = `¥${total.toLocaleString()}`;
}

/**
 * 確認情報を表示
 * 
 * 機能：
 * - ステップ1、2で入力した情報を確認画面に表示
 * - 配送先情報を整形して表示
 * - 選択した支払い方法を表示
 * 
 * 処理：
 * 1. フォームから入力値を取得
 * 2. HTMLに整形
 * 3. 確認画面のエリアに表示
 */
function displayConfirmation() {
    // ========== 配送先情報の表示 ==========
    // 各入力フィールドの値を取得してHTML生成
    const shippingInfo = `
        <p><strong>氏名：</strong>${document.getElementById('checkoutName').value}</p>
        <p><strong>氏名（カナ）：</strong>${document.getElementById('checkoutNameKana').value}</p>
        <p><strong>郵便番号：</strong>${document.getElementById('checkoutPostal').value}</p>
        <p><strong>都道府県：</strong>${document.getElementById('checkoutPrefecture').value}</p>
        <p><strong>住所：</strong>${document.getElementById('checkoutAddress').value}</p>
        ${document.getElementById('checkoutBuilding').value ? `<p><strong>建物名：</strong>${document.getElementById('checkoutBuilding').value}</p>` : ''}
        <p><strong>電話番号：</strong>${document.getElementById('checkoutPhone').value}</p>
        <p><strong>メールアドレス：</strong>${document.getElementById('checkoutEmail').value}</p>
    `;
    // 配送先確認エリアに表示
    document.getElementById('confirmShipping').innerHTML = shippingInfo;
    
    // ========== 支払い方法の表示 ==========
    // 選択されたラジオボタンの値を取得
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    // 値を日本語名に変換
    const paymentNames = {
        'credit': 'クレジットカード',
        'bank': '銀行振込',
        'convenience': 'コンビニ決済',
        'cod': '代金引換'
    };
    // 支払い方法確認エリアに表示
    document.getElementById('confirmPayment').innerHTML = `<p>${paymentNames[paymentMethod]}</p>`;
}

/**
 * 注文を確定する
 * 
 * 機能：
 * - 入力された全情報を注文データとして保存
 * - 注文完了メッセージを表示
 * - カートをクリア
 * - ホームページに戻る
 * 
 * 処理フロー：
 * 1. 注文データオブジェクトを作成
 * 2. コンソールに出力（デモ用：実際はサーバーに送信）
 * 3. 完了メッセージを表示
 * 4. カートを空にする
 * 5. ホームページに戻る
 * 6. 決済ステップをリセット
 * 
 * 注意：
 * これはデモ実装です。実際の運用では、
 * サーバーにデータを送信し、決済処理を行います。
 */
function submitOrder() {
    // ========== 注文データの作成 ==========
    const orderData = {
        // 顧客情報
        customer: {
            name: document.getElementById('checkoutName').value,
            nameKana: document.getElementById('checkoutNameKana').value,
            postal: document.getElementById('checkoutPostal').value,
            prefecture: document.getElementById('checkoutPrefecture').value,
            address: document.getElementById('checkoutAddress').value,
            building: document.getElementById('checkoutBuilding').value,
            phone: document.getElementById('checkoutPhone').value,
            email: document.getElementById('checkoutEmail').value
        },
        // 支払い方法
        paymentMethod: document.querySelector('input[name="paymentMethod"]:checked').value,
        // 注文商品
        items: cart,
        // 注文日時（ISO 8601形式）
        timestamp: new Date().toISOString()
    };
    
    // ========== デモ用：コンソールに出力 ==========
    // 実際の実装では、ここでサーバーにPOSTリクエストを送信
    console.log('📦 注文確定:', orderData);
    
    // ========== 注文完了メッセージ ==========
    alert('ご注文ありがとうございます！\n\nご注文を受け付けました。\n確認メールをお送りいたしますので、しばらくお待ちください。');
    
    // ========== カートをクリア ==========
    cart = [];
    updateCartUI();
    saveCartToStorage();
    
    // ========== ホームページに戻る ==========
    switchPage('home');
    
    // ========== 決済ステップをリセット ==========
    currentCheckoutStep = 1;
    nextCheckoutStep(1);
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
 * 
 * 機能：
 * - 数値を日本円の表記に変換
 * - 自動的に3桁ごとにカンマを挿入
 * 
 * @param {number} amount - 金額（例：12800）
 * @returns {string} フォーマットされた金額（例：¥12,800）
 * 
 * 使用例：
 * formatCurrency(12800) → "¥12,800"
 * formatCurrency(1000000) → "¥1,000,000"
 */
function formatCurrency(amount) {
    // toLocaleString('ja-JP'): 日本のロケールで数値をフォーマット
    return `¥${amount.toLocaleString('ja-JP')}`;
}

// ============================================
// コンソールメッセージ（遊び心）
// ============================================

/**
 * ブラウザのコンソールにウェルカムメッセージを表示
 * 
 * 目的：
 * - 開発者ツールを開いた人へのメッセージ
 * - サイトの技術スタックを示す
 * - 遊び心とプロフェッショナリズムの両立
 * 
 * console.log()の%c記法：
 * - %cの後の文字列にCSSスタイルを適用可能
 * - 第2引数にCSSプロパティを記述
 */
console.log('%c🛒 CID OC Shop へようこそ！', 'color: #000; font-size: 20px; font-weight: bold;');
console.log('%c開発者の方へ: このサイトはモダンなJavaScriptで構築されています。', 'color: #666; font-size: 14px;');
console.log('%cコードを見ていただきありがとうございます！ 😊', 'color: #999; font-size: 12px;');

