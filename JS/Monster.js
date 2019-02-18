export default class Monster extends Actor{
  constructor (options)  {
    super(options.name,options.image);
    this.health = 300;
  }
}
