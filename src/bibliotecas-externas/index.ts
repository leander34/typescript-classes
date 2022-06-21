// instale primeiro a lib
// depois instale a tipagem
// npm i validator
// npm i @types/validator --D
// npm i lodash
// npm i @types/lodash

import validator from 'validator'
import _ from 'lodash'
console.log(validator.isEmail('leander@hotm.com'))
console.log(_.clone([1, 2, 3, 4, 5]))
