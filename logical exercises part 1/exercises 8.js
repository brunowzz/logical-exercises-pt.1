// [ ] Faça um programa que imprima na tela se um nome é diferente ao outro nome digitado. 
// Porém, os dois nomes devem estar em um Array. Ex: const array = ["João", "Maria"]. João e João, imprime false. João e Maria, imprime true.

const array = ["Bruno", "Maria"]
array[0] = true
array[1] = true 

const comparison = array[0] == array[1]

console.log(comparison)
