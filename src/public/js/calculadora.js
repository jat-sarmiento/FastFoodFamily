class Calculadora {
    constructor(){
        this.dato1=document.getElementById("numero1");
        this.dato2=document.getElementById("numero2");
        this.dato3=document.getElementById("numero3");
        this.sumar;
        this.restar;
        this.multiplicar;
        this.dividir;
    }
    //mis metodos sin usar la palabra function
    sumar(){
        this.sumar=parseInt(this.dato1.value)+parseInt(this.dato2.value);
        this.dato3.value=this.sumar;
        return this.sumar;
    }
    restar(){
        this.restar=parseInt(this.dato1.value)-parseInt(this.dato2.value);
        this.dato3.value=this.restar;
        return this.restar;
    }
    multiplicar(){
        this.multiplicar=parseInt(this.dato1.value)*parseInt(this.dato2.value);
        this.dato3.value=this.multiplicar;
        return this.multiplicar;
    }
    dividir(){
        let dato2=parseInt(this.dato2.value);
        if (dato2!=0){
            this.dividir=parseInt(this.dato1.value)/dato2;
            this.dato3.value=this.dividir;
            return this.dividir;
        } else {
            alert ("no hay division para 0");
        }
    }
    vaciar(){
        this.dato1.value=" ";
        this.dato2.value=" ";
        this.dato3.value=" ";
    }
}

var calculadora = new Calculadora();
