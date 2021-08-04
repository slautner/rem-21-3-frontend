// response from https://rickandmortyapi.com/api/character
import rickAndMortyCharacters from "../json/rickAndMortyCharacters.json"

export function filterAlive() {
    const rickAndMortyCharacterResults = rickAndMortyCharacters.results;
    return rickAndMortyCharacterResults.filter(character => character.status === 'Alive')
}

export function mapAliveOrigin() {
    return filterAlive().map(character => {
        return {name: character.name, origin: character.origin.name}
    })
}

// -- same but as const functions

export const getFilterAlive = (characters) => characters.filter(character => character.status === 'Alive')

const isNonHumanAndAlive = (character) => character.status === 'Alive' && character.species !== 'Human';
export const getFilterAliveNonHumans = characters => characters.filter(character => isNonHumanAndAlive(character))

export const getMapAliveOrigin = (characters) => characters.map(character => (
        {name: character.name, origin: character.origin.name}
    )
)
