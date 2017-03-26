function setup() {

  // setup the dom elements to show progress
  display = createP('PI')
  result = createP('Evolving...')

  // create a population with random genetics
  population = new Population()

}

function draw() {

  // calculate the fitness of the population
  population.calculateFitness()

  // show the most fit number of the population
  display.html(population.strongest())

  // check to see if the algorithm was successful
  if (population.strongest() == pi.join('')) {
    result.html('Evolution completed!')
  } else {
    population.evolve()
  }

}