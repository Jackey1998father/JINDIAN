<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-col">
          <div class="footer-logo">
            <img src="/images/logo.png" alt="锦点餐饮">
            <span>锦点餐饮</span>
          </div>
          <p>专业团餐配送服务商，精心做好每一餐</p>
          <div class="social-links">
            <a href="#"><el-icon :size="20"><ChatDotRound /></el-icon></a>
            <a href="#"><el-icon :size="20"><Monitor /></el-icon></a>
            <a href="#"><el-icon :size="20"><Phone /></el-icon></a>
          </div>
        </div>
        <div class="footer-col">
          <h4>快速链接</h4>
          <ul>
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/menu">菜单展示</router-link></li>
            <li><router-link to="/contact">联系我们</router-link></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>服务项目</h4>
          <ul>
            <li>企业团餐</li>
            <li>校园配餐</li>
            <li>活动用餐</li>
            <li>营养餐定制</li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>联系我们</h4>
          <ul>
            <li><el-icon><Phone /></el-icon> 18514566659</li>
            <li><el-icon><Message /></el-icon> jindianweidao@jindian.com</li>
            <li><el-icon><Location /></el-icon> XX市XX区XX路</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 锦点餐饮管理有限公司 版权所有</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ChatDotRound, Monitor, Phone, Message, Location } from '@element-plus/icons-vue'
</script>

<style scoped>
.footer {
  background: #1A1A2E;
  color: white;
  padding: 80px 0 30px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 50px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.footer-logo img {
  height: 40px;
}

.footer-logo span {
  font-size: 22px;
  font-weight: 700;
}

.footer-col p {
  color: #a0a0b0;
  line-height: 1.8;
  margin-bottom: 20px;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-links a {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s;
}

.social-links a:hover {
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  transform: translateY(-3px);
}

.footer-col h4 {
  font-size: 18px;
  margin-bottom: 25px;
}

.footer-col ul {
  list-style: none;
}

.footer-col ul li {
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.footer-col ul li a {
  color: #a0a0b0;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-col ul li a:hover {
  color: #FF6B35;
}

.footer-bottom {
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #a0a0b0;
}

@media (max-width: 992px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
  }
}
</style>