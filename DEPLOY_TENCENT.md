# 腾讯云部署指南 - Tencent Cloud Deployment Guide

## 🚀 快速部署到腾讯云 (Quick Deploy to Tencent Cloud)

### 方案一：静态网站托管 (推荐) - Static Website Hosting (Recommended)

#### 步骤 1: 登录控制台
1. 访问 [腾讯云控制台](https://console.cloud.tencent.com)
2. 注册/登录账号
3. 搜索"云开发" 或 "CloudBase"

#### 步骤 2: 创建环境
1. 点击"立即使用"进入云开发控制台
2. 点击"新建环境"
3. 填写信息：
   - 环境名称：`birthday-website`
   - 付费方式：按量计费（新用户有免费额度）
   - 环境别名：生日庆祝网站
4. 点击"立即开通"

#### 步骤 3: 部署网站
1. 进入新创建的环境
2. 左侧菜单选择"静态网站托管"
3. 点击"开通静态托管服务"
4. 上传文件：
   - 点击"上传文件"
   - 选择所有文件：`index.html`, `styles.css`, `script.js`
   - 确保 `index.html` 在根目录
5. 设置索引页面为 `index.html`

#### 步骤 4: 获取访问链接
- 部署完成后，获得访问链接：`https://your-env-id.tcloudbaseapp.com`
- 点击链接即可访问你的生日网站！

---

### 方案二：对象存储 COS + CDN

#### 步骤 1: 创建存储桶
1. 进入 [COS 控制台](https://console.cloud.tencent.com/cos5)
2. 点击"创建存储桶"
3. 配置：
   - 存储桶名称：`birthday-website-[随机数字]`
   - 所属地域：选择离用户最近的地域
   - 访问权限：公有读私有写
4. 点击"创建"

#### 步骤 2: 上传文件
1. 进入创建的存储桶
2. 点击"上传文件"
3. 上传所有网站文件
4. 设置文件权限为"公有读"

#### 步骤 3: 开启静态网站
1. 在存储桶管理页面，选择"基础配置"
2. 找到"静态网站"配置
3. 开启静态网站功能
4. 设置：
   - 索引文档：`index.html`
   - 错误文档：`index.html`
5. 保存配置

#### 步骤 4: 配置 CDN（可选）
1. 进入 [CDN 控制台](https://console.cloud.tencent.com/cdn)
2. 点击"添加域名"
3. 配置：
   - 加速域名：你的域名（如有）
   - 源站类型：COS 源
   - 源站地址：选择刚创建的存储桶
4. 提交配置

---

### 方案三：轻量应用服务器

#### 步骤 1: 创建服务器
1. 进入 [轻量应用服务器控制台](https://console.cloud.tencent.com/lighthouse)
2. 点击"新建"
3. 选择配置：
   - 地域：选择合适地域
   - 镜像：Ubuntu 20.04 LTS
   - 实例套餐：1核1GB（足够静态网站使用）
4. 购买并等待创建完成

#### 步骤 2: 连接服务器
1. 在服务器列表中点击"登录"
2. 使用网页 SSH 或本地 SSH 工具连接

#### 步骤 3: 安装 Nginx
```bash
# 更新系统
sudo apt update

# 安装 Nginx
sudo apt install nginx -y

# 启动 Nginx
sudo systemctl start nginx
sudo systemctl enable nginx

# 检查状态
sudo systemctl status nginx
```

#### 步骤 4: 部署网站文件
```bash
# 进入网站目录
cd /var/www/html

# 删除默认文件
sudo rm index.nginx-debian.html

# 创建网站文件（复制粘贴内容）
sudo nano index.html
sudo nano styles.css
sudo nano script.js

# 设置权限
sudo chown -R www-data:www-data /var/www/html
sudo chmod -R 755 /var/www/html
```

#### 步骤 5: 配置防火墙
```bash
# 开放 HTTP 端口
sudo ufw allow 80
sudo ufw allow 443
sudo ufw enable
```

#### 步骤 6: 访问网站
- 通过服务器公网 IP 访问：`http://your-server-ip`

---

## 💰 费用对比

| 方案 | 月费用估算 | 适用场景 |
|------|------------|----------|
| 静态网站托管 | ¥0-10 | 个人网站，访问量不大 |
| COS + CDN | ¥5-50 | 需要 CDN 加速，访问量中等 |
| 轻量服务器 | ¥24+ | 需要更多控制权，多个网站 |

## 🎯 推荐选择

**首次部署推荐：静态网站托管**
- ✅ 操作最简单
- ✅ 费用最低
- ✅ 自动扩容
- ✅ 无需维护服务器
- ✅ 自带 CDN 加速

## 📞 技术支持

如果部署过程中遇到问题：
1. 查看腾讯云官方文档
2. 提交工单获得技术支持
3. 参考社区论坛解决方案

---

🎉 部署成功后，你就可以把链接分享给朋友们，一起庆祝生日啦！
