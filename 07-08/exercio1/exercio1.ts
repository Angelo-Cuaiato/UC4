const sociedade = ['Frodo', 'Sam', 'Gandalf', 'Legolas', 'Gimli', 'Merry', 'Pippin', 'Aragorn', 'Boromir'];
const hobbits = ['Frodo', 'Sam', 'Merry', 'Pippin'];

for (let i = 0; i < sociedade.length; i++) {
    if (hobbits.indexOf(sociedade[i]) !== -1) {
        console.log(`Hobbit encontrado: ${sociedade[i]}`);
    }
}