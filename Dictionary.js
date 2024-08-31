let form = document.querySelector('form');
let button = document.querySelector('button');
let resultDiv = document.querySelector('.result')

const getWordInput = async(word) => {
     let data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
     let response = await data.json();
     console.log(response)
     let DefContainer = response[0].meanings[0].definitions[0]
     resultDiv.innerHTML = `
     <h2><strong>Word: </strong>${response[0].word}</h2>
     <p>${response[0].meanings[0].partOfSpeech}</p>
     <p><strong>Meaning : </strong> ${response[0].meanings[0].definitions[0].definition === undefined ? "Not Found" : response[0].meanings[0].definitions[0].definition }</p>
     <p><strong>Example : </strong> ${response[0].meanings[0].definitions[0].example === undefined ? "Not Found" : response[0].meanings[0].definitions[0].example}</p>
     <p><strong>Synonyms : </strong> ${response[0].meanings[0].synonyms === undefined ? "Not Found" : response[0].meanings[0].synonyms}</p>
     <p><strong>Antonyms : </strong> ${response[0].meanings[0].antonyms === "" ? "Not Found" : response[0].meanings[0].antonyms}</p>
     <a href ="${response[0].sourceUrls}" target = "_blank">Read More</a>
     `
}

button.addEventListener("click",(e) => {
    e.preventDefault();
    getWordInput(form.elements[0].value);
})