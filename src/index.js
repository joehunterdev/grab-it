const start = document.getElementById("start");
const stop = document.getElementById("stop");
const download = document.getElementById("download");
const video = document.querySelector("video");
let recorder, stream, recordingBlob;

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
    "video/webm"
  ];
  
  for (const mimeType of mimeTypes) {
    if (MediaRecorder.isTypeSupported(mimeType)) {
      options.mimeType = mimeType;
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

download.addEventListener("click", () => {
  if (recordingBlob) {
    const url = URL.createObjectURL(recordingBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `recording-${new Date().toISOString().slice(0, 19).replace(/:/g, "-")}.mp4`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
});
