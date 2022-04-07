const main = document.getElementById("main");

document.getElementById("contactUrl").addEventListener("click", function() {

    main.innerHTML = `
    <p>
        Namn: Kevin Ullbrandt
        <br><br>
        Telefonummer: 0793374078
        <br><br>
        Email: <a href="mailto:kevin@ullbrandt.com"> kevin@ullbrandt.com</a>
        <br>
        <img id="profilePic" src="scr/img/KevinsFace.jpg" alt="" style="width: 40%; padding-top: 10%;">
    </p>
    `;
});