// ============================================================
// DATA SISWA (hardcode)
// ============================================================
// CARA MENGISI NAMA BAPAK/IBU (ORANG TUA) SISWA:
//   1. Isi kolom  orangTua: "..."  dengan nama Bapak/Ibu (atau wali) siswa.
//      Contoh: { username: "0432", name: "AHMAD MUHAIMIN", orangTua: "SUMARNI", status: "pass" },
//   2. Nama orang tua OTOMATIS muncul di surat undangan PDF (untuk siswa yang
//      LOLOS seleksi) pada blok "Yang Terhormat, Bapak/Ibu [NAMA] Orang Tua dari
//      [NAMA SISWA]". Huruf kapital/kecil tidak masalah; sistem otomatis
//      mengubahnya menjadi HURUF KAPITAL di surat.
//   3. Jika dikosongkan (orangTua: ""), surat PDF menampilkan titik-titik
//      (.........................) agar bisa diisi tangan.
// ============================================================
const studentData = [
    { username: "0432", name: "AHMAD MUHAIMIN", orangTua: "SIROJUT", status: "pass" },
    { username: "0434", name: "ALFINO SURYA PUTRA", orangTua: "", status: "fail" },
    { username: "0436", name: "ZULFIKAR KAYYIS NAWANTA", orangTua: "", status: "pass" },
    { username: "0440", name: "AHMAD YOGI ANWAR PRASTYO", orangTua: "", status: "pass" },
    { username: "0442", name: "IRFAN ANDHIO", orangTua: "", status: "fail" },
    { username: "0443", name: "AZKA FADHIL MUBAROK", orangTua: "", status: "pass" },
    { username: "0444", name: "MUHAMMAD TIRTA WIDIANZAKKA", orangTua: "", status: "pass" },
    { username: "0446", name: "BOBY ADITYA ERIANSYAH", orangTua: "", status: "fail" },
    { username: "0447", name: "MIKO RAHMAN SAHPUTRA", orangTua: "", status: "pass" },
    { username: "0450", name: "AFANDY PUTRA IRAWAN", orangTua: "", status: "pass" },
    { username: "0455", name: "ZIDAN APDI ROUF", orangTua: "", status: "pass" },
    { username: "0458", name: "KEVIN EKA DENI SAPUTRA", orangTua: "", status: "pass" },
    { username: "0459", name: "MIRZA AFLAH REZKY PRABOWO", orangTua: "", status: "pass" },
    { username: "0460", name: "FARHAN ATQA FAHRIZA", orangTua: "", status: "pass" },
    { username: "0461", name: "MOCHAMAD JUAN RAFANDA YUSWADI", orangTua: "", status: "pass" },
    { username: "0462", name: "MUHAMMAD RICKY FIRMANSYAH", orangTua: "", status: "pass" },
    { username: "0463", name: "RUSDIANSYAH", orangTua: "", status: "pass" },
    { username: "0464", name: "IN'AAN RAHMAN BAIDHOWI", orangTua: "", status: "pass" },
    { username: "0466", name: "ILHAM WIRANATA RIZALDI", orangTua: "", status: "pass" },
    { username: "0467", name: "MUKHAMMAD KAHFI RESTANCE ADHA", orangTua: "", status: "pass" },
    { username: "0470", name: "ALDY DWI ANDIKA", orangTua: "", status: "pass" },
    { username: "0472", name: "BAGAS RENATA SHAYEKTI", orangTua: "", status: "pass" },
    { username: "0478", name: "AL AZHAR ARSHAVINZHA APDI", orangTua: "", status: "pass" },
    { username: "0479", name: "RAHMAN YUSUF MAULANA", orangTua: "", status: "pass" },
    { username: "0482", name: "MALBLY ARMANSYAH", orangTua: "", status: "pass" },
    { username: "0496", name: "AXEL MAYLO PUTRAYUDA BAGUS", orangTua: "", status: "pass" },

// Contoh baris dengan nama orang tua sudah diisi:
// { username: "0480", name: "CONTOH NAMA SISWA", orangTua: "NAMA BAPAK/IBU SISWA", status: "pass" },

// fail (tidak lolos)
// pass (lolos)

];

// Fungsi untuk menangani login
function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const errorMessage = document.getElementById('errorMessage');
    
    if (!username) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Username tidak boleh kosong';
        return;
    }
    
    // Simpan username ke localStorage
    localStorage.setItem('username', username);
    
    // Arahkan ke halaman hasil
    window.location.href = 'hasil.html';
}

// Fungsi untuk menampilkan hasil seleksi
function displayResult() {
    const username = localStorage.getItem('username');
    const resultStatus = document.getElementById('resultStatus');
    const resultMessage = document.getElementById('resultMessage');
    const studentName = document.getElementById('studentName');
    const studentUsername = document.getElementById('studentUsername');
    const studentOrangTua = document.getElementById('studentOrangTua');
    const orangTuaRow = document.getElementById('orangTuaRow');
    
    if (!username) {
        // Jika tidak ada username di localStorage, arahkan ke halaman login
        window.location.href = 'index.html';
        return;
    }
    
    // Cari data siswa berdasarkan username
    const student = studentData.find(s => s.username === username);
    
    if (student) {
        // Tampilkan informasi siswa
        studentName.textContent = student.name;
        studentUsername.textContent = student.username;
        
        // Sembunyikan dulu baris nama orang tua (hanya tampil untuk siswa yang LOLOS)
        if (orangTuaRow) { orangTuaRow.style.display = 'none'; }
        
        // Tampilkan status kelulusan
        if (student.status === 'pass') {
            resultStatus.className = 'result-status status-pass';
            resultStatus.textContent = 'LOLOS REKOMENDASI';
            resultMessage.textContent = 'Selamat, Anda direkomendasikan masuk di Konsentrasi Keahlian Teknik Alat Berat SMK Muhammadiyah 1 Kepanjen Tahun Pelajaran 2027/2028.';
            
            // Tampilkan nama orang tua/wali (nama ini yang otomatis tercetak di surat undangan PDF)
            if (orangTuaRow && studentOrangTua) {
                orangTuaRow.style.display = '';
                studentOrangTua.textContent = (student.orangTua && String(student.orangTua).trim()) ? student.orangTua : '-';
            }
            
            // Tampilkan tombol unduh PDF (khusus yang lolos)
            const downloadPdfBtn = document.getElementById('downloadPdfBtn');
            if (downloadPdfBtn) {
                downloadPdfBtn.style.display = 'inline-block';
                downloadPdfBtn.onclick = function() { generatePdf(student); };
            }
        } else {
            resultStatus.className = 'result-status status-fail';
            resultStatus.textContent = 'REKOMENDASI KONSENTRASI KEAHLIAN LAINNYA';
            resultMessage.innerHTML = 'Mohon maaf, Anda tidak direkomendasikan masuk di Konsentrasi Keahlian Teknik Alat Berat, akan tetapi Anda direkomendasikan masuk pada Konsentrasi Keahhlian <b>Teknik Kendaraan Ringan (TKR)<b/>, <b>Teknik Sepeda Motor (TSM)</b>, <b>Teknik Pemesinan (TPM)</b>.';
        }
    } else {
        // Jika username tidak ditemukan
        studentName.textContent = '-';
        studentUsername.textContent = username;
        
        resultStatus.className = 'result-status status-not-found';
        resultStatus.textContent = 'Data tidak ditemukan';
        resultMessage.textContent = 'Username yang Anda masukkan tidak terdaftar dalam sistem kami. Silakan hubungi panitia untuk informasi lebih lanjut.';
    }
}

// ======================================================================
// FITUR UNDUH PDF: Surat "Undangan Kepada Orang Tua Calon Peserta Didik Baru"
// Tampilan PDF dibuat SAMA PERSIS dengan dokumen asli sekolah
// (Psb - Laporan Pendaftaran - 03. Undangan Orang Tua):
//   - Kop surat & tanda tangan kepala sekolah = gambar dari dokumen asli.
//   - Seluruh teks digambar pada posisi yang sama dengan dokumen asli
//     (satuan koordinat = piksel dokumen asli, 1240 x 1755 = A4 150dpi).
//   - Font Liberation Sans (disertakan di assets-surat.js) agar bentuk
//     huruf juga sama.
//   - Data siswa (nama, no. pendaftaran) otomatis dari akun yang login.
// ======================================================================

// Konfigurasi isi surat (nilai tetap, sama seperti dokumen asli sekolah)
var KONFIG_SURAT = {
    nomorSurat: '304/III.4.AU/A-4/2026',
    tanggalSurat: 'Kepanjen, 20 November 2026',
    tahunPelajaran: '2027/2028',
    tanggalSeleksi: '09 Oktober 2026',
    acaraHariTanggal: 'Sabtu, 28 Nopember 2026',
    acaraWaktu: 'Pukul 09.00 WIB',
    acaraTempat: [
        'Aula Mas Mansyur Kampus 1 SMK',
        'Muhammadiyah 1 Kepanjen',
        'Jl. KH. Ahmad Dahlan No. 34',
        'Kepanjen'
    ],
    acaraKeperluan: 'Penjelasan Daftar Ulang',
    kepalaSekolah: 'MOCH. ARIEF LUQMAN HAKIM, M.Pd',
    nbmKepalaSekolah: 'NBM. 820.829',
    konsentrasiKeahlian: 'Teknik Alat Berat',
    teksOrangTuaKosong: '.........................'
};

function generatePdf(student, opsi) {
    if (!student) { return; }
    opsi = opsi || {};
    var konsentrasi = opsi.konsentrasi || KONFIG_SURAT.konsentrasiKeahlian;
    // Nama bapak/ibu (orang tua/wali) otomatis dari kolom "orangTua" pada data siswa.
    // Huruf apa pun yang diketik akan diubah menjadi HURUF KAPITAL di surat.
    // Bila kosong, diganti titik-titik (.........................) agar bisa diisi tangan.
    var namaOrangTua = String((opsi && opsi.namaOrangTua) || student.orangTua || '').trim().toUpperCase();
    if (!namaOrangTua) { namaOrangTua = KONFIG_SURAT.teksOrangTuaKosong; }
    var namaSiswa = String(student.name || '').trim().toUpperCase();
    var noPendaftaran = String(student.username || '').trim();

    var jsPDFctor = window.jspdf.jsPDF;
    var doc = new jsPDFctor({ unit: 'mm', format: 'a4' });

    // ===== Registrasi font Liberation Sans (dari assets-surat.js) =====
    doc.addFileToVFS('LibSans-Regular.ttf', FONT_LIB_TTF);
    doc.addFileToVFS('LibSans-Bold.ttf', FONT_LIBB_TTF);
    doc.addFileToVFS('LibSans-Italic.ttf', FONT_LIBI_TTF);
    doc.addFileToVFS('LibSans-BoldItalic.ttf', FONT_LIBBI_TTF);
    doc.addFont('LibSans-Regular.ttf', 'LibSans', 'normal');
    doc.addFont('LibSans-Bold.ttf', 'LibSans', 'bold');
    doc.addFont('LibSans-Italic.ttf', 'LibSans', 'italic');
    doc.addFont('LibSans-BoldItalic.ttf', 'LibSans', 'bolditalic');

    // ===== Konversi koordinat: piksel dokumen asli -> milimeter A4 =====
    var XF = 210.0 / 1240.0;   // skala horizontal (px -> mm)
    var YF = 297.0 / 1755.0;   // skala vertikal (px -> mm)
    function X(px) { return px * XF; }
    function Y(bl) { return bl * YF; }   // baseline baris (diukur dari atas)

    // Lebar teks pada ukuran 1pt, lalu cari ukuran pt agar lebar = target px
    function fit(teks, gaya, targetPx) {
        doc.setFont('LibSans', gaya);
        doc.setFontSize(1);
        var w1 = doc.getTextWidth(teks);
        return (targetPx * XF) / w1;
    }

    // ===== Ukuran huruf acuan (dipatok dari dokumen asli) =====
    var s_small = fit('Konsentrasi  Keahlian', 'normal', 209);
    var s_nomor = fit('304/III.4.AU/A-4/2026', 'normal', 206);
    var s_yt    = fit('Yang Terhormat,', 'normal', 162);
    var s_und   = fit('Undangan', 'bolditalic', 105);
    var s_ass   = fit('Assalamu\u2019alaikum Wr. Wb.', 'bolditalic', 283);
    var s_was   = fit('Wassalamu\u2019alaikum Wr. Wb.', 'bolditalic', 297);
    var s_rval  = fit('MUHAMMAD RAFA JIHADI FILLAHI', 'bold', 371);
    var s_sval  = fit('MUHAMMAD RAFA JIHADI FILLAHI', 'normal', 363);
    var s_para  = fit('Menindaklanjuti hasil seleksi SPMB Tahun Pelajaran 2027/2028 yang dilaksanakan pada', 'normal', 890);
    var s_ival  = fit('Aula Mas Mansyur Kampus 1 SMK', 'bold', 369);
    var s_kep   = fit('Kepala Sekolah,', 'normal', 162);
    var s_moch  = fit('MOCH. ARIEF LUQMAN HAKIM, M.Pd', 'bold', 401);
    var s_temb  = fit('Tembusan', 'normal', 104);
    var s_date  = fit('Kepanjen, 20 November 2026', 'normal', 286);

    // ===== Gambar kop surat & tanda tangan (dari dokumen asli) =====
    doc.addImage(IMG_KOP_SURAT, 'PNG', 0, 0, 1240 * XF, 250 * YF);
    doc.addImage(IMG_TANDA_TANGAN, 'PNG', X(600), Y(1426), 170 * XF, 125 * YF);

    // Menggambar satu teks pada koordinat piksel dokumen asli
    function tulis(xpx, blpx, s, gaya, ukuran) {
        doc.setTextColor(0, 0, 0);
        doc.setFont('LibSans', gaya || 'normal');
        doc.setFontSize(ukuran || s_small);
        doc.text(s, X(xpx), Y(blpx), { baseline: 'alphabetic' });
    }

    // Menggambar satu baris kata-demi-kata pada posisi persis dokumen asli.
    // tokens: [teks, x, lebarSegmen, tebal]
    function WORDLINE(tokens, bl, defSize, defStyle) {
        for (var i = 0; i < tokens.length; i++) {
            var t = tokens[i][0], x = tokens[i][1], w = tokens[i][2], tebal = tokens[i][3];
            var gaya = tebal ? 'bold' : (defStyle || 'normal');
            var ukuran = (t.length > 3) ? fit(t, gaya, w + 2) : (defSize || s_small);
            tulis(x, bl, t, gaya, ukuran);
        }
    }

    // Membungkus teks ke beberapa baris sesuai lebar maksimum (mm)
    function bungkus(teks, lebarMm) {
        var kata = teks.split(/\s+/);
        var baris = [], cur = '';
        for (var i = 0; i < kata.length; i++) {
            if (!kata[i]) { continue; }
            var uji = cur ? cur + ' ' + kata[i] : kata[i];
            if (doc.getTextWidth(uji) <= lebarMm || !cur) { cur = uji; }
            else { baris.push(cur); cur = kata[i]; }
        }
        if (cur) { baris.push(cur); }
        return baris;
    }

    // Nilai dinamis (data siswa / isi yang bisa diubah): ukuran huruf
    // mengikuti ukuran asli dan menyusut otomatis bila teks terlalu panjang.
    function nilai(x0px, blpx, teks, gaya, baseSize, lebarPx, pitchPx, maksBaris) {
        var lebarMm = lebarPx * XF;
        var ukuran = baseSize, baris;
        for (var j = 0; j < 40; j++) {
            doc.setFont('LibSans', gaya);
            doc.setFontSize(ukuran);
            baris = bungkus(teks, lebarMm);
            var muat = baris.length <= maksBaris;
            for (var k = 0; k < baris.length; k++) {
                if (doc.getTextWidth(baris[k]) > lebarMm) { muat = false; }
            }
            if (muat) { break; }
            ukuran *= 0.95;
        }
        doc.setTextColor(0, 0, 0);
        doc.setFont('LibSans', gaya);
        doc.setFontSize(ukuran);
        for (var i = 0; i < baris.length; i++) {
            doc.text(baris[i], X(x0px), Y(blpx + i * pitchPx), { baseline: 'alphabetic' });
        }
    }

    // ================= ISI SURAT (posisi = dokumen asli) =================

    // Tanggal surat (kanan atas)
    if (KONFIG_SURAT.tanggalSurat === 'Kepanjen, 20 November 2026') {
        WORDLINE([['Kepanjen,', 839, 94], ['20', 941, 23], ['November', 973, 98], ['2026', 1077, 46]], 303, s_date);
    } else {
        doc.setFont('LibSans', 'normal');
        doc.setFontSize(s_date);
        doc.setTextColor(0, 0, 0);
        doc.text(KONFIG_SURAT.tanggalSurat, X(1123) - doc.getTextWidth(KONFIG_SURAT.tanggalSurat), Y(303), { baseline: 'alphabetic' });
    }

    // Blok Nomor / Lamp. / Hal
    tulis(110, 352.3, 'Nomor'); tulis(221, 352.3, ':');
    tulis(274, 352.3, KONFIG_SURAT.nomorSurat, 'normal', s_nomor);
    tulis(110, 377.5, 'Lamp.'); tulis(221, 377.5, ':'); tulis(274, 377.5, '-', 'normal', s_nomor);
    tulis(110, 400.5, 'Hal'); tulis(221, 400.5, ':'); tulis(274, 400.5, 'Undangan', 'bolditalic', s_und);

    // Blok penerima undangan
    WORDLINE([['Yang', 229, 50], ['Terhormat,', 286, 104]], 505.5, s_yt);
    tulis(242.5, 532.5, 'Bapak/Ibu'); tulis(494, 532.5, ':');
    if (namaOrangTua === 'ALI MUSTOFA') {
        WORDLINE([['ALI', 540, 35, true], ['MUSTOFA', 584, 110, true]], 532.5, s_rval, 'bold');
    } else {
        nilai(540, 532.5, namaOrangTua, 'bold', s_rval, 589, 26.5, 1);
    }
    WORDLINE([['Orang', 242, 60], ['Tua', 309, 37], ['dari', 355, 33]], 559.5, s_small);
    tulis(494, 559.5, ':');
    if (namaSiswa === 'MUHAMMAD RAFA JIHADI FILLAHI MUSTOFA') {
        WORDLINE([['MUHAMMAD', 541, 132, true], ['RAFA', 684, 59, true], ['JIHADI', 750, 71, true], ['FILLAHI', 833, 78, true]], 559.5, s_rval, 'bold');
        tulis(541, 586, 'MUSTOFA', 'bold', s_rval);
    } else {
        nilai(541, 559.5, namaSiswa, 'bold', s_rval, 460, 26.5, 2);
    }
    tulis(494, 612.5, ':');
    WORDLINE([['Calon', 242, 55], ['Murid', 309, 51], ['Baru', 372, 41]], 612.5, s_small);
    if (KONFIG_SURAT.tahunPelajaran === '2027/2028') {
        WORDLINE([['Tahun', 540, 64, true], ['Pelajaran', 615, 94, true], ['2027/2028', 719, 100, true]], 612.5, s_rval, 'bold');
    } else {
        nilai(540, 612.5, 'Tahun Pelajaran ' + KONFIG_SURAT.tahunPelajaran, 'bold', s_rval, 589, 26.5, 1);
    }
    tulis(230.5, 640, 'Di');
    tulis(230.5, 665.5, 'Tempat');

    // Salam pembuka
    WORDLINE([['Assalamu\u2019alaikum', 229, 191], ['Wr.', 432, 32], ['Wb.', 476, 35]], 718.5, s_ass, 'bolditalic');

    // Paragraf 1
    if (KONFIG_SURAT.tahunPelajaran === '2027/2028') {
        WORDLINE([['Menindaklanjuti', 231, 157], ['hasil', 395, 45], ['seleksi', 447, 68], ['SPMB', 522, 63], ['Tahun', 591, 63], ['Pelajaran', 663, 93], ['2027/2028', 764, 107], ['yang', 877, 47], ['dilaksanakan', 932, 131], ['pada', 1071, 49]], 758.2, s_para);
    } else {
        nilai(229, 758.2, 'Menindaklanjuti hasil seleksi SPMB Tahun Pelajaran ' + KONFIG_SURAT.tahunPelajaran + ' yang dilaksanakan pada', 'normal', s_para, 900, 26, 1);
    }
    if (KONFIG_SURAT.tanggalSeleksi === '09 Oktober 2026') {
        WORDLINE([['tanggal', 229, 75], ['09', 312, 24], ['Oktober', 344, 81], ['2026,', 432, 54], ['dengan', 496, 74], ['ini', 579, 21], ['kami', 608, 46], ['sampaikan', 663, 108], ['bahwa', 780, 66], ['calon', 854, 52], ['peserta', 916, 74], ['didik', 998, 46], ['baru:', 1052, 48]], 784.2, s_para);
    } else {
        nilai(229, 784.2, 'tanggal ' + KONFIG_SURAT.tanggalSeleksi + ', dengan ini kami sampaikan bahwa calon peserta didik baru:', 'normal', s_para, 900, 26, 1);
    }

    // Data calon peserta didik baru
    tulis(323, 837.5, 'Nama'); tulis(601, 837.5, ':');
    if (namaSiswa === 'MUHAMMAD RAFA JIHADI FILLAHI MUSTOFA') {
        WORDLINE([['MUHAMMAD', 662, 132], ['RAFA', 803, 58], ['JIHADI', 867, 68], ['FILLAHI', 945, 78]], 837.5, s_sval);
        tulis(661.5, 864, 'MUSTOFA', 'normal', s_sval);
    } else {
        nilai(661.5, 837.5, namaSiswa, 'normal', s_sval, 467, 26.5, 2);
    }
    tulis(323, 891, 'No.');
    WORDLINE([['Pendaf', 365, 67]], 891, s_small);
    tulis(601, 891, ':'); tulis(661.5, 891, noPendaftaran, 'normal', s_sval);
    WORDLINE([['Konsentrasi', 323, 112], ['Keahlian', 449, 81]], 918, s_small);
    tulis(601, 918, ':'); tulis(661.5, 918, konsentrasi, 'normal', s_sval);

    // Dinyatakan diterima
    WORDLINE([['Dinyatakan', 231, 112], ['DITERIMA', 353, 108, true], ['sebagai', 469, 78], ['Murid', 557, 53], ['Baru', 620, 44], ['Tahun', 672, 64], ['Pelajaran', 745, 94], ['pada', 847, 50], ['Konsentrasi', 906, 118], ['Keahlian', 1033, 86]], 971.2, s_para);
    if (konsentrasi === 'Teknik Otomasi Industri') {
        WORDLINE([['Teknik', 229, 68], ['Otomasi', 305, 83], ['Industri', 397, 72]], 998, s_para);
    } else {
        nilai(229, 998, konsentrasi, 'normal', s_para, 900, 26.5, 1);
    }

    // Ajakan kehadiran
    WORDLINE([['Berkaitan', 231, 94], ['dengan', 332, 75], ['hal', 414, 29], ['tersebut,', 449, 86], ['kami', 544, 50, true], ['harapkan', 603, 98, true], ['kehadiran', 708, 107, true], ['Bapak/Ibu', 823, 107, true], ['ke', 937, 22], ['sekolah,', 966, 82], ['pada:', 1057, 54]], 1051.2, s_para);

    // Rincian undangan
    WORDLINE([['Hari,', 323, 45], ['Tanggal', 376, 82]], 1104.2, s_small);
    tulis(598.5, 1104.2, ':');
    if (KONFIG_SURAT.acaraHariTanggal === 'Sabtu, 28 Nopember 2026') {
        WORDLINE([['Sabtu,', 657, 68, true], ['28', 734, 24, true], ['Nopember', 767, 111, true], ['2026', 886, 49, true]], 1104.2, s_ival, 'bold');
    } else {
        nilai(657, 1104.2, KONFIG_SURAT.acaraHariTanggal, 'bold', s_ival, 472, 26.5, 1);
    }
    tulis(322.5, 1131, 'Waktu'); tulis(598.5, 1131, ':');
    if (KONFIG_SURAT.acaraWaktu === 'Pukul 09.00 WIB') {
        WORDLINE([['Pukul', 658, 59, true], ['09.00', 725, 56, true], ['WIB', 787, 43, true]], 1131, s_ival, 'bold');
    } else {
        nilai(658, 1131, KONFIG_SURAT.acaraWaktu, 'bold', s_ival, 471, 26.5, 1);
    }
    tulis(322.5, 1157.2, 'Tempat'); tulis(598.5, 1157.2, ':');
    var tempatAsli = ['Aula Mas Mansyur Kampus 1 SMK', 'Muhammadiyah 1 Kepanjen', 'Jl. KH. Ahmad Dahlan No. 34', 'Kepanjen'];
    var tempatSama = (KONFIG_SURAT.acaraTempat.length === tempatAsli.length);
    for (var ti = 0; ti < tempatAsli.length; ti++) {
        if (KONFIG_SURAT.acaraTempat[ti] !== tempatAsli[ti]) { tempatSama = false; }
    }
    if (tempatSama) {
        WORDLINE([['Aula', 656, 49, true], ['Mas', 713, 42, true], ['Mansyur', 763, 91, true], ['Kampus', 862, 87, true], ['1', 957, 7, true], ['SMK', 974, 49, true]], 1157.2, s_ival, 'bold');
        WORDLINE([['Muhammadiyah', 659, 170, true], ['1', 839, 7, true], ['Kepanjen', 858, 100, true]], 1184.2, s_ival, 'bold');
        WORDLINE([['Jl.', 657, 24, true], ['KH.', 689, 36, true], ['Ahmad', 732, 76, true], ['Dahlan', 816, 74, true], ['No.', 898, 33, true], ['34', 939, 23, true]], 1211, s_ival, 'bold');
        WORDLINE([['Kepanjen', 659, 97, true]], 1238.2, s_ival, 'bold');
    } else {
        for (var tj = 0; tj < KONFIG_SURAT.acaraTempat.length; tj++) {
            nilai(657, 1157.2 + tj * 27, KONFIG_SURAT.acaraTempat[tj], 'bold', s_ival, 472, 26.5, 1);
        }
    }
    tulis(322.5, 1263.2, 'Keperluan'); tulis(598.5, 1263.2, ':');
    if (KONFIG_SURAT.acaraKeperluan === 'Penjelasan Daftar Ulang') {
        WORDLINE([['Penjelasan', 658, 112, true], ['Daftar', 782, 61, true], ['Ulang', 853, 58, true]], 1263.2, s_ival, 'bold');
    } else {
        nilai(658, 1263.2, KONFIG_SURAT.acaraKeperluan, 'bold', s_ival, 471, 26.5, 1);
    }

    // Penutup
    WORDLINE([['Demikian,', 231, 94], ['atas', 336, 40], ['segala', 386, 63], ['perhatian', 460, 89], ['dan', 560, 34], ['kehadirannya', 605, 129], ['disampaikan', 745, 121], ['banyak', 877, 69], ['terima', 955, 60], ['kasih.', 1025, 54]], 1317.2, s_para);
    WORDLINE([['Wassalamu\u2019alaikum', 232, 205], ['Wr.', 450, 31], ['Wb.', 493, 35]], 1371, s_was, 'bolditalic');

    // Tanda tangan
    tulis(607.5, 1424, 'Kepala Sekolah,', 'normal', s_kep);
    tulis(607.5, 1568.5, KONFIG_SURAT.kepalaSekolah, 'bold', s_moch);
    tulis(607.5, 1596, KONFIG_SURAT.nbmKepalaSekolah, 'bold', s_moch);

    // Tembusan
    WORDLINE([['Tembusan', 87, 102]], 1649, s_temb);
    tulis(197.5, 1649, ':');
    tulis(124.5, 1673.3, '1.', 'normal', s_small);
    WORDLINE([['Arsip', 145.4, 51]], 1673.3, s_small);

    // ===== Properti dokumen & simpan =====
    doc.setProperties({
        title: 'Undangan Kepada Orang Tua Calon Peserta Didik Baru',
        author: 'SMK Muhammadiyah 1 Kepanjen',
        subject: 'Undangan Penjelasan Daftar Ulang - Tahun Pelajaran 2027/2028',
        creator: 'Sistem Pengumuman Hasil Pemetaan'
    });
    var namaFile = 'Undangan-Orang-Tua-' + noPendaftaran + '-' +
        namaSiswa.replace(/[^A-Za-z0-9]+/g, '-').replace(/^-+|-+$/g, '') + '.pdf';
    doc.save(namaFile);
}

// Fungsi untuk logout
function handleLogout() {
    localStorage.removeItem('username');
    window.location.href = 'index.html';
}

// Inisialisasi event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Cek halaman saat ini
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === 'index.html' || currentPage === '') {
        // Halaman login
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', handleLogin);
        }
    } else if (currentPage === 'hasil.html') {
        // Halaman hasil
        displayResult();
        
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', handleLogout);
        }
    }
});