let result = [];
for (let a = 1; a <= 100; a++) {
    for (let b = 1; b <= 100; b++) {
        if (a * b % 19 === 0) {
           let ab = `(${a}, ${b})`;
           let ba = `(${b}, ${a})`;
           if (!result.includes(ba)  ) {
               result.push(ab);
           }
        }
    }
}

for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
}