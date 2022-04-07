

const inputSection = document.getElementById("inputSection");

function LoadSigninPage() {
    console.log("klicked");
    inputSection.innerHTML = `
    <form id="inputForm" action="../php/inlogg.php">

        <label for="uname">Användarnamn: </label><br>
        <input type="text" id="username" name="username" value="">
        <br>

        <label for="key">Lösenord: </label><br>
        <input type="text" id="password" name="password" value="">
        <br>

        <input type="button" name="submitData()" id="submitData" value="Next ->">
        <br>
        <p onclick="signin.LoadRegisterPage()" id="RegisterLink">Skapa konto</p>
    </form>
    `;
}

function LoadRegisterPage() {
    
    inputSection.innerHTML = `
    <form name="this" metod="post" action="../php/create_account.php">
        <label for="uname">Användarnamn: </label>
        <br>
        <input type="text" id="uname" name="uname" value="">
        <br>

        <label for="fname">Hela namnet: </label>
        <br>
        <input type="text" id="uname" name="uname" value="">
        <br>

        <label for="key">Lösenord: </label>
        <br>
        <input type="text" id="key" name="key" value="">
        <br>

        <button type="button" id="button">Registera konto</button>
        <br>
        <p id="SigninLink">Har du redan ett konto? Klicka här.</p>
    </form>
    `;
}



// document.getElementById("SigninLink").addEventListener('click', function() { 
//     LoadSigninPage(); 
// });
// document.getElementById("RegisterLink").addEventListener('click', function() { 
//     LoadRegisterPage(); 
// });

//Call
LoadSigninPage();


