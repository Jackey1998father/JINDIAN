# 锦点餐饮官网

现代化、工程化的 Vue 3 企业官网

## 🚀 快速开始

### 前置条件

确保你的电脑已安装：
- [Node.js](https://nodejs.org/) (推荐 16.x 或更高版本)
- npm 或 yarn 或 pnpm

### 安装依赖

在项目根目录下执行：

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

浏览器会自动打开 `http://localhost:3000`

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 📁 项目结构

```
jindian-catering/
├── public/                 # 静态资源
│   └── images/            # 图片文件夹
├── src/
│   ├── components/        # 公共组件
│   │   ├── Header.vue     # 头部导航
│   │   └── Footer.vue     # 底部
│   ├── views/             # 页面组件
│   │   ├── Home.vue       # 首页
│   │   ├── Menu.vue       # 菜单页
│   │   └── Contact.vue    # 联系页
│   ├── router/            # 路由配置
│   │   └── index.js
│   ├── App.vue            # 根组件
│   └── main.js            # 入口文件
├── index.html             # HTML 模板
├── package.json           # 项目配置
├── vite.config.js         # Vite 配置
└── README.md
```

## ✨ 功能特性

### 🎨 首页功能
- 响应式导航栏（滚动变化）
- 数字滚动动画（从快到慢）
- 服务介绍卡片
- 合作案例展示
- 客户评价轮播
- 在线咨询弹窗
- 浮动客服按钮

### 🍽️ 菜单页功能
- 菜品分类筛选
- 菜品详情弹窗
- 加入购物车
- 购物车管理
- 喜欢/收藏功能

### 📞 联系页功能
- 在线留言表单
- 表单验证
- 常见问题（手风琴）
- 联系信息展示

## 🛠️ 技术栈

- **Vue 3** - 渐进式 JavaScript 框架
- **Vite** - 下一代前端构建工具
- **Vue Router** - 官方路由管理器
- **Element Plus** - Vue 3 组件库
- **SCSS** - CSS 预处理器（可选）

## 🎯 常用命令

| 命令 | 说明 |
|------|------|
| `npm install` | 安装依赖 |
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 构建生产版本 |
| `npm run preview` | 预览生产构建 |

## 📝 注意事项

1. **logo 图片**：请将您的 logo 图片命名为 `logo.png` 并放置在 `public/images/` 文件夹下
2. **端口**：默认端口为 3000，可在 `vite.config.js` 中修改
3. **Node 版本**：建议使用 Node 16+ 以获得最佳兼容性

## 🔧 自定义配置

### 修改端口

编辑 `vite.config.js`：

```javascript
export default defineConfig({
  server: {
    port: 8080, // 修改这里
    open: true
  }
})
```

### 修改主题色

在各组件的 `<style>` 中修改 `#FF6B35` 和 `#F7931E` 为您想要的颜色

## 💡 开发建议

1. 使用 VS Code + Volar 插件获得最佳开发体验
2. 组件命名使用 PascalCase
3. 页面间跳转使用 `<router-link>`
4. 保持代码格式统一

## 📞 帮助

如有问题，请联系开发团队。

---

**享受开发！** 🎉