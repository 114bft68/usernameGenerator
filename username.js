var output = '';
function random() {
    return [['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'][Math.floor(Math.random() * 26)], Math.floor(Math.random() * 10)][Math.floor(Math.random() * 2)];
}
for (let i = 0; i < 8; i++) {  // replace (i < 8) with the length of the username you want, for example, I want a 4-character-long username, I replace i < 8 with i < 4 
    output += random();
}
console.log(output);
