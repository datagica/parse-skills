'use strict'
const ParseEntities = require('@datagica/parse-entities')
const data = require('./database.json')
class Parser extends ParseEntities {
  constructor(opts) {
    super({
      fields: ['label', 'aliases'],
      data,
      maxLength: 6,
    })
  }
}
const singletonInstance = new Parser()
const singletonMethod = function() { return singletonInstance.parse.apply(singletonInstance, arguments) }
module.exports = singletonMethod
module.exports.default = singletonMethod
module.exports.database = data
module.exports.parser = singletonInstance
module.exports.Parser = Parser