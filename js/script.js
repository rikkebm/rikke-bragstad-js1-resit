const baseUrl = "https://official-joke-api.appspot.com/";
const jokeUrl = `${baseUrl}random_joke`;

async function getJokes() {

  try {

    const response = await fetch(jokeUrl);
    const json = await response.json();

    displayJoke(json);

  } catch (error) {
    document.querySelector("h1").innerHTML = error;

  }
}

getJokes();

function displayJoke(json) {
  console.dir(json);

  const titleContainer = document.querySelector("title");
  const typeContainer = document.querySelector("h2");
  const jokeContainer = document.querySelector(".setup");
  const punchlineContainer = document.querySelector(".punchline");

  let typeHtml = "";
  let jokeHtml = "";
  let punchlineHtml = "";

  typeHtml += `${json.type}`;
  jokeHtml += `${json.setup}`;
  punchlineHtml += `${json.punchline}`;

  titleContainer.innerHTML = jokeHtml;
  typeContainer.innerHTML = typeHtml + " jokes";
  jokeContainer.innerHTML = jokeHtml;
  punchlineContainer.innerHTML = punchlineHtml;
}
