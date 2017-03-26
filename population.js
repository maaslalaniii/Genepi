function Population() {

  this.population = []

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

}