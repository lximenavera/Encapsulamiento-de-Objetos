//CALLBACKS

// const users = ['Alejandro', 'Monserrat', 'Jose Luis']

// const sendNotification = (userName) =>{
//     console.log(`¿Como estas ${userName}? Ven a visitarnos tenemos ofertas para ti`)
// }

// function sentToUsers (array, action){
//     array.map(e =>action(e))
//     console.log('La tarea ha concluido')
// }

// sentToUsers(users, sendNotification)

//PROMESAS

// const myPromises = new Promise((resolve, reject) => {//esto es para marcar uhn anueva promesa
//     //llamadas o servicios
//     //lectura o escritura de archivos

//     setTimeout(()=>{
//         const success = true;
//         if(success){
//             resolve('Esta operacion es un exito')
//         }else{
//             reject('Ha fallado esta operación')
//         }
//     },500)//timepo de ejecución
// })

// myPromises.then(res=>{
//     document.getElementById('loading').innerHTML = ''
//     document.getElementById('response').innerHTML = res
    
// }).catch(error=>{
//     document.getElementById('loading').innerHTML = ''
//     document.getElementById('response').innerHTML = error
    
// }).finally(
//     console.log('Esto se ejecuta siempre')
// )

//juego de numeros random
1
// const number = prompt('Completa con un nuemro del 1 al 10')

// const myPromises = new Promise((resolve, reject) => {
    
//     const random = Math.round(Math.random()*10)

//     setTimeout(()=>{
//         if(random == number){
//             resolve('Felicitaciones el numero es igual!')
//         }else if(random>number){
//             reject(`el ${number} es menor que ${random}`)
//         }else[
//             reject(`el ${number} es mayor que ${random}`)
//         ]
//     }, 1)
// })
// document.getElementById('loading').innerHTML ='Cargando...'

// myPromises.then(res=>{
//     document.getElementById['loading'].innerHTML=''
//     document.getElementById['response'].innerHTML=res;
// }).catch(error=>{
//         document.getElementById('loading').innerHTML = ''
//         document.getElementById('response').innerHTML = error})

//PROMISES ALL
// const promise1 = new Promise ((res, rej)=>{
//     setTimeout(()=>{
//         res('Respuesta de la promesa 1')
//     }, 5000);
// })
// const promise2 = new Promise ((res, rej)=>{
//     setTimeout(()=>{
//         res('Respuesta de la promesa 2')
//     }, 3000);
// })
// const promise3 = new Promise((res, rej)=>{
//     setTimeout(()=>{
//         res('Respuesta de la promesa 3')
//     }, 2000);
// })
//esta forma de mostaralas permite que sea ene l orden del tiempo dato por el timeout
// promise1.then(res=>{
//     console.log(res)
// })
// promise2.then(res=>{
//     console.log(res)
// })
// promise3.then(res=>{
//     console.log(res)
// })
//esta forma perimite mostrar las promesas en el orden escrito
// Promise.all([promise1, promise2, promise3])
// .then(res=>{
//     console.log(res)
// }).catch(error =>{
//     console.error(error)
// })
//esta forma perimite mostrar las promesas en el orden que deseamos 
//  Promise.all([promise1, promise2, promise3])
//  .then(res=>{
//      console.log(res[0])
//      console.log(res[1])
//      console.log(res[2])
//  }).catch(error =>{
//      console.error(error)
//  })
//FETCH
//API FAKE
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
// //usiarios de terceros
// fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => console.log(json))
//       .catch(error=> console.log(error))

//ASYNC/AWAIT
//FUNCION SINCRONA NORMAL
// function myFunction1(){
//     return 'Hola mundo!'
// }
// //FUNCION ASINCRONA USANDO PROMISE
// function myFunction2(){
//     return Promise.resolve('Hola Mundo!')
// }
// //FUNCION ASINCRONA USANDO ASYNC
// async function myFunction3(){
//     return 'Hola Munddo!'
// }

// console.log(myFunction1())
// console.log(myFunction2())
// console.log(myFunction3())

// //FUNCION LANDA SINCRONA NORMAL
// const myFunction4 = ()=> 'Hola Mundo!'

// //FUNCION LANDA ASINCRONA USANDO PROMISE
// const myFunction5 =()=> Promise.resolve('HolaMundo!')

// //FUNCION LANDA ASINCRONA USANDO ASYNC
// const myFunction6 = async  ()=> 'Hola Munddo!' 
// console.log(myFunction4())
// console.log(myFunction5())
// console.log(myFunction6())

//CAMBIAR EL TEXTO OCN UNA FUNCION 

// //funcion que cambia el texto ya hecho por otro que deseamos
// function changeText(text){
//     document.getElementById('async-text').innerHTML = text
// }
// //se ve como una funcion normal solo usando async
// async function myFunction1(){
//     return 'Hola Mundo!'
// }
// //se utiliza then si es positivo como en una promesa
// myFunction1().then(
//     function(value){
//         changeText(value)
//     }
// )
//CAMBIAR EL TEXTO CON UNA FUNCION
// const changeText =async()=>{
//     const myPromises= new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve('Hola Mundo!')
//         },3000 ) 
//     })
//     document.getElementById('async-text').innerHTML = await myPromises
// }
// changeText()
//CAMBIAR POR UN FETCH
// const fetchData = async ()=>{
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//     if (!response.ok){
//         throw new console.error('Hubo un poroblema llamando el API');
//     }

//     const data = await response.json();
//         document.getElementById('async-text').innerHTML=data.title

//     }
//     catch (error){
//         document.getElementById('async-text').innerHTML = error
//     }
// }
// fetchData()

//MANEJO DE ERRORES
// try (intentar), catch (atrapar), finally (finalmente), throw (lanzar)
// try{
//     alert('Hola Mundo!')
// }
// catch (error){
//     console.log(error)
//     document.getElementById('error').innerHTML = error.message;
// }
// const testNumber = () =>{
//     const message = document.getElementById ('res')//seleccionamos el parrafo
//     message.innerHTML= ''//vaciamos el parrafo
// let num = document.getElementById('input').value
// try{
//     if(num.trim()=='')throw 'vacio'
//     if(isNaN (num)) throw 'No es un numero'
//     num =Number (num)
//     if(num<1)throw 'Muy Bajo'
//     if(num>1)throw 'Muy Alto'
//     message.innerHTML= 'El dato ingresado es' + num
// }
// catch(error){
//     message.innerHTML='El dato ingresado es: ' + error
// }}

// const fetchData = async ()=>{//una funcion asincrona que llama a la api de json place holder (API FALSA)
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//          try{//intenta hacer esto:
//          if (!response.ok){//si no es ok (puede ser un 400, 500, etc)
//              throw new console.error('Hubo un poroblema llamando el API');//va a lanzar un errir con un mensaje
//          }
//             const data = await response.json();//si estuviese ok la respuesta (200) se guarda
//              document.getElementById('async-text').innerHTML=data.title
//             }
//          catch (error){
//              document.getElementById('async-text').innerHTML = error
//          }
//      }
//      fetchData()

//SPREAD OPERATOR CON ARRAY
// const array1 =[1,2,3,4,5]
// const array2 =[...array1,7,8,9,10]// el operador SPREAD se hace con tres puntos(...array1)
// console.log(array2)

// const arrayOriginal =[1,2,3]
// const copiaArray = [...arrayOriginal]
// const copiaArray2 = arrayOriginal // esto es un error no se debe hacer para copias esta el spread porque sino se modificaria el array original
// copiaArray.push(6)
// console.log(copiaArray)
// console.log(arrayOriginal === copiaArray)
// console.log(arrayOriginal === copiaArray2)

// const array3 =[1,2,3]
// const array4 =[4,5,6]
// console.log (...array3, ...array4)

// const num =[1,2,3,4]
// function sum (a,b,c,d){
//     return a+b+c+d
// }
// const resultado = sum(...num)
// console.log (resultado)

//SPREAD OPERATOR CON OBJECT

// const object1 ={a:1, 
//             b:2}
// const object2 ={...object1} 

// const object3=object1

// object1.c = 3

// console.log(object2)   
// console.log(object1===object2)    
// console.log(object1===object3)
// console.log(object1)

// const obj1 = {a:1, b:2}
// const obj2 = {c:3, d:4}

// const combObj = {...obj1, ...obj2}
// console.log(combObj)

// const originalObj = {a:1, b:2};
// const modiObject = {...originalObj, c:3, d:4};
// originalObj.e= 5
// console.log(originalObj)

//SET
// const newSet = new Set(['a', 'b', 'c', 'd'])
// console.log(newSet)

// const newSet = new Set()
// newSet.add('a')
// newSet.add('b')
// newSet.add('c')
// console.log(newSet)

// const newSet = new Set()
// newSet.add('Este texto ')
// newSet.add('viene')
// newSet.add(' de un SET')
// let text = '';
// newSet.forEach(val=>{
//     text += val
// })
// document.getElementById('write').innerHTML=text

// const newSet = new Set()
// newSet.add('a')
// newSet.add('b')
// newSet.add('c')
// newSet.add('d')
// newSet.add('a')
// newSet.add('b')
// newSet.add('c')
// newSet.add('d')
// console.log(newSet)
// console.log(newSet.size)

// const array = ['a', 'b', 'c', 'd', 'a', 'b', 'c', 'd']
// console.log(array)
// console.log(array.length)

// const set = new Set(array)

// console.log(set)
// console.log(set.size)

// const array2 = Array.from(set)
// console.log(array2)
// console.log(array2.length)

//REGEX 1
// const text = 'Estudia en DigitalHouse'
// const res = text.search('DigitalHouse')
// console.log(res)
// document.getElementById('text').innerHTML=text
// document.getElementById('res').innerHTML=res

// const text = 'Estudia en DigitalHouse con Mario'
// const res = text.replace(/mario/i, 'Ximena Vera')
// console.log(res)
// document.getElementById('text').innerHTML=text
// document.getElementById('res').innerHTML=res

//modificadores disponibles:
//i(Ignorar mayúsculas y minusculas)
//g(Busca globalmente)
//m(Búsqueda multilinea)
//d(Que coincida al comienzo y final)

//REGEX 2
// const text = 'Estudia en DigitalHouse con Mario'
// const res = text.replace(/mario/i, 'Ximena Vera')
// const num ='0, 01, 02, 03, 04, 5, 6, 7, 8, 9'
// const res2 =num.match(/[0-9]/g)
// const pattern = /[a-z]/
// const resTest = pattern.test(num)
// console.log(resTest)
// document.getElementById('text').innerHTML= num
// document.getElementById('res').innerHTML= res2

// const text = 'lmxvv_27@hptmai.com'
// const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
// const resTest = pattern.test(text)

// console.log(resTest)

// document.getElementById('text').innerHTML = text
// document.getElementById('res').innerHTML= `¿se encontro en el texto el diguiente patron: ${pattern}? ${resTest?'si' :'no'}`

//POO CLASES
//clase: molde para hacer objetos
// class Persona{
//     //atributos nombre y edad
//     //constructor sirve para instanciar un objeto desde una clase
//     constructor(nombre, edad){
//         //strinuto dr lr sdigns parametro enviado dede instanaciacion
//         this.nombre= nombre;
//         //stributo edad se le asigna parametro enviado desde instanacion
//         this.edad= edad
//     }
//     //metodo clase
//     saludar(nombre){
//         console.log(`${this.nombre} dice: Hola, como estas ${nombre}?`)
//     }
//     //metodod clase
//     decirEdad(nombre){
//         console.log(`${this.nombre} dice: to tengo ${this.edad} años, ${nombre}`)
//     }


// }
// //instanciaciones de objetos persona
// const persona1= new Persona('Ximena', 28)
// const persona2= new Persona('santiago', 30)
// //de las instan
// persona1.saludar('Daniela')
// persona2.saludar('Rodolfo')
// persona1.decirEdad('Daniela')
// persona2.decirEdad('Rodolfo')

//POO USANDO EL DOM 

// class Persona{
//         constructor(nombre, edad){
//                 this.nombre= nombre;
//                this.edad= edad
//     }
//         saludar(nombre){
//         return`${this.nombre} dice: Hola, como estas ${nombre}?`
//     }
//         decirEdad(nombre){
//        return`${this.nombre} dice: to tengo ${this.edad} años, ${nombre}`
//     }
// }

// function saludarYDeciredad(){
//     const nombreInput= document.getElementById('nombre').value;
//     const edadInput= document.getElementById('edad').value;
//     const invitadoInput=document.getElementById('invitado').value;

//     if(nombreInput.trim()==''|| edadInput.trim()==''|| invitadoInput.trim() ==''){
//         alert('Los Campos no pueden estar vacios')
//     }

//     const persona= new Persona(nombreInput,edadInput)
//     const saludo= persona.saludar(invitadoInput)
//     const edad = persona.decirEdad(edadInput)

//     const resultado= document.getElementById('res');
//     resultado.innerHTML = `<p>${saludo}</p> <p>${edad}</p>`
// }
//POO HERENCIA

// class Persona{
//     constructor(nombre, edad){
//             this.nombre= nombre;
//            this.edad= edad
// }
//     saludar(nombre){
//     return`${this.nombre} dice: Hola, como estas ${nombre}?`
// }
//     decirEdad(nombre){
//    return`${this.nombre} dice: to tengo ${this.edad} años, ${nombre}`
// }
// }
// //herencia
// class Alumno extends Persona{
//     constructor(nombre, edad, curso){
//     super(nombre, edad);
//     this.curso=curso}
// presentarse(){
//     return `${super.saludar('profesor')} soy del curso ${this.curso}`
// }
// }
// class Profesor extends Persona{
//     constructor(nombre, edad, materia){
//     super(nombre, edad);
//     this.materia=materia}
// presentarse(){
//     return `${super.saludar('estudiantes')} soy del profesor de ${this.materia}`
// }
// }
// function saludarYDeciredad(){
// const nombreInput= document.getElementById('nombre').value;
// const edadInput= document.getElementById('edad').value;
// const rolSelec=document.getElementById('rolSelec').value;

// if(nombreInput.trim()==''|| edadInput.trim()==''){
//     alert('Los Campos no pueden estar vacios')
//     return
// }
// let persona;

// switch (rolSelec) {
//     case 'Alumno':
//         const cursoInput = prompt('Ingrese el curso del alumno')
//         persona = new Alumno(nombreInput, edadInput, cursoInput)
//         break;
//     case 'Profesor':
//         const materiaInput = prompt('Ingrese la materia del profesor')
//         persona = new Profesor(nombreInput, edadInput, materiaInput)
//         break;
     
//     default:
//         alert('Debe Seleccionar un rol')
//         return
// }

// const presentacion= persona.presentarse()
// const saludo= persona.saludar('Invitado')
// const edad = persona.decirEdad('Invitado')

// const resultado= document.getElementById('res');
// resultado.innerHTML = `<p>${saludo}</p> <p>${edad}</p> <p>${presentacion}</p>`
// }

// POO ENCAPSULAMIENTO

class Calculadora {
    constructor(){
        this.num1 = 0;
        this.num1 = 0;
    }
    setNum1(val){
        this.num1 = Number(val)
          }
    setNum2(val){
        this.num2 = Number(val)
          }

    getNum1(){
        return this.num1
    } 
    getNum2(){
        return this.num2
    }     
    sumar(){
        return this.num1+this.num2
    }
    restar(){
        return this.num1-this.num2
    }
    multiplicar(){
        return this.num1*this.num2
    }
    dividir(){
        if(this.num2 != 0){
        return this.num1/this.num2
    }
    else{
        return 'No se puede dividir por cero'
    }
}
}
function realizarOperacion(operacion){
    const calc= new Calculadora();

    const num1 = document.getElementById('input1').Value;
    const num2 = document.getElementById('input2').Value;

    if(num1.trim() == '' || num2.trim() ==''){
        alert('Los campos son obligatorios')
        return
    }
    calc.setNum1(num1)
    calc.setNum2(num2)

    let resl;

    switch (operacion) {
        case 'sumar':
            resl = calc.sumar()
            break;
        case 'restar':
            resl = calc.restar()
            break
        case 'multiplicar':
            resl = calc.multiplicar()
                break;
        case 'dividir':
            resl = calc.dividir()
                break
        default:
            resl= 'Operacion no valida'
            break;
    }
    document.getElementById('res').innerHTML = `El resultado es: ${resl}`
}
