//@author Gustavo Alberto Valladares Sagrero

//Creando un objeto vacio
let obj = {};


//Se crea un objeto 'Persona' el cual contiene atributos 'nombre' y 'apellido'
//Tambien contiene una funcion que regresa el nombre
//Incluye un atributo domicilio que actua como un objeto interno
let persona = {
    nombre: "Alberto",
    apellido: "Sagrero",
    getName: function(){
        return `${this.nombre} ${this.apellido}`
    },
    domicilio: {
        calle: "Diego Garcia Conde", //Devuelve la calle del 'domicilio' de la persona
        numero: 1219, //Devuelve la numero del 'domicilio' de la persona
        colonia: "Tabachines", //Devuelve la colonia del 'domicilio' de la persona
        ciudad: "Villa de Alvarez", //Devuelve la ciudad del 'domicilio' de la persona
        municipio: "Colima", //Devuelve el municipio del 'domicilio' de la persona
        cp: 28983, //Devuelve el codigo postal del 'domicilio' de la persona
        getDirectory: function(){ //Funcion que devuelve el directorio de la persona formateado.
            return `${this.calle} #${this.numero} Colonia: ${this.colonia} CP:${this.cp}, ${this.municipio}`
        }
    }
}

console.log(persona) //Muestra los datos del obj persona
console.log(persona.nombre); //Muestra el valor del atributo 'nombre' del obj persona
console.log(persona.apellido); //Muestra el valor del atributo 'apellido' del obj persona
console.log(persona.getName()); //Muestra el nombre de la persona formateado
console.log(persona.domicilio); //Muestra el valor del objeto domicilio del obj persona
console.log(persona.domicilio.calle); //Muestra el valor del atributo 'calle' del obj domicilio
console.log(persona.domicilio.getDirectory()); //Muestra el el directorio de la persona formateado