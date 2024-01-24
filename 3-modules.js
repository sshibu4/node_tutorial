//Modules - Encapsulated code(Only sharing minimum)
//Every file in node is a module

const names = require('./4-names')
const sayHi = require('./5-func_definition')
const data = require('./6-alternative_flavors')

require('./7-mind_grenade')

sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)