'use strict'

const say = require('./say')

const hbd = () => {
  const message = `🎂 🎂 🎂 🎂 🎂 🎂 🎂 🎂 🎂 🎂 🎂 🎂 🎂 🎂 🎂

🎉 🎉 🎉  Happy Birthday, mizdra!! 🎉 🎉 🎉

🎂 🎂 🎂 🎂 🎂 🎂 🎂 🎂 🎂 🎂 🎂 🎂 🎂 🎂 🎂`
  const options = {align: 'center', padding: 1, borderColor: 'blue'}

  say(message, options)
}

module.exports = hbd
