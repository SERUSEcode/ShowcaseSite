const header = document.getElementById("header");

function AddHeader() {
    
    header.innerHTML += `
    <nav id=navigation>
        <li id="indexUrl"><a>Startsida</a></li>
        <li id="projektUrl"><a>Mina Projekt</a></li>
        <li id="contactUrl"><a>Om mig</a></li>
    </nav>
    `;
}

//Call
AddHeader();
