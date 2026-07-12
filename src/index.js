const start = document.getElementById("start");
const stop = document.getElementById("stop");
const download = document.getElementById("download");
const video = document.querySelector("video");
const formatSelect = document.getElementById("formatSelect");
let recorder, stream, recordingBlob, recordingMimeType = "video/mp4";

async function startRecording() {
  stream = await navigator.mediaDevices.getDisplayMedia({
    video: { mediaSource: "screen" },
    audio: true
  });
  
  // Try iPhone-compatible codec first, fall back to video/mp4, then webm
  let options = {};
  const mimeTypes = [
    'video/mp4;codecs="avc1.42E01E,mp4a.40.2"',  // H.264 + AAC (iPhone compatible)
    "video/mp4",
    "video/webm;codecs=vp9,opus",
    "video/webm"
  ];
  
  for (const mimeType of mimeTypes) {
    if (MediaRecorder.isTypeSupported(mimeType)) {
      options.mimeType = mimeType;
      recordingMimeType = mimeType;
      updateFormatOptions(mimeType);
      break;
    }
  }
  
  recorder = new MediaRecorder(stream, options);

  const chunks = [];
  recorder.ondataavailable = e => chunks.push(e.data);
  recorder.onstop = e => {
    const completeBlob = new Blob(chunks, { type: chunks[0].type });
    recordingBlob = completeBlob;
    video.src = URL.createObjectURL(completeBlob);
    download.style.display = "block";
  };

  recorder.start();
}

start.addEventListener("click", () => {
  start.setAttribute("disabled", true);
  stop.removeAttribute("disabled");

  startRecording();
});

stop.addEventListener("click", () => {
  stop.setAttribute("disabled", true);
  start.removeAttribute("disabled");

  recorder.stop();
  stream.getVideoTracks()[0].stop();
});

function updateFormatOptions(mimeType) {
  formatSelect.innerHTML = "";
  
  if (mimeType.includes("mp4")) {
    formatSelect.innerHTML += '<option value="mp4">MP4 (Recommended for iPhone)</option>';
    formatSelect.innerHTML += '<option value="mov">MOV (QuickTime - iPhone/Mac)</option>';
  } else if (mimeType.includes("webm")) {
    formatSelect.innerHTML += '<option value="webm">WebM (Chrome/Firefox)</option>';
    formatSelect.innerHTML += '<option value="mkv">MKV (Universal container)</option>';
  }
}

download.addEventListener("click", () => {
  if (recordingBlob) {
    const format = formatSelect.value || "mp4";
    const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, "-");
    const filename = `recording-${timestamp}.${format}`;
    
    const url = URL.createObjectURL(recordingBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
});
