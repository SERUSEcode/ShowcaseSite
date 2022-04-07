const main = document.getElementById("main");

document.getElementById("projektUrl").addEventListener("click", function() {

    main.innerHTML = `
    <div id="mainText">
        <h2> Vällkomen till mina projekt! </h2>
        <p> Här kan du kolla igenom alla mina små till stora projekt. Det kan vara allt ifrån en miniräknare till animation</p>
        <p> Tips på vilka program du kan använda för att köra mina projekt finns här: Tips!</p>
    </div>
    
    <br><br><br>

    <div id="container">
		<div id="row">
			<div class="slot">
				<a href="scr/html/projekt/java_bibliotek.html" class="link_project">Biblotekssystem i java</a>
				<a href="scr/download/java_bibliotek.java" download class="link_download">Ladda ner projekt</a>
			</div>
			<div class="slot"></div>
			<div class="slot"></div>
			<div class="slot"></div>
			<div class="slot"></div>
			<div class="slot"></div>
			<div class="slot"></div>
			<div class="slot"></div>
		</div>
	</div>
    `;
});