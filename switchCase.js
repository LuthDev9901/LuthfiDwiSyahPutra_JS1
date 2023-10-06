const jenisKendaraan = 'Pesawat';
let deskripsi;

switch (jenisKendaraan) {
  case 'Mobil':
    deskripsi = 'Kendaraan beroda empat untuk transportasi darat.';
    break;
  case 'Motor':
    deskripsi = 'Kendaraan beroda dua untuk transportasi darat.';
    break;
  case 'Sepeda':
    deskripsi = 'Kendaraan manusia beroda dua yang digerakkan dengan tenaga kaki.';
    break;
  case 'Pesawat':
    deskripsi = 'Kendaraan udara yang dapat terbang di angkasa.';
    break;
  case 'Kapal':
    deskripsi = 'Kendaraan air untuk berlayar di laut atau sungai.';
    break;
  case 'Kereta':
    deskripsi = 'Kendaraan darat dengan rel untuk transportasi.';
    break;
  case 'Bus':
    deskripsi = 'Kendaraan besar untuk transportasi umum.';
    break;
  case 'Helikopter':
    deskripsi = 'Kendaraan udara dengan baling-baling untuk terbang.';
    break;
  case 'Sepatu Roda':
    deskripsi = 'Sepatu dengan roda yang digunakan untuk bergerak.';
    break;
  default:
    deskripsi = 'Jenis kendaraan tidak dikenal.';
}

console.log(`Anda memilih ${jenisKendaraan}.`);
console.log(`Deskripsi: ${deskripsi}`);
