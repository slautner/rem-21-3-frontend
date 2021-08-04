const characterUrl = "https://rickandmortyapi.com/api/character";

export const fetchAllCharacters = () => fetch(characterUrl)
    .then(response => response.json())
    .then(body => body.results)
