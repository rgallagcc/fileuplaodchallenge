# File Upload Security Challenge — Interactive Version

This is a safe, simulated vulnerable file upload environment used for cybersecurity teaching.  
All processing happens client-side; nothing is executed and no uploads are stored.

## 🎮 Challenge Rules

Upload different files to trigger simulated validation behaviours.

## 🏁 Flags

You earn flags by:

- **FLAG-01** — Uploading a non-image file  
- **FLAG-02** — Triggering blacklist-based extension blocking  
- **FLAG-03** — Attempting a double extension (e.g., `shell.php.jpg`)  
- **FLAG-04** — Successfully uploading a valid image  

Each flag awards points. Your total score appears on-screen.

## 📚 Learning Objectives

Students will:

- Understand why file uploads are dangerous
- Analyse weak validation (blacklists, MIME trust)
- Test bypass strategies safely
- Reflect on secure design patterns

## 🚀 Hosting

Push to GitHub → Settings → Pages → Deploy branch → Open URL.
