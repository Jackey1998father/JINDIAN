<template>
  <header class="header" :class="{ 'header-scrolled': isScrolled }">
    <div class="container">
      <div class="header-content">
        <router-link to="/" class="logo">
          <img src="/images/logo.png" alt="锦点餐饮" class="logo-img">
          <span class="logo-text">锦点餐饮</span>
        </router-link>
        <nav class="nav">
          <router-link to="/" class="nav-item" active-class="active">首页</router-link>
          <router-link to="/management" class="nav-item" active-class="active">管理模式</router-link>
          <router-link to="/menu" class="nav-item">菜单展示</router-link>
          <router-link to="/join-us" class="nav-item">加入我们</router-link>
          <router-link to="/contact" class="nav-item">联系我们</router-link>
        </nav>
        <el-button type="primary" class="contact-btn" round @click="showContact = true">
          立即咨询
        </el-button>
      </div>
    </div>
  </header>

  <el-dialog v-model="showContact" title="联系我们" width="500px">
    <el-form :model="form" label-width="80px">
      <el-form-item label="您的姓名">
        <el-input v-model="form.name" placeholder="请输入姓名" />
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input v-model="form.phone" placeholder="请输入电话" />
      </el-form-item>
      <el-form-item label="公司名称">
        <el-input v-model="form.company" placeholder="请输入公司名称" />
      </el-form-item>
      <el-form-item label="需求描述">
        <el-input type="textarea" v-model="form.message" :rows="4" placeholder="请描述您的团餐需求" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 100%" @click="submitForm">提交咨询</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ElMessage } from 'element-plus'

const isScrolled = ref(false)
const showContact = ref(false)
const form = ref({
  name: '',
  phone: '',
  company: '',
  message: ''
})

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const submitForm = () => {
  if (!form.value.name || !form.value.phone) {
    ElMessage.warning('请填写姓名和联系电话')
    return
  }
  ElMessage.success('咨询信息已提交，我们会尽快与您联系！')
  showContact.value = false
  form.value = { name: '', phone: '', company: '', message: '' }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 0;
  transition: all 0.3s ease;
  background: transparent;
}

.header-scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
  padding: 15px 0;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}

.logo-img {
  height: 50px;
  width: auto;
}

.logo-text {
  font-size: 22px;
  font-weight: 700;
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;
}

.nav {
  display: flex;
  gap: 36px;
}

.nav-item {
  text-decoration: none;
  color: #1a1a1a;
  font-weight: 500;
  font-size: 15px;
  position: relative;
  transition: color 0.2s ease;
  padding: 6px 0;
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #FF6B35;
  transition: width 0.2s ease;
}

.nav-item:hover,
.nav-item.active {
  color: #FF6B35;
}

.nav-item:hover::after,
.nav-item.active::after {
  width: 100%;
}

.header:not(.header-scrolled) .nav-item {
  color: #1a1a1a;
}

.contact-btn {
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  border: none;
}

.contact-btn:hover {
  background: linear-gradient(135deg, #e55a2b 0%, #e08318 100%);
}

@media (max-width: 992px) {
  .nav {
    display: none;
  }
}
</style>