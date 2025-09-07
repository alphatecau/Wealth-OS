// --- Analytics Placeholders ---
console.log("Analytics active");
// Google Analytics
// Replace G-XXXX with your GA ID
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date()); gtag('config', 'G-XXXX');

// Plausible
// <script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
