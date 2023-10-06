function hitungNilaiAkhir(tugas1, tugas2, tugas3, tugas4, tugas5, uts, uas, totalPertemuan, hadir) {
    const bobotTugas = 0.2;
    const bobotUTS = 0.3;
    const bobotUAS = 0.4;
    const bobotPresensi = 0.1;
    const persentaseHadir = hadir / totalPertemuan;

    const nilaiTugas = (tugas1 + tugas2 + tugas3 + tugas4 + tugas5) / 5;
    const nilaiUTS = uts;
    const nilaiUAS = uas;
    const nilaiPresensi = persentaseHadir;

    const nilaiAkhir = nilaiTugas * bobotTugas + nilaiUTS * bobotUTS + nilaiUAS * bobotUAS + nilaiPresensi * bobotPresensi;
    return nilaiAkhir;
}

function konversiKeIndeksNilai(nilaiAkhir) {
    if (nilaiAkhir >= 90) {
        return 'A';
    } else if (nilaiAkhir >= 80) {
        return 'B+';
    } else if (nilaiAkhir >= 70) {
        return 'B';
    } else if (nilaiAkhir >= 60) {
        return 'C+';
    } else if (nilaiAkhir >= 50) {
        return 'C';
    } else if (nilaiAkhir >= 40) {
        return 'D';
    } else {
        return 'E';
    }
}

const nilaiTugas1 = 90;
const nilaiTugas2 = 85;
const nilaiTugas3 = 80;
const nilaiTugas4 = 88;
const nilaiTugas5 = 92;
const nilaiUTS = 75;
const nilaiUAS = 85;
const totalPertemuan = 32;
const hadir = 28;

const nilaiAkhir = hitungNilaiAkhir(nilaiTugas1, nilaiTugas2, nilaiTugas3, nilaiTugas4, nilaiTugas5, nilaiUTS, nilaiUAS, totalPertemuan, hadir);

const indeksNilai = konversiKeIndeksNilai(nilaiAkhir);

console.log(`Nilai akhir: ${nilaiAkhir.toFixed(2)}`);
console.log(`Indeks nilai: ${indeksNilai}`);