'use strict'

const say = require('./say')

const hbd = () => {
  const message = `                🎂 🎂 🎂 🎂 🎂 🎂 🎂 🎂 🎂 🎂 🎂 🎂 🎂 🎂 🎂

                🎉 🎉 🎉  Happy Birthday, mizdra!! 🎉 🎉 🎉
                🎉 🎉 🎉       ${new Date().getFullYear()} / 10 / 14      🎉 🎉 🎉

                🎂 🎂 🎂 🎂 🎂 🎂 🎂 🎂 🎂 🎂 🎂 🎂 🎂 🎂 🎂`
  const options = {
    align: 'center',
    padding: 1,
    borderColor: 'blue',
    borderStyle: 'round',
  }

  say(message, options)
}

module.exports = hbd
