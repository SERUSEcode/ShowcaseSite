const main = document.getElementById("main");

function AddStartpage() {
    
    main.innerHTML = `
    <div id="startPageBox">
    <div id="mainPic">
            <img src="scr/img/KevinsFaceTransCircle2.png" alt="" style="width: 50%;">
        </div>
        <div id="headerText">
            
            <h2>Hejsan och varmt vällkomen till min showcase webbsida!</h2>
            <p>
            Denna webbsida är till för att vissa minakunskaper inom Html, css, script och även databaser. 
            Ovan ser du en menybar där du kan klicka runt till mina olika projekt eller bilder på projekt 
            och skiser. Du kan även testa mina databasser igenom att skapa ett konto eller logga in med användarnamn "abc" och lösenord "123".
            </p>
        </div>
        
        
        
       
    </div>
        `;
}

document.getElementById("indexUrl").addEventListener("click", function() { AddStartpage(); });
//Call
AddStartpage();