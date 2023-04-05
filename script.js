var input_tekst = document.querySelector("#input_tekst");
var input_jezyk = document.querySelector("#input_jezyk");
var input_jezyk1 = document.querySelector("#input_jezyk1");
var input_przetlumaczone = document.querySelector("#input_przetlumaczone");
var div_przetlumaczone = document.querySelector("#div_przetlumaczone");
var button_tlumacz = document.querySelector("#button_tlumacz");
button_tlumacz.addEventListener("click",tlumacz);



function tlumacz(){

div_przetlumaczone.classList.remove("ukryty")

const encodedParams = new URLSearchParams();
encodedParams.append("q", input_tekst.value);
encodedParams.append("target", input_jezyk.value);
encodedParams.append("source", input_jezyk1.value);

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'Accept-Encoding': 'application/gzip',
		'X-RapidAPI-Key': '71569780camsh12f1386a0677a84p17170djsn227287366a93',
		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
	},
	body: encodedParams
};

fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
	.then(response => response.json())
	.then(response => document.querySelector("#input_przetlumaczone").value = response.data.translations[0].translatedText)
	.catch(err => console.error(err));
}