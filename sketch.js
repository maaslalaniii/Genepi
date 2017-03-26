function setup() {

  noCanvas()

  frameRate(15)

  // setup the dom elements to show progress
  display = select('#display')
  result = select('#result')
  generation = document.querySelector('#generation span')

  cache = document.querySelector('#cache')
  fitness = document.querySelector('#fitness')

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
    
    console.log(population)

    generation.innerHTML = population.generation
    
    createP(population.strongest()).parent(cache)
    createP(population.averageFitness()).parent(fitness)
    
    cache.scrollTop = cache.scrollHeight
    fitness.scrollTop = fitness.scrollHeight
  }

}