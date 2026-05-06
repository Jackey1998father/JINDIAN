<template>
  <div class="home">
    <Header />

    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-image"></div>
      
      <!-- 吉祥物 -->
      <div class="mascot mascot-left">
        <img src="/images/无背景吉祥物.jpg" alt="锦点吉祥物" />
      </div>
      
      <!-- 锦点文化装饰 -->
      <div class="jin-decor">
        <div class="jin-circle jc-1">锦</div>
        <div class="jin-circle jc-2">点</div>
        <div class="jin-circle jc-3">味</div>
        <div class="jin-circle jc-4">美</div>
      </div>
      
      <div class="container">
        <div class="hero-content">
          <div class="brand-name">
          </div>
          <h1 class="hero-title">
            <span class="title-line">
              <span class="jin-meaning">锦心烹制</span>
              <span class="separator">·</span>
              <span class="dian-meaning">点亮食光</span>
            </span>
            <span class="title-line highlight">用美食传递温暖</span>
          </h1>
          <p class="hero-subtitle">
            <span class="slogan-part">锦选优质食材，精益求精</span>
            <span class="slogan-dot"> | </span>
            <span class="slogan-part">点滴用心服务，点亮每一餐</span>
          </p>
          <div class="hero-buttons">
            <el-button type="primary" size="large" class="btn-primary" @click="scrollTo('services')">
              了解服务
            </el-button>
            <el-button size="large" class="btn-outline" @click="scrollTo('cases')">
              查看案例
            </el-button>
          </div>
          <div class="hero-stats">
            <div class="stat-item">
              <div class="stat-number" ref="statRef1">0</div>
              <div class="stat-label">合作客户</div>
            </div>
            <div class="stat-item">
              <div class="stat-number" ref="statRef2">0</div>
              <div class="stat-label">日配送量</div>
            </div>
            <div class="stat-item">
              <div class="stat-number" ref="statRef3">0</div>
              <div class="stat-label">行业经验</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="about">
      <div class="container">
        <div class="about-hero">
          <div class="about-left animate-fade-in">
            <span class="about-tag">团队初心</span>
            <h2 class="about-title">精心做好每一餐<span class="highlight-dot">.</span></h2>
            <p class="about-subtitle">从2014到2026，十余年的坚持与热爱</p>
            <div class="about-stats">
              <div class="stat-item">
                <div class="stat-number" ref="aboutStatRef1">0</div>
                <div class="stat-label">年行业深耕</div>
              </div>
              <div class="stat-item">
                <div class="stat-number" ref="aboutStatRef2">0</div>
                <div class="stat-label">+合作客户</div>
              </div>
              <div class="stat-item">
                <div class="stat-number" ref="aboutStatRef3">0</div>
                <div class="stat-label">+日配送量</div>
              </div>
            </div>
          </div>
          <div class="about-right">
            <div class="about-card animate-float">
              <div class="card-icon">🎨</div>
              <h4>锦选食材</h4>
              <p>精挑细选，品质如锦</p>
            </div>
            <div class="about-card animate-float" style="animation-delay: 0.3s">
              <div class="card-icon">✨</div>
              <h4>点滴用心</h4>
              <p>细节之处，点亮美味</p>
            </div>
            <div class="about-card animate-float" style="animation-delay: 0.6s">
              <div class="card-icon">🔥</div>
              <h4>味美情真</h4>
              <p>用心烹饪，温暖人心</p>
            </div>
          </div>
        </div>

        <div class="about-story animate-fade-in">
          <h3 class="story-title">我们的故事<span class="wave">🌊</span></h3>
          <div class="story-content">
            <div class="story-block">
              <div class="story-icon">🌱</div>
              <div class="story-text">
                <h4>2014年 · 梦想启航</h4>
                <p>锦点餐饮在上海诞生，怀揣着"让每一餐都充满温度"的初心，开始了团餐服务之旅。我们相信，好的餐饮不仅仅是填饱肚子，更是传递爱与关怀的方式。</p>
              </div>
            </div>
            <div class="story-block reverse">
              <div class="story-icon">🚀</div>
              <div class="story-text">
                <h4>2019年 · 飞速成长</h4>
                <p>经过五年的沉淀，我们的服务覆盖了企业、学校、医院等多个领域，建立了完善的供应链系统和标准化的生产流程，赢得了越来越多客户的信任。</p>
              </div>
            </div>
            <div class="story-block">
              <div class="story-icon">🌟</div>
              <div class="story-text">
                <h4>2024年 · 砥砺前行</h4>
                <p>十年磨一剑，我们从未停止前进的步伐。智能化厨房、个性化定制、绿色环保...锦点餐饮正在用创新让团餐变得更加美好！</p>
              </div>
            </div>
          </div>
        </div>

        <div class="about-values animate-fade-in">
          <h3 class="values-title">锦点<span class="values-highlight">精神</span></h3>
          <div class="values-grid">
            <div class="value-card">
              <div class="value-icon">🎯</div>
              <h4>锦致品质</h4>
              <p>像织锦一样精细，每一餐都是匠心之作</p>
            </div>
            <div class="value-card">
              <div class="value-icon">⚡</div>
              <h4>点亮细节</h4>
              <p>用心点亮每一个细节，让美味更有温度</p>
            </div>
            <div class="value-card">
              <div class="value-icon">❤️</div>
              <h4>温暖服务</h4>
              <p>用真心做美食，用温暖传真情</p>
            </div>
            <div class="value-card">
              <div class="value-icon">🌟</div>
              <h4>美好未来</h4>
              <p>以美食为纽带，与您共创美好未来</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="services" class="services">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">服务介绍</span>
          <h2 class="section-title">多元化团餐解决方案</h2>
          <p class="section-desc">根据不同客户需求，提供个性化的餐饮服务方案</p>
        </div>
        <el-row :gutter="30" class="services-grid">
          <el-col :xs="24" :sm="12" :md="8">
            <div class="service-card">
              <div class="service-icon" style="background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)">
                <span style="font-size: 28px; color: white">🏢</span>
              </div>
              <h3 class="service-title">企业团餐</h3>
              <p class="service-desc">为各类企业提供标准化团餐服务</p>
              <ul class="service-list">
                <li>✓ 员工日常午餐配送</li>
                <li>✓ 加班餐、会议餐</li>
                <li>✓ 节日特色餐定制</li>
                <li>✓ 营养均衡搭配</li>
              </ul>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8">
            <div class="service-card">
              <div class="service-icon" style="background: linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)">
                <span style="font-size: 28px; color: white">🏫</span>
              </div>
              <h3 class="service-title">校园配餐</h3>
              <p class="service-desc">为中小学、高校提供安全配餐</p>
              <ul class="service-list">
                <li>✓ 学生营养午餐</li>
                <li>✓ 严格食品安全标准</li>
                <li>✓ 多样化菜品选择</li>
                <li>✓ 分年级营养配比</li>
              </ul>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8">
            <div class="service-card">
              <div class="service-icon" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
                <span style="font-size: 28px; color: white">🏥</span>
              </div>
              <h3 class="service-title">机关/医院配餐</h3>
              <p class="service-desc">为事业单位提供专业餐饮服务</p>
              <ul class="service-list">
                <li>✓ 职工日常用餐</li>
                <li>✓ 病患营养餐定制</li>
                <li>✓ 24小时供餐服务</li>
                <li>✓ 清真等特殊餐食</li>
              </ul>
            </div>
          </el-col>
        </el-row>
      </div>
    </section>

    <section class="why-us">
      <div class="container">
        <div class="section-header">
          <span class="section-tag" style="background: white; color: #FF6B35">为什么选择我们</span>
          <h2 class="section-title" style="color: white">六大核心优势</h2>
        </div>
        <el-row :gutter="30" class="why-grid">
          <el-col :xs="24" :sm="12" :md="8">
            <div class="why-card">
              <div class="why-number">01</div>
              <h3 style="color: white">食材新鲜</h3>
              <p style="color: rgba(255,255,255,0.9)">每日采购当季新鲜食材，从源头把控品质</p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8">
            <div class="why-card">
              <div class="why-number">02</div>
              <h3 style="color: white">安全卫生</h3>
              <p style="color: rgba(255,255,255,0.9)">严格执行HACCP食品安全管理体系</p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8">
            <div class="why-card">
              <div class="why-number">03</div>
              <h3 style="color: white">专业团队</h3>
              <p style="color: rgba(255,255,255,0.9)">10年以上经验的厨师团队和营养师</p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8">
            <div class="why-card">
              <div class="why-number">04</div>
              <h3 style="color: white">准时配送</h3>
              <p style="color: rgba(255,255,255,0.9)">专业物流团队，确保餐品准时送达</p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8">
            <div class="why-card">
              <div class="why-number">05</div>
              <h3 style="color: white">个性定制</h3>
              <p style="color: rgba(255,255,255,0.9)">根据客户需求定制专属餐饮方案</p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8">
            <div class="why-card">
              <div class="why-number">06</div>
              <h3 style="color: white">性价比高</h3>
              <p style="color: rgba(255,255,255,0.9)">优质服务，合理价格，物超所值</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </section>

    <section id="cases" class="cases">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">合作案例</span>
          <h2 class="section-title">他们都选择了锦点</h2>
          <p class="section-desc">携手500+企业，共同打造美好用餐体验</p>
        </div>
        <el-row :gutter="30" class="cases-grid">
          <el-col :xs="24" :sm="12" :md="8">
            <div class="case-card">
              <div class="case-image">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop" alt="企业合作案例" />
                <div class="case-overlay">
                  <h4 class="overlay-title">美团、迪赛诺、Alibaba、拼多多+</h4>
                  <p class="overlay-desc">知名企业团餐合作</p>
                </div>
              </div>
              <div class="case-info">
                <span class="case-tag">企业客户</span>
                <h3>美团、迪赛诺、Alibaba、拼多多+</h3>
                <p>为2000名员工提供每日午餐配送服务</p>
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8">
            <div class="case-card">
              <div class="case-image">
                <img src="/images/沪东学校.png" alt="沪东外国语学校" />
                <div class="case-overlay">
                  <h4 class="overlay-title">沪东外国语学校</h4>
                  <p class="overlay-desc">学生营养配餐</p>
                </div>
              </div>
              <div class="case-info">
                <span class="case-tag">学校客户</span>
                <h3>沪东外国语学校</h3>
                <p>为3500名师生提供营养午餐配送</p>
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8">
            <div class="case-card">
              <div class="case-image">
                <img src="/images/长海医院.png" alt="长海医院" />
                <div class="case-overlay">
                  <h4 class="overlay-title">长海医院</h4>
                  <p class="overlay-desc">专业医疗配餐</p>
                </div>
              </div>
              <div class="case-info">
                <span class="case-tag">医院客户</span>
                <h3>长海医院</h3>
                <p>为医护人员和患者提供营养餐服务</p>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </section>

    <section class="testimonials">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">客户评价</span>
          <h2 class="section-title">听听他们怎么说</h2>
        </div>
        <el-carousel height="280px" :autoplay="true" :interval="4000" arrow="always" class="testimonials-carousel">
          <el-carousel-item>
            <div class="testimonial-item">
              <div class="testimonial-content">
                <p>锦点餐饮的团餐服务让我们员工满意度大幅提升，菜品丰富，营养搭配合理，配送准时！</p>
              </div>
              <div class="testimonial-author">
                <div class="author-avatar">张</div>
                <div class="author-info">
                  <h4>张总</h4>
                  <span>某科技公司 行政总监</span>
                </div>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="testimonial-item">
              <div class="testimonial-content">
                <p>作为学校，食品安全是重中之重。锦点严格的品控体系让我们非常放心，家长们也很满意。</p>
              </div>
              <div class="testimonial-author">
                <div class="author-avatar">李</div>
                <div class="author-info">
                  <h4>李校长</h4>
                  <span>某中学 校长</span>
                </div>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="testimonial-item">
              <div class="testimonial-content">
                <p>他们的营养餐定制服务非常专业，根据病患需求调整食谱，医护人员的工作餐也做得很好。</p>
              </div>
              <div class="testimonial-author">
                <div class="author-avatar">王</div>
                <div class="author-info">
                  <h4>王主任</h4>
                  <span>某医院 后勤主任</span>
                </div>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </section>

    <section class="contact">
      <div class="container">
        <div class="contact-wrapper">
          <div class="contact-info">
            <h2>让我们开始合作</h2>
            <p>无论您有任何团餐需求，都欢迎与我们联系</p>
            <div class="info-list">
              <div class="info-item">
                <div class="info-icon" style="background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)">
                  <span style="font-size: 20px; color: white">📍</span>
                </div>
                <div>
                  <h4>公司地址</h4>
                  <p>上海市浦东新区康桥东路1365弄9号楼</p>
                </div>
              </div>
              <div class="info-item">
                <div class="info-icon" style="background: linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)">
                  <span style="font-size: 20px; color: white">📞</span>
                </div>
                <div>
                  <h4>联系电话</h4>
                  <p>18514566659</p>
                </div>
              </div>
              <div class="info-item">
                <div class="info-icon" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
                  <span style="font-size: 20px; color: white">✉️</span>
                </div>
                <div>
                  <h4>电子邮箱</h4>
                  <p>jindianweidao@jindian.com</p>
                </div>
              </div>
              <div class="info-item">
                <div class="info-icon" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%)">
                  <span style="font-size: 20px; color: white">⏰</span>
                </div>
                <div>
                  <h4>工作时间</h4>
                  <p>周一至周五 8:00-18:00</p>
                </div>
              </div>
            </div>
          </div>
          <div class="contact-form">
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
                <el-button type="primary" size="large" style="width: 100%" @click="submitForm">
                  提交咨询
                </el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { ElMessage } from 'element-plus'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

const statRef1 = ref(null)
const statRef2 = ref(null)
const statRef3 = ref(null)
const aboutStatRef1 = ref(null)
const aboutStatRef2 = ref(null)
const aboutStatRef3 = ref(null)

const form = ref({
  name: '',
  phone: '',
  company: '',
  message: ''
})

const animateNumbers = () => {
  const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4)
  
  const animateNumber = (element, target, suffix, duration) => {
    const startTime = performance.now()
    
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutQuart(progress)
      const current = Math.floor(easedProgress * target)
      element.textContent = current + suffix
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }
  
  if (statRef1.value) animateNumber(statRef1.value, 500, '+', 2000)
  if (statRef2.value) animateNumber(statRef2.value, 10, '万+', 2000)
  if (statRef3.value) animateNumber(statRef3.value, 10, '年', 2000)
}

const animateAboutNumbers = () => {
  const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4)
  
  const animateNumber = (element, target, suffix, duration) => {
    const startTime = performance.now()
    
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutQuart(progress)
      const current = Math.floor(easedProgress * target)
      element.textContent = current + suffix
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }
  
  if (aboutStatRef1.value) animateNumber(aboutStatRef1.value, 10, '', 2000)
  if (aboutStatRef2.value) animateNumber(aboutStatRef2.value, 500, '', 2000)
  if (aboutStatRef3.value) animateNumber(aboutStatRef3.value, 100000, '', 2000)
}

onMounted(() => {
  nextTick(() => {
    // 数字动画
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateNumbers();
          heroObserver.disconnect();
        }
      });
    }, { threshold: 0.5 });
    
    const hero = document.querySelector('.hero');
    if (hero) {
      heroObserver.observe(hero);
    }

    // 团队初心滚动动画
    const aboutObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 150);
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.2 });

    // 观察故事区块
    const storyBlocks = document.querySelectorAll('.story-block');
    storyBlocks.forEach(block => {
      aboutObserver.observe(block);
    });

    // 观察价值观卡片
    const valueCards = document.querySelectorAll('.value-card');
    valueCards.forEach((card, index) => {
      const valueObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              card.classList.add('visible');
            }, index * 100);
          } else {
            card.classList.remove('visible');
          }
        });
      }, { threshold: 0.2 });
      valueObserver.observe(card);
    });

    // 团队初心数字动画
    const aboutStatsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateAboutNumbers();
          aboutStatsObserver.disconnect();
        }
      });
    }, { threshold: 0.3 });
    
    const aboutStats = document.querySelector('.about-stats');
    if (aboutStats) {
      aboutStatsObserver.observe(aboutStats);
    }

    // ===== 新增：滚动入场/退场动画 =====
    
    // 1. Section级别的入场/退场动画
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.15 });

    const sections = ['#about', '#services', '.why-us', '#cases', '.testimonials', '.contact'];
    sections.forEach(selector => {
      const section = document.querySelector(selector);
      if (section) {
        sectionObserver.observe(section);
      }
    });

    // 2. Section Header入场/退场动画
    const headerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.2 });

    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
      headerObserver.observe(header);
    });

    // 3. 服务卡片入场/退场动画
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
      const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              card.classList.add('visible');
            }, index * 100);
          } else {
            card.classList.remove('visible');
          }
        });
      }, { threshold: 0.1 });
      cardObserver.observe(card);
    });

    // 4. Why Us卡片入场/退场动画
    const whyCards = document.querySelectorAll('.why-card');
    whyCards.forEach((card, index) => {
      const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              card.classList.add('visible');
            }, index * 100);
          } else {
            card.classList.remove('visible');
          }
        });
      }, { threshold: 0.1 });
      cardObserver.observe(card);
    });

    // 5. 案例卡片入场/退场动画
    const caseCards = document.querySelectorAll('.case-card');
    caseCards.forEach((card, index) => {
      const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              card.classList.add('visible');
            }, index * 100);
          } else {
            card.classList.remove('visible');
          }
        });
      }, { threshold: 0.1 });
      cardObserver.observe(card);
    });
  });
})

const scrollTo = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const submitForm = () => {
  if (!form.value.name || !form.value.phone) {
    ElMessage.warning('请填写姓名和联系电话')
    return
  }
  ElMessage.success('咨询信息已提交，我们会尽快与您联系！')
  form.value = { name: '', phone: '', company: '', message: '' }
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #FFF5F0 0%, #FFF9F5 100%);
  overflow: hidden;
}

/* 锦点文化装饰 */
.jin-decor {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.jin-circle {
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: 700;
  color: rgba(255, 107, 53, 0.15);
  border: 2px solid rgba(255, 107, 53, 0.1);
  animation: float-circle 6s ease-in-out infinite;
}

.jc-1 {
  top: 15%;
  left: 8%;
  animation-delay: 0s;
}

.jc-2 {
  top: 25%;
  right: 12%;
  animation-delay: 1.5s;
}

.jc-3 {
  bottom: 20%;
  left: 15%;
  animation-delay: 3s;
}

.jc-4 {
  bottom: 15%;
  right: 10%;
  animation-delay: 4.5s;
}

@keyframes float-circle {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.6;
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
    opacity: 1;
  }
}

/* 品牌名称 */
.brand-name {
  display: inline-block;
  margin-bottom: 25px;
  animation: brand-appear 0.8s ease-out;
}

@keyframes brand-appear {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.brand-jin {
  font-size: 72px;
  font-weight: 800;
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 4px 20px rgba(255, 107, 53, 0.2);
  display: inline-block;
  animation: jin-pulse 3s ease-in-out infinite;
}

@keyframes jin-pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.brand-dian {
  font-size: 72px;
  font-weight: 800;
  color: #333;
  display: inline-block;
  position: relative;
}

.brand-dian::after {
  content: '';
  position: absolute;
  bottom: -8px;
  right: -8px;
  width: 16px;
  height: 16px;
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  border-radius: 50%;
  animation: dot-glow 2s ease-in-out infinite;
}

@keyframes dot-glow {
  0%, 100% {
    box-shadow: 0 0 10px rgba(255, 107, 53, 0.5);
    transform: scale(1);
  }
  50% {
    box-shadow: 0 0 25px rgba(255, 107, 53, 0.8);
    transform: scale(1.2);
  }
}

/* 文化寓意标题 */
.jin-meaning {
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
}

.dian-meaning {
  color: #333;
  font-weight: 700;
}

.separator {
  margin: 0 15px;
  color: #FF6B35;
  font-weight: 800;
}

/* 文化标语 */
.hero-subtitle {
  font-size: 20px;
  color: #666;
  margin-bottom: 40px;
  line-height: 1.8;
}

.slogan-part {
  display: inline-block;
  position: relative;
}

.slogan-part::before {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  transition: width 0.4s ease;
}

.hero-subtitle:hover .slogan-part::before {
  width: 100%;
}

.slogan-dot {
  color: #FF6B35;
  font-weight: 600;
  margin: 0 10px;
}

.hero-image {
  position: absolute;
  right: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(135deg, #FF8A5C 0%, #FAA84B 100%);
  clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%);
}

/* 吉祥物 */
.mascot {
  position: absolute;
  z-index: 2;
  animation: mascotDance 5s ease-in-out infinite;
}

.mascot-left {
  left: 3%;
  bottom: 8%;
}

.mascot img {
  width: 320px;
  height: auto;
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.15));
}

/* 吉祥物跳舞动画 */
@keyframes mascotDance {
  0%, 100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(1);
  }
  15% {
    transform: translateY(-15px) translateX(-5px) rotate(-2deg) scale(1.02);
  }
  30% {
    transform: translateY(-8px) translateX(5px) rotate(1.5deg) scale(1.01);
  }
  45% {
    transform: translateY(-20px) translateX(-3px) rotate(-1deg) scale(1.03);
  }
  60% {
    transform: translateY(-10px) translateX(6px) rotate(2deg) scale(1.01);
  }
  75% {
    transform: translateY(-18px) translateX(-4px) rotate(-1.5deg) scale(1.02);
  }
  90% {
    transform: translateY(-5px) translateX(3px) rotate(1deg) scale(1);
  }
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 600px;
  margin-left: -120px;
}

.hero-title {
  font-size: 64px;
  font-weight: 800;
  line-height: 1.8;
  margin-bottom: 20px;
}

.title-line {
  display: block;
  opacity: 0;
  transform: translateY(-30px);
  animation: bounceIn 0.8s ease-out forwards;
}

.title-line:nth-child(1) {
  animation: bounceIn 0.8s ease-out forwards, floatUpDown 3s ease-in-out infinite 0.8s;
  will-change: transform;
}

.title-line:nth-child(2) {
  animation-delay: 0.5s;
}

@keyframes floatUpDown {
  0%, 100% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, -5px, 0);
  }
}

.highlight {
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 20px;
  color: #666;
  margin-bottom: 40px;
  line-height: 1.8;
  opacity: 0;
  transform: translateY(-30px);
  animation: bounceIn 0.8s ease-out forwards;
  animation-delay: 0.7s;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  margin-bottom: 60px;
  opacity: 0;
  transform: translateY(-30px);
  animation: bounceIn 0.8s ease-out forwards;
  animation-delay: 0.9s;
}

.btn-primary {
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  border: none;
  padding: 15px 40px;
  font-size: 16px;
}

.btn-outline {
  border: 2px solid #FF6B35;
  color: #FF6B35;
  background: transparent;
  padding: 15px 40px;
  font-size: 16px;
}

.hero-stats {
  display: flex;
  gap: 60px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 36px;
  font-weight: 800;
  color: #333;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;
  height: 48px;
  opacity: 0;
  transform: translateY(-30px);
  animation: bounceIn 0.8s ease-out forwards;
}

.stat-item:nth-child(1) .stat-number { animation-delay: 0.1s; }
.stat-item:nth-child(2) .stat-number { animation-delay: 0.3s; }
.stat-item:nth-child(3) .stat-number { animation-delay: 0.5s; }

@keyframes bounceIn {
  0% { opacity: 0; transform: translateY(-30px); }
  50% { transform: translateY(5px); }
  70% { transform: translateY(-2px); }
  100% { opacity: 1; transform: translateY(0); }
}

.stat-label {
  font-size: 14px;
  color: #666;
}

.about,
.services,
.cases,
.testimonials,
.contact {
  padding: 100px 0;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-tag {
  display: inline-block;
  padding: 8px 20px;
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  color: white;
  font-size: 14px;
  font-weight: 600;
  border-radius: 30px;
  margin-bottom: 20px;
}

.section-title {
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 15px;
}

.section-desc {
  font-size: 18px;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.about {
  padding: 100px 0;
  background: linear-gradient(180deg, #FFF5F0 0%, #FFFFFF 100%);
  position: relative;
  overflow: hidden;
}

.about::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -10%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(255, 107, 53, 0.08) 0%, transparent 70%);
  border-radius: 50%;
  animation: pulse 8s ease-in-out infinite;
}

.about::after {
  content: '';
  position: absolute;
  bottom: -30%;
  right: -5%;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(247, 147, 30, 0.06) 0%, transparent 70%);
  border-radius: 50%;
  animation: pulse 10s ease-in-out infinite;
  animation-delay: 2s;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.1); opacity: 1; }
}

.about-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  margin-bottom: 80px;
  position: relative;
  z-index: 1;
}

.about-left {
  padding-right: 40px;
}

.about-tag {
  display: inline-block;
  padding: 8px 24px;
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  color: white;
  font-size: 14px;
  font-weight: 600;
  border-radius: 30px;
  margin-bottom: 20px;
  animation: bounce-in 0.6s ease-out;
}

@keyframes bounce-in {
  0% { opacity: 0; transform: translateY(-20px) scale(0.8); }
  60% { transform: translateY(5px) scale(1.05); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}

.about-title {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 15px;
  line-height: 1.2;
}

.highlight-dot {
  color: #FF6B35;
  display: inline-block;
  animation: dot-bounce 1.5s ease-in-out infinite;
}

@keyframes dot-bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.about-subtitle {
  font-size: 20px;
  color: #666;
  margin-bottom: 30px;
}

.about-stats {
  display: flex;
  gap: 40px;
}

.about-stats .stat-item {
  text-align: center;
}

.about-stats .stat-number {
  font-size: 36px;
  font-weight: 800;
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
  opacity: 0;
  transform: translateY(-30px);
  animation: bounceIn 0.8s ease-out forwards;
}

.about-stats .stat-item:nth-child(1) .stat-number {
  animation-delay: 0.1s;
}

.about-stats .stat-item:nth-child(2) .stat-number {
  animation-delay: 0.3s;
}

.about-stats .stat-item:nth-child(3) .stat-number {
  animation-delay: 0.5s;
}

.about-stats .stat-label {
  color: #666;
  font-size: 14px;
}

.about-right {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.about-card {
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
}

.about-card:hover {
  transform: translateX(10px);
  box-shadow: 0 20px 60px rgba(255, 107, 53, 0.12);
}

.card-icon {
  font-size: 40px;
  margin-bottom: 15px;
  display: inline-block;
}

.about-card h4 {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #333;
}

.about-card p {
  color: #666;
  line-height: 1.6;
  font-size: 15px;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-fade-in {
  opacity: 0;
  transform: translateY(30px);
  animation: fade-in-up 0.8s ease forwards;
}

@keyframes fade-in-up {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.about-story {
  margin-bottom: 80px;
  position: relative;
  z-index: 1;
}

.story-title {
  font-size: 36px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 50px;
}

.wave {
  display: inline-block;
  animation: wave 2s ease-in-out infinite;
}

@keyframes wave {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(15deg); }
  75% { transform: rotate(-10deg); }
}

.story-content {
  max-width: 900px;
  margin: 0 auto;
}

.story-block {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 40px;
  padding: 30px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  opacity: 0;
  transform: translateX(-80px);
}

.story-block.reverse {
  flex-direction: row-reverse;
  transform: translateX(80px);
}

.story-block.visible {
  opacity: 1;
  transform: translateX(0);
}

.story-icon {
  font-size: 60px;
  min-width: 100px;
  text-align: center;
  filter: drop-shadow(0 4px 12px rgba(255, 107, 53, 0.2));
}

.story-text h4 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;
  color: #333;
}

.story-text p {
  color: #666;
  line-height: 1.8;
  font-size: 16px;
}

.about-values {
  position: relative;
  z-index: 1;
}

.values-title {
  font-size: 36px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 50px;
}

.values-highlight {
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: highlight-pulse 2s ease-in-out infinite;
}

@keyframes highlight-pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.value-card {
  background: white;
  padding: 40px 30px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  opacity: 0;
  transform: translateY(80px);
}

.value-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.value-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 50px rgba(255, 107, 53, 0.15);
}

.value-icon {
  font-size: 50px;
  margin-bottom: 20px;
  display: inline-block;
  transition: transform 0.3s ease;
}

.value-card:hover .value-icon {
  transform: scale(1.2) rotate(5deg);
}

.value-card h4 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 12px;
  color: #333;
}

.value-card p {
  color: #666;
  line-height: 1.6;
  font-size: 15px;
}

@media (max-width: 992px) {
  .about-hero {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .about-left {
    padding-right: 0;
  }

  .values-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .about-stats {
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .about-title {
    font-size: 36px;
  }

  .story-block {
    flex-direction: column;
    text-align: center;
  }

  .story-block.reverse {
    flex-direction: column;
  }

  .values-grid {
    grid-template-columns: 1fr;
  }
}

.services {
  background: #F9FAFB;
}

.services-grid {
  margin-top: 40px;
}

.service-card {
  background: white;
  padding: 40px 30px;
  border-radius: 20px;
  text-align: center;
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  margin-bottom: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  opacity: 0;
  transform: translateY(80px);
}

.service-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
}

.service-icon {
  width: 80px;
  height: 80px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
}

.service-title {
  font-size: 24px;
  margin-bottom: 15px;
}

.service-desc {
  color: #666;
  margin-bottom: 20px;
}

.service-list {
  list-style: none;
  text-align: left;
}

.service-list li {
  padding: 8px 0;
  color: #666;
}

.why-us {
  padding: 100px 0;
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
}

.why-grid {
  margin-top: 40px;
}

.why-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: 35px;
  border-radius: 20px;
  margin-bottom: 30px;
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 1px solid rgba(255, 255, 255, 0.2);
  opacity: 0;
  transform: translateY(80px);
}

.why-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.why-card:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-5px);
}

.why-number {
  font-size: 48px;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.3);
  margin-bottom: 15px;
}

.cases-grid {
  margin-top: 40px;
}

.case-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  opacity: 0;
  transform: translateY(80px);
}

.case-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.case-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
}

.case-image {
  position: relative;
  height: 300px;
  overflow: hidden;
}

.case-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.5s ease;
  padding: 10px;
}

.case-card:hover .case-image img {
  transform: scale(1.1);
}

.case-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.9) 0%, rgba(247, 147, 30, 0.9) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.case-card:hover .case-overlay {
  opacity: 1;
}

.overlay-title {
  color: white;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
  text-align: center;
}

.overlay-desc {
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
  margin: 0;
}

.case-info {
  padding: 25px;
}

.case-tag {
  display: inline-block;
  padding: 5px 15px;
  background: #FFF5F0;
  color: #FF6B35;
  font-size: 12px;
  font-weight: 600;
  border-radius: 20px;
  margin-bottom: 10px;
}

.case-info h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

.case-info p {
  color: #666;
  font-size: 14px;
}

.testimonials {
  background: #F9FAFB;
}

.testimonial-item {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 30px;
}

.testimonial-content p {
  font-size: 20px;
  line-height: 1.8;
  color: #333;
  margin-bottom: 30px;
}

.testimonial-author {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.author-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
}

.author-info h4 {
  font-size: 18px;
  margin-bottom: 5px;
}

.author-info span {
  color: #666;
  font-size: 14px;
}

.testimonials-carousel :deep(.el-carousel__indicators) {
  bottom: 10px;
}

.contact {
  background: linear-gradient(135deg, #FFF5F0 0%, #FFF9F5 100%);
}

.contact-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  background: white;
  padding: 60px;
  border-radius: 30px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
}

.contact-info h2 {
  font-size: 36px;
  margin-bottom: 15px;
}

.contact-info p {
  color: #666;
  margin-bottom: 40px;
}

.info-list {
  display: grid;
  gap: 25px;
}

.info-item {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.info-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.info-item h4 {
  font-size: 16px;
  margin-bottom: 5px;
}

.info-item p {
  color: #666;
  margin: 0;
}

@media (max-width: 992px) {
  .hero-title {
    font-size: 48px;
  }
  .contact-wrapper {
    grid-template-columns: 1fr;
  }
  .hero-bg {
    opacity: 0.1;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 36px;
  }
  .hero-buttons {
    flex-direction: column;
  }
  .hero-stats {
    gap: 30px;
  }
  .section-title {
    font-size: 32px;
  }
  .contact-wrapper {
    padding: 30px;
  }
}

/* ===== 滚动入场/退场动画 ===== */

/* 通用滚动动画基类 */
.scroll-animate {
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

/* 入场状态 - 从下往上 */
.scroll-animate.from-bottom {
  transform: translateY(60px);
}

.scroll-animate.from-bottom.visible {
  opacity: 1;
  transform: translateY(0);
}

/* 入场状态 - 从左往右 */
.scroll-animate.from-left {
  transform: translateX(-60px);
}

.scroll-animate.from-left.visible {
  opacity: 1;
  transform: translateX(0);
}

/* 入场状态 - 从右往左 */
.scroll-animate.from-right {
  transform: translateX(60px);
}

.scroll-animate.from-right.visible {
  opacity: 1;
  transform: translateX(0);
}

/* 入场状态 - 缩放 */
.scroll-animate.scale-up {
  transform: scale(0.8);
}

.scroll-animate.scale-up.visible {
  opacity: 1;
  transform: scale(1);
}

/* 入场状态 - 旋转 */
.scroll-animate.rotate-in {
  transform: rotate(-5deg) scale(0.95);
}

.scroll-animate.rotate-in.visible {
  opacity: 1;
  transform: rotate(0) scale(1);
}

/* Section级别的入场动画 */
#about,
#services,
.why-us,
#cases,
.testimonials,
.contact {
  opacity: 0;
  transform: translateY(80px);
  transition: all 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

#about.visible,
#services.visible,
.why-us.visible,
#cases.visible,
.testimonials.visible,
.contact.visible {
  opacity: 1;
  transform: translateY(0);
}

/* 服务卡片逐个入场 */
.service-card {
  opacity: 0;
  transform: translateY(80px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.service-card.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Why Us卡片逐个入场 */
.why-card {
  opacity: 0;
  transform: translateY(80px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.why-card.visible {
  opacity: 1;
  transform: translateY(0);
}

/* 案例卡片逐个入场 */
.case-card {
  opacity: 0;
  transform: translateY(80px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.case-card.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Section Header单独动画 */
.section-header {
  opacity: 0;
  transform: translateY(-80px);
  transition: all 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.section-header.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>