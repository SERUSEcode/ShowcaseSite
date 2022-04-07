const main = document.getElementById("main");

document.getElementById("contactUrl").addEventListener("click", function() {

    main.innerHTML = `
    <p>
        <a href="mailto:kevin@ullbrandt.com">
            kevin@ullbrandt.com
        </a>
    </p>
    `;
});