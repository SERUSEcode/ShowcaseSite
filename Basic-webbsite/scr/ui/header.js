const header = document.getElementById("header");

function AddHeader() {
    
    header.innerHTML += `
    <nav id=navigation>
        <li><a id="indexUrl"href="index.html">Startsida</a></li>
        <li><a id="projektUrl">Projekt</a></li>
        <li><a id="contactUrl">Om mig</a></li>
        
        
    </nav>
    `;
}

//Call
AddHeader();


{/* <nav id=login>
            <li><a href="scr/html/konto/signin.html">Logga&nbsp;in Registera&nbsp;dig</a></li>
        </nav> */}