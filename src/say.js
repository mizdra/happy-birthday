'use strict'

const pokemonsay = require('@mizdra/pokemonsay').default

const say = (text, options) => {
  const pokemon = pokemonsay.iChooseYou({ number: 230 })[0]
  const box = pokemonsay.say({ ...pokemon, text, options })
  console.log(`${pokemon.say}\n${box}`)
}

module.exports = say
