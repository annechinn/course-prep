


// for (let line = "#"; line.length < 8; line += "#")
//     console.log(line);


for (let i=1;i<=100;++i) {
    let output = "";
    const divBy3 = ((i%3)==0);
    const divBy5 = ((i%5)==0);
    if (divBy3) {
        output+= 'Fizz';
    }
    if (divBy5) {
        output+= 'Buzz';
    }
    console.log(output || i);
}




