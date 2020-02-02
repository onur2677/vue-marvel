import axios from 'axios'
import md5 from 'md5'

const SECRET_KEY = ''
const PUBLIC_KEY = ''
const URI = 'http://gateway.marvel.com/v1/public/characters'

export async function getCharacterByName (name) {
  const ts = new Date().getTime()
  const hash = md5(ts + SECRET_KEY + PUBLIC_KEY)
  const fetchCharacters = await axios.get(
    `${URI}?apikey=${PUBLIC_KEY}&hash=${hash}&ts=${ts}&nameStartsWith=${name}`
  )
  return fetchCharacters
}

export async function getCharacterById (id) {
  const ts = new Date().getTime()
  const hash = md5(ts + SECRET_KEY + PUBLIC_KEY)
  const fetchCharacters = await axios.get(
    `${URI}/${id}?apikey=${PUBLIC_KEY}&hash=${hash}&ts=${ts}`
  )
  return fetchCharacters
}
