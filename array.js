const frutas = ['Maça', 'Banana']
console.log(frutas.length)

//acessando um item index no array
const primeiro = frutas[0]
const ultimo = frutas[frutas.length - 1]
console.log(primeiro, ultimo)

//interrar um array
frutas.forEach(function (item, indice, array) {
    console.log(item, indice)
})

//adicionar um item ao final do array
const adicionar = frutas.push('Laranja')
console.log(frutas)

//remover um item do final do array
const removerUltimo = frutas.pop();
console.log(frutas)

//revover do inicio do array
const removerInicio = frutas.shift()
console.log(frutas)

//adicionar ao inciio do array
const adicionarInicio = frutas.unshift('Morango')
console.log(frutas)

//procurar um indice de um item no array
frutas.push('Manga')
const procurar = frutas.indexOf('Banana')
console.log(procurar)

//remover um item pela posição do indice
const removeItem = frutas.splice(procurar, 1)
console.log(frutas)

//remover itens de uma posição de itens
const vegetais = ['Repolho', 'Nabo', 'Rabanete', 'Cenoura']
console.log(vegetais)

const pos = 1, n = 2
const itensRemovidos = vegetais.splice(pos, n)

console.log(vegetais)
console.log(itensRemovidos)

//copiar um array
const copiar = frutas.slice();
console.log(frutas)