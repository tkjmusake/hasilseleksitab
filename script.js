// Data siswa (hardcode)
const studentData = [
    { username: "0432", name: "AHMAD MUHAIMIN", status: "pass" }, //lolos
    { username: "0442", name: "IRFAN ANDHIO", status: "pass" }, //lolos
    { username: "0443", name: "AZKA FADHIL MUBAROK", status: "pass" }, //lolos
    { username: "0444", name: "MUHAMMAD TIRTA WIDIANZAKKA", status: "pass" }, //lolos
    { username: "0446", name: "BOBY ADITYA ERIANSYAH", status: "pass" }, //lolos
    { username: "0447", name: "MIKO RAHMAN SAHPUTRA", status: "pass" }, //lolos
    { username: "0450", name: "AFANDY PUTRA IRAWAN", status: "pass" }, //lolos
    { username: "0458", name: "KEVIN EKA DENI SAPUTRA", status: "pass" }, //lolos
    { username: "0459", name: "MIRZA AFLAH REZKY PRABOWO", status: "pass" }, //lolos
    { username: "0461", name: "MOCHAMAD JUAN RAFANDA YUSWADI", status: "pass" }, //lolos
    { username: "0466", name: "ILHAM WIRANATA RIZALDI", status: "pass" }, //lolos
    { username: "0478", name: "AL AZHAR ARSHAVINZHA APDI", status: "fail" }, // gagal
    { username: "0479", name: "RAHMAN YUSUF MAULANA", status: "pass" }, //lolos


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
        
        // Tampilkan status kelulusan
        if (student.status === 'pass') {
            resultStatus.className = 'result-status status-pass';
            resultStatus.textContent = 'LOLOS REKOMENDASI';
            resultMessage.textContent = 'Selamat, Anda direkomendasikan masuk di Konsentrasi Keahlian Teknik Alat Berat SMK Muhammadiyah 1 Kepanjen Tahun Pelajaran 2026/2027.';
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