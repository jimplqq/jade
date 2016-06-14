// function learn(something) {
//     console.log(something);
// }
//
// function we(callback, something) {
//     something += ' is cool'
//     callback(something)
// }
// we(learn, 'Nodejs')
//
// we(function(something) {
//     console.log(something);
// }, 'jade')


// var c = 0
//
// function printIt() {
//     console.log(c);
// }
//
// function plus(callback) {
//     setTimeout(function() {
//         c += 1
//         callback()
//     }, 1000)
// }
//
// plus(printIt)

//
// var pet = {
//     words: '...',
//     speak: function() {
//         console.log(this.words);
//     }
// }
// pet.speak()


// function Pet(words) {
//     this.words = words
//     this.speak = function() {
//         console.log(this.words);
//     }
// }
//
// var cat = new Pet('miao')
//
// cat.speak()


// var pet = {
//     words: '...',
//     speak: function(say) {
//         console.log(say + ' ' + this.words);
//     }
// }
//
// var dog = {
//     words: 'wang'
// }
//
// pet.speak.call(dog, 'speak')


// function Pet(words) {
//     this.words = words
//     this.speak = function() {
//         console.log(this.words);
//     }
// }
//
// function Dog(words) {
//     Pet.call(this, words)
// }
//
// var dog = new Dog('wang')
//
// dog.speak()
