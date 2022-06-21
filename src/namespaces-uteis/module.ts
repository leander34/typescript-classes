import _ from 'lodash'

_.mult = function(array: number[]): number {
    return array.reduce((total, atual) => total * atual, 1)
}

global.MINHAGLOBAL = "dda";

export default _