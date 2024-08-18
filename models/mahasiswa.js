import { query } from "express";

var connection = require("../database/mahasiswaDb")
require('dotenv').config()


export class Mahasiswa {
    getAllData(callback) {
        connection.query('SELECT * FROM calonkandidat ORDER BY id desc', (err, rows) => {
            if (err) {
              return callback(err, null);
            } else {
              return callback(null, rows);
            }      })
    }


    editData(data) {
      query
    }

}
