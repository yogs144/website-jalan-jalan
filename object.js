// membuat object
//object literal

var mhs ={
    nama : "yoga wpy",
    nrp : "0127764714",
    email : 'yoga@wpy.com',
    jurusan : 'informatika'
}

var mhs2 ={
    nama : "Skar",
    nrp : "0127764715",
    email : 'Sekar@wpy.com',
    jurusan : 'Industri'
}

//function declaration

function buatObjectMhs(nama,nrp,email,jurusan){
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

function Mahasiswa(nama,nrp,email,jurusan){
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
}

var mhs5 = new Mahasiswa('yogi','72167194','yogi@yogs.com','ilmu hukum')

var mhs3 = buatObjectMhs('nofa','51248218','nofa@gmail.com','teknik industri')

var mhs4 = buatObjectMhs('yoga', '78761736', 'yoga@wpy.com', 'bahasa')