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
{ username: "0002", name: "FEBRIAN TRI PUTRA", orangTua: "SUPARNO", status: "pass" },
{ username: "0003", name: "ARDA RAFKIA FARDANI", orangTua: "TAMAN", status: "pass" },
{ username: "0004", name: "ALBERN ADIATMA", orangTua: "PURNAWAN", status: "pass" },
{ username: "0005", name: "PRIA MARDIANTO", orangTua: "MARDI", status: "fail" },
{ username: "0007", name: "AFRIZAL ESTA MARDIANSYAH", orangTua: "PANURI", status: "pass" },
{ username: "0008", name: "RADITIYA PRATAMA", orangTua: "WAHYUDI W", status: "fail" },
{ username: "0010", name: "ALVINO MAULANA YOGA", orangTua: "RULI BAKHTIAR", status: "fail" },
{ username: "0012", name: "ZACKY ZAKARYA", orangTua: "SUTANTO", status: "fail" },
{ username: "0013", name: "AGISTA EKA PRASETYA", orangTua: "MUSTA`IN", status: "pass" },
{ username: "0015", name: "IBNU ADONIS WAHYU WIDYADANA", orangTua: "PUGUH WAHYUDI", status: "pass" },
{ username: "0019", name: "MOHAMAD VILLBY AL FURQON", orangTua: "NUR WIDIANTO", status: "pass" },
{ username: "0021", name: "RAFARDHAN AHURAYAZDA KRISKAYANA", orangTua: "KRISWANTO", status: "pass" },
{ username: "0022", name: "MUHAMMAD BILLAL", orangTua: "SUYONO", status: "pass" },
{ username: "0024", name: "WILLYAM GALUH CONDROKIRONO", orangTua: "SUKIRNO", status: "pass" },
{ username: "0025", name: "RAFFI AHMAD ALFARIZI", orangTua: "ARIF ROCHMAN", status: "pass" },
{ username: "0028", name: "ERIK ARDIAN SYAH PUTRA", orangTua: "HELMI ANSORI", status: "pass" },
{ username: "0029", name: "KEVIN ALVINO ARDIANSYAH", orangTua: "ROY MIELKY", status: "pass" },
{ username: "0030", name: "ERIK FEBRIAN ALFIANSYAH", orangTua: "ARIEF MULYADI", status: "pass" },
{ username: "0031", name: "APRIL FANANI", orangTua: "BUSIRI", status: "pass" },
{ username: "0033", name: "DENTA JION ARIOWIBOWO", orangTua: "WIJIONO", status: "pass" },
{ username: "0044", name: "ARJUNA TITO MAULANA", orangTua: "AKHMAD NUR SAJIDIN", status: "pass" },
{ username: "0046", name: "DHIMAS ADITYA PRATAMA", orangTua: "LUKMAN ROKHIM", status: "pass" },
{ username: "0047", name: "MOCHAMAD KEFEL SYAHPUTRA", orangTua: "MOCHAMAD IRSYAH SUGIARTO", status: "pass" },
{ username: "0049", name: "JOYSANDIO MARCEL PUTRA SETYOKO", orangTua: "ADI MOELYONO", status: "pass" },
{ username: "0054", name: "RIZKY WISKA ANUGRAHING GUSTI", orangTua: "LUCIUS WISNU BUYUNG HARRIS", status: "pass" },
{ username: "0055", name: "RIZKY DWI OKTAVIAN", orangTua: "IMRON HARIADI", status: "pass" },
{ username: "0062", name: "RIZALDI MARVEL WIJAYA", orangTua: "MARIO KUSTIWAN", status: "pass" },
{ username: "0063", name: "BRILYAN ASWAN YOGA SUPRIADI", orangTua: "ADE SUPRADI", status: "pass" },
{ username: "0064", name: "KUMAR ADITIA", orangTua: "AGUS SETIA BUDI (ALM)", status: "pass" },
{ username: "0065", name: "MUHAMMAD ANDHIKA RAMADHAN", orangTua: "M.SHOLEH", status: "pass" },
{ username: "0072", name: "CHAISAR RASKA GALIH DYAGUNG", orangTua: "AGUNG SUJATMIKO", status: "pass" },
{ username: "0073", name: "HAFIZ HIKMAL AKBAR", orangTua: "MUSTAKIM (ALMARHUM)", status: "pass" },
{ username: "0074", name: "IQHBAL AL QHOZALI", orangTua: "AGUNG SUYONO", status: "pass" },
{ username: "0076", name: "ALIF FAUZI", orangTua: "ILYAS PAMBUDI", status: "pass" },
{ username: "0077", name: "UZLAH DEVWARDANA", orangTua: "PAIDI HERMAWANTO", status: "pass" },
{ username: "0079", name: "ISA SATRIA WARDHANA", orangTua: "ARI WIBOWO", status: "pass" },
{ username: "0083", name: "MOH RIZKY VALENTINO MAULIDHAN", orangTua: "SAIPUL ARIP", status: "pass" },
{ username: "0084", name: "ADAM ZILAL PRASTYA", orangTua: "HENDRIK WAHYUDI", status: "pass" },
{ username: "0086", name: "ADE DZAKY KHAIRULLAH", orangTua: "TEGUH ADE WIJAYA", status: "pass" },
{ username: "0088", name: "MUHAMMAD RISQI", orangTua: "WAWAN SUPRIANTO", status: "pass" },
{ username: "0089", name: "KHOIRUL ANAM", orangTua: "RAHMAT", status: "pass" },
{ username: "0091", name: "IMELLYA NOVITA SARI", orangTua: "MISKARI", status: "pass" },
{ username: "0093", name: "TAUFIQ QUR ROKHMAN", orangTua: "ADHI NUR ROKHMAN", status: "pass" },
{ username: "0094", name: "AHMAD REZA", orangTua: "MUSTAR", status: "fail" },
{ username: "0095", name: "MUHAMMAD RIDHO HARJAYANTO", orangTua: "SUHARIONO", status: "pass" },
{ username: "0097", name: "NAWAF MAULANA", orangTua: "KUSTIWAN", status: "pass" },
{ username: "0099", name: "ALIB FAUZAN ALNANDO SUBAGIO", orangTua: "SUBAGIO", status: "pass" },
{ username: "0100", name: "MUHAMMAD FAUZAN AZZRIEL ALFARIDZIE", orangTua: "FARID SANTOSO", status: "pass" },
{ username: "0101", name: "MUHAMMAD IZZAM SYAFA RAMADHANI", orangTua: "ACHMAD NURAMIN", status: "fail" },
{ username: "0103", name: "MUHAMMAD SOFYAN", orangTua: "MUHAMMAD ARIFIN", status: "pass" },
{ username: "0107", name: "CHOIRURRIZQI LUMINTU", orangTua: "BAMBANG SANTOSO", status: "fail" },
{ username: "0114", name: "GUINANDRA IZZAM HAZIQ ASSYAFA", orangTua: "SUPRIYONO", status: "pass" },
{ username: "0115", name: "FADHIL ABYAN FARISKY", orangTua: "ACHMAD TRI ISBIYANTO", status: "pass" },
{ username: "0116", name: "RIEVAN AHMAD MAHMUD", orangTua: "SAJID MAHMUD", status: "pass" },
{ username: "0117", name: "HIDAYAT FAIZ WAHYU NUGRAHA", orangTua: "ADI SULISTYONO", status: "fail" },
{ username: "0118", name: "AIFEN BOSCO SYAIKEN FRANZALES", orangTua: "DODIK DWI EFEDI", status: "fail" },
{ username: "0120", name: "DANDHY FRIMASTATA DWANSYAH PUTRA", orangTua: "AHMAD YANI", status: "fail" },
{ username: "0125", name: "MUHAMMAD GILANG AL GHOZALI", orangTua: "WAHYUDI TRI SUSILO", status: "pass" },
{ username: "0127", name: "HIBRIZY GHANIYYU INDARMAWAN", orangTua: "ADITYA INDARMAWAN", status: "pass" },
{ username: "0133", name: "NURSIA NABILAGAN", orangTua: "DIDIK", status: "pass" },
{ username: "0135", name: "ALFIAN BAGUS PRADANA", orangTua: "SUSANTO", status: "pass" },
{ username: "0137", name: "ILHAM DELFIAN ERLANGGA PUTRA NISWOKO", orangTua: "YANIS NISVOKO", status: "pass" },
{ username: "0143", name: "MUHAMAD FAZRIEL AL GIFFARI", orangTua: "SUBUR WAHYUDI", status: "pass" },
{ username: "0144", name: "ILHAM MAULANA", orangTua: "MISRIKAT", status: "pass" },
{ username: "0146", name: "DAVID ANGGARA PRATAMA", orangTua: "SUDARMAJI", status: "pass" },
{ username: "0151", name: "MOHAMAD RASYA GAVI ARDHANA", orangTua: "YUDI DEKA PURNAMA", status: "pass" },
{ username: "0152", name: "MAHARDIKA ALVIAN ZULFIKRI", orangTua: "HERI PURNOMO", status: "pass" },
{ username: "0153", name: "M RIDUWAN NOH ALAMSYAH", orangTua: "SUWARNO", status: "pass" },
{ username: "0154", name: "MUHAMMAD ZIDAN ALFARO", orangTua: "WINARTO", status: "pass" },
{ username: "0161", name: "WILDAN ALFIN RIZKI PAMBUDI", orangTua: "AGUS PAMBUDI", status: "pass" },
{ username: "0173", name: "DEWA LINTANG APRLIAN", orangTua: "SISWOKO", status: "pass" },
{ username: "0176", name: "VALEN ADITYA", orangTua: "SUPENO", status: "pass" },
{ username: "0177", name: "MAHENDRA RADIT HIYARTI", orangTua: "SUSILO NANO PRASETYO", status: "pass" },
{ username: "0178", name: "NARENDRA OKTAVINO PUTRA", orangTua: "NANANG SUJIONO", status: "pass" },
{ username: "0179", name: "MUHAMMAD ALFIN FAIS", orangTua: "MUSLIMIN", status: "pass" },
{ username: "0180", name: "EKYK DANISH ADHA", orangTua: "AHMAD ZAINUL ARIFIN", status: "pass" },
{ username: "0183", name: "VANO ADIKA WARDANA", orangTua: "SOLEH ADI WARDANA", status: "pass" },
{ username: "0187", name: "MUHAMMAD FADHILLAH SYARIF", orangTua: "MUSTAKIM", status: "pass" },
{ username: "0188", name: "BENY AZAM EFENDY", orangTua: "DIDIK EFENDI", status: "pass" },
{ username: "0189", name: "RANGGA FRAFASTA GERALD OKTAVIANO", orangTua: "TATOK HARIANO", status: "pass" },
{ username: "0190", name: "MOHAMMAD RONALD FABIAN MAULANA", orangTua: "PRIYATNO", status: "pass" },
{ username: "0197", name: "YONGKY FIRMANSYAH", orangTua: "MARIONO", status: "pass" },
{ username: "0198", name: "AIDIL MUHAMMAD ZIDAN", orangTua: "HERU PURWANTO", status: "pass" },
{ username: "0200", name: "FINSA FALDO FIRMANSYAH", orangTua: "YULIYANTO", status: "pass" },
{ username: "0201", name: "PUTRA RAJA ARDIANSYAH", orangTua: "RUDI AWAN", status: "pass" },
{ username: "0206", name: "ANUGRAH NURFADILAH", orangTua: "ANDRI NURHIDAYAT", status: "pass" },
{ username: "0207", name: "EBRILIAN YOSHY WINDO FRATAMA", orangTua: "DODIK PURWANTO", status: "pass" },
{ username: "0212", name: "ANDIKA RIZKY AGENG WIJOYO", orangTua: "SUGENG", status: "pass" },
{ username: "0214", name: "M.NOVAL AL AKBAR", orangTua: "EDI MUNTOLIB", status: "pass" },
{ username: "0215", name: "RIFQI ADITYA PRATAMA EFENDY", orangTua: "DIDIK SUSANTO", status: "fail" },
{ username: "0219", name: "RANGGA DIMAS ALDIANO", orangTua: "USMAN", status: "pass" },
{ username: "0221", name: "ARYA SENA DWINOV", orangTua: "RUSENO", status: "pass" },
{ username: "0225", name: "NALDO JUAN SAVA", orangTua: "MISNOTO", status: "pass" },
{ username: "0227", name: "JIBRIL SAHIDA JAELANI", orangTua: "PENDIK HIDAYAT", status: "pass" },
{ username: "0228", name: "GILANG ANDI PRANATA", orangTua: "SURIADI", status: "pass" },
{ username: "0229", name: "FINGKI FERNANDA", orangTua: "IRAWAN", status: "pass" },
{ username: "0230", name: "MOCHAMMAD FADIL ZAINUL ULUM", orangTua: "TURIMAN", status: "pass" },
{ username: "0231", name: "MUHAMMAD TAMAM YAHYA", orangTua: "WIDIANTO", status: "pass" },
{ username: "0235", name: "FAHRIZAL ARFIAN WAHYUDIAWAN", orangTua: "SUGENG WAHYUDI", status: "pass" },
{ username: "0237", name: "NASRULLAH AL FATTAH", orangTua: "JURIANTO", status: "fail" },
{ username: "0238", name: "PANGERAN GERLY INDRA JAYA", orangTua: "KASIRAN", status: "pass" },
{ username: "0244", name: "MOCHAMMAD DIAN ALAMSYAH PUTRA", orangTua: "MOCH. FATKHUR MUNIR (ALM)", status: "pass" },
{ username: "0245", name: "MUHAMMAD BINTANG ADI PRATAMA", orangTua: "BUADIANTO", status: "pass" },
{ username: "0246", name: "AVISZENA NURCAHYO", orangTua: "TOFAN KUMBARA", status: "pass" },
{ username: "0257", name: "MOCHAMAD GHESYA ALVIANO", orangTua: "EKO SUNU BUDIHARTONO", status: "fail" },
{ username: "0258", name: "MUHAMAD AZLUL JUNAIDI", orangTua: "SUNARTO", status: "pass" },
{ username: "0260", name: "APTHA WEBIO DELOVA", orangTua: "SUGIYO", status: "pass" },
{ username: "0261", name: "DENI PRASETIO", orangTua: "PAIMIN", status: "fail" },
{ username: "0262", name: "MUHAMMAD YOFIE AFKHAR YUDHISTIRA", orangTua: "IMAM WAHYUDI", status: "pass" },
{ username: "0264", name: "AHMAD SYIFA' MAULANA", orangTua: "NURWAKHIT", status: "pass" },
{ username: "0270", name: "ARY PUTRA PATRIA", orangTua: "DELLA PATRIA", status: "pass" },
{ username: "0271", name: "BRIAN PUTRA RAMADHAN", orangTua: "PIRIN", status: "pass" },
{ username: "0272", name: "KENZAVANO ARBIANSYAH", orangTua: "SUNARKO", status: "fail" },
{ username: "0278", name: "ASYRAF MAULANA IBRAHIM", orangTua: "SULISTONO", status: "pass" },
{ username: "0281", name: "AHMAD NARADIVA MAULANA HUSSEIN", orangTua: "SAMIDI HENDRA WIJAYA", status: "pass" },
{ username: "0283", name: "ADAM PUTRA AL BAIHAQI", orangTua: "IRFAN NURUL YAKIN", status: "fail" },
{ username: "0284", name: "GEO FANKA NEO NARA", orangTua: "KASIANTO", status: "pass" },
{ username: "0285", name: "MUHAMMAD ZAKKY REHAN SAPUTRA", orangTua: "WAHYUDI AYAH SAMBUNG", status: "pass" },
{ username: "0287", name: "MUHAMMAD IQBAL KARYA PRIBADI LUHUR", orangTua: "MISNAN", status: "pass" },
{ username: "0289", name: "AKMAL ANUGERAH FIRDAUS", orangTua: "HERY SUSANTO", status: "pass" },
{ username: "0290", name: "KARISMA GUNTUR PRAYOGI", orangTua: "ANTOKO", status: "pass" },
{ username: "0296", name: "AHMAD AZHAR AUFA", orangTua: "MUSLIMIN", status: "pass" },
{ username: "0301", name: "MUHAMAD ZARWAN ARBI AKBAR", orangTua: "BURHANUDIN", status: "pass" },
{ username: "0303", name: "RANDY ADITYA PRATAMA", orangTua: "NOVAL ARDIANTO", status: "pass" },
{ username: "0304", name: "MUHAMMAD RAFIF ATJAFINDRA", orangTua: "SONY SURYA ATMAJA", status: "fail" },
{ username: "0313", name: "DIEGO ADE ALBERTO", orangTua: "RIWONO", status: "pass" },
{ username: "0314", name: "ALVIAN DWI FAREZA", orangTua: "WARIMIN", status: "pass" },
{ username: "0316", name: "FYUSEDA HAQQUL MUBIN", orangTua: "FUSHILAT", status: "pass" },
{ username: "0317", name: "IRGI ISQAF RAMDHAN", orangTua: "KOKO", status: "pass" },
{ username: "0319", name: "RIZKY BIMA SETIAWAN", orangTua: "TRIMO", status: "pass" },
{ username: "0321", name: "DARIO HELGA NOFIRSTAN KRISMAWAN", orangTua: "DEDIK KRISMAWAN", status: "pass" },
{ username: "0322", name: "MUHAMMAD ROZIQIN", orangTua: "HARTONO", status: "pass" },
{ username: "0323", name: "AMIN NURCAHYANTO", orangTua: "SULASTO", status: "pass" },
{ username: "0324", name: "IQBAL RESTU SAPUTRA", orangTua: "SUPARMANTO", status: "pass" },
{ username: "0325", name: "MUHAMMAD ZAIDAN HAQQI", orangTua: "ARIF DIDI RAHMAD", status: "pass" },
{ username: "0329", name: "RHAKA RADITYA HARI WIJAYA", orangTua: "ARIS PRASETYO PROBO KUSUMO", status: "pass" },
{ username: "0336", name: "MICAEL NAFFIS ZAAHYY", orangTua: "SUYANTO", status: "pass" },
{ username: "0337", name: "HASFARDAN SYAH PUTRA", orangTua: "YUNUS SIANTO", status: "pass" },
{ username: "0341", name: "ANDIKA MARHAEN BOY PRATAMA SOECIPTO", orangTua: "AGUS SUCIPTO", status: "pass" },
{ username: "0345", name: "SHOLEHUDIN WAHID", orangTua: "MARDIONO", status: "pass" },
{ username: "0346", name: "WIFKY ALFIANO", orangTua: "YOHANI", status: "pass" },
{ username: "0349", name: "REVAN JUNIARDI", orangTua: "PARSI", status: "pass" },
{ username: "0351", name: "MUHAMMAD JULIAN FAHREZA", orangTua: "AGUS SUSILO", status: "pass" },
{ username: "0356", name: "ACHMAD MAULANA", orangTua: "MISKAT", status: "pass" },
{ username: "0357", name: "JOHAN RAGIL AZIIZIL", orangTua: "LESTARIONO", status: "pass" },
{ username: "0358", name: "RAFFA DHEA ANANDA", orangTua: "IMAM SUBAKRI", status: "pass" },
{ username: "0360", name: "RAFFA WAHYU PRASTYA", orangTua: "WAHYUDI", status: "fail" },
{ username: "0367", name: "MUHAMMAD ZIDAN ALFIKRI", orangTua: "IMAM AFANDI", status: "pass" },
{ username: "0368", name: "MUKHAMMAD DANI ELFA RIZQI", orangTua: "WIDIANTO", status: "pass" },
{ username: "0369", name: "ANDRIAN HUSAIN", orangTua: "MUHAMAD SALI", status: "pass" },
{ username: "0371", name: "MUHAMAD LUTFI RAMADHAN", orangTua: "EKO WAHYUDI", status: "pass" },
{ username: "0372", name: "ARGAREZA NOVAN PRATAMA", orangTua: "MUJAKI", status: "pass" },
{ username: "0374", name: "ADITYA NUR FAIZIN", orangTua: "SUGIONO", status: "pass" },
{ username: "0379", name: "ACHMAD FURQON RAMADHANI", orangTua: "AGUS SOENARYO", status: "fail" },
{ username: "0382", name: "RENO HAZZA SATRIA PRATAMA", orangTua: "NURASA", status: "pass" },
{ username: "0387", name: "ALHASBI TEGAR RAFAHESYA", orangTua: "ARIFIN", status: "pass" },
{ username: "0390", name: "DIMAS RAKA RAHADIANSYAH", orangTua: "DODIK SURIONO", status: "pass" },
{ username: "0394", name: "RAFEL EKA WAHYU RAMADANI", orangTua: "WAWAN SETIYONO", status: "pass" },
{ username: "0395", name: "RAFAEL RADITYA FIRMANSYAH", orangTua: "YULIUS KRISDIANTO", status: "pass" },
{ username: "0396", name: "MUHAMMAD FAUZAN KUDUS", orangTua: "MATRA`I", status: "pass" },
{ username: "0398", name: "RIZA FATHIR MAULANA", orangTua: "HUDAN ERMANDA", status: "pass" },
{ username: "0412", name: "ARBAITH MUQORROBIN", orangTua: "SULISTYO", status: "pass" },
{ username: "0414", name: "REYHANG", orangTua: "ROHMAD", status: "pass" },
{ username: "0416", name: "SEFIYAN SEMIL FU", orangTua: "SUKO", status: "pass" },
{ username: "0417", name: "MUHAMMAD DEANDRA PRATAMA PUTRA", orangTua: "SUTAJI", status: "pass" },
{ username: "0418", name: "MUHAMMAD DEANDRE RAHANDIKA PUTRA", orangTua: "SUTAJI", status: "pass" },
{ username: "0419", name: "FEBRIAN SOLEH TIRTA PRATAMA", orangTua: "SISWANTO", status: "pass" },
{ username: "0420", name: "MUHAMMAD RADHITYA RIFVANTO", orangTua: "AYKA RIFVANTO", status: "pass" },
{ username: "0422", name: "DONI TRI ATMOJO", orangTua: "SUPAT", status: "pass" },
{ username: "0425", name: "AHMAD ARIFANDI ADE", orangTua: "AHMAD SUKER", status: "pass" },
{ username: "0426", name: "AHMAD NURAFANDI KAKA", orangTua: "AHMAD SUKER", status: "pass" },
{ username: "0427", name: "ALDO HERMANSYAH", orangTua: "MISKAN", status: "pass" },

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
            resultMessage.innerHTML = 'Mohon maaf, Anda tidak direkomendasikan masuk di Konsentrasi Keahlian Teknik Alat Berat, akan tetapi Anda direkomendasikan masuk pada Konsentrasi Keahlian <b>Teknik Kendaraan Ringan (TKR)<b/>, <b>Teknik Sepeda Motor (TSM)</b>, <b>Teknik Pemesinan (TPM)</b>.';
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
