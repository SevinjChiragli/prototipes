// Нужно создать прототип animal, 
// который будет иметь свойства name, kind. 
// Плюс у данного прототипа animal будут методы sayVoice и changeKind.
// changeKind будет менять свойство kind, 
// sayVoice будет выводить название животного.
// class Animal{
//     constructor(name,kind){
//         this.name=name
//         this.kind=kind
//     }
// sayVoice(){
//     console.log(this.name)
// }
// changeKind(newKind){
// this.kind=newKind
// }
// }
// const animal = new Animal(`Vorobey`,`bird`);
// animal.changeKind(`cat`);
// console.log(animal);
// animal.sayVoice()

function Animal(name,kind){
    this.name=name
    this.kind=kind
}
Animal.prototype.sayVoice=function(){
    console.log(this.name);

}
Animal.prototype.changeKind=function(newKind){
    this.kind=newKind
}
const animal= new Animal(`vorobey`,`bird`)
console.log(animal);
animal.changeKind('cat')
console.log(animal);
animal.sayVoice()

