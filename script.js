const video = document.getElementById("video");
const input = document.getElementById("videoInput");

input.addEventListener("change", function() {
  const file = this.files[0];
  if (file) {
    video.src = URL.createObjectURL(file);
  }
});

function trimVideo() {
  const start = document.getElementById("start").value;
  const end = document.getElementById("end").value;

  if (start >= end) {
    alert("خطأ: البداية خاصها تكون أقل من النهاية");
    return;
  }

  video.currentTime = start;
  video.play();

  setTimeout(() => {
    video.pause();
  }, (end - start) * 1000);

  document.getElementById("result").innerText =
    "تم عرض الجزء المحدد (Simulation فقط)";
}
