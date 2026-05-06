<template>
  <div class="join-us-page">
    <Header />
    
    <div class="page-header">
      <img src="/images/招聘背景.png" alt="锦点招聘 - 寻找优秀的你" class="banner-image">
    </div>

    <div class="container">
      <section class="culture-section">
        <h2 class="section-title">🐟 为什么选择锦点</h2>
        <div class="culture-grid">
          <div class="culture-card">
            <div class="culture-icon">🌟</div>
            <h3>你的舞台 你做主</h3>
            <p>扁平化管理，你的创意直接落地，在这里每个人都是主角</p>
          </div>
          <div class="culture-card">
            <div class="culture-icon"></div>
            <h3>美食管够 不长胖</h3>
            <p>每日免费员工餐，专业大厨精心烹制，让你每天都有期待</p>
          </div>
          <div class="culture-card">
            <div class="culture-icon">📈</div>
            <h3>成长不设天花板</h3>
            <p>完善的导师制和培训体系，从新手到大神，我们陪你一起升级</p>
          </div>
          <div class="culture-card">
            <div class="culture-icon"></div>
            <h3>玩得嗨 学得快</h3>
            <p>团建轰趴、生日会、节日派对，工作生活两不误</p>
          </div>
        </div>
      </section>

      <section class="growth-section">
        <h2 class="section-title">🌊 锦鲤成长路径</h2>
        <div class="timeline">
          <div class="timeline-item" v-for="(step, index) in growthSteps" :key="index">
            <div class="timeline-dot" :class="{ 'active': index === 0 }">
              <span class="dot-icon">{{ step.icon }}</span>
            </div>
            <div class="timeline-content">
              <span class="timeline-tag">{{ step.tag }}</span>
              <h3>{{ step.title }}</h3>
              <p>{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="jobs-section">
        <h2 class="section-title">✨ 锦鲤岗位</h2>
        <div class="jobs-grid">
          <div class="job-card" v-for="job in jobs" :key="job.title">
            <div class="job-header">
              <h3>{{ job.title }}</h3>
              <div class="job-tags">
                <span class="job-tag">{{ job.type }}</span>
                <span class="job-badge">{{ job.badge }}</span>
              </div>
            </div>
            <div class="job-meta">
              <span class="meta-item">📍 {{ job.location }}</span>
              <span class="meta-item">💰 {{ job.salary }}</span>
            </div>
            <div class="job-desc">
              <h4>🌊 做什么</h4>
              <ul>
                <li v-for="item in job.desc" :key="item">{{ item }}</li>
              </ul>
            </div>
            <div class="job-actions">
              <el-button type="primary" size="large" @click="applyJob(job)">
                🎣 立即投递
              </el-button>
            </div>
          </div>
        </div>
      </section>

      <section class="stories-section">
        <h2 class="section-title">💬 锦鲤说</h2>
        <div class="stories-grid">
          <div class="story-card" v-for="story in stories" :key="story.name">
            <div class="story-avatar">{{ story.avatar }}</div>
            <div class="story-content">
              <p class="story-quote">"{{ story.quote }}"</p>
              <div class="story-author">
                <span class="author-name">{{ story.name }}</span>
                <span class="author-role">{{ story.role }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="perks-section">
        <h2 class="section-title"> 锦鲤专属福利</h2>
        <div class="perks-grid">
          <div class="perk-item" v-for="perk in perks" :key="perk.title">
            <div class="perk-icon">{{ perk.icon }}</div>
            <h3>{{ perk.title }}</h3>
            <p>{{ perk.desc }}</p>
          </div>
        </div>
      </section>

      <section class="cta-section">
        <div class="cta-content">
          <h2>准备好了吗？</h2>
          <p>来锦点，做最幸运的那条锦鲤</p>
          <el-button type="primary" size="large" class="cta-btn">
            🐟 马上加入我们
          </el-button>
        </div>
      </section>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

const growthSteps = ref([
  {
    icon: '',
    tag: '第1个月',
    title: '锦鲤入池',
    desc: '入职培训、导师配对、熟悉团队，开启你的锦鲤之旅'
  },
  {
    icon: '🐟',
    tag: '第3个月',
    title: '锦鲤摆尾',
    desc: '独立负责项目，展现你的才华，开始发光发热'
  },
  {
    icon: '🐠',
    tag: '第6个月',
    title: '锦鲤跃动',
    desc: '承担更多责任，参与核心项目，成为团队中坚力量'
  },
  {
    icon: '🎏',
    tag: '第12个月',
    title: '锦鲤化龙',
    desc: '晋升机会、薪资调整，从锦鲤到龙，完成华丽蜕变'
  }
])

const jobs = ref([
  {
    title: '团餐项目锦鲤',
    badge: '热招',
    type: '全职',
    location: '上海',
    salary: '15-25K',
    desc: [
      '负责团餐项目的整体规划和执行',
      '协调厨房、配送、客户服务等各环节',
      '维护客户关系，提升客户满意度',
      '有团餐或餐饮管理经验者优先'
    ]
  },
  {
    title: '美食研发官',
    badge: '核心',
    type: '全职',
    location: '上海',
    salary: '12-20K',
    desc: [
      '负责新菜品的研发和菜单更新',
      '根据季节和客户需求调整菜品',
      '控制菜品成本和质量',
      '有中餐或团餐研发经验者优先'
    ]
  },
  {
    title: '业务拓展锦鲤',
    badge: '热招',
    type: '全职',
    location: '上海',
    salary: '10-20K+提成',
    desc: [
      '开发企业团餐客户',
      '跟进客户需求，提供定制方案',
      '维护长期合作关系',
      '有B端销售经验者优先'
    ]
  },
  {
    title: '配送指挥官',
    badge: '急招',
    type: '全职',
    location: '上海',
    salary: '8-12K',
    desc: [
      '负责餐品配送的路线规划和调度',
      '协调配送人员，确保准时送达',
      '处理配送过程中的突发问题',
      '有物流或配送经验者优先'
    ]
  },
  {
    title: 'HR小锦鲤',
    badge: '新',
    type: '全职',
    location: '上海',
    salary: '8-12K',
    desc: [
      '负责招聘、培训、绩效考核等HR工作',
      '完善员工福利和企业文化建设',
      '处理员工关系',
      '有人力资源相关经验优先'
    ]
  },
  {
    title: '锦鲤实习生',
    badge: '新',
    type: '实习',
    location: '上海',
    salary: '150-200元/天',
    desc: [
      '参与各部门的日常工作',
      '接受系统的培训和指导',
      '有转正机会',
      '2025/2026届毕业生优先'
    ]
  }
])

const stories = ref([
  {
    avatar: '👩‍💼',
    quote: '加入锦点是我做过最正确的决定！从实习生到项目经理，只用了8个月，团队氛围超棒！',
    name: '小林',
    role: '团餐项目经理 · 入职1年'
  },
  {
    avatar: '👨‍',
    quote: '每天都能研发新菜品，还能看到客户满意的笑容，这就是我热爱这份工作的原因！',
    name: '大厨阿杰',
    role: '美食研发官 · 入职2年'
  },
  {
    avatar: '👩‍',
    quote: '锦点的成长路径很清晰，导师制让我快速上手，现在已经是团队骨干了！',
    name: '小王',
    role: '业务拓展 · 入职1.5年'
  }
])

const perks = ref([
  {
    icon: '🍱',
    title: '锦鲤专属食堂',
    desc: '每天免费享用美味团餐'
  },
  {
    icon: '💰',
    title: '锦鲤薪资池',
    desc: '薪资+绩效奖金+年终奖'
  },
  {
    icon: '📚',
    title: '锦鲤修炼营',
    desc: '入职培训+技能提升培训'
  },
  {
    icon: '🏖️',
    title: '锦鲤假期',
    desc: '法定年假+公司福利假'
  },
  {
    icon: '🎂',
    title: '锦鲤生日会',
    desc: '生日会+生日礼品'
  },
  {
    icon: '🎊',
    title: '锦鲤派对',
    desc: '定期团建+年会'
  },
  {
    icon: '🩺',
    title: '锦鲤健康包',
    desc: '每年一次全面体检'
  },
  {
    icon: '🚇',
    title: '锦鲤出行补贴',
    desc: '交通+通讯补贴'
  }
])

const applyJob = (job) => {
  ElMessage.success(`🎉 恭喜！您已投递「${job.title}」！准备成为锦点锦鲤吧！`)
}
</script>

<style scoped>
.page-header {
  position: relative;
  overflow: hidden;
  text-align: center;
}

.banner-image {
  width: 100vw;
  max-width: none;
  height: auto;
  display: block;
  margin-left: calc(-50vw + 50%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
}

.section-title {
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 50px;
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.culture-section,
.perks-section,
.growth-section,
.stories-section {
  margin-bottom: 100px;
}

.culture-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.culture-card {
  background: white;
  padding: 40px 30px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.culture-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #FF6B35 0%, #F7931E 50%, #FFB84D 100%);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.culture-card:hover::before {
  transform: scaleX(1);
}

.culture-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 40px rgba(255, 107, 53, 0.15);
}

.culture-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.culture-card h3 {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
  color: #1a1a1a;
}

.culture-card p {
  font-size: 15px;
  color: #666;
  line-height: 1.7;
  margin: 0;
}

.timeline {
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 0 20px;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 40px;
  left: 60px;
  right: 60px;
  height: 4px;
  background: linear-gradient(90deg, #FF6B35 0%, #F7931E 50%, #FFB84D 100%);
  border-radius: 2px;
}

.timeline-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
  position: relative;
}

.timeline-dot {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: white;
  border: 4px solid #FF6B35;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
}

.timeline-dot.active {
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  transform: scale(1.1);
}

.dot-icon {
  font-size: 36px;
}

.timeline-content {
  max-width: 200px;
}

.timeline-tag {
  display: inline-block;
  padding: 4px 12px;
  background: linear-gradient(135deg, #FFE066 0%, #FFCC33 100%);
  color: #8B5A00;
  border-radius: 15px;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 10px;
}

.timeline-content h3 {
  font-size: 18px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 8px;
}

.timeline-content p {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin: 0;
}

.jobs-section {
  margin-bottom: 100px;
}

.jobs-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.job-card {
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  border: 2px solid transparent;
  position: relative;
}

.job-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
  border-color: #FF6B35;
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  gap: 15px;
}

.job-header h3 {
  font-size: 22px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
  flex: 1;
}

.job-tags {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.job-tag {
  display: inline-block;
  padding: 5px 15px;
  background: linear-gradient(135deg, #FFE066 0%, #FFCC33 100%);
  color: #8B5A00;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
}

.job-badge {
  padding: 5px 14px;
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  color: white;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
}

.job-meta {
  display: flex;
  gap: 20px;
  margin-bottom: 25px;
}

.meta-item {
  font-size: 15px;
  color: #666;
}

.job-desc h4 {
  font-size: 16px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 12px;
}

.job-desc ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.job-desc li {
  position: relative;
  padding-left: 20px;
  color: #666;
  font-size: 15px;
  line-height: 1.8;
  margin-bottom: 6px;
}

.job-desc li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #FF6B35;
  font-weight: bold;
}

.job-actions {
  margin-top: 30px;
  padding-top: 25px;
  border-top: 1px solid #f0f0f0;
}

.job-actions .el-button {
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  border: none;
  width: 100%;
  border-radius: 12px;
  font-weight: 600;
}

.job-actions .el-button:hover {
  background: linear-gradient(135deg, #e55a2b 0%, #e08318 100%);
}

.stories-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.story-card {
  background: white;
  padding: 35px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  position: relative;
}

.story-card::before {
  content: '"';
  position: absolute;
  top: 15px;
  left: 20px;
  font-size: 60px;
  color: #FF6B35;
  opacity: 0.2;
  font-family: Georgia, serif;
  line-height: 1;
}

.story-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(255, 107, 53, 0.15);
}

.story-avatar {
  font-size: 48px;
  margin-bottom: 20px;
}

.story-quote {
  font-size: 15px;
  color: #333;
  line-height: 1.8;
  margin-bottom: 20px;
  font-style: italic;
}

.story-author {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.author-name {
  font-size: 16px;
  font-weight: 700;
  color: #1a1a1a;
}

.author-role {
  font-size: 13px;
  color: #FF6B35;
  font-weight: 600;
}

.perks-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.perk-item {
  background: white;
  padding: 35px 25px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
}

.perk-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(255, 107, 53, 0.15);
}

.perk-icon {
  font-size: 42px;
  margin-bottom: 15px;
}

.perk-item h3 {
  font-size: 18px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 8px;
}

.perk-item p {
  font-size: 14px;
  color: #666;
  margin: 0;
}

.cta-section {
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #FFB84D 100%);
  border-radius: 24px;
  padding: 60px 40px;
  text-align: center;
}

.cta-content h2 {
  font-size: 32px;
  font-weight: 700;
  color: white;
  margin-bottom: 15px;
}

.cta-content p {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 30px;
}

.cta-btn {
  background: white !important;
  color: #FF6B35 !important;
  border: none !important;
  font-weight: 700 !important;
  padding: 15px 40px !important;
  font-size: 16px !important;
  border-radius: 30px !important;
}

.cta-btn:hover {
  background: #FFF5F0 !important;
  transform: scale(1.05);
}

@media (max-width: 992px) {
  .culture-grid,
  .perks-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .jobs-grid {
    grid-template-columns: 1fr;
  }
  
  .plan-stats {
    gap: 40px;
  }
  
  .stories-grid {
    grid-template-columns: 1fr;
  }
  
  .timeline {
    flex-direction: column;
    gap: 30px;
    align-items: flex-start;
    padding-left: 40px;
  }
  
  .timeline::before {
    top: 0;
    bottom: 0;
    left: 40px;
    right: auto;
    width: 4px;
    height: 100%;
  }
  
  .timeline-item {
    flex-direction: row;
    text-align: left;
    gap: 20px;
  }
  
  .timeline-dot {
    margin-bottom: 0;
    flex-shrink: 0;
  }
}

@media (max-width: 768px) {
  .plan-title {
    font-size: 36px;
  }
  
  .plan-subtitle {
    font-size: 18px;
  }
  
  .culture-grid,
  .perks-grid {
    grid-template-columns: 1fr;
  }
  
  .job-card {
    padding: 30px 25px;
  }
  
  .job-meta {
    flex-direction: column;
    gap: 8px;
  }
  
  .job-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  
  .job-tags {
    align-self: flex-start;
  }
  
  .plan-stats {
    gap: 30px;
    flex-wrap: wrap;
  }
  
  .plan-stats .stat-number {
    font-size: 32px;
  }
}
</style>
