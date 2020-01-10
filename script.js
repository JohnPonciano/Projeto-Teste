const url='https://swapi.co/api/people/'


function readJson() {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro HTTP: " + response.status);
            }
            return response.json();
        })
        .then(json => {
            this.response = json;
            document.getElementById('nome').src = response.data.nome;
            document.getElementById('gender').innerHTML = response.data.first_name;
            document.getElementById('birth_year').innerHTML = response.data.last_name;
        })
        .catch(function () {
            this.dataError = true;
        })
}

readJson();