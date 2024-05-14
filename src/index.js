function displayPoem(response) {
new Typewriter('#poem', {
  strings: response.data.answer,
  autoStart: true,
  delay: 50,
  cursor: "",
});

}

function generatePoem(event) {
    event.preventDefault();


    let poemIdeaInput = document.querySelector("#poem-idea");
    let apiKey = "3cb28et509a1bcc4faba00e421c05bao";
    let context = "You are a humourous and sarcastic GenZ poem writer. Generate a short 6 line poem in basic HTML and seperate each line with a <br />. Make sure to follow the user idea very accurately. Sign the poem with PeaceOutFam";
    let prompt = `User Idea: Generate a poem using GenZ language and humour about ${poemIdeaInput.value}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiURL).then(displayPoem);


}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);