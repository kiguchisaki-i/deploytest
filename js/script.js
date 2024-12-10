document.addEventListener("DOMContentLoaded", () => {
    const allowedStylesheets = [
        "https://comprime-dev01.com/test_ec_assets/css/common.css",
        "https://comprime-dev01.com/test_ec_assets/css/style.css"
    ];

    const links = document.querySelectorAll('link[rel="stylesheet"]');

    links.forEach(link => {
        const href = link.getAttribute("href");
        if (href && !allowedStylesheets.includes(href)) {
            link.parentNode.removeChild(link);
        }
    });
});
