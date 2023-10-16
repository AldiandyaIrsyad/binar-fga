-- Membuat tabel Nasabah
CREATE TABLE Nasabah (
    nasabah_id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100),
    alamat VARCHAR(255),
    nomor_telepon VARCHAR(50)
);

-- Membuat tabel Akun
CREATE TABLE Akun (
    akun_id INT AUTO_INCREMENT PRIMARY KEY,
    nasabah_id INT,
    saldo DECIMAL(18, 2),
    tipe_akun VARCHAR(50),
    FOREIGN KEY (nasabah_id) REFERENCES Nasabah(nasabah_id)
);

-- Membuat tabel Transaksi
CREATE TABLE Transaksi (
    transaksi_id INT AUTO_INCREMENT PRIMARY KEY,
    akun_id INT,
    tanggal_transaksi DATE,
    jumlah DECIMAL(18, 2),
    tipe_transaksi VARCHAR(50),
    FOREIGN KEY (akun_id) REFERENCES Akun(akun_id)
);

-- Mengisi tabel Nasabah dengan beberapa data awal
INSERT INTO Nasabah (nama, alamat, nomor_telepon) VALUES
('Andi', 'Jl. Melati No. 23, Jakarta', '081234567890'),
('Budi', 'Jl. Mawar No. 45, Bandung', '081345678901'),
('Cici', 'Jl. Anggrek No. 78, Surabaya', '082456789012');

-- Mengisi tabel Akun dengan beberapa data awal
INSERT INTO Akun (nasabah_id, saldo, tipe_akun) VALUES
(1, 15000000.00, 'Giro'),
(2, 10000000.00, 'Tabungan'),
(3, 12000000.00, 'Deposito');

-- Mengisi tabel Transaksi dengan beberapa data awal
INSERT INTO Transaksi (akun_id, tanggal_transaksi, jumlah, tipe_transaksi) VALUES
(1, '2023-10-01', 500000.00, 'Debit'),
(2, '2023-10-05', 250000.00, 'Kredit'),
(3, '2023-10-10', 1000000.00, 'Debit');
