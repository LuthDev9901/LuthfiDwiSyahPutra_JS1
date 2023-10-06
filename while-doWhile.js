// while
function hitungFaktorialWhile(angka) {
    let faktorial = 1;
    let i = 1;

    console.log(`Menghitung faktorial dari ${angka} menggunakan while:`);

    while (i <= angka) {
        faktorial *= i;
        i++;
    }

    return faktorial;
}

// do-while
function hitungFaktorialDoWhile(angka) {
    let faktorial = 1;
    let i = 1;

    console.log(`\nMenghitung faktorial dari ${angka} menggunakan do-while:`);

    do {
        faktorial *= i;
        i++;
    } while (i <= angka);

    return faktorial;
}

const angka = 3;

const hasilFaktorialWhile = hitungFaktorialWhile(angka);
console.log(`Faktorial dari ${angka} menggunakan while: ${hasilFaktorialWhile}`);
const hasilFaktorialDoWhile = hitungFaktorialDoWhile(angka);
console.log(`Faktorial dari ${angka} menggunakan do-while: ${hasilFaktorialDoWhile}`);