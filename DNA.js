class DNA {

  constructor() {
  
    this.genetics = []
    this.fitness = 0

    // fill the genes with random numbers 
    for (let i = 0; i < digits; i++) {
      this.genetics[i] = floor(random(10))
    }
  
  }

  calculateFitness() {

    // the fitness score is how many genes match the ideal DNA
    for (let i = 0; i < digits; i++) {
      if (this.genetics[i] == pi[i]) {
        this.fitness++
      }
    }

  }

  crossover(partner) {

    // breed two cells by merging the genes from each parent at a certain midpoint
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

  mutate() {

    // mutate the gene depending on the mutation rate
    for (let i = 0; i < digits; i++) {
      if (random(1) < 0.01) {
        this.genetics[i] = floor(random(10))
      }
    }

  }

}