class Animal {
  constructor(name_, species_) {
    this.name = name_;
    this.species = species_;
    this.lastFedTime = 0;
  }

  feed() {
    this.lastFedTime = new Date();
  }
}

class Carnivore extends Animal {
  constructor(name_, species_) {
    super(name_, species_);
  }

  feed() {
    console.log(`feeding carnivore ${this.species} - meet served`);
  }
}

class Herbivore extends Animal {
  constructor(name_, species_) {
    super(name_, species_);
  }

  feed() {
    console.log(`feeding herbivore ${this.species} - veggies served`);
  }
}

class ZooKeeper {
  constructor() {
    this.list_of_animals = [];
  }

  addAnimal(animal) {
    this.list_of_animals.push(animal);
  }

  feedAll() {
    this.list_of_animals.forEach((animal) => {
      animal.feed();
      animal.lastFedTime = new Date();
    });
  }

  getLastFed(name) {
    return this.list_of_animals.find((animal) => {
      return animal.name === name;
    }).lastFedTime;
  }

  getBySpecies(species) {
    return this.list_of_animals.filter((animal) => {
      return animal.species === species;
    });
  }
}

const zoo = new ZooKeeper();
zoo.addAnimal(new Carnivore("Simba", "Lion"));
zoo.addAnimal(new Herbivore("Longneck", "Giraffe"));

zoo.feedAll();
console.log(zoo.getLastFed("Simba"));
