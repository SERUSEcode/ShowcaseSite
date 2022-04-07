const main = document.getElementById("main");

document.getElementById("contactUrl").addEventListener("click", function() {

    main.innerHTML = `
    <p>
        <a href="mailto:kevin@ullbrandt.com"> kevin@ullbrandt.com</a>
        <br>
        <img id="profilePic" src="scr/img/KevinsFace.jpg" alt="" style="width: 40%; padding-top: 10%;">
    </p>
    `;
});