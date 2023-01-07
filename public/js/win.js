function checkWin(){
    if(circleX > 540 && circleY > 540){
        if(submitForm){
            count = 0;
            clearInterval(timeInterval);
            
            SPEED = 1000;

            document.getElementById('win').innerHTML = "WYGRANA";
            document.getElementById('but').disabled = false;
            submitForm = false;
        }
        //saveToDB();
    }
}

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