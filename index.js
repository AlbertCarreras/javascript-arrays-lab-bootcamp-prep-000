var arrayOriginal = ["Milo", "Otis", "Garfield"]
var kittens = arrayOriginal

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

var kittens = arrayOriginal

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

var kittens = arrayOriginal

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}