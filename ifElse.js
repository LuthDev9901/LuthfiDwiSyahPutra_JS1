const nilaiTugas = 80;
const nilaiUjian = 90;

let gradeTugas;
let gradeUjian;

if (nilaiTugas >= 0 && nilaiTugas <= 100 && nilaiUjian >= 0 && nilaiUjian <= 100) {
  if (nilaiTugas >= 90) {
    gradeTugas = 'A';
  } else if (nilaiTugas >= 80) {
    gradeTugas = 'B';
  } else if (nilaiTugas >= 70) {
    gradeTugas = 'C';
  } else if (nilaiTugas >= 60) {
    gradeTugas = 'D';
  } else {
    gradeTugas = 'E';
  }

  if (nilaiUjian >= 90) {
    gradeUjian = 'A';
  } else if (nilaiUjian >= 80) {
    gradeUjian = 'B';
  } else if (nilaiUjian >= 70) {
    gradeUjian = 'C';
  } else if (nilaiUjian >= 60) {
    gradeUjian = 'D';
  } else {
    gradeUjian = 'E';
  }

  console.log(`Nilai tugas: ${nilaiTugas}, grade tugas: ${gradeTugas}`);
  console.log(`Nilai ujian: ${nilaiUjian}, grade ujian: ${gradeUjian}`);
} else {
  console.log('Nilai tidak valid. Masukkan nilai antara 0 hingga 100.');
}