# 🎉 Birthday Celebration Website

A beautiful, interactive birthday celebration website that you can customize and share with others!

## ✨ Features

- **Interactive Elements**:
  - 🕯️ Blow out candles animation
  - 🎵 Play birthday song (web audio)
  - 💫 Generate random birthday wishes
  - 🎊 Confetti celebration effects

- **Customizable**:
  - Change the birthday person's name
  - Set their age
  - Upload custom avatar image
  - Write personalized birthday message

- **Visual Effects**:
  - Animated confetti and floating elements
  - Smooth CSS animations
  - Responsive design for all devices
  - Beautiful gradient backgrounds

- **Interactive Features**:
  - Click anywhere for mini celebrations
  - Keyboard shortcuts (Ctrl+1,2,3,4)
  - Auto-save customizations to browser
  - Photo gallery section

## 🚀 How to Use

### Local Development
1. Clone or download the files
2. Open `index.html` in any modern web browser
3. Customize using the settings panel (⚙️ button)

### GitHub Pages Deployment
1. Create a new repository on GitHub
2. Upload all files (`index.html`, `styles.css`, `script.js`, `README.md`)
3. Go to repository Settings → Pages
4. Select "Deploy from a branch" → "main" → "/ (root)"
5. Your site will be available at: `https://yourusername.github.io/repository-name`

### Tencent Cloud Deployment

#### Option 1: Tencent Cloud Static Website Hosting (腾讯云静态网站托管)
1. **Login to Tencent Cloud Console**:
   - Go to [console.cloud.tencent.com](https://console.cloud.tencent.com)
   - Navigate to "CloudBase" (云开发) → "Static Website Hosting" (静态网站托管)

2. **Create Environment**:
   - Click "Create Environment" (创建环境)
   - Choose region (建议选择离用户最近的地域)
   - Select billing mode (按量计费 for pay-as-you-go)

3. **Deploy Files**:
   - In the environment, go to "Static Website Hosting"
   - Upload your files (`index.html`, `styles.css`, `script.js`)
   - Set `index.html` as the index page
   - Your site will be available at: `https://your-env-id.tcloudbaseapp.com`

#### Option 2: Tencent Cloud Object Storage (COS) + CDN
1. **Create COS Bucket**:
   - Go to COS Console (对象存储控制台)
   - Create bucket with public read access
   - Upload all website files

2. **Enable Static Website**:
   - In bucket settings, enable "Static Website" (静态网站)
   - Set index document to `index.html`
   - Note the endpoint URL

3. **Optional CDN Setup**:
   - Go to CDN Console (内容分发网络)
   - Add domain acceleration
   - Configure origin server as your COS bucket
   - Get accelerated domain for faster access

#### Option 3: Tencent Cloud Virtual Machine (CVM)
1. **Create CVM Instance**:
   - Choose lightweight application server (轻量应用服务器)
   - Select appropriate region and configuration
   - Choose operating system (Ubuntu/CentOS recommended)

2. **Install Web Server**:
   ```bash
   # Install Nginx
   sudo apt update
   sudo apt install nginx
   
   # Start Nginx
   sudo systemctl start nginx
   sudo systemctl enable nginx
   ```

3. **Deploy Files**:
   ```bash
   # Upload files to server (use SCP, SFTP, or web upload)
   # Place files in /var/www/html/
   sudo cp index.html /var/www/html/
   sudo cp styles.css /var/www/html/
   sudo cp script.js /var/www/html/
   
   # Set permissions
   sudo chown -R www-data:www-data /var/www/html/
   ```

4. **Configure Domain** (Optional):
   - Purchase domain from Tencent Cloud
   - Add DNS record pointing to your server IP
   - Configure SSL certificate for HTTPS

#### Cost Comparison:
- **Static Website Hosting**: Most cost-effective for simple sites (免费额度 + 按使用量计费)
- **COS + CDN**: Good for high traffic sites (存储费用 + CDN流量费用)
- **CVM**: More control but higher cost (服务器租用费用)

#### Recommended Approach:
For your birthday website, **Static Website Hosting** is recommended because:
- ✅ Lowest cost (often free tier available)
- ✅ Easy deployment
- ✅ Automatic scaling
- ✅ Built-in CDN acceleration
- ✅ No server maintenance required

## 🎨 Customization

Click the ⚙️ button in the top-right corner to customize:
- **Name**: The birthday person's name
- **Age**: Their age (appears as a badge)
- **Message**: Personal birthday message
- **Avatar**: Profile picture URL

Changes are automatically saved to your browser!

## 📱 Mobile Friendly

The website is fully responsive and works great on:
- Desktop computers
- Tablets
- Mobile phones

## 🎮 Interactive Elements

- **Candles**: Click to blow them out and make a wish!
- **Music**: Play the classic Happy Birthday song
- **Wishes**: Generate random birthday wishes
- **Confetti**: Celebrate with colorful confetti

## 🌟 Keyboard Shortcuts

- `Ctrl + 1`: Blow candles
- `Ctrl + 2`: Play birthday song
- `Ctrl + 3`: Generate wish
- `Ctrl + 4`: Throw confetti

## 🔧 Technologies Used

- HTML5
- CSS3 (Animations, Grid, Flexbox)
- Vanilla JavaScript
- Web Audio API
- Local Storage
- Google Fonts

## 📸 Adding Photos

Replace the placeholder images in the photo gallery section by:
1. Uploading your images to an image hosting service
2. Editing the `src` attributes in the HTML file
3. Or replace with local image files

## 🎁 Perfect For

- Birthday surprises
- Social media sharing
- Digital birthday cards
- Remote celebrations
- Memory keeping

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it further! Some ideas:
- Add more animations
- Include video backgrounds
- Add social sharing buttons
- Create themed variations
- Add sound effects

---

Made with ❤️ for celebrating special people! 🎂✨
