

class MarvelService {
   getResources = async (url) => {
    let res = await fetch(url)

    if(!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`)
    }
    return await res.json()
  }

  getAllCharacters = () => {
    return this.getResources('https://gateway.marvel.com:443/v1/public/characters?apikey=4a6f10ff8b34a7c84c34fc21f628bc72');
  }
}


export default MarvelService;
