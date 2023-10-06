let kata = 'Luthfi';
let panjangKata = kata.length;
let hasil = '';

while (panjangKata > 0) {
    hasil += kata[panjangKata - 1];
    panjangKata--;
}

console.log(hasil);