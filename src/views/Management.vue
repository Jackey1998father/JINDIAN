<template>
  <div class="management-page">
    <Header />
    
    <!-- 管理模式与工作流程 -->
    <section class="process-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">管理模式</span>
          <h2 class="section-title">专业运营流程体系</h2>
          <p class="section-desc">借鉴行业标杆经验，打造标准化全链路管理模式</p>
        </div>

        <!-- 主要流程展示 -->
        <div class="process-container">
          <div class="process-line"></div>
          
          <div class="process-steps">
            <div class="process-step" v-for="(step, index) in processSteps" :key="index" :style="{ animationDelay: (index * 0.15) + 's' }">
              <div class="step-above">
                <div class="step-icon">{{ step.icon }}</div>
              </div>
              <div class="step-dot"></div>
              <div class="step-content">
                <h4 class="step-title">{{ step.title }}</h4>
                <p class="step-desc">{{ step.desc }}</p>
                <div class="step-tags">
                  <span v-for="tag in step.tags" :key="tag" class="step-tag">{{ tag }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 管理特色 -->
        <div class="management-features">
          <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="6" v-for="(feature, index) in managementFeatures" :key="index">
              <div class="feature-card">
                <div class="feature-icon">{{ feature.icon }}</div>
                <h5 class="feature-title">{{ feature.title }}</h5>
                <p class="feature-desc">{{ feature.desc }}</p>
              </div>
            </el-col>
          </el-row>
        </div>

        <!-- 更多详情 -->
        <div class="detail-section">
          <div class="section-header">
            <span class="section-tag">流程详解</span>
            <h2 class="section-title">每个环节的专业保障</h2>
          </div>
          
          <el-row :gutter="30" class="detail-grid">
            <el-col :xs="24" :md="12" v-for="(detail, index) in processDetails" :key="index">
              <div class="detail-card">
                <div class="detail-icon">{{ detail.icon }}</div>
                <div class="detail-content">
                  <h4 class="detail-title">{{ detail.title }}</h4>
                  <p class="detail-text">{{ detail.content }}</p>
                  <ul class="detail-points">
                    <li v-for="(point, idx) in detail.points" :key="idx">
                      <span class="point-mark">✓</span>
                      {{ point }}
                    </li>
                  </ul>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

const processSteps = ref([
  {
    icon: '🥬',
    title: '食材溯源采购',
    desc: '与优质供应商合作，建立食材溯源系统，确保从源头把控品质',
    tags: ['源头直采', '质量检测', '溯源管理']
  },
  {
    icon: '🔬',
    title: '中央厨房标准化',
    desc: '中央厨房统一加工，采用HACCP食品安全管理体系',
    tags: ['标准化加工', 'HACCP体系', '智能温控']
  },
  {
    icon: '🥡',
    title: '分装与包装',
    desc: '采用环保包装材料，分类分装，确保餐品新鲜与卫生',
    tags: ['环保包装', '分类分装', '锁鲜技术']
  },
  {
    icon: '🚚',
    title: '冷链物流配送',
    desc: '专业冷链车队，GPS全程监控，确保餐品安全准时送达',
    tags: ['冷链配送', 'GPS定位', '温控运输']
  },
  {
    icon: '🍽️',
    title: '现场分餐服务',
    desc: '专业分餐团队，标准化操作流程，提供优质用餐体验',
    tags: ['专业团队', '标准流程', '贴心服务']
  },
  {
    icon: '♻️',
    title: '回收与反馈',
    desc: '餐具分类回收，建立客户反馈机制，持续优化服务',
    tags: ['绿色回收', '反馈系统', '持续改进']
  }
])

const managementFeatures = ref([
  {
    icon: '📊',
    title: '数字化管理',
    desc: '智慧餐饮系统，订单、库存、配送全流程数字化管理'
  },
  {
    icon: '🧪',
    title: '品控体系',
    desc: '三级质检流程，日检、周检、月检，全方位保障食品安全'
  },
  {
    icon: '👥',
    title: '人才培养',
    desc: '专业培训体系，定期技能考核，打造高素质服务团队'
  },
  {
    icon: '💡',
    title: '创新研发',
    desc: '专业研发团队，定期更新菜品，满足客户多样化需求'
  }
])

const processDetails = ref([
  {
    icon: '🌾',
    title: '食材采购体系',
    content: '建立严格的供应商遴选机制，与优质农业基地直接合作，确保食材新鲜、安全、可追溯',
    points: [
      '供应商资质严格审核',
      '每日食材新鲜检测',
      '全程冷链运输保障',
      '溯源系统全程监控'
    ]
  },
  {
    icon: '🏭',
    title: '中央厨房管理',
    content: '采用国际先进的中央厨房模式，标准化作业流程，确保每一份餐品品质如一',
    points: [
      'HACCP食品安全体系',
      '标准化操作流程',
      '智能温控保鲜系统',
      '全程无尘化生产'
    ]
  },
  {
    icon: '📦',
    title: '包装与分装',
    content: '采用环保可降解材料，科学分装设计，确保餐品在运输过程中的完整性与新鲜度',
    points: [
      '环保可降解材料',
      '科学分装设计',
      '锁鲜密封技术',
      '卫生安全保障'
    ]
  },
  {
    icon: '🚛',
    title: '物流配送网络',
    content: '专业冷链配送车队，GPS实时监控，智能调度系统，确保餐品准时送达每一个客户',
    points: [
      '专业冷链车队',
      'GPS全程监控',
      '智能路径规划',
      '准时配送保障'
    ]
  }
])

onMounted(() => {
  nextTick(() => {
    // 流程动画
    const processObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const steps = entry.target.querySelectorAll('.process-step');
          steps.forEach((step, index) => {
            setTimeout(() => {
              step.style.animationDelay = (index * 0.15) + 's';
              step.classList.add('animate-in');
            }, index * 150);
          });
          processObserver.disconnect();
        }
      });
    }, { threshold: 0.3 });
    
    const processSection = document.querySelector('.process-section');
    if (processSection) {
      processObserver.observe(processSection);
    }
  });
})
</script>

<style scoped>
.management-page {
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-tag {
  display: inline-block;
  padding: 8px 20px;
  background: linear-gradient(135deg, #FFF5F0 0%, #FFF9F5 100%);
  color: #FF6B35;
  font-weight: 600;
  border-radius: 30px;
  margin-bottom: 15px;
}

.section-title {
  font-size: 42px;
  font-weight: 800;
  margin-bottom: 15px;
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-desc {
  font-size: 18px;
  color: #666;
}

.process-section {
  padding: 100px 0;
  background: #fff;
}

.process-container {
  margin-top: 60px;
  position: relative;
  padding: 30px 0;
}

.process-line {
  position: absolute;
  top: 36%;
  left: 50px;
  right: 50px;
  height: 4px;
  background: linear-gradient(90deg, #FF6B35 0%, #F7931E 100%);
  border-radius: 2px;
  transform: translateY(-50%);
}

.process-steps {
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  align-items: stretch;
}

.process-step {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
  padding-top: 30px;
  position: relative;
  justify-content: space-between;
  align-items: center;
}

.process-step.animate-in {
  animation: fadeInUp 0.6s ease forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.step-above {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  min-height: 80px;
  justify-content: center;
}

.step-dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  border: 4px solid #FF6B35;
  position: absolute;
  top: 34%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
  box-shadow: 0 2px 8px rgba(255, 107, 53, 0.3);
}

.step-number {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;
  box-shadow: 0 8px 20px rgba(255, 107, 53, 0.3);
  z-index: 3;
  position: relative;
}

.step-icon {
  font-size: 48px;
  margin-bottom: 15px;
}

.step-content {
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  justify-content: flex-start;
  min-height: 140px;
}

.step-title {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
  min-height: 24px;
}

.step-desc {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 12px;
  min-height: 48px;
}

.step-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px;
  margin-top: auto;
  padding-top: 10px;
}

.step-tag {
  display: inline-block;
  padding: 4px 10px;
  background: linear-gradient(135deg, #FFF5F0 0%, #FFF9F5 100%);
  color: #FF6B35;
  font-size: 12px;
  border-radius: 15px;
  font-weight: 500;
}

.management-features {
  margin-top: 70px;
}

.feature-card {
  background: linear-gradient(135deg, #FFF5F0 0%, #FFF9F5 100%);
  padding: 40px 25px;
  border-radius: 20px;
  text-align: center;
  margin-bottom: 20px;
  transition: all 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
}

.feature-card:hover .feature-icon,
.feature-card:hover .feature-title,
.feature-card:hover .feature-desc {
  color: white;
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 20px;
  transition: color 0.3s;
}

.feature-title {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
  transition: color 0.3s;
}

.feature-desc {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  transition: color 0.3s;
}

.detail-section {
  margin-top: 80px;
  padding-top: 60px;
  border-top: 2px solid #F5F5F5;
}

.detail-grid {
  margin-top: 50px;
}

.detail-card {
  display: flex;
  gap: 25px;
  background: white;
  padding: 35px;
  border-radius: 20px;
  margin-bottom: 25px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
}

.detail-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.detail-icon {
  font-size: 56px;
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #FFF5F0 0%, #FFF9F5 100%);
  border-radius: 20px;
}

.detail-content {
  flex: 1;
}

.detail-title {
  font-size: 22px;
  font-weight: 700;
  color: #333;
  margin-bottom: 12px;
}

.detail-text {
  font-size: 15px;
  color: #666;
  line-height: 1.7;
  margin-bottom: 15px;
}

.detail-points {
  list-style: none;
  padding: 0;
  margin: 0;
}

.detail-points li {
  display: flex;
  align-items: center;
  padding: 6px 0;
  font-size: 14px;
  color: #555;
}

.point-mark {
  color: #FF6B35;
  font-weight: bold;
  margin-right: 10px;
}

/* 响应式 */
@media (max-width: 992px) {
  .process-steps {
    flex-wrap: wrap;
    gap: 30px;
  }
  
  .process-step {
    flex: 0 0 calc(50% - 15px);
  }
  
  .process-line {
    display: none;
  }
  
  .detail-card {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 768px) {
  .process-step {
    flex: 0 0 100%;
  }
  
  .section-title {
    font-size: 32px;
  }
}
</style>
