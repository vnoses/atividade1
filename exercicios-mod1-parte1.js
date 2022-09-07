//  1.Crie uma variável para cada tipo de primitivo
var booleana = true
var nulo = null
var indef
var numero  = 10
var string = "Texto"

// 2.Crie duas variáveis, um numero com tipo number e outro numero com tipo string, verifique a saída com e sem o operador typeof

var numeroNumber = 22
var numeroString = "22"

console.log(typeof numeroNumber)
console.log(typeof numeroString)

// 3.Utilize um operador ternário para validar se um numero é par ou impar
var numeroImpOuPar = 15
console.log( numeroImpOuPar % 2 == 0 ? "O numero é Par" : "O numero é Impar")

// 4.Lance um erro caso uma variável seja undefined

try {
    throw "Variavel não definida"
} catch (error) {
    !indef && console.log(error)
}

// 5.Crie diversos objetos que representem itens encontradas em um restaurante

var panela  = {marca  : "Tramontina", material : "Aço Inox", cor : "Vermelha"}

var microoondas = {marca : "Consul", potencia : 1.300, litros : 20 }

var talheres = {marca: "Tramontina", material : "Aço Inox", quantidadeDePeças : 160 }

// Um sistema de estoque em uma fabrica de caixas controla duas propriedades de seu produto, dimensões(AxLxC) e quantidade

// 1.Crie 2 objetos para representar diferentes informações no sistema

var caixa1 = {
    altura : 40,
    largura : 40,
    comprimento : 40,
    quantidade : 62
      
}

var caixa2 = {
    altura : 50,
    largura : 30,
    comprimento : 30, 
    quantidade : 45
}

// 2.Calcule o volume para cada modelo de caixa e o total no estoque

var volumeCaixa1 = caixa1.altura * caixa1.largura * caixa1.comprimento

var volumeCaixa2 = caixa2.altura * caixa2.largura * caixa2.comprimento

var estoque = caixa1.quantidade + caixa2.quantidade

console.log(volumeCaixa1)
console.log(volumeCaixa2)
console.log(estoque)
// 3.Salve o volume total no objeto de cada informação no estoque

caixa1.volume = volumeCaixa1
caixa2.volume = volumeCaixa2

console.log(caixa1.volume)
console.log(caixa2.volume)

console.log(caixa1)
console.log(caixa2)

// 4.Se uma das dimensões for nula não devera executar o calculo de volume

// Crie um objeto para representar um casa, cada propriedade é um cômodo, em caso de mais de um cômodo utilize uma estrutura para armazenar todos eles. Mínimo 7 cômodos

var lista = ["Sala de Tv", "Quarto", "Banheiro", "Escritório", "Lavanderia"]

var casa = {comodo1 : "Sala de Tv", comodo2 : "Banheiro", quartos : ["Quarto crianças", "Quarto casal1", "Quarto casal Suite", "Quarto hóspedes"], comodo4 : "Lavanderia"}

console.log(casa)

// 1.Para os banheiros utilize uma variável booleana para verificar se ele esta ocupado

var ocupado = true
console.log(ocupado == true ? "Banheiro ocupado" : "Banheiro desocupado")

// 2.Crie uma logica para verificar se o banheiro esta ocupado, banheiro ocupado devera lançar uma erro

var verifOcuped = undefined