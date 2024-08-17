var connection = require("../database/mahasiswaDb")
require('dotenv').config()


export class Mahasiswa {
    getAllData(self) {
        connection.query('SELECT * FROM calonkandidat ORDER BY id desc', (err, rows) => {
            if (err) {
              return err;
            } else {
              return rows;
            }      })
    }

}
