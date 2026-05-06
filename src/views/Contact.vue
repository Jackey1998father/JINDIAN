<template>
  <div class="contact-page">
    <Header />
    
    <div class="page-header">
      <div class="container">
        <h1>联系我们</h1>
        <p>期待与您的合作</p>
      </div>
    </div>

    <div class="container">
      <div class="contact-grid">
        <div class="contact-info-section">
          <h2>联系方式</h2>
          <div class="info-cards">
            <div class="info-card" v-for="item in contactItems" :key="item.title">
              <div class="info-card-icon" :style="{ background: item.color }">
                <el-icon :size="28" color="#fff"><component :is="item.icon" /></el-icon>
              </div>
              <div class="info-card-content">
                <h3>{{ item.title }}</h3>
                <p>{{ item.content }}</p>
              </div>
            </div>
          </div>

          <div class="map-section">
            <h3>公司位置</h3>
            <div class="map-placeholder">
              <el-icon :size="60" color="#FF6B35"><Location /></el-icon>
              <p>上海市浦东新区康桥东路1365弄9号楼</p>
            </div>
          </div>
        </div>

        <div class="contact-form-section">
          <h2>在线留言</h2>
          <el-form :model="form" :rules="rules" ref="formRef" label-width="100px">
            <el-form-item label="您的姓名" prop="name">
              <el-input v-model="form.name" placeholder="请输入您的姓名" size="large" />
            </el-form-item>
            <el-form-item label="联系电话" prop="phone">
              <el-input v-model="form.phone" placeholder="请输入联系电话" size="large" />
            </el-form-item>
            <el-form-item label="公司名称" prop="company">
              <el-input v-model="form.company" placeholder="请输入公司名称" size="large" />
            </el-form-item>
            <el-form-item label="用餐人数" prop="people">
              <el-select v-model="form.people" placeholder="请选择用餐人数" size="large" style="width: 100%">
                <el-option label="50人以下" value="<50" />
                <el-option label="50-200人" value="50-200" />
                <el-option label="200-500人" value="200-500" />
                <el-option label="500人以上" value=">500" />
              </el-select>
            </el-form-item>
            <el-form-item label="需求描述" prop="message">
              <el-input type="textarea" v-model="form.message" :rows="5" placeholder="请详细描述您的团餐需求" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" size="large" style="width: 100%" :loading="submitting" @click="submitForm">
                提交咨询
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>

      <div class="faq-section">
        <h2 class="section-title">常见问题</h2>
        <el-collapse v-model="activeFaqs">
          <el-collapse-item title="如何开始合作？" name="1">
            <p>您可以通过在线留言、电话或邮件联系我们，我们的客户经理会在24小时内与您取得联系，了解您的需求并提供定制方案。</p>
          </el-collapse-item>
          <el-collapse-item title="起订量是多少？" name="2">
            <p>我们的起订量为50份/餐，对于长期合作客户可适当调整，具体请咨询我们的客户经理。</p>
          </el-collapse-item>
          <el-collapse-item title="送餐时间和范围？" name="3">
            <p>我们支持早餐、午餐、晚餐配送，配送范围覆盖全市主要区域，具体配送时间可根据您的需求协商确定。</p>
          </el-collapse-item>
          <el-collapse-item title="如何保证食品安全？" name="4">
            <p>我们建立了严格的HACCP食品安全管理体系，从食材采购、加工制作到配送全流程监控，确保每一份餐品安全放心。</p>
          </el-collapse-item>
          <el-collapse-item title="可以定制菜单吗？" name="5">
            <p>当然可以！我们会根据您的需求、口味偏好、预算等定制专属菜单，并且会定期更新菜品，让用餐更丰富。</p>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import { Location, Phone, Message, Clock } from '@element-plus/icons-vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

const formRef = ref(null)
const submitting = ref(false)
const activeFaqs = ref(['1'])

const form = reactive({
  name: '',
  phone: '',
  company: '',
  people: '',
  message: ''
})

const rules = {
  name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
  phone: [
    { required: true, message: '请输入电话', trigger: 'blur' },
    { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' }
  ]
}

const contactItems = ref([
  {
    icon: Location,
    color: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
    title: '公司地址',
    content: '上海市浦东新区康桥东路1365弄9号楼'
  },
  {
    icon: Phone,
    color: 'linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)',
    title: '联系电话',
    content: '18514566659'
  },
  {
    icon: Message,
    color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    title: '电子邮箱',
    content: 'jindianweidao@jindian.com'
  },
  {
    icon: Clock,
    color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    title: '工作时间',
    content: '周一至周五 8:00-18:00'
  }
])

const submitForm = async () => {
  if (!formRef.value) return
  await formRef.value.validate(async (valid) => {
    if (valid) {
      submitting.value = true
      setTimeout(() => {
        submitting.value = false
        ElMessage.success('咨询信息已提交！我们会尽快与您联系。')
        Object.assign(form, {
          name: '',
          phone: '',
          company: '',
          people: '',
          message: ''
        })
      }, 1500)
    }
  })
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

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 80px;
}

.contact-info-section h2,
.contact-form-section h2 {
  font-size: 28px;
  margin-bottom: 30px;
}

.info-cards {
  display: grid;
  gap: 20px;
  margin-bottom: 40px;
}

.info-card {
  display: flex;
  gap: 20px;
  padding: 25px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s;
}

.info-card:hover {
  transform: translateX(10px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.info-card-icon {
  width: 60px;
  height: 60px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.info-card-content h3 {
  font-size: 18px;
  margin-bottom: 8px;
}

.info-card-content p {
  color: #666;
  margin: 0;
}

.map-section h3 {
  font-size: 20px;
  margin-bottom: 20px;
}

.map-placeholder {
  height: 200px;
  background: #f5f5f5;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #999;
}

.contact-form-section {
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
}

.faq-section {
  max-width: 800px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  font-size: 32px;
  margin-bottom: 40px;
}

:deep(.el-collapse-item__header) {
  font-size: 16px;
  font-weight: 600;
}

:deep(.el-collapse-item__content) {
  color: #666;
  line-height: 1.8;
  padding-bottom: 20px;
}

@media (max-width: 992px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .contact-form-section {
    padding: 30px 20px;
  }
}
</style>