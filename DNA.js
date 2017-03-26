function DNA() {

  this.genetics = []
  this.fitness = 0

  for (let i = 0; i < digits; i++) {
    this.genetics[i] = floor(random(10))
  }

  this.calculateFitness = function() {
    for (let i = 0; i < digits; i++) {
      if (this.genetics[i] == pi[i])
        this.fitness++
    }
  }

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

  this.mutate = function() {
    for (let i = 0; i < digits; i++) {
      if (random(1) < 0.02)
        this.genetics[i] = floor(random(10))
    }
  }

}