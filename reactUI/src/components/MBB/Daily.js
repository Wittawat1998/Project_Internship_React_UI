import React from "react";
import { Card, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ShowGraph.css";
import { Line } from "react-chartjs-2";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
const moment = require("moment");
const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
    "&:hover": {
      backgroundColor: blue[700],
    },
  },
}))(Button);
function Graph() {
  const [datefrom, setDateFrom] = useState(new Date());
  const [chartData, setChartData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [MachineNumber, setMachineNumber] = useState(1);
  const [MachineNumberTo, setMachineNumberTo] = useState(8);
  const [open, setOpen] = useState(false);
  const [Total, setTotal] = useState([]);
  const [Average, setAverage] = useState([]);
  const [value, setValue] = useState("Temp");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  useEffect(() => {
    let newDate = new Date();
    let date = ("0" + newDate.getDate()).slice(-2);
    let month = ("0" + (newDate.getMonth() + 1)).slice(-2);
    let year = newDate.getFullYear();
    setDateFrom(year + "-" + month + "-" + date);
  }, []);
  function handleChangeDateFrom(e) {
    setDateFrom(e.target.value);
  };
  function handleChangeMachine(e) {
    setMachineNumber(e.target.value);
  };
  function handleChangeMachineTo(e) {
    setMachineNumberTo(e.target.value);
  };
  function All_Average(Count, Temp) {
    let input_Av = 0;
    let Av_T2 = [];
    input_Av = Temp / Count;
    if (Count == 0) {
      input_Av = 0;
    }
    Av_T2 = input_Av.toFixed(2);
    return [Av_T2];
  };
  function FuncTotal(total, num) {
    return total + num;
  };
  async function fetchData() {
    console.log("Date Select", datefrom);
    let Date_select = [];
    Date_select = datefrom.split("-");
    let Date_year = parseInt(Date_select[0]);
    let Date_month = parseInt(Date_select[1]);
    let Date_date = parseInt(Date_select[2]);
    let Date_present = Date_date; let month_present = Date_month; let year_present = Date_year; let year_past;
    let Date_past = Date_present - 6; let Date_month_past = Date_month; let date_2month = moment(Date_year + "-02", "YYYY-MM").daysInMonth(); // 29 or 28
    let Mac1_data = {
      count_day1: 0, count_day2: 0, count_day3: 0, count_day4: 0, count_day5: 0, count_day6: 0, count_day7: 0
      , date_name1: "", date_name2: "", date_name3: "", date_name4: "", date_name5: "", date_name6: "", date_name7: ""
      , temp_day1: 0, temp_day2: 0, temp_day3: 0, temp_day4: 0, temp_day5: 0, temp_day6: 0, temp_day7: 0
      , vac_day1: 0, vac_day2: 0, vac_day3: 0, vac_day4: 0, vac_day5: 0, vac_day6: 0, vac_day7: 0
      , pressure_day_st_1: 0, pressure_day_st_2: 0, pressure_day_st_3: 0, pressure_day_st_4: 0, pressure_day_st_5: 0, pressure_day_st_6: 0, pressure_day_st_7: 0
      , pressure_day_nd_1: 0, pressure_day_nd_2: 0, pressure_day_nd_3: 0, pressure_day_nd_4: 0, pressure_day_nd_5: 0, pressure_day_nd_6: 0, pressure_day_nd_7: 0
    };
    let Mac2_data = {
      count_day1: 0, count_day2: 0, count_day3: 0, count_day4: 0, count_day5: 0, count_day6: 0, count_day7: 0
      , date_name1: "", date_name2: "", date_name3: "", date_name4: "", date_name5: "", date_name6: "", date_name7: ""
      , temp_day1: 0, temp_day2: 0, temp_day3: 0, temp_day4: 0, temp_day5: 0, temp_day6: 0, temp_day7: 0
      , vac_day1: 0, vac_day2: 0, vac_day3: 0, vac_day4: 0, vac_day5: 0, vac_day6: 0, vac_day7: 0
      , pressure_day_st_1: 0, pressure_day_st_2: 0, pressure_day_st_3: 0, pressure_day_st_4: 0, pressure_day_st_5: 0, pressure_day_st_6: 0, pressure_day_st_7: 0
      , pressure_day_nd_1: 0, pressure_day_nd_2: 0, pressure_day_nd_3: 0, pressure_day_nd_4: 0, pressure_day_nd_5: 0, pressure_day_nd_6: 0, pressure_day_nd_7: 0
    };
    let Mac3_data = {
      count_day1: 0, count_day2: 0, count_day3: 0, count_day4: 0, count_day5: 0, count_day6: 0, count_day7: 0
      , date_name1: "", date_name2: "", date_name3: "", date_name4: "", date_name5: "", date_name6: "", date_name7: ""
      , temp_day1: 0, temp_day2: 0, temp_day3: 0, temp_day4: 0, temp_day5: 0, temp_day6: 0, temp_day7: 0
      , vac_day1: 0, vac_day2: 0, vac_day3: 0, vac_day4: 0, vac_day5: 0, vac_day6: 0, vac_day7: 0
      , pressure_day_st_1: 0, pressure_day_st_2: 0, pressure_day_st_3: 0, pressure_day_st_4: 0, pressure_day_st_5: 0, pressure_day_st_6: 0, pressure_day_st_7: 0
      , pressure_day_nd_1: 0, pressure_day_nd_2: 0, pressure_day_nd_3: 0, pressure_day_nd_4: 0, pressure_day_nd_5: 0, pressure_day_nd_6: 0, pressure_day_nd_7: 0
    };
    let Mac4_data = {
      count_day1: 0, count_day2: 0, count_day3: 0, count_day4: 0, count_day5: 0, count_day6: 0, count_day7: 0
      , date_name1: "", date_name2: "", date_name3: "", date_name4: "", date_name5: "", date_name6: "", date_name7: ""
      , temp_day1: 0, temp_day2: 0, temp_day3: 0, temp_day4: 0, temp_day5: 0, temp_day6: 0, temp_day7: 0
      , vac_day1: 0, vac_day2: 0, vac_day3: 0, vac_day4: 0, vac_day5: 0, vac_day6: 0, vac_day7: 0
      , pressure_day_st_1: 0, pressure_day_st_2: 0, pressure_day_st_3: 0, pressure_day_st_4: 0, pressure_day_st_5: 0, pressure_day_st_6: 0, pressure_day_st_7: 0
      , pressure_day_nd_1: 0, pressure_day_nd_2: 0, pressure_day_nd_3: 0, pressure_day_nd_4: 0, pressure_day_nd_5: 0, pressure_day_nd_6: 0, pressure_day_nd_7: 0
    };
    let Mac5_data = {
      count_day1: 0, count_day2: 0, count_day3: 0, count_day4: 0, count_day5: 0, count_day6: 0, count_day7: 0
      , date_name1: "", date_name2: "", date_name3: "", date_name4: "", date_name5: "", date_name6: "", date_name7: ""
      , temp_day1: 0, temp_day2: 0, temp_day3: 0, temp_day4: 0, temp_day5: 0, temp_day6: 0, temp_day7: 0
      , vac_day1: 0, vac_day2: 0, vac_day3: 0, vac_day4: 0, vac_day5: 0, vac_day6: 0, vac_day7: 0
      , pressure_day_st_1: 0, pressure_day_st_2: 0, pressure_day_st_3: 0, pressure_day_st_4: 0, pressure_day_st_5: 0, pressure_day_st_6: 0, pressure_day_st_7: 0
      , pressure_day_nd_1: 0, pressure_day_nd_2: 0, pressure_day_nd_3: 0, pressure_day_nd_4: 0, pressure_day_nd_5: 0, pressure_day_nd_6: 0, pressure_day_nd_7: 0
    };
    let Mac6_data = {
      count_day1: 0, count_day2: 0, count_day3: 0, count_day4: 0, count_day5: 0, count_day6: 0, count_day7: 0
      , date_name1: "", date_name2: "", date_name3: "", date_name4: "", date_name5: "", date_name6: "", date_name7: ""
      , temp_day1: 0, temp_day2: 0, temp_day3: 0, temp_day4: 0, temp_day5: 0, temp_day6: 0, temp_day7: 0
      , vac_day1: 0, vac_day2: 0, vac_day3: 0, vac_day4: 0, vac_day5: 0, vac_day6: 0, vac_day7: 0
      , pressure_day_st_1: 0, pressure_day_st_2: 0, pressure_day_st_3: 0, pressure_day_st_4: 0, pressure_day_st_5: 0, pressure_day_st_6: 0, pressure_day_st_7: 0
      , pressure_day_nd_1: 0, pressure_day_nd_2: 0, pressure_day_nd_3: 0, pressure_day_nd_4: 0, pressure_day_nd_5: 0, pressure_day_nd_6: 0, pressure_day_nd_7: 0
    };
    let Mac7_data = {
      count_day1: 0, count_day2: 0, count_day3: 0, count_day4: 0, count_day5: 0, count_day6: 0, count_day7: 0
      , date_name1: "", date_name2: "", date_name3: "", date_name4: "", date_name5: "", date_name6: "", date_name7: ""
      , temp_day1: 0, temp_day2: 0, temp_day3: 0, temp_day4: 0, temp_day5: 0, temp_day6: 0, temp_day7: 0
      , vac_day1: 0, vac_day2: 0, vac_day3: 0, vac_day4: 0, vac_day5: 0, vac_day6: 0, vac_day7: 0
      , pressure_day_st_1: 0, pressure_day_st_2: 0, pressure_day_st_3: 0, pressure_day_st_4: 0, pressure_day_st_5: 0, pressure_day_st_6: 0, pressure_day_st_7: 0
      , pressure_day_nd_1: 0, pressure_day_nd_2: 0, pressure_day_nd_3: 0, pressure_day_nd_4: 0, pressure_day_nd_5: 0, pressure_day_nd_6: 0, pressure_day_nd_7: 0
    };
    let Mac8_data = {
      count_day1: 0, count_day2: 0, count_day3: 0, count_day4: 0, count_day5: 0, count_day6: 0, count_day7: 0
      , date_name1: "", date_name2: "", date_name3: "", date_name4: "", date_name5: "", date_name6: "", date_name7: ""
      , temp_day1: 0, temp_day2: 0, temp_day3: 0, temp_day4: 0, temp_day5: 0, temp_day6: 0, temp_day7: 0
      , vac_day1: 0, vac_day2: 0, vac_day3: 0, vac_day4: 0, vac_day5: 0, vac_day6: 0, vac_day7: 0
      , pressure_day_st_1: 0, pressure_day_st_2: 0, pressure_day_st_3: 0, pressure_day_st_4: 0, pressure_day_st_5: 0, pressure_day_st_6: 0, pressure_day_st_7: 0
      , pressure_day_nd_1: 0, pressure_day_nd_2: 0, pressure_day_nd_3: 0, pressure_day_nd_4: 0, pressure_day_nd_5: 0, pressure_day_nd_6: 0, pressure_day_nd_7: 0
    };
    let Mac1_ALL_Av = []; let Mac2_ALL_Av = [];  //Array 0 - 6 save temp *---* Array 7 - 13 save vacuum *---* Array 14 - 20 save pressure 1 *---* Array 21 - 27 save pressure 2
    let Mac3_ALL_Av = []; let Mac4_ALL_Av = [];
    let Mac5_ALL_Av = []; let Mac6_ALL_Av = [];
    let Mac7_ALL_Av = []; let Mac8_ALL_Av = [];
    let Day_name = [];
    if (Date_past < 0) {
      if (Date_past == -5) {
        if (Date_month_past - 1 == 2) {
          Date_past = date_2month - 5;
          Date_month_past = Date_month_past - 1;
          year_past = year_present;
        } else if (
          Date_month_past - 1 == 0 ||
          Date_month_past - 1 == 1 ||
          Date_month_past - 1 == 3 ||
          Date_month_past - 1 == 5 ||
          Date_month_past - 1 == 7 ||
          Date_month_past - 1 == 8 ||
          Date_month_past - 1 == 10 ||
          Date_month_past - 1 == 12
        ) {
          Date_month_past = Date_month_past - 1;
          if (Date_month_past == 0) {
            Date_month_past = 12;
            year_past = year_present - 1;
          } else {
            year_past = year_present;
          }
          Date_past = 26;
        } else if (
          Date_month_past - 1 == 4 ||
          Date_month_past - 1 == 6 ||
          Date_month_past - 1 == 9 ||
          Date_month_past - 1 == 11
        ) {
          year_past = year_present;
          Date_past = 25;
          Date_month_past = Date_month_past - 1;
        }
      }
      if (Date_past == -4) {
        if (Date_month_past - 1 == 2) {
          Date_past = date_2month - 4;
          Date_month_past = Date_month_past - 1;
          year_past = year_present;
        } else if (
          Date_month_past - 1 == 0 ||
          Date_month_past - 1 == 1 ||
          Date_month_past - 1 == 3 ||
          Date_month_past - 1 == 5 ||
          Date_month_past - 1 == 7 ||
          Date_month_past - 1 == 8 ||
          Date_month_past - 1 == 10 ||
          Date_month_past - 1 == 12
        ) {
          Date_past = 27;
          Date_month_past = Date_month_past - 1;
          if (Date_month_past == 0) {
            Date_month_past = 12;
            year_past = year_present - 1;
          } else {
            year_past = year_present;
          }
        } else if (
          Date_month_past - 1 == 4 ||
          Date_month_past - 1 == 6 ||
          Date_month_past - 1 == 9 ||
          Date_month_past - 1 == 11
        ) {
          year_past = year_present;
          Date_past = 26;
          Date_month_past = Date_month_past - 1;
        }
      }
      if (Date_past == -3) {
        if (Date_month_past - 1 == 2) {
          Date_past = date_2month - 3;
          Date_month_past = Date_month_past - 1;
          year_past = year_present;
        } else if (
          Date_month_past - 1 == 0 ||
          Date_month_past - 1 == 1 ||
          Date_month_past - 1 == 3 ||
          Date_month_past - 1 == 5 ||
          Date_month_past - 1 == 7 ||
          Date_month_past - 1 == 8 ||
          Date_month_past - 1 == 10 ||
          Date_month_past - 1 == 12
        ) {
          Date_past = 28;
          Date_month_past = Date_month_past - 1;
          if (Date_month_past == 0) {
            Date_month_past = 12;
            year_past = year_present - 1;
          } else {
            year_past = year_present;
          }
        } else if (
          Date_month_past - 1 == 4 ||
          Date_month_past - 1 == 6 ||
          Date_month_past - 1 == 9 ||
          Date_month_past - 1 == 11
        ) {
          year_past = year_present;
          Date_past = 27;
          Date_month_past = Date_month_past - 1;
        }
      }
      if (Date_past == -2) {
        if (Date_month_past - 1 == 2) {
          Date_past = date_2month - 2;
          Date_month_past = Date_month_past - 1;
          year_past = year_present;
        } else if (
          Date_month_past - 1 == 0 ||
          Date_month_past - 1 == 1 ||
          Date_month_past - 1 == 3 ||
          Date_month_past - 1 == 5 ||
          Date_month_past - 1 == 7 ||
          Date_month_past - 1 == 8 ||
          Date_month_past - 1 == 10 ||
          Date_month_past - 1 == 12
        ) {
          Date_past = 29;
          Date_month_past = Date_month_past - 1;
          if (Date_month_past == 0) {
            Date_month_past = 12;
            year_past = year_present - 1;
          } else {
            year_past = year_present;
          }
        } else if (
          Date_month_past - 1 == 4 ||
          Date_month_past - 1 == 6 ||
          Date_month_past - 1 == 9 ||
          Date_month_past - 1 == 11
        ) {
          year_past = year_present;
          Date_past = 28;
          Date_month_past = Date_month_past - 1;
        }
      }
      if (Date_past == -1) {
        if (Date_month_past - 1 == 2) {
          Date_past = date_2month - 1;
          Date_month_past = Date_month_past - 1;
          year_past = year_present;
        } else if (
          Date_month_past - 1 == 0 ||
          Date_month_past - 1 == 1 ||
          Date_month_past - 1 == 3 ||
          Date_month_past - 1 == 5 ||
          Date_month_past - 1 == 7 ||
          Date_month_past - 1 == 8 ||
          Date_month_past - 1 == 10 ||
          Date_month_past - 1 == 12
        ) {
          Date_past = 30;
          Date_month_past = Date_month_past - 1;
          if (Date_month_past == 0) {
            Date_month_past = 12;
            year_past = year_present - 1;
          } else {
            year_past = year_present;
          }
        } else if (
          Date_month_past - 1 == 4 ||
          Date_month_past - 1 == 6 ||
          Date_month_past - 1 == 9 ||
          Date_month_past - 1 == 11
        ) {
          year_past = year_present;
          Date_past = 29;
          Date_month_past = Date_month_past - 1;
        }
      }
    } else if (Date_past == 0) {
      if (Date_month_past - 1 == 2) {
        Date_past = date_2month;
        Date_month_past = Date_month_past - 1;
        year_past = year_present;
      } else if (
        Date_month_past - 1 == 0 ||
        Date_month_past - 1 == 1 ||
        Date_month_past - 1 == 3 ||
        Date_month_past - 1 == 5 ||
        Date_month_past - 1 == 7 ||
        Date_month_past - 1 == 8 ||
        Date_month_past - 1 == 10 ||
        Date_month_past - 1 == 12
      ) {
        Date_past = 31;
        Date_month_past = Date_month_past - 1;
        if (Date_month_past == 0) {
          Date_month_past = 12;
          year_past = year_present - 1;
        } else {
          year_past = year_present;
        }
      } else if (
        Date_month_past - 1 == 4 ||
        Date_month_past - 1 == 6 ||
        Date_month_past - 1 == 9 ||
        Date_month_past - 1 == 11
      ) {
        year_past = year_present;
        Date_past = 30;
        Date_month_past = Date_month_past - 1;
      }
    } else {
      year_past = year_present;
    }
    let machine_no = 0;
    let day_to = ("0" + Date_past).slice(-2);
    let month_to = ("0" + Date_month_past).slice(-2);
    let Date_range_past = year_past + "-" + month_to + "-" + day_to;
    console.log("Date Select Past", Date_range_past);
    Date_date = 0; Date_month = 0;
    let Date_data = []; let Date_range = 0; let month_range = 0; let year_range = 0; let Date_is_char = [];
    const res = await fetch(
      `http://localhost:3002/datedata/${Date_range_past}.${datefrom}.${MachineNumber}.${MachineNumberTo}`
    );
    res
      .json()
      .then((res) => {
        for (const dataObj of res.result) {
          Date_data = dataObj.Product_Date.split("-"); //console.log("time",Date_data);
          Date_year = parseInt(Date_data[0]);
          Date_month = parseInt(Date_data[1]); //console.log("Month",Date_month);
          Date_date = parseInt(Date_data[2]); //console.log("Date range",Date_date);
          Date_range = Date_date; //console.log("Date_in_range",Date_range);
          month_range = Date_month;
          year_range = Date_year;
          machine_no = dataObj.Machine_Number;
          if (machine_no == 1) {
            if (month_range == Date_month_past || month_range == month_present) {
              if (
                month_range == month_present || month_range == Date_month_past
              ) {
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present
                ) {
                  Mac1_data["date_name1"] = dataObj.Product_Date;
                  Mac1_data["temp_day1"] += parseFloat(dataObj.Product_Temp);
                  Mac1_data["vac_day1"] += parseFloat(dataObj.Product_Vacuum);
                  Mac1_data["pressure_day_st_1"] += parseFloat(dataObj.Product_Pressure);
                  Mac1_data["pressure_day_nd_1"] += parseFloat(dataObj.Product_Pressure2);
                  Mac1_data["count_day1"]++;
                }
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present - 1 ||
                  month_range * 100 + Date_range == (Date_month_past * 100 + Date_past + 5 ||
                    month_range * 100 + Date_range == month_present * 100 + Date_past + 5)
                ) {
                  Mac1_data["date_name2"] = dataObj.Product_Date;
                  Mac1_data["temp_day2"] += parseFloat(dataObj.Product_Temp);
                  Mac1_data["vac_day2"] += parseFloat(dataObj.Product_Vacuum);
                  Mac1_data["pressure_day_st_2"] += parseFloat(dataObj.Product_Pressure);
                  Mac1_data["pressure_day_nd_2"] += parseFloat(dataObj.Product_Pressure2);
                  Mac1_data["count_day2"]++;

                }
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present - 2 ||
                  month_range * 100 + Date_range == (Date_month_past * 100 + Date_past + 4 ||
                    month_range * 100 + Date_range == month_present * 100 + Date_past + 4)
                ) {
                  Mac1_data["date_name3"] = dataObj.Product_Date;
                  Mac1_data["temp_day3"] += parseFloat(dataObj.Product_Temp);
                  Mac1_data["vac_day3"] += parseFloat(dataObj.Product_Vacuum);
                  Mac1_data["pressure_day_st_3"] += parseFloat(dataObj.Product_Pressure);
                  Mac1_data["pressure_day_nd_3"] += parseFloat(dataObj.Product_Pressure2);
                  Mac1_data["count_day3"]++;
                }
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present - 3 ||
                  month_range * 100 + Date_range == (Date_month_past * 100 + Date_past + 3 ||
                    month_range * 100 + Date_range == month_present * 100 + Date_past + 3)
                ) {
                  Mac1_data["date_name4"] = dataObj.Product_Date;
                  Mac1_data["temp_day4"] += parseFloat(dataObj.Product_Temp);
                  Mac1_data["vac_day4"] += parseFloat(dataObj.Product_Vacuum);
                  Mac1_data["pressure_day_st_4"] += parseFloat(dataObj.Product_Pressure);
                  Mac1_data["pressure_day_nd_4"] += parseFloat(dataObj.Product_Pressure2);
                  Mac1_data["count_day4"]++;
                }
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present - 4 ||
                  month_range * 100 + Date_range == Date_month_past * 100 + Date_past + 2 ||
                  month_range * 100 + Date_range == month_present * 100 + Date_past + 2
                ) {
                  Mac1_data["date_name5"] = dataObj.Product_Date;
                  Mac1_data["temp_day5"] += parseFloat(dataObj.Product_Temp);
                  Mac1_data["vac_day5"] += parseFloat(dataObj.Product_Vacuum);
                  Mac1_data["pressure_day_st_5"] += parseFloat(dataObj.Product_Pressure);
                  Mac1_data["pressure_day_nd_5"] += parseFloat(dataObj.Product_Pressure2);
                  Mac1_data["count_day5"]++;
                }
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present - 5 ||
                  month_range * 100 + Date_range == Date_month_past * 100 + Date_past + 1 ||
                  month_range * 100 + Date_range == month_present * 100 + Date_past + 1
                ) {
                  Mac1_data["date_name6"] = dataObj.Product_Date;
                  Mac1_data["temp_day6"] += parseFloat(dataObj.Product_Temp);
                  Mac1_data["vac_day6"] += parseFloat(dataObj.Product_Vacuum);
                  Mac1_data["pressure_day_st_6"] += parseFloat(dataObj.Product_Pressure);
                  Mac1_data["pressure_day_nd_6"] += parseFloat(dataObj.Product_Pressure2);
                  Mac1_data["count_day6"]++;
                }
                if (
                  month_range * 100 + Date_range == Date_month_past * 100 + Date_past ||
                  month_range * 100 + Date_range == month_present * 100 + Date_past
                ) {
                  Mac1_data["date_name7"] = dataObj.Product_Date;
                  Mac1_data["temp_day7"] += parseFloat(dataObj.Product_Temp);
                  Mac1_data["vac_day7"] += parseFloat(dataObj.Product_Vacuum);
                  Mac1_data["pressure_day_st_7"] += parseFloat(dataObj.Product_Pressure);
                  Mac1_data["pressure_day_nd_7"] += parseFloat(dataObj.Product_Pressure2);
                  Mac1_data["count_day7"]++;
                }
              }
            }
            Mac1_ALL_Av[0] = parseFloat(All_Average(Mac1_data["count_day1"], Mac1_data["temp_day1"])); Mac1_ALL_Av[1] = parseFloat(All_Average(Mac1_data["count_day2"], Mac1_data["temp_day2"]));
            Mac1_ALL_Av[2] = parseFloat(All_Average(Mac1_data["count_day3"], Mac1_data["temp_day3"])); Mac1_ALL_Av[3] = parseFloat(All_Average(Mac1_data["count_day4"], Mac1_data["temp_day4"]));
            Mac1_ALL_Av[4] = parseFloat(All_Average(Mac1_data["count_day5"], Mac1_data["temp_day5"])); Mac1_ALL_Av[5] = parseFloat(All_Average(Mac1_data["count_day6"], Mac1_data["temp_day6"]));
            Mac1_ALL_Av[6] = parseFloat(All_Average(Mac1_data["count_day7"], Mac1_data["temp_day7"]));

            Mac1_ALL_Av[7] = parseFloat(All_Average(Mac1_data["count_day1"], Mac1_data["vac_day1"])); Mac1_ALL_Av[8] = parseFloat(All_Average(Mac1_data["count_day2"], Mac1_data["vac_day2"]));
            Mac1_ALL_Av[9] = parseFloat(All_Average(Mac1_data["count_day3"], Mac1_data["vac_day3"])); Mac1_ALL_Av[10] = parseFloat(All_Average(Mac1_data["count_day4"], Mac1_data["vac_day4"]));
            Mac1_ALL_Av[11] = parseFloat(All_Average(Mac1_data["count_day5"], Mac1_data["vac_day5"])); Mac1_ALL_Av[12] = parseFloat(All_Average(Mac1_data["count_day6"], Mac1_data["vac_day6"]));
            Mac1_ALL_Av[13] = parseFloat(All_Average(Mac1_data["count_day7"], Mac1_data["vac_day7"]));

            Mac1_ALL_Av[14] = parseFloat(All_Average(Mac1_data["count_day1"], Mac1_data["pressure_day_st_1"])); Mac1_ALL_Av[15] = parseFloat(All_Average(Mac1_data["count_day2"], Mac1_data["pressure_day_st_2"]));
            Mac1_ALL_Av[16] = parseFloat(All_Average(Mac1_data["count_day3"], Mac1_data["pressure_day_st_3"])); Mac1_ALL_Av[17] = parseFloat(All_Average(Mac1_data["count_day4"], Mac1_data["pressure_day_st_4"]));
            Mac1_ALL_Av[18] = parseFloat(All_Average(Mac1_data["count_day5"], Mac1_data["pressure_day_st_5"])); Mac1_ALL_Av[19] = parseFloat(All_Average(Mac1_data["count_day6"], Mac1_data["pressure_day_st_6"]));
            Mac1_ALL_Av[20] = parseFloat(All_Average(Mac1_data["count_day7"], Mac1_data["pressure_day_st_7"]));

            Mac1_ALL_Av[21] = parseFloat(All_Average(Mac1_data["count_day1"], Mac1_data["pressure_day_nd_1"])); Mac1_ALL_Av[22] = parseFloat(All_Average(Mac1_data["count_day2"], Mac1_data["pressure_day_nd_2"]));
            Mac1_ALL_Av[23] = parseFloat(All_Average(Mac1_data["count_day3"], Mac1_data["pressure_day_nd_3"])); Mac1_ALL_Av[24] = parseFloat(All_Average(Mac1_data["count_day4"], Mac1_data["pressure_day_nd_4"]));
            Mac1_ALL_Av[25] = parseFloat(All_Average(Mac1_data["count_day5"], Mac1_data["pressure_day_nd_5"])); Mac1_ALL_Av[26] = parseFloat(All_Average(Mac1_data["count_day6"], Mac1_data["pressure_day_nd_6"]));
            Mac1_ALL_Av[27] = parseFloat(All_Average(Mac1_data["count_day7"], Mac1_data["pressure_day_nd_7"]));
          }
          if (machine_no == 2) {
            if (month_range == Date_month_past || month_range == month_present) {
              if (
                month_range == month_present || month_range == Date_month_past
              ) {
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present
                ) {
                  Mac2_data["date_name1"] = dataObj.Product_Date;
                  Mac2_data["temp_day1"] += parseFloat(dataObj.Product_Temp);
                  Mac2_data["vac_day1"] += parseFloat(dataObj.Product_Vacuum);
                  Mac2_data["pressure_day_st_1"] += parseFloat(dataObj.Product_Pressure);
                  Mac2_data["pressure_day_nd_1"] += parseFloat(dataObj.Product_Pressure2);
                  Mac2_data["count_day1"]++;
                }
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present - 1 ||
                  month_range * 100 + Date_range == (Date_month_past * 100 + Date_past + 5 ||
                    month_range * 100 + Date_range == month_present * 100 + Date_past + 5)
                ) {
                  Mac2_data["date_name2"] = dataObj.Product_Date;
                  Mac2_data["temp_day2"] += parseFloat(dataObj.Product_Temp);
                  Mac2_data["vac_day2"] += parseFloat(dataObj.Product_Vacuum);
                  Mac2_data["pressure_day_st_2"] += parseFloat(dataObj.Product_Pressure);
                  Mac2_data["pressure_day_nd_2"] += parseFloat(dataObj.Product_Pressure2);
                  Mac2_data["count_day2"]++;

                }
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present - 2 ||
                  month_range * 100 + Date_range == (Date_month_past * 100 + Date_past + 4 ||
                    month_range * 100 + Date_range == month_present * 100 + Date_past + 4)
                ) {
                  Mac2_data["date_name3"] = dataObj.Product_Date;
                  Mac2_data["temp_day3"] += parseFloat(dataObj.Product_Temp);
                  Mac2_data["vac_day3"] += parseFloat(dataObj.Product_Vacuum);
                  Mac2_data["pressure_day_st_3"] += parseFloat(dataObj.Product_Pressure);
                  Mac2_data["pressure_day_nd_3"] += parseFloat(dataObj.Product_Pressure2);
                  Mac2_data["count_day3"]++;
                }
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present - 3 ||
                  month_range * 100 + Date_range == (Date_month_past * 100 + Date_past + 3 ||
                    month_range * 100 + Date_range == month_present * 100 + Date_past + 3)
                ) {
                  Mac2_data["date_name4"] = dataObj.Product_Date;
                  Mac2_data["temp_day4"] += parseFloat(dataObj.Product_Temp);
                  Mac2_data["vac_day4"] += parseFloat(dataObj.Product_Vacuum);
                  Mac2_data["pressure_day_st_4"] += parseFloat(dataObj.Product_Pressure);
                  Mac2_data["pressure_day_nd_4"] += parseFloat(dataObj.Product_Pressure2);
                  Mac2_data["count_day4"]++;
                }
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present - 4 ||
                  month_range * 100 + Date_range == Date_month_past * 100 + Date_past + 2 ||
                  month_range * 100 + Date_range == month_present * 100 + Date_past + 2
                ) {
                  Mac2_data["date_name5"] = dataObj.Product_Date;
                  Mac2_data["temp_day5"] += parseFloat(dataObj.Product_Temp);
                  Mac2_data["vac_day5"] += parseFloat(dataObj.Product_Vacuum);
                  Mac2_data["pressure_day_st_5"] += parseFloat(dataObj.Product_Pressure);
                  Mac2_data["pressure_day_nd_5"] += parseFloat(dataObj.Product_Pressure2);
                  Mac2_data["count_day5"]++;
                }
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present - 5 ||
                  month_range * 100 + Date_range == Date_month_past * 100 + Date_past + 1 ||
                  month_range * 100 + Date_range == month_present * 100 + Date_past + 1
                ) {
                  Mac2_data["date_name6"] = dataObj.Product_Date;
                  Mac2_data["temp_day6"] += parseFloat(dataObj.Product_Temp);
                  Mac2_data["vac_day6"] += parseFloat(dataObj.Product_Vacuum);
                  Mac2_data["pressure_day_st_6"] += parseFloat(dataObj.Product_Pressure);
                  Mac2_data["pressure_day_nd_6"] += parseFloat(dataObj.Product_Pressure2);
                  Mac2_data["count_day6"]++;
                }
                if (
                  month_range * 100 + Date_range == Date_month_past * 100 + Date_past ||
                  month_range * 100 + Date_range == month_present * 100 + Date_past
                ) {
                  Mac2_data["date_name7"] = dataObj.Product_Date;
                  Mac2_data["temp_day7"] += parseFloat(dataObj.Product_Temp);
                  Mac2_data["vac_day7"] += parseFloat(dataObj.Product_Vacuum);
                  Mac2_data["pressure_day_st_7"] += parseFloat(dataObj.Product_Pressure);
                  Mac2_data["pressure_day_nd_7"] += parseFloat(dataObj.Product_Pressure2);
                  Mac2_data["count_day7"]++;
                }
              }
            }
            Mac2_ALL_Av[0] = parseFloat(All_Average(Mac2_data["count_day1"], Mac2_data["temp_day1"])); Mac2_ALL_Av[1] = parseFloat(All_Average(Mac2_data["count_day2"], Mac2_data["temp_day2"]));
            Mac2_ALL_Av[2] = parseFloat(All_Average(Mac2_data["count_day3"], Mac2_data["temp_day3"])); Mac2_ALL_Av[3] = parseFloat(All_Average(Mac2_data["count_day4"], Mac2_data["temp_day4"]));
            Mac2_ALL_Av[4] = parseFloat(All_Average(Mac2_data["count_day5"], Mac2_data["temp_day5"])); Mac2_ALL_Av[5] = parseFloat(All_Average(Mac2_data["count_day6"], Mac2_data["temp_day6"]));
            Mac2_ALL_Av[6] = parseFloat(All_Average(Mac2_data["count_day7"], Mac2_data["temp_day7"]));

            Mac2_ALL_Av[7] = parseFloat(All_Average(Mac2_data["count_day1"], Mac2_data["vac_day1"])); Mac2_ALL_Av[8] = parseFloat(All_Average(Mac2_data["count_day2"], Mac2_data["vac_day2"]));
            Mac2_ALL_Av[9] = parseFloat(All_Average(Mac2_data["count_day3"], Mac2_data["vac_day3"])); Mac2_ALL_Av[10] = parseFloat(All_Average(Mac2_data["count_day4"], Mac2_data["vac_day4"]));
            Mac2_ALL_Av[11] = parseFloat(All_Average(Mac2_data["count_day5"], Mac2_data["vac_day5"])); Mac2_ALL_Av[12] = parseFloat(All_Average(Mac2_data["count_day6"], Mac2_data["vac_day6"]));
            Mac2_ALL_Av[13] = parseFloat(All_Average(Mac2_data["count_day7"], Mac2_data["vac_day7"]));

            Mac2_ALL_Av[14] = parseFloat(All_Average(Mac2_data["count_day1"], Mac2_data["pressure_day_st_1"])); Mac2_ALL_Av[15] = parseFloat(All_Average(Mac2_data["count_day2"], Mac2_data["pressure_day_st_2"]));
            Mac2_ALL_Av[16] = parseFloat(All_Average(Mac2_data["count_day3"], Mac2_data["pressure_day_st_3"])); Mac2_ALL_Av[17] = parseFloat(All_Average(Mac2_data["count_day4"], Mac2_data["pressure_day_st_4"]));
            Mac2_ALL_Av[18] = parseFloat(All_Average(Mac2_data["count_day5"], Mac2_data["pressure_day_st_5"])); Mac2_ALL_Av[19] = parseFloat(All_Average(Mac2_data["count_day6"], Mac2_data["pressure_day_st_6"]));
            Mac2_ALL_Av[20] = parseFloat(All_Average(Mac2_data["count_day7"], Mac2_data["pressure_day_st_7"]));

            Mac2_ALL_Av[21] = parseFloat(All_Average(Mac2_data["count_day1"], Mac2_data["pressure_day_nd_1"])); Mac2_ALL_Av[22] = parseFloat(All_Average(Mac2_data["count_day2"], Mac2_data["pressure_day_nd_2"]));
            Mac2_ALL_Av[23] = parseFloat(All_Average(Mac2_data["count_day3"], Mac2_data["pressure_day_nd_3"])); Mac2_ALL_Av[24] = parseFloat(All_Average(Mac2_data["count_day4"], Mac2_data["pressure_day_nd_4"]));
            Mac2_ALL_Av[25] = parseFloat(All_Average(Mac2_data["count_day5"], Mac2_data["pressure_day_nd_5"])); Mac2_ALL_Av[26] = parseFloat(All_Average(Mac2_data["count_day6"], Mac2_data["pressure_day_nd_6"]));
            Mac2_ALL_Av[27] = parseFloat(All_Average(Mac2_data["count_day7"], Mac2_data["pressure_day_nd_7"]));

          }
          if (machine_no == 3) {
            if (month_range == Date_month_past || month_range == month_present) {
              if (
                month_range == month_present || month_range == Date_month_past
              ) {
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present
                ) {
                  Mac3_data["date_name1"] = dataObj.Product_Date;
                  Mac3_data["temp_day1"] += parseFloat(dataObj.Product_Temp);
                  Mac3_data["vac_day1"] += parseFloat(dataObj.Product_Vacuum);
                  Mac3_data["pressure_day_st_1"] += parseFloat(dataObj.Product_Pressure);
                  Mac3_data["pressure_day_nd_1"] += parseFloat(dataObj.Product_Pressure2);
                  Mac3_data["count_day1"]++;
                }
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present - 1 ||
                  month_range * 100 + Date_range == (Date_month_past * 100 + Date_past + 5 ||
                    month_range * 100 + Date_range == month_present * 100 + Date_past + 5)
                ) {
                  Mac3_data["date_name2"] = dataObj.Product_Date;
                  Mac3_data["temp_day2"] += parseFloat(dataObj.Product_Temp);
                  Mac3_data["vac_day2"] += parseFloat(dataObj.Product_Vacuum);
                  Mac3_data["pressure_day_st_2"] += parseFloat(dataObj.Product_Pressure);
                  Mac3_data["pressure_day_nd_2"] += parseFloat(dataObj.Product_Pressure2);
                  Mac3_data["count_day2"]++;

                }
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present - 2 ||
                  month_range * 100 + Date_range == (Date_month_past * 100 + Date_past + 4 ||
                    month_range * 100 + Date_range == month_present * 100 + Date_past + 4)
                ) {
                  Mac3_data["date_name3"] = dataObj.Product_Date;
                  Mac3_data["temp_day3"] += parseFloat(dataObj.Product_Temp);
                  Mac3_data["vac_day3"] += parseFloat(dataObj.Product_Vacuum);
                  Mac3_data["pressure_day_st_3"] += parseFloat(dataObj.Product_Pressure);
                  Mac3_data["pressure_day_nd_3"] += parseFloat(dataObj.Product_Pressure2);
                  Mac3_data["count_day3"]++;
                }
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present - 3 ||
                  month_range * 100 + Date_range == (Date_month_past * 100 + Date_past + 3 ||
                    month_range * 100 + Date_range == month_present * 100 + Date_past + 3)
                ) {
                  Mac3_data["date_name4"] = dataObj.Product_Date;
                  Mac3_data["temp_day4"] += parseFloat(dataObj.Product_Temp);
                  Mac3_data["vac_day4"] += parseFloat(dataObj.Product_Vacuum);
                  Mac3_data["pressure_day_st_4"] += parseFloat(dataObj.Product_Pressure);
                  Mac3_data["pressure_day_nd_4"] += parseFloat(dataObj.Product_Pressure2);
                  Mac3_data["count_day4"]++;
                }
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present - 4 ||
                  month_range * 100 + Date_range == Date_month_past * 100 + Date_past + 2 ||
                  month_range * 100 + Date_range == month_present * 100 + Date_past + 2
                ) {
                  Mac3_data["date_name5"] = dataObj.Product_Date;
                  Mac3_data["temp_day5"] += parseFloat(dataObj.Product_Temp);
                  Mac3_data["vac_day5"] += parseFloat(dataObj.Product_Vacuum);
                  Mac3_data["pressure_day_st_5"] += parseFloat(dataObj.Product_Pressure);
                  Mac3_data["pressure_day_nd_5"] += parseFloat(dataObj.Product_Pressure2);
                  Mac3_data["count_day5"]++;
                }
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present - 5 ||
                  month_range * 100 + Date_range == Date_month_past * 100 + Date_past + 1 ||
                  month_range * 100 + Date_range == month_present * 100 + Date_past + 1
                ) {
                  Mac3_data["date_name6"] = dataObj.Product_Date;
                  Mac3_data["temp_day6"] += parseFloat(dataObj.Product_Temp);
                  Mac3_data["vac_day6"] += parseFloat(dataObj.Product_Vacuum);
                  Mac3_data["pressure_day_st_6"] += parseFloat(dataObj.Product_Pressure);
                  Mac3_data["pressure_day_nd_6"] += parseFloat(dataObj.Product_Pressure2);
                  Mac3_data["count_day6"]++;
                }
                if (
                  month_range * 100 + Date_range == Date_month_past * 100 + Date_past ||
                  month_range * 100 + Date_range == month_present * 100 + Date_past
                ) {
                  Mac3_data["date_name7"] = dataObj.Product_Date;
                  Mac3_data["temp_day7"] += parseFloat(dataObj.Product_Temp);
                  Mac3_data["vac_day7"] += parseFloat(dataObj.Product_Vacuum);
                  Mac3_data["pressure_day_st_7"] += parseFloat(dataObj.Product_Pressure);
                  Mac3_data["pressure_day_nd_7"] += parseFloat(dataObj.Product_Pressure2);
                  Mac3_data["count_day7"]++;
                }
              }
            }
            Mac3_ALL_Av[0] = parseFloat(All_Average(Mac3_data["count_day1"], Mac3_data["temp_day1"])); Mac3_ALL_Av[1] = parseFloat(All_Average(Mac3_data["count_day2"], Mac2_data["temp_day2"]));
            Mac3_ALL_Av[2] = parseFloat(All_Average(Mac3_data["count_day3"], Mac3_data["temp_day3"])); Mac3_ALL_Av[3] = parseFloat(All_Average(Mac3_data["count_day4"], Mac2_data["temp_day4"]));
            Mac3_ALL_Av[4] = parseFloat(All_Average(Mac3_data["count_day5"], Mac3_data["temp_day5"])); Mac3_ALL_Av[5] = parseFloat(All_Average(Mac3_data["count_day6"], Mac2_data["temp_day6"]));
            Mac3_ALL_Av[6] = parseFloat(All_Average(Mac3_data["count_day7"], Mac3_data["temp_day7"]));

            Mac3_ALL_Av[7] = parseFloat(All_Average(Mac3_data["count_day1"], Mac3_data["vac_day1"])); Mac3_ALL_Av[8] = parseFloat(All_Average(Mac3_data["count_day2"], Mac3_data["vac_day2"]));
            Mac3_ALL_Av[9] = parseFloat(All_Average(Mac3_data["count_day3"], Mac3_data["vac_day3"])); Mac3_ALL_Av[10] = parseFloat(All_Average(Mac3_data["count_day4"], Mac3_data["vac_day4"]));
            Mac3_ALL_Av[11] = parseFloat(All_Average(Mac3_data["count_day5"], Mac3_data["vac_day5"])); Mac3_ALL_Av[12] = parseFloat(All_Average(Mac3_data["count_day6"], Mac3_data["vac_day6"]));
            Mac3_ALL_Av[13] = parseFloat(All_Average(Mac3_data["count_day7"], Mac3_data["vac_day7"]));

            Mac3_ALL_Av[14] = parseFloat(All_Average(Mac3_data["count_day1"], Mac3_data["pressure_day_st_1"])); Mac3_ALL_Av[15] = parseFloat(All_Average(Mac3_data["count_day2"], Mac3_data["pressure_day_st_2"]));
            Mac3_ALL_Av[16] = parseFloat(All_Average(Mac3_data["count_day3"], Mac3_data["pressure_day_st_3"])); Mac3_ALL_Av[17] = parseFloat(All_Average(Mac3_data["count_day4"], Mac3_data["pressure_day_st_4"]));
            Mac3_ALL_Av[18] = parseFloat(All_Average(Mac3_data["count_day5"], Mac3_data["pressure_day_st_5"])); Mac3_ALL_Av[19] = parseFloat(All_Average(Mac3_data["count_day6"], Mac3_data["pressure_day_st_6"]));
            Mac3_ALL_Av[20] = parseFloat(All_Average(Mac3_data["count_day7"], Mac3_data["pressure_day_st_7"]));

            Mac3_ALL_Av[21] = parseFloat(All_Average(Mac3_data["count_day1"], Mac3_data["pressure_day_nd_1"])); Mac3_ALL_Av[22] = parseFloat(All_Average(Mac3_data["count_day2"], Mac3_data["pressure_day_nd_2"]));
            Mac3_ALL_Av[23] = parseFloat(All_Average(Mac3_data["count_day3"], Mac3_data["pressure_day_nd_3"])); Mac3_ALL_Av[24] = parseFloat(All_Average(Mac3_data["count_day4"], Mac3_data["pressure_day_nd_4"]));
            Mac3_ALL_Av[25] = parseFloat(All_Average(Mac3_data["count_day5"], Mac3_data["pressure_day_nd_5"])); Mac3_ALL_Av[26] = parseFloat(All_Average(Mac3_data["count_day6"], Mac3_data["pressure_day_nd_6"]));
            Mac3_ALL_Av[27] = parseFloat(All_Average(Mac3_data["count_day7"], Mac3_data["pressure_day_nd_7"]));

          }
          if (machine_no == 4) {
            if (month_range == Date_month_past || month_range == month_present) {
              if (
                month_range == month_present || month_range == Date_month_past
              ) {
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present
                ) {
                  Mac4_data["date_name1"] = dataObj.Product_Date;
                  Mac4_data["temp_day1"] += parseFloat(dataObj.Product_Temp);
                  Mac4_data["vac_day1"] += parseFloat(dataObj.Product_Vacuum);
                  Mac4_data["pressure_day_st_1"] += parseFloat(dataObj.Product_Pressure);
                  Mac4_data["pressure_day_nd_1"] += parseFloat(dataObj.Product_Pressure2);
                  Mac4_data["count_day1"]++;
                }
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present - 1 ||
                  month_range * 100 + Date_range == (Date_month_past * 100 + Date_past + 5 ||
                    month_range * 100 + Date_range == month_present * 100 + Date_past + 5)
                ) {
                  Mac4_data["date_name2"] = dataObj.Product_Date;
                  Mac4_data["temp_day2"] += parseFloat(dataObj.Product_Temp);
                  Mac4_data["vac_day2"] += parseFloat(dataObj.Product_Vacuum);
                  Mac4_data["pressure_day_st_2"] += parseFloat(dataObj.Product_Pressure);
                  Mac4_data["pressure_day_nd_2"] += parseFloat(dataObj.Product_Pressure2);
                  Mac4_data["count_day2"]++;

                }
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present - 2 ||
                  month_range * 100 + Date_range == (Date_month_past * 100 + Date_past + 4 ||
                    month_range * 100 + Date_range == month_present * 100 + Date_past + 4)
                ) {
                  Mac4_data["date_name3"] = dataObj.Product_Date;
                  Mac4_data["temp_day3"] += parseFloat(dataObj.Product_Temp);
                  Mac4_data["vac_day3"] += parseFloat(dataObj.Product_Vacuum);
                  Mac4_data["pressure_day_st_3"] += parseFloat(dataObj.Product_Pressure);
                  Mac4_data["pressure_day_nd_3"] += parseFloat(dataObj.Product_Pressure2);
                  Mac4_data["count_day3"]++;
                }
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present - 3 ||
                  month_range * 100 + Date_range == (Date_month_past * 100 + Date_past + 3 ||
                    month_range * 100 + Date_range == month_present * 100 + Date_past + 3)
                ) {
                  Mac4_data["date_name4"] = dataObj.Product_Date;
                  Mac4_data["temp_day4"] += parseFloat(dataObj.Product_Temp);
                  Mac4_data["vac_day4"] += parseFloat(dataObj.Product_Vacuum);
                  Mac4_data["pressure_day_st_4"] += parseFloat(dataObj.Product_Pressure);
                  Mac4_data["pressure_day_nd_4"] += parseFloat(dataObj.Product_Pressure2);
                  Mac4_data["count_day4"]++;
                }
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present - 4 ||
                  month_range * 100 + Date_range == Date_month_past * 100 + Date_past + 2 ||
                  month_range * 100 + Date_range == month_present * 100 + Date_past + 2
                ) {
                  Mac4_data["date_name5"] = dataObj.Product_Date;
                  Mac4_data["temp_day5"] += parseFloat(dataObj.Product_Temp);
                  Mac4_data["vac_day5"] += parseFloat(dataObj.Product_Vacuum);
                  Mac4_data["pressure_day_st_5"] += parseFloat(dataObj.Product_Pressure);
                  Mac4_data["pressure_day_nd_5"] += parseFloat(dataObj.Product_Pressure2);
                  Mac4_data["count_day5"]++;
                }
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present - 5 ||
                  month_range * 100 + Date_range == Date_month_past * 100 + Date_past + 1 ||
                  month_range * 100 + Date_range == month_present * 100 + Date_past + 1
                ) {
                  Mac4_data["date_name6"] = dataObj.Product_Date;
                  Mac4_data["temp_day6"] += parseFloat(dataObj.Product_Temp);
                  Mac4_data["vac_day6"] += parseFloat(dataObj.Product_Vacuum);
                  Mac4_data["pressure_day_st_6"] += parseFloat(dataObj.Product_Pressure);
                  Mac4_data["pressure_day_nd_6"] += parseFloat(dataObj.Product_Pressure2);
                  Mac4_data["count_day6"]++;
                }
                if (
                  month_range * 100 + Date_range == Date_month_past * 100 + Date_past ||
                  month_range * 100 + Date_range == month_present * 100 + Date_past
                ) {
                  Mac4_data["date_name7"] = dataObj.Product_Date;
                  Mac4_data["temp_day7"] += parseFloat(dataObj.Product_Temp);
                  Mac4_data["vac_day7"] += parseFloat(dataObj.Product_Vacuum);
                  Mac4_data["pressure_day_st_7"] += parseFloat(dataObj.Product_Pressure);
                  Mac4_data["pressure_day_nd_7"] += parseFloat(dataObj.Product_Pressure2);
                  Mac4_data["count_day7"]++;
                }
              }
            }
            Mac4_ALL_Av[0] = parseFloat(All_Average(Mac4_data["count_day1"], Mac4_data["temp_day1"])); Mac4_ALL_Av[1] = parseFloat(All_Average(Mac4_data["count_day2"], Mac4_data["temp_day2"]));
            Mac4_ALL_Av[2] = parseFloat(All_Average(Mac4_data["count_day3"], Mac4_data["temp_day3"])); Mac4_ALL_Av[3] = parseFloat(All_Average(Mac4_data["count_day4"], Mac4_data["temp_day4"]));
            Mac4_ALL_Av[4] = parseFloat(All_Average(Mac4_data["count_day5"], Mac4_data["temp_day5"])); Mac4_ALL_Av[5] = parseFloat(All_Average(Mac4_data["count_day6"], Mac4_data["temp_day6"]));
            Mac4_ALL_Av[6] = parseFloat(All_Average(Mac4_data["count_day7"], Mac4_data["temp_day7"]));

            Mac4_ALL_Av[7] = parseFloat(All_Average(Mac4_data["count_day1"], Mac4_data["vac_day1"])); Mac4_ALL_Av[8] = parseFloat(All_Average(Mac4_data["count_day2"], Mac4_data["vac_day2"]));
            Mac4_ALL_Av[9] = parseFloat(All_Average(Mac4_data["count_day3"], Mac4_data["vac_day3"])); Mac4_ALL_Av[10] = parseFloat(All_Average(Mac4_data["count_day4"], Mac4_data["vac_day4"]));
            Mac4_ALL_Av[11] = parseFloat(All_Average(Mac4_data["count_day5"], Mac4_data["vac_day5"])); Mac4_ALL_Av[12] = parseFloat(All_Average(Mac4_data["count_day6"], Mac4_data["vac_day6"]));
            Mac4_ALL_Av[13] = parseFloat(All_Average(Mac4_data["count_day7"], Mac4_data["vac_day7"]));

            Mac4_ALL_Av[14] = parseFloat(All_Average(Mac4_data["count_day1"], Mac4_data["pressure_day_st_1"])); Mac4_ALL_Av[15] = parseFloat(All_Average(Mac4_data["count_day2"], Mac4_data["pressure_day_st_2"]));
            Mac4_ALL_Av[16] = parseFloat(All_Average(Mac4_data["count_day3"], Mac4_data["pressure_day_st_3"])); Mac4_ALL_Av[17] = parseFloat(All_Average(Mac4_data["count_day4"], Mac4_data["pressure_day_st_4"]));
            Mac4_ALL_Av[18] = parseFloat(All_Average(Mac4_data["count_day5"], Mac4_data["pressure_day_st_5"])); Mac4_ALL_Av[19] = parseFloat(All_Average(Mac4_data["count_day6"], Mac4_data["pressure_day_st_6"]));
            Mac4_ALL_Av[20] = parseFloat(All_Average(Mac4_data["count_day7"], Mac4_data["pressure_day_st_7"]));

            Mac4_ALL_Av[21] = parseFloat(All_Average(Mac4_data["count_day1"], Mac4_data["pressure_day_nd_1"])); Mac4_ALL_Av[22] = parseFloat(All_Average(Mac4_data["count_day2"], Mac4_data["pressure_day_nd_2"]));
            Mac4_ALL_Av[23] = parseFloat(All_Average(Mac4_data["count_day3"], Mac4_data["pressure_day_nd_3"])); Mac4_ALL_Av[24] = parseFloat(All_Average(Mac4_data["count_day4"], Mac4_data["pressure_day_nd_4"]));
            Mac4_ALL_Av[25] = parseFloat(All_Average(Mac4_data["count_day5"], Mac4_data["pressure_day_nd_5"])); Mac4_ALL_Av[26] = parseFloat(All_Average(Mac4_data["count_day6"], Mac4_data["pressure_day_nd_6"]));
            Mac4_ALL_Av[27] = parseFloat(All_Average(Mac4_data["count_day7"], Mac4_data["pressure_day_nd_7"]));

          }
          if (machine_no == 5) {
            if (month_range == Date_month_past || month_range == month_present) {
              if (
                month_range == month_present || month_range == Date_month_past
              ) {
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present
                ) {
                  Mac5_data["date_name1"] = dataObj.Product_Date;
                  Mac5_data["temp_day1"] += parseFloat(dataObj.Product_Temp);
                  Mac5_data["vac_day1"] += parseFloat(dataObj.Product_Vacuum);
                  Mac5_data["pressure_day_st_1"] += parseFloat(dataObj.Product_Pressure);
                  Mac5_data["pressure_day_nd_1"] += parseFloat(dataObj.Product_Pressure2);
                  Mac5_data["count_day1"]++;
                }
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present - 1 ||
                  month_range * 100 + Date_range == (Date_month_past * 100 + Date_past + 5 ||
                    month_range * 100 + Date_range == month_present * 100 + Date_past + 5)
                ) {
                  Mac5_data["date_name2"] = dataObj.Product_Date;
                  Mac5_data["temp_day2"] += parseFloat(dataObj.Product_Temp);
                  Mac5_data["vac_day2"] += parseFloat(dataObj.Product_Vacuum);
                  Mac5_data["pressure_day_st_2"] += parseFloat(dataObj.Product_Pressure);
                  Mac5_data["pressure_day_nd_2"] += parseFloat(dataObj.Product_Pressure2);
                  Mac5_data["count_day2"]++;

                }
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present - 2 ||
                  month_range * 100 + Date_range == (Date_month_past * 100 + Date_past + 4 ||
                    month_range * 100 + Date_range == month_present * 100 + Date_past + 4)
                ) {
                  Mac5_data["date_name3"] = dataObj.Product_Date;
                  Mac5_data["temp_day3"] += parseFloat(dataObj.Product_Temp);
                  Mac5_data["vac_day3"] += parseFloat(dataObj.Product_Vacuum);
                  Mac5_data["pressure_day_st_3"] += parseFloat(dataObj.Product_Pressure);
                  Mac5_data["pressure_day_nd_3"] += parseFloat(dataObj.Product_Pressure2);
                  Mac5_data["count_day3"]++;
                }
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present - 3 ||
                  month_range * 100 + Date_range == (Date_month_past * 100 + Date_past + 3 ||
                    month_range * 100 + Date_range == month_present * 100 + Date_past + 3)
                ) {
                  Mac5_data["date_name4"] = dataObj.Product_Date;
                  Mac5_data["temp_day4"] += parseFloat(dataObj.Product_Temp);
                  Mac5_data["vac_day4"] += parseFloat(dataObj.Product_Vacuum);
                  Mac5_data["pressure_day_st_4"] += parseFloat(dataObj.Product_Pressure);
                  Mac5_data["pressure_day_nd_4"] += parseFloat(dataObj.Product_Pressure2);
                  Mac5_data["count_day4"]++;
                }
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present - 4 ||
                  month_range * 100 + Date_range == Date_month_past * 100 + Date_past + 2 ||
                  month_range * 100 + Date_range == month_present * 100 + Date_past + 2
                ) {
                  Mac5_data["date_name5"] = dataObj.Product_Date;
                  Mac5_data["temp_day5"] += parseFloat(dataObj.Product_Temp);
                  Mac5_data["vac_day5"] += parseFloat(dataObj.Product_Vacuum);
                  Mac5_data["pressure_day_st_5"] += parseFloat(dataObj.Product_Pressure);
                  Mac5_data["pressure_day_nd_5"] += parseFloat(dataObj.Product_Pressure2);
                  Mac5_data["count_day5"]++;
                }
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present - 5 ||
                  month_range * 100 + Date_range == Date_month_past * 100 + Date_past + 1 ||
                  month_range * 100 + Date_range == month_present * 100 + Date_past + 1
                ) {
                  Mac5_data["date_name6"] = dataObj.Product_Date;
                  Mac5_data["temp_day6"] += parseFloat(dataObj.Product_Temp);
                  Mac5_data["vac_day6"] += parseFloat(dataObj.Product_Vacuum);
                  Mac5_data["pressure_day_st_6"] += parseFloat(dataObj.Product_Pressure);
                  Mac5_data["pressure_day_nd_6"] += parseFloat(dataObj.Product_Pressure2);
                  Mac5_data["count_day6"]++;
                }
                if (
                  month_range * 100 + Date_range == Date_month_past * 100 + Date_past ||
                  month_range * 100 + Date_range == month_present * 100 + Date_past
                ) {
                  Mac5_data["date_name7"] = dataObj.Product_Date;
                  Mac5_data["temp_day7"] += parseFloat(dataObj.Product_Temp);
                  Mac5_data["vac_day7"] += parseFloat(dataObj.Product_Vacuum);
                  Mac5_data["pressure_day_st_7"] += parseFloat(dataObj.Product_Pressure);
                  Mac5_data["pressure_day_nd_7"] += parseFloat(dataObj.Product_Pressure2);
                  Mac5_data["count_day7"]++;
                }
              }
            }
            Mac5_ALL_Av[0] = parseFloat(All_Average(Mac5_data["count_day1"], Mac5_data["temp_day1"])); Mac5_ALL_Av[1] = parseFloat(All_Average(Mac5_data["count_day2"], Mac5_data["temp_day2"]));
            Mac5_ALL_Av[2] = parseFloat(All_Average(Mac5_data["count_day3"], Mac5_data["temp_day3"])); Mac5_ALL_Av[3] = parseFloat(All_Average(Mac5_data["count_day4"], Mac5_data["temp_day4"]));
            Mac5_ALL_Av[4] = parseFloat(All_Average(Mac5_data["count_day5"], Mac5_data["temp_day5"])); Mac5_ALL_Av[5] = parseFloat(All_Average(Mac5_data["count_day6"], Mac5_data["temp_day6"]));
            Mac5_ALL_Av[6] = parseFloat(All_Average(Mac5_data["count_day7"], Mac5_data["temp_day7"]));

            Mac5_ALL_Av[7] = parseFloat(All_Average(Mac5_data["count_day1"], Mac5_data["vac_day1"])); Mac5_ALL_Av[8] = parseFloat(All_Average(Mac5_data["count_day2"], Mac5_data["vac_day2"]));
            Mac5_ALL_Av[9] = parseFloat(All_Average(Mac5_data["count_day3"], Mac5_data["vac_day3"])); Mac5_ALL_Av[10] = parseFloat(All_Average(Mac5_data["count_day4"], Mac5_data["vac_day4"]));
            Mac5_ALL_Av[11] = parseFloat(All_Average(Mac5_data["count_day5"], Mac5_data["vac_day5"])); Mac5_ALL_Av[12] = parseFloat(All_Average(Mac5_data["count_day6"], Mac5_data["vac_day6"]));
            Mac5_ALL_Av[13] = parseFloat(All_Average(Mac5_data["count_day7"], Mac5_data["vac_day7"]));

            Mac5_ALL_Av[14] = parseFloat(All_Average(Mac5_data["count_day1"], Mac5_data["pressure_day_st_1"])); Mac5_ALL_Av[15] = parseFloat(All_Average(Mac5_data["count_day2"], Mac5_data["pressure_day_st_2"]));
            Mac5_ALL_Av[16] = parseFloat(All_Average(Mac5_data["count_day3"], Mac5_data["pressure_day_st_3"])); Mac5_ALL_Av[17] = parseFloat(All_Average(Mac5_data["count_day4"], Mac5_data["pressure_day_st_4"]));
            Mac5_ALL_Av[18] = parseFloat(All_Average(Mac5_data["count_day5"], Mac5_data["pressure_day_st_5"])); Mac5_ALL_Av[19] = parseFloat(All_Average(Mac5_data["count_day6"], Mac5_data["pressure_day_st_6"]));
            Mac5_ALL_Av[20] = parseFloat(All_Average(Mac5_data["count_day7"], Mac5_data["pressure_day_st_7"]));

            Mac5_ALL_Av[21] = parseFloat(All_Average(Mac5_data["count_day1"], Mac5_data["pressure_day_nd_1"])); Mac5_ALL_Av[22] = parseFloat(All_Average(Mac5_data["count_day2"], Mac5_data["pressure_day_nd_2"]));
            Mac5_ALL_Av[23] = parseFloat(All_Average(Mac5_data["count_day3"], Mac5_data["pressure_day_nd_3"])); Mac5_ALL_Av[24] = parseFloat(All_Average(Mac5_data["count_day4"], Mac5_data["pressure_day_nd_4"]));
            Mac5_ALL_Av[25] = parseFloat(All_Average(Mac5_data["count_day5"], Mac5_data["pressure_day_nd_5"])); Mac5_ALL_Av[26] = parseFloat(All_Average(Mac5_data["count_day6"], Mac5_data["pressure_day_nd_6"]));
            Mac5_ALL_Av[27] = parseFloat(All_Average(Mac5_data["count_day7"], Mac5_data["pressure_day_nd_7"]));

          }
          if (machine_no == 6) {
            if (month_range == Date_month_past || month_range == month_present) {
              if (
                month_range == month_present || month_range == Date_month_past
              ) {
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present
                ) {
                  Mac6_data["date_name1"] = dataObj.Product_Date;
                  Mac6_data["temp_day1"] += parseFloat(dataObj.Product_Temp);
                  Mac6_data["vac_day1"] += parseFloat(dataObj.Product_Vacuum);
                  Mac6_data["pressure_day_st_1"] += parseFloat(dataObj.Product_Pressure);
                  Mac6_data["pressure_day_nd_1"] += parseFloat(dataObj.Product_Pressure2);
                  Mac6_data["count_day1"]++;
                }
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present - 1 ||
                  month_range * 100 + Date_range == (Date_month_past * 100 + Date_past + 5 ||
                    month_range * 100 + Date_range == month_present * 100 + Date_past + 5)
                ) {
                  Mac6_data["date_name2"] = dataObj.Product_Date;
                  Mac6_data["temp_day2"] += parseFloat(dataObj.Product_Temp);
                  Mac6_data["vac_day2"] += parseFloat(dataObj.Product_Vacuum);
                  Mac6_data["pressure_day_st_2"] += parseFloat(dataObj.Product_Pressure);
                  Mac6_data["pressure_day_nd_2"] += parseFloat(dataObj.Product_Pressure2);
                  Mac6_data["count_day2"]++;

                }
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present - 2 ||
                  month_range * 100 + Date_range == (Date_month_past * 100 + Date_past + 4 ||
                    month_range * 100 + Date_range == month_present * 100 + Date_past + 4)
                ) {
                  Mac6_data["date_name3"] = dataObj.Product_Date;
                  Mac6_data["temp_day3"] += parseFloat(dataObj.Product_Temp);
                  Mac6_data["vac_day3"] += parseFloat(dataObj.Product_Vacuum);
                  Mac6_data["pressure_day_st_3"] += parseFloat(dataObj.Product_Pressure);
                  Mac6_data["pressure_day_nd_3"] += parseFloat(dataObj.Product_Pressure2);
                  Mac6_data["count_day3"]++;
                }
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present - 3 ||
                  month_range * 100 + Date_range == (Date_month_past * 100 + Date_past + 3 ||
                    month_range * 100 + Date_range == month_present * 100 + Date_past + 3)
                ) {
                  Mac6_data["date_name4"] = dataObj.Product_Date;
                  Mac6_data["temp_day4"] += parseFloat(dataObj.Product_Temp);
                  Mac6_data["vac_day4"] += parseFloat(dataObj.Product_Vacuum);
                  Mac6_data["pressure_day_st_4"] += parseFloat(dataObj.Product_Pressure);
                  Mac6_data["pressure_day_nd_4"] += parseFloat(dataObj.Product_Pressure2);
                  Mac6_data["count_day4"]++;
                }
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present - 4 ||
                  month_range * 100 + Date_range == Date_month_past * 100 + Date_past + 2 ||
                  month_range * 100 + Date_range == month_present * 100 + Date_past + 2
                ) {
                  Mac6_data["date_name5"] = dataObj.Product_Date;
                  Mac6_data["temp_day5"] += parseFloat(dataObj.Product_Temp);
                  Mac6_data["vac_day5"] += parseFloat(dataObj.Product_Vacuum);
                  Mac6_data["pressure_day_st_5"] += parseFloat(dataObj.Product_Pressure);
                  Mac6_data["pressure_day_nd_5"] += parseFloat(dataObj.Product_Pressure2);
                  Mac6_data["count_day5"]++;
                }
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present - 5 ||
                  month_range * 100 + Date_range == Date_month_past * 100 + Date_past + 1 ||
                  month_range * 100 + Date_range == month_present * 100 + Date_past + 1
                ) {
                  Mac6_data["date_name6"] = dataObj.Product_Date;
                  Mac6_data["temp_day6"] += parseFloat(dataObj.Product_Temp);
                  Mac6_data["vac_day6"] += parseFloat(dataObj.Product_Vacuum);
                  Mac6_data["pressure_day_st_6"] += parseFloat(dataObj.Product_Pressure);
                  Mac6_data["pressure_day_nd_6"] += parseFloat(dataObj.Product_Pressure2);
                  Mac6_data["count_day6"]++;
                }
                if (
                  month_range * 100 + Date_range == Date_month_past * 100 + Date_past ||
                  month_range * 100 + Date_range == month_present * 100 + Date_past
                ) {
                  Mac6_data["date_name7"] = dataObj.Product_Date;
                  Mac6_data["temp_day7"] += parseFloat(dataObj.Product_Temp);
                  Mac6_data["vac_day7"] += parseFloat(dataObj.Product_Vacuum);
                  Mac6_data["pressure_day_st_7"] += parseFloat(dataObj.Product_Pressure);
                  Mac6_data["pressure_day_nd_7"] += parseFloat(dataObj.Product_Pressure2);
                  Mac6_data["count_day7"]++;
                }
              }
            }
            Mac6_ALL_Av[0] = parseFloat(All_Average(Mac6_data["count_day1"], Mac6_data["temp_day1"])); Mac6_ALL_Av[1] = parseFloat(All_Average(Mac6_data["count_day2"], Mac6_data["temp_day2"]));
            Mac6_ALL_Av[2] = parseFloat(All_Average(Mac6_data["count_day3"], Mac6_data["temp_day3"])); Mac6_ALL_Av[3] = parseFloat(All_Average(Mac6_data["count_day4"], Mac6_data["temp_day4"]));
            Mac6_ALL_Av[4] = parseFloat(All_Average(Mac6_data["count_day5"], Mac6_data["temp_day5"])); Mac6_ALL_Av[5] = parseFloat(All_Average(Mac6_data["count_day6"], Mac6_data["temp_day6"]));
            Mac6_ALL_Av[6] = parseFloat(All_Average(Mac6_data["count_day7"], Mac6_data["temp_day7"]));

            Mac6_ALL_Av[7] = parseFloat(All_Average(Mac6_data["count_day1"], Mac6_data["vac_day1"])); Mac6_ALL_Av[8] = parseFloat(All_Average(Mac6_data["count_day2"], Mac6_data["vac_day2"]));
            Mac6_ALL_Av[9] = parseFloat(All_Average(Mac6_data["count_day3"], Mac6_data["vac_day3"])); Mac6_ALL_Av[10] = parseFloat(All_Average(Mac6_data["count_day4"], Mac6_data["vac_day4"]));
            Mac6_ALL_Av[11] = parseFloat(All_Average(Mac6_data["count_day5"], Mac6_data["vac_day5"])); Mac6_ALL_Av[12] = parseFloat(All_Average(Mac6_data["count_day6"], Mac6_data["vac_day6"]));
            Mac6_ALL_Av[13] = parseFloat(All_Average(Mac6_data["count_day7"], Mac6_data["vac_day7"]));

            Mac6_ALL_Av[14] = parseFloat(All_Average(Mac6_data["count_day1"], Mac6_data["pressure_day_st_1"])); Mac6_ALL_Av[15] = parseFloat(All_Average(Mac6_data["count_day2"], Mac6_data["pressure_day_st_2"]));
            Mac6_ALL_Av[16] = parseFloat(All_Average(Mac6_data["count_day3"], Mac6_data["pressure_day_st_3"])); Mac6_ALL_Av[17] = parseFloat(All_Average(Mac6_data["count_day4"], Mac6_data["pressure_day_st_4"]));
            Mac6_ALL_Av[18] = parseFloat(All_Average(Mac6_data["count_day5"], Mac6_data["pressure_day_st_5"])); Mac6_ALL_Av[19] = parseFloat(All_Average(Mac6_data["count_day6"], Mac6_data["pressure_day_st_6"]));
            Mac6_ALL_Av[20] = parseFloat(All_Average(Mac6_data["count_day7"], Mac6_data["pressure_day_st_7"]));

            Mac6_ALL_Av[21] = parseFloat(All_Average(Mac6_data["count_day1"], Mac6_data["pressure_day_nd_1"])); Mac6_ALL_Av[22] = parseFloat(All_Average(Mac6_data["count_day2"], Mac6_data["pressure_day_nd_2"]));
            Mac6_ALL_Av[23] = parseFloat(All_Average(Mac6_data["count_day3"], Mac6_data["pressure_day_nd_3"])); Mac6_ALL_Av[24] = parseFloat(All_Average(Mac6_data["count_day4"], Mac6_data["pressure_day_nd_4"]));
            Mac6_ALL_Av[25] = parseFloat(All_Average(Mac6_data["count_day5"], Mac6_data["pressure_day_nd_5"])); Mac6_ALL_Av[26] = parseFloat(All_Average(Mac6_data["count_day6"], Mac6_data["pressure_day_nd_6"]));
            Mac6_ALL_Av[27] = parseFloat(All_Average(Mac6_data["count_day7"], Mac6_data["pressure_day_nd_7"]));

          }
          if (machine_no == 7) {
            if (month_range == Date_month_past || month_range == month_present) {
              if (
                month_range == month_present || month_range == Date_month_past
              ) {
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present
                ) {
                  Mac7_data["date_name1"] = dataObj.Product_Date;
                  Mac7_data["temp_day1"] += parseFloat(dataObj.Product_Temp);
                  Mac7_data["vac_day1"] += parseFloat(dataObj.Product_Vacuum);
                  Mac7_data["pressure_day_st_1"] += parseFloat(dataObj.Product_Pressure);
                  Mac7_data["pressure_day_nd_1"] += parseFloat(dataObj.Product_Pressure2);
                  Mac7_data["count_day1"]++;
                }
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present - 1 ||
                  month_range * 100 + Date_range == (Date_month_past * 100 + Date_past + 5 ||
                    month_range * 100 + Date_range == month_present * 100 + Date_past + 5)
                ) {
                  Mac7_data["date_name2"] = dataObj.Product_Date;
                  Mac7_data["temp_day2"] += parseFloat(dataObj.Product_Temp);
                  Mac7_data["vac_day2"] += parseFloat(dataObj.Product_Vacuum);
                  Mac7_data["pressure_day_st_2"] += parseFloat(dataObj.Product_Pressure);
                  Mac7_data["pressure_day_nd_2"] += parseFloat(dataObj.Product_Pressure2);
                  Mac7_data["count_day2"]++;
                }
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present - 2 ||
                  month_range * 100 + Date_range == (Date_month_past * 100 + Date_past + 4 ||
                    month_range * 100 + Date_range == month_present * 100 + Date_past + 4)
                ) {
                  Mac7_data["date_name3"] = dataObj.Product_Date;
                  Mac7_data["temp_day3"] += parseFloat(dataObj.Product_Temp);
                  Mac7_data["vac_day3"] += parseFloat(dataObj.Product_Vacuum);
                  Mac7_data["pressure_day_st_3"] += parseFloat(dataObj.Product_Pressure);
                  Mac7_data["pressure_day_nd_3"] += parseFloat(dataObj.Product_Pressure2);
                  Mac7_data["count_day3"]++;
                }
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present - 3 ||
                  month_range * 100 + Date_range == (Date_month_past * 100 + Date_past + 3 ||
                    month_range * 100 + Date_range == month_present * 100 + Date_past + 3)
                ) {
                  Mac7_data["date_name4"] = dataObj.Product_Date;
                  Mac7_data["temp_day4"] += parseFloat(dataObj.Product_Temp);
                  Mac7_data["vac_day4"] += parseFloat(dataObj.Product_Vacuum);
                  Mac7_data["pressure_day_st_4"] += parseFloat(dataObj.Product_Pressure);
                  Mac7_data["pressure_day_nd_4"] += parseFloat(dataObj.Product_Pressure2);
                  Mac7_data["count_day4"]++;
                }
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present - 4 ||
                  month_range * 100 + Date_range == Date_month_past * 100 + Date_past + 2 ||
                  month_range * 100 + Date_range == month_present * 100 + Date_past + 2
                ) {
                  Mac7_data["date_name5"] = dataObj.Product_Date;
                  Mac7_data["temp_day5"] += parseFloat(dataObj.Product_Temp);
                  Mac7_data["vac_day5"] += parseFloat(dataObj.Product_Vacuum);
                  Mac7_data["pressure_day_st_5"] += parseFloat(dataObj.Product_Pressure);
                  Mac7_data["pressure_day_nd_5"] += parseFloat(dataObj.Product_Pressure2);
                  Mac7_data["count_day5"]++;
                }
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present - 5 ||
                  month_range * 100 + Date_range == Date_month_past * 100 + Date_past + 1 ||
                  month_range * 100 + Date_range == month_present * 100 + Date_past + 1
                ) {
                  Mac7_data["date_name6"] = dataObj.Product_Date;
                  Mac7_data["temp_day6"] += parseFloat(dataObj.Product_Temp);
                  Mac7_data["vac_day6"] += parseFloat(dataObj.Product_Vacuum);
                  Mac7_data["pressure_day_st_6"] += parseFloat(dataObj.Product_Pressure);
                  Mac7_data["pressure_day_nd_6"] += parseFloat(dataObj.Product_Pressure2);
                  Mac7_data["count_day6"]++;
                }
                if (
                  month_range * 100 + Date_range == Date_month_past * 100 + Date_past ||
                  month_range * 100 + Date_range == month_present * 100 + Date_past
                ) {
                  Mac7_data["date_name7"] = dataObj.Product_Date;
                  Mac7_data["temp_day7"] += parseFloat(dataObj.Product_Temp);
                  Mac7_data["vac_day7"] += parseFloat(dataObj.Product_Vacuum);
                  Mac7_data["pressure_day_st_7"] += parseFloat(dataObj.Product_Pressure);
                  Mac7_data["pressure_day_nd_7"] += parseFloat(dataObj.Product_Pressure2);
                  Mac7_data["count_day7"]++;
                }
              }
            }
            Mac7_ALL_Av[0] = parseFloat(All_Average(Mac7_data["count_day1"], Mac7_data["temp_day1"])); Mac7_ALL_Av[1] = parseFloat(All_Average(Mac7_data["count_day2"], Mac7_data["temp_day2"]));
            Mac7_ALL_Av[2] = parseFloat(All_Average(Mac7_data["count_day3"], Mac7_data["temp_day3"])); Mac7_ALL_Av[3] = parseFloat(All_Average(Mac7_data["count_day4"], Mac7_data["temp_day4"]));
            Mac7_ALL_Av[4] = parseFloat(All_Average(Mac7_data["count_day5"], Mac7_data["temp_day5"])); Mac7_ALL_Av[5] = parseFloat(All_Average(Mac7_data["count_day6"], Mac7_data["temp_day6"]));
            Mac7_ALL_Av[6] = parseFloat(All_Average(Mac7_data["count_day7"], Mac7_data["temp_day7"]));

            Mac7_ALL_Av[7] = parseFloat(All_Average(Mac7_data["count_day1"], Mac7_data["vac_day1"])); Mac7_ALL_Av[8] = parseFloat(All_Average(Mac7_data["count_day2"], Mac7_data["vac_day2"]));
            Mac7_ALL_Av[9] = parseFloat(All_Average(Mac7_data["count_day3"], Mac7_data["vac_day3"])); Mac7_ALL_Av[10] = parseFloat(All_Average(Mac7_data["count_day4"], Mac7_data["vac_day4"]));
            Mac7_ALL_Av[11] = parseFloat(All_Average(Mac7_data["count_day5"], Mac7_data["vac_day5"])); Mac7_ALL_Av[12] = parseFloat(All_Average(Mac7_data["count_day6"], Mac7_data["vac_day6"]));
            Mac7_ALL_Av[13] = parseFloat(All_Average(Mac7_data["count_day7"], Mac7_data["vac_day7"]));

            Mac7_ALL_Av[14] = parseFloat(All_Average(Mac7_data["count_day1"], Mac7_data["pressure_day_st_1"])); Mac7_ALL_Av[15] = parseFloat(All_Average(Mac7_data["count_day2"], Mac7_data["pressure_day_st_2"]));
            Mac7_ALL_Av[16] = parseFloat(All_Average(Mac7_data["count_day3"], Mac7_data["pressure_day_st_3"])); Mac7_ALL_Av[17] = parseFloat(All_Average(Mac7_data["count_day4"], Mac7_data["pressure_day_st_4"]));
            Mac7_ALL_Av[18] = parseFloat(All_Average(Mac7_data["count_day5"], Mac7_data["pressure_day_st_5"])); Mac7_ALL_Av[19] = parseFloat(All_Average(Mac7_data["count_day6"], Mac7_data["pressure_day_st_6"]));
            Mac7_ALL_Av[20] = parseFloat(All_Average(Mac7_data["count_day7"], Mac7_data["pressure_day_st_7"]));

            Mac7_ALL_Av[21] = parseFloat(All_Average(Mac7_data["count_day1"], Mac7_data["pressure_day_nd_1"])); Mac7_ALL_Av[22] = parseFloat(All_Average(Mac7_data["count_day2"], Mac7_data["pressure_day_nd_2"]));
            Mac7_ALL_Av[23] = parseFloat(All_Average(Mac7_data["count_day3"], Mac7_data["pressure_day_nd_3"])); Mac7_ALL_Av[24] = parseFloat(All_Average(Mac7_data["count_day4"], Mac7_data["pressure_day_nd_4"]));
            Mac7_ALL_Av[25] = parseFloat(All_Average(Mac7_data["count_day5"], Mac7_data["pressure_day_nd_5"])); Mac7_ALL_Av[26] = parseFloat(All_Average(Mac7_data["count_day6"], Mac7_data["pressure_day_nd_6"]));
            Mac7_ALL_Av[27] = parseFloat(All_Average(Mac7_data["count_day7"], Mac7_data["pressure_day_nd_7"]));

          }
          if (machine_no == 8) {
            if (month_range == Date_month_past || month_range == month_present) {
              if (
                month_range == month_present || month_range == Date_month_past
              ) {
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present
                ) {
                  Mac8_data["date_name1"] = dataObj.Product_Date;
                  Mac8_data["temp_day1"] += parseFloat(dataObj.Product_Temp);
                  Mac8_data["vac_day1"] += parseFloat(dataObj.Product_Vacuum);
                  Mac8_data["pressure_day_st_1"] += parseFloat(dataObj.Product_Pressure);
                  Mac8_data["pressure_day_nd_1"] += parseFloat(dataObj.Product_Pressure2);
                  Mac8_data["count_day1"]++;
                }
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present - 1 ||
                  month_range * 100 + Date_range == (Date_month_past * 100 + Date_past + 5 ||
                    month_range * 100 + Date_range == month_present * 100 + Date_past + 5)
                ) {
                  Mac8_data["date_name2"] = dataObj.Product_Date;
                  Mac8_data["temp_day2"] += parseFloat(dataObj.Product_Temp);
                  Mac8_data["vac_day2"] += parseFloat(dataObj.Product_Vacuum);
                  Mac8_data["pressure_day_st_2"] += parseFloat(dataObj.Product_Pressure);
                  Mac8_data["pressure_day_nd_2"] += parseFloat(dataObj.Product_Pressure2);
                  Mac8_data["count_day2"]++;
                }
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present - 2 ||
                  month_range * 100 + Date_range == (Date_month_past * 100 + Date_past + 4 ||
                    month_range * 100 + Date_range == month_present * 100 + Date_past + 4)
                ) {
                  Mac8_data["date_name3"] = dataObj.Product_Date;
                  Mac8_data["temp_day3"] += parseFloat(dataObj.Product_Temp);
                  Mac8_data["vac_day3"] += parseFloat(dataObj.Product_Vacuum);
                  Mac8_data["pressure_day_st_3"] += parseFloat(dataObj.Product_Pressure);
                  Mac8_data["pressure_day_nd_3"] += parseFloat(dataObj.Product_Pressure2);
                  Mac8_data["count_day3"]++;
                }
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present - 3 ||
                  month_range * 100 + Date_range == (Date_month_past * 100 + Date_past + 3 ||
                    month_range * 100 + Date_range == month_present * 100 + Date_past + 3)
                ) {
                  Mac8_data["date_name4"] = dataObj.Product_Date;
                  Mac8_data["temp_day4"] += parseFloat(dataObj.Product_Temp);
                  Mac8_data["vac_day4"] += parseFloat(dataObj.Product_Vacuum);
                  Mac8_data["pressure_day_st_4"] += parseFloat(dataObj.Product_Pressure);
                  Mac8_data["pressure_day_nd_4"] += parseFloat(dataObj.Product_Pressure2);
                  Mac8_data["count_day4"]++;
                }
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present - 4 ||
                  month_range * 100 + Date_range == Date_month_past * 100 + Date_past + 2 ||
                  month_range * 100 + Date_range == month_present * 100 + Date_past + 2
                ) {
                  Mac8_data["date_name5"] = dataObj.Product_Date;
                  Mac8_data["temp_day5"] += parseFloat(dataObj.Product_Temp);
                  Mac8_data["vac_day5"] += parseFloat(dataObj.Product_Vacuum);
                  Mac8_data["pressure_day_st_5"] += parseFloat(dataObj.Product_Pressure);
                  Mac8_data["pressure_day_nd_5"] += parseFloat(dataObj.Product_Pressure2);
                  Mac8_data["count_day5"]++;
                }
                if (
                  month_range * 100 + Date_range == month_present * 100 + Date_present - 5 ||
                  month_range * 100 + Date_range == Date_month_past * 100 + Date_past + 1 ||
                  month_range * 100 + Date_range == month_present * 100 + Date_past + 1
                ) {
                  Mac8_data["date_name6"] = dataObj.Product_Date;
                  Mac8_data["temp_day6"] += parseFloat(dataObj.Product_Temp);
                  Mac8_data["vac_day6"] += parseFloat(dataObj.Product_Vacuum);
                  Mac8_data["pressure_day_st_6"] += parseFloat(dataObj.Product_Pressure);
                  Mac8_data["pressure_day_nd_6"] += parseFloat(dataObj.Product_Pressure2);
                  Mac8_data["count_day6"]++;
                }
                if (
                  month_range * 100 + Date_range == Date_month_past * 100 + Date_past ||
                  month_range * 100 + Date_range == month_present * 100 + Date_past
                ) {
                  Mac8_data["date_name7"] = dataObj.Product_Date;
                  Mac8_data["temp_day7"] += parseFloat(dataObj.Product_Temp);
                  Mac8_data["vac_day7"] += parseFloat(dataObj.Product_Vacuum);
                  Mac8_data["pressure_day_st_7"] += parseFloat(dataObj.Product_Pressure);
                  Mac8_data["pressure_day_nd_7"] += parseFloat(dataObj.Product_Pressure2);
                  Mac8_data["count_day7"]++;
                }
              }
            }
            Mac8_ALL_Av[0] = parseFloat(All_Average(Mac8_data["count_day1"], Mac8_data["temp_day1"])); Mac8_ALL_Av[1] = parseFloat(All_Average(Mac8_data["count_day2"], Mac8_data["temp_day2"]));
            Mac8_ALL_Av[2] = parseFloat(All_Average(Mac8_data["count_day3"], Mac8_data["temp_day3"])); Mac8_ALL_Av[3] = parseFloat(All_Average(Mac8_data["count_day4"], Mac8_data["temp_day4"]));
            Mac8_ALL_Av[4] = parseFloat(All_Average(Mac8_data["count_day5"], Mac8_data["temp_day5"])); Mac8_ALL_Av[5] = parseFloat(All_Average(Mac8_data["count_day6"], Mac8_data["temp_day6"]));
            Mac8_ALL_Av[6] = parseFloat(All_Average(Mac8_data["count_day7"], Mac8_data["temp_day7"]));

            Mac8_ALL_Av[7] = parseFloat(All_Average(Mac8_data["count_day1"], Mac8_data["vac_day1"])); Mac8_ALL_Av[8] = parseFloat(All_Average(Mac8_data["count_day2"], Mac8_data["vac_day2"]));
            Mac8_ALL_Av[9] = parseFloat(All_Average(Mac8_data["count_day3"], Mac8_data["vac_day3"])); Mac8_ALL_Av[10] = parseFloat(All_Average(Mac8_data["count_day4"], Mac8_data["vac_day4"]));
            Mac8_ALL_Av[11] = parseFloat(All_Average(Mac8_data["count_day5"], Mac8_data["vac_day5"])); Mac8_ALL_Av[12] = parseFloat(All_Average(Mac8_data["count_day6"], Mac8_data["vac_day6"]));
            Mac8_ALL_Av[13] = parseFloat(All_Average(Mac8_data["count_day7"], Mac8_data["vac_day7"]));

            Mac8_ALL_Av[14] = parseFloat(All_Average(Mac8_data["count_day1"], Mac8_data["pressure_day_st_1"])); Mac8_ALL_Av[15] = parseFloat(All_Average(Mac8_data["count_day2"], Mac8_data["pressure_day_st_2"]));
            Mac8_ALL_Av[16] = parseFloat(All_Average(Mac8_data["count_day3"], Mac8_data["pressure_day_st_3"])); Mac8_ALL_Av[17] = parseFloat(All_Average(Mac8_data["count_day4"], Mac8_data["pressure_day_st_4"]));
            Mac8_ALL_Av[18] = parseFloat(All_Average(Mac8_data["count_day5"], Mac8_data["pressure_day_st_5"])); Mac8_ALL_Av[19] = parseFloat(All_Average(Mac8_data["count_day6"], Mac8_data["pressure_day_st_6"]));
            Mac8_ALL_Av[20] = parseFloat(All_Average(Mac8_data["count_day7"], Mac8_data["pressure_day_st_7"]));

            Mac8_ALL_Av[21] = parseFloat(All_Average(Mac8_data["count_day1"], Mac8_data["pressure_day_nd_1"])); Mac8_ALL_Av[22] = parseFloat(All_Average(Mac8_data["count_day2"], Mac8_data["pressure_day_nd_2"]));
            Mac8_ALL_Av[23] = parseFloat(All_Average(Mac8_data["count_day3"], Mac8_data["pressure_day_nd_3"])); Mac8_ALL_Av[24] = parseFloat(All_Average(Mac8_data["count_day4"], Mac8_data["pressure_day_nd_4"]));
            Mac8_ALL_Av[25] = parseFloat(All_Average(Mac8_data["count_day5"], Mac8_data["pressure_day_nd_5"])); Mac8_ALL_Av[26] = parseFloat(All_Average(Mac8_data["count_day6"], Mac8_data["pressure_day_nd_6"]));
            Mac8_ALL_Av[27] = parseFloat(All_Average(Mac8_data["count_day7"], Mac8_data["pressure_day_nd_7"]));

          }
          Date_date = 0; Date_month = 0;
        }
        let show_mac1 = []; let show_mac2 = []; let show_mac3 = []; let show_mac4 = []; let show_mac5 = []; let show_mac6 = []; let show_mac7 = []; let show_mac8 = [];
        let set_range1 = []; let set_range2 = [];
        if (value == "Temp") {
          let count_temp;
          for (count_temp = 6; count_temp >= 0; count_temp--) {
            set_range1.push(200);
            set_range2.push(100);
            show_mac1.push(Mac1_ALL_Av[count_temp]); show_mac2.push(Mac2_ALL_Av[count_temp]);
            show_mac3.push(Mac3_ALL_Av[count_temp]); show_mac4.push(Mac4_ALL_Av[count_temp]);
            show_mac5.push(Mac5_ALL_Av[count_temp]); show_mac6.push(Mac6_ALL_Av[count_temp]);
            show_mac7.push(Mac7_ALL_Av[count_temp]); show_mac8.push(Mac8_ALL_Av[count_temp]);
          }
        }
        if (value == "Vacuum") {
          let count_vac;
          for (count_vac = 13; count_vac >= 7; count_vac--) {
            set_range1.push(8);
            set_range2.push(3);
            show_mac1.push(Mac1_ALL_Av[count_vac]); show_mac2.push(Mac2_ALL_Av[count_vac]);
            show_mac3.push(Mac3_ALL_Av[count_vac]); show_mac4.push(Mac4_ALL_Av[count_vac]);
            show_mac5.push(Mac5_ALL_Av[count_vac]); show_mac6.push(Mac6_ALL_Av[count_vac]);
            show_mac7.push(Mac7_ALL_Av[count_vac]); show_mac8.push(Mac8_ALL_Av[count_vac]);
          }
        }
        if (value == "Pressure1") {
          let count_pre1;
          for (count_pre1 = 20; count_pre1 >= 14; count_pre1--) {
            set_range1.push(5);
            set_range2.push(2);
            show_mac1.push(Mac1_ALL_Av[count_pre1]); show_mac2.push(Mac2_ALL_Av[count_pre1]);
            show_mac3.push(Mac3_ALL_Av[count_pre1]); show_mac4.push(Mac4_ALL_Av[count_pre1]);
            show_mac5.push(Mac5_ALL_Av[count_pre1]); show_mac6.push(Mac6_ALL_Av[count_pre1]);
            show_mac7.push(Mac7_ALL_Av[count_pre1]); show_mac8.push(Mac8_ALL_Av[count_pre1]);
          }
        }
        if (value == "Pressure2") {
          let count_pre2;
          for (count_pre2 = 27; count_pre2 >= 21; count_pre2--) {
            set_range1.push(8);
            set_range2.push(4);
            show_mac1.push(Mac1_ALL_Av[count_pre2]); show_mac2.push(Mac2_ALL_Av[count_pre2]);
            show_mac3.push(Mac3_ALL_Av[count_pre2]); show_mac4.push(Mac4_ALL_Av[count_pre2]);
            show_mac5.push(Mac5_ALL_Av[count_pre2]); show_mac6.push(Mac6_ALL_Av[count_pre2]);
            show_mac7.push(Mac7_ALL_Av[count_pre2]); show_mac8.push(Mac8_ALL_Av[count_pre2]);
          }
        }
        let date_check_n = Date_present - 6;
        let day_in_week = 7;
        let day; let day_1 = ""; let day_2 = ""; let day_3 = ""; let day_4 = ""; let day_5 = ""; let day_6 = ""; let day_7 = "";
        console.log("Date_check", date_check_n);
        for (day = 1; day <= day_in_week; day++) {
          if (day == 1) {
            let day1_n = ("0" + Date_present).slice(-2);
            let month1_n = ("0" + month_present).slice(-2);
            let year1_n = "";
            year1_n = year_present;
            day_1 = year1_n + "-" + month1_n + "-" + day1_n;
          }
          if (day == 2) {
            let day2_n = "";
            let month2_n = "";
            let year2_n = "";
            if (date_check_n == -5) {
              if (month_present - 1 == 2) {
                day2_n = ("0" + (date_2month)).slice(-2);
                month2_n = ("0" + Date_month_past).slice(-2);
                year2_n = year_present;
              } else if (month_present - 1 == 0 || month_present - 1 == 1 || month_present - 1 == 3 || month_present - 1 == 5 || month_present - 1 == 7 || month_present - 1 == 8 || month_present - 1 == 10 || month_present - 1 == 12
              ) {
                day2_n = 31;
                console.log(month_present);
                if (month_present - 1 == 0) {
                  month2_n = ("0" + (month_present + 11)).slice(-2);
                  year2_n = year_present - 1;
                } else {
                  month2_n = ("0" + (month_present - 1)).slice(-2);
                  year2_n = year_present;
                }
              } else if (month_present - 1 == 4 || month_present - 1 == 6 || month_present - 1 == 9 || month_present - 1 == 11
              ) {
                day2_n = 30;
                month2_n = ("0" + (month_present - 1)).slice(-2);
                year2_n = year_present;
              }
            } else {
              day2_n = ("0" + (Date_present - 1)).slice(-2);
              month2_n = ("0" + month_present).slice(-2);
              year2_n = year_present;
            }
            day_2 = year2_n + "-" + month2_n + "-" + day2_n;
          }
          if (day == 3) {
            let day3_n = "";
            let month3_n = "";
            let year3_n = "";
            if (date_check_n == -5) {
              if (month_present - 1 == 2) {
                day3_n = ("0" + (date_2month - 1)).slice(-2);
                month3_n = ("0" + Date_month_past).slice(-2);
                year3_n = year_present;
              } else if (month_present - 1 == 0 || month_present - 1 == 1 || month_present - 1 == 3 || month_present - 1 == 5 || month_present - 1 == 7 || month_present - 1 == 8 || month_present - 1 == 10 || month_present - 1 == 12
              ) {
                day3_n = 30;
                if (month_present - 1 == 0) {
                  month3_n = ("0" + (month_present + 11)).slice(-2);
                  year3_n = year_present - 1;
                } else {
                  month3_n = ("0" + (month_present - 1)).slice(-2);
                  year3_n = year_present;
                }
              } else if (month_present - 1 == 4 || month_present - 1 == 6 || month_present - 1 == 9 || month_present - 1 == 11
              ) {
                day3_n = 29;
                month3_n = ("0" + (month_present - 1)).slice(-2);
                year3_n = year_present;
              }
            } else if (date_check_n == -4) {
              if (month_present - 1 == 2) {
                day3_n = ("0" + (date_2month)).slice(-2);
                month3_n = ("0" + Date_month_past).slice(-2);
                year3_n = year_present;
              } else if (month_present - 1 == 0 || month_present - 1 == 1 || month_present - 1 == 3 || month_present - 1 == 5 || month_present - 1 == 7 || month_present - 1 == 8 || month_present - 1 == 10 || month_present - 1 == 12
              ) {
                day3_n = 31;
                if (month_present - 1 == 0) {
                  month3_n = ("0" + (month_present + 11)).slice(-2);
                  year3_n = year_present - 1;
                } else {
                  month3_n = ("0" + (month_present - 1)).slice(-2);
                  year3_n = year_present;
                }
              } else if (month_present - 1 == 4 || month_present - 1 == 6 || month_present - 1 == 9 || month_present - 1 == 11
              ) {
                day3_n = 30;
                month3_n = ("0" + (month_present - 1)).slice(-2);
                year3_n = year_present;
              }
            } else {
              day3_n = ("0" + (Date_present - 2)).slice(-2);
              month3_n = ("0" + month_present).slice(-2);
              year3_n = year_present;
            }
            day_3 = year3_n + "-" + month3_n + "-" + day3_n;
          }
          if (day == 4) {
            let day4_n = "";
            let month4_n = "";
            let year4_n = "";
            if (date_check_n == -5) {
              if (month_present - 1 == 2) {
                day4_n = ("0" + (date_2month - 2)).slice(-2);
                //console.log(day4_n);
                month4_n = ("0" + Date_month_past).slice(-2);
                year4_n = year_present;
              } else if (month_present - 1 == 0 || month_present - 1 == 1 || month_present - 1 == 3 || month_present - 1 == 5 || month_present - 1 == 7 || month_present - 1 == 8 || month_present - 1 == 10 || month_present - 1 == 12
              ) {
                day4_n = 29;
                if (month_present - 1 == 0) {
                  month4_n = ("0" + (month_present + 11)).slice(-2);
                  year4_n = year_present - 1;
                } else {
                  month4_n = ("0" + (month_present - 1)).slice(-2);
                  year4_n = year_present;
                }
              } else if (month_present - 1 == 4 || month_present - 1 == 6 || month_present - 1 == 9 || month_present - 1 == 11
              ) {
                day4_n = 28;
                //console.log(day4_n);
                month4_n = ("0" + (month_present - 1)).slice(-2);
                year4_n = year_present;
              }
            } else if (date_check_n == -4) {
              if (month_present - 1 == 2) {
                day4_n = ("0" + (date_2month - 1)).slice(-2);
                //console.log(day4_n);
                month4_n = ("0" + Date_month_past).slice(-2);
                year4_n = year_present;
              } else if (month_present - 1 == 0 || month_present - 1 == 1 || month_present - 1 == 3 || month_present - 1 == 5 || month_present - 1 == 7 || month_present - 1 == 8 || month_present - 1 == 10 || month_present - 1 == 12
              ) {
                day4_n = 30;
                if (month_present - 1 == 0) {
                  month4_n = ("0" + (month_present + 11)).slice(-2);
                  year4_n = year_present - 1;
                } else {
                  month4_n = ("0" + (month_present - 1)).slice(-2);
                  year4_n = year_present;
                }
              } else if (month_present - 1 == 4 || month_present - 1 == 6 || month_present - 1 == 9 || month_present - 1 == 11
              ) {
                day4_n = 29;
                //console.log(day4_n);
                month4_n = ("0" + (month_present - 1)).slice(-2);
                year4_n = year_present;
              }
            } else if (date_check_n == -3) {
              if (month_present - 1 == 2) {
                day4_n = ("0" + (date_2month)).slice(-2);
                //console.log(day4_n);
                month4_n = ("0" + Date_month_past).slice(-2);
                year4_n = year_present;
              } else if (
                month_present - 1 == 0 ||
                month_present - 1 == 1 ||
                month_present - 1 == 3 ||
                month_present - 1 == 5 ||
                month_present - 1 == 7 ||
                month_present - 1 == 8 ||
                month_present - 1 == 10 ||
                month_present - 1 == 12
              ) {
                day4_n = 31;
                if (month_present - 1 == 0) {
                  month4_n = ("0" + (month_present + 11)).slice(-2);
                  year4_n = year_present - 1;
                } else {
                  month4_n = ("0" + (month_present - 1)).slice(-2);
                  year4_n = year_present;
                }
              } else if (
                month_present - 1 == 4 ||
                month_present - 1 == 6 ||
                month_present - 1 == 9 ||
                month_present - 1 == 11
              ) {
                day4_n = 30;
                //console.log(day4_n);
                month4_n = ("0" + (month_present - 1)).slice(-2);
                year4_n = year_present;
              }
            } else {
              day4_n = ("0" + (Date_present - 3)).slice(-2);
              month4_n = ("0" + month_present).slice(-2);
              year4_n = year_present;
            }

            day_4 = year4_n + "-" + month4_n + "-" + day4_n;
            //console.log("day is 4 of range",day_4);
          }
          if (day == 5) {
            let day5_n = "";
            let month5_n = "";
            let year5_n = "";
            if (date_check_n == -5) {
              if (month_present - 1 == 2) {
                day5_n = ("0" + (date_2month - 3)).slice(-2);
                //console.log(day4_n);
                month5_n = ("0" + Date_month_past).slice(-2);
                year5_n = year_present;
              } else if (month_present - 1 == 0 || month_present - 1 == 1 || month_present - 1 == 3 || month_present - 1 == 5 || month_present - 1 == 7 || month_present - 1 == 8 || month_present - 1 == 10 || month_present - 1 == 12
              ) {
                day5_n = 28;
                if (month_present - 1 == 0) {
                  month5_n = ("0" + (month_present + 11)).slice(-2);
                  year5_n = year_present - 1;
                } else {
                  month5_n = ("0" + (month_present - 1)).slice(-2);
                  year5_n = year_present;
                }
              } else if (month_present - 1 == 4 || month_present - 1 == 6 || month_present - 1 == 9 || month_present - 1 == 11
              ) {
                day5_n = 27;
                //console.log(day4_n);
                month5_n = ("0" + (month_present - 1)).slice(-2);
                year5_n = year_present;
              }
            } else if (date_check_n == -4) {
              if (month_present - 1 == 2) {
                day5_n = ("0" + (date_2month - 2)).slice(-2);
                //console.log(day4_n);
                month5_n = ("0" + Date_month_past).slice(-2);
                year5_n = year_present;
              } else if (month_present - 1 == 0 || month_present - 1 == 1 || month_present - 1 == 3 || month_present - 1 == 5 || month_present - 1 == 7 || month_present - 1 == 8 || month_present - 1 == 10 || month_present - 1 == 12
              ) {
                day5_n = 29;
                if (month_present - 1 == 0) {
                  month5_n = ("0" + (month_present + 11)).slice(-2);
                  year5_n = year_present - 1;
                } else {
                  month5_n = ("0" + (month_present - 1)).slice(-2);
                  year5_n = year_present;
                }
              } else if (month_present - 1 == 4 || month_present - 1 == 6 || month_present - 1 == 9 || month_present - 1 == 11
              ) {
                day5_n = 28;
                //console.log(day4_n);
                month5_n = ("0" + (month_present - 1)).slice(-2);
                year5_n = year_present;
              }
            } else if (date_check_n == -3) {
              if (month_present - 1 == 2) {
                day5_n = ("0" + (date_2month - 1)).slice(-2);
                //console.log(day4_n);
                month5_n = ("0" + Date_month_past).slice(-2);
                year5_n = year_present;
              } else if (month_present - 1 == 0 || month_present - 1 == 1 || month_present - 1 == 3 || month_present - 1 == 5 || month_present - 1 == 7 || month_present - 1 == 8 || month_present - 1 == 10 || month_present - 1 == 12
              ) {
                day5_n = 30;
                if (month_present - 1 == 0) {
                  month5_n = ("0" + (month_present + 11)).slice(-2);
                  year5_n = year_present - 1;
                } else {
                  month5_n = ("0" + (month_present - 1)).slice(-2);
                  year5_n = year_present;
                }
              } else if (month_present - 1 == 4 || month_present - 1 == 6 || month_present - 1 == 9 || month_present - 1 == 11
              ) {
                day5_n = 29;
                //console.log(day4_n);
                month5_n = ("0" + (month_present - 1)).slice(-2);
                year5_n = year_present;
              }
            } else if (date_check_n == -2) {
              if (month_present - 1 == 2) {
                day5_n = ("0" + (date_2month)).slice(-2);
                month5_n = ("0" + (month_present - 1)).slice(-2);
                year5_n = year_present;
                //console.log(day4_n);
              } else if (month_present - 1 == 0 || month_present - 1 == 1 || month_present - 1 == 3 || month_present - 1 == 5 || month_present - 1 == 7 || month_present - 1 == 8 || month_present - 1 == 10 || month_present - 1 == 12
              ) {
                day5_n = 31;
                if (month_present - 1 == 0) {
                  month5_n = ("0" + (month_present + 11)).slice(-2);
                  year5_n = year_present - 1;
                } else {
                  month5_n = ("0" + (month_present - 1)).slice(-2);
                  year5_n = year_present;
                }
              } else if (month_present - 1 == 4 || month_present - 1 == 6 || month_present - 1 == 9 || month_present - 1 == 11
              ) {
                day5_n = 30;
                //console.log(day4_n);
                month5_n = ("0" + (month_present - 1)).slice(-2);
                year5_n = year_present;
              }
            } else {
              day5_n = ("0" + (Date_present - 4)).slice(-2);
              month5_n = ("0" + month_present).slice(-2);
              year5_n = year_present;
            }
            day_5 = year5_n + "-" + month5_n + "-" + day5_n;
          }
          if (day == 6) {
            let day6_n = "";
            let month6_n = "";
            let year6_n = "";
            if (date_check_n == -5) {
              if (month_present - 1 == 2) {
                day6_n = ("0" + (date_2month - 4)).slice(-2);
                month6_n = ("0" + Date_month_past).slice(-2);
                year6_n = year_present;
              } else if (month_present - 1 == 0 || month_present - 1 == 1 || month_present - 1 == 3 || month_present - 1 == 5 || month_present - 1 == 7 || month_present - 1 == 8 || month_present - 1 == 10 || month_present - 1 == 12
              ) {
                day6_n = 27;
                if (month_present - 1 == 0) {
                  month6_n = ("0" + (month_present + 11)).slice(-2);
                  year6_n = year_present - 1;
                } else {
                  month6_n = ("0" + (month_present - 1)).slice(-2);
                  year6_n = year_present;
                }
              } else if (month_present - 1 == 4 || month_present - 1 == 6 || month_present - 1 == 9 || month_present - 1 == 11
              ) {
                day6_n = 26;
                month6_n = ("0" + (month_present - 1)).slice(-2);
                year6_n = year_present;
              }
            } else if (date_check_n == -4) {
              if (month_present - 1 == 2) {
                day6_n = ("0" + (date_2month - 3)).slice(-2);
                month6_n = ("0" + Date_month_past).slice(-2);
                year6_n = year_present;
              } else if (month_present - 1 == 0 || month_present - 1 == 1 || month_present - 1 == 3 || month_present - 1 == 5 || month_present - 1 == 7 || month_present - 1 == 8 || month_present - 1 == 10 || month_present - 1 == 12
              ) {
                day6_n = 28;
                if (month_present - 1 == 0) {
                  month6_n = ("0" + (month_present + 11)).slice(-2);
                  year6_n = year_present - 1;
                } else {
                  month6_n = ("0" + (month_present - 1)).slice(-2);
                  year6_n = year_present;
                }
              } else if (month_present - 1 == 4 || month_present - 1 == 6 || month_present - 1 == 9 || month_present - 1 == 11
              ) {
                day6_n = 27;
                month6_n = ("0" + (month_present - 1)).slice(-2);
                year6_n = year_present;
              }
            } else if (date_check_n == -3) {
              if (month_present - 1 == 2) {
                day6_n = ("0" + (date_2month - 2)).slice(-2);
                month6_n = ("0" + Date_month_past).slice(-2);
                year6_n = year_present;
              } else if (month_present - 1 == 0 || month_present - 1 == 1 || month_present - 1 == 3 || month_present - 1 == 5 || month_present - 1 == 7 || month_present - 1 == 8 || month_present - 1 == 10 || month_present - 1 == 12
              ) {
                day6_n = 29;
                if (month_present - 1 == 0) {
                  month6_n = ("0" + (month_present + 11)).slice(-2);
                  year6_n = year_present - 1;
                } else {
                  month6_n = ("0" + (month_present - 1)).slice(-2);
                  year6_n = year_present;
                }
              } else if (month_present - 1 == 4 || month_present - 1 == 6 || month_present - 1 == 9 || month_present - 1 == 11
              ) {
                day6_n = 28;
                month6_n = ("0" + (month_present - 1)).slice(-2);
                year6_n = year_present;
              }
            } else if (date_check_n == -2) {
              if (month_present - 1 == 2) {
                day6_n = ("0" + (date_2month - 1)).slice(-2);
                month6_n = ("0" + (month_present - 1)).slice(-2);
                year6_n = year_present;
              } else if (month_present - 1 == 0 || month_present - 1 == 1 || month_present - 1 == 3 || month_present - 1 == 5 || month_present - 1 == 7 || month_present - 1 == 8 || month_present - 1 == 10 || month_present - 1 == 12
              ) {
                day6_n = 30;
                if (month_present - 1 == 0) {
                  month6_n = ("0" + (month_present + 11)).slice(-2);
                  year6_n = year_present - 1;
                } else {
                  month6_n = ("0" + (month_present - 1)).slice(-2);
                  year6_n = year_present;
                }
              } else if (month_present - 1 == 4 || month_present - 1 == 6 || month_present - 1 == 9 || month_present - 1 == 11
              ) {
                day6_n = 29;
                month6_n = ("0" + (month_present - 1)).slice(-2);
                year6_n = year_present;
              }
            } else if (date_check_n == -1) {
              if (month_present - 1 == 2) {
                day6_n = ("0" + date_2month).slice(-2);
                month6_n = ("0" + (month_present - 1)).slice(-2);
                year6_n = year_present;
              } else if (month_present - 1 == 0 || month_present - 1 == 1 || month_present - 1 == 3 || month_present - 1 == 5 || month_present - 1 == 7 || month_present - 1 == 8 || month_present - 1 == 10 || month_present - 1 == 12
              ) {
                day6_n = 31;
                if (month_present - 1 == 0) {
                  month6_n = ("0" + (month_present + 11)).slice(-2);
                  year6_n = year_present - 1;
                } else {
                  month6_n = ("0" + (month_present - 1)).slice(-2);
                  year6_n = year_present;
                }
              } else if (month_present - 1 == 4 || month_present - 1 == 6 || month_present - 1 == 9 || month_present - 1 == 11
              ) {
                day6_n = 30;
                month6_n = ("0" + (month_present - 1)).slice(-2);
                year6_n = year_present;
              }
            } else {
              day6_n = ("0" + (Date_present - 5)).slice(-2);
              month6_n = ("0" + month_present).slice(-2);
              year6_n = year_present;
            }
            day_6 = year6_n + "-" + month6_n + "-" + day6_n;
          }
          if (day == 7) {
            let day7_n = "";
            let month7_n = "";
            let year7_n = "";
            day7_n = ("0" + Date_past).slice(-2);
            month7_n = ("0" + Date_month_past).slice(-2);
            year7_n = year_past;
            day_7 = year7_n + "-" + month7_n + "-" + day7_n;
          }
        }
        Day_name.push(day_7); Day_name.push(day_6);
        Day_name.push(day_5); Day_name.push(day_4);
        Day_name.push(day_3); Day_name.push(day_2);
        Day_name.push(day_1);
        let total_mac1; let total_mac2; let total_mac3; let total_mac4; let total_mac5; let total_mac6; let total_mac7; let total_mac8;
        total_mac1 = parseFloat(show_mac1.reduce(FuncTotal)).toFixed(2);
        total_mac2 = parseFloat(show_mac2.reduce(FuncTotal)).toFixed(2);
        total_mac3 = parseFloat(show_mac3.reduce(FuncTotal)).toFixed(2);
        total_mac4 = parseFloat(show_mac4.reduce(FuncTotal)).toFixed(2);
        total_mac5 = parseFloat(show_mac5.reduce(FuncTotal)).toFixed(2);
        total_mac6 = parseFloat(show_mac6.reduce(FuncTotal)).toFixed(2);
        total_mac7 = parseFloat(show_mac7.reduce(FuncTotal)).toFixed(2);
        total_mac8 = parseFloat(show_mac8.reduce(FuncTotal)).toFixed(2);
        let mac1_av = parseFloat(total_mac1 / Day_name.length).toFixed(2);
        let mac2_av = parseFloat(total_mac2 / Day_name.length).toFixed(2);
        let mac3_av = parseFloat(total_mac3 / Day_name.length).toFixed(2);
        let mac4_av = parseFloat(total_mac4 / Day_name.length).toFixed(2);
        let mac5_av = parseFloat(total_mac5 / Day_name.length).toFixed(2);
        let mac6_av = parseFloat(total_mac6 / Day_name.length).toFixed(2);
        let mac7_av = parseFloat(total_mac7 / Day_name.length).toFixed(2);
        let mac8_av = parseFloat(total_mac8 / Day_name.length).toFixed(2);
        if (isNaN(total_mac1)) { mac1_av = "-"; total_mac1 = "-"; }
        if (isNaN(total_mac2)) { mac2_av = "-"; total_mac2 = "-"; }
        if (isNaN(total_mac3)) { mac3_av = "-"; total_mac3 = "-"; }
        if (isNaN(total_mac4)) { mac4_av = "-"; total_mac4 = "-"; }
        if (isNaN(total_mac5)) { mac5_av = "-"; total_mac5 = "-"; }
        if (isNaN(total_mac6)) { mac6_av = "-"; total_mac6 = "-"; }
        if (isNaN(total_mac7)) { mac7_av = "-"; total_mac7 = "-"; }
        if (isNaN(total_mac8)) { mac8_av = "-"; total_mac8 = "-"; }
        let mac1_table = []; let mac2_table = []; let mac3_table = []; let mac4_table = []; let mac5_table = []; let mac6_table = []; let mac7_table = []; let mac8_table = [];
        let push_table;
        for (push_table = 6; push_table >= 0; push_table--) {
          mac1_table.push(show_mac1[push_table]); mac2_table.push(show_mac2[push_table]);
          mac3_table.push(show_mac3[push_table]); mac4_table.push(show_mac4[push_table]);
          mac5_table.push(show_mac5[push_table]); mac6_table.push(show_mac6[push_table]);
          mac7_table.push(show_mac7[push_table]); mac8_table.push(show_mac8[push_table]);
        }
        let loop_count;
        for (loop_count = 0; loop_count < 25; loop_count++) {
          if (mac1_table[loop_count] == 0 || typeof (mac1_table[loop_count]) == 'undefined') {
            mac1_table[loop_count] = "-";
          }
          if (mac2_table[loop_count] == 0 || typeof (mac2_table[loop_count]) == 'undefined') {
            mac2_table[loop_count] = "-";
          }
          if (mac3_table[loop_count] == 0 || typeof (mac3_table[loop_count]) == 'undefined') {
            mac3_table[loop_count] = "-";
          }
          if (mac4_table[loop_count] == 0 || typeof (mac4_table[loop_count]) == 'undefined') {
            mac4_table[loop_count] = "-";
          }
          if (mac5_table[loop_count] == 0 || typeof (mac5_table[loop_count]) == 'undefined') {
            mac5_table[loop_count] = "-";
          }
          if (mac6_table[loop_count] == 0 || typeof (mac6_table[loop_count]) == 'undefined') {
            mac6_table[loop_count] = "-";
          }
          if (mac7_table[loop_count] == 0 || typeof (mac7_table[loop_count]) == 'undefined') {
            mac7_table[loop_count] = "-";
          }
          if (mac8_table[loop_count] == 0 || typeof (mac8_table[loop_count]) == 'undefined') {
            mac8_table[loop_count] = "-";
          }
        }

        setChartData({
          /**Map data to Graph */
          labels: Day_name,
          datasets: [
            {
              label: "range UP",
              data: set_range1,
              borderColor: "rgb(0, 204, 0)",
              borderWidth: 0.9,
              fill: false,
              pointRadius: 0,
              borderDash: [5, 5],
              pointBorderColor: "rgb(0, 204, 0)",

            },
            {
              label: "range DOWN",
              data: set_range2,
              borderColor: "rgb(204, 51, 0)",
              borderWidth: 0.9,
              fill: false,
              pointRadius: 0,
              borderDash: [5, 5],
              pointBorderColor: "rgb(204, 51, 0)",
            },
            {
              label: "Machine 1",
              data: show_mac1,
              borderColor: "rgb(255, 99, 132,0.6)",
              backgroundColor: "rgb(255, 99, 132, 0.3)",
              borderWidth: 2,
              fill: false,
            },
            {
              label: "Machine 2",
              data: show_mac2,
              borderColor: "rgb(75, 192, 192,0.6)",
              backgroundColor: "rgb(75, 192, 192, 0.3)",
              borderWidth: 2,
              fill: false,
            },
            {
              label: "Machine 3",
              data: show_mac3,
              borderColor: "rgb(54, 162, 235,0.6)",
              backgroundColor: "rgb(54, 162, 235, 0.3)",
              borderWidth: 2,
              fill: false,
            },
            {
              label: "Machine 4",
              data: show_mac4,
              borderColor: "rgb(153, 102, 255,0.6)",
              backgroundColor: "rgb(153, 102, 255, 0.3)",
              borderWidth: 2,
              fill: false,
            },
            {
              label: "Machine 5",
              data: show_mac5,
              borderColor: "rgb(26, 26, 255,0.6)",
              backgroundColor: "rgb(26, 26, 255, 0.3)",
              borderWidth: 2,
              fill: false,
            },
            {
              label: "Machine 6",
              data: show_mac6,
              borderColor: "rgb(255, 0, 102,0.6)",
              backgroundColor: "rgb(255, 0, 102, 0.3)",
              borderWidth: 2,
              fill: false,
            },
            {
              label: "Machine 7",
              data: show_mac7,
              borderColor: "rgb(0, 255, 153,0.6)",
              backgroundColor: "rgb(0, 255, 153, 0.3)",
              borderWidth: 2,
              fill: false,
            },
            {
              label: "Machine 8",
              data: show_mac8,
              borderColor: "rgb(102, 51, 0,0.6)",
              backgroundColor: "rgb(102, 51, 0, 0.3)",
              borderWidth: 2,
              fill: false,
            },

          ],
        });
        setTableData([
          /**Map data to Table */
          {
            date: Day_name[6],
            machine_no1: mac1_table[0],
            machine_no2: mac2_table[0],
            machine_no3: mac3_table[0],
            machine_no4: mac4_table[0],
            machine_no5: mac5_table[0],
            machine_no6: mac6_table[0],
            machine_no7: mac7_table[0],
            machine_no8: mac8_table[0],
          },
          {
            date: Day_name[5],
            machine_no1: mac1_table[1],
            machine_no2: mac2_table[1],
            machine_no3: mac3_table[1],
            machine_no4: mac4_table[1],
            machine_no5: mac5_table[1],
            machine_no6: mac6_table[1],
            machine_no7: mac7_table[1],
            machine_no8: mac8_table[1],
          },
          {
            date: Day_name[4],
            machine_no1: mac1_table[2],
            machine_no2: mac2_table[2],
            machine_no3: mac3_table[2],
            machine_no4: mac4_table[2],
            machine_no5: mac5_table[2],
            machine_no6: mac6_table[2],
            machine_no7: mac7_table[2],
            machine_no8: mac8_table[2],
          },
          {
            date: Day_name[3],
            machine_no1: mac1_table[3],
            machine_no2: mac2_table[3],
            machine_no3: mac3_table[3],
            machine_no4: mac4_table[3],
            machine_no5: mac5_table[3],
            machine_no6: mac6_table[3],
            machine_no7: mac7_table[3],
            machine_no8: mac8_table[3],
          },
          {
            date: Day_name[2],
            machine_no1: mac1_table[4],
            machine_no2: mac2_table[4],
            machine_no3: mac3_table[4],
            machine_no4: mac4_table[4],
            machine_no5: mac5_table[4],
            machine_no6: mac6_table[4],
            machine_no7: mac7_table[4],
            machine_no8: mac8_table[4],
          },
          {
            date: Day_name[1],
            machine_no1: mac1_table[5],
            machine_no2: mac2_table[5],
            machine_no3: mac3_table[5],
            machine_no4: mac4_table[5],
            machine_no5: mac5_table[5],
            machine_no6: mac6_table[5],
            machine_no7: mac7_table[5],
            machine_no8: mac8_table[5],

          },
          {
            date: Day_name[0],
            machine_no1: mac1_table[6],
            machine_no2: mac2_table[6],
            machine_no3: mac3_table[6],
            machine_no4: mac4_table[6],
            machine_no5: mac5_table[6],
            machine_no6: mac6_table[6],
            machine_no7: mac7_table[6],
            machine_no8: mac8_table[6],
          },
        ]);
        setTotal([total_mac1, total_mac2, total_mac3, total_mac4, total_mac5, total_mac6, total_mac7, total_mac8]);
        setAverage([mac1_av, mac2_av, mac3_av, mac4_av, mac5_av, mac6_av, mac7_av, mac8_av]);
        setOpen(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <div className="Showgraph-background">
      <div>
        <Card className="Showgraph-card">
          <Card.Header className="Showgraph-cardhead">
            <Form.Row>
              <div className="px-2 mb-auto">
                <Form.Group class="col-2">
                  <div className="mui--align ">
                    <Form.Label>Select Date</Form.Label>
                    <Form.Control name="dateFrom" type="date" onChange={handleChangeDateFrom} value={datefrom} />
                  </div>
                </Form.Group>
              </div>
              <div className="px-2 mb-auto">
                <Form.Group class="col-2">
                  <Form.Label>Machine From</Form.Label>
                  <Form.Control
                    as="select"
                    name="machinefrom"
                    onChange={handleChangeMachine}
                    value={MachineNumber}
                    required
                  >
                    <option value="1">01</option>
                    <option value="2">02</option> <option value="3">03</option>
                    <option value="4">04</option> <option value="5">05</option>
                    <option value="6">06</option> <option value="7">07</option>
                    <option value="8">08</option>
                  </Form.Control>
                </Form.Group>
              </div>
              <div className="px-2 mb-auto">
                <Form.Group class="col-2">
                  <Form.Label>Machine To</Form.Label>
                  <Form.Control
                    as="select"
                    name="machineto"
                    onChange={handleChangeMachineTo}
                    value={MachineNumberTo}
                    required
                  >
                    <option value="1">01</option>
                    <option value="2">02</option> <option value="3">03</option>
                    <option value="4">04</option> <option value="5">05</option>
                    <option value="6">06</option> <option value="7">07</option>
                    <option value="8">08</option>
                  </Form.Control>
                </Form.Group>
              </div>
              <div className="px-2 mb-auto">
                <Form.Group>
                  <br />
                  <div className="mui--align ">
                    <ColorButton variant="contained" color="primary" size="large" onClick={fetchData}>Submit</ColorButton>
                    <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
                      <Alert onClose={handleClose} severity="success">This is a success message!</Alert>
                    </Snackbar>
                  </div>
                </Form.Group>
              </div>
              <div className="px-2 mb-auto">
                <br />
                <RadioGroup
                  row
                  aria-label="position"
                  name="position"
                  defaultValue="Temp"
                >
                  <FormControlLabel
                    value="Temp"
                    onChange={handleChange}
                    control={<Radio color="primary" />}
                    label="Temp"
                  />
                  <FormControlLabel
                    value="Vacuum"
                    onChange={handleChange}
                    control={<Radio color="primary" />}
                    label="Vacuum"
                  />
                  <FormControlLabel
                    value="Pressure1"
                    onChange={handleChange}
                    control={<Radio color="primary" />}
                    label="Pressure First"
                  />
                  <FormControlLabel
                    value="Pressure2"
                    onChange={handleChange}
                    control={<Radio color="primary" />}
                    label="Presuure Second"
                  />
                </RadioGroup>
              </div>
            </Form.Row>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <div className="div-graph">
                <p className="title-text">MBB Machine Graph</p>
                <Line data={chartData} options={{
                  responsive: true,
                  scales: {
                    yAxes: [
                      {
                        ticks: {
                          stepSize: 40,
                          autoSkip: true,
                          maxTicksLimit: 15,
                          beginAtZero: true,
                        },
                      },],
                  },
                }} />
                <Table className="Showgraph-table" aria-label="simple table" id="emp" >
                  <TableHead>
                    <TableRow>
                      <TableCell align="center"><font size="2">Day</font></TableCell>
                      <TableCell align="center"><font size="2">Machine No.1</font></TableCell>
                      <TableCell align="center"><font size="2">Machine No.2</font></TableCell>
                      <TableCell align="center"><font size="2">Machine No.3</font></TableCell>
                      <TableCell align="center"><font size="2">Machine No.4</font></TableCell>
                      <TableCell align="center"><font size="2">Machine No.5</font></TableCell>
                      <TableCell align="center"><font size="2">Machine No.6</font></TableCell>
                      <TableCell align="center"><font size="2">Machine No.7</font></TableCell>
                      <TableCell align="center"><font size="2">Machine No.8</font></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tableData.map((val, id) => (
                      <TableRow key={id}>
                        <TableCell component="th" scope="row" align="center">{" "}<font size="2">{val.date}</font></TableCell>
                        <TableCell align="center"><font size="2">{val.machine_no1}</font></TableCell>
                        <TableCell align="center"><font size="2">{val.machine_no2}</font></TableCell>
                        <TableCell align="center"><font size="2">{val.machine_no3}</font></TableCell>
                        <TableCell align="center"><font size="2">{val.machine_no4}</font></TableCell>
                        <TableCell align="center"><font size="2">{val.machine_no5}</font></TableCell>
                        <TableCell align="center"><font size="2">{val.machine_no6}</font></TableCell>
                        <TableCell align="center"><font size="2">{val.machine_no7}</font></TableCell>
                        <TableCell align="center"><font size="2">{val.machine_no8}</font></TableCell>
                      </TableRow>
                    ))}
                    <TableRow>
                      <TableCell colSpan={1} align="center"><font size="2">Total</font></TableCell>
                      <TableCell align="center"><font size="2">{Total[0]}</font></TableCell>
                      <TableCell align="center"><font size="2">{Total[1]}</font></TableCell>
                      <TableCell align="center"><font size="2">{Total[2]}</font></TableCell>
                      <TableCell align="center"><font size="2">{Total[3]}</font></TableCell>
                      <TableCell align="center"><font size="2">{Total[4]}</font></TableCell>
                      <TableCell align="center"><font size="2">{Total[5]}</font></TableCell>
                      <TableCell align="center"><font size="2">{Total[6]}</font></TableCell>
                      <TableCell align="center"><font size="2">{Total[7]}</font></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={1} align="center"><font size="2">Average</font></TableCell>
                      <TableCell align="center"><font size="2">{Average[0]}</font></TableCell>
                      <TableCell align="center"><font size="2">{Average[1]}</font></TableCell>
                      <TableCell align="center"><font size="2">{Average[2]}</font></TableCell>
                      <TableCell align="center"><font size="2">{Average[3]}</font></TableCell>
                      <TableCell align="center"><font size="2">{Average[4]}</font></TableCell>
                      <TableCell align="center"><font size="2">{Average[5]}</font></TableCell>
                      <TableCell align="center"><font size="2">{Average[6]}</font></TableCell>
                      <TableCell align="center"><font size="2">{Average[7]}</font></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
export default Graph;