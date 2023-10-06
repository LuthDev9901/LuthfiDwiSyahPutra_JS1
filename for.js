const tinggiSegitiga = 9;

for (let i = 1; i <= tinggiSegitiga; i++) {
    let baris = '';

    // spasi untuk sejajar ke kanan
    for (let j = tinggiSegitiga - i; j > 0; j--) {
        baris += ' ';
    }

    // kiri
    for (let k = 1; k <= i; k++) {
        baris += '*';
    }

    // kanan
    for (let l = 1; l < i; l++) {
        baris += '*';
    }

    console.log(baris);
}