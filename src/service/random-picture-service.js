export default class RandomPicture {
  getResources = async (url) => {
    const result = await fetch(url);
    return result;
  }
  getRandomDog = async () => {
    const image = await this.getResources('https://random.dog/woof.json');
    return this._transformToImage(await image.json(), 'url');
  }
  getRandomCat = async () => {
    const image = await this.getResources('https://aws.random.cat/meow');
    return this._transformToImage(await image.json(), 'file');
  }
  getRandomGrayscale = async () => {
    const image = await this.getResources('https://picsum.photos/500/500?grayscale');
    return this._transformToImage(image, 'url');
  }
  getRandomBlur = async () => {
    const image = await this.getResources('https://picsum.photos/200/300/?blur')
    return this._transformToImage(image, 'url');
  }
  _transformToImage = (data, key) => {
    return data[key]
  }
}