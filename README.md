# Grab It

A lightweight, browser-based screen recording application that captures your screen and system audio in MP4 format.

## Features

- 🎥 **Screen Recording** - Capture your entire screen or a specific window
- 🔊 **System Audio** - Include system audio in your recordings
- 📹 **MP4 Format** - High-quality MP4 output compatible with all devices
- 🚀 **Fast & Lightweight** - No installation required, runs entirely in your browser
- 🔒 **Private** - All recording happens locally in your browser, no data sent to servers
- 💻 **Cross-Platform** - Works on Windows, macOS, and Linux

## 🌐 Live Demo

**[grab-it.joehunter.dev](https://grab-it.joehunter.dev)** - Visit the live application and start recording instantly!

Or clone and run locally by opening `index.html` in your browser.

## How to Use

1. **Start Recording** - Click the "Start Recording" button
2. **Choose Display** - Select the screen or window you want to record from the system dialog
3. **Audio Preference** - When prompted, choose whether to include system audio
4. **Stop Recording** - Click "Stop Recording" to end the capture
5. **Download** - The recording will be displayed in the video player

## Installation

No installation required! Simply open `index.html` in a modern web browser.

### Local Setup

```bash
# Clone the repository
git clone https://github.com/joehunterdev/simple-screen-recorder.git
cd screen-recorder

# Open in your browser
# On Windows:
start index.html

# On macOS:
open index.html

# On Linux:
xdg-open index.html
```

### Deploy to Web

Since this is a static site with no backend, it's ready to deploy anywhere:

- **Netlify** - Drag and drop the folder
- **Vercel** - Connect your GitHub repo
- **GitHub Pages** - Push to `gh-pages` branch
- **Your own server** - Upload files via FTP or Git
- **Any static hosting** - Works with any web host

## Browser Support

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome/Edge | ✅ Yes | Full support including system audio |
| Firefox | ✅ Yes | Full support on Windows |
| Safari | ⚠️ Limited | Screen recording available, audio support limited |
| Opera | ✅ Yes | Full support (Chromium-based) |

## Technical Details

### Technologies Used

- **Screen Capture API** - Modern web API for screen recording
- **MediaRecorder API** - Handles video encoding
- **WebRTC** - Underlying technology for media streams

### Supported Output Format

- **MP4 (video/mp4)** - H.264 video codec, AAC audio codec

## API Reference

The application uses the following Web APIs:

```javascript
// Screen and audio capture
navigator.mediaDevices.getDisplayMedia({
  video: { mediaSource: "screen" },
  audio: true
});

// Recording
new MediaRecorder(stream, { mimeType: "video/mp4" });
```

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

### Areas for Enhancement

- Download button for recorded videos
- Recording timer display
- Pause/Resume functionality
- Quality settings
- Format options (WebM, etc.)
- Custom UI styling

## License

This project is open source and available under the MIT License.

## Troubleshooting

### "Permission Denied" Error
- Ensure your browser has permission to access screen recording
- Check your system's privacy settings

### No Audio in Recording
- Make sure "Audio" is selected in the permission dialog
- Check if your system audio output is working
- Some websites may block audio capture for security reasons

### Video Doesn't Play
- Ensure your video player supports MP4 format
- Try a modern browser (Chrome, Firefox, Edge)

## Privacy

All recordings are processed locally in your browser. No data is sent to external servers. Your recordings remain on your device until you delete them.

## Changelog

### v1.1.0
- Added system audio support
- Changed output format to MP4

### v1.0.0
- Initial release
- Basic screen recording functionality
- WebM format support

## Author

Created with ❤️ for content creators and developers

## Example Use Cases

Grab It is perfect for:

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
