// ============================
// PUERTO
// ============================

process.env.PORT = process.env.PORT || 3000;

// ============================
// ENTORNO
// ============================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ============================
// BASE DE DATOS
// ============================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost/cafe';
} else {
    urlDB = 'mongodb+srv://armisae:mIJizy7SsVlh2Xeb@cluster0-jk4qf.mongodb.net/cafe'
}


process.env.NODE_ENV = urlDB;