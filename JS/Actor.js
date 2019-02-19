class Actor {
  constructor (options){
    this.name = options.name;
    this.image = options.image;
    this.life = options.life;
    this.attack = options.attack;
<<<<<<< HEAD
    this.defence = options.defence
=======
    this.shield = options.shield
>>>>>>> 736fc32c5210e5d2702ea5ad372234aed763069f
  }
  fight(options){
    options.target.life = this.attack.
  }
}

export default Actor;
