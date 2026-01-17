// Data siswa (hardcode)
const studentData = [
    { username: "andi123", name: "Andi Pratama", status: "pass" },
    { username: "budi456", name: "Budi Santoso", status: "fail" },
    { username: "cindy789", name: "Cindy Putri", status: "pass" },
    { username: "david321", name: "David Wijaya", status: "pass" },
    { username: "eka654", name: "Eka Susanti", status: "fail" },
    { username: "fajar987", name: "Fajar Hidayat", status: "pass" },
    { username: "gita147", name: "Gita Permata", status: "pass" },
    { username: "hadi258", name: "Hadi Nugroho", status: "fail" },
    { username: "ina369", name: "Ina Marlina", status: "pass" },
    { username: "joko741", name: "Joko Widodo", status: "pass" }
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
            resultStatus.textContent = 'LOLOS SELEKSI';
            resultMessage.textContent = 'Selamat! Anda telah dinyatakan lolos seleksi. Silakan melakukan pendaftaran ulang sesuai jadwal yang telah ditentukan.';
        } else {
            resultStatus.className = 'result-status status-fail';
            resultStatus.textContent = 'TIDAK LOLOS SELEKSI';
            resultMessage.textContent = 'Mohon maaf, Anda belum berhasil lolos seleksi tahun ini. Jangan menyerah dan terus berusaha untuk kesempatan berikutnya.';
        }
    } else {
        // Jika username tidak ditemukan
        studentName.textContent = '-';
        studentUsername.textContent = username;
        
        resultStatus.className = 'result-status status-not-found';
        resultStatus.textContent = 'Data tidak ditemukan';
        resultMessage.textContent = 'Username yang Anda masukkan tidak terdaftar dalam sistem kami. Silakan hubungi panitia seleksi untuk informasi lebih lanjut.';
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