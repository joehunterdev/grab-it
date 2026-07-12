# Grab It - Free Browser-Based Screen Recorder

> A lightweight, open-source screen recording tool that works entirely in your browser. No installation, no sign-ups, no tracking.

[![Made by Joe Hunter](https://img.shields.io/badge/Made%20by-Joe%20Hunter-00d4ff)](https://joehunter.es) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE) ![Platform Support](https://img.shields.io/badge/Platform-Windows%20%7C%20macOS%20%7C%20Linux%20%7C%20iOS-blue)

---

## 🚀 Why Grab It?

Need a quick screen recording without bloatware? Grab It is:

- **Zero Installation** - Works in any modern browser
- **Privacy First** - Everything happens locally in your browser. No uploads, no tracking
- **Open Source** - Free to use, fork, and contribute
- **iPhone Compatible** - Records with H.264 + AAC codecs for seamless playback on all devices
- **Fast & Lightweight** - ~10KB of JavaScript, no dependencies
- **Cross-Platform** - Windows, macOS, Linux, and iOS

---

## ✨ Features

| Feature | Details |
|---------|---------|
| 🎥 **Screen Capture** | Record your entire screen or specific windows/tabs |
| 🔊 **System Audio** | Include system audio directly in your recording |
| 📹 **MP4 Format** | Industry-standard format compatible with all devices |
| ⏱️ **Instant Download** | One-click download with automatic timestamped filename |
| 🎯 **Zero Config** | Works immediately - no settings to configure |
| 🔒 **Complete Privacy** | No data collection, no telemetry, no tracking |

---

## 🌐 Live Demo

Visit **[grab-it.joehunter.dev](https://grab-it.joehunter.dev/)** to start recording right now!

---

## 🎯 Use Cases

- **Tutorials & Documentation** - Record walkthroughs and how-tos
- **Presentations** - Capture your screen during webinars or presentations
- **Bug Reports** - Create visual evidence of issues
- **Social Media Content** - Quickly record clips for TikTok, YouTube, Shorts
- **Game Recording** - Lightweight gaming video capture
- **Remote Work** - Share your screen activities with team members
- **Training Materials** - Build video courses without expensive software

---

## 🚀 Quick Start

### Option 1: Use Online
Simply visit [grab-it.joehunter.dev](https://grab-it.joehunter.dev/) and start recording immediately.

### Option 2: Run Locally

```bash
# Clone the repository
git clone https://github.com/joehunterdev/grab-it.git
cd grab-it

# Open in your browser
# On Windows:
start index.html

# On macOS:
open index.html

# On Linux:
xdg-open index.html
```

### Option 3: Deploy to Your Server
```bash
# Copy files to your web server
scp -r . user@your-server:/path/to/web/root
```

---

## 📋 How to Use

1. **Click "Start Recording"** - Your browser will ask which screen/window to capture
2. **Choose Display** - Select the screen, window, or tab you want to record
3. **Confirm Audio** - Choose whether to include system audio
4. **Record** - Your content is being captured and encoded in real-time
5. **Click "Stop Recording"** - Ends the capture and shows your video
6. **Click "Download"** - Saves your MP4 file with a timestamped filename

**Pro Tip**: Your recording is automatically saved to your video player until you refresh the page.

---

## 🌍 Browser Support

| Browser | Screen Recording | System Audio | Status |
|---------|------------------|--------------|--------|
| Chrome/Edge 72+ | ✅ | ✅ | Fully Supported |
| Firefox 66+ | ✅ | ✅ | Fully Supported |
| Safari 13+ | ✅ | ⚠️ | Partial Support |
| Opera 59+ | ✅ | ✅ | Fully Supported |
| Mobile Safari (iOS) | ✅ | ✅ | **Optimized H.264** |

---

## 🔧 Technical Stack

- **Screen Capture API** - Modern web standard (getDisplayMedia)
- **MediaRecorder API** - Browser's built-in video encoding
- **WebRTC** - Underlying technology for media streams
- **H.264 + AAC Codecs** - iPhone and universal device compatibility

```javascript
// Core APIs Used
navigator.mediaDevices.getDisplayMedia()  // Screen capture
new MediaRecorder()                       // Video encoding
Blob API                                  // File handling
```

---

## 📦 Deployment Options

Deploy Grab It anywhere that serves static files:

### Popular Platforms
- **Netlify** - Drag and drop the folder
- **Vercel** - Connect your GitHub repo
- **GitHub Pages** - Push to `gh-pages` branch
- **Cloudflare Pages** - Auto-deploy from git
- **AWS S3 + CloudFront** - For high-traffic deployments
- **Traditional Hosting** - Upload via FTP/SCP

### Docker Deployment
```bash
docker run -it -p 8000:80 -v $(pwd):/usr/share/nginx/html nginx
```

---

## 🛠️ Development

### Project Structure
```
grab-it/
├── index.html          # Main app (HTML + CSS)
├── src/
│   └── index.js        # Application logic (~150 lines)
├── public/
│   ├── logo_75.png     # App logo
│   └── favicon.jpg     # Favicon
├── README.md           # Documentation
├── LICENSE             # MIT License
└── example.png         # Screenshot
```

### Building from Source
No build step required! This is a pure HTML/CSS/JavaScript application.

### Local Development
```bash
# With Node.js
npx http-server

# With Python 3
python -m http.server 8000

# With Python 2
python -m SimpleHTTPServer 8000
```

---

## 🤝 Contributing

Contributions are welcome! Whether you want to:
- Report bugs
- Suggest features
- Improve documentation
- Add translations
- Optimize performance

### Steps to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Areas for Enhancement
- [ ] Multi-language support (Spanish, French, German, etc.)
- [ ] Webcam overlay option
- [ ] Custom watermarking
- [ ] Video editing timeline
- [ ] Direct cloud storage integration
- [ ] WebM/VP9 codec support
- [ ] Configurable quality/bitrate settings
- [ ] Recording timer display
- [ ] Pause/Resume functionality

---

## ⚡ Performance & Optimization

- **Initial Load**: <1 second
- **App Size**: ~10KB JavaScript (uncompressed)
- **Recording**: Real-time, hardware-accelerated encoding
- **Memory Usage**: Minimal (streaming codec)
- **CPU Impact**: Low (browser's native codecs)

---

## 🔒 Privacy & Security

- ✅ **No Backend** - Everything runs in your browser
- ✅ **No Cookies** - No tracking of any kind
- ✅ **No Analytics** - Your usage is your business
- ✅ **No Data Transmission** - Nothing leaves your device
- ✅ **Open Source** - Audit the code yourself
- ✅ **HTTPS Only** - Always encrypted in transit

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

MIT License © 2024 Joe Hunter

---

## 🙏 Acknowledgments

Built with modern web standards and APIs:
- [Screen Capture API Spec](https://w3c.github.io/screen-capture/)
- [MediaRecorder API](https://www.w3.org/TR/mediastream-recording/)
- [WebRTC](https://webrtc.org/)

---

## 👤 About the Creator

**Joe Hunter** is a full-stack developer with 15+ years of experience building web applications.

**Specialization**: PHP, JavaScript, React, MySQL, and modern web standards  
**Location**: Málaga, Spain 🇪🇸  
**Languages**: English, Spanish

### Connect
- 🌐 [Portfolio](https://joehunter.es)
- 💼 [GitHub](https://github.com/joehunterdev)
- 📧 [Contact](https://joehunter.es/contact)

---

## 🤔 FAQ

**Q: Is Grab It free?**  
A: Yes, completely free and open source under MIT license.

**Q: Will my recording be uploaded to your servers?**  
A: No. Everything stays on your device. We have no servers or tracking.

**Q: Can I use Grab It offline?**  
A: Once the page loads, yes. The app works completely offline.

**Q: Why doesn't my iPhone recording play?**  
A: We've optimized with H.264 + AAC codecs for maximum compatibility. If issues persist, please [report a bug](https://github.com/joehunterdev/grab-it/issues).

**Q: What codecs do you use?**  
A: H.264 video + AAC audio (MP4). Auto-fallback to WebM if needed.

**Q: Can I extend or modify the source code?**  
A: Absolutely! It's MIT licensed. Fork and build amazing things.

**Q: Is there a desktop version?**  
A: Not needed! The web version works great and updates automatically.

**Q: Do you collect any data?**  
A: No. We don't use analytics, tracking, or telemetry.

---

## 🐛 Troubleshooting

### "Permission Denied" Error
- Ensure your browser has permission to access screen recording
- Check your system's privacy settings (macOS/Windows)
- Restart your browser if needed

### No Audio in Recording
- Make sure "Audio" is selected in the permission dialog
- Check if your system audio output is working
- Some websites block audio capture (browser security)

### Video Doesn't Play on iPhone
- Ensure your file downloaded completely
- Try opening it with the Files app first
- Check iOS video player compatibility

### Slow Recording
- Close other applications to free up resources
- Reduce your screen resolution if necessary
- Check available disk space

---

## 📈 Changelog

### v1.1.0 (Current)
- ✨ Added one-click download button
- ✨ Improved iPhone compatibility (H.264 + AAC)
- 🔧 Enhanced codec detection
- 📝 Comprehensive README and SEO
- 🎨 Auto-timestamped filenames

### v1.0.0
- Initial release
- Basic screen recording functionality
- MP4 format support
- System audio capture

---

## 📞 Support & Feedback

Found a bug or have a feature request?

- 🐛 [Report an Issue](https://github.com/joehunterdev/grab-it/issues)
- 💡 [Request a Feature](https://github.com/joehunterdev/grab-it/issues)
- 💬 [Start a Discussion](https://github.com/joehunterdev/grab-it/discussions)
- 📧 [Email Support](https://joehunter.es/contact)

---

**Made with ❤️ by [Joe Hunter](https://joehunter.es)**  
**Grab It** - The simplest way to record your screen.


- 📺 Creating tutorials and how-to videos
- 🐛 Recording bug reports with system audio
- 🎬 Content creation and streaming
- 💼 Business presentations and demos
- 🎓 Educational videos and lectures
- 🎮 Gaming clips and highlights

## Support

If you encounter any issues or have feature requests, please [create an issue](https://github.com/joehunterdev/grab-it/issues).

---

Made with the Screen Capture API • Running in Your Browser
