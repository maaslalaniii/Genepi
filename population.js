class Population {

  constructor() {

    this.population = []
    this.matingPool = []
    this.generation = 0

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

  averageFitness() {

    this.calculateFitness()

    let sum = 0

    // calculate the average fitness of the population
    for (let i = 0; i < N; i++) {
      sum += this.population[i].fitness
    }

    return sum / N

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

    this.generation++
    
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