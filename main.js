class Carrera{
    constructor(){
        this.pasosTortuga = 0
        this.pasosLiebre = 0
    }

    carrera(){
        let dado
        for(let i = 0; i < 1000 ; i++){
            dado = Math.floor(Math.random() * (100 - 1 + 1) ) + 1

            //Este es para contar los pasos de la tortuga
            if(dado >= 1 && dado <= 50){
                this.pasosTortuga = this.pasosTortuga + 3
            }
            else if(dado >= 51 && dado <= 70){
                this.pasosTortuga = this.pasosTortuga - 6
            }
            else if(dado >= 71 && dado <= 100){
                this.pasosTortuga = this.pasosTortuga + 1
            }

            // Este es para contar los pasos de la liebre
            if(dado >= 1 && dado <= 20){

            }
            else if (dado >= 21 && dado <= 40){
                this.pasosLiebre = this.pasosLiebre + 9

            }
            else if(dado >= 41 && dado <= 50){
                this.pasosLiebre = this.pasosLiebre - 12
            }
            else if(dado >= 51 && dado<= 85){
                this.pasosLiebre = this.pasosLiebre + 1
            }
            else if (dado >= 86 && dado <= 100){
                this.pasosLiebre = this.pasosLiebre - 2
            }

            console.log(`La tortuga lleva ${this.pasosTortuga} pasos y la liebre lleva ${this.pasosLiebre} pasos.`)
            
            if( this.pasosLiebre == 90 && this.pasosTortuga == 90){
                console.log("Hubo un empate!")
                break
            } else if (this.pasosLiebre >= 90){
                console.log("La liebre gano!")
                break
            } else if(this.pasosTortuga >= 90){
                console.log("Ganó la tortuga!! :O")
                break
            } 

            
        }



    }
}

let c1 = new Carrera
c1.carrera()