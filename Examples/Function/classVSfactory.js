
class pessoa {
   constructor(nome){
      this.nome = nome 
   }
   falar() {
   console.log(`Meu nome e ${this.nome}`);
   }
}

const p1 = new pessoa("Leonardo")

p1.falar()

const criarPessoa = nome => {
   return {
      falar: () => console.log(`Meu nome e ${nome}`)
   }
}

const p2 = criarPessoa("Leonardo")
p2.falar()