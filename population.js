class Population {

  constructor() {

    this.population = []
    this.matingPool = []

    // fill the population with cells that have random DNA
    for (let i = 0; i < N; i++) {
      this.population[i] = new DNA()
    }
  }

  calculateFitness() {

    // calculate the fitness for every item in poplation
    for (let i = 0; i < N; i++) {
      this.population[i].calculateFitness()
    }

  }

  strongest() {

    // find the strongest element in the population
    let element = this.population[0]

    for (let i = 0; i < N; i++) {
      if (this.population[i].fitness > element) {
        element = this.population[i]
      }
    }

    return element.genetics.join('')

  }

  evolve() {

    // breed the new generation
    this.matingPool = []

    // fill the mating pool
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < this.population[i].fitness; j++) {
        this.matingPool.push(this.population[i])
      }
    }

    // breed the children and add them to the population, replacing their parents
    for (let i = 0; i < N; i++) {
      let mother = this.matingPool[floor(random(this.matingPool.length))]
      let father = this.matingPool[floor(random(this.matingPool.length))]
    
      let child = mother.crossover(father)
      child.mutate()

      this.population[i] = child
    }

  }

}