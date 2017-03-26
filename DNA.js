function DNA() {

  this.genetics = []
  this.fitness = 0

  // fill the genetics with random digits
  for (let i = 0; i < digits; i++) {
    this.genetics[i] = floor(random(10))
  }

  // the fitness score is how many correct numbers the genetics have in the correct position
  this.calculateFitness = function() {
    for (let i = 0; i < digits; i++) {
      if (this.genetics[i] == pi[i])
        this.fitness++
    }
  }

  // breed a new child by mating with a partner and merging their dna
  this.crossover = function(partner) {
    let midpoint = floor(random(this.genetics.length))
    let child = new DNA()

    for (let i = 0; i < digits; i++) {
      if (i < midpoint)
        child.genetics[i] = this.genetics[i]
      else
        child.genetics[i] = partner.genetics[i]
    }

    return child
  }

  // at a 1% chance for each gene mutate it by replacing it
  this.mutate = function() {
    for (let i = 0; i < digits; i++) {
      if (random(1) < 0.01)
        this.genetics[i] = floor(random(10))
    }
  }

}