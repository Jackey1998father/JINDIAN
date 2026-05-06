new Vue({
    el: '#app',
    data: {
        isScrolled: false,
        form: {
            name: '',
            phone: '',
            company: '',
            message: ''
        },
        services: [
            {
                icon: 'fas fa-building',
                color: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
                title: '企业团餐',
                desc: '为各类企业提供标准化团餐服务',
                items: [
                    '员工日常午餐配送',
                    '加班餐、会议餐',
                    '节日特色餐定制',
                    '营养均衡搭配'
                ]
            },
            {
                icon: 'fas fa-graduation-cap',
                color: 'linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)',
                title: '校园配餐',
                desc: '为中小学、高校提供安全配餐',
                items: [
                    '学生营养午餐',
                    '严格食品安全标准',
                    '多样化菜品选择',
                    '分年级营养配比'
                ]
            },
            {
                icon: 'fas fa-hospital',
                color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                title: '机关/医院配餐',
                desc: '为事业单位提供专业餐饮服务',
                items: [
                    '职工日常用餐',
                    '病患营养餐定制',
                    '24小时供餐服务',
                    '清真等特殊餐食'
                ]
            }
        ],
        whyUs: [
            {
                title: '食材新鲜',
                desc: '每日采购当季新鲜食材，从源头把控品质'
            },
            {
                title: '安全卫生',
                desc: '严格执行HACCP食品安全管理体系'
            },
            {
                title: '专业团队',
                desc: '10年以上经验的厨师团队和营养师'
            },
            {
                title: '准时配送',
                desc: '专业物流团队，确保餐品准时送达'
            },
            {
                title: '个性定制',
                desc: '根据客户需求定制专属餐饮方案'
            },
            {
                title: '性价比高',
                desc: '优质服务，合理价格，物超所值'
            }
        ],
        cases: [
            {
                tag: '企业客户',
                title: '某科技有限公司',
                desc: '为2000名员工提供每日午餐配送服务',
                image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20office%20cafeteria%20employees%20having%20lunch&image_size=landscape_4_3'
            },
            {
                tag: '学校客户',
                title: '某重点中学',
                desc: '为3500名师生提供营养午餐配送',
                image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=school%20cafeteria%20students%20eating%20lunch&image_size=landscape_4_3'
            },
            {
                tag: '医院客户',
                title: '某三甲医院',
                desc: '为医护人员和患者提供营养餐服务',
                image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hospital%20cafeteria%20clean%20bright%20dining%20area&image_size=landscape_4_3'
            }
        ],
        testimonials: [
            {
                content: '锦点餐饮的团餐服务让我们员工满意度大幅提升，菜品丰富，营养搭配合理，配送准时！',
                name: '张总',
                position: '某科技公司 行政总监'
            },
            {
                content: '作为学校，食品安全是重中之重。锦点严格的品控体系让我们非常放心，家长们也很满意。',
                name: '李校长',
                position: '某中学 校长'
            },
            {
                content: '他们的营养餐定制服务非常专业，根据病患需求调整食谱，医护人员的工作餐也做得很好。',
                name: '王主任',
                position: '某医院 后勤主任'
            }
        ]
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        this.initSmoothScroll();
        this.initNumberAnimation();
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.isScrolled = window.scrollY > 50;
        },
        initSmoothScroll() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', (e) => {
                    e.preventDefault();
                    const target = document.querySelector(anchor.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                });
            });
        },
        initNumberAnimation() {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.5
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                        entry.target.classList.add('animated');
                        entry.target.classList.add('bounce-active');
                        this.animateNumber(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.stat-number').forEach(el => {
                observer.observe(el);
            });
        },
        animateNumber(element) {
            const target = parseInt(element.getAttribute('data-target'));
            const suffix = element.getAttribute('data-suffix');
            const duration = 2000; // 2秒动画
            const startTime = performance.now();

            // 缓动函数：开头快，结尾超级慢
            const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

            const animate = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                const easedProgress = easeOutQuart(progress);
                const current = Math.floor(easedProgress * target);
                element.textContent = current + suffix;
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };
            
            requestAnimationFrame(animate);
        },
        submitForm() {
            if (!this.form.name || !this.form.phone) {
                this.$message.warning('请填写姓名和联系电话');
                return;
            }
            this.$message.success('咨询信息已提交，我们会尽快与您联系！');
            this.form = { name: '', phone: '', company: '', message: '' };
        }
    }
});