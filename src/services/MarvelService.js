

class MarvelService {

  _apiBase = 'https://gateway.marvel.com:443/v1/public/';
  _apiKey = 'apikey=4a6f10ff8b34a7c84c34fc21f628bc72'

   getResources = async (url) => {
    let res = await fetch(url)

    if(!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`)
    }
    return await res.json()
  }

  getAllCharacters = () => {
    return this.getResources(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
  }

  getCharacter = (id) => {
    return this.getResources(`${this._apiBase}characters/${id}?&${this._apiKey}`);
  }
}


export default MarvelService;
