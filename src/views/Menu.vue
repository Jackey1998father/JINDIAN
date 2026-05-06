<template>
  <div class="menu-page">
    <Header />
    
    <div class="page-header">
      <div class="container">
        <h1>美味菜单</h1>
        <p>精选美食，每日新鲜配送</p>
      </div>
    </div>

    <div class="container">
      <div class="category-tabs">
        <el-tabs v-model="activeCategory" type="card" @tab-change="handleCategoryChange">
          <el-tab-pane label="全部" name="all" />
          <el-tab-pane label="热菜" name="hot" />
          <el-tab-pane label="凉菜" name="cold" />
          <el-tab-pane label="主食" name="staple" />
          <el-tab-pane label="汤品" name="soup" />
          <el-tab-pane label="甜点" name="dessert" />
        </el-tabs>
      </div>

      <div class="menu-grid">
        <el-row :gutter="30">
          <el-col :xs="24" :sm="12" :md="8" :lg="6" v-for="item in filteredMenu" :key="item.id">
            <div class="menu-card" @click="showDetail = true; currentItem = item">
              <div class="menu-image">
                <img :src="item.image" :alt="item.name">
                <div class="menu-badge" v-if="item.hot">🔥 热门</div>
                <div class="menu-like" @click.stop="toggleLike(item)">
                  <el-icon :color="item.liked ? '#FF6B35' : '#999'"><Star /></el-icon>
                </div>
              </div>
              <div class="menu-info">
                <h3>{{ item.name }}</h3>
                <p class="menu-desc">{{ item.desc }}</p>
                <div class="menu-bottom">
                  <span class="menu-price">¥{{ item.price }}</span>
                  <el-button type="primary" size="small" @click.stop="addToCart(item)">
                    <el-icon><ShoppingCart /></el-icon>
                  </el-button>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>

      <div v-if="filteredMenu.length === 0" class="empty-state">
        <el-empty description="暂无该分类菜品" />
      </div>
    </div>

    <!-- 购物车浮窗 -->
    <div class="cart-fab" @click="showCart = true">
      <el-button type="primary" circle size="large">
        <el-icon :size="24"><ShoppingCart /></el-icon>
      </el-button>
      <span class="cart-count" v-if="cartCount > 0">{{ cartCount }}</span>
    </div>

    <!-- 购物车弹窗 -->
    <el-drawer v-model="showCart" title="我的购物车" size="400px">
      <div v-if="cart.length > 0" class="cart-list">
        <div class="cart-item" v-for="item in cart" :key="item.id">
          <img :src="item.image" :alt="item.name">
          <div class="item-info">
            <h4>{{ item.name }}</h4>
            <p class="item-price">¥{{ item.price }}</p>
          </div>
          <div class="item-qty">
            <el-button size="small" circle @click="updateQty(item, -1)">-</el-button>
            <span>{{ item.qty }}</span>
            <el-button size="small" circle @click="updateQty(item, 1)">+</el-button>
          </div>
        </div>
        <div class="cart-total">
          <span>合计：</span>
          <span class="total-price">¥{{ totalPrice }}</span>
        </div>
        <el-button type="primary" style="width: 100%" size="large">去结算</el-button>
      </div>
      <el-empty v-else description="购物车是空的" />
    </el-drawer>

    <!-- 详情弹窗 -->
    <el-dialog v-model="showDetail" :title="currentItem?.name" width="500px">
      <img v-if="currentItem" :src="currentItem.image" :alt="currentItem.name" style="width: 100%; border-radius: 12px; margin-bottom: 20px">
      <p v-if="currentItem" style="color: #666; line-height: 1.8">{{ currentItem.desc }}</p>
      <p v-if="currentItem" style="color: #FF6B35; font-size: 24px; font-weight: bold; margin-top: 20px">
        ¥{{ currentItem.price }}
      </p>
      <template #footer>
        <el-button type="primary" @click="addToCart(currentItem); showDetail = false">
          加入购物车
        </el-button>
      </template>
    </el-dialog>

    <Footer />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ElMessage } from 'element-plus'
import { Star, ShoppingCart } from '@element-plus/icons-vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

const activeCategory = ref('all')
const showCart = ref(false)
const showDetail = ref(false)
const currentItem = ref(null)
const cart = ref([])

const menuData = ref([
  { id: 1, name: '红烧肉', category: 'hot', price: 38, desc: '经典家常菜，肥而不腻，入口即化', hot: true, liked: false, image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20braised%20pork%20belly%20dish&image_size=square' },
  { id: 2, name: '宫保鸡丁', category: 'hot', price: 32, desc: '传统名菜，辣中有甜，甜中有辣', hot: true, liked: false, image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=kung%20pao%20chicken%20chinese%20food&image_size=square' },
  { id: 3, name: '糖醋排骨', category: 'hot', price: 42, desc: '酸甜可口，肉质鲜嫩，老少皆宜', hot: true, liked: false, image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=sweet%20and%20sour%20ribs%20dish&image_size=square' },
  { id: 4, name: '鱼香肉丝', category: 'hot', price: 28, desc: '四川名菜，鱼香味浓，下饭神器', hot: false, liked: false, image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=yuxiang%20shredded%20pork%20chinese&image_size=square' },
  { id: 5, name: '凉拌黄瓜', category: 'cold', price: 16, desc: '清爽开胃，脆嫩可口，夏日必备', hot: false, liked: false, image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cucumber%20salad%20chinese%20style&image_size=square' },
  { id: 6, name: '皮蛋豆腐', category: 'cold', price: 18, desc: '经典凉菜，口感嫩滑，风味独特', hot: false, liked: false, image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=tofu%20with%20century%20eggs%20dish&image_size=square' },
  { id: 7, name: '蛋炒饭', category: 'staple', price: 15, desc: '粒粒分明，蛋香浓郁，简单美味', hot: true, liked: false, image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=fried%20rice%20with%20egg%20chinese&image_size=square' },
  { id: 8, name: '牛肉面', category: 'staple', price: 22, desc: '汤浓肉嫩，面条劲道，营养丰富', hot: true, liked: false, image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beef%20noodle%20soup%20chinese&image_size=square' },
  { id: 9, name: '番茄蛋汤', category: 'soup', price: 12, desc: '酸甜可口，营养丰富，家常靓汤', hot: false, liked: false, image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=tomato%20egg%20soup%20chinese&image_size=square' },
  { id: 10, name: '紫菜蛋花汤', category: 'soup', price: 10, desc: '清淡鲜美，制作简单，健康养生', hot: false, liked: false, image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=seaweed%20egg%20drop%20soup&image_size=square' },
  { id: 11, name: '芒果布丁', category: 'dessert', price: 18, desc: '香甜芒果，口感丝滑，甜蜜享受', hot: false, liked: false, image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mango%20pudding%20dessert%20sweet&image_size=square' },
  { id: 12, name: '双皮奶', category: 'dessert', price: 15, desc: '经典粤式甜点，奶香浓郁，嫩滑可口', hot: true, liked: false, image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=double%20skin%20milk%20dessert&image_size=square' }
])

const filteredMenu = computed(() => {
  if (activeCategory.value === 'all') return menuData.value
  return menuData.value.filter(item => item.category === activeCategory.value)
})

const cartCount = computed(() => cart.value.reduce((sum, item) => sum + item.qty, 0))
const totalPrice = computed(() => cart.value.reduce((sum, item) => sum + item.price * item.qty, 0))

const handleCategoryChange = () => {}

const toggleLike = (item) => {
  item.liked = !item.liked
  ElMessage.success(item.liked ? '已添加到喜欢' : '已取消喜欢')
}

const addToCart = (item) => {
  const existing = cart.value.find(i => i.id === item.id)
  if (existing) {
    existing.qty++
  } else {
    cart.value.push({ ...item, qty: 1 })
  }
  ElMessage.success('已加入购物车')
}

const updateQty = (item, change) => {
  item.qty += change
  if (item.qty <= 0) {
    cart.value = cart.value.filter(i => i.id !== item.id)
  }
}
</script>

<style scoped>
.page-header {
  padding: 120px 0 60px;
  background: linear-gradient(135deg, #FFF5F0 0%, #FFF9F5 100%);
  text-align: center;
}

.page-header h1 {
  font-size: 48px;
  margin-bottom: 10px;
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.page-header p {
  font-size: 18px;
  color: #666;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
}

.category-tabs {
  margin-bottom: 40px;
}

.menu-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  margin-bottom: 30px;
  transition: all 0.3s;
  cursor: pointer;
}

.menu-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.menu-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.menu-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.menu-card:hover .menu-image img {
  transform: scale(1.1);
}

.menu-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
}

.menu-like {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.menu-like:hover {
  transform: scale(1.1);
  background: white;
}

.menu-info {
  padding: 20px;
}

.menu-info h3 {
  font-size: 20px;
  margin-bottom: 8px;
}

.menu-desc {
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
}

.menu-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-price {
  font-size: 24px;
  font-weight: bold;
  color: #FF6B35;
}

.empty-state {
  padding: 80px 0;
  text-align: center;
}

.cart-fab {
  position: fixed;
  bottom: 100px;
  right: 30px;
  z-index: 999;
  cursor: pointer;
}

.cart-fab .el-button {
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  box-shadow: 0 4px 20px rgba(255, 107, 53, 0.4);
}

.cart-count {
  position: absolute;
  top: -5px;
  right: -5px;
  background: #ff4757;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
}

.cart-list {
  padding: 20px;
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
}

.cart-item img {
  width: 70px;
  height: 70px;
  border-radius: 10px;
  object-fit: cover;
}

.item-info {
  flex: 1;
}

.item-info h4 {
  margin-bottom: 5px;
}

.item-price {
  color: #FF6B35;
  font-weight: bold;
}

.item-qty {
  display: flex;
  align-items: center;
  gap: 10px;
}

.item-qty span {
  width: 30px;
  text-align: center;
  font-weight: bold;
}

.cart-total {
  padding: 20px 0;
  font-size: 20px;
  text-align: right;
}

.total-price {
  color: #FF6B35;
  font-size: 28px;
  font-weight: bold;
}
</style>