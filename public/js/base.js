function saveToDB(){


const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('mydb.sqlite',(err)=>{
    if(err){
        return console.error(err.message);
    }
    console.log('Polaczono z baza SQLite');
});

let min = document.getElementById('min');
let sec = document.getElementById('sec');

let sql = 'INSERT INTO wynikis (minutes, seconds) VALUES (?, ?)';

// wykonanie zapytania
db.run(sql, [min,sec], (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Rekord został dodany do bazy danych SQLite.');
});


db.close((err) => {
    if(err){
        return console.error(err.message);
    }
    console.log('Rozloczono z BD');
});

}