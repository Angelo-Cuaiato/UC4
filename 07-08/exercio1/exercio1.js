var sociedade = ['Frodo', 'Sam', 'Gandalf', 'Legolas', 'Gimli', 'Merry', 'Pippin', 'Aragorn', 'Boromir'];
var hobbits = ['Frodo', 'Sam', 'Merry', 'Pippin'];
for (var i = 0; i < sociedade.length; i++) {
    if (hobbits.indexOf(sociedade[i]) !== -1) {
        console.log("Hobbit encontrado: ".concat(sociedade[i]));
    }
}
