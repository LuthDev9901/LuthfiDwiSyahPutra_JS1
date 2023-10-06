const tinggiSegitiga = 9;

for (let i = 1; i <= tinggiSegitiga; i++) {
    let baris = '';

    // Menambahkan spasi untuk membuat bentuk sejajar ke kanan
    for (let j = tinggiSegitiga - i; j > 0; j--) {
        baris += ' ';
    }

    // Menambahkan karakter '*' untuk sisi kiri segitiga
    for (let k = 1; k <= i; k++) {
        baris += '*';
    }

    // Menambahkan karakter '*' untuk sisi kanan segitiga
    for (let l = 1; l < i; l++) {
        baris += '*';
    }

    console.log(baris);
}