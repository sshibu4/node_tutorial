//local dependency
//npm i <packageName>


//global dependency:
//npm install -g <packageName>
//sudo npm install -g <packageName> (mac)

//npm init -y -----> command for package.json
//node_modules folder have all the dependencies

//we need package json to provide information about the project such as the dependencies


const  _ = require('lodash')

const items =  [1, [2,[3,[4]]]]
const newItems = _.flattenDeep(items)

console.log(newItems)
