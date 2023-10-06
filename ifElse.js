const suhu = 28;

if (suhu < 0) {
  console.log('Suhu sangat dingin. Pakailah pakaian hangat dan berhati-hatilah.');
} else if (suhu >= 0 && suhu <= 10) {
  console.log('Suhu dingin. Kenakan jaket tebal dan sarung tangan jika perlu.');
} else if (suhu > 10 && suhu <= 20) {
  console.log('Suhu sejuk. Kenakan jaket ringan atau pakaian hangat.');
} else if (suhu > 20 && suhu <= 30) {
  console.log('Suhu nyaman. Nikmati cuaca!');
} else if (suhu > 30 && suhu <= 40) {
  console.log('Suhu panas. Minum air yang cukup dan gunakan tabir surya.');
} else {
  console.log('Suhu sangat panas. Hindari terlalu lama di luar ruangan.');
}