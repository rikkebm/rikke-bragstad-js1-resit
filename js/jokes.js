const baseUrl = "https://official-joke-api.appspot.com/";
const jokeUrl = `${baseUrl}random_ten`;

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

  const container = document.querySelector(".row");

  let html = "";

  for (i = 5; i < json.length; i++) {


    html += `

    <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="card">
                        <div class="joke-detail">
                            <h4 class="type">${json[i].type}</h4>
                            <div class="setup">${json[i].setup}</div>
                            <div class="punchline">${json[i].punchline}</div>
                        </div>
                    </div>
                </div>
`;
    container.innerHTML = html;
  }
}
