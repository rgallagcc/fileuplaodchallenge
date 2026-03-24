function simulateUpload() {
  const file = document.getElementById("fileInput").files[0];
  const out = document.getElementById("output");

  if (!file) {
    out.innerHTML = "⚠️ No file chosen.";
    return;
  }

  const filename = file.name.toLowerCase();
  const ext = filename.split(".").pop();

  const blacklist = ["php", "phtml", "php5", "phar", "jsp", "asp", "aspx"];

  if (blacklist.includes(ext)) {
    out.innerHTML = `
      ❌ Upload rejected.<br>
      Blocked extension detected: <code>.${ext}</code>
    `;
    return;
  }

  if (!file.type.startsWith("image/")) {
    out.innerHTML = `
      ⚠️ Suspicious MIME type: <code>${file.type}</code><br>
      This system attempts to accept only images.
    `;
    return;
  }

  out.innerHTML = `
    ✅ File “accepted” (simulation only)<br>
    <strong>Filename:</strong> ${filename}<br>
    <strong>MIME:</strong> ${file.type}<br><br>

    🔍 <strong>Now analyse the filters!</strong><br>
    - What bypasses might work?<br>
    - What assumptions does this system make?<br>
    - How could a real attacker exploit this?<br>
    - How would you fix it securely?
  `;
}
