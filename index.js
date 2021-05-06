const cero = document.getElementById('cero');
const uno = document.getElementById('uno');
const dos = document.getElementById('dos');
const tres = document.getElementById('tres')
const btnEmpezar = document.getElementById('btnEmpezar');

class Juego{
    constructor(){
        this.inicializar()
        this.generarSecuencia()
        this.siguienteNivel()
    }

    inicializar(){
        btnEmpezar.classList.add('hide');
        this.nivel = 1
        this.botones = {
            cero,
            uno,
            dos,
            tres
        }
    }

    generarSecuencia(){
        this.secuencua = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4)) //es importante poner .fill para usar .map
    }

    siguienteNivel(){
        this.iluminarSecuencia()
    }

    transformarElementoAColor(num){
        switch(num){
            case 0:
                return 'cero'
            case 1:
                return 'uno'
            case 2:
                return 'dos'
            case 3:
                return 'tres'
        }
    }

    iluminarSecuencia(){
        for(let i = 0; i < this.nivel; i++){
            
            const boton = this.transformarElementoAColor(this.secuencua[i])
            setTimeout(() =>  this.iluminarBoton(boton), 1000 * i)
        } 
    }

    iluminarBoton(boton){
        this.botones[boton].classList.add('light')
        setTimeout(() => this.apagarBoton(boton), 350)
    }

    apagarBoton(boton){
        this.botones[boton].classList.remove('light')
    }

}

function empezarJuego(){
  var juego = new Juego()
   
}