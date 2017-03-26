function Population() {

  this.population = []
  this.matingPool = []

  // fill the population with random genetics
  for (let i = 0; i < N; i++) { 
    this.population[i] = new DNA()
  }

  // calculate the fitness for every item in poplation
  this.calculateFitness = function () {

    for (let i = 0; i < N; i++) {
      this.population[i].calculateFitness()
    }
  
  }

  // find the strongest element in the population
  this.strongest = function() {

    let element = this.population[0]
    
    for (let i = 0; i < N; i++) {
      if (this.population[i].fitness > element) {
        element = this.population[i]
      }
    }
    
    return element.genetics.join('')
  
  }

  // breed the new generation
  this.evolve = function() {

    // clear the mating pool
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