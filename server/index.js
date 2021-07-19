const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
var bodyParser = require("body-parser");
var moment = require('moment');
const { response } = require('express');
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "aqua2541",
    database: "mbb_machine",
    dialectOptions: {
        insecureAuth: true
    }
});


db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    
});
////////////////////////////////////////////////////////////////////////
app.get('/datedata/:daypast.:dayseclect.:machine1.:machine2', (req, res) => {
    const daypast = String(req.params.daypast);
    const dayseclect = String(req.params.dayseclect);
    console.log("Date past",daypast,"Date select",dayseclect)
    const machine1 = String(req.params.machine1);
    console.log("machine = ",machine1)
    const machine2 = String(req.params.machine2);
    console.log("machine = ",machine2);
    const check_machine = "";
    

    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    var currdate = year+"-"+month+"-"+date
    console.log(currdate)
    connectReportday(daypast,dayseclect,machine1,machine2);

    db.query(SELECT_REPORTDAY, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Complete Get Data By Date");
            //res.send(result);
            return res.json({result});
        }
    });
});
function connectReportday(daypast,dayseclect,machine1,machine2){
    global.SELECT_REPORTDAY = `SELECT * FROM mbb_data where Product_Date BETWEEN CAST ('${daypast}' AS DATE) AND CAST ('${dayseclect}' AS DATE) AND Machine_Number BETWEEN '${machine1}' AND '${machine2}'`;
    return SELECT_REPORTDAY
}

/////////////////////////////////////////////////////////////////////
app.get('/timedata2/:dayselect.:machine1.:machine2', (req, res) => {
    const dayselect = String(req.params.dayselect);
    console.log("Date select",dayselect)
    const machine1 = String(req.params.machine1);
    console.log("machine = ",machine1)
    const machine2 = String(req.params.machine2);
    console.log("machine = ",machine2)
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    var currdate = year+"-"+month+"-"+date
    console.log(currdate)
    connectReporttime(dayselect,machine1,machine2);

    db.query(SELECT_REPORTDAY, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Complete Get Data By Time");
            //res.send(result);
            return res.json({result});
        }
    });
});
function connectReporttime(dayselect,machine1,machine2){
    global.SELECT_REPORTDAY = `SELECT * FROM mbb_data where Product_Date = CAST ('${dayselect}' AS DATE) AND Machine_Number BETWEEN '${machine1}' AND '${machine2}'`;
    return SELECT_REPORTDAY
}
//////////////////////////////////////////////////////////////
app.get('/cycletime/:datefrom.:timefrom', (req, res) => {
    const Datefrom = String(req.params.datefrom);
    console.log(Datefrom);
    const Timefrom = String(req.params.timefrom);
    console.log(Timefrom);
    const Timeto = Timefrom.slice(0, 3) + "59:59";
    console.log("Data = ", Datefrom, Timefrom, Timeto);

    sql = `SELECT Machine_Number as ID,Product_Time as TIME FROM mbb_data where Product_Date = CAST ('${Datefrom}' AS DATE) AND ProductStart_Time BETWEEN CAST('${Timefrom}' AS TIME) AND CAST ('${Timeto}' AS TIME)`;
    console.log(`Start Query...`);
    
    db.query(sql, function (err, results) {
        if (err) {
            console.error(err); return;
        }
         else {
            var data = results
            console.log("Pull data OK")
            //console.log(results)
            let data1 = {}
            //console.log(time_char)
            data.map(a => { //a = {EQUI,ww}  
           
                
                (data1[a.ID] = data1[a.ID] || []).push(parseFloat(a.TIME).toFixed(2));
                //console.log("----------------------------------------------------------")
            })
              // console.log(data1[1]); 
            const rr = []
            let data2 = Object.entries(data1).map((a, b) => {
            let cur  = {}
                        cur.label = a[0],
                        cur.y = a[1]
                    rr.push(cur)
             }
             )
                    // console.log('CTGroup', data1)
                    //

                    console.log(rr);
                    console.log("connection closed");
                    return res.json({rr});;
                }

                //res.send(result.rows);
    });
    

});
//////////////////////////////////////////////////////////////
app.get('/temptime/:datefrom.:timefrom', (req, res) => {
    const Datefrom = String(req.params.datefrom);
    console.log(Datefrom);
    const Timefrom = String(req.params.timefrom);
    console.log(Timefrom);
    const Timeto = Timefrom.slice(0, 3) + "59:59";
    console.log("Data = ", Datefrom, Timefrom, Timeto);

    sql = `SELECT Machine_Number as ID,Temp_Time as TIME FROM mbb_data where Product_Date = CAST ('${Datefrom}' AS DATE) AND ProductStart_Time BETWEEN CAST('${Timefrom}' AS TIME) AND CAST ('${Timeto}' AS TIME)`;
    console.log(`Start Query...`);
    
    db.query(sql, function (err, results) {
        if (err) {
            console.error(err); return;
        }
         else {
            var data = results
            console.log("Pull data OK")
            //console.log(results)
            let data1 = {}
            //console.log(time_char)
            data.map(a => { //a = {EQUI,ww}  
           
                
                (data1[a.ID] = data1[a.ID] || []).push(parseFloat(a.TIME).toFixed(2));
                //console.log("----------------------------------------------------------")
            })
              // console.log(data1[1]); 
            const rr = []
            let data2 = Object.entries(data1).map((a, b) => {
            let cur  = {}
                        cur.label = a[0],
                        cur.y = a[1]
                    rr.push(cur)
             }
             )
                    // console.log('CTGroup', data1)
                    //

                    console.log(rr);
                    console.log("connection closed");
                    return res.json({rr});;
                }

                //res.send(result.rows);
    });
    

});
//////////////////////////////////////////////////////////////
app.get('/vactime/:datefrom.:timefrom', (req, res) => {
    const Datefrom = String(req.params.datefrom);
    console.log(Datefrom);
    const Timefrom = String(req.params.timefrom);
    console.log(Timefrom);
    const Timeto = Timefrom.slice(0, 3) + "59:59";
    console.log("Data = ", Datefrom, Timefrom, Timeto);

    sql = `SELECT Machine_Number as ID,Vacuum_Time as TIME FROM mbb_data where Product_Date = CAST ('${Datefrom}' AS DATE) AND ProductStart_Time BETWEEN CAST('${Timefrom}' AS TIME) AND CAST ('${Timeto}' AS TIME)`;
    console.log(`Start Query...`);
    
    db.query(sql, function (err, results) {
        if (err) {
            console.error(err); return;
        }
         else {
            var data = results
            console.log("Pull data OK")
            //console.log(results)
            let data1 = {}
            //console.log(time_char)
            data.map(a => { //a = {EQUI,ww}  
           
                
                (data1[a.ID] = data1[a.ID] || []).push(parseFloat(a.TIME).toFixed(2));
                //console.log("----------------------------------------------------------")
            })
              // console.log(data1[1]); 
            const rr = []
            let data2 = Object.entries(data1).map((a, b) => {
            let cur  = {}
                        cur.label = a[0],
                        cur.y = a[1]
                    rr.push(cur)
             }
             )
                    // console.log('CTGroup', data1)
                    //

                    console.log(rr);
                    console.log("connection closed");
                    return res.json({rr});;
                }

                //res.send(result.rows);
    });
    

});
//////////////////////////////////////////////////////////////
app.listen('3002', () => {
    console.log('Server is running on port 3002');
});