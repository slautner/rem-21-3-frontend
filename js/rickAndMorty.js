// response from https://rickandmortyapi.com/api/character
import rickAndMortyCharacters from "./rickAndMortyCharacters.json"

export function filterAlive() {
    const rickAndMortyCharacterResults = rickAndMortyCharacters.results;
    return rickAndMortyCharacterResults.filter(character => character.status === 'Alive')
}

export function mapAliveOrigin() {
    return filterAlive().map(character => {
        return {name: character.name, origin: character.origin.name}
    })
}
