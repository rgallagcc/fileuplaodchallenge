function simulateUpload() {
  const file = document.getElementById("fileInput").files[0];
  const result = document.getElementById("result");

  if (!file) {
    result.innerHTML = "⚠️ No file selected.";
    return;
  }

  const filename = file.name.toLowerCase();
  const ext = filename.split(".").pop();

  const blacklist = ["php", "phtml", "php5", "phar", "jsp", "asp", "aspx"];

  // Flag: double extension
  if (filename.includes(".php.") || filename.match(/\.(php|asp|jsp)\.[a-z0-9]+$/)) {
    awardFlag("doubleExt");
  }

  // Blocked executable extensions
  if (blacklist.includes(ext)) {
    awardFlag("blockedExt");

    result.innerHTML = `
      ❌ Upload blocked.<br>
      Blocked extension detected: <code>.${ext}</code>
      There seems to be a way around , perhaps a disguise?
    `;
    return;
  }

  // Non-image file
  if (!file.type.startsWith("image/")) {
    awardFlag("nonImage");

    result.innerHTML = `
      ⚠️ Suspicious MIME type: <code>${file.type}</code><br>
      Only images are allowed.
    `;
    return;
  }

  // Valid image file
  awardFlag("legitImage");

  result.innerHTML = `
    ✅ Valid image accepted (simulation only).<br>
    <strong>Filename:</strong> ${filename}<br>
    <strong>MIME:</strong> ${file.type}<br><br>
    🎯 Try to trigger all flags!
  `;
}
