const header = document.getElementById("header");

function AddHeader() {
    
    header.innerHTML += `
    <nav id=navigation>
        <li><a href="index.html">Startsida</a></li>
        <li><a href="projekt.html">Projekt</a></li>
        <li><a href="index.html">Om mig</a></li>
        
        <nav id=login>
            <li><a href="scr/html/konto/signin.html">Logga&nbsp;in Registera&nbsp;dig</a></li>
        </nav>
    </nav>
    `;
}

//Call
AddHeader();