
const cero = document.getElementById('cero');
const uno = document.getElementById('uno');
const dos = document.getElementById('dos');
const tres = document.getElementById('tres')
const btnEmpezar = document.getElementById('btnEmpezar');
const ULTIMO_NIVEL = 1

class Juego{
    
    constructor(){
       
            this.inicializar()
            this.generarSecuencia()
            setTimeout(this.siguienteNivel(), 500)
            
        
        
    }

    inicializar(){
        this.siguienteNivel = this.siguienteNivel.bind(this)
        this.elegirBoton = this.elegirBoton.bind(this) //.bind especifica quien es this, si no, el boton sera this
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
        this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4)) //es importante poner .fill para usar .map
    }

    siguienteNivel(){
        this.subnivel = 0
        this.iluminarSecuencia()
        this.agregarEventosClick()
    }

    transformarElementoABoton(num){
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

    transformarBotonANumero(boton){
        switch(boton){
            case 'cero':
                return 0
            case 'uno':
                return 1
            case 'dos':
                return 2
            case 'tres':
                return 3
        }
    }

    iluminarSecuencia(){
        for(let i = 0; i < this.nivel; i++){
            
            const boton = this.transformarElementoABoton(this.secuencia[i])
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

    agregarEventosClick(){
        this.botones.cero.addEventListener('click', this.elegirBoton) //nos regresa el evento
        this.botones.uno.addEventListener('click', this.elegirBoton)
        this.botones.dos.addEventListener('click', this.elegirBoton)
        this.botones.tres.addEventListener('click', this.elegirBoton)
    }

    eliminarEventosClick(){
        this.botones.cero.removeEventListener('click', this.elegirBoton) 
        this.botones.uno.removeEventListener('click', this.elegirBoton)
        this.botones.dos.removeEventListener('click', this.elegirBoton)
        this.botones.tres.removeEventListener('click', this.elegirBoton)
    }

    ganoElJuego(){
        swal('Hola','Felicitaciones, ganaste el juego!', 'success') //devuelve una promesa
            .then(() => {
                
                this.inicializar.bind(this)
            })
    }

    perdioElJuego(){
        swal('Hola', 'Lo lamentamos, perdiste :(', 'error')
         .then(() => {
             this.eliminarEventosClick.bind(this)
             this.inicializar.bind(this)
         })
    }


    elegirBoton(ev){
        const nombreBoton = ev.target.dataset.boton
        const numeroBoton = this.transformarBotonANumero(nombreBoton)
        if(numeroBoton === this.secuencia[this.subnivel]){
            this.subnivel++
            if(this.subnivel === this.nivel){
                this.nivel++
                    this.eliminarEventosClick()
                if(this.nivel === ULTIMO_NIVEL + 1){
                    this.ganoElJuego()
                }else{
                    setTimeout(this.siguienteNivel, 1500)
                }

            }
        }else{
           this.perdioElJuego()
        }

    }

    

    
    
}

function empezarJuego(){
  var juego = new Juego()
   
}