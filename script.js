const nameHero = "Octadroid"

const posicaoInicial = parseInt(gets(1));
const totalPassos = parseInt(gets(19));


let calc = posicaoInicial + totalPassos
let percurso = passos(calc)

let positionEnd = loc

function passos (qtdpassos) {

    
  
  if (qtdpassos >= 0 && qtdpassos <= 10) {
    loc = "Iniciando uma perigosa Jornada pela Floresta Sombria"
  }
  else if (qtdpassos >= 11 && qtdpassos <= 20) {
    loc = "CUIDADO!!! Voce está no meio da Floresta Sombria fique atento ou pode lhe custar  caro!!!"
  }
  else if (qtdpassos>= 21 && qtdpassos <=30) {
    loc = "Agora você enfrentará o temido dragão da Floresta Sombria"
  }

  return loc
}

console.log("Posicao final do heroi: "+calc)

