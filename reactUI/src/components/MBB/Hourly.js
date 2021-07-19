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
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
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
  const [timefrom, setTimeFrom] = useState(new Date());
  const [datefrom, setDateFrom] = useState(new Date());
  const [chartData, setChartData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [MachineNumber, setMachineNumber] = useState(1);
  const [MachineNumberTo, setMachineNumberTo] = useState(8);
  const [open, setOpen] = useState(false);
  const [Total, setTotal] = useState([]);
  const [Average, setAverage] = useState([]);
  const [value, setValue] = useState("Temp");
  useEffect(() => {
    let newDate = new Date();
    let date = ("0" + newDate.getDate()).slice(-2);
    let month = ("0" + (newDate.getMonth() + 1)).slice(-2);
    let year = newDate.getFullYear();
    setDateFrom(year + "-" + month + "-" + date);
  }, []);
  function FuncTotal(total, num) {
    return total + num;
  }
  function handleChangeDateFrom(e) {
    setDateFrom(e.target.value);
  }
  function handleChangeTimeFrom(e) {
    return setTimeFrom(e.target.value);
  }
  function handleChangeMachine(e) {
    setMachineNumber(e.target.value);
  }
  function handleChangeMachineTo(e) {
    setMachineNumberTo(e.target.value);
  }
  function All_Average(Count, Temp) {
    let input_Av = 0; let Av_T2 = [];
    input_Av = Temp / Count;
    /**Check All_Average is NaN or not*/
    if (Count == 0) {
      input_Av = 0;
      Av_T2 = input_Av.toFixed(2);
    } else {
      Av_T2 = input_Av.toFixed(2);
    }
    return [Av_T2];
  }
  async function fetchData() {
    console.log("Date Select", datefrom);
    console.log("MachineFrom", MachineNumber);
    console.log("MachineTo", MachineNumberTo);
    let Time_start = timefrom; let Time_End = "00:00:00"; let Time_Char = []; let Time_h = 0;
    let Time_chart = [];
    let Mac1_data = {
      count1_00: 0, count1_01: 0, count1_02: 0, count1_03: 0, count1_04: 0, count1_05: 0, count1_06: 0, count1_07: 0, count1_08: 0, count1_09: 0
      , count1_10: 0, count1_11: 0, count1_12: 0, count1_13: 0, count1_14: 0, count1_15: 0, count1_16: 0, count1_17: 0, count1_18: 0, count1_19: 0
      , count1_20: 0, count1_21: 0, count1_22: 0, count1_23: 0
      , temp1_00: 0, temp1_01: 0, temp1_02: 0, temp1_03: 0, temp1_04: 0, temp1_05: 0, temp1_06: 0, temp1_07: 0, temp1_08: 0, temp1_09: 0
      , temp1_10: 0, temp1_11: 0, temp1_12: 0, temp1_13: 0, temp1_14: 0, temp1_15: 0, temp1_16: 0, temp1_17: 0, temp1_18: 0, temp1_19: 0
      , temp1_20: 0, temp1_21: 0, temp1_22: 0, temp1_23: 0
      , vac1_00: 0, vac1_01: 0, vac1_02: 0, vac1_03: 0, vac1_04: 0, vac1_05: 0, vac1_06: 0, vac1_07: 0, vac1_08: 0, vac1_09: 0
      , vac1_10: 0, vac1_11: 0, vac1_12: 0, vac1_13: 0, vac1_14: 0, vac1_15: 0, vac1_16: 0, vac1_17: 0, vac1_18: 0, vac1_19: 0
      , vac1_20: 0, vac1_21: 0, vac1_22: 0, vac1_23: 0
      , pressure1_00: 0, pressure1_01: 0, pressure1_02: 0, pressure1_03: 0, pressure1_04: 0, pressure1_05: 0, pressure1_06: 0, pressure1_07: 0, pressure1_08: 0, pressure1_09: 0
      , pressure1_10: 0, pressure1_11: 0, pressure1_12: 0, pressure1_13: 0, pressure1_14: 0, pressure1_15: 0, pressure1_16: 0, pressure1_17: 0, pressure1_18: 0, pressure1_19: 0
      , pressure1_20: 0, pressure1_21: 0, pressure1_22: 0, pressure1_23: 0
      , pressure2_00: 0, pressure2_01: 0, pressure2_02: 0, pressure2_03: 0, pressure2_04: 0, pressure2_05: 0, pressure2_06: 0, pressure2_07: 0, pressure2_08: 0, pressure2_09: 0
      , pressure2_10: 0, pressure2_11: 0, pressure2_12: 0, pressure2_13: 0, pressure2_14: 0, pressure2_15: 0, pressure2_16: 0, pressure2_17: 0, pressure2_18: 0, pressure2_19: 0
      , pressure2_20: 0, pressure2_21: 0, pressure2_22: 0, pressure2_23: 0
    };
    let Mac2_data = {
      count1_00: 0, count1_01: 0, count1_02: 0, count1_03: 0, count1_04: 0, count1_05: 0, count1_06: 0, count1_07: 0, count1_08: 0, count1_09: 0
      , count1_10: 0, count1_11: 0, count1_12: 0, count1_13: 0, count1_14: 0, count1_15: 0, count1_16: 0, count1_17: 0, count1_18: 0, count1_19: 0
      , count1_20: 0, count1_21: 0, count1_22: 0, count1_23: 0
      , temp1_00: 0, temp1_01: 0, temp1_02: 0, temp1_03: 0, temp1_04: 0, temp1_05: 0, temp1_06: 0, temp1_07: 0, temp1_08: 0, temp1_09: 0
      , temp1_10: 0, temp1_11: 0, temp1_12: 0, temp1_13: 0, temp1_14: 0, temp1_15: 0, temp1_16: 0, temp1_17: 0, temp1_18: 0, temp1_19: 0
      , temp1_20: 0, temp1_21: 0, temp1_22: 0, temp1_23: 0
      , vac1_00: 0, vac1_01: 0, vac1_02: 0, vac1_03: 0, vac1_04: 0, vac1_05: 0, vac1_06: 0, vac1_07: 0, vac1_08: 0, vac1_09: 0
      , vac1_10: 0, vac1_11: 0, vac1_12: 0, vac1_13: 0, vac1_14: 0, vac1_15: 0, vac1_16: 0, vac1_17: 0, vac1_18: 0, vac1_19: 0
      , vac1_20: 0, vac1_21: 0, vac1_22: 0, vac1_23: 0
      , pressure1_00: 0, pressure1_01: 0, pressure1_02: 0, pressure1_03: 0, pressure1_04: 0, pressure1_05: 0, pressure1_06: 0, pressure1_07: 0, pressure1_08: 0, pressure1_09: 0
      , pressure1_10: 0, pressure1_11: 0, pressure1_12: 0, pressure1_13: 0, pressure1_14: 0, pressure1_15: 0, pressure1_16: 0, pressure1_17: 0, pressure1_18: 0, pressure1_19: 0
      , pressure1_20: 0, pressure1_21: 0, pressure1_22: 0, pressure1_23: 0
      , pressure2_00: 0, pressure2_01: 0, pressure2_02: 0, pressure2_03: 0, pressure2_04: 0, pressure2_05: 0, pressure2_06: 0, pressure2_07: 0, pressure2_08: 0, pressure2_09: 0
      , pressure2_10: 0, pressure2_11: 0, pressure2_12: 0, pressure2_13: 0, pressure2_14: 0, pressure2_15: 0, pressure2_16: 0, pressure2_17: 0, pressure2_18: 0, pressure2_19: 0
      , pressure2_20: 0, pressure2_21: 0, pressure2_22: 0, pressure2_23: 0
    };
    let Mac3_data = {
      count1_00: 0, count1_01: 0, count1_02: 0, count1_03: 0, count1_04: 0, count1_05: 0, count1_06: 0, count1_07: 0, count1_08: 0, count1_09: 0
      , count1_10: 0, count1_11: 0, count1_12: 0, count1_13: 0, count1_14: 0, count1_15: 0, count1_16: 0, count1_17: 0, count1_18: 0, count1_19: 0
      , count1_20: 0, count1_21: 0, count1_22: 0, count1_23: 0
      , temp1_00: 0, temp1_01: 0, temp1_02: 0, temp1_03: 0, temp1_04: 0, temp1_05: 0, temp1_06: 0, temp1_07: 0, temp1_08: 0, temp1_09: 0
      , temp1_10: 0, temp1_11: 0, temp1_12: 0, temp1_13: 0, temp1_14: 0, temp1_15: 0, temp1_16: 0, temp1_17: 0, temp1_18: 0, temp1_19: 0
      , temp1_20: 0, temp1_21: 0, temp1_22: 0, temp1_23: 0
      , vac1_00: 0, vac1_01: 0, vac1_02: 0, vac1_03: 0, vac1_04: 0, vac1_05: 0, vac1_06: 0, vac1_07: 0, vac1_08: 0, vac1_09: 0
      , vac1_10: 0, vac1_11: 0, vac1_12: 0, vac1_13: 0, vac1_14: 0, vac1_15: 0, vac1_16: 0, vac1_17: 0, vac1_18: 0, vac1_19: 0
      , vac1_20: 0, vac1_21: 0, vac1_22: 0, vac1_23: 0
      , pressure1_00: 0, pressure1_01: 0, pressure1_02: 0, pressure1_03: 0, pressure1_04: 0, pressure1_05: 0, pressure1_06: 0, pressure1_07: 0, pressure1_08: 0, pressure1_09: 0
      , pressure1_10: 0, pressure1_11: 0, pressure1_12: 0, pressure1_13: 0, pressure1_14: 0, pressure1_15: 0, pressure1_16: 0, pressure1_17: 0, pressure1_18: 0, pressure1_19: 0
      , pressure1_20: 0, pressure1_21: 0, pressure1_22: 0, pressure1_23: 0
      , pressure2_00: 0, pressure2_01: 0, pressure2_02: 0, pressure2_03: 0, pressure2_04: 0, pressure2_05: 0, pressure2_06: 0, pressure2_07: 0, pressure2_08: 0, pressure2_09: 0
      , pressure2_10: 0, pressure2_11: 0, pressure2_12: 0, pressure2_13: 0, pressure2_14: 0, pressure2_15: 0, pressure2_16: 0, pressure2_17: 0, pressure2_18: 0, pressure2_19: 0
      , pressure2_20: 0, pressure2_21: 0, pressure2_22: 0, pressure2_23: 0
    };
    let Mac4_data = {
      count1_00: 0, count1_01: 0, count1_02: 0, count1_03: 0, count1_04: 0, count1_05: 0, count1_06: 0, count1_07: 0, count1_08: 0, count1_09: 0
      , count1_10: 0, count1_11: 0, count1_12: 0, count1_13: 0, count1_14: 0, count1_15: 0, count1_16: 0, count1_17: 0, count1_18: 0, count1_19: 0
      , count1_20: 0, count1_21: 0, count1_22: 0, count1_23: 0
      , temp1_00: 0, temp1_01: 0, temp1_02: 0, temp1_03: 0, temp1_04: 0, temp1_05: 0, temp1_06: 0, temp1_07: 0, temp1_08: 0, temp1_09: 0
      , temp1_10: 0, temp1_11: 0, temp1_12: 0, temp1_13: 0, temp1_14: 0, temp1_15: 0, temp1_16: 0, temp1_17: 0, temp1_18: 0, temp1_19: 0
      , temp1_20: 0, temp1_21: 0, temp1_22: 0, temp1_23: 0
      , vac1_00: 0, vac1_01: 0, vac1_02: 0, vac1_03: 0, vac1_04: 0, vac1_05: 0, vac1_06: 0, vac1_07: 0, vac1_08: 0, vac1_09: 0
      , vac1_10: 0, vac1_11: 0, vac1_12: 0, vac1_13: 0, vac1_14: 0, vac1_15: 0, vac1_16: 0, vac1_17: 0, vac1_18: 0, vac1_19: 0
      , vac1_20: 0, vac1_21: 0, vac1_22: 0, vac1_23: 0
      , pressure1_00: 0, pressure1_01: 0, pressure1_02: 0, pressure1_03: 0, pressure1_04: 0, pressure1_05: 0, pressure1_06: 0, pressure1_07: 0, pressure1_08: 0, pressure1_09: 0
      , pressure1_10: 0, pressure1_11: 0, pressure1_12: 0, pressure1_13: 0, pressure1_14: 0, pressure1_15: 0, pressure1_16: 0, pressure1_17: 0, pressure1_18: 0, pressure1_19: 0
      , pressure1_20: 0, pressure1_21: 0, pressure1_22: 0, pressure1_23: 0
      , pressure2_00: 0, pressure2_01: 0, pressure2_02: 0, pressure2_03: 0, pressure2_04: 0, pressure2_05: 0, pressure2_06: 0, pressure2_07: 0, pressure2_08: 0, pressure2_09: 0
      , pressure2_10: 0, pressure2_11: 0, pressure2_12: 0, pressure2_13: 0, pressure2_14: 0, pressure2_15: 0, pressure2_16: 0, pressure2_17: 0, pressure2_18: 0, pressure2_19: 0
      , pressure2_20: 0, pressure2_21: 0, pressure2_22: 0, pressure2_23: 0
    };
    let Mac5_data = {
      count1_00: 0, count1_01: 0, count1_02: 0, count1_03: 0, count1_04: 0, count1_05: 0, count1_06: 0, count1_07: 0, count1_08: 0, count1_09: 0
      , count1_10: 0, count1_11: 0, count1_12: 0, count1_13: 0, count1_14: 0, count1_15: 0, count1_16: 0, count1_17: 0, count1_18: 0, count1_19: 0
      , count1_20: 0, count1_21: 0, count1_22: 0, count1_23: 0
      , temp1_00: 0, temp1_01: 0, temp1_02: 0, temp1_03: 0, temp1_04: 0, temp1_05: 0, temp1_06: 0, temp1_07: 0, temp1_08: 0, temp1_09: 0
      , temp1_10: 0, temp1_11: 0, temp1_12: 0, temp1_13: 0, temp1_14: 0, temp1_15: 0, temp1_16: 0, temp1_17: 0, temp1_18: 0, temp1_19: 0
      , temp1_20: 0, temp1_21: 0, temp1_22: 0, temp1_23: 0
      , vac1_00: 0, vac1_01: 0, vac1_02: 0, vac1_03: 0, vac1_04: 0, vac1_05: 0, vac1_06: 0, vac1_07: 0, vac1_08: 0, vac1_09: 0
      , vac1_10: 0, vac1_11: 0, vac1_12: 0, vac1_13: 0, vac1_14: 0, vac1_15: 0, vac1_16: 0, vac1_17: 0, vac1_18: 0, vac1_19: 0
      , vac1_20: 0, vac1_21: 0, vac1_22: 0, vac1_23: 0
      , pressure1_00: 0, pressure1_01: 0, pressure1_02: 0, pressure1_03: 0, pressure1_04: 0, pressure1_05: 0, pressure1_06: 0, pressure1_07: 0, pressure1_08: 0, pressure1_09: 0
      , pressure1_10: 0, pressure1_11: 0, pressure1_12: 0, pressure1_13: 0, pressure1_14: 0, pressure1_15: 0, pressure1_16: 0, pressure1_17: 0, pressure1_18: 0, pressure1_19: 0
      , pressure1_20: 0, pressure1_21: 0, pressure1_22: 0, pressure1_23: 0
      , pressure2_00: 0, pressure2_01: 0, pressure2_02: 0, pressure2_03: 0, pressure2_04: 0, pressure2_05: 0, pressure2_06: 0, pressure2_07: 0, pressure2_08: 0, pressure2_09: 0
      , pressure2_10: 0, pressure2_11: 0, pressure2_12: 0, pressure2_13: 0, pressure2_14: 0, pressure2_15: 0, pressure2_16: 0, pressure2_17: 0, pressure2_18: 0, pressure2_19: 0
      , pressure2_20: 0, pressure2_21: 0, pressure2_22: 0, pressure2_23: 0
    };
    let Mac6_data = {
      count1_00: 0, count1_01: 0, count1_02: 0, count1_03: 0, count1_04: 0, count1_05: 0, count1_06: 0, count1_07: 0, count1_08: 0, count1_09: 0
      , count1_10: 0, count1_11: 0, count1_12: 0, count1_13: 0, count1_14: 0, count1_15: 0, count1_16: 0, count1_17: 0, count1_18: 0, count1_19: 0
      , count1_20: 0, count1_21: 0, count1_22: 0, count1_23: 0
      , temp1_00: 0, temp1_01: 0, temp1_02: 0, temp1_03: 0, temp1_04: 0, temp1_05: 0, temp1_06: 0, temp1_07: 0, temp1_08: 0, temp1_09: 0
      , temp1_10: 0, temp1_11: 0, temp1_12: 0, temp1_13: 0, temp1_14: 0, temp1_15: 0, temp1_16: 0, temp1_17: 0, temp1_18: 0, temp1_19: 0
      , temp1_20: 0, temp1_21: 0, temp1_22: 0, temp1_23: 0
      , vac1_00: 0, vac1_01: 0, vac1_02: 0, vac1_03: 0, vac1_04: 0, vac1_05: 0, vac1_06: 0, vac1_07: 0, vac1_08: 0, vac1_09: 0
      , vac1_10: 0, vac1_11: 0, vac1_12: 0, vac1_13: 0, vac1_14: 0, vac1_15: 0, vac1_16: 0, vac1_17: 0, vac1_18: 0, vac1_19: 0
      , vac1_20: 0, vac1_21: 0, vac1_22: 0, vac1_23: 0
      , pressure1_00: 0, pressure1_01: 0, pressure1_02: 0, pressure1_03: 0, pressure1_04: 0, pressure1_05: 0, pressure1_06: 0, pressure1_07: 0, pressure1_08: 0, pressure1_09: 0
      , pressure1_10: 0, pressure1_11: 0, pressure1_12: 0, pressure1_13: 0, pressure1_14: 0, pressure1_15: 0, pressure1_16: 0, pressure1_17: 0, pressure1_18: 0, pressure1_19: 0
      , pressure1_20: 0, pressure1_21: 0, pressure1_22: 0, pressure1_23: 0
      , pressure2_00: 0, pressure2_01: 0, pressure2_02: 0, pressure2_03: 0, pressure2_04: 0, pressure2_05: 0, pressure2_06: 0, pressure2_07: 0, pressure2_08: 0, pressure2_09: 0
      , pressure2_10: 0, pressure2_11: 0, pressure2_12: 0, pressure2_13: 0, pressure2_14: 0, pressure2_15: 0, pressure2_16: 0, pressure2_17: 0, pressure2_18: 0, pressure2_19: 0
      , pressure2_20: 0, pressure2_21: 0, pressure2_22: 0, pressure2_23: 0
    };
    let Mac7_data = {
      count1_00: 0, count1_01: 0, count1_02: 0, count1_03: 0, count1_04: 0, count1_05: 0, count1_06: 0, count1_07: 0, count1_08: 0, count1_09: 0
      , count1_10: 0, count1_11: 0, count1_12: 0, count1_13: 0, count1_14: 0, count1_15: 0, count1_16: 0, count1_17: 0, count1_18: 0, count1_19: 0
      , count1_20: 0, count1_21: 0, count1_22: 0, count1_23: 0
      , temp1_00: 0, temp1_01: 0, temp1_02: 0, temp1_03: 0, temp1_04: 0, temp1_05: 0, temp1_06: 0, temp1_07: 0, temp1_08: 0, temp1_09: 0
      , temp1_10: 0, temp1_11: 0, temp1_12: 0, temp1_13: 0, temp1_14: 0, temp1_15: 0, temp1_16: 0, temp1_17: 0, temp1_18: 0, temp1_19: 0
      , temp1_20: 0, temp1_21: 0, temp1_22: 0, temp1_23: 0
      , vac1_00: 0, vac1_01: 0, vac1_02: 0, vac1_03: 0, vac1_04: 0, vac1_05: 0, vac1_06: 0, vac1_07: 0, vac1_08: 0, vac1_09: 0
      , vac1_10: 0, vac1_11: 0, vac1_12: 0, vac1_13: 0, vac1_14: 0, vac1_15: 0, vac1_16: 0, vac1_17: 0, vac1_18: 0, vac1_19: 0
      , vac1_20: 0, vac1_21: 0, vac1_22: 0, vac1_23: 0
      , pressure1_00: 0, pressure1_01: 0, pressure1_02: 0, pressure1_03: 0, pressure1_04: 0, pressure1_05: 0, pressure1_06: 0, pressure1_07: 0, pressure1_08: 0, pressure1_09: 0
      , pressure1_10: 0, pressure1_11: 0, pressure1_12: 0, pressure1_13: 0, pressure1_14: 0, pressure1_15: 0, pressure1_16: 0, pressure1_17: 0, pressure1_18: 0, pressure1_19: 0
      , pressure1_20: 0, pressure1_21: 0, pressure1_22: 0, pressure1_23: 0
      , pressure2_00: 0, pressure2_01: 0, pressure2_02: 0, pressure2_03: 0, pressure2_04: 0, pressure2_05: 0, pressure2_06: 0, pressure2_07: 0, pressure2_08: 0, pressure2_09: 0
      , pressure2_10: 0, pressure2_11: 0, pressure2_12: 0, pressure2_13: 0, pressure2_14: 0, pressure2_15: 0, pressure2_16: 0, pressure2_17: 0, pressure2_18: 0, pressure2_19: 0
      , pressure2_20: 0, pressure2_21: 0, pressure2_22: 0, pressure2_23: 0
    };
    let Mac8_data = {
      count1_00: 0, count1_01: 0, count1_02: 0, count1_03: 0, count1_04: 0, count1_05: 0, count1_06: 0, count1_07: 0, count1_08: 0, count1_09: 0
      , count1_10: 0, count1_11: 0, count1_12: 0, count1_13: 0, count1_14: 0, count1_15: 0, count1_16: 0, count1_17: 0, count1_18: 0, count1_19: 0
      , count1_20: 0, count1_21: 0, count1_22: 0, count1_23: 0
      , temp1_00: 0, temp1_01: 0, temp1_02: 0, temp1_03: 0, temp1_04: 0, temp1_05: 0, temp1_06: 0, temp1_07: 0, temp1_08: 0, temp1_09: 0
      , temp1_10: 0, temp1_11: 0, temp1_12: 0, temp1_13: 0, temp1_14: 0, temp1_15: 0, temp1_16: 0, temp1_17: 0, temp1_18: 0, temp1_19: 0
      , temp1_20: 0, temp1_21: 0, temp1_22: 0, temp1_23: 0
      , vac1_00: 0, vac1_01: 0, vac1_02: 0, vac1_03: 0, vac1_04: 0, vac1_05: 0, vac1_06: 0, vac1_07: 0, vac1_08: 0, vac1_09: 0
      , vac1_10: 0, vac1_11: 0, vac1_12: 0, vac1_13: 0, vac1_14: 0, vac1_15: 0, vac1_16: 0, vac1_17: 0, vac1_18: 0, vac1_19: 0
      , vac1_20: 0, vac1_21: 0, vac1_22: 0, vac1_23: 0
      , pressure1_00: 0, pressure1_01: 0, pressure1_02: 0, pressure1_03: 0, pressure1_04: 0, pressure1_05: 0, pressure1_06: 0, pressure1_07: 0, pressure1_08: 0, pressure1_09: 0
      , pressure1_10: 0, pressure1_11: 0, pressure1_12: 0, pressure1_13: 0, pressure1_14: 0, pressure1_15: 0, pressure1_16: 0, pressure1_17: 0, pressure1_18: 0, pressure1_19: 0
      , pressure1_20: 0, pressure1_21: 0, pressure1_22: 0, pressure1_23: 0
      , pressure2_00: 0, pressure2_01: 0, pressure2_02: 0, pressure2_03: 0, pressure2_04: 0, pressure2_05: 0, pressure2_06: 0, pressure2_07: 0, pressure2_08: 0, pressure2_09: 0
      , pressure2_10: 0, pressure2_11: 0, pressure2_12: 0, pressure2_13: 0, pressure2_14: 0, pressure2_15: 0, pressure2_16: 0, pressure2_17: 0, pressure2_18: 0, pressure2_19: 0
      , pressure2_20: 0, pressure2_21: 0, pressure2_22: 0, pressure2_23: 0
    };
    let Mac1_temp_av = []; let Mac1_Vac_av = []; let Mac1_pressure1_av = []; let Mac1_pressure2_av = [];
    let Mac2_temp_av = []; let Mac2_Vac_av = []; let Mac2_pressure1_av = []; let Mac2_pressure2_av = [];
    let Mac3_temp_av = []; let Mac3_Vac_av = []; let Mac3_pressure1_av = []; let Mac3_pressure2_av = [];
    let Mac4_temp_av = []; let Mac4_Vac_av = []; let Mac4_pressure1_av = []; let Mac4_pressure2_av = [];
    let Mac5_temp_av = []; let Mac5_Vac_av = []; let Mac5_pressure1_av = []; let Mac5_pressure2_av = [];
    let Mac6_temp_av = []; let Mac6_Vac_av = []; let Mac6_pressure1_av = []; let Mac6_pressure2_av = [];
    let Mac7_temp_av = []; let Mac7_Vac_av = []; let Mac7_pressure1_av = []; let Mac7_pressure2_av = [];
    let Mac8_temp_av = []; let Mac8_Vac_av = []; let Mac8_pressure1_av = []; let Mac8_pressure2_av = [];
    let show_mac1 = []; let show_mac2 = []; let show_mac3 = []; let show_mac4 = []; let show_mac5 = []; let show_mac6 = []; let show_mac7 = []; let show_mac8 = [];
    let machine_no = 0;
    console.log("Time Select", Time_start);
    const res = await fetch(
      `http://localhost:3002/timedata2/${datefrom}.${MachineNumber}.${MachineNumberTo}`
    );
    res
      .json()
      .then((res) => {
        for (const dataObj of res.result) {
          machine_no = dataObj.Machine_Number;
          Time_Char = dataObj.ProductStart_Time.split(":");
          Time_h = parseInt(Time_Char[0]);
          if (machine_no == 1) {
            if (0 == Time_h) {
              Mac1_data["count1_00"]++;
              Mac1_data["temp1_00"] += parseFloat(dataObj.Product_Temp);
              Mac1_data["vac1_00"] += parseFloat(dataObj.Product_Vacuum);
              Mac1_data["pressure1_00"] += parseFloat(dataObj.Product_Pressure);
              Mac1_data["pressure2_00"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (1 == Time_h) {
              Mac1_data["count1_01"]++;
              Mac1_data["temp1_01"] += parseFloat(dataObj.Product_Temp);
              Mac1_data["vac1_01"] += parseFloat(dataObj.Product_Vacuum);
              Mac1_data["pressure1_01"] += parseFloat(dataObj.Product_Pressure);
              Mac1_data["pressure2_01"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (2 == Time_h) {
              Mac1_data["count1_02"]++;
              Mac1_data["temp1_02"] += parseFloat(dataObj.Product_Temp);
              Mac1_data["vac1_02"] += parseFloat(dataObj.Product_Vacuum);
              Mac1_data["pressure1_02"] += parseFloat(dataObj.Product_Pressure);
              Mac1_data["pressure2_02"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (3 == Time_h) {
              Mac1_data["count1_03"]++;
              Mac1_data["temp1_03"] += parseFloat(dataObj.Product_Temp);
              Mac1_data["vac1_03"] += parseFloat(dataObj.Product_Vacuum);
              Mac1_data["pressure1_03"] += parseFloat(dataObj.Product_Pressure);
              Mac1_data["pressure2_03"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (4 == Time_h) {
              Mac1_data["count1_04"]++;
              Mac1_data["temp1_04"] += parseFloat(dataObj.Product_Temp);
              Mac1_data["vac1_04"] += parseFloat(dataObj.Product_Vacuum);
              Mac1_data["pressure1_04"] += parseFloat(dataObj.Product_Pressure);
              Mac1_data["pressure2_04"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (5 == Time_h) {
              Mac1_data["count1_05"]++;
              Mac1_data["temp1_05"] += parseFloat(dataObj.Product_Temp);
              Mac1_data["vac1_05"] += parseFloat(dataObj.Product_Vacuum);
              Mac1_data["pressure1_05"] += parseFloat(dataObj.Product_Pressure);
              Mac1_data["pressure2_05"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (6 == Time_h) {
              Mac1_data["count1_06"]++;
              Mac1_data["temp1_06"] += parseFloat(dataObj.Product_Temp);
              Mac1_data["vac1_06"] += parseFloat(dataObj.Product_Vacuum);
              Mac1_data["pressure1_06"] += parseFloat(dataObj.Product_Pressure);
              Mac1_data["pressure2_06"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (7 == Time_h) {
              Mac1_data["count1_07"]++;
              Mac1_data["temp1_07"] += parseFloat(dataObj.Product_Temp);
              Mac1_data["vac1_07"] += parseFloat(dataObj.Product_Vacuum);
              Mac1_data["pressure1_07"] += parseFloat(dataObj.Product_Pressure);
              Mac1_data["pressure2_07"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (8 == Time_h) {
              Mac1_data["count1_08"]++;
              Mac1_data["temp1_08"] += parseFloat(dataObj.Product_Temp);
              Mac1_data["vac1_08"] += parseFloat(dataObj.Product_Vacuum);
              Mac1_data["pressure1_08"] += parseFloat(dataObj.Product_Pressure);
              Mac1_data["pressure2_08"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (9 == Time_h) {
              Mac1_data["count1_09"]++;
              Mac1_data["temp1_09"] += parseFloat(dataObj.Product_Temp);
              Mac1_data["vac1_09"] += parseFloat(dataObj.Product_Vacuum);
              Mac1_data["pressure1_09"] += parseFloat(dataObj.Product_Pressure);
              Mac1_data["pressure2_09"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (10 == Time_h) {
              Mac1_data["count1_10"]++;
              Mac1_data["temp1_10"] += parseFloat(dataObj.Product_Temp);
              Mac1_data["vac1_10"] += parseFloat(dataObj.Product_Vacuum);
              Mac1_data["pressure1_10"] += parseFloat(dataObj.Product_Pressure);
              Mac1_data["pressure2_10"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (11 == Time_h) {
              Mac1_data["count1_11"]++;
              Mac1_data["temp1_11"] += parseFloat(dataObj.Product_Temp);
              Mac1_data["vac1_11"] += parseFloat(dataObj.Product_Vacuum);
              Mac1_data["pressure1_11"] += parseFloat(dataObj.Product_Pressure);
              Mac1_data["pressure2_11"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (12 == Time_h) {
              Mac1_data["count1_12"]++;
              Mac1_data["temp1_12"] += parseFloat(dataObj.Product_Temp);
              Mac1_data["vac1_12"] += parseFloat(dataObj.Product_Vacuum);
              Mac1_data["pressure1_12"] += parseFloat(dataObj.Product_Pressure);
              Mac1_data["pressure2_12"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (13 == Time_h) {
              Mac1_data["count1_13"]++;
              Mac1_data["temp1_13"] += parseFloat(dataObj.Product_Temp);
              Mac1_data["vac1_13"] += parseFloat(dataObj.Product_Vacuum);
              Mac1_data["pressure1_13"] += parseFloat(dataObj.Product_Pressure);
              Mac1_data["pressure2_13"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (14 == Time_h) {
              Mac1_data["count1_14"]++;
              Mac1_data["temp1_14"] += parseFloat(dataObj.Product_Temp);
              Mac1_data["vac1_14"] += parseFloat(dataObj.Product_Vacuum);
              Mac1_data["pressure1_14"] += parseFloat(dataObj.Product_Pressure);
              Mac1_data["pressure2_14"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (15 == Time_h) {
              Mac1_data["count1_15"]++;
              Mac1_data["temp1_15"] += parseFloat(dataObj.Product_Temp);
              Mac1_data["vac1_15"] += parseFloat(dataObj.Product_Vacuum);
              Mac1_data["pressure1_15"] += parseFloat(dataObj.Product_Pressure);
              Mac1_data["pressure2_15"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (16 == Time_h) {
              Mac1_data["count1_16"]++;
              Mac1_data["temp1_16"] += parseFloat(dataObj.Product_Temp);
              Mac1_data["vac1_16"] += parseFloat(dataObj.Product_Vacuum);
              Mac1_data["pressure1_16"] += parseFloat(dataObj.Product_Pressure);
              Mac1_data["pressure2_16"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (17 == Time_h) {
              Mac1_data["count1_17"]++;
              Mac1_data["temp1_17"] += parseFloat(dataObj.Product_Temp);
              Mac1_data["vac1_17"] += parseFloat(dataObj.Product_Vacuum);
              Mac1_data["pressure1_17"] += parseFloat(dataObj.Product_Pressure);
              Mac1_data["pressure2_17"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (18 == Time_h) {
              Mac1_data["count1_18"]++;
              Mac1_data["temp1_18"] += parseFloat(dataObj.Product_Temp);
              Mac1_data["vac1_18"] += parseFloat(dataObj.Product_Vacuum);
              Mac1_data["pressure1_18"] += parseFloat(dataObj.Product_Pressure);
              Mac1_data["pressure2_18"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (19 == Time_h) {
              Mac1_data["count1_19"]++;
              Mac1_data["temp1_19"] += parseFloat(dataObj.Product_Temp);
              Mac1_data["vac1_19"] += parseFloat(dataObj.Product_Vacuum);
              Mac1_data["pressure1_19"] += parseFloat(dataObj.Product_Pressure);
              Mac1_data["pressure2_19"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (20 == Time_h) {
              Mac1_data["count1_20"]++;
              Mac1_data["temp1_20"] += parseFloat(dataObj.Product_Temp);
              Mac1_data["vac1_20"] += parseFloat(dataObj.Product_Vacuum);
              Mac1_data["pressure1_20"] += parseFloat(dataObj.Product_Pressure);
              Mac1_data["pressure2_20"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (21 == Time_h) {
              Mac1_data["count1_21"]++;
              Mac1_data["temp1_21"] += parseFloat(dataObj.Product_Temp);
              Mac1_data["vac1_21"] += parseFloat(dataObj.Product_Vacuum);
              Mac1_data["pressure1_21"] += parseFloat(dataObj.Product_Pressure);
              Mac1_data["pressure2_21"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (22 == Time_h) {
              Mac1_data["count1_22"]++;
              Mac1_data["temp1_22"] += parseFloat(dataObj.Product_Temp);
              Mac1_data["vac1_22"] += parseFloat(dataObj.Product_Vacuum);
              Mac1_data["pressure1_21"] += parseFloat(dataObj.Product_Pressure);
              Mac1_data["pressure2_21"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (Time_h == 23) {
              Mac1_data["count1_23"]++;
              Mac1_data["temp1_23"] += parseFloat(dataObj.Product_Temp);
              Mac1_data["vac1_23"] += parseFloat(dataObj.Product_Vacuum);
              Mac1_data["pressure1_21"] += parseFloat(dataObj.Product_Pressure);
              Mac1_data["pressure2_21"] += parseFloat(dataObj.Product_Pressure2);
            }
            Mac1_temp_av[0] = parseFloat(All_Average(Mac1_data["count1_00"], Mac1_data["temp1_00"])); Mac1_temp_av[1] = parseFloat(All_Average(Mac1_data["count1_01"], Mac1_data["temp1_01"]));
            Mac1_temp_av[2] = parseFloat(All_Average(Mac1_data["count1_02"], Mac1_data["temp1_02"])); Mac1_temp_av[3] = parseFloat(All_Average(Mac1_data["count1_03"], Mac1_data["temp1_03"]));
            Mac1_temp_av[4] = parseFloat(All_Average(Mac1_data["count1_04"], Mac1_data["temp1_04"])); Mac1_temp_av[5] = parseFloat(All_Average(Mac1_data["count1_05"], Mac1_data["temp1_05"]));
            Mac1_temp_av[6] = parseFloat(All_Average(Mac1_data["count1_06"], Mac1_data["temp1_06"])); Mac1_temp_av[7] = parseFloat(All_Average(Mac1_data["count1_07"], Mac1_data["temp1_07"]));
            Mac1_temp_av[8] = parseFloat(All_Average(Mac1_data["count1_08"], Mac1_data["temp1_08"])); Mac1_temp_av[9] = parseFloat(All_Average(Mac1_data["count1_09"], Mac1_data["temp1_09"]));
            Mac1_temp_av[10] = parseFloat(All_Average(Mac1_data["count1_10"], Mac1_data["temp1_10"])); Mac1_temp_av[11] = parseFloat(All_Average(Mac1_data["count1_11"], Mac1_data["temp1_11"]));
            Mac1_temp_av[12] = parseFloat(All_Average(Mac1_data["count1_12"], Mac1_data["temp1_12"])); Mac1_temp_av[13] = parseFloat(All_Average(Mac1_data["count1_13"], Mac1_data["temp1_13"]));
            Mac1_temp_av[14] = parseFloat(All_Average(Mac1_data["count1_14"], Mac1_data["temp1_14"])); Mac1_temp_av[15] = parseFloat(All_Average(Mac1_data["count1_15"], Mac1_data["temp1_15"]));
            Mac1_temp_av[16] = parseFloat(All_Average(Mac1_data["count1_16"], Mac1_data["temp1_16"])); Mac1_temp_av[17] = parseFloat(All_Average(Mac1_data["count1_17"], Mac1_data["temp1_17"]));
            Mac1_temp_av[18] = parseFloat(All_Average(Mac1_data["count1_18"], Mac1_data["temp1_18"])); Mac1_temp_av[19] = parseFloat(All_Average(Mac1_data["count1_19"], Mac1_data["temp1_19"]));
            Mac1_temp_av[20] = parseFloat(All_Average(Mac1_data["count1_20"], Mac1_data["temp1_20"])); Mac1_temp_av[21] = parseFloat(All_Average(Mac1_data["count1_21"], Mac1_data["temp1_21"]));
            Mac1_temp_av[22] = parseFloat(All_Average(Mac1_data["count1_22"], Mac1_data["temp1_22"])); Mac1_temp_av[23] = parseFloat(All_Average(Mac1_data["count1_23"], Mac1_data["temp1_23"]));

            Mac1_Vac_av[0] = parseFloat(All_Average(Mac1_data["count1_00"], Mac1_data["vac1_00"])); Mac1_Vac_av[1] = parseFloat(All_Average(Mac1_data["count1_01"], Mac1_data["vac1_01"]));
            Mac1_Vac_av[2] = parseFloat(All_Average(Mac1_data["count1_02"], Mac1_data["vac1_02"])); Mac1_Vac_av[3] = parseFloat(All_Average(Mac1_data["count1_03"], Mac1_data["vac1_03"]));
            Mac1_Vac_av[4] = parseFloat(All_Average(Mac1_data["count1_04"], Mac1_data["vac1_04"])); Mac1_Vac_av[5] = parseFloat(All_Average(Mac1_data["count1_05"], Mac1_data["vac1_05"]));
            Mac1_Vac_av[6] = parseFloat(All_Average(Mac1_data["count1_06"], Mac1_data["vac1_06"])); Mac1_Vac_av[7] = parseFloat(All_Average(Mac1_data["count1_07"], Mac1_data["vac1_07"]));
            Mac1_Vac_av[8] = parseFloat(All_Average(Mac1_data["count1_08"], Mac1_data["vac1_08"])); Mac1_Vac_av[9] = parseFloat(All_Average(Mac1_data["count1_09"], Mac1_data["vac1_09"]));
            Mac1_Vac_av[10] = parseFloat(All_Average(Mac1_data["count1_10"], Mac1_data["vac1_10"])); Mac1_Vac_av[11] = parseFloat(All_Average(Mac1_data["count1_11"], Mac1_data["vac1_11"]));
            Mac1_Vac_av[12] = parseFloat(All_Average(Mac1_data["count1_12"], Mac1_data["vac1_12"])); Mac1_Vac_av[13] = parseFloat(All_Average(Mac1_data["count1_13"], Mac1_data["vac1_13"]));
            Mac1_Vac_av[14] = parseFloat(All_Average(Mac1_data["count1_14"], Mac1_data["vac1_14"])); Mac1_Vac_av[15] = parseFloat(All_Average(Mac1_data["count1_15"], Mac1_data["vac1_15"]));
            Mac1_Vac_av[16] = parseFloat(All_Average(Mac1_data["count1_16"], Mac1_data["vac1_16"])); Mac1_Vac_av[17] = parseFloat(All_Average(Mac1_data["count1_17"], Mac1_data["vac1_17"]));
            Mac1_Vac_av[18] = parseFloat(All_Average(Mac1_data["count1_18"], Mac1_data["vac1_18"])); Mac1_Vac_av[19] = parseFloat(All_Average(Mac1_data["count1_19"], Mac1_data["vac1_19"]));
            Mac1_Vac_av[20] = parseFloat(All_Average(Mac1_data["count1_20"], Mac1_data["vac1_20"])); Mac1_Vac_av[21] = parseFloat(All_Average(Mac1_data["count1_21"], Mac1_data["vac1_21"]));
            Mac1_Vac_av[22] = parseFloat(All_Average(Mac1_data["count1_22"], Mac1_data["vac1_22"])); Mac1_Vac_av[23] = parseFloat(All_Average(Mac1_data["count1_23"], Mac1_data["vac1_23"]));

            Mac1_pressure1_av[0] = parseFloat(All_Average(Mac1_data["count1_00"], Mac1_data["pressure1_00"])); Mac1_pressure1_av[1] = parseFloat(All_Average(Mac1_data["count1_01"], Mac1_data["pressure1_01"]));
            Mac1_pressure1_av[2] = parseFloat(All_Average(Mac1_data["count1_02"], Mac1_data["pressure1_02"])); Mac1_pressure1_av[3] = parseFloat(All_Average(Mac1_data["count1_03"], Mac1_data["pressure1_03"]));
            Mac1_pressure1_av[4] = parseFloat(All_Average(Mac1_data["count1_04"], Mac1_data["pressure1_04"])); Mac1_pressure1_av[5] = parseFloat(All_Average(Mac1_data["count1_05"], Mac1_data["pressure1_05"]));
            Mac1_pressure1_av[6] = parseFloat(All_Average(Mac1_data["count1_06"], Mac1_data["pressure1_06"])); Mac1_pressure1_av[7] = parseFloat(All_Average(Mac1_data["count1_07"], Mac1_data["pressure1_07"]));
            Mac1_pressure1_av[8] = parseFloat(All_Average(Mac1_data["count1_08"], Mac1_data["pressure1_08"])); Mac1_pressure1_av[9] = parseFloat(All_Average(Mac1_data["count1_09"], Mac1_data["pressure1_09"]));
            Mac1_pressure1_av[10] = parseFloat(All_Average(Mac1_data["count1_10"], Mac1_data["pressure1_10"])); Mac1_pressure1_av[11] = parseFloat(All_Average(Mac1_data["count1_11"], Mac1_data["pressure1_11"]));
            Mac1_pressure1_av[12] = parseFloat(All_Average(Mac1_data["count1_12"], Mac1_data["pressure1_12"])); Mac1_pressure1_av[13] = parseFloat(All_Average(Mac1_data["count1_13"], Mac1_data["pressure1_13"]));
            Mac1_pressure1_av[14] = parseFloat(All_Average(Mac1_data["count1_14"], Mac1_data["pressure1_14"])); Mac1_pressure1_av[15] = parseFloat(All_Average(Mac1_data["count1_15"], Mac1_data["pressure1_15"]));
            Mac1_pressure1_av[16] = parseFloat(All_Average(Mac1_data["count1_16"], Mac1_data["pressure1_16"])); Mac1_pressure1_av[17] = parseFloat(All_Average(Mac1_data["count1_17"], Mac1_data["pressure1_17"]));
            Mac1_pressure1_av[18] = parseFloat(All_Average(Mac1_data["count1_18"], Mac1_data["pressure1_18"])); Mac1_pressure1_av[19] = parseFloat(All_Average(Mac1_data["count1_19"], Mac1_data["pressure1_19"]));
            Mac1_pressure1_av[20] = parseFloat(All_Average(Mac1_data["count1_20"], Mac1_data["pressure1_20"])); Mac1_pressure1_av[21] = parseFloat(All_Average(Mac1_data["count1_21"], Mac1_data["pressure1_21"]));
            Mac1_pressure1_av[22] = parseFloat(All_Average(Mac1_data["count1_22"], Mac1_data["pressure1_22"])); Mac1_pressure1_av[23] = parseFloat(All_Average(Mac1_data["count1_23"], Mac1_data["pressure1_23"]));

            Mac1_pressure2_av[0] = parseFloat(All_Average(Mac1_data["count1_00"], Mac1_data["pressure2_00"])); Mac1_pressure2_av[1] = parseFloat(All_Average(Mac1_data["count1_01"], Mac1_data["pressure2_01"]));
            Mac1_pressure2_av[2] = parseFloat(All_Average(Mac1_data["count1_02"], Mac1_data["pressure2_02"])); Mac1_pressure2_av[3] = parseFloat(All_Average(Mac1_data["count1_03"], Mac1_data["pressure2_03"]));
            Mac1_pressure2_av[4] = parseFloat(All_Average(Mac1_data["count1_04"], Mac1_data["pressure2_04"])); Mac1_pressure2_av[5] = parseFloat(All_Average(Mac1_data["count1_05"], Mac1_data["pressure2_05"]));
            Mac1_pressure2_av[6] = parseFloat(All_Average(Mac1_data["count1_06"], Mac1_data["pressure2_06"])); Mac1_pressure2_av[7] = parseFloat(All_Average(Mac1_data["count1_07"], Mac1_data["pressure2_07"]));
            Mac1_pressure2_av[8] = parseFloat(All_Average(Mac1_data["count1_08"], Mac1_data["pressure2_08"])); Mac1_pressure2_av[9] = parseFloat(All_Average(Mac1_data["count1_09"], Mac1_data["pressure2_09"]));
            Mac1_pressure2_av[10] = parseFloat(All_Average(Mac1_data["count1_10"], Mac1_data["pressure2_10"])); Mac1_pressure2_av[11] = parseFloat(All_Average(Mac1_data["count1_11"], Mac1_data["pressure2_11"]));
            Mac1_pressure2_av[12] = parseFloat(All_Average(Mac1_data["count1_12"], Mac1_data["pressure2_12"])); Mac1_pressure2_av[13] = parseFloat(All_Average(Mac1_data["count1_13"], Mac1_data["pressure2_13"]));
            Mac1_pressure2_av[14] = parseFloat(All_Average(Mac1_data["count1_14"], Mac1_data["pressure2_14"])); Mac1_pressure2_av[15] = parseFloat(All_Average(Mac1_data["count1_15"], Mac1_data["pressure2_15"]));
            Mac1_pressure2_av[16] = parseFloat(All_Average(Mac1_data["count1_16"], Mac1_data["pressure2_16"])); Mac1_pressure2_av[17] = parseFloat(All_Average(Mac1_data["count1_17"], Mac1_data["pressure2_17"]));
            Mac1_pressure2_av[18] = parseFloat(All_Average(Mac1_data["count1_18"], Mac1_data["pressure2_18"])); Mac1_pressure2_av[19] = parseFloat(All_Average(Mac1_data["count1_19"], Mac1_data["pressure2_19"]));
            Mac1_pressure2_av[20] = parseFloat(All_Average(Mac1_data["count1_20"], Mac1_data["pressure2_20"])); Mac1_pressure2_av[21] = parseFloat(All_Average(Mac1_data["count1_21"], Mac1_data["pressure2_21"]));
            Mac1_pressure2_av[22] = parseFloat(All_Average(Mac1_data["count1_22"], Mac1_data["pressure2_22"])); Mac1_pressure2_av[23] = parseFloat(All_Average(Mac1_data["count1_23"], Mac1_data["pressure2_23"]));
          }
          if (machine_no == 2) {
            if (0 == Time_h) {
              Mac2_data["count1_00"]++;
              Mac2_data["temp1_00"] += parseFloat(dataObj.Product_Temp);
              Mac2_data["vac1_00"] += parseFloat(dataObj.Product_Vacuum);
              Mac2_data["pressure1_00"] += parseFloat(dataObj.Product_Pressure);
              Mac2_data["pressure2_00"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (1 == Time_h) {
              Mac2_data["count1_01"]++;
              Mac2_data["temp1_01"] += parseFloat(dataObj.Product_Temp);
              Mac2_data["vac1_01"] += parseFloat(dataObj.Product_Vacuum);
              Mac2_data["pressure1_01"] += parseFloat(dataObj.Product_Pressure);
              Mac2_data["pressure2_01"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (2 == Time_h) {
              Mac2_data["count1_02"]++;
              Mac2_data["temp1_02"] += parseFloat(dataObj.Product_Temp);
              Mac2_data["vac1_02"] += parseFloat(dataObj.Product_Vacuum);
              Mac2_data["pressure1_02"] += parseFloat(dataObj.Product_Pressure);
              Mac2_data["pressure2_02"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (3 == Time_h) {
              Mac2_data["count1_03"]++;
              Mac2_data["temp1_03"] += parseFloat(dataObj.Product_Temp);
              Mac2_data["vac1_03"] += parseFloat(dataObj.Product_Vacuum);
              Mac2_data["pressure1_03"] += parseFloat(dataObj.Product_Pressure);
              Mac2_data["pressure2_03"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (4 == Time_h) {
              Mac2_data["count1_04"]++;
              Mac2_data["temp1_04"] += parseFloat(dataObj.Product_Temp);
              Mac2_data["vac1_04"] += parseFloat(dataObj.Product_Vacuum);
              Mac2_data["pressure1_04"] += parseFloat(dataObj.Product_Pressure);
              Mac2_data["pressure2_04"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (5 == Time_h) {
              Mac2_data["count1_05"]++;
              Mac2_data["temp1_05"] += parseFloat(dataObj.Product_Temp);
              Mac2_data["vac1_05"] += parseFloat(dataObj.Product_Vacuum);
              Mac2_data["pressure1_05"] += parseFloat(dataObj.Product_Pressure);
              Mac2_data["pressure2_05"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (6 == Time_h) {
              Mac2_data["count1_06"]++;
              Mac2_data["temp1_06"] += parseFloat(dataObj.Product_Temp);
              Mac2_data["vac1_06"] += parseFloat(dataObj.Product_Vacuum);
              Mac2_data["pressure1_06"] += parseFloat(dataObj.Product_Pressure);
              Mac2_data["pressure2_06"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (7 == Time_h) {
              Mac2_data["count1_07"]++;
              Mac2_data["temp1_07"] += parseFloat(dataObj.Product_Temp);
              Mac2_data["vac1_07"] += parseFloat(dataObj.Product_Vacuum);
              Mac2_data["pressure1_07"] += parseFloat(dataObj.Product_Pressure);
              Mac2_data["pressure2_07"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (8 == Time_h) {
              Mac2_data["count1_08"]++;
              Mac2_data["temp1_08"] += parseFloat(dataObj.Product_Temp);
              Mac2_data["vac1_08"] += parseFloat(dataObj.Product_Vacuum);
              Mac2_data["pressure1_08"] += parseFloat(dataObj.Product_Pressure);
              Mac2_data["pressure2_08"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (9 == Time_h) {
              Mac2_data["count1_09"]++;
              Mac2_data["temp1_09"] += parseFloat(dataObj.Product_Temp);
              Mac2_data["vac1_09"] += parseFloat(dataObj.Product_Vacuum);
              Mac2_data["pressure1_09"] += parseFloat(dataObj.Product_Pressure);
              Mac2_data["pressure2_09"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (10 == Time_h) {
              Mac2_data["count1_10"]++;
              Mac2_data["temp1_10"] += parseFloat(dataObj.Product_Temp);
              Mac2_data["vac1_10"] += parseFloat(dataObj.Product_Vacuum);
              Mac2_data["pressure1_10"] += parseFloat(dataObj.Product_Pressure);
              Mac2_data["pressure2_10"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (11 == Time_h) {
              Mac2_data["count1_11"]++;
              Mac2_data["temp1_11"] += parseFloat(dataObj.Product_Temp);
              Mac2_data["vac1_11"] += parseFloat(dataObj.Product_Vacuum);
              Mac2_data["pressure1_11"] += parseFloat(dataObj.Product_Pressure);
              Mac2_data["pressure2_11"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (12 == Time_h) {
              Mac2_data["count1_12"]++;
              Mac2_data["temp1_12"] += parseFloat(dataObj.Product_Temp);
              Mac2_data["vac1_12"] += parseFloat(dataObj.Product_Vacuum);
              Mac2_data["pressure1_12"] += parseFloat(dataObj.Product_Pressure);
              Mac2_data["pressure2_12"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (13 == Time_h) {
              Mac2_data["count1_13"]++;
              Mac2_data["temp1_13"] += parseFloat(dataObj.Product_Temp);
              Mac2_data["vac1_13"] += parseFloat(dataObj.Product_Vacuum);
              Mac2_data["pressure1_13"] += parseFloat(dataObj.Product_Pressure);
              Mac2_data["pressure2_13"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (14 == Time_h) {
              Mac2_data["count1_14"]++;
              Mac2_data["temp1_14"] += parseFloat(dataObj.Product_Temp);
              Mac2_data["vac1_14"] += parseFloat(dataObj.Product_Vacuum);
              Mac2_data["pressure1_14"] += parseFloat(dataObj.Product_Pressure);
              Mac2_data["pressure2_14"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (15 == Time_h) {
              Mac2_data["count1_15"]++;
              Mac2_data["temp1_15"] += parseFloat(dataObj.Product_Temp);
              Mac2_data["vac1_15"] += parseFloat(dataObj.Product_Vacuum);
              Mac2_data["pressure1_15"] += parseFloat(dataObj.Product_Pressure);
              Mac2_data["pressure2_15"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (16 == Time_h) {
              Mac2_data["count1_16"]++;
              Mac2_data["temp1_16"] += parseFloat(dataObj.Product_Temp);
              Mac2_data["vac1_16"] += parseFloat(dataObj.Product_Vacuum);
              Mac2_data["pressure1_16"] += parseFloat(dataObj.Product_Pressure);
              Mac2_data["pressure2_16"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (17 == Time_h) {
              Mac2_data["count1_17"]++;
              Mac2_data["temp1_17"] += parseFloat(dataObj.Product_Temp);
              Mac2_data["vac1_17"] += parseFloat(dataObj.Product_Vacuum);
              Mac2_data["pressure1_17"] += parseFloat(dataObj.Product_Pressure);
              Mac2_data["pressure2_17"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (18 == Time_h) {
              Mac2_data["count1_18"]++;
              Mac2_data["temp1_18"] += parseFloat(dataObj.Product_Temp);
              Mac2_data["vac1_18"] += parseFloat(dataObj.Product_Vacuum);
              Mac2_data["pressure1_18"] += parseFloat(dataObj.Product_Pressure);
              Mac2_data["pressure2_18"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (19 == Time_h) {
              Mac2_data["count1_19"]++;
              Mac2_data["temp1_19"] += parseFloat(dataObj.Product_Temp);
              Mac2_data["vac1_19"] += parseFloat(dataObj.Product_Vacuum);
              Mac2_data["pressure1_19"] += parseFloat(dataObj.Product_Pressure);
              Mac2_data["pressure2_19"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (20 == Time_h) {
              Mac2_data["count1_20"]++;
              Mac2_data["temp1_20"] += parseFloat(dataObj.Product_Temp);
              Mac2_data["vac1_20"] += parseFloat(dataObj.Product_Vacuum);
              Mac2_data["pressure1_20"] += parseFloat(dataObj.Product_Pressure);
              Mac2_data["pressure2_20"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (21 == Time_h) {
              Mac2_data["count1_21"]++;
              Mac2_data["temp1_21"] += parseFloat(dataObj.Product_Temp);
              Mac2_data["vac1_21"] += parseFloat(dataObj.Product_Vacuum);
              Mac2_data["pressure1_21"] += parseFloat(dataObj.Product_Pressure);
              Mac2_data["pressure2_21"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (22 == Time_h) {
              Mac2_data["count1_22"]++;
              Mac2_data["temp1_22"] += parseFloat(dataObj.Product_Temp);
              Mac2_data["vac1_22"] += parseFloat(dataObj.Product_Vacuum);
              Mac2_data["pressure1_21"] += parseFloat(dataObj.Product_Pressure);
              Mac2_data["pressure2_21"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (Time_h == 23) {
              Mac2_data["count1_23"]++;
              Mac2_data["temp1_23"] += parseFloat(dataObj.Product_Temp);
              Mac2_data["vac1_23"] += parseFloat(dataObj.Product_Vacuum);
              Mac2_data["pressure1_21"] += parseFloat(dataObj.Product_Pressure);
              Mac2_data["pressure2_21"] += parseFloat(dataObj.Product_Pressure2);
            }
            Mac2_temp_av[0] = parseFloat(All_Average(Mac2_data["count1_00"], Mac2_data["temp1_00"])); Mac2_temp_av[1] = parseFloat(All_Average(Mac2_data["count1_01"], Mac2_data["temp1_01"]));
            Mac2_temp_av[2] = parseFloat(All_Average(Mac2_data["count1_02"], Mac2_data["temp1_02"])); Mac2_temp_av[3] = parseFloat(All_Average(Mac2_data["count1_03"], Mac2_data["temp1_03"]));
            Mac2_temp_av[4] = parseFloat(All_Average(Mac2_data["count1_04"], Mac2_data["temp1_04"])); Mac2_temp_av[5] = parseFloat(All_Average(Mac2_data["count1_05"], Mac2_data["temp1_05"]));
            Mac2_temp_av[6] = parseFloat(All_Average(Mac2_data["count1_06"], Mac2_data["temp1_06"])); Mac2_temp_av[7] = parseFloat(All_Average(Mac2_data["count1_07"], Mac2_data["temp1_07"]));
            Mac2_temp_av[8] = parseFloat(All_Average(Mac2_data["count1_08"], Mac2_data["temp1_08"])); Mac2_temp_av[9] = parseFloat(All_Average(Mac2_data["count1_09"], Mac2_data["temp1_09"]));
            Mac2_temp_av[10] = parseFloat(All_Average(Mac2_data["count1_10"], Mac2_data["temp1_10"])); Mac2_temp_av[11] = parseFloat(All_Average(Mac2_data["count1_11"], Mac2_data["temp1_11"]));
            Mac2_temp_av[12] = parseFloat(All_Average(Mac2_data["count1_12"], Mac2_data["temp1_12"])); Mac2_temp_av[13] = parseFloat(All_Average(Mac2_data["count1_13"], Mac2_data["temp1_13"]));
            Mac2_temp_av[14] = parseFloat(All_Average(Mac2_data["count1_14"], Mac2_data["temp1_14"])); Mac2_temp_av[15] = parseFloat(All_Average(Mac2_data["count1_15"], Mac2_data["temp1_15"]));
            Mac2_temp_av[16] = parseFloat(All_Average(Mac2_data["count1_16"], Mac2_data["temp1_16"])); Mac2_temp_av[17] = parseFloat(All_Average(Mac2_data["count1_17"], Mac2_data["temp1_17"]));
            Mac2_temp_av[18] = parseFloat(All_Average(Mac2_data["count1_18"], Mac2_data["temp1_18"])); Mac2_temp_av[19] = parseFloat(All_Average(Mac2_data["count1_19"], Mac2_data["temp1_19"]));
            Mac2_temp_av[20] = parseFloat(All_Average(Mac2_data["count1_20"], Mac2_data["temp1_20"])); Mac2_temp_av[21] = parseFloat(All_Average(Mac2_data["count1_21"], Mac2_data["temp1_21"]));
            Mac2_temp_av[22] = parseFloat(All_Average(Mac2_data["count1_22"], Mac2_data["temp1_22"])); Mac2_temp_av[23] = parseFloat(All_Average(Mac2_data["count1_23"], Mac2_data["temp1_23"]));

            Mac2_Vac_av[0] = parseFloat(All_Average(Mac2_data["count1_00"], Mac2_data["vac1_00"])); Mac2_Vac_av[1] = parseFloat(All_Average(Mac2_data["count1_01"], Mac2_data["vac1_01"]));
            Mac2_Vac_av[2] = parseFloat(All_Average(Mac2_data["count1_02"], Mac2_data["vac1_02"])); Mac2_Vac_av[3] = parseFloat(All_Average(Mac2_data["count1_03"], Mac2_data["vac1_03"]));
            Mac2_Vac_av[4] = parseFloat(All_Average(Mac2_data["count1_04"], Mac2_data["vac1_04"])); Mac2_Vac_av[5] = parseFloat(All_Average(Mac2_data["count1_05"], Mac2_data["vac1_05"]));
            Mac2_Vac_av[6] = parseFloat(All_Average(Mac2_data["count1_06"], Mac2_data["vac1_06"])); Mac2_Vac_av[7] = parseFloat(All_Average(Mac2_data["count1_07"], Mac2_data["vac1_07"]));
            Mac2_Vac_av[8] = parseFloat(All_Average(Mac2_data["count1_08"], Mac2_data["vac1_08"])); Mac2_Vac_av[9] = parseFloat(All_Average(Mac2_data["count1_09"], Mac2_data["vac1_09"]));
            Mac2_Vac_av[10] = parseFloat(All_Average(Mac2_data["count1_10"], Mac2_data["vac1_10"])); Mac2_Vac_av[11] = parseFloat(All_Average(Mac2_data["count1_11"], Mac2_data["vac1_11"]));
            Mac2_Vac_av[12] = parseFloat(All_Average(Mac2_data["count1_12"], Mac2_data["vac1_12"])); Mac2_Vac_av[13] = parseFloat(All_Average(Mac2_data["count1_13"], Mac2_data["vac1_13"]));
            Mac2_Vac_av[14] = parseFloat(All_Average(Mac2_data["count1_14"], Mac2_data["vac1_14"])); Mac2_Vac_av[15] = parseFloat(All_Average(Mac2_data["count1_15"], Mac2_data["vac1_15"]));
            Mac2_Vac_av[16] = parseFloat(All_Average(Mac2_data["count1_16"], Mac2_data["vac1_16"])); Mac2_Vac_av[17] = parseFloat(All_Average(Mac2_data["count1_17"], Mac2_data["vac1_17"]));
            Mac2_Vac_av[18] = parseFloat(All_Average(Mac2_data["count1_18"], Mac2_data["vac1_18"])); Mac2_Vac_av[19] = parseFloat(All_Average(Mac2_data["count1_19"], Mac2_data["vac1_19"]));
            Mac2_Vac_av[20] = parseFloat(All_Average(Mac2_data["count1_20"], Mac2_data["vac1_20"])); Mac2_Vac_av[21] = parseFloat(All_Average(Mac2_data["count1_21"], Mac2_data["vac1_21"]));
            Mac2_Vac_av[22] = parseFloat(All_Average(Mac2_data["count1_22"], Mac2_data["vac1_22"])); Mac2_Vac_av[23] = parseFloat(All_Average(Mac2_data["count1_23"], Mac2_data["vac1_23"]));

            Mac2_pressure1_av[0] = parseFloat(All_Average(Mac2_data["count1_00"], Mac2_data["pressure1_00"])); Mac2_pressure1_av[1] = parseFloat(All_Average(Mac2_data["count1_01"], Mac2_data["pressure1_01"]));
            Mac2_pressure1_av[2] = parseFloat(All_Average(Mac2_data["count1_02"], Mac2_data["pressure1_02"])); Mac2_pressure1_av[3] = parseFloat(All_Average(Mac2_data["count1_03"], Mac2_data["pressure1_03"]));
            Mac2_pressure1_av[4] = parseFloat(All_Average(Mac2_data["count1_04"], Mac2_data["pressure1_04"])); Mac2_pressure1_av[5] = parseFloat(All_Average(Mac2_data["count1_05"], Mac2_data["pressure1_05"]));
            Mac2_pressure1_av[6] = parseFloat(All_Average(Mac2_data["count1_06"], Mac2_data["pressure1_06"])); Mac2_pressure1_av[7] = parseFloat(All_Average(Mac2_data["count1_07"], Mac2_data["pressure1_07"]));
            Mac2_pressure1_av[8] = parseFloat(All_Average(Mac2_data["count1_08"], Mac2_data["pressure1_08"])); Mac2_pressure1_av[9] = parseFloat(All_Average(Mac2_data["count1_09"], Mac2_data["pressure1_09"]));
            Mac2_pressure1_av[10] = parseFloat(All_Average(Mac2_data["count1_10"], Mac2_data["pressure1_10"])); Mac2_pressure1_av[11] = parseFloat(All_Average(Mac2_data["count1_11"], Mac2_data["pressure1_11"]));
            Mac2_pressure1_av[12] = parseFloat(All_Average(Mac2_data["count1_12"], Mac2_data["pressure1_12"])); Mac2_pressure1_av[13] = parseFloat(All_Average(Mac2_data["count1_13"], Mac2_data["pressure1_13"]));
            Mac2_pressure1_av[14] = parseFloat(All_Average(Mac2_data["count1_14"], Mac2_data["pressure1_14"])); Mac2_pressure1_av[15] = parseFloat(All_Average(Mac2_data["count1_15"], Mac2_data["pressure1_15"]));
            Mac2_pressure1_av[16] = parseFloat(All_Average(Mac2_data["count1_16"], Mac2_data["pressure1_16"])); Mac2_pressure1_av[17] = parseFloat(All_Average(Mac2_data["count1_17"], Mac2_data["pressure1_17"]));
            Mac2_pressure1_av[18] = parseFloat(All_Average(Mac2_data["count1_18"], Mac2_data["pressure1_18"])); Mac2_pressure1_av[19] = parseFloat(All_Average(Mac2_data["count1_19"], Mac2_data["pressure1_19"]));
            Mac2_pressure1_av[20] = parseFloat(All_Average(Mac2_data["count1_20"], Mac2_data["pressure1_20"])); Mac2_pressure1_av[21] = parseFloat(All_Average(Mac2_data["count1_21"], Mac2_data["pressure1_21"]));
            Mac2_pressure1_av[22] = parseFloat(All_Average(Mac2_data["count1_22"], Mac2_data["pressure1_22"])); Mac2_pressure1_av[23] = parseFloat(All_Average(Mac2_data["count1_23"], Mac2_data["pressure1_23"]));

            Mac2_pressure2_av[0] = parseFloat(All_Average(Mac2_data["count1_00"], Mac2_data["pressure2_00"])); Mac2_pressure2_av[1] = parseFloat(All_Average(Mac2_data["count1_01"], Mac2_data["pressure2_01"]));
            Mac2_pressure2_av[2] = parseFloat(All_Average(Mac2_data["count1_02"], Mac2_data["pressure2_02"])); Mac2_pressure2_av[3] = parseFloat(All_Average(Mac2_data["count1_03"], Mac2_data["pressure2_03"]));
            Mac2_pressure2_av[4] = parseFloat(All_Average(Mac2_data["count1_04"], Mac2_data["pressure2_04"])); Mac2_pressure2_av[5] = parseFloat(All_Average(Mac2_data["count1_05"], Mac2_data["pressure2_05"]));
            Mac2_pressure2_av[6] = parseFloat(All_Average(Mac2_data["count1_06"], Mac2_data["pressure2_06"])); Mac2_pressure2_av[7] = parseFloat(All_Average(Mac2_data["count1_07"], Mac2_data["pressure2_07"]));
            Mac2_pressure2_av[8] = parseFloat(All_Average(Mac2_data["count1_08"], Mac2_data["pressure2_08"])); Mac2_pressure2_av[9] = parseFloat(All_Average(Mac2_data["count1_09"], Mac2_data["pressure2_09"]));
            Mac2_pressure2_av[10] = parseFloat(All_Average(Mac2_data["count1_10"], Mac2_data["pressure2_10"])); Mac2_pressure2_av[11] = parseFloat(All_Average(Mac2_data["count1_11"], Mac2_data["pressure2_11"]));
            Mac2_pressure2_av[12] = parseFloat(All_Average(Mac2_data["count1_12"], Mac2_data["pressure2_12"])); Mac2_pressure2_av[13] = parseFloat(All_Average(Mac2_data["count1_13"], Mac2_data["pressure2_13"]));
            Mac2_pressure2_av[14] = parseFloat(All_Average(Mac2_data["count1_14"], Mac2_data["pressure2_14"])); Mac2_pressure2_av[15] = parseFloat(All_Average(Mac2_data["count1_15"], Mac2_data["pressure2_15"]));
            Mac2_pressure2_av[16] = parseFloat(All_Average(Mac2_data["count1_16"], Mac2_data["pressure2_16"])); Mac2_pressure2_av[17] = parseFloat(All_Average(Mac2_data["count1_17"], Mac2_data["pressure2_17"]));
            Mac2_pressure2_av[18] = parseFloat(All_Average(Mac2_data["count1_18"], Mac2_data["pressure2_18"])); Mac2_pressure2_av[19] = parseFloat(All_Average(Mac2_data["count1_19"], Mac2_data["pressure2_19"]));
            Mac2_pressure2_av[20] = parseFloat(All_Average(Mac2_data["count1_20"], Mac2_data["pressure2_20"])); Mac2_pressure2_av[21] = parseFloat(All_Average(Mac2_data["count1_21"], Mac2_data["pressure2_21"]));
            Mac2_pressure2_av[22] = parseFloat(All_Average(Mac2_data["count1_22"], Mac2_data["pressure2_22"])); Mac2_pressure2_av[23] = parseFloat(All_Average(Mac2_data["count1_23"], Mac2_data["pressure2_23"]));
          }
          if (machine_no == 3) {
            if (0 == Time_h) {
              Mac3_data["count1_00"]++;
              Mac3_data["temp1_00"] += parseFloat(dataObj.Product_Temp);
              Mac3_data["vac1_00"] += parseFloat(dataObj.Product_Vacuum);
              Mac3_data["pressure1_00"] += parseFloat(dataObj.Product_Pressure);
              Mac3_data["pressure2_00"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (1 == Time_h) {
              Mac3_data["count1_01"]++;
              Mac3_data["temp1_01"] += parseFloat(dataObj.Product_Temp);
              Mac3_data["vac1_01"] += parseFloat(dataObj.Product_Vacuum);
              Mac3_data["pressure1_01"] += parseFloat(dataObj.Product_Pressure);
              Mac3_data["pressure2_01"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (2 == Time_h) {
              Mac3_data["count1_02"]++;
              Mac3_data["temp1_02"] += parseFloat(dataObj.Product_Temp);
              Mac3_data["vac1_02"] += parseFloat(dataObj.Product_Vacuum);
              Mac3_data["pressure1_02"] += parseFloat(dataObj.Product_Pressure);
              Mac3_data["pressure2_02"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (3 == Time_h) {
              Mac3_data["count1_03"]++;
              Mac3_data["temp1_03"] += parseFloat(dataObj.Product_Temp);
              Mac3_data["vac1_03"] += parseFloat(dataObj.Product_Vacuum);
              Mac3_data["pressure1_03"] += parseFloat(dataObj.Product_Pressure);
              Mac3_data["pressure2_03"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (4 == Time_h) {
              Mac3_data["count1_04"]++;
              Mac3_data["temp1_04"] += parseFloat(dataObj.Product_Temp);
              Mac3_data["vac1_04"] += parseFloat(dataObj.Product_Vacuum);
              Mac3_data["pressure1_04"] += parseFloat(dataObj.Product_Pressure);
              Mac3_data["pressure2_04"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (5 == Time_h) {
              Mac3_data["count1_05"]++;
              Mac3_data["temp1_05"] += parseFloat(dataObj.Product_Temp);
              Mac3_data["vac1_05"] += parseFloat(dataObj.Product_Vacuum);
              Mac3_data["pressure1_05"] += parseFloat(dataObj.Product_Pressure);
              Mac3_data["pressure2_05"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (6 == Time_h) {
              Mac3_data["count1_06"]++;
              Mac3_data["temp1_06"] += parseFloat(dataObj.Product_Temp);
              Mac3_data["vac1_06"] += parseFloat(dataObj.Product_Vacuum);
              Mac3_data["pressure1_06"] += parseFloat(dataObj.Product_Pressure);
              Mac3_data["pressure2_06"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (7 == Time_h) {
              Mac3_data["count1_07"]++;
              Mac3_data["temp1_07"] += parseFloat(dataObj.Product_Temp);
              Mac3_data["vac1_07"] += parseFloat(dataObj.Product_Vacuum);
              Mac3_data["pressure1_07"] += parseFloat(dataObj.Product_Pressure);
              Mac3_data["pressure2_07"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (8 == Time_h) {
              Mac3_data["count1_08"]++;
              Mac3_data["temp1_08"] += parseFloat(dataObj.Product_Temp);
              Mac3_data["vac1_08"] += parseFloat(dataObj.Product_Vacuum);
              Mac3_data["pressure1_08"] += parseFloat(dataObj.Product_Pressure);
              Mac3_data["pressure2_08"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (9 == Time_h) {
              Mac3_data["count1_09"]++;
              Mac3_data["temp1_09"] += parseFloat(dataObj.Product_Temp);
              Mac3_data["vac1_09"] += parseFloat(dataObj.Product_Vacuum);
              Mac3_data["pressure1_09"] += parseFloat(dataObj.Product_Pressure);
              Mac3_data["pressure2_09"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (10 == Time_h) {
              Mac3_data["count1_10"]++;
              Mac3_data["temp1_10"] += parseFloat(dataObj.Product_Temp);
              Mac3_data["vac1_10"] += parseFloat(dataObj.Product_Vacuum);
              Mac3_data["pressure1_10"] += parseFloat(dataObj.Product_Pressure);
              Mac3_data["pressure2_10"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (11 == Time_h) {
              Mac3_data["count1_11"]++;
              Mac3_data["temp1_11"] += parseFloat(dataObj.Product_Temp);
              Mac3_data["vac1_11"] += parseFloat(dataObj.Product_Vacuum);
              Mac3_data["pressure1_11"] += parseFloat(dataObj.Product_Pressure);
              Mac3_data["pressure2_11"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (12 == Time_h) {
              Mac3_data["count1_12"]++;
              Mac3_data["temp1_12"] += parseFloat(dataObj.Product_Temp);
              Mac3_data["vac1_12"] += parseFloat(dataObj.Product_Vacuum);
              Mac3_data["pressure1_12"] += parseFloat(dataObj.Product_Pressure);
              Mac3_data["pressure2_12"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (13 == Time_h) {
              Mac3_data["count1_13"]++;
              Mac3_data["temp1_13"] += parseFloat(dataObj.Product_Temp);
              Mac3_data["vac1_13"] += parseFloat(dataObj.Product_Vacuum);
              Mac3_data["pressure1_13"] += parseFloat(dataObj.Product_Pressure);
              Mac3_data["pressure2_13"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (14 == Time_h) {
              Mac3_data["count1_14"]++;
              Mac3_data["temp1_14"] += parseFloat(dataObj.Product_Temp);
              Mac3_data["vac1_14"] += parseFloat(dataObj.Product_Vacuum);
              Mac3_data["pressure1_14"] += parseFloat(dataObj.Product_Pressure);
              Mac3_data["pressure2_14"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (15 == Time_h) {
              Mac3_data["count1_15"]++;
              Mac3_data["temp1_15"] += parseFloat(dataObj.Product_Temp);
              Mac3_data["vac1_15"] += parseFloat(dataObj.Product_Vacuum);
              Mac3_data["pressure1_15"] += parseFloat(dataObj.Product_Pressure);
              Mac3_data["pressure2_15"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (16 == Time_h) {
              Mac3_data["count1_16"]++;
              Mac3_data["temp1_16"] += parseFloat(dataObj.Product_Temp);
              Mac3_data["vac1_16"] += parseFloat(dataObj.Product_Vacuum);
              Mac3_data["pressure1_16"] += parseFloat(dataObj.Product_Pressure);
              Mac3_data["pressure2_16"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (17 == Time_h) {
              Mac3_data["count1_17"]++;
              Mac3_data["temp1_17"] += parseFloat(dataObj.Product_Temp);
              Mac3_data["vac1_17"] += parseFloat(dataObj.Product_Vacuum);
              Mac3_data["pressure1_17"] += parseFloat(dataObj.Product_Pressure);
              Mac3_data["pressure2_17"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (18 == Time_h) {
              Mac3_data["count1_18"]++;
              Mac3_data["temp1_18"] += parseFloat(dataObj.Product_Temp);
              Mac3_data["vac1_18"] += parseFloat(dataObj.Product_Vacuum);
              Mac3_data["pressure1_18"] += parseFloat(dataObj.Product_Pressure);
              Mac3_data["pressure2_18"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (19 == Time_h) {
              Mac3_data["count1_19"]++;
              Mac3_data["temp1_19"] += parseFloat(dataObj.Product_Temp);
              Mac3_data["vac1_19"] += parseFloat(dataObj.Product_Vacuum);
              Mac3_data["pressure1_19"] += parseFloat(dataObj.Product_Pressure);
              Mac3_data["pressure2_19"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (20 == Time_h) {
              Mac3_data["count1_20"]++;
              Mac3_data["temp1_20"] += parseFloat(dataObj.Product_Temp);
              Mac3_data["vac1_20"] += parseFloat(dataObj.Product_Vacuum);
              Mac3_data["pressure1_20"] += parseFloat(dataObj.Product_Pressure);
              Mac3_data["pressure2_20"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (21 == Time_h) {
              Mac3_data["count1_21"]++;
              Mac3_data["temp1_21"] += parseFloat(dataObj.Product_Temp);
              Mac3_data["vac1_21"] += parseFloat(dataObj.Product_Vacuum);
              Mac3_data["pressure1_21"] += parseFloat(dataObj.Product_Pressure);
              Mac3_data["pressure2_21"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (22 == Time_h) {
              Mac3_data["count1_22"]++;
              Mac3_data["temp1_22"] += parseFloat(dataObj.Product_Temp);
              Mac3_data["vac1_22"] += parseFloat(dataObj.Product_Vacuum);
              Mac3_data["pressure1_21"] += parseFloat(dataObj.Product_Pressure);
              Mac3_data["pressure2_21"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (Time_h == 23) {
              Mac3_data["count1_23"]++;
              Mac3_data["temp1_23"] += parseFloat(dataObj.Product_Temp);
              Mac3_data["vac1_23"] += parseFloat(dataObj.Product_Vacuum);
              Mac3_data["pressure1_21"] += parseFloat(dataObj.Product_Pressure);
              Mac3_data["pressure2_21"] += parseFloat(dataObj.Product_Pressure2);
            }
            Mac3_temp_av[0] = parseFloat(All_Average(Mac3_data["count1_00"], Mac3_data["temp1_00"])); Mac3_temp_av[1] = parseFloat(All_Average(Mac3_data["count1_01"], Mac3_data["temp1_01"]));
            Mac3_temp_av[2] = parseFloat(All_Average(Mac3_data["count1_02"], Mac3_data["temp1_02"])); Mac3_temp_av[3] = parseFloat(All_Average(Mac3_data["count1_03"], Mac3_data["temp1_03"]));
            Mac3_temp_av[4] = parseFloat(All_Average(Mac3_data["count1_04"], Mac3_data["temp1_04"])); Mac3_temp_av[5] = parseFloat(All_Average(Mac3_data["count1_05"], Mac3_data["temp1_05"]));
            Mac3_temp_av[6] = parseFloat(All_Average(Mac3_data["count1_06"], Mac3_data["temp1_06"])); Mac3_temp_av[7] = parseFloat(All_Average(Mac3_data["count1_07"], Mac3_data["temp1_07"]));
            Mac3_temp_av[8] = parseFloat(All_Average(Mac3_data["count1_08"], Mac3_data["temp1_08"])); Mac3_temp_av[9] = parseFloat(All_Average(Mac3_data["count1_09"], Mac3_data["temp1_09"]));
            Mac3_temp_av[10] = parseFloat(All_Average(Mac3_data["count1_10"], Mac3_data["temp1_10"])); Mac3_temp_av[11] = parseFloat(All_Average(Mac3_data["count1_11"], Mac3_data["temp1_11"]));
            Mac3_temp_av[12] = parseFloat(All_Average(Mac3_data["count1_12"], Mac3_data["temp1_12"])); Mac3_temp_av[13] = parseFloat(All_Average(Mac3_data["count1_13"], Mac3_data["temp1_13"]));
            Mac3_temp_av[14] = parseFloat(All_Average(Mac3_data["count1_14"], Mac3_data["temp1_14"])); Mac3_temp_av[15] = parseFloat(All_Average(Mac3_data["count1_15"], Mac3_data["temp1_15"]));
            Mac3_temp_av[16] = parseFloat(All_Average(Mac3_data["count1_16"], Mac3_data["temp1_16"])); Mac3_temp_av[17] = parseFloat(All_Average(Mac3_data["count1_17"], Mac3_data["temp1_17"]));
            Mac3_temp_av[18] = parseFloat(All_Average(Mac3_data["count1_18"], Mac3_data["temp1_18"])); Mac3_temp_av[19] = parseFloat(All_Average(Mac3_data["count1_19"], Mac3_data["temp1_19"]));
            Mac3_temp_av[20] = parseFloat(All_Average(Mac3_data["count1_20"], Mac3_data["temp1_20"])); Mac3_temp_av[21] = parseFloat(All_Average(Mac3_data["count1_21"], Mac3_data["temp1_21"]));
            Mac3_temp_av[22] = parseFloat(All_Average(Mac3_data["count1_22"], Mac3_data["temp1_22"])); Mac3_temp_av[23] = parseFloat(All_Average(Mac3_data["count1_23"], Mac3_data["temp1_23"]));

            Mac3_Vac_av[0] = parseFloat(All_Average(Mac3_data["count1_00"], Mac3_data["vac1_00"])); Mac3_Vac_av[1] = parseFloat(All_Average(Mac3_data["count1_01"], Mac3_data["vac1_01"]));
            Mac3_Vac_av[2] = parseFloat(All_Average(Mac3_data["count1_02"], Mac3_data["vac1_02"])); Mac3_Vac_av[3] = parseFloat(All_Average(Mac3_data["count1_03"], Mac3_data["vac1_03"]));
            Mac3_Vac_av[4] = parseFloat(All_Average(Mac3_data["count1_04"], Mac3_data["vac1_04"])); Mac3_Vac_av[5] = parseFloat(All_Average(Mac3_data["count1_05"], Mac3_data["vac1_05"]));
            Mac3_Vac_av[6] = parseFloat(All_Average(Mac3_data["count1_06"], Mac3_data["vac1_06"])); Mac3_Vac_av[7] = parseFloat(All_Average(Mac3_data["count1_07"], Mac3_data["vac1_07"]));
            Mac3_Vac_av[8] = parseFloat(All_Average(Mac3_data["count1_08"], Mac3_data["vac1_08"])); Mac3_Vac_av[9] = parseFloat(All_Average(Mac3_data["count1_09"], Mac3_data["vac1_09"]));
            Mac3_Vac_av[10] = parseFloat(All_Average(Mac3_data["count1_10"], Mac3_data["vac1_10"])); Mac3_Vac_av[11] = parseFloat(All_Average(Mac3_data["count1_11"], Mac3_data["vac1_11"]));
            Mac3_Vac_av[12] = parseFloat(All_Average(Mac3_data["count1_12"], Mac3_data["vac1_12"])); Mac3_Vac_av[13] = parseFloat(All_Average(Mac3_data["count1_13"], Mac3_data["vac1_13"]));
            Mac3_Vac_av[14] = parseFloat(All_Average(Mac3_data["count1_14"], Mac3_data["vac1_14"])); Mac3_Vac_av[15] = parseFloat(All_Average(Mac3_data["count1_15"], Mac3_data["vac1_15"]));
            Mac3_Vac_av[16] = parseFloat(All_Average(Mac3_data["count1_16"], Mac3_data["vac1_16"])); Mac3_Vac_av[17] = parseFloat(All_Average(Mac3_data["count1_17"], Mac3_data["vac1_17"]));
            Mac3_Vac_av[18] = parseFloat(All_Average(Mac3_data["count1_18"], Mac3_data["vac1_18"])); Mac3_Vac_av[19] = parseFloat(All_Average(Mac3_data["count1_19"], Mac3_data["vac1_19"]));
            Mac3_Vac_av[20] = parseFloat(All_Average(Mac3_data["count1_20"], Mac3_data["vac1_20"])); Mac3_Vac_av[21] = parseFloat(All_Average(Mac3_data["count1_21"], Mac3_data["vac1_21"]));
            Mac3_Vac_av[22] = parseFloat(All_Average(Mac3_data["count1_22"], Mac3_data["vac1_22"])); Mac3_Vac_av[23] = parseFloat(All_Average(Mac3_data["count1_23"], Mac3_data["vac1_23"]));

            Mac3_pressure1_av[0] = parseFloat(All_Average(Mac3_data["count1_00"], Mac3_data["pressure1_00"])); Mac3_pressure1_av[1] = parseFloat(All_Average(Mac3_data["count1_01"], Mac3_data["pressure1_01"]));
            Mac3_pressure1_av[2] = parseFloat(All_Average(Mac3_data["count1_02"], Mac3_data["pressure1_02"])); Mac3_pressure1_av[3] = parseFloat(All_Average(Mac3_data["count1_03"], Mac3_data["pressure1_03"]));
            Mac3_pressure1_av[4] = parseFloat(All_Average(Mac3_data["count1_04"], Mac3_data["pressure1_04"])); Mac3_pressure1_av[5] = parseFloat(All_Average(Mac3_data["count1_05"], Mac3_data["pressure1_05"]));
            Mac3_pressure1_av[6] = parseFloat(All_Average(Mac3_data["count1_06"], Mac3_data["pressure1_06"])); Mac3_pressure1_av[7] = parseFloat(All_Average(Mac3_data["count1_07"], Mac3_data["pressure1_07"]));
            Mac3_pressure1_av[8] = parseFloat(All_Average(Mac3_data["count1_08"], Mac3_data["pressure1_08"])); Mac3_pressure1_av[9] = parseFloat(All_Average(Mac3_data["count1_09"], Mac3_data["pressure1_09"]));
            Mac3_pressure1_av[10] = parseFloat(All_Average(Mac3_data["count1_10"], Mac3_data["pressure1_10"])); Mac3_pressure1_av[11] = parseFloat(All_Average(Mac3_data["count1_11"], Mac3_data["pressure1_11"]));
            Mac3_pressure1_av[12] = parseFloat(All_Average(Mac3_data["count1_12"], Mac3_data["pressure1_12"])); Mac3_pressure1_av[13] = parseFloat(All_Average(Mac3_data["count1_13"], Mac3_data["pressure1_13"]));
            Mac3_pressure1_av[14] = parseFloat(All_Average(Mac3_data["count1_14"], Mac3_data["pressure1_14"])); Mac3_pressure1_av[15] = parseFloat(All_Average(Mac3_data["count1_15"], Mac3_data["pressure1_15"]));
            Mac3_pressure1_av[16] = parseFloat(All_Average(Mac3_data["count1_16"], Mac3_data["pressure1_16"])); Mac3_pressure1_av[17] = parseFloat(All_Average(Mac3_data["count1_17"], Mac3_data["pressure1_17"]));
            Mac3_pressure1_av[18] = parseFloat(All_Average(Mac3_data["count1_18"], Mac3_data["pressure1_18"])); Mac3_pressure1_av[19] = parseFloat(All_Average(Mac3_data["count1_19"], Mac3_data["pressure1_19"]));
            Mac3_pressure1_av[20] = parseFloat(All_Average(Mac3_data["count1_20"], Mac3_data["pressure1_20"])); Mac3_pressure1_av[21] = parseFloat(All_Average(Mac3_data["count1_21"], Mac3_data["pressure1_21"]));
            Mac3_pressure1_av[22] = parseFloat(All_Average(Mac3_data["count1_22"], Mac3_data["pressure1_22"])); Mac3_pressure1_av[23] = parseFloat(All_Average(Mac3_data["count1_23"], Mac3_data["pressure1_23"]));

            Mac3_pressure2_av[0] = parseFloat(All_Average(Mac3_data["count1_00"], Mac3_data["pressure2_00"])); Mac3_pressure2_av[1] = parseFloat(All_Average(Mac3_data["count1_01"], Mac3_data["pressure2_01"]));
            Mac3_pressure2_av[2] = parseFloat(All_Average(Mac3_data["count1_02"], Mac3_data["pressure2_02"])); Mac3_pressure2_av[3] = parseFloat(All_Average(Mac3_data["count1_03"], Mac3_data["pressure2_03"]));
            Mac3_pressure2_av[4] = parseFloat(All_Average(Mac3_data["count1_04"], Mac3_data["pressure2_04"])); Mac3_pressure2_av[5] = parseFloat(All_Average(Mac3_data["count1_05"], Mac3_data["pressure2_05"]));
            Mac3_pressure2_av[6] = parseFloat(All_Average(Mac3_data["count1_06"], Mac3_data["pressure2_06"])); Mac3_pressure2_av[7] = parseFloat(All_Average(Mac3_data["count1_07"], Mac3_data["pressure2_07"]));
            Mac3_pressure2_av[8] = parseFloat(All_Average(Mac3_data["count1_08"], Mac3_data["pressure2_08"])); Mac3_pressure2_av[9] = parseFloat(All_Average(Mac3_data["count1_09"], Mac3_data["pressure2_09"]));
            Mac3_pressure2_av[10] = parseFloat(All_Average(Mac3_data["count1_10"], Mac3_data["pressure2_10"])); Mac3_pressure2_av[11] = parseFloat(All_Average(Mac3_data["count1_11"], Mac3_data["pressure2_11"]));
            Mac3_pressure2_av[12] = parseFloat(All_Average(Mac3_data["count1_12"], Mac3_data["pressure2_12"])); Mac3_pressure2_av[13] = parseFloat(All_Average(Mac3_data["count1_13"], Mac3_data["pressure2_13"]));
            Mac3_pressure2_av[14] = parseFloat(All_Average(Mac3_data["count1_14"], Mac3_data["pressure2_14"])); Mac3_pressure2_av[15] = parseFloat(All_Average(Mac3_data["count1_15"], Mac3_data["pressure2_15"]));
            Mac3_pressure2_av[16] = parseFloat(All_Average(Mac3_data["count1_16"], Mac3_data["pressure2_16"])); Mac3_pressure2_av[17] = parseFloat(All_Average(Mac3_data["count1_17"], Mac3_data["pressure2_17"]));
            Mac3_pressure2_av[18] = parseFloat(All_Average(Mac3_data["count1_18"], Mac3_data["pressure2_18"])); Mac3_pressure2_av[19] = parseFloat(All_Average(Mac3_data["count1_19"], Mac3_data["pressure2_19"]));
            Mac3_pressure2_av[20] = parseFloat(All_Average(Mac3_data["count1_20"], Mac3_data["pressure2_20"])); Mac3_pressure2_av[21] = parseFloat(All_Average(Mac3_data["count1_21"], Mac3_data["pressure2_21"]));
            Mac3_pressure2_av[22] = parseFloat(All_Average(Mac3_data["count1_22"], Mac3_data["pressure2_22"])); Mac3_pressure2_av[23] = parseFloat(All_Average(Mac3_data["count1_23"], Mac3_data["pressure2_23"]));
          }
          if (machine_no == 4) {
            if (0 == Time_h) {
              Mac4_data["count1_00"]++;
              Mac4_data["temp1_00"] += parseFloat(dataObj.Product_Temp);
              Mac4_data["vac1_00"] += parseFloat(dataObj.Product_Vacuum);
              Mac4_data["pressure1_00"] += parseFloat(dataObj.Product_Pressure);
              Mac4_data["pressure2_00"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (1 == Time_h) {
              Mac4_data["count1_01"]++;
              Mac4_data["temp1_01"] += parseFloat(dataObj.Product_Temp);
              Mac4_data["vac1_01"] += parseFloat(dataObj.Product_Vacuum);
              Mac4_data["pressure1_01"] += parseFloat(dataObj.Product_Pressure);
              Mac4_data["pressure2_01"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (2 == Time_h) {
              Mac4_data["count1_02"]++;
              Mac4_data["temp1_02"] += parseFloat(dataObj.Product_Temp);
              Mac4_data["vac1_02"] += parseFloat(dataObj.Product_Vacuum);
              Mac4_data["pressure1_02"] += parseFloat(dataObj.Product_Pressure);
              Mac4_data["pressure2_02"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (3 == Time_h) {
              Mac4_data["count1_03"]++;
              Mac4_data["temp1_03"] += parseFloat(dataObj.Product_Temp);
              Mac4_data["vac1_03"] += parseFloat(dataObj.Product_Vacuum);
              Mac4_data["pressure1_03"] += parseFloat(dataObj.Product_Pressure);
              Mac4_data["pressure2_03"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (4 == Time_h) {
              Mac4_data["count1_04"]++;
              Mac4_data["temp1_04"] += parseFloat(dataObj.Product_Temp);
              Mac4_data["vac1_04"] += parseFloat(dataObj.Product_Vacuum);
              Mac4_data["pressure1_04"] += parseFloat(dataObj.Product_Pressure);
              Mac4_data["pressure2_04"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (5 == Time_h) {
              Mac4_data["count1_05"]++;
              Mac4_data["temp1_05"] += parseFloat(dataObj.Product_Temp);
              Mac4_data["vac1_05"] += parseFloat(dataObj.Product_Vacuum);
              Mac4_data["pressure1_05"] += parseFloat(dataObj.Product_Pressure);
              Mac4_data["pressure2_05"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (6 == Time_h) {
              Mac4_data["count1_06"]++;
              Mac4_data["temp1_06"] += parseFloat(dataObj.Product_Temp);
              Mac4_data["vac1_06"] += parseFloat(dataObj.Product_Vacuum);
              Mac4_data["pressure1_06"] += parseFloat(dataObj.Product_Pressure);
              Mac4_data["pressure2_06"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (7 == Time_h) {
              Mac4_data["count1_07"]++;
              Mac4_data["temp1_07"] += parseFloat(dataObj.Product_Temp);
              Mac4_data["vac1_07"] += parseFloat(dataObj.Product_Vacuum);
              Mac4_data["pressure1_07"] += parseFloat(dataObj.Product_Pressure);
              Mac4_data["pressure2_07"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (8 == Time_h) {
              Mac4_data["count1_08"]++;
              Mac4_data["temp1_08"] += parseFloat(dataObj.Product_Temp);
              Mac4_data["vac1_08"] += parseFloat(dataObj.Product_Vacuum);
              Mac4_data["pressure1_08"] += parseFloat(dataObj.Product_Pressure);
              Mac4_data["pressure2_08"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (9 == Time_h) {
              Mac4_data["count1_09"]++;
              Mac4_data["temp1_09"] += parseFloat(dataObj.Product_Temp);
              Mac4_data["vac1_09"] += parseFloat(dataObj.Product_Vacuum);
              Mac4_data["pressure1_09"] += parseFloat(dataObj.Product_Pressure);
              Mac4_data["pressure2_09"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (10 == Time_h) {
              Mac4_data["count1_10"]++;
              Mac4_data["temp1_10"] += parseFloat(dataObj.Product_Temp);
              Mac4_data["vac1_10"] += parseFloat(dataObj.Product_Vacuum);
              Mac4_data["pressure1_10"] += parseFloat(dataObj.Product_Pressure);
              Mac4_data["pressure2_10"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (11 == Time_h) {
              Mac4_data["count1_11"]++;
              Mac4_data["temp1_11"] += parseFloat(dataObj.Product_Temp);
              Mac4_data["vac1_11"] += parseFloat(dataObj.Product_Vacuum);
              Mac4_data["pressure1_11"] += parseFloat(dataObj.Product_Pressure);
              Mac4_data["pressure2_11"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (12 == Time_h) {
              Mac4_data["count1_12"]++;
              Mac4_data["temp1_12"] += parseFloat(dataObj.Product_Temp);
              Mac4_data["vac1_12"] += parseFloat(dataObj.Product_Vacuum);
              Mac4_data["pressure1_12"] += parseFloat(dataObj.Product_Pressure);
              Mac4_data["pressure2_12"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (13 == Time_h) {
              Mac4_data["count1_13"]++;
              Mac4_data["temp1_13"] += parseFloat(dataObj.Product_Temp);
              Mac4_data["vac1_13"] += parseFloat(dataObj.Product_Vacuum);
              Mac4_data["pressure1_13"] += parseFloat(dataObj.Product_Pressure);
              Mac4_data["pressure2_13"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (14 == Time_h) {
              Mac4_data["count1_14"]++;
              Mac4_data["temp1_14"] += parseFloat(dataObj.Product_Temp);
              Mac4_data["vac1_14"] += parseFloat(dataObj.Product_Vacuum);
              Mac4_data["pressure1_14"] += parseFloat(dataObj.Product_Pressure);
              Mac4_data["pressure2_14"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (15 == Time_h) {
              Mac4_data["count1_15"]++;
              Mac4_data["temp1_15"] += parseFloat(dataObj.Product_Temp);
              Mac4_data["vac1_15"] += parseFloat(dataObj.Product_Vacuum);
              Mac4_data["pressure1_15"] += parseFloat(dataObj.Product_Pressure);
              Mac4_data["pressure2_15"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (16 == Time_h) {
              Mac4_data["count1_16"]++;
              Mac4_data["temp1_16"] += parseFloat(dataObj.Product_Temp);
              Mac4_data["vac1_16"] += parseFloat(dataObj.Product_Vacuum);
              Mac4_data["pressure1_16"] += parseFloat(dataObj.Product_Pressure);
              Mac4_data["pressure2_16"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (17 == Time_h) {
              Mac4_data["count1_17"]++;
              Mac4_data["temp1_17"] += parseFloat(dataObj.Product_Temp);
              Mac4_data["vac1_17"] += parseFloat(dataObj.Product_Vacuum);
              Mac4_data["pressure1_17"] += parseFloat(dataObj.Product_Pressure);
              Mac4_data["pressure2_17"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (18 == Time_h) {
              Mac4_data["count1_18"]++;
              Mac4_data["temp1_18"] += parseFloat(dataObj.Product_Temp);
              Mac4_data["vac1_18"] += parseFloat(dataObj.Product_Vacuum);
              Mac4_data["pressure1_18"] += parseFloat(dataObj.Product_Pressure);
              Mac4_data["pressure2_18"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (19 == Time_h) {
              Mac4_data["count1_19"]++;
              Mac4_data["temp1_19"] += parseFloat(dataObj.Product_Temp);
              Mac4_data["vac1_19"] += parseFloat(dataObj.Product_Vacuum);
              Mac4_data["pressure1_19"] += parseFloat(dataObj.Product_Pressure);
              Mac4_data["pressure2_19"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (20 == Time_h) {
              Mac4_data["count1_20"]++;
              Mac4_data["temp1_20"] += parseFloat(dataObj.Product_Temp);
              Mac4_data["vac1_20"] += parseFloat(dataObj.Product_Vacuum);
              Mac4_data["pressure1_20"] += parseFloat(dataObj.Product_Pressure);
              Mac4_data["pressure2_20"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (21 == Time_h) {
              Mac4_data["count1_21"]++;
              Mac4_data["temp1_21"] += parseFloat(dataObj.Product_Temp);
              Mac4_data["vac1_21"] += parseFloat(dataObj.Product_Vacuum);
              Mac4_data["pressure1_21"] += parseFloat(dataObj.Product_Pressure);
              Mac4_data["pressure2_21"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (22 == Time_h) {
              Mac4_data["count1_22"]++;
              Mac4_data["temp1_22"] += parseFloat(dataObj.Product_Temp);
              Mac4_data["vac1_22"] += parseFloat(dataObj.Product_Vacuum);
              Mac4_data["pressure1_21"] += parseFloat(dataObj.Product_Pressure);
              Mac4_data["pressure2_21"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (Time_h == 23) {
              Mac4_data["count1_23"]++;
              Mac4_data["temp1_23"] += parseFloat(dataObj.Product_Temp);
              Mac4_data["vac1_23"] += parseFloat(dataObj.Product_Vacuum);
              Mac4_data["pressure1_21"] += parseFloat(dataObj.Product_Pressure);
              Mac4_data["pressure2_21"] += parseFloat(dataObj.Product_Pressure2);
            }
            Mac4_temp_av[0] = parseFloat(All_Average(Mac4_data["count1_00"], Mac4_data["temp1_00"])); Mac4_temp_av[1] = parseFloat(All_Average(Mac4_data["count1_01"], Mac4_data["temp1_01"]));
            Mac4_temp_av[2] = parseFloat(All_Average(Mac4_data["count1_02"], Mac4_data["temp1_02"])); Mac4_temp_av[3] = parseFloat(All_Average(Mac4_data["count1_03"], Mac4_data["temp1_03"]));
            Mac4_temp_av[4] = parseFloat(All_Average(Mac4_data["count1_04"], Mac4_data["temp1_04"])); Mac4_temp_av[5] = parseFloat(All_Average(Mac4_data["count1_05"], Mac4_data["temp1_05"]));
            Mac4_temp_av[6] = parseFloat(All_Average(Mac4_data["count1_06"], Mac4_data["temp1_06"])); Mac4_temp_av[7] = parseFloat(All_Average(Mac4_data["count1_07"], Mac4_data["temp1_07"]));
            Mac4_temp_av[8] = parseFloat(All_Average(Mac4_data["count1_08"], Mac4_data["temp1_08"])); Mac4_temp_av[9] = parseFloat(All_Average(Mac4_data["count1_09"], Mac4_data["temp1_09"]));
            Mac4_temp_av[10] = parseFloat(All_Average(Mac4_data["count1_10"], Mac4_data["temp1_10"])); Mac4_temp_av[11] = parseFloat(All_Average(Mac4_data["count1_11"], Mac4_data["temp1_11"]));
            Mac4_temp_av[12] = parseFloat(All_Average(Mac4_data["count1_12"], Mac4_data["temp1_12"])); Mac4_temp_av[13] = parseFloat(All_Average(Mac4_data["count1_13"], Mac4_data["temp1_13"]));
            Mac4_temp_av[14] = parseFloat(All_Average(Mac4_data["count1_14"], Mac4_data["temp1_14"])); Mac4_temp_av[15] = parseFloat(All_Average(Mac4_data["count1_15"], Mac4_data["temp1_15"]));
            Mac4_temp_av[16] = parseFloat(All_Average(Mac4_data["count1_16"], Mac4_data["temp1_16"])); Mac4_temp_av[17] = parseFloat(All_Average(Mac4_data["count1_17"], Mac4_data["temp1_17"]));
            Mac4_temp_av[18] = parseFloat(All_Average(Mac4_data["count1_18"], Mac4_data["temp1_18"])); Mac4_temp_av[19] = parseFloat(All_Average(Mac4_data["count1_19"], Mac4_data["temp1_19"]));
            Mac4_temp_av[20] = parseFloat(All_Average(Mac4_data["count1_20"], Mac4_data["temp1_20"])); Mac4_temp_av[21] = parseFloat(All_Average(Mac4_data["count1_21"], Mac4_data["temp1_21"]));
            Mac4_temp_av[22] = parseFloat(All_Average(Mac4_data["count1_22"], Mac4_data["temp1_22"])); Mac4_temp_av[23] = parseFloat(All_Average(Mac4_data["count1_23"], Mac4_data["temp1_23"]));

            Mac4_Vac_av[0] = parseFloat(All_Average(Mac4_data["count1_00"], Mac4_data["vac1_00"])); Mac4_Vac_av[1] = parseFloat(All_Average(Mac4_data["count1_01"], Mac4_data["vac1_01"]));
            Mac4_Vac_av[2] = parseFloat(All_Average(Mac4_data["count1_02"], Mac4_data["vac1_02"])); Mac4_Vac_av[3] = parseFloat(All_Average(Mac4_data["count1_03"], Mac4_data["vac1_03"]));
            Mac4_Vac_av[4] = parseFloat(All_Average(Mac4_data["count1_04"], Mac4_data["vac1_04"])); Mac4_Vac_av[5] = parseFloat(All_Average(Mac4_data["count1_05"], Mac4_data["vac1_05"]));
            Mac4_Vac_av[6] = parseFloat(All_Average(Mac4_data["count1_06"], Mac4_data["vac1_06"])); Mac4_Vac_av[7] = parseFloat(All_Average(Mac4_data["count1_07"], Mac4_data["vac1_07"]));
            Mac4_Vac_av[8] = parseFloat(All_Average(Mac4_data["count1_08"], Mac4_data["vac1_08"])); Mac4_Vac_av[9] = parseFloat(All_Average(Mac4_data["count1_09"], Mac4_data["vac1_09"]));
            Mac4_Vac_av[10] = parseFloat(All_Average(Mac4_data["count1_10"], Mac4_data["vac1_10"])); Mac4_Vac_av[11] = parseFloat(All_Average(Mac4_data["count1_11"], Mac4_data["vac1_11"]));
            Mac4_Vac_av[12] = parseFloat(All_Average(Mac4_data["count1_12"], Mac4_data["vac1_12"])); Mac4_Vac_av[13] = parseFloat(All_Average(Mac4_data["count1_13"], Mac4_data["vac1_13"]));
            Mac4_Vac_av[14] = parseFloat(All_Average(Mac4_data["count1_14"], Mac4_data["vac1_14"])); Mac4_Vac_av[15] = parseFloat(All_Average(Mac4_data["count1_15"], Mac4_data["vac1_15"]));
            Mac4_Vac_av[16] = parseFloat(All_Average(Mac4_data["count1_16"], Mac4_data["vac1_16"])); Mac4_Vac_av[17] = parseFloat(All_Average(Mac4_data["count1_17"], Mac4_data["vac1_17"]));
            Mac4_Vac_av[18] = parseFloat(All_Average(Mac4_data["count1_18"], Mac4_data["vac1_18"])); Mac4_Vac_av[19] = parseFloat(All_Average(Mac4_data["count1_19"], Mac4_data["vac1_19"]));
            Mac4_Vac_av[20] = parseFloat(All_Average(Mac4_data["count1_20"], Mac4_data["vac1_20"])); Mac4_Vac_av[21] = parseFloat(All_Average(Mac4_data["count1_21"], Mac4_data["vac1_21"]));
            Mac4_Vac_av[22] = parseFloat(All_Average(Mac4_data["count1_22"], Mac4_data["vac1_22"])); Mac4_Vac_av[23] = parseFloat(All_Average(Mac4_data["count1_23"], Mac4_data["vac1_23"]));

            Mac4_pressure1_av[0] = parseFloat(All_Average(Mac4_data["count1_00"], Mac4_data["pressure1_00"])); Mac4_pressure1_av[1] = parseFloat(All_Average(Mac4_data["count1_01"], Mac4_data["pressure1_01"]));
            Mac4_pressure1_av[2] = parseFloat(All_Average(Mac4_data["count1_02"], Mac4_data["pressure1_02"])); Mac4_pressure1_av[3] = parseFloat(All_Average(Mac4_data["count1_03"], Mac4_data["pressure1_03"]));
            Mac4_pressure1_av[4] = parseFloat(All_Average(Mac4_data["count1_04"], Mac4_data["pressure1_04"])); Mac4_pressure1_av[5] = parseFloat(All_Average(Mac4_data["count1_05"], Mac4_data["pressure1_05"]));
            Mac4_pressure1_av[6] = parseFloat(All_Average(Mac4_data["count1_06"], Mac4_data["pressure1_06"])); Mac4_pressure1_av[7] = parseFloat(All_Average(Mac4_data["count1_07"], Mac4_data["pressure1_07"]));
            Mac4_pressure1_av[8] = parseFloat(All_Average(Mac4_data["count1_08"], Mac4_data["pressure1_08"])); Mac4_pressure1_av[9] = parseFloat(All_Average(Mac4_data["count1_09"], Mac4_data["pressure1_09"]));
            Mac4_pressure1_av[10] = parseFloat(All_Average(Mac4_data["count1_10"], Mac4_data["pressure1_10"])); Mac4_pressure1_av[11] = parseFloat(All_Average(Mac4_data["count1_11"], Mac4_data["pressure1_11"]));
            Mac4_pressure1_av[12] = parseFloat(All_Average(Mac4_data["count1_12"], Mac4_data["pressure1_12"])); Mac4_pressure1_av[13] = parseFloat(All_Average(Mac4_data["count1_13"], Mac4_data["pressure1_13"]));
            Mac4_pressure1_av[14] = parseFloat(All_Average(Mac4_data["count1_14"], Mac4_data["pressure1_14"])); Mac4_pressure1_av[15] = parseFloat(All_Average(Mac4_data["count1_15"], Mac4_data["pressure1_15"]));
            Mac4_pressure1_av[16] = parseFloat(All_Average(Mac4_data["count1_16"], Mac4_data["pressure1_16"])); Mac4_pressure1_av[17] = parseFloat(All_Average(Mac4_data["count1_17"], Mac4_data["pressure1_17"]));
            Mac4_pressure1_av[18] = parseFloat(All_Average(Mac4_data["count1_18"], Mac4_data["pressure1_18"])); Mac4_pressure1_av[19] = parseFloat(All_Average(Mac4_data["count1_19"], Mac4_data["pressure1_19"]));
            Mac4_pressure1_av[20] = parseFloat(All_Average(Mac4_data["count1_20"], Mac4_data["pressure1_20"])); Mac4_pressure1_av[21] = parseFloat(All_Average(Mac4_data["count1_21"], Mac4_data["pressure1_21"]));
            Mac4_pressure1_av[22] = parseFloat(All_Average(Mac4_data["count1_22"], Mac4_data["pressure1_22"])); Mac4_pressure1_av[23] = parseFloat(All_Average(Mac4_data["count1_23"], Mac4_data["pressure1_23"]));

            Mac4_pressure2_av[0] = parseFloat(All_Average(Mac4_data["count1_00"], Mac4_data["pressure2_00"])); Mac4_pressure2_av[1] = parseFloat(All_Average(Mac4_data["count1_01"], Mac4_data["pressure2_01"]));
            Mac4_pressure2_av[2] = parseFloat(All_Average(Mac4_data["count1_02"], Mac4_data["pressure2_02"])); Mac4_pressure2_av[3] = parseFloat(All_Average(Mac4_data["count1_03"], Mac4_data["pressure2_03"]));
            Mac4_pressure2_av[4] = parseFloat(All_Average(Mac4_data["count1_04"], Mac4_data["pressure2_04"])); Mac4_pressure2_av[5] = parseFloat(All_Average(Mac4_data["count1_05"], Mac4_data["pressure2_05"]));
            Mac4_pressure2_av[6] = parseFloat(All_Average(Mac4_data["count1_06"], Mac4_data["pressure2_06"])); Mac4_pressure2_av[7] = parseFloat(All_Average(Mac4_data["count1_07"], Mac4_data["pressure2_07"]));
            Mac4_pressure2_av[8] = parseFloat(All_Average(Mac4_data["count1_08"], Mac4_data["pressure2_08"])); Mac4_pressure2_av[9] = parseFloat(All_Average(Mac4_data["count1_09"], Mac4_data["pressure2_09"]));
            Mac4_pressure2_av[10] = parseFloat(All_Average(Mac4_data["count1_10"], Mac4_data["pressure2_10"])); Mac4_pressure2_av[11] = parseFloat(All_Average(Mac4_data["count1_11"], Mac4_data["pressure2_11"]));
            Mac4_pressure2_av[12] = parseFloat(All_Average(Mac4_data["count1_12"], Mac4_data["pressure2_12"])); Mac4_pressure2_av[13] = parseFloat(All_Average(Mac4_data["count1_13"], Mac4_data["pressure2_13"]));
            Mac4_pressure2_av[14] = parseFloat(All_Average(Mac4_data["count1_14"], Mac4_data["pressure2_14"])); Mac4_pressure2_av[15] = parseFloat(All_Average(Mac4_data["count1_15"], Mac4_data["pressure2_15"]));
            Mac4_pressure2_av[16] = parseFloat(All_Average(Mac4_data["count1_16"], Mac4_data["pressure2_16"])); Mac4_pressure2_av[17] = parseFloat(All_Average(Mac4_data["count1_17"], Mac4_data["pressure2_17"]));
            Mac4_pressure2_av[18] = parseFloat(All_Average(Mac4_data["count1_18"], Mac4_data["pressure2_18"])); Mac4_pressure2_av[19] = parseFloat(All_Average(Mac4_data["count1_19"], Mac4_data["pressure2_19"]));
            Mac4_pressure2_av[20] = parseFloat(All_Average(Mac4_data["count1_20"], Mac4_data["pressure2_20"])); Mac4_pressure2_av[21] = parseFloat(All_Average(Mac4_data["count1_21"], Mac4_data["pressure2_21"]));
            Mac4_pressure2_av[22] = parseFloat(All_Average(Mac4_data["count1_22"], Mac4_data["pressure2_22"])); Mac4_pressure2_av[23] = parseFloat(All_Average(Mac4_data["count1_23"], Mac4_data["pressure2_23"]));
          }
          if (machine_no == 5) {
            if (0 == Time_h) {
              Mac5_data["count1_00"]++;
              Mac5_data["temp1_00"] += parseFloat(dataObj.Product_Temp);
              Mac5_data["vac1_00"] += parseFloat(dataObj.Product_Vacuum);
              Mac5_data["pressure1_00"] += parseFloat(dataObj.Product_Pressure);
              Mac5_data["pressure2_00"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (1 == Time_h) {
              Mac5_data["count1_01"]++;
              Mac5_data["temp1_01"] += parseFloat(dataObj.Product_Temp);
              Mac5_data["vac1_01"] += parseFloat(dataObj.Product_Vacuum);
              Mac5_data["pressure1_01"] += parseFloat(dataObj.Product_Pressure);
              Mac5_data["pressure2_01"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (2 == Time_h) {
              Mac5_data["count1_02"]++;
              Mac5_data["temp1_02"] += parseFloat(dataObj.Product_Temp);
              Mac5_data["vac1_02"] += parseFloat(dataObj.Product_Vacuum);
              Mac5_data["pressure1_02"] += parseFloat(dataObj.Product_Pressure);
              Mac5_data["pressure2_02"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (3 == Time_h) {
              Mac5_data["count1_03"]++;
              Mac5_data["temp1_03"] += parseFloat(dataObj.Product_Temp);
              Mac5_data["vac1_03"] += parseFloat(dataObj.Product_Vacuum);
              Mac5_data["pressure1_03"] += parseFloat(dataObj.Product_Pressure);
              Mac5_data["pressure2_03"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (4 == Time_h) {
              Mac5_data["count1_04"]++;
              Mac5_data["temp1_04"] += parseFloat(dataObj.Product_Temp);
              Mac5_data["vac1_04"] += parseFloat(dataObj.Product_Vacuum);
              Mac5_data["pressure1_04"] += parseFloat(dataObj.Product_Pressure);
              Mac5_data["pressure2_04"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (5 == Time_h) {
              Mac5_data["count1_05"]++;
              Mac5_data["temp1_05"] += parseFloat(dataObj.Product_Temp);
              Mac5_data["vac1_05"] += parseFloat(dataObj.Product_Vacuum);
              Mac5_data["pressure1_05"] += parseFloat(dataObj.Product_Pressure);
              Mac5_data["pressure2_05"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (6 == Time_h) {
              Mac5_data["count1_06"]++;
              Mac5_data["temp1_06"] += parseFloat(dataObj.Product_Temp);
              Mac5_data["vac1_06"] += parseFloat(dataObj.Product_Vacuum);
              Mac5_data["pressure1_06"] += parseFloat(dataObj.Product_Pressure);
              Mac5_data["pressure2_06"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (7 == Time_h) {
              Mac5_data["count1_07"]++;
              Mac5_data["temp1_07"] += parseFloat(dataObj.Product_Temp);
              Mac5_data["vac1_07"] += parseFloat(dataObj.Product_Vacuum);
              Mac5_data["pressure1_07"] += parseFloat(dataObj.Product_Pressure);
              Mac5_data["pressure2_07"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (8 == Time_h) {
              Mac5_data["count1_08"]++;
              Mac5_data["temp1_08"] += parseFloat(dataObj.Product_Temp);
              Mac5_data["vac1_08"] += parseFloat(dataObj.Product_Vacuum);
              Mac5_data["pressure1_08"] += parseFloat(dataObj.Product_Pressure);
              Mac5_data["pressure2_08"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (9 == Time_h) {
              Mac5_data["count1_09"]++;
              Mac5_data["temp1_09"] += parseFloat(dataObj.Product_Temp);
              Mac5_data["vac1_09"] += parseFloat(dataObj.Product_Vacuum);
              Mac5_data["pressure1_09"] += parseFloat(dataObj.Product_Pressure);
              Mac5_data["pressure2_09"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (10 == Time_h) {
              Mac5_data["count1_10"]++;
              Mac5_data["temp1_10"] += parseFloat(dataObj.Product_Temp);
              Mac5_data["vac1_10"] += parseFloat(dataObj.Product_Vacuum);
              Mac5_data["pressure1_10"] += parseFloat(dataObj.Product_Pressure);
              Mac5_data["pressure2_10"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (11 == Time_h) {
              Mac5_data["count1_11"]++;
              Mac5_data["temp1_11"] += parseFloat(dataObj.Product_Temp);
              Mac5_data["vac1_11"] += parseFloat(dataObj.Product_Vacuum);
              Mac5_data["pressure1_11"] += parseFloat(dataObj.Product_Pressure);
              Mac5_data["pressure2_11"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (12 == Time_h) {
              Mac5_data["count1_12"]++;
              Mac5_data["temp1_12"] += parseFloat(dataObj.Product_Temp);
              Mac5_data["vac1_12"] += parseFloat(dataObj.Product_Vacuum);
              Mac5_data["pressure1_12"] += parseFloat(dataObj.Product_Pressure);
              Mac5_data["pressure2_12"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (13 == Time_h) {
              Mac5_data["count1_13"]++;
              Mac5_data["temp1_13"] += parseFloat(dataObj.Product_Temp);
              Mac5_data["vac1_13"] += parseFloat(dataObj.Product_Vacuum);
              Mac5_data["pressure1_13"] += parseFloat(dataObj.Product_Pressure);
              Mac5_data["pressure2_13"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (14 == Time_h) {
              Mac5_data["count1_14"]++;
              Mac5_data["temp1_14"] += parseFloat(dataObj.Product_Temp);
              Mac5_data["vac1_14"] += parseFloat(dataObj.Product_Vacuum);
              Mac5_data["pressure1_14"] += parseFloat(dataObj.Product_Pressure);
              Mac5_data["pressure2_14"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (15 == Time_h) {
              Mac5_data["count1_15"]++;
              Mac5_data["temp1_15"] += parseFloat(dataObj.Product_Temp);
              Mac5_data["vac1_15"] += parseFloat(dataObj.Product_Vacuum);
              Mac5_data["pressure1_15"] += parseFloat(dataObj.Product_Pressure);
              Mac5_data["pressure2_15"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (16 == Time_h) {
              Mac5_data["count1_16"]++;
              Mac5_data["temp1_16"] += parseFloat(dataObj.Product_Temp);
              Mac5_data["vac1_16"] += parseFloat(dataObj.Product_Vacuum);
              Mac5_data["pressure1_16"] += parseFloat(dataObj.Product_Pressure);
              Mac5_data["pressure2_16"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (17 == Time_h) {
              Mac5_data["count1_17"]++;
              Mac5_data["temp1_17"] += parseFloat(dataObj.Product_Temp);
              Mac5_data["vac1_17"] += parseFloat(dataObj.Product_Vacuum);
              Mac5_data["pressure1_17"] += parseFloat(dataObj.Product_Pressure);
              Mac5_data["pressure2_17"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (18 == Time_h) {
              Mac5_data["count1_18"]++;
              Mac5_data["temp1_18"] += parseFloat(dataObj.Product_Temp);
              Mac5_data["vac1_18"] += parseFloat(dataObj.Product_Vacuum);
              Mac5_data["pressure1_18"] += parseFloat(dataObj.Product_Pressure);
              Mac5_data["pressure2_18"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (19 == Time_h) {
              Mac5_data["count1_19"]++;
              Mac5_data["temp1_19"] += parseFloat(dataObj.Product_Temp);
              Mac5_data["vac1_19"] += parseFloat(dataObj.Product_Vacuum);
              Mac5_data["pressure1_19"] += parseFloat(dataObj.Product_Pressure);
              Mac5_data["pressure2_19"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (20 == Time_h) {
              Mac5_data["count1_20"]++;
              Mac5_data["temp1_20"] += parseFloat(dataObj.Product_Temp);
              Mac5_data["vac1_20"] += parseFloat(dataObj.Product_Vacuum);
              Mac5_data["pressure1_20"] += parseFloat(dataObj.Product_Pressure);
              Mac5_data["pressure2_20"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (21 == Time_h) {
              Mac5_data["count1_21"]++;
              Mac5_data["temp1_21"] += parseFloat(dataObj.Product_Temp);
              Mac5_data["vac1_21"] += parseFloat(dataObj.Product_Vacuum);
              Mac5_data["pressure1_21"] += parseFloat(dataObj.Product_Pressure);
              Mac5_data["pressure2_21"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (22 == Time_h) {
              Mac5_data["count1_22"]++;
              Mac5_data["temp1_22"] += parseFloat(dataObj.Product_Temp);
              Mac5_data["vac1_22"] += parseFloat(dataObj.Product_Vacuum);
              Mac5_data["pressure1_21"] += parseFloat(dataObj.Product_Pressure);
              Mac5_data["pressure2_21"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (Time_h == 23) {
              Mac5_data["count1_23"]++;
              Mac5_data["temp1_23"] += parseFloat(dataObj.Product_Temp);
              Mac5_data["vac1_23"] += parseFloat(dataObj.Product_Vacuum);
              Mac5_data["pressure1_21"] += parseFloat(dataObj.Product_Pressure);
              Mac5_data["pressure2_21"] += parseFloat(dataObj.Product_Pressure2);
            }
            Mac5_temp_av[0] = parseFloat(All_Average(Mac5_data["count1_00"], Mac5_data["temp1_00"])); Mac5_temp_av[1] = parseFloat(All_Average(Mac5_data["count1_01"], Mac5_data["temp1_01"]));
            Mac5_temp_av[2] = parseFloat(All_Average(Mac5_data["count1_02"], Mac5_data["temp1_02"])); Mac5_temp_av[3] = parseFloat(All_Average(Mac5_data["count1_03"], Mac5_data["temp1_03"]));
            Mac5_temp_av[4] = parseFloat(All_Average(Mac5_data["count1_04"], Mac5_data["temp1_04"])); Mac5_temp_av[5] = parseFloat(All_Average(Mac5_data["count1_05"], Mac5_data["temp1_05"]));
            Mac5_temp_av[6] = parseFloat(All_Average(Mac5_data["count1_06"], Mac5_data["temp1_06"])); Mac5_temp_av[7] = parseFloat(All_Average(Mac5_data["count1_07"], Mac5_data["temp1_07"]));
            Mac5_temp_av[8] = parseFloat(All_Average(Mac5_data["count1_08"], Mac5_data["temp1_08"])); Mac5_temp_av[9] = parseFloat(All_Average(Mac5_data["count1_09"], Mac5_data["temp1_09"]));
            Mac5_temp_av[10] = parseFloat(All_Average(Mac5_data["count1_10"], Mac5_data["temp1_10"])); Mac5_temp_av[11] = parseFloat(All_Average(Mac5_data["count1_11"], Mac5_data["temp1_11"]));
            Mac5_temp_av[12] = parseFloat(All_Average(Mac5_data["count1_12"], Mac5_data["temp1_12"])); Mac5_temp_av[13] = parseFloat(All_Average(Mac5_data["count1_13"], Mac5_data["temp1_13"]));
            Mac5_temp_av[14] = parseFloat(All_Average(Mac5_data["count1_14"], Mac5_data["temp1_14"])); Mac5_temp_av[15] = parseFloat(All_Average(Mac5_data["count1_15"], Mac5_data["temp1_15"]));
            Mac5_temp_av[16] = parseFloat(All_Average(Mac5_data["count1_16"], Mac5_data["temp1_16"])); Mac5_temp_av[17] = parseFloat(All_Average(Mac5_data["count1_17"], Mac5_data["temp1_17"]));
            Mac5_temp_av[18] = parseFloat(All_Average(Mac5_data["count1_18"], Mac5_data["temp1_18"])); Mac5_temp_av[19] = parseFloat(All_Average(Mac5_data["count1_19"], Mac5_data["temp1_19"]));
            Mac5_temp_av[20] = parseFloat(All_Average(Mac5_data["count1_20"], Mac5_data["temp1_20"])); Mac5_temp_av[21] = parseFloat(All_Average(Mac5_data["count1_21"], Mac5_data["temp1_21"]));
            Mac5_temp_av[22] = parseFloat(All_Average(Mac5_data["count1_22"], Mac5_data["temp1_22"])); Mac5_temp_av[23] = parseFloat(All_Average(Mac5_data["count1_23"], Mac5_data["temp1_23"]));

            Mac5_Vac_av[0] = parseFloat(All_Average(Mac5_data["count1_00"], Mac5_data["vac1_00"])); Mac5_Vac_av[1] = parseFloat(All_Average(Mac5_data["count1_01"], Mac5_data["vac1_01"]));
            Mac5_Vac_av[2] = parseFloat(All_Average(Mac5_data["count1_02"], Mac5_data["vac1_02"])); Mac5_Vac_av[3] = parseFloat(All_Average(Mac5_data["count1_03"], Mac5_data["vac1_03"]));
            Mac5_Vac_av[4] = parseFloat(All_Average(Mac5_data["count1_04"], Mac5_data["vac1_04"])); Mac5_Vac_av[5] = parseFloat(All_Average(Mac5_data["count1_05"], Mac5_data["vac1_05"]));
            Mac5_Vac_av[6] = parseFloat(All_Average(Mac5_data["count1_06"], Mac5_data["vac1_06"])); Mac5_Vac_av[7] = parseFloat(All_Average(Mac5_data["count1_07"], Mac5_data["vac1_07"]));
            Mac5_Vac_av[8] = parseFloat(All_Average(Mac5_data["count1_08"], Mac5_data["vac1_08"])); Mac5_Vac_av[9] = parseFloat(All_Average(Mac5_data["count1_09"], Mac5_data["vac1_09"]));
            Mac5_Vac_av[10] = parseFloat(All_Average(Mac5_data["count1_10"], Mac5_data["vac1_10"])); Mac5_Vac_av[11] = parseFloat(All_Average(Mac5_data["count1_11"], Mac5_data["vac1_11"]));
            Mac5_Vac_av[12] = parseFloat(All_Average(Mac5_data["count1_12"], Mac5_data["vac1_12"])); Mac5_Vac_av[13] = parseFloat(All_Average(Mac5_data["count1_13"], Mac5_data["vac1_13"]));
            Mac5_Vac_av[14] = parseFloat(All_Average(Mac5_data["count1_14"], Mac5_data["vac1_14"])); Mac5_Vac_av[15] = parseFloat(All_Average(Mac5_data["count1_15"], Mac5_data["vac1_15"]));
            Mac5_Vac_av[16] = parseFloat(All_Average(Mac5_data["count1_16"], Mac5_data["vac1_16"])); Mac5_Vac_av[17] = parseFloat(All_Average(Mac5_data["count1_17"], Mac5_data["vac1_17"]));
            Mac5_Vac_av[18] = parseFloat(All_Average(Mac5_data["count1_18"], Mac5_data["vac1_18"])); Mac5_Vac_av[19] = parseFloat(All_Average(Mac5_data["count1_19"], Mac5_data["vac1_19"]));
            Mac5_Vac_av[20] = parseFloat(All_Average(Mac5_data["count1_20"], Mac5_data["vac1_20"])); Mac5_Vac_av[21] = parseFloat(All_Average(Mac5_data["count1_21"], Mac5_data["vac1_21"]));
            Mac5_Vac_av[22] = parseFloat(All_Average(Mac5_data["count1_22"], Mac5_data["vac1_22"])); Mac5_Vac_av[23] = parseFloat(All_Average(Mac5_data["count1_23"], Mac5_data["vac1_23"]));

            Mac5_pressure1_av[0] = parseFloat(All_Average(Mac5_data["count1_00"], Mac5_data["pressure1_00"])); Mac5_pressure1_av[1] = parseFloat(All_Average(Mac5_data["count1_01"], Mac5_data["pressure1_01"]));
            Mac5_pressure1_av[2] = parseFloat(All_Average(Mac5_data["count1_02"], Mac5_data["pressure1_02"])); Mac5_pressure1_av[3] = parseFloat(All_Average(Mac5_data["count1_03"], Mac5_data["pressure1_03"]));
            Mac5_pressure1_av[4] = parseFloat(All_Average(Mac5_data["count1_04"], Mac5_data["pressure1_04"])); Mac5_pressure1_av[5] = parseFloat(All_Average(Mac5_data["count1_05"], Mac5_data["pressure1_05"]));
            Mac5_pressure1_av[6] = parseFloat(All_Average(Mac5_data["count1_06"], Mac5_data["pressure1_06"])); Mac5_pressure1_av[7] = parseFloat(All_Average(Mac5_data["count1_07"], Mac5_data["pressure1_07"]));
            Mac5_pressure1_av[8] = parseFloat(All_Average(Mac5_data["count1_08"], Mac5_data["pressure1_08"])); Mac5_pressure1_av[9] = parseFloat(All_Average(Mac5_data["count1_09"], Mac5_data["pressure1_09"]));
            Mac5_pressure1_av[10] = parseFloat(All_Average(Mac5_data["count1_10"], Mac5_data["pressure1_10"])); Mac5_pressure1_av[11] = parseFloat(All_Average(Mac5_data["count1_11"], Mac5_data["pressure1_11"]));
            Mac5_pressure1_av[12] = parseFloat(All_Average(Mac5_data["count1_12"], Mac5_data["pressure1_12"])); Mac5_pressure1_av[13] = parseFloat(All_Average(Mac5_data["count1_13"], Mac5_data["pressure1_13"]));
            Mac5_pressure1_av[14] = parseFloat(All_Average(Mac5_data["count1_14"], Mac5_data["pressure1_14"])); Mac5_pressure1_av[15] = parseFloat(All_Average(Mac5_data["count1_15"], Mac5_data["pressure1_15"]));
            Mac5_pressure1_av[16] = parseFloat(All_Average(Mac5_data["count1_16"], Mac5_data["pressure1_16"])); Mac5_pressure1_av[17] = parseFloat(All_Average(Mac5_data["count1_17"], Mac5_data["pressure1_17"]));
            Mac5_pressure1_av[18] = parseFloat(All_Average(Mac5_data["count1_18"], Mac5_data["pressure1_18"])); Mac5_pressure1_av[19] = parseFloat(All_Average(Mac5_data["count1_19"], Mac5_data["pressure1_19"]));
            Mac5_pressure1_av[20] = parseFloat(All_Average(Mac5_data["count1_20"], Mac5_data["pressure1_20"])); Mac5_pressure1_av[21] = parseFloat(All_Average(Mac5_data["count1_21"], Mac5_data["pressure1_21"]));
            Mac5_pressure1_av[22] = parseFloat(All_Average(Mac5_data["count1_22"], Mac5_data["pressure1_22"])); Mac5_pressure1_av[23] = parseFloat(All_Average(Mac5_data["count1_23"], Mac5_data["pressure1_23"]));

            Mac5_pressure2_av[0] = parseFloat(All_Average(Mac5_data["count1_00"], Mac5_data["pressure2_00"])); Mac5_pressure2_av[1] = parseFloat(All_Average(Mac5_data["count1_01"], Mac5_data["pressure2_01"]));
            Mac5_pressure2_av[2] = parseFloat(All_Average(Mac5_data["count1_02"], Mac5_data["pressure2_02"])); Mac5_pressure2_av[3] = parseFloat(All_Average(Mac5_data["count1_03"], Mac5_data["pressure2_03"]));
            Mac5_pressure2_av[4] = parseFloat(All_Average(Mac5_data["count1_04"], Mac5_data["pressure2_04"])); Mac5_pressure2_av[5] = parseFloat(All_Average(Mac5_data["count1_05"], Mac5_data["pressure2_05"]));
            Mac5_pressure2_av[6] = parseFloat(All_Average(Mac5_data["count1_06"], Mac5_data["pressure2_06"])); Mac5_pressure2_av[7] = parseFloat(All_Average(Mac5_data["count1_07"], Mac5_data["pressure2_07"]));
            Mac5_pressure2_av[8] = parseFloat(All_Average(Mac5_data["count1_08"], Mac5_data["pressure2_08"])); Mac5_pressure2_av[9] = parseFloat(All_Average(Mac5_data["count1_09"], Mac5_data["pressure2_09"]));
            Mac5_pressure2_av[10] = parseFloat(All_Average(Mac5_data["count1_10"], Mac5_data["pressure2_10"])); Mac5_pressure2_av[11] = parseFloat(All_Average(Mac5_data["count1_11"], Mac5_data["pressure2_11"]));
            Mac5_pressure2_av[12] = parseFloat(All_Average(Mac5_data["count1_12"], Mac5_data["pressure2_12"])); Mac5_pressure2_av[13] = parseFloat(All_Average(Mac5_data["count1_13"], Mac5_data["pressure2_13"]));
            Mac5_pressure2_av[14] = parseFloat(All_Average(Mac5_data["count1_14"], Mac5_data["pressure2_14"])); Mac5_pressure2_av[15] = parseFloat(All_Average(Mac5_data["count1_15"], Mac5_data["pressure2_15"]));
            Mac5_pressure2_av[16] = parseFloat(All_Average(Mac5_data["count1_16"], Mac5_data["pressure2_16"])); Mac5_pressure2_av[17] = parseFloat(All_Average(Mac5_data["count1_17"], Mac5_data["pressure2_17"]));
            Mac5_pressure2_av[18] = parseFloat(All_Average(Mac5_data["count1_18"], Mac5_data["pressure2_18"])); Mac5_pressure2_av[19] = parseFloat(All_Average(Mac5_data["count1_19"], Mac5_data["pressure2_19"]));
            Mac5_pressure2_av[20] = parseFloat(All_Average(Mac5_data["count1_20"], Mac5_data["pressure2_20"])); Mac5_pressure2_av[21] = parseFloat(All_Average(Mac5_data["count1_21"], Mac5_data["pressure2_21"]));
            Mac5_pressure2_av[22] = parseFloat(All_Average(Mac5_data["count1_22"], Mac5_data["pressure2_22"])); Mac5_pressure2_av[23] = parseFloat(All_Average(Mac5_data["count1_23"], Mac5_data["pressure2_23"]));
          }
          if (machine_no == 6) {
            if (0 == Time_h) {
              Mac6_data["count1_00"]++;
              Mac6_data["temp1_00"] += parseFloat(dataObj.Product_Temp);
              Mac6_data["vac1_00"] += parseFloat(dataObj.Product_Vacuum);
              Mac6_data["pressure1_00"] += parseFloat(dataObj.Product_Pressure);
              Mac6_data["pressure2_00"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (1 == Time_h) {
              Mac6_data["count1_01"]++;
              Mac6_data["temp1_01"] += parseFloat(dataObj.Product_Temp);
              Mac6_data["vac1_01"] += parseFloat(dataObj.Product_Vacuum);
              Mac6_data["pressure1_01"] += parseFloat(dataObj.Product_Pressure);
              Mac6_data["pressure2_01"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (2 == Time_h) {
              Mac6_data["count1_02"]++;
              Mac6_data["temp1_02"] += parseFloat(dataObj.Product_Temp);
              Mac6_data["vac1_02"] += parseFloat(dataObj.Product_Vacuum);
              Mac6_data["pressure1_02"] += parseFloat(dataObj.Product_Pressure);
              Mac6_data["pressure2_02"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (3 == Time_h) {
              Mac6_data["count1_03"]++;
              Mac6_data["temp1_03"] += parseFloat(dataObj.Product_Temp);
              Mac6_data["vac1_03"] += parseFloat(dataObj.Product_Vacuum);
              Mac6_data["pressure1_03"] += parseFloat(dataObj.Product_Pressure);
              Mac6_data["pressure2_03"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (4 == Time_h) {
              Mac6_data["count1_04"]++;
              Mac6_data["temp1_04"] += parseFloat(dataObj.Product_Temp);
              Mac6_data["vac1_04"] += parseFloat(dataObj.Product_Vacuum);
              Mac6_data["pressure1_04"] += parseFloat(dataObj.Product_Pressure);
              Mac6_data["pressure2_04"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (5 == Time_h) {
              Mac6_data["count1_05"]++;
              Mac6_data["temp1_05"] += parseFloat(dataObj.Product_Temp);
              Mac6_data["vac1_05"] += parseFloat(dataObj.Product_Vacuum);
              Mac6_data["pressure1_05"] += parseFloat(dataObj.Product_Pressure);
              Mac6_data["pressure2_05"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (6 == Time_h) {
              Mac6_data["count1_06"]++;
              Mac6_data["temp1_06"] += parseFloat(dataObj.Product_Temp);
              Mac6_data["vac1_06"] += parseFloat(dataObj.Product_Vacuum);
              Mac6_data["pressure1_06"] += parseFloat(dataObj.Product_Pressure);
              Mac6_data["pressure2_06"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (7 == Time_h) {
              Mac6_data["count1_07"]++;
              Mac6_data["temp1_07"] += parseFloat(dataObj.Product_Temp);
              Mac6_data["vac1_07"] += parseFloat(dataObj.Product_Vacuum);
              Mac6_data["pressure1_07"] += parseFloat(dataObj.Product_Pressure);
              Mac6_data["pressure2_07"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (8 == Time_h) {
              Mac6_data["count1_08"]++;
              Mac6_data["temp1_08"] += parseFloat(dataObj.Product_Temp);
              Mac6_data["vac1_08"] += parseFloat(dataObj.Product_Vacuum);
              Mac6_data["pressure1_08"] += parseFloat(dataObj.Product_Pressure);
              Mac6_data["pressure2_08"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (9 == Time_h) {
              Mac6_data["count1_09"]++;
              Mac6_data["temp1_09"] += parseFloat(dataObj.Product_Temp);
              Mac6_data["vac1_09"] += parseFloat(dataObj.Product_Vacuum);
              Mac6_data["pressure1_09"] += parseFloat(dataObj.Product_Pressure);
              Mac6_data["pressure2_09"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (10 == Time_h) {
              Mac6_data["count1_10"]++;
              Mac6_data["temp1_10"] += parseFloat(dataObj.Product_Temp);
              Mac6_data["vac1_10"] += parseFloat(dataObj.Product_Vacuum);
              Mac6_data["pressure1_10"] += parseFloat(dataObj.Product_Pressure);
              Mac6_data["pressure2_10"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (11 == Time_h) {
              Mac6_data["count1_11"]++;
              Mac6_data["temp1_11"] += parseFloat(dataObj.Product_Temp);
              Mac6_data["vac1_11"] += parseFloat(dataObj.Product_Vacuum);
              Mac6_data["pressure1_11"] += parseFloat(dataObj.Product_Pressure);
              Mac6_data["pressure2_11"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (12 == Time_h) {
              Mac6_data["count1_12"]++;
              Mac6_data["temp1_12"] += parseFloat(dataObj.Product_Temp);
              Mac6_data["vac1_12"] += parseFloat(dataObj.Product_Vacuum);
              Mac6_data["pressure1_12"] += parseFloat(dataObj.Product_Pressure);
              Mac6_data["pressure2_12"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (13 == Time_h) {
              Mac6_data["count1_13"]++;
              Mac6_data["temp1_13"] += parseFloat(dataObj.Product_Temp);
              Mac6_data["vac1_13"] += parseFloat(dataObj.Product_Vacuum);
              Mac6_data["pressure1_13"] += parseFloat(dataObj.Product_Pressure);
              Mac6_data["pressure2_13"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (14 == Time_h) {
              Mac6_data["count1_14"]++;
              Mac6_data["temp1_14"] += parseFloat(dataObj.Product_Temp);
              Mac6_data["vac1_14"] += parseFloat(dataObj.Product_Vacuum);
              Mac6_data["pressure1_14"] += parseFloat(dataObj.Product_Pressure);
              Mac6_data["pressure2_14"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (15 == Time_h) {
              Mac6_data["count1_15"]++;
              Mac6_data["temp1_15"] += parseFloat(dataObj.Product_Temp);
              Mac6_data["vac1_15"] += parseFloat(dataObj.Product_Vacuum);
              Mac6_data["pressure1_15"] += parseFloat(dataObj.Product_Pressure);
              Mac6_data["pressure2_15"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (16 == Time_h) {
              Mac6_data["count1_16"]++;
              Mac6_data["temp1_16"] += parseFloat(dataObj.Product_Temp);
              Mac6_data["vac1_16"] += parseFloat(dataObj.Product_Vacuum);
              Mac6_data["pressure1_16"] += parseFloat(dataObj.Product_Pressure);
              Mac6_data["pressure2_16"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (17 == Time_h) {
              Mac6_data["count1_17"]++;
              Mac6_data["temp1_17"] += parseFloat(dataObj.Product_Temp);
              Mac6_data["vac1_17"] += parseFloat(dataObj.Product_Vacuum);
              Mac6_data["pressure1_17"] += parseFloat(dataObj.Product_Pressure);
              Mac6_data["pressure2_17"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (18 == Time_h) {
              Mac6_data["count1_18"]++;
              Mac6_data["temp1_18"] += parseFloat(dataObj.Product_Temp);
              Mac6_data["vac1_18"] += parseFloat(dataObj.Product_Vacuum);
              Mac6_data["pressure1_18"] += parseFloat(dataObj.Product_Pressure);
              Mac6_data["pressure2_18"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (19 == Time_h) {
              Mac6_data["count1_19"]++;
              Mac6_data["temp1_19"] += parseFloat(dataObj.Product_Temp);
              Mac6_data["vac1_19"] += parseFloat(dataObj.Product_Vacuum);
              Mac6_data["pressure1_19"] += parseFloat(dataObj.Product_Pressure);
              Mac6_data["pressure2_19"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (20 == Time_h) {
              Mac6_data["count1_20"]++;
              Mac6_data["temp1_20"] += parseFloat(dataObj.Product_Temp);
              Mac6_data["vac1_20"] += parseFloat(dataObj.Product_Vacuum);
              Mac6_data["pressure1_20"] += parseFloat(dataObj.Product_Pressure);
              Mac6_data["pressure2_20"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (21 == Time_h) {
              Mac6_data["count1_21"]++;
              Mac6_data["temp1_21"] += parseFloat(dataObj.Product_Temp);
              Mac6_data["vac1_21"] += parseFloat(dataObj.Product_Vacuum);
              Mac6_data["pressure1_21"] += parseFloat(dataObj.Product_Pressure);
              Mac6_data["pressure2_21"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (22 == Time_h) {
              Mac6_data["count1_22"]++;
              Mac6_data["temp1_22"] += parseFloat(dataObj.Product_Temp);
              Mac6_data["vac1_22"] += parseFloat(dataObj.Product_Vacuum);
              Mac6_data["pressure1_21"] += parseFloat(dataObj.Product_Pressure);
              Mac6_data["pressure2_21"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (Time_h == 23) {
              Mac6_data["count1_23"]++;
              Mac6_data["temp1_23"] += parseFloat(dataObj.Product_Temp);
              Mac6_data["vac1_23"] += parseFloat(dataObj.Product_Vacuum);
              Mac6_data["pressure1_21"] += parseFloat(dataObj.Product_Pressure);
              Mac6_data["pressure2_21"] += parseFloat(dataObj.Product_Pressure2);
            }
            Mac6_temp_av[0] = parseFloat(All_Average(Mac6_data["count1_00"], Mac6_data["temp1_00"])); Mac6_temp_av[1] = parseFloat(All_Average(Mac6_data["count1_01"], Mac6_data["temp1_01"]));
            Mac6_temp_av[2] = parseFloat(All_Average(Mac6_data["count1_02"], Mac6_data["temp1_02"])); Mac6_temp_av[3] = parseFloat(All_Average(Mac6_data["count1_03"], Mac6_data["temp1_03"]));
            Mac6_temp_av[4] = parseFloat(All_Average(Mac6_data["count1_04"], Mac6_data["temp1_04"])); Mac6_temp_av[5] = parseFloat(All_Average(Mac6_data["count1_05"], Mac6_data["temp1_05"]));
            Mac6_temp_av[6] = parseFloat(All_Average(Mac6_data["count1_06"], Mac6_data["temp1_06"])); Mac6_temp_av[7] = parseFloat(All_Average(Mac6_data["count1_07"], Mac6_data["temp1_07"]));
            Mac6_temp_av[8] = parseFloat(All_Average(Mac6_data["count1_08"], Mac6_data["temp1_08"])); Mac6_temp_av[9] = parseFloat(All_Average(Mac6_data["count1_09"], Mac6_data["temp1_09"]));
            Mac6_temp_av[10] = parseFloat(All_Average(Mac6_data["count1_10"], Mac6_data["temp1_10"])); Mac6_temp_av[11] = parseFloat(All_Average(Mac6_data["count1_11"], Mac6_data["temp1_11"]));
            Mac6_temp_av[12] = parseFloat(All_Average(Mac6_data["count1_12"], Mac6_data["temp1_12"])); Mac6_temp_av[13] = parseFloat(All_Average(Mac6_data["count1_13"], Mac6_data["temp1_13"]));
            Mac6_temp_av[14] = parseFloat(All_Average(Mac6_data["count1_14"], Mac6_data["temp1_14"])); Mac6_temp_av[15] = parseFloat(All_Average(Mac6_data["count1_15"], Mac6_data["temp1_15"]));
            Mac6_temp_av[16] = parseFloat(All_Average(Mac6_data["count1_16"], Mac6_data["temp1_16"])); Mac6_temp_av[17] = parseFloat(All_Average(Mac6_data["count1_17"], Mac6_data["temp1_17"]));
            Mac6_temp_av[18] = parseFloat(All_Average(Mac6_data["count1_18"], Mac6_data["temp1_18"])); Mac6_temp_av[19] = parseFloat(All_Average(Mac6_data["count1_19"], Mac6_data["temp1_19"]));
            Mac6_temp_av[20] = parseFloat(All_Average(Mac6_data["count1_20"], Mac6_data["temp1_20"])); Mac6_temp_av[21] = parseFloat(All_Average(Mac6_data["count1_21"], Mac6_data["temp1_21"]));
            Mac6_temp_av[22] = parseFloat(All_Average(Mac6_data["count1_22"], Mac6_data["temp1_22"])); Mac6_temp_av[23] = parseFloat(All_Average(Mac6_data["count1_23"], Mac6_data["temp1_23"]));

            Mac6_Vac_av[0] = parseFloat(All_Average(Mac6_data["count1_00"], Mac6_data["vac1_00"])); Mac6_Vac_av[1] = parseFloat(All_Average(Mac6_data["count1_01"], Mac6_data["vac1_01"]));
            Mac6_Vac_av[2] = parseFloat(All_Average(Mac6_data["count1_02"], Mac6_data["vac1_02"])); Mac6_Vac_av[3] = parseFloat(All_Average(Mac6_data["count1_03"], Mac6_data["vac1_03"]));
            Mac6_Vac_av[4] = parseFloat(All_Average(Mac6_data["count1_04"], Mac6_data["vac1_04"])); Mac6_Vac_av[5] = parseFloat(All_Average(Mac6_data["count1_05"], Mac6_data["vac1_05"]));
            Mac6_Vac_av[6] = parseFloat(All_Average(Mac6_data["count1_06"], Mac6_data["vac1_06"])); Mac6_Vac_av[7] = parseFloat(All_Average(Mac6_data["count1_07"], Mac6_data["vac1_07"]));
            Mac6_Vac_av[8] = parseFloat(All_Average(Mac6_data["count1_08"], Mac6_data["vac1_08"])); Mac6_Vac_av[9] = parseFloat(All_Average(Mac6_data["count1_09"], Mac6_data["vac1_09"]));
            Mac6_Vac_av[10] = parseFloat(All_Average(Mac6_data["count1_10"], Mac6_data["vac1_10"])); Mac6_Vac_av[11] = parseFloat(All_Average(Mac6_data["count1_11"], Mac6_data["vac1_11"]));
            Mac6_Vac_av[12] = parseFloat(All_Average(Mac6_data["count1_12"], Mac6_data["vac1_12"])); Mac6_Vac_av[13] = parseFloat(All_Average(Mac6_data["count1_13"], Mac6_data["vac1_13"]));
            Mac6_Vac_av[14] = parseFloat(All_Average(Mac6_data["count1_14"], Mac6_data["vac1_14"])); Mac6_Vac_av[15] = parseFloat(All_Average(Mac6_data["count1_15"], Mac6_data["vac1_15"]));
            Mac6_Vac_av[16] = parseFloat(All_Average(Mac6_data["count1_16"], Mac6_data["vac1_16"])); Mac6_Vac_av[17] = parseFloat(All_Average(Mac6_data["count1_17"], Mac6_data["vac1_17"]));
            Mac6_Vac_av[18] = parseFloat(All_Average(Mac6_data["count1_18"], Mac6_data["vac1_18"])); Mac6_Vac_av[19] = parseFloat(All_Average(Mac6_data["count1_19"], Mac6_data["vac1_19"]));
            Mac6_Vac_av[20] = parseFloat(All_Average(Mac6_data["count1_20"], Mac6_data["vac1_20"])); Mac6_Vac_av[21] = parseFloat(All_Average(Mac6_data["count1_21"], Mac6_data["vac1_21"]));
            Mac6_Vac_av[22] = parseFloat(All_Average(Mac6_data["count1_22"], Mac6_data["vac1_22"])); Mac6_Vac_av[23] = parseFloat(All_Average(Mac6_data["count1_23"], Mac6_data["vac1_23"]));

            Mac6_pressure1_av[0] = parseFloat(All_Average(Mac6_data["count1_00"], Mac6_data["pressure1_00"])); Mac6_pressure1_av[1] = parseFloat(All_Average(Mac6_data["count1_01"], Mac6_data["pressure1_01"]));
            Mac6_pressure1_av[2] = parseFloat(All_Average(Mac6_data["count1_02"], Mac6_data["pressure1_02"])); Mac6_pressure1_av[3] = parseFloat(All_Average(Mac6_data["count1_03"], Mac6_data["pressure1_03"]));
            Mac6_pressure1_av[4] = parseFloat(All_Average(Mac6_data["count1_04"], Mac6_data["pressure1_04"])); Mac6_pressure1_av[5] = parseFloat(All_Average(Mac6_data["count1_05"], Mac6_data["pressure1_05"]));
            Mac6_pressure1_av[6] = parseFloat(All_Average(Mac6_data["count1_06"], Mac6_data["pressure1_06"])); Mac6_pressure1_av[7] = parseFloat(All_Average(Mac6_data["count1_07"], Mac6_data["pressure1_07"]));
            Mac6_pressure1_av[8] = parseFloat(All_Average(Mac6_data["count1_08"], Mac6_data["pressure1_08"])); Mac6_pressure1_av[9] = parseFloat(All_Average(Mac6_data["count1_09"], Mac6_data["pressure1_09"]));
            Mac6_pressure1_av[10] = parseFloat(All_Average(Mac6_data["count1_10"], Mac6_data["pressure1_10"])); Mac6_pressure1_av[11] = parseFloat(All_Average(Mac6_data["count1_11"], Mac6_data["pressure1_11"]));
            Mac6_pressure1_av[12] = parseFloat(All_Average(Mac6_data["count1_12"], Mac6_data["pressure1_12"])); Mac6_pressure1_av[13] = parseFloat(All_Average(Mac6_data["count1_13"], Mac6_data["pressure1_13"]));
            Mac6_pressure1_av[14] = parseFloat(All_Average(Mac6_data["count1_14"], Mac6_data["pressure1_14"])); Mac6_pressure1_av[15] = parseFloat(All_Average(Mac6_data["count1_15"], Mac6_data["pressure1_15"]));
            Mac6_pressure1_av[16] = parseFloat(All_Average(Mac6_data["count1_16"], Mac6_data["pressure1_16"])); Mac6_pressure1_av[17] = parseFloat(All_Average(Mac6_data["count1_17"], Mac6_data["pressure1_17"]));
            Mac6_pressure1_av[18] = parseFloat(All_Average(Mac6_data["count1_18"], Mac6_data["pressure1_18"])); Mac6_pressure1_av[19] = parseFloat(All_Average(Mac6_data["count1_19"], Mac6_data["pressure1_19"]));
            Mac6_pressure1_av[20] = parseFloat(All_Average(Mac6_data["count1_20"], Mac6_data["pressure1_20"])); Mac6_pressure1_av[21] = parseFloat(All_Average(Mac6_data["count1_21"], Mac6_data["pressure1_21"]));
            Mac6_pressure1_av[22] = parseFloat(All_Average(Mac6_data["count1_22"], Mac6_data["pressure1_22"])); Mac6_pressure1_av[23] = parseFloat(All_Average(Mac6_data["count1_23"], Mac6_data["pressure1_23"]));

            Mac6_pressure2_av[0] = parseFloat(All_Average(Mac6_data["count1_00"], Mac6_data["pressure2_00"])); Mac6_pressure2_av[1] = parseFloat(All_Average(Mac6_data["count1_01"], Mac6_data["pressure2_01"]));
            Mac6_pressure2_av[2] = parseFloat(All_Average(Mac6_data["count1_02"], Mac6_data["pressure2_02"])); Mac6_pressure2_av[3] = parseFloat(All_Average(Mac6_data["count1_03"], Mac6_data["pressure2_03"]));
            Mac6_pressure2_av[4] = parseFloat(All_Average(Mac6_data["count1_04"], Mac6_data["pressure2_04"])); Mac6_pressure2_av[5] = parseFloat(All_Average(Mac6_data["count1_05"], Mac6_data["pressure2_05"]));
            Mac6_pressure2_av[6] = parseFloat(All_Average(Mac6_data["count1_06"], Mac6_data["pressure2_06"])); Mac6_pressure2_av[7] = parseFloat(All_Average(Mac6_data["count1_07"], Mac6_data["pressure2_07"]));
            Mac6_pressure2_av[8] = parseFloat(All_Average(Mac6_data["count1_08"], Mac6_data["pressure2_08"])); Mac6_pressure2_av[9] = parseFloat(All_Average(Mac6_data["count1_09"], Mac6_data["pressure2_09"]));
            Mac6_pressure2_av[10] = parseFloat(All_Average(Mac6_data["count1_10"], Mac6_data["pressure2_10"])); Mac6_pressure2_av[11] = parseFloat(All_Average(Mac6_data["count1_11"], Mac6_data["pressure2_11"]));
            Mac6_pressure2_av[12] = parseFloat(All_Average(Mac6_data["count1_12"], Mac6_data["pressure2_12"])); Mac6_pressure2_av[13] = parseFloat(All_Average(Mac6_data["count1_13"], Mac6_data["pressure2_13"]));
            Mac6_pressure2_av[14] = parseFloat(All_Average(Mac6_data["count1_14"], Mac6_data["pressure2_14"])); Mac6_pressure2_av[15] = parseFloat(All_Average(Mac6_data["count1_15"], Mac6_data["pressure2_15"]));
            Mac6_pressure2_av[16] = parseFloat(All_Average(Mac6_data["count1_16"], Mac6_data["pressure2_16"])); Mac6_pressure2_av[17] = parseFloat(All_Average(Mac6_data["count1_17"], Mac6_data["pressure2_17"]));
            Mac6_pressure2_av[18] = parseFloat(All_Average(Mac6_data["count1_18"], Mac6_data["pressure2_18"])); Mac6_pressure2_av[19] = parseFloat(All_Average(Mac6_data["count1_19"], Mac6_data["pressure2_19"]));
            Mac6_pressure2_av[20] = parseFloat(All_Average(Mac6_data["count1_20"], Mac6_data["pressure2_20"])); Mac6_pressure2_av[21] = parseFloat(All_Average(Mac6_data["count1_21"], Mac6_data["pressure2_21"]));
            Mac6_pressure2_av[22] = parseFloat(All_Average(Mac6_data["count1_22"], Mac6_data["pressure2_22"])); Mac6_pressure2_av[23] = parseFloat(All_Average(Mac6_data["count1_23"], Mac6_data["pressure2_23"]));
          }
          if (machine_no == 7) {
            if (0 == Time_h) {
              Mac7_data["count1_00"]++;
              Mac7_data["temp1_00"] += parseFloat(dataObj.Product_Temp);
              Mac7_data["vac1_00"] += parseFloat(dataObj.Product_Vacuum);
              Mac7_data["pressure1_00"] += parseFloat(dataObj.Product_Pressure);
              Mac7_data["pressure2_00"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (1 == Time_h) {
              Mac7_data["count1_01"]++;
              Mac7_data["temp1_01"] += parseFloat(dataObj.Product_Temp);
              Mac7_data["vac1_01"] += parseFloat(dataObj.Product_Vacuum);
              Mac7_data["pressure1_01"] += parseFloat(dataObj.Product_Pressure);
              Mac7_data["pressure2_01"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (2 == Time_h) {
              Mac7_data["count1_02"]++;
              Mac7_data["temp1_02"] += parseFloat(dataObj.Product_Temp);
              Mac7_data["vac1_02"] += parseFloat(dataObj.Product_Vacuum);
              Mac7_data["pressure1_02"] += parseFloat(dataObj.Product_Pressure);
              Mac7_data["pressure2_02"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (3 == Time_h) {
              Mac7_data["count1_03"]++;
              Mac7_data["temp1_03"] += parseFloat(dataObj.Product_Temp);
              Mac7_data["vac1_03"] += parseFloat(dataObj.Product_Vacuum);
              Mac7_data["pressure1_03"] += parseFloat(dataObj.Product_Pressure);
              Mac7_data["pressure2_03"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (4 == Time_h) {
              Mac7_data["count1_04"]++;
              Mac7_data["temp1_04"] += parseFloat(dataObj.Product_Temp);
              Mac7_data["vac1_04"] += parseFloat(dataObj.Product_Vacuum);
              Mac7_data["pressure1_04"] += parseFloat(dataObj.Product_Pressure);
              Mac7_data["pressure2_04"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (5 == Time_h) {
              Mac7_data["count1_05"]++;
              Mac7_data["temp1_05"] += parseFloat(dataObj.Product_Temp);
              Mac7_data["vac1_05"] += parseFloat(dataObj.Product_Vacuum);
              Mac7_data["pressure1_05"] += parseFloat(dataObj.Product_Pressure);
              Mac7_data["pressure2_05"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (6 == Time_h) {
              Mac7_data["count1_06"]++;
              Mac7_data["temp1_06"] += parseFloat(dataObj.Product_Temp);
              Mac7_data["vac1_06"] += parseFloat(dataObj.Product_Vacuum);
              Mac7_data["pressure1_06"] += parseFloat(dataObj.Product_Pressure);
              Mac7_data["pressure2_06"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (7 == Time_h) {
              Mac7_data["count1_07"]++;
              Mac7_data["temp1_07"] += parseFloat(dataObj.Product_Temp);
              Mac7_data["vac1_07"] += parseFloat(dataObj.Product_Vacuum);
              Mac7_data["pressure1_07"] += parseFloat(dataObj.Product_Pressure);
              Mac7_data["pressure2_07"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (8 == Time_h) {
              Mac7_data["count1_08"]++;
              Mac7_data["temp1_08"] += parseFloat(dataObj.Product_Temp);
              Mac7_data["vac1_08"] += parseFloat(dataObj.Product_Vacuum);
              Mac7_data["pressure1_08"] += parseFloat(dataObj.Product_Pressure);
              Mac7_data["pressure2_08"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (9 == Time_h) {
              Mac7_data["count1_09"]++;
              Mac7_data["temp1_09"] += parseFloat(dataObj.Product_Temp);
              Mac7_data["vac1_09"] += parseFloat(dataObj.Product_Vacuum);
              Mac7_data["pressure1_09"] += parseFloat(dataObj.Product_Pressure);
              Mac7_data["pressure2_09"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (10 == Time_h) {
              Mac7_data["count1_10"]++;
              Mac7_data["temp1_10"] += parseFloat(dataObj.Product_Temp);
              Mac7_data["vac1_10"] += parseFloat(dataObj.Product_Vacuum);
              Mac7_data["pressure1_10"] += parseFloat(dataObj.Product_Pressure);
              Mac7_data["pressure2_10"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (11 == Time_h) {
              Mac7_data["count1_11"]++;
              Mac7_data["temp1_11"] += parseFloat(dataObj.Product_Temp);
              Mac7_data["vac1_11"] += parseFloat(dataObj.Product_Vacuum);
              Mac7_data["pressure1_11"] += parseFloat(dataObj.Product_Pressure);
              Mac7_data["pressure2_11"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (12 == Time_h) {
              Mac7_data["count1_12"]++;
              Mac7_data["temp1_12"] += parseFloat(dataObj.Product_Temp);
              Mac7_data["vac1_12"] += parseFloat(dataObj.Product_Vacuum);
              Mac7_data["pressure1_12"] += parseFloat(dataObj.Product_Pressure);
              Mac7_data["pressure2_12"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (13 == Time_h) {
              Mac7_data["count1_13"]++;
              Mac7_data["temp1_13"] += parseFloat(dataObj.Product_Temp);
              Mac7_data["vac1_13"] += parseFloat(dataObj.Product_Vacuum);
              Mac7_data["pressure1_13"] += parseFloat(dataObj.Product_Pressure);
              Mac7_data["pressure2_13"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (14 == Time_h) {
              Mac7_data["count1_14"]++;
              Mac7_data["temp1_14"] += parseFloat(dataObj.Product_Temp);
              Mac7_data["vac1_14"] += parseFloat(dataObj.Product_Vacuum);
              Mac7_data["pressure1_14"] += parseFloat(dataObj.Product_Pressure);
              Mac7_data["pressure2_14"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (15 == Time_h) {
              Mac7_data["count1_15"]++;
              Mac7_data["temp1_15"] += parseFloat(dataObj.Product_Temp);
              Mac7_data["vac1_15"] += parseFloat(dataObj.Product_Vacuum);
              Mac7_data["pressure1_15"] += parseFloat(dataObj.Product_Pressure);
              Mac7_data["pressure2_15"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (16 == Time_h) {
              Mac7_data["count1_16"]++;
              Mac7_data["temp1_16"] += parseFloat(dataObj.Product_Temp);
              Mac7_data["vac1_16"] += parseFloat(dataObj.Product_Vacuum);
              Mac7_data["pressure1_16"] += parseFloat(dataObj.Product_Pressure);
              Mac7_data["pressure2_16"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (17 == Time_h) {
              Mac7_data["count1_17"]++;
              Mac7_data["temp1_17"] += parseFloat(dataObj.Product_Temp);
              Mac7_data["vac1_17"] += parseFloat(dataObj.Product_Vacuum);
              Mac7_data["pressure1_17"] += parseFloat(dataObj.Product_Pressure);
              Mac7_data["pressure2_17"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (18 == Time_h) {
              Mac7_data["count1_18"]++;
              Mac7_data["temp1_18"] += parseFloat(dataObj.Product_Temp);
              Mac7_data["vac1_18"] += parseFloat(dataObj.Product_Vacuum);
              Mac7_data["pressure1_18"] += parseFloat(dataObj.Product_Pressure);
              Mac7_data["pressure2_18"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (19 == Time_h) {
              Mac7_data["count1_19"]++;
              Mac7_data["temp1_19"] += parseFloat(dataObj.Product_Temp);
              Mac7_data["vac1_19"] += parseFloat(dataObj.Product_Vacuum);
              Mac7_data["pressure1_19"] += parseFloat(dataObj.Product_Pressure);
              Mac7_data["pressure2_19"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (20 == Time_h) {
              Mac7_data["count1_20"]++;
              Mac7_data["temp1_20"] += parseFloat(dataObj.Product_Temp);
              Mac7_data["vac1_20"] += parseFloat(dataObj.Product_Vacuum);
              Mac7_data["pressure1_20"] += parseFloat(dataObj.Product_Pressure);
              Mac7_data["pressure2_20"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (21 == Time_h) {
              Mac7_data["count1_21"]++;
              Mac7_data["temp1_21"] += parseFloat(dataObj.Product_Temp);
              Mac7_data["vac1_21"] += parseFloat(dataObj.Product_Vacuum);
              Mac7_data["pressure1_21"] += parseFloat(dataObj.Product_Pressure);
              Mac7_data["pressure2_21"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (22 == Time_h) {
              Mac7_data["count1_22"]++;
              Mac7_data["temp1_22"] += parseFloat(dataObj.Product_Temp);
              Mac7_data["vac1_22"] += parseFloat(dataObj.Product_Vacuum);
              Mac7_data["pressure1_21"] += parseFloat(dataObj.Product_Pressure);
              Mac7_data["pressure2_21"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (Time_h == 23) {
              Mac7_data["count1_23"]++;
              Mac7_data["temp1_23"] += parseFloat(dataObj.Product_Temp);
              Mac7_data["vac1_23"] += parseFloat(dataObj.Product_Vacuum);
              Mac7_data["pressure1_21"] += parseFloat(dataObj.Product_Pressure);
              Mac7_data["pressure2_21"] += parseFloat(dataObj.Product_Pressure2);
            }
            Mac7_temp_av[0] = parseFloat(All_Average(Mac7_data["count1_00"], Mac7_data["temp1_00"])); Mac7_temp_av[1] = parseFloat(All_Average(Mac7_data["count1_01"], Mac7_data["temp1_01"]));
            Mac7_temp_av[2] = parseFloat(All_Average(Mac7_data["count1_02"], Mac7_data["temp1_02"])); Mac7_temp_av[3] = parseFloat(All_Average(Mac7_data["count1_03"], Mac7_data["temp1_03"]));
            Mac7_temp_av[4] = parseFloat(All_Average(Mac7_data["count1_04"], Mac7_data["temp1_04"])); Mac7_temp_av[5] = parseFloat(All_Average(Mac7_data["count1_05"], Mac7_data["temp1_05"]));
            Mac7_temp_av[6] = parseFloat(All_Average(Mac7_data["count1_06"], Mac7_data["temp1_06"])); Mac7_temp_av[7] = parseFloat(All_Average(Mac7_data["count1_07"], Mac7_data["temp1_07"]));
            Mac7_temp_av[8] = parseFloat(All_Average(Mac7_data["count1_08"], Mac7_data["temp1_08"])); Mac7_temp_av[9] = parseFloat(All_Average(Mac7_data["count1_09"], Mac7_data["temp1_09"]));
            Mac7_temp_av[10] = parseFloat(All_Average(Mac7_data["count1_10"], Mac7_data["temp1_10"])); Mac7_temp_av[11] = parseFloat(All_Average(Mac7_data["count1_11"], Mac7_data["temp1_11"]));
            Mac7_temp_av[12] = parseFloat(All_Average(Mac7_data["count1_12"], Mac7_data["temp1_12"])); Mac7_temp_av[13] = parseFloat(All_Average(Mac7_data["count1_13"], Mac7_data["temp1_13"]));
            Mac7_temp_av[14] = parseFloat(All_Average(Mac7_data["count1_14"], Mac7_data["temp1_14"])); Mac7_temp_av[15] = parseFloat(All_Average(Mac7_data["count1_15"], Mac7_data["temp1_15"]));
            Mac7_temp_av[16] = parseFloat(All_Average(Mac7_data["count1_16"], Mac7_data["temp1_16"])); Mac7_temp_av[17] = parseFloat(All_Average(Mac7_data["count1_17"], Mac7_data["temp1_17"]));
            Mac7_temp_av[18] = parseFloat(All_Average(Mac7_data["count1_18"], Mac7_data["temp1_18"])); Mac7_temp_av[19] = parseFloat(All_Average(Mac7_data["count1_19"], Mac7_data["temp1_19"]));
            Mac7_temp_av[20] = parseFloat(All_Average(Mac7_data["count1_20"], Mac7_data["temp1_20"])); Mac7_temp_av[21] = parseFloat(All_Average(Mac7_data["count1_21"], Mac7_data["temp1_21"]));
            Mac7_temp_av[22] = parseFloat(All_Average(Mac7_data["count1_22"], Mac7_data["temp1_22"])); Mac7_temp_av[23] = parseFloat(All_Average(Mac7_data["count1_23"], Mac7_data["temp1_23"]));

            Mac7_Vac_av[0] = parseFloat(All_Average(Mac7_data["count1_00"], Mac7_data["vac1_00"])); Mac7_Vac_av[1] = parseFloat(All_Average(Mac7_data["count1_01"], Mac7_data["vac1_01"]));
            Mac7_Vac_av[2] = parseFloat(All_Average(Mac7_data["count1_02"], Mac7_data["vac1_02"])); Mac7_Vac_av[3] = parseFloat(All_Average(Mac7_data["count1_03"], Mac7_data["vac1_03"]));
            Mac7_Vac_av[4] = parseFloat(All_Average(Mac7_data["count1_04"], Mac7_data["vac1_04"])); Mac7_Vac_av[5] = parseFloat(All_Average(Mac7_data["count1_05"], Mac7_data["vac1_05"]));
            Mac7_Vac_av[6] = parseFloat(All_Average(Mac7_data["count1_06"], Mac7_data["vac1_06"])); Mac7_Vac_av[7] = parseFloat(All_Average(Mac7_data["count1_07"], Mac7_data["vac1_07"]));
            Mac7_Vac_av[8] = parseFloat(All_Average(Mac7_data["count1_08"], Mac7_data["vac1_08"])); Mac7_Vac_av[9] = parseFloat(All_Average(Mac7_data["count1_09"], Mac7_data["vac1_09"]));
            Mac7_Vac_av[10] = parseFloat(All_Average(Mac7_data["count1_10"], Mac7_data["vac1_10"])); Mac7_Vac_av[11] = parseFloat(All_Average(Mac7_data["count1_11"], Mac7_data["vac1_11"]));
            Mac7_Vac_av[12] = parseFloat(All_Average(Mac7_data["count1_12"], Mac7_data["vac1_12"])); Mac7_Vac_av[13] = parseFloat(All_Average(Mac7_data["count1_13"], Mac7_data["vac1_13"]));
            Mac7_Vac_av[14] = parseFloat(All_Average(Mac7_data["count1_14"], Mac7_data["vac1_14"])); Mac7_Vac_av[15] = parseFloat(All_Average(Mac7_data["count1_15"], Mac7_data["vac1_15"]));
            Mac7_Vac_av[16] = parseFloat(All_Average(Mac7_data["count1_16"], Mac7_data["vac1_16"])); Mac7_Vac_av[17] = parseFloat(All_Average(Mac7_data["count1_17"], Mac7_data["vac1_17"]));
            Mac7_Vac_av[18] = parseFloat(All_Average(Mac7_data["count1_18"], Mac7_data["vac1_18"])); Mac7_Vac_av[19] = parseFloat(All_Average(Mac7_data["count1_19"], Mac7_data["vac1_19"]));
            Mac7_Vac_av[20] = parseFloat(All_Average(Mac7_data["count1_20"], Mac7_data["vac1_20"])); Mac7_Vac_av[21] = parseFloat(All_Average(Mac7_data["count1_21"], Mac7_data["vac1_21"]));
            Mac7_Vac_av[22] = parseFloat(All_Average(Mac7_data["count1_22"], Mac7_data["vac1_22"])); Mac7_Vac_av[23] = parseFloat(All_Average(Mac7_data["count1_23"], Mac7_data["vac1_23"]));

            Mac7_pressure1_av[0] = parseFloat(All_Average(Mac7_data["count1_00"], Mac7_data["pressure1_00"])); Mac7_pressure1_av[1] = parseFloat(All_Average(Mac7_data["count1_01"], Mac7_data["pressure1_01"]));
            Mac7_pressure1_av[2] = parseFloat(All_Average(Mac7_data["count1_02"], Mac7_data["pressure1_02"])); Mac7_pressure1_av[3] = parseFloat(All_Average(Mac7_data["count1_03"], Mac7_data["pressure1_03"]));
            Mac7_pressure1_av[4] = parseFloat(All_Average(Mac7_data["count1_04"], Mac7_data["pressure1_04"])); Mac7_pressure1_av[5] = parseFloat(All_Average(Mac7_data["count1_05"], Mac7_data["pressure1_05"]));
            Mac7_pressure1_av[6] = parseFloat(All_Average(Mac7_data["count1_06"], Mac7_data["pressure1_06"])); Mac7_pressure1_av[7] = parseFloat(All_Average(Mac7_data["count1_07"], Mac7_data["pressure1_07"]));
            Mac7_pressure1_av[8] = parseFloat(All_Average(Mac7_data["count1_08"], Mac7_data["pressure1_08"])); Mac7_pressure1_av[9] = parseFloat(All_Average(Mac7_data["count1_09"], Mac7_data["pressure1_09"]));
            Mac7_pressure1_av[10] = parseFloat(All_Average(Mac7_data["count1_10"], Mac7_data["pressure1_10"])); Mac7_pressure1_av[11] = parseFloat(All_Average(Mac7_data["count1_11"], Mac7_data["pressure1_11"]));
            Mac7_pressure1_av[12] = parseFloat(All_Average(Mac7_data["count1_12"], Mac7_data["pressure1_12"])); Mac7_pressure1_av[13] = parseFloat(All_Average(Mac7_data["count1_13"], Mac7_data["pressure1_13"]));
            Mac7_pressure1_av[14] = parseFloat(All_Average(Mac7_data["count1_14"], Mac7_data["pressure1_14"])); Mac7_pressure1_av[15] = parseFloat(All_Average(Mac7_data["count1_15"], Mac7_data["pressure1_15"]));
            Mac7_pressure1_av[16] = parseFloat(All_Average(Mac7_data["count1_16"], Mac7_data["pressure1_16"])); Mac7_pressure1_av[17] = parseFloat(All_Average(Mac7_data["count1_17"], Mac7_data["pressure1_17"]));
            Mac7_pressure1_av[18] = parseFloat(All_Average(Mac7_data["count1_18"], Mac7_data["pressure1_18"])); Mac7_pressure1_av[19] = parseFloat(All_Average(Mac7_data["count1_19"], Mac7_data["pressure1_19"]));
            Mac7_pressure1_av[20] = parseFloat(All_Average(Mac7_data["count1_20"], Mac7_data["pressure1_20"])); Mac7_pressure1_av[21] = parseFloat(All_Average(Mac7_data["count1_21"], Mac7_data["pressure1_21"]));
            Mac7_pressure1_av[22] = parseFloat(All_Average(Mac7_data["count1_22"], Mac7_data["pressure1_22"])); Mac7_pressure1_av[23] = parseFloat(All_Average(Mac7_data["count1_23"], Mac7_data["pressure1_23"]));

            Mac7_pressure2_av[0] = parseFloat(All_Average(Mac7_data["count1_00"], Mac7_data["pressure2_00"])); Mac7_pressure2_av[1] = parseFloat(All_Average(Mac7_data["count1_01"], Mac7_data["pressure2_01"]));
            Mac7_pressure2_av[2] = parseFloat(All_Average(Mac7_data["count1_02"], Mac7_data["pressure2_02"])); Mac7_pressure2_av[3] = parseFloat(All_Average(Mac7_data["count1_03"], Mac7_data["pressure2_03"]));
            Mac7_pressure2_av[4] = parseFloat(All_Average(Mac7_data["count1_04"], Mac7_data["pressure2_04"])); Mac7_pressure2_av[5] = parseFloat(All_Average(Mac7_data["count1_05"], Mac7_data["pressure2_05"]));
            Mac7_pressure2_av[6] = parseFloat(All_Average(Mac7_data["count1_06"], Mac7_data["pressure2_06"])); Mac7_pressure2_av[7] = parseFloat(All_Average(Mac7_data["count1_07"], Mac7_data["pressure2_07"]));
            Mac7_pressure2_av[8] = parseFloat(All_Average(Mac7_data["count1_08"], Mac7_data["pressure2_08"])); Mac7_pressure2_av[9] = parseFloat(All_Average(Mac7_data["count1_09"], Mac7_data["pressure2_09"]));
            Mac7_pressure2_av[10] = parseFloat(All_Average(Mac7_data["count1_10"], Mac7_data["pressure2_10"])); Mac7_pressure2_av[11] = parseFloat(All_Average(Mac7_data["count1_11"], Mac7_data["pressure2_11"]));
            Mac7_pressure2_av[12] = parseFloat(All_Average(Mac7_data["count1_12"], Mac7_data["pressure2_12"])); Mac7_pressure2_av[13] = parseFloat(All_Average(Mac7_data["count1_13"], Mac7_data["pressure2_13"]));
            Mac7_pressure2_av[14] = parseFloat(All_Average(Mac7_data["count1_14"], Mac7_data["pressure2_14"])); Mac7_pressure2_av[15] = parseFloat(All_Average(Mac7_data["count1_15"], Mac7_data["pressure2_15"]));
            Mac7_pressure2_av[16] = parseFloat(All_Average(Mac7_data["count1_16"], Mac7_data["pressure2_16"])); Mac7_pressure2_av[17] = parseFloat(All_Average(Mac7_data["count1_17"], Mac7_data["pressure2_17"]));
            Mac7_pressure2_av[18] = parseFloat(All_Average(Mac7_data["count1_18"], Mac7_data["pressure2_18"])); Mac7_pressure2_av[19] = parseFloat(All_Average(Mac7_data["count1_19"], Mac7_data["pressure2_19"]));
            Mac7_pressure2_av[20] = parseFloat(All_Average(Mac7_data["count1_20"], Mac7_data["pressure2_20"])); Mac7_pressure2_av[21] = parseFloat(All_Average(Mac7_data["count1_21"], Mac7_data["pressure2_21"]));
            Mac7_pressure2_av[22] = parseFloat(All_Average(Mac7_data["count1_22"], Mac7_data["pressure2_22"])); Mac7_pressure2_av[23] = parseFloat(All_Average(Mac7_data["count1_23"], Mac7_data["pressure2_23"]));
          }
          if (machine_no == 8) {
            if (0 == Time_h) {
              Mac8_data["count1_00"]++;
              Mac8_data["temp1_00"] += parseFloat(dataObj.Product_Temp);
              Mac8_data["vac1_00"] += parseFloat(dataObj.Product_Vacuum);
              Mac8_data["pressure1_00"] += parseFloat(dataObj.Product_Pressure);
              Mac8_data["pressure2_00"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (1 == Time_h) {
              Mac8_data["count1_01"]++;
              Mac8_data["temp1_01"] += parseFloat(dataObj.Product_Temp);
              Mac8_data["vac1_01"] += parseFloat(dataObj.Product_Vacuum);
              Mac8_data["pressure1_01"] += parseFloat(dataObj.Product_Pressure);
              Mac8_data["pressure2_01"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (2 == Time_h) {
              Mac8_data["count1_02"]++;
              Mac8_data["temp1_02"] += parseFloat(dataObj.Product_Temp);
              Mac8_data["vac1_02"] += parseFloat(dataObj.Product_Vacuum);
              Mac8_data["pressure1_02"] += parseFloat(dataObj.Product_Pressure);
              Mac8_data["pressure2_02"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (3 == Time_h) {
              Mac8_data["count1_03"]++;
              Mac8_data["temp1_03"] += parseFloat(dataObj.Product_Temp);
              Mac8_data["vac1_03"] += parseFloat(dataObj.Product_Vacuum);
              Mac8_data["pressure1_03"] += parseFloat(dataObj.Product_Pressure);
              Mac8_data["pressure2_03"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (4 == Time_h) {
              Mac8_data["count1_04"]++;
              Mac8_data["temp1_04"] += parseFloat(dataObj.Product_Temp);
              Mac8_data["vac1_04"] += parseFloat(dataObj.Product_Vacuum);
              Mac8_data["pressure1_04"] += parseFloat(dataObj.Product_Pressure);
              Mac8_data["pressure2_04"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (5 == Time_h) {
              Mac8_data["count1_05"]++;
              Mac8_data["temp1_05"] += parseFloat(dataObj.Product_Temp);
              Mac8_data["vac1_05"] += parseFloat(dataObj.Product_Vacuum);
              Mac8_data["pressure1_05"] += parseFloat(dataObj.Product_Pressure);
              Mac8_data["pressure2_05"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (6 == Time_h) {
              Mac8_data["count1_06"]++;
              Mac8_data["temp1_06"] += parseFloat(dataObj.Product_Temp);
              Mac8_data["vac1_06"] += parseFloat(dataObj.Product_Vacuum);
              Mac8_data["pressure1_06"] += parseFloat(dataObj.Product_Pressure);
              Mac8_data["pressure2_06"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (7 == Time_h) {
              Mac8_data["count1_07"]++;
              Mac8_data["temp1_07"] += parseFloat(dataObj.Product_Temp);
              Mac8_data["vac1_07"] += parseFloat(dataObj.Product_Vacuum);
              Mac8_data["pressure1_07"] += parseFloat(dataObj.Product_Pressure);
              Mac8_data["pressure2_07"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (8 == Time_h) {
              Mac8_data["count1_08"]++;
              Mac8_data["temp1_08"] += parseFloat(dataObj.Product_Temp);
              Mac8_data["vac1_08"] += parseFloat(dataObj.Product_Vacuum);
              Mac8_data["pressure1_08"] += parseFloat(dataObj.Product_Pressure);
              Mac8_data["pressure2_08"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (9 == Time_h) {
              Mac8_data["count1_09"]++;
              Mac8_data["temp1_09"] += parseFloat(dataObj.Product_Temp);
              Mac8_data["vac1_09"] += parseFloat(dataObj.Product_Vacuum);
              Mac8_data["pressure1_09"] += parseFloat(dataObj.Product_Pressure);
              Mac8_data["pressure2_09"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (10 == Time_h) {
              Mac8_data["count1_10"]++;
              Mac8_data["temp1_10"] += parseFloat(dataObj.Product_Temp);
              Mac8_data["vac1_10"] += parseFloat(dataObj.Product_Vacuum);
              Mac8_data["pressure1_10"] += parseFloat(dataObj.Product_Pressure);
              Mac8_data["pressure2_10"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (11 == Time_h) {
              Mac8_data["count1_11"]++;
              Mac8_data["temp1_11"] += parseFloat(dataObj.Product_Temp);
              Mac8_data["vac1_11"] += parseFloat(dataObj.Product_Vacuum);
              Mac8_data["pressure1_11"] += parseFloat(dataObj.Product_Pressure);
              Mac8_data["pressure2_11"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (12 == Time_h) {
              Mac8_data["count1_12"]++;
              Mac8_data["temp1_12"] += parseFloat(dataObj.Product_Temp);
              Mac8_data["vac1_12"] += parseFloat(dataObj.Product_Vacuum);
              Mac8_data["pressure1_12"] += parseFloat(dataObj.Product_Pressure);
              Mac8_data["pressure2_12"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (13 == Time_h) {
              Mac8_data["count1_13"]++;
              Mac8_data["temp1_13"] += parseFloat(dataObj.Product_Temp);
              Mac8_data["vac1_13"] += parseFloat(dataObj.Product_Vacuum);
              Mac8_data["pressure1_13"] += parseFloat(dataObj.Product_Pressure);
              Mac8_data["pressure2_13"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (14 == Time_h) {
              Mac8_data["count1_14"]++;
              Mac8_data["temp1_14"] += parseFloat(dataObj.Product_Temp);
              Mac8_data["vac1_14"] += parseFloat(dataObj.Product_Vacuum);
              Mac8_data["pressure1_14"] += parseFloat(dataObj.Product_Pressure);
              Mac8_data["pressure2_14"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (15 == Time_h) {
              Mac8_data["count1_15"]++;
              Mac8_data["temp1_15"] += parseFloat(dataObj.Product_Temp);
              Mac8_data["vac1_15"] += parseFloat(dataObj.Product_Vacuum);
              Mac8_data["pressure1_15"] += parseFloat(dataObj.Product_Pressure);
              Mac8_data["pressure2_15"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (16 == Time_h) {
              Mac8_data["count1_16"]++;
              Mac8_data["temp1_16"] += parseFloat(dataObj.Product_Temp);
              Mac8_data["vac1_16"] += parseFloat(dataObj.Product_Vacuum);
              Mac8_data["pressure1_16"] += parseFloat(dataObj.Product_Pressure);
              Mac8_data["pressure2_16"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (17 == Time_h) {
              Mac8_data["count1_17"]++;
              Mac8_data["temp1_17"] += parseFloat(dataObj.Product_Temp);
              Mac8_data["vac1_17"] += parseFloat(dataObj.Product_Vacuum);
              Mac8_data["pressure1_17"] += parseFloat(dataObj.Product_Pressure);
              Mac8_data["pressure2_17"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (18 == Time_h) {
              Mac8_data["count1_18"]++;
              Mac8_data["temp1_18"] += parseFloat(dataObj.Product_Temp);
              Mac8_data["vac1_18"] += parseFloat(dataObj.Product_Vacuum);
              Mac8_data["pressure1_18"] += parseFloat(dataObj.Product_Pressure);
              Mac8_data["pressure2_18"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (19 == Time_h) {
              Mac8_data["count1_19"]++;
              Mac8_data["temp1_19"] += parseFloat(dataObj.Product_Temp);
              Mac8_data["vac1_19"] += parseFloat(dataObj.Product_Vacuum);
              Mac8_data["pressure1_19"] += parseFloat(dataObj.Product_Pressure);
              Mac8_data["pressure2_19"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (20 == Time_h) {
              Mac8_data["count1_20"]++;
              Mac8_data["temp1_20"] += parseFloat(dataObj.Product_Temp);
              Mac8_data["vac1_20"] += parseFloat(dataObj.Product_Vacuum);
              Mac8_data["pressure1_20"] += parseFloat(dataObj.Product_Pressure);
              Mac8_data["pressure2_20"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (21 == Time_h) {
              Mac8_data["count1_21"]++;
              Mac8_data["temp1_21"] += parseFloat(dataObj.Product_Temp);
              Mac8_data["vac1_21"] += parseFloat(dataObj.Product_Vacuum);
              Mac8_data["pressure1_21"] += parseFloat(dataObj.Product_Pressure);
              Mac8_data["pressure2_21"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (22 == Time_h) {
              Mac8_data["count1_22"]++;
              Mac8_data["temp1_22"] += parseFloat(dataObj.Product_Temp);
              Mac8_data["vac1_22"] += parseFloat(dataObj.Product_Vacuum);
              Mac8_data["pressure1_21"] += parseFloat(dataObj.Product_Pressure);
              Mac8_data["pressure2_21"] += parseFloat(dataObj.Product_Pressure2);
            }
            if (Time_h == 23) {
              Mac8_data["count1_23"]++;
              Mac8_data["temp1_23"] += parseFloat(dataObj.Product_Temp);
              Mac8_data["vac1_23"] += parseFloat(dataObj.Product_Vacuum);
              Mac8_data["pressure1_21"] += parseFloat(dataObj.Product_Pressure);
              Mac8_data["pressure2_21"] += parseFloat(dataObj.Product_Pressure2);
            }
            Mac8_temp_av[0] = parseFloat(All_Average(Mac8_data["count1_00"], Mac8_data["temp1_00"])); Mac8_temp_av[1] = parseFloat(All_Average(Mac8_data["count1_01"], Mac8_data["temp1_01"]));
            Mac8_temp_av[2] = parseFloat(All_Average(Mac8_data["count1_02"], Mac8_data["temp1_02"])); Mac8_temp_av[3] = parseFloat(All_Average(Mac8_data["count1_03"], Mac8_data["temp1_03"]));
            Mac8_temp_av[4] = parseFloat(All_Average(Mac8_data["count1_04"], Mac8_data["temp1_04"])); Mac8_temp_av[5] = parseFloat(All_Average(Mac8_data["count1_05"], Mac8_data["temp1_05"]));
            Mac8_temp_av[6] = parseFloat(All_Average(Mac8_data["count1_06"], Mac8_data["temp1_06"])); Mac8_temp_av[7] = parseFloat(All_Average(Mac8_data["count1_07"], Mac8_data["temp1_07"]));
            Mac8_temp_av[8] = parseFloat(All_Average(Mac8_data["count1_08"], Mac8_data["temp1_08"])); Mac8_temp_av[9] = parseFloat(All_Average(Mac8_data["count1_09"], Mac8_data["temp1_09"]));
            Mac8_temp_av[10] = parseFloat(All_Average(Mac8_data["count1_10"], Mac8_data["temp1_10"])); Mac8_temp_av[11] = parseFloat(All_Average(Mac8_data["count1_11"], Mac8_data["temp1_11"]));
            Mac8_temp_av[12] = parseFloat(All_Average(Mac8_data["count1_12"], Mac8_data["temp1_12"])); Mac8_temp_av[13] = parseFloat(All_Average(Mac8_data["count1_13"], Mac8_data["temp1_13"]));
            Mac8_temp_av[14] = parseFloat(All_Average(Mac8_data["count1_14"], Mac8_data["temp1_14"])); Mac8_temp_av[15] = parseFloat(All_Average(Mac8_data["count1_15"], Mac8_data["temp1_15"]));
            Mac8_temp_av[16] = parseFloat(All_Average(Mac8_data["count1_16"], Mac8_data["temp1_16"])); Mac8_temp_av[17] = parseFloat(All_Average(Mac8_data["count1_17"], Mac8_data["temp1_17"]));
            Mac8_temp_av[18] = parseFloat(All_Average(Mac8_data["count1_18"], Mac8_data["temp1_18"])); Mac8_temp_av[19] = parseFloat(All_Average(Mac8_data["count1_19"], Mac8_data["temp1_19"]));
            Mac8_temp_av[20] = parseFloat(All_Average(Mac8_data["count1_20"], Mac8_data["temp1_20"])); Mac8_temp_av[21] = parseFloat(All_Average(Mac8_data["count1_21"], Mac8_data["temp1_21"]));
            Mac8_temp_av[22] = parseFloat(All_Average(Mac8_data["count1_22"], Mac8_data["temp1_22"])); Mac8_temp_av[23] = parseFloat(All_Average(Mac8_data["count1_23"], Mac8_data["temp1_23"]));

            Mac8_Vac_av[0] = parseFloat(All_Average(Mac8_data["count1_00"], Mac8_data["vac1_00"])); Mac8_Vac_av[1] = parseFloat(All_Average(Mac8_data["count1_01"], Mac8_data["vac1_01"]));
            Mac8_Vac_av[2] = parseFloat(All_Average(Mac8_data["count1_02"], Mac8_data["vac1_02"])); Mac8_Vac_av[3] = parseFloat(All_Average(Mac8_data["count1_03"], Mac8_data["vac1_03"]));
            Mac8_Vac_av[4] = parseFloat(All_Average(Mac8_data["count1_04"], Mac8_data["vac1_04"])); Mac8_Vac_av[5] = parseFloat(All_Average(Mac8_data["count1_05"], Mac8_data["vac1_05"]));
            Mac8_Vac_av[6] = parseFloat(All_Average(Mac8_data["count1_06"], Mac8_data["vac1_06"])); Mac8_Vac_av[7] = parseFloat(All_Average(Mac8_data["count1_07"], Mac8_data["vac1_07"]));
            Mac8_Vac_av[8] = parseFloat(All_Average(Mac8_data["count1_08"], Mac8_data["vac1_08"])); Mac8_Vac_av[9] = parseFloat(All_Average(Mac8_data["count1_09"], Mac8_data["vac1_09"]));
            Mac8_Vac_av[10] = parseFloat(All_Average(Mac8_data["count1_10"], Mac8_data["vac1_10"])); Mac8_Vac_av[11] = parseFloat(All_Average(Mac8_data["count1_11"], Mac8_data["vac1_11"]));
            Mac8_Vac_av[12] = parseFloat(All_Average(Mac8_data["count1_12"], Mac8_data["vac1_12"])); Mac8_Vac_av[13] = parseFloat(All_Average(Mac8_data["count1_13"], Mac8_data["vac1_13"]));
            Mac8_Vac_av[14] = parseFloat(All_Average(Mac8_data["count1_14"], Mac8_data["vac1_14"])); Mac8_Vac_av[15] = parseFloat(All_Average(Mac8_data["count1_15"], Mac8_data["vac1_15"]));
            Mac8_Vac_av[16] = parseFloat(All_Average(Mac8_data["count1_16"], Mac8_data["vac1_16"])); Mac8_Vac_av[17] = parseFloat(All_Average(Mac8_data["count1_17"], Mac8_data["vac1_17"]));
            Mac8_Vac_av[18] = parseFloat(All_Average(Mac8_data["count1_18"], Mac8_data["vac1_18"])); Mac8_Vac_av[19] = parseFloat(All_Average(Mac8_data["count1_19"], Mac8_data["vac1_19"]));
            Mac8_Vac_av[20] = parseFloat(All_Average(Mac8_data["count1_20"], Mac8_data["vac1_20"])); Mac8_Vac_av[21] = parseFloat(All_Average(Mac8_data["count1_21"], Mac8_data["vac1_21"]));
            Mac8_Vac_av[22] = parseFloat(All_Average(Mac8_data["count1_22"], Mac8_data["vac1_22"])); Mac8_Vac_av[23] = parseFloat(All_Average(Mac8_data["count1_23"], Mac8_data["vac1_23"]));

            Mac8_pressure1_av[0] = parseFloat(All_Average(Mac8_data["count1_00"], Mac8_data["pressure1_00"])); Mac8_pressure1_av[1] = parseFloat(All_Average(Mac8_data["count1_01"], Mac8_data["pressure1_01"]));
            Mac8_pressure1_av[2] = parseFloat(All_Average(Mac8_data["count1_02"], Mac8_data["pressure1_02"])); Mac8_pressure1_av[3] = parseFloat(All_Average(Mac8_data["count1_03"], Mac8_data["pressure1_03"]));
            Mac8_pressure1_av[4] = parseFloat(All_Average(Mac8_data["count1_04"], Mac8_data["pressure1_04"])); Mac8_pressure1_av[5] = parseFloat(All_Average(Mac8_data["count1_05"], Mac8_data["pressure1_05"]));
            Mac8_pressure1_av[6] = parseFloat(All_Average(Mac8_data["count1_06"], Mac8_data["pressure1_06"])); Mac8_pressure1_av[7] = parseFloat(All_Average(Mac8_data["count1_07"], Mac8_data["pressure1_07"]));
            Mac8_pressure1_av[8] = parseFloat(All_Average(Mac8_data["count1_08"], Mac8_data["pressure1_08"])); Mac8_pressure1_av[9] = parseFloat(All_Average(Mac8_data["count1_09"], Mac8_data["pressure1_09"]));
            Mac8_pressure1_av[10] = parseFloat(All_Average(Mac8_data["count1_10"], Mac8_data["pressure1_10"])); Mac8_pressure1_av[11] = parseFloat(All_Average(Mac8_data["count1_11"], Mac8_data["pressure1_11"]));
            Mac8_pressure1_av[12] = parseFloat(All_Average(Mac8_data["count1_12"], Mac8_data["pressure1_12"])); Mac8_pressure1_av[13] = parseFloat(All_Average(Mac8_data["count1_13"], Mac8_data["pressure1_13"]));
            Mac8_pressure1_av[14] = parseFloat(All_Average(Mac8_data["count1_14"], Mac8_data["pressure1_14"])); Mac8_pressure1_av[15] = parseFloat(All_Average(Mac8_data["count1_15"], Mac8_data["pressure1_15"]));
            Mac8_pressure1_av[16] = parseFloat(All_Average(Mac8_data["count1_16"], Mac8_data["pressure1_16"])); Mac8_pressure1_av[17] = parseFloat(All_Average(Mac8_data["count1_17"], Mac8_data["pressure1_17"]));
            Mac8_pressure1_av[18] = parseFloat(All_Average(Mac8_data["count1_18"], Mac8_data["pressure1_18"])); Mac8_pressure1_av[19] = parseFloat(All_Average(Mac8_data["count1_19"], Mac8_data["pressure1_19"]));
            Mac8_pressure1_av[20] = parseFloat(All_Average(Mac8_data["count1_20"], Mac8_data["pressure1_20"])); Mac8_pressure1_av[21] = parseFloat(All_Average(Mac8_data["count1_21"], Mac8_data["pressure1_21"]));
            Mac8_pressure1_av[22] = parseFloat(All_Average(Mac8_data["count1_22"], Mac8_data["pressure1_22"])); Mac8_pressure1_av[23] = parseFloat(All_Average(Mac8_data["count1_23"], Mac8_data["pressure1_23"]));

            Mac8_pressure2_av[0] = parseFloat(All_Average(Mac8_data["count1_00"], Mac8_data["pressure2_00"])); Mac8_pressure2_av[1] = parseFloat(All_Average(Mac8_data["count1_01"], Mac8_data["pressure2_01"]));
            Mac8_pressure2_av[2] = parseFloat(All_Average(Mac8_data["count1_02"], Mac8_data["pressure2_02"])); Mac8_pressure2_av[3] = parseFloat(All_Average(Mac8_data["count1_03"], Mac8_data["pressure2_03"]));
            Mac8_pressure2_av[4] = parseFloat(All_Average(Mac8_data["count1_04"], Mac8_data["pressure2_04"])); Mac8_pressure2_av[5] = parseFloat(All_Average(Mac8_data["count1_05"], Mac8_data["pressure2_05"]));
            Mac8_pressure2_av[6] = parseFloat(All_Average(Mac8_data["count1_06"], Mac8_data["pressure2_06"])); Mac8_pressure2_av[7] = parseFloat(All_Average(Mac8_data["count1_07"], Mac8_data["pressure2_07"]));
            Mac8_pressure2_av[8] = parseFloat(All_Average(Mac8_data["count1_08"], Mac8_data["pressure2_08"])); Mac8_pressure2_av[9] = parseFloat(All_Average(Mac8_data["count1_09"], Mac8_data["pressure2_09"]));
            Mac8_pressure2_av[10] = parseFloat(All_Average(Mac8_data["count1_10"], Mac8_data["pressure2_10"])); Mac8_pressure2_av[11] = parseFloat(All_Average(Mac8_data["count1_11"], Mac8_data["pressure2_11"]));
            Mac8_pressure2_av[12] = parseFloat(All_Average(Mac8_data["count1_12"], Mac8_data["pressure2_12"])); Mac8_pressure2_av[13] = parseFloat(All_Average(Mac8_data["count1_13"], Mac8_data["pressure2_13"]));
            Mac8_pressure2_av[14] = parseFloat(All_Average(Mac8_data["count1_14"], Mac8_data["pressure2_14"])); Mac8_pressure2_av[15] = parseFloat(All_Average(Mac8_data["count1_15"], Mac8_data["pressure2_15"]));
            Mac8_pressure2_av[16] = parseFloat(All_Average(Mac8_data["count1_16"], Mac8_data["pressure2_16"])); Mac8_pressure2_av[17] = parseFloat(All_Average(Mac8_data["count1_17"], Mac8_data["pressure2_17"]));
            Mac8_pressure2_av[18] = parseFloat(All_Average(Mac8_data["count1_18"], Mac8_data["pressure2_18"])); Mac8_pressure2_av[19] = parseFloat(All_Average(Mac8_data["count1_19"], Mac8_data["pressure2_19"]));
            Mac8_pressure2_av[20] = parseFloat(All_Average(Mac8_data["count1_20"], Mac8_data["pressure2_20"])); Mac8_pressure2_av[21] = parseFloat(All_Average(Mac8_data["count1_21"], Mac8_data["pressure2_21"]));
            Mac8_pressure2_av[22] = parseFloat(All_Average(Mac8_data["count1_22"], Mac8_data["pressure2_22"])); Mac8_pressure2_av[23] = parseFloat(All_Average(Mac8_data["count1_23"], Mac8_data["pressure2_23"]));
          }
        }
        let mac1_table = []; let mac2_table = []; let mac3_table = []; let mac4_table = []; let mac5_table = []; let mac6_table = []; let mac7_table = []; let mac8_table = [];
        let Max_range; let Min_range;
        if (value == "Temp") {
          Max_range = 200; Min_range = 100;
          show_mac1.push(0, Mac1_temp_av[0], Mac1_temp_av[1], Mac1_temp_av[2], Mac1_temp_av[3], Mac1_temp_av[4], Mac1_temp_av[5], Mac1_temp_av[6], Mac1_temp_av[7], Mac1_temp_av[8], Mac1_temp_av[9]
            , Mac1_temp_av[10], Mac1_temp_av[11], Mac1_temp_av[12], Mac1_temp_av[13], Mac1_temp_av[14], Mac1_temp_av[15], Mac1_temp_av[16], Mac1_temp_av[17], Mac1_temp_av[18], Mac1_temp_av[19]
            , Mac1_temp_av[20], Mac1_temp_av[21], Mac1_temp_av[22], Mac1_temp_av[23]);
          show_mac2.push(0, Mac2_temp_av[0], Mac2_temp_av[1], Mac2_temp_av[2], Mac2_temp_av[3], Mac2_temp_av[4], Mac2_temp_av[5], Mac2_temp_av[6], Mac2_temp_av[7], Mac2_temp_av[8], Mac2_temp_av[9]
            , Mac2_temp_av[10], Mac2_temp_av[11], Mac2_temp_av[12], Mac2_temp_av[13], Mac2_temp_av[14], Mac2_temp_av[15], Mac2_temp_av[16], Mac2_temp_av[17], Mac2_temp_av[18], Mac2_temp_av[19]
            , Mac2_temp_av[20], Mac2_temp_av[21], Mac2_temp_av[22], Mac2_temp_av[23]);
          show_mac3.push(0, Mac3_temp_av[0], Mac3_temp_av[1], Mac3_temp_av[2], Mac3_temp_av[3], Mac3_temp_av[4], Mac3_temp_av[5], Mac3_temp_av[6], Mac3_temp_av[7], Mac3_temp_av[8], Mac3_temp_av[9]
            , Mac3_temp_av[10], Mac3_temp_av[11], Mac3_temp_av[12], Mac3_temp_av[13], Mac3_temp_av[14], Mac3_temp_av[15], Mac3_temp_av[16], Mac3_temp_av[17], Mac3_temp_av[18], Mac3_temp_av[19]
            , Mac3_temp_av[20], Mac3_temp_av[21], Mac3_temp_av[22], Mac3_temp_av[23]);
          show_mac4.push(0, Mac4_temp_av[0], Mac4_temp_av[1], Mac4_temp_av[2], Mac4_temp_av[3], Mac4_temp_av[4], Mac4_temp_av[5], Mac4_temp_av[6], Mac4_temp_av[7], Mac4_temp_av[8], Mac4_temp_av[9]
            , Mac4_temp_av[10], Mac4_temp_av[11], Mac4_temp_av[12], Mac4_temp_av[13], Mac4_temp_av[14], Mac4_temp_av[15], Mac4_temp_av[16], Mac4_temp_av[17], Mac4_temp_av[18], Mac4_temp_av[19]
            , Mac4_temp_av[20], Mac4_temp_av[21], Mac4_temp_av[22], Mac4_temp_av[23]);
          show_mac5.push(0, Mac5_temp_av[0], Mac5_temp_av[1], Mac5_temp_av[2], Mac5_temp_av[3], Mac5_temp_av[4], Mac5_temp_av[5], Mac5_temp_av[6], Mac5_temp_av[7], Mac5_temp_av[8], Mac5_temp_av[9]
            , Mac5_temp_av[10], Mac5_temp_av[11], Mac5_temp_av[12], Mac5_temp_av[13], Mac5_temp_av[14], Mac5_temp_av[15], Mac5_temp_av[16], Mac5_temp_av[17], Mac5_temp_av[18], Mac5_temp_av[19]
            , Mac5_temp_av[20], Mac5_temp_av[21], Mac5_temp_av[22], Mac5_temp_av[23]);
          show_mac6.push(0, Mac6_temp_av[0], Mac6_temp_av[1], Mac6_temp_av[2], Mac6_temp_av[3], Mac6_temp_av[4], Mac6_temp_av[5], Mac6_temp_av[6], Mac6_temp_av[7], Mac6_temp_av[8], Mac6_temp_av[9]
            , Mac6_temp_av[10], Mac6_temp_av[11], Mac6_temp_av[12], Mac6_temp_av[13], Mac6_temp_av[14], Mac6_temp_av[15], Mac6_temp_av[16], Mac6_temp_av[17], Mac6_temp_av[18], Mac6_temp_av[19]
            , Mac6_temp_av[20], Mac6_temp_av[21], Mac6_temp_av[22], Mac6_temp_av[23]);
          show_mac7.push(0, Mac7_temp_av[0], Mac7_temp_av[1], Mac7_temp_av[2], Mac7_temp_av[3], Mac7_temp_av[4], Mac7_temp_av[5], Mac7_temp_av[6], Mac7_temp_av[7], Mac7_temp_av[8], Mac7_temp_av[9]
            , Mac7_temp_av[10], Mac7_temp_av[11], Mac7_temp_av[12], Mac7_temp_av[13], Mac7_temp_av[14], Mac7_temp_av[15], Mac7_temp_av[16], Mac7_temp_av[17], Mac7_temp_av[18], Mac7_temp_av[19]
            , Mac7_temp_av[20], Mac7_temp_av[21], Mac7_temp_av[22], Mac7_temp_av[23]);
          show_mac8.push(0, Mac8_temp_av[0], Mac8_temp_av[1], Mac8_temp_av[2], Mac8_temp_av[3], Mac8_temp_av[4], Mac8_temp_av[5], Mac8_temp_av[6], Mac8_temp_av[7], Mac8_temp_av[8], Mac8_temp_av[9]
            , Mac8_temp_av[10], Mac8_temp_av[11], Mac8_temp_av[12], Mac8_temp_av[13], Mac8_temp_av[14], Mac8_temp_av[15], Mac8_temp_av[16], Mac8_temp_av[17], Mac8_temp_av[18], Mac8_temp_av[19]
            , Mac8_temp_av[20], Mac8_temp_av[21], Mac8_temp_av[22], Mac8_temp_av[23]);
        }
        if (value == "Vacuum") {
          Max_range = 8; Min_range = 3;
          show_mac1.push(0, Mac1_Vac_av[0], Mac1_Vac_av[1], Mac1_Vac_av[2], Mac1_Vac_av[3], Mac1_Vac_av[4], Mac1_Vac_av[5], Mac1_Vac_av[6], Mac1_Vac_av[7], Mac1_Vac_av[8], Mac1_Vac_av[9]
            , Mac1_Vac_av[10], Mac1_Vac_av[11], Mac1_Vac_av[12], Mac1_Vac_av[13], Mac1_Vac_av[14], Mac1_Vac_av[15], Mac1_Vac_av[16], Mac1_Vac_av[17], Mac1_Vac_av[18], Mac1_Vac_av[19]
            , Mac1_Vac_av[20], Mac1_Vac_av[21], Mac1_Vac_av[22], Mac1_Vac_av[23]);
          show_mac2.push(0, Mac2_Vac_av[0], Mac2_Vac_av[1], Mac2_Vac_av[2], Mac2_Vac_av[3], Mac2_Vac_av[4], Mac2_Vac_av[5], Mac2_Vac_av[6], Mac2_Vac_av[7], Mac2_Vac_av[8], Mac2_Vac_av[9]
            , Mac2_Vac_av[10], Mac2_Vac_av[11], Mac2_Vac_av[12], Mac2_Vac_av[13], Mac2_Vac_av[14], Mac2_Vac_av[15], Mac2_Vac_av[16], Mac2_Vac_av[17], Mac2_Vac_av[18], Mac2_Vac_av[19]
            , Mac2_Vac_av[20], Mac2_Vac_av[21], Mac2_Vac_av[22], Mac2_Vac_av[23]);
          show_mac3.push(0, Mac3_Vac_av[0], Mac3_Vac_av[1], Mac3_Vac_av[2], Mac3_Vac_av[3], Mac3_Vac_av[4], Mac3_Vac_av[5], Mac3_Vac_av[6], Mac3_Vac_av[7], Mac3_Vac_av[8], Mac3_Vac_av[9]
            , Mac3_Vac_av[10], Mac3_Vac_av[11], Mac3_Vac_av[12], Mac3_Vac_av[13], Mac3_Vac_av[14], Mac3_Vac_av[15], Mac3_Vac_av[16], Mac3_Vac_av[17], Mac3_Vac_av[18], Mac3_Vac_av[19]
            , Mac3_Vac_av[20], Mac3_Vac_av[21], Mac3_Vac_av[22], Mac3_Vac_av[23]);
          show_mac4.push(0, Mac4_Vac_av[0], Mac4_Vac_av[1], Mac4_Vac_av[2], Mac4_Vac_av[3], Mac4_Vac_av[4], Mac4_Vac_av[5], Mac4_Vac_av[6], Mac4_Vac_av[7], Mac4_Vac_av[8], Mac4_Vac_av[9]
            , Mac4_Vac_av[10], Mac4_Vac_av[11], Mac4_Vac_av[12], Mac4_Vac_av[13], Mac4_Vac_av[14], Mac4_Vac_av[15], Mac4_Vac_av[16], Mac4_Vac_av[17], Mac4_Vac_av[18], Mac4_Vac_av[19]
            , Mac4_Vac_av[20], Mac4_Vac_av[21], Mac4_Vac_av[22], Mac4_Vac_av[23]);
          show_mac5.push(0, Mac5_Vac_av[0], Mac5_Vac_av[1], Mac5_Vac_av[2], Mac5_Vac_av[3], Mac5_Vac_av[4], Mac5_Vac_av[5], Mac5_Vac_av[6], Mac5_Vac_av[7], Mac5_Vac_av[8], Mac5_Vac_av[9]
            , Mac5_Vac_av[10], Mac5_Vac_av[11], Mac5_Vac_av[12], Mac5_Vac_av[13], Mac5_Vac_av[14], Mac5_Vac_av[15], Mac5_Vac_av[16], Mac5_Vac_av[17], Mac5_Vac_av[18], Mac5_Vac_av[19]
            , Mac5_Vac_av[20], Mac5_Vac_av[21], Mac5_Vac_av[22], Mac5_Vac_av[23]);
          show_mac6.push(0, Mac6_Vac_av[0], Mac6_Vac_av[1], Mac6_Vac_av[2], Mac6_Vac_av[3], Mac6_Vac_av[4], Mac6_Vac_av[5], Mac6_Vac_av[6], Mac6_Vac_av[7], Mac6_Vac_av[8], Mac6_Vac_av[9]
            , Mac6_Vac_av[10], Mac6_Vac_av[11], Mac6_Vac_av[12], Mac6_Vac_av[13], Mac6_Vac_av[14], Mac6_Vac_av[15], Mac6_Vac_av[16], Mac6_Vac_av[17], Mac6_Vac_av[18], Mac6_Vac_av[19]
            , Mac6_Vac_av[20], Mac6_Vac_av[21], Mac6_Vac_av[22], Mac6_Vac_av[23]);
          show_mac7.push(0, Mac7_Vac_av[0], Mac7_Vac_av[1], Mac7_Vac_av[2], Mac7_Vac_av[3], Mac7_Vac_av[4], Mac7_Vac_av[5], Mac7_Vac_av[6], Mac7_Vac_av[7], Mac7_Vac_av[8], Mac7_Vac_av[9]
            , Mac7_Vac_av[10], Mac7_Vac_av[11], Mac7_Vac_av[12], Mac7_Vac_av[13], Mac7_Vac_av[14], Mac7_Vac_av[15], Mac7_Vac_av[16], Mac7_Vac_av[17], Mac7_Vac_av[18], Mac7_Vac_av[19]
            , Mac7_Vac_av[20], Mac7_Vac_av[21], Mac7_Vac_av[22], Mac7_Vac_av[23]);
          show_mac8.push(0, Mac8_Vac_av[0], Mac8_Vac_av[1], Mac8_Vac_av[2], Mac8_Vac_av[3], Mac8_Vac_av[4], Mac8_Vac_av[5], Mac8_Vac_av[6], Mac8_Vac_av[7], Mac8_Vac_av[8], Mac8_Vac_av[9]
            , Mac8_Vac_av[10], Mac8_Vac_av[11], Mac8_Vac_av[12], Mac8_Vac_av[13], Mac8_Vac_av[14], Mac8_Vac_av[15], Mac8_Vac_av[16], Mac8_Vac_av[17], Mac8_Vac_av[18], Mac8_Vac_av[19]
            , Mac8_Vac_av[20], Mac8_Vac_av[21], Mac8_Vac_av[22], Mac8_Vac_av[23]);
        }
        if (value == "Pressure1") {
          Max_range = 5; Min_range = 2;
          show_mac1.push(0, Mac1_pressure1_av[0], Mac1_pressure1_av[1], Mac1_pressure1_av[2], Mac1_pressure1_av[3], Mac1_pressure1_av[4], Mac1_pressure1_av[5], Mac1_pressure1_av[6], Mac1_pressure1_av[7], Mac1_pressure1_av[8], Mac1_pressure1_av[9]
            , Mac1_pressure1_av[10], Mac1_pressure1_av[11], Mac1_pressure1_av[12], Mac1_pressure1_av[13], Mac1_pressure1_av[14], Mac1_pressure1_av[15], Mac1_pressure1_av[16], Mac1_pressure1_av[17], Mac1_pressure1_av[18], Mac1_pressure1_av[19]
            , Mac1_pressure1_av[20], Mac1_pressure1_av[21], Mac1_pressure1_av[22], Mac1_pressure1_av[23]);
          show_mac2.push(0, Mac2_pressure1_av[0], Mac2_pressure1_av[1], Mac2_pressure1_av[2], Mac2_pressure1_av[3], Mac2_pressure1_av[4], Mac2_pressure1_av[5], Mac2_pressure1_av[6], Mac2_pressure1_av[7], Mac2_pressure1_av[8], Mac2_pressure1_av[9]
            , Mac2_pressure1_av[10], Mac2_pressure1_av[11], Mac2_pressure1_av[12], Mac2_pressure1_av[13], Mac2_pressure1_av[14], Mac2_pressure1_av[15], Mac2_pressure1_av[16], Mac2_pressure1_av[17], Mac2_pressure1_av[18], Mac2_pressure1_av[19]
            , Mac2_pressure1_av[20], Mac2_pressure1_av[21], Mac2_pressure1_av[22], Mac2_pressure1_av[23]);
          show_mac3.push(0, Mac3_pressure1_av[0], Mac3_pressure1_av[1], Mac3_pressure1_av[2], Mac3_pressure1_av[3], Mac3_pressure1_av[4], Mac3_pressure1_av[5], Mac3_pressure1_av[6], Mac3_pressure1_av[7], Mac3_pressure1_av[8], Mac3_pressure1_av[9]
            , Mac3_pressure1_av[10], Mac3_pressure1_av[11], Mac3_pressure1_av[12], Mac3_pressure1_av[13], Mac3_pressure1_av[14], Mac3_pressure1_av[15], Mac3_pressure1_av[16], Mac3_pressure1_av[17], Mac3_pressure1_av[18], Mac3_pressure1_av[19]
            , Mac3_pressure1_av[20], Mac3_pressure1_av[21], Mac3_pressure1_av[22], Mac3_pressure1_av[23]);
          show_mac4.push(0, Mac4_pressure1_av[0], Mac4_pressure1_av[1], Mac4_pressure1_av[2], Mac4_pressure1_av[3], Mac4_pressure1_av[4], Mac4_pressure1_av[5], Mac4_pressure1_av[6], Mac4_pressure1_av[7], Mac4_pressure1_av[8], Mac4_pressure1_av[9]
            , Mac4_pressure1_av[10], Mac4_pressure1_av[11], Mac4_pressure1_av[12], Mac4_pressure1_av[13], Mac4_pressure1_av[14], Mac4_pressure1_av[15], Mac4_pressure1_av[16], Mac4_pressure1_av[17], Mac4_pressure1_av[18], Mac4_pressure1_av[19]
            , Mac4_pressure1_av[20], Mac4_pressure1_av[21], Mac4_pressure1_av[22], Mac4_pressure1_av[23]);
          show_mac5.push(0, Mac5_pressure1_av[0], Mac5_pressure1_av[1], Mac5_pressure1_av[2], Mac5_pressure1_av[3], Mac5_pressure1_av[4], Mac5_pressure1_av[5], Mac5_pressure1_av[6], Mac5_pressure1_av[7], Mac5_pressure1_av[8], Mac5_pressure1_av[9]
            , Mac5_pressure1_av[10], Mac5_pressure1_av[11], Mac5_pressure1_av[12], Mac5_pressure1_av[13], Mac5_pressure1_av[14], Mac5_pressure1_av[15], Mac5_pressure1_av[16], Mac5_pressure1_av[17], Mac5_pressure1_av[18], Mac5_pressure1_av[19]
            , Mac5_pressure1_av[20], Mac5_pressure1_av[21], Mac5_pressure1_av[22], Mac5_pressure1_av[23]);
          show_mac6.push(0, Mac6_pressure1_av[0], Mac6_pressure1_av[1], Mac6_pressure1_av[2], Mac6_pressure1_av[3], Mac6_pressure1_av[4], Mac6_pressure1_av[5], Mac6_pressure1_av[6], Mac6_pressure1_av[7], Mac6_pressure1_av[8], Mac6_pressure1_av[9]
            , Mac6_pressure1_av[10], Mac6_pressure1_av[11], Mac6_pressure1_av[12], Mac6_pressure1_av[13], Mac6_pressure1_av[14], Mac6_pressure1_av[15], Mac6_pressure1_av[16], Mac6_pressure1_av[17], Mac6_pressure1_av[18], Mac6_pressure1_av[19]
            , Mac6_pressure1_av[20], Mac6_pressure1_av[21], Mac6_pressure1_av[22], Mac6_pressure1_av[23]);
          show_mac7.push(0, Mac7_pressure1_av[0], Mac7_pressure1_av[1], Mac7_pressure1_av[2], Mac7_pressure1_av[3], Mac7_pressure1_av[4], Mac7_pressure1_av[5], Mac7_pressure1_av[6], Mac7_pressure1_av[7], Mac7_pressure1_av[8], Mac7_pressure1_av[9]
            , Mac7_pressure1_av[10], Mac7_pressure1_av[11], Mac7_pressure1_av[12], Mac7_pressure1_av[13], Mac7_pressure1_av[14], Mac7_pressure1_av[15], Mac7_pressure1_av[16], Mac7_pressure1_av[17], Mac7_pressure1_av[18], Mac7_pressure1_av[19]
            , Mac7_pressure1_av[20], Mac7_pressure1_av[21], Mac7_pressure1_av[22], Mac7_pressure1_av[23]);
          show_mac8.push(0, Mac8_pressure1_av[0], Mac8_pressure1_av[1], Mac8_pressure1_av[2], Mac8_pressure1_av[3], Mac8_pressure1_av[4], Mac8_pressure1_av[5], Mac8_pressure1_av[6], Mac8_pressure1_av[7], Mac8_pressure1_av[8], Mac8_pressure1_av[9]
            , Mac8_pressure1_av[10], Mac8_pressure1_av[11], Mac8_pressure1_av[12], Mac8_pressure1_av[13], Mac8_pressure1_av[14], Mac8_pressure1_av[15], Mac8_pressure1_av[16], Mac8_pressure1_av[17], Mac8_pressure1_av[18], Mac8_pressure1_av[19]
            , Mac8_pressure1_av[20], Mac8_pressure1_av[21], Mac8_pressure1_av[22], Mac8_pressure1_av[23]);
        }
        if (value == "Pressure2") {
          Max_range = 8; Min_range = 4;
          show_mac1.push(0, Mac1_pressure2_av[0], Mac1_pressure2_av[1], Mac1_pressure2_av[2], Mac1_pressure2_av[3], Mac1_pressure2_av[4], Mac1_pressure2_av[5], Mac1_pressure2_av[6], Mac1_pressure2_av[7], Mac1_pressure2_av[8], Mac1_pressure2_av[9]
            , Mac1_pressure2_av[10], Mac1_pressure2_av[11], Mac1_pressure2_av[12], Mac1_pressure2_av[13], Mac1_pressure2_av[14], Mac1_pressure2_av[15], Mac1_pressure2_av[16], Mac1_pressure2_av[17], Mac1_pressure2_av[18], Mac1_pressure2_av[19]
            , Mac1_pressure2_av[20], Mac1_pressure2_av[21], Mac1_pressure2_av[22], Mac1_pressure2_av[23]);
          show_mac2.push(0, Mac2_pressure2_av[0], Mac2_pressure2_av[1], Mac2_pressure2_av[2], Mac2_pressure2_av[3], Mac2_pressure2_av[4], Mac2_pressure2_av[5], Mac2_pressure2_av[6], Mac2_pressure2_av[7], Mac2_pressure2_av[8], Mac2_pressure2_av[9]
            , Mac2_pressure2_av[10], Mac2_pressure2_av[11], Mac2_pressure2_av[12], Mac2_pressure2_av[13], Mac2_pressure2_av[14], Mac2_pressure2_av[15], Mac2_pressure2_av[16], Mac2_pressure2_av[17], Mac2_pressure2_av[18], Mac2_pressure2_av[19]
            , Mac2_pressure2_av[20], Mac2_pressure2_av[21], Mac2_pressure2_av[22], Mac2_pressure2_av[23]);
          show_mac3.push(0, Mac3_pressure2_av[0], Mac3_pressure2_av[1], Mac3_pressure2_av[2], Mac3_pressure2_av[3], Mac3_pressure2_av[4], Mac3_pressure2_av[5], Mac3_pressure2_av[6], Mac3_pressure2_av[7], Mac3_pressure2_av[8], Mac3_pressure2_av[9]
            , Mac3_pressure2_av[10], Mac3_pressure2_av[11], Mac3_pressure2_av[12], Mac3_pressure2_av[13], Mac3_pressure2_av[14], Mac3_pressure2_av[15], Mac3_pressure2_av[16], Mac3_pressure2_av[17], Mac3_pressure2_av[18], Mac3_pressure2_av[19]
            , Mac3_pressure2_av[20], Mac3_pressure2_av[21], Mac3_pressure2_av[22], Mac3_pressure2_av[23]);
          show_mac4.push(0, Mac4_pressure2_av[0], Mac4_pressure2_av[1], Mac4_pressure2_av[2], Mac4_pressure2_av[3], Mac4_pressure2_av[4], Mac4_pressure2_av[5], Mac4_pressure2_av[6], Mac4_pressure2_av[7], Mac4_pressure2_av[8], Mac4_pressure2_av[9]
            , Mac4_pressure2_av[10], Mac4_pressure2_av[11], Mac4_pressure2_av[12], Mac4_pressure2_av[13], Mac4_pressure2_av[14], Mac4_pressure2_av[15], Mac4_pressure2_av[16], Mac4_pressure2_av[17], Mac4_pressure2_av[18], Mac4_pressure2_av[19]
            , Mac4_pressure2_av[20], Mac4_pressure2_av[21], Mac4_pressure2_av[22], Mac4_pressure2_av[23]);
          show_mac5.push(0, Mac5_pressure2_av[0], Mac5_pressure2_av[1], Mac5_pressure2_av[2], Mac5_pressure2_av[3], Mac5_pressure2_av[4], Mac5_pressure2_av[5], Mac5_pressure2_av[6], Mac5_pressure2_av[7], Mac5_pressure2_av[8], Mac5_pressure2_av[9]
            , Mac5_pressure2_av[10], Mac5_pressure2_av[11], Mac5_pressure2_av[12], Mac5_pressure2_av[13], Mac5_pressure2_av[14], Mac5_pressure2_av[15], Mac5_pressure2_av[16], Mac5_pressure2_av[17], Mac5_pressure2_av[18], Mac5_pressure2_av[19]
            , Mac5_pressure2_av[20], Mac5_pressure2_av[21], Mac5_pressure2_av[22], Mac5_pressure2_av[23]);
          show_mac6.push(0, Mac6_pressure2_av[0], Mac6_pressure2_av[1], Mac6_pressure2_av[2], Mac6_pressure2_av[3], Mac6_pressure2_av[4], Mac6_pressure2_av[5], Mac6_pressure2_av[6], Mac6_pressure2_av[7], Mac6_pressure2_av[8], Mac6_pressure2_av[9]
            , Mac6_pressure2_av[10], Mac6_pressure2_av[11], Mac6_pressure2_av[12], Mac6_pressure2_av[13], Mac6_pressure2_av[14], Mac6_pressure2_av[15], Mac6_pressure2_av[16], Mac6_pressure2_av[17], Mac6_pressure2_av[18], Mac6_pressure2_av[19]
            , Mac6_pressure2_av[20], Mac6_pressure2_av[21], Mac6_pressure2_av[22], Mac6_pressure2_av[23]);
          show_mac7.push(0, Mac7_pressure2_av[0], Mac7_pressure2_av[1], Mac7_pressure2_av[2], Mac7_pressure2_av[3], Mac7_pressure2_av[4], Mac7_pressure2_av[5], Mac7_pressure2_av[6], Mac7_pressure2_av[7], Mac7_pressure2_av[8], Mac7_pressure2_av[9]
            , Mac7_pressure2_av[10], Mac7_pressure2_av[11], Mac7_pressure2_av[12], Mac7_pressure2_av[13], Mac7_pressure2_av[14], Mac7_pressure2_av[15], Mac7_pressure2_av[16], Mac7_pressure2_av[17], Mac7_pressure2_av[18], Mac7_pressure2_av[19]
            , Mac7_pressure2_av[20], Mac7_pressure2_av[21], Mac7_pressure2_av[22], Mac7_pressure2_av[23]);
          show_mac8.push(0, Mac8_pressure2_av[0], Mac8_pressure2_av[1], Mac8_pressure2_av[2], Mac8_pressure2_av[3], Mac8_pressure2_av[4], Mac8_pressure2_av[5], Mac8_pressure2_av[6], Mac8_pressure2_av[7], Mac8_pressure2_av[8], Mac8_pressure2_av[9]
            , Mac8_pressure2_av[10], Mac8_pressure2_av[11], Mac8_pressure2_av[12], Mac8_pressure2_av[13], Mac8_pressure2_av[14], Mac8_pressure2_av[15], Mac8_pressure2_av[16], Mac8_pressure2_av[17], Mac8_pressure2_av[18], Mac8_pressure2_av[19]
            , Mac8_pressure2_av[20], Mac8_pressure2_av[21], Mac8_pressure2_av[22], Mac8_pressure2_av[23]);
        }
        let set_range1 = []; let set_range2 = []; let loop_range;
        if (Time_start == "00:00:00") {
          Time_chart = ["23 P.M.", "0 A.M."];
          mac1_table.push(show_mac1[1]); mac2_table.push(show_mac2[1]); mac3_table.push(show_mac3[1]); mac4_table.push(show_mac4[1]);
          mac5_table.push(show_mac5[1]); mac6_table.push(show_mac6[1]); mac7_table.push(show_mac7[1]); mac8_table.push(show_mac8[1]);
        }
        if (Time_start == "01:00:00") {
          Time_chart = ["23 P.M.", "0 A.M.", "1 A.M."];
          mac1_table.push(show_mac1[1], show_mac1[2]);
          mac2_table.push(show_mac2[1], show_mac2[2]);
          mac3_table.push(show_mac3[1], show_mac3[2]);
          mac4_table.push(show_mac4[1], show_mac4[2]);
          mac5_table.push(show_mac5[1], show_mac5[2]);
          mac6_table.push(show_mac6[1], show_mac6[2]);
          mac7_table.push(show_mac7[1], show_mac7[2]);
          mac8_table.push(show_mac8[1], show_mac8[2]);
        }
        if (Time_start == "02:00:00") {
          Time_chart = ["23 P.M.", "0 A.M.", "1 A.M.", "2 A.M."];
          mac1_table.push(show_mac1[1], show_mac1[2], show_mac1[3]);
          mac2_table.push(show_mac2[1], show_mac2[2], show_mac2[3]);
          mac3_table.push(show_mac3[1], show_mac3[2], show_mac3[3]);
          mac4_table.push(show_mac4[1], show_mac4[2], show_mac4[3]);
          mac5_table.push(show_mac5[1], show_mac5[2], show_mac5[3]);
          mac6_table.push(show_mac6[1], show_mac6[2], show_mac6[3]);
          mac7_table.push(show_mac7[1], show_mac7[2], show_mac7[3]);
          mac8_table.push(show_mac8[1], show_mac8[2], show_mac8[3]);
        }
        if (Time_start == "03:00:00") {
          Time_chart = ["23 P.M.", "0 A.M.", "1 A.M.", "2 A.M.", "3 A.M."];
          mac1_table.push(show_mac1[1], show_mac1[2], show_mac1[3], show_mac1[4]);
          mac2_table.push(show_mac2[1], show_mac2[2], show_mac2[3], show_mac2[4]);
          mac3_table.push(show_mac3[1], show_mac3[2], show_mac3[3], show_mac3[4]);
          mac4_table.push(show_mac4[1], show_mac4[2], show_mac4[3], show_mac4[4]);
          mac5_table.push(show_mac5[1], show_mac5[2], show_mac5[3], show_mac5[4]);
          mac6_table.push(show_mac6[1], show_mac6[2], show_mac6[3], show_mac6[4]);
          mac7_table.push(show_mac7[1], show_mac7[2], show_mac7[3], show_mac7[4]);
          mac8_table.push(show_mac8[1], show_mac8[2], show_mac8[3], show_mac8[4]);
        }
        if (Time_start == "04:00:00") {
          Time_chart = ["23 P.M.", "0 A.M.", "1 A.M.", "2 A.M.", "3 A.M.", "4 A.M.",];
          mac1_table.push(show_mac1[1], show_mac1[2], show_mac1[3], show_mac1[4], show_mac1[5]);
          mac2_table.push(show_mac2[1], show_mac2[2], show_mac2[3], show_mac2[4], show_mac2[5]);
          mac3_table.push(show_mac3[1], show_mac3[2], show_mac3[3], show_mac3[4], show_mac3[5]);
          mac4_table.push(show_mac4[1], show_mac4[2], show_mac4[3], show_mac4[4], show_mac4[5]);
          mac5_table.push(show_mac5[1], show_mac5[2], show_mac5[3], show_mac5[4], show_mac5[5]);
          mac6_table.push(show_mac6[1], show_mac6[2], show_mac6[3], show_mac6[4], show_mac6[5]);
          mac7_table.push(show_mac7[1], show_mac7[2], show_mac7[3], show_mac7[4], show_mac7[5]);
          mac8_table.push(show_mac8[1], show_mac8[2], show_mac8[3], show_mac8[4], show_mac8[5]);
        }
        if (Time_start == "05:00:00") {
          Time_chart = ["23 P.M.", "0 A.M.", "1 A.M.", "2 A.M.", "3 A.M.", "4 A.M.", "5 A.M.",];
          mac1_table.push(show_mac1[1], show_mac1[2], show_mac1[3], show_mac1[4], show_mac1[5], show_mac1[6]);
          mac2_table.push(show_mac2[1], show_mac2[2], show_mac2[3], show_mac2[4], show_mac2[5], show_mac2[6]);
          mac3_table.push(show_mac3[1], show_mac3[2], show_mac3[3], show_mac3[4], show_mac3[5], show_mac3[6]);
          mac4_table.push(show_mac4[1], show_mac4[2], show_mac4[3], show_mac4[4], show_mac4[5], show_mac4[6]);
          mac5_table.push(show_mac5[1], show_mac5[2], show_mac5[3], show_mac5[4], show_mac5[5], show_mac5[6]);
          mac6_table.push(show_mac6[1], show_mac6[2], show_mac6[3], show_mac6[4], show_mac6[5], show_mac6[6]);
          mac7_table.push(show_mac7[1], show_mac7[2], show_mac7[3], show_mac7[4], show_mac7[5], show_mac7[6]);
          mac8_table.push(show_mac8[1], show_mac8[2], show_mac8[3], show_mac8[4], show_mac8[5], show_mac8[6]);
        }
        if (Time_start == "06:00:00") {
          Time_chart = [
            "23 P.M.", "0 A.M.", "1 A.M.", "2 A.M.", "3 A.M.", "4 A.M.", "5 A.M.", "6 A.M.",];
          mac1_table.push(show_mac1[1], show_mac1[2], show_mac1[3], show_mac1[4], show_mac1[5], show_mac1[6], show_mac1[7]);
          mac2_table.push(show_mac2[1], show_mac2[2], show_mac2[3], show_mac2[4], show_mac2[5], show_mac2[6], show_mac2[7]);
          mac3_table.push(show_mac3[1], show_mac3[2], show_mac3[3], show_mac3[4], show_mac3[5], show_mac3[6], show_mac3[7]);
          mac4_table.push(show_mac4[1], show_mac4[2], show_mac4[3], show_mac4[4], show_mac4[5], show_mac4[6], show_mac4[7]);
          mac5_table.push(show_mac5[1], show_mac5[2], show_mac5[3], show_mac5[4], show_mac5[5], show_mac5[6], show_mac5[7]);
          mac6_table.push(show_mac6[1], show_mac6[2], show_mac6[3], show_mac6[4], show_mac6[5], show_mac6[6], show_mac6[7]);
          mac7_table.push(show_mac7[1], show_mac7[2], show_mac7[3], show_mac7[4], show_mac7[5], show_mac7[6], show_mac7[7]);
          mac8_table.push(show_mac8[1], show_mac8[2], show_mac8[3], show_mac8[4], show_mac8[5], show_mac8[6], show_mac8[7]);
        }
        if (Time_start == "07:00:00") {
          Time_chart = [
            "23 P.M.", "0 A.M.", "1 A.M.", "2 A.M.", "3 A.M.", "4 A.M.", "5 A.M.", "6 A.M.", "7 A.M.",];
          mac1_table.push(show_mac1[1], show_mac1[2], show_mac1[3], show_mac1[4], show_mac1[5], show_mac1[6], show_mac1[7], show_mac1[8]);
          mac2_table.push(show_mac2[1], show_mac2[2], show_mac2[3], show_mac2[4], show_mac2[5], show_mac2[6], show_mac2[7], show_mac2[8]);
          mac3_table.push(show_mac3[1], show_mac3[2], show_mac3[3], show_mac3[4], show_mac3[5], show_mac3[6], show_mac3[7], show_mac3[8]);
          mac4_table.push(show_mac4[1], show_mac4[2], show_mac4[3], show_mac4[4], show_mac4[5], show_mac4[6], show_mac4[7], show_mac4[8]);
          mac5_table.push(show_mac5[1], show_mac5[2], show_mac5[3], show_mac5[4], show_mac5[5], show_mac5[6], show_mac5[7], show_mac5[8]);
          mac6_table.push(show_mac6[1], show_mac6[2], show_mac6[3], show_mac6[4], show_mac6[5], show_mac6[6], show_mac6[7], show_mac6[8]);
          mac7_table.push(show_mac7[1], show_mac7[2], show_mac7[3], show_mac7[4], show_mac7[5], show_mac7[6], show_mac7[7], show_mac7[8]);
          mac8_table.push(show_mac8[1], show_mac8[2], show_mac8[3], show_mac8[4], show_mac8[5], show_mac8[6], show_mac8[7], show_mac8[8]);
        }
        if (Time_start == "08:00:00") {
          Time_chart = ["23 P.M.", "0 A.M.", "1 A.M.", "2 A.M.", "3 A.M.", "4 A.M.", "5 A.M.", "6 A.M.", "7 A.M.", "8 A.M.",];
          mac1_table.push(show_mac1[1], show_mac1[2], show_mac1[3], show_mac1[4], show_mac1[5], show_mac1[6], show_mac1[7], show_mac1[8], show_mac1[9]);
          mac2_table.push(show_mac2[1], show_mac2[2], show_mac2[3], show_mac2[4], show_mac2[5], show_mac2[6], show_mac2[7], show_mac2[8], show_mac2[9]);
          mac3_table.push(show_mac3[1], show_mac3[2], show_mac3[3], show_mac3[4], show_mac3[5], show_mac3[6], show_mac3[7], show_mac3[8], show_mac3[9]);
          mac4_table.push(show_mac4[1], show_mac4[2], show_mac4[3], show_mac4[4], show_mac4[5], show_mac4[6], show_mac4[7], show_mac4[8], show_mac4[9]);
          mac5_table.push(show_mac5[1], show_mac5[2], show_mac5[3], show_mac5[4], show_mac5[5], show_mac5[6], show_mac5[7], show_mac5[8], show_mac5[9]);
          mac6_table.push(show_mac6[1], show_mac6[2], show_mac6[3], show_mac6[4], show_mac6[5], show_mac6[6], show_mac6[7], show_mac6[8], show_mac6[9]);
          mac7_table.push(show_mac7[1], show_mac7[2], show_mac7[3], show_mac7[4], show_mac7[5], show_mac7[6], show_mac7[7], show_mac7[8], show_mac7[9]);
          mac8_table.push(show_mac8[1], show_mac8[2], show_mac8[3], show_mac8[4], show_mac8[5], show_mac8[6], show_mac8[7], show_mac8[8], show_mac8[9]);
        }
        if (Time_start == "09:00:00") {
          Time_chart = [
            "23 P.M.", "0 A.M.", "1 A.M.", "2 A.M.", "3 A.M.",
            "4 A.M.", "5 A.M.", "6 A.M.", "7 A.M.", "8 A.M.", "9 A.M.",];
          mac1_table.push(show_mac1[1], show_mac1[2], show_mac1[3], show_mac1[4], show_mac1[5], show_mac1[6], show_mac1[7], show_mac1[8], show_mac1[9], show_mac1[10]);
          mac2_table.push(show_mac2[1], show_mac2[2], show_mac2[3], show_mac2[4], show_mac2[5], show_mac2[6], show_mac2[7], show_mac2[8], show_mac2[9], show_mac2[10]);
          mac3_table.push(show_mac3[1], show_mac3[2], show_mac3[3], show_mac3[4], show_mac3[5], show_mac3[6], show_mac3[7], show_mac3[8], show_mac3[9], show_mac3[10]);
          mac4_table.push(show_mac4[1], show_mac4[2], show_mac4[3], show_mac4[4], show_mac4[5], show_mac4[6], show_mac4[7], show_mac4[8], show_mac4[9], show_mac4[10]);
          mac5_table.push(show_mac5[1], show_mac5[2], show_mac5[3], show_mac5[4], show_mac5[5], show_mac5[6], show_mac5[7], show_mac5[8], show_mac5[9], show_mac5[10]);
          mac6_table.push(show_mac6[1], show_mac6[2], show_mac6[3], show_mac6[4], show_mac6[5], show_mac6[6], show_mac6[7], show_mac6[8], show_mac6[9], show_mac6[10]);
          mac7_table.push(show_mac7[1], show_mac7[2], show_mac7[3], show_mac7[4], show_mac7[5], show_mac7[6], show_mac7[7], show_mac7[8], show_mac7[9], show_mac7[10]);
          mac8_table.push(show_mac8[1], show_mac8[2], show_mac8[3], show_mac8[4], show_mac8[5], show_mac8[6], show_mac8[7], show_mac8[8], show_mac8[9], show_mac8[10]);
        }
        if (Time_start == "10:00:00") {
          Time_chart = [
            "23 P.M.", "0 A.M.", "1 A.M.", "2 A.M.", "3 A.M.", "4 A.M.",
            "5 A.M.", "6 A.M.", "7 A.M.", "8 A.M.", "9 A.M.", "10 A.M.",];
          mac1_table.push(show_mac1[1], show_mac1[2], show_mac1[3], show_mac1[4], show_mac1[5], show_mac1[6], show_mac1[7], show_mac1[8], show_mac1[9]
            , show_mac1[10], show_mac1[11]);
          mac2_table.push(show_mac2[1], show_mac2[2], show_mac2[3], show_mac2[4], show_mac2[5], show_mac2[6], show_mac2[7], show_mac2[8], show_mac2[9]
            , show_mac2[10], show_mac2[11]);
          mac3_table.push(show_mac3[1], show_mac3[2], show_mac3[3], show_mac3[4], show_mac3[5], show_mac3[6], show_mac3[7], show_mac3[8], show_mac3[9]
            , show_mac3[10], show_mac3[11]);
          mac4_table.push(show_mac4[1], show_mac4[2], show_mac4[3], show_mac4[4], show_mac4[5], show_mac4[6], show_mac4[7], show_mac4[8], show_mac4[9]
            , show_mac4[10], show_mac4[11]);
          mac5_table.push(show_mac5[1], show_mac5[2], show_mac5[3], show_mac5[4], show_mac5[5], show_mac5[6], show_mac5[7], show_mac5[8], show_mac5[9]
            , show_mac5[10], show_mac5[11]);
          mac6_table.push(show_mac6[1], show_mac6[2], show_mac6[3], show_mac6[4], show_mac6[5], show_mac6[6], show_mac6[7], show_mac6[8], show_mac6[9]
            , show_mac6[10], show_mac6[11]);
          mac7_table.push(show_mac7[1], show_mac7[2], show_mac7[3], show_mac7[4], show_mac7[5], show_mac7[6], show_mac7[7], show_mac7[8], show_mac7[9]
            , show_mac7[10], show_mac7[11]);
          mac8_table.push(show_mac8[1], show_mac8[2], show_mac8[3], show_mac8[4], show_mac8[5], show_mac8[6], show_mac8[7], show_mac8[8], show_mac8[9]
            , show_mac8[10], show_mac8[11]);
        }
        if (Time_start == "11:00:00") {
          Time_chart = [
            "23 P.M.", "0 A.M.", "1 A.M.", "2 A.M.", "3 A.M.", "4 A.M.",
            "5 A.M.", "6 A.M.", "7 A.M.", "8 A.M.", "9 A.M.", "10 A.M.", "11 A.M.",];
          mac1_table.push(show_mac1[1], show_mac1[2], show_mac1[3], show_mac1[4], show_mac1[5], show_mac1[6], show_mac1[7], show_mac1[8], show_mac1[9]
            , show_mac1[10], show_mac1[11], show_mac1[12]);
          mac2_table.push(show_mac2[1], show_mac2[2], show_mac2[3], show_mac2[4], show_mac2[5], show_mac2[6], show_mac2[7], show_mac2[8], show_mac2[9]
            , show_mac2[10], show_mac2[11], show_mac2[12]);
          mac3_table.push(show_mac3[1], show_mac3[2], show_mac3[3], show_mac3[4], show_mac3[5], show_mac3[6], show_mac3[7], show_mac3[8], show_mac3[9]
            , show_mac3[10], show_mac3[11], show_mac3[12]);
          mac4_table.push(show_mac4[1], show_mac4[2], show_mac4[3], show_mac4[4], show_mac4[5], show_mac4[6], show_mac4[7], show_mac4[8], show_mac4[9]
            , show_mac4[10], show_mac4[11], show_mac4[12]);
          mac5_table.push(show_mac5[1], show_mac5[2], show_mac5[3], show_mac5[4], show_mac5[5], show_mac5[6], show_mac5[7], show_mac5[8], show_mac5[9]
            , show_mac5[10], show_mac5[11], show_mac5[12]);
          mac6_table.push(show_mac6[1], show_mac6[2], show_mac6[3], show_mac6[4], show_mac6[5], show_mac6[6], show_mac6[7], show_mac6[8], show_mac6[9]
            , show_mac6[10], show_mac6[11], show_mac6[12]);
          mac7_table.push(show_mac7[1], show_mac7[2], show_mac7[3], show_mac7[4], show_mac7[5], show_mac7[6], show_mac7[7], show_mac7[8], show_mac7[9]
            , show_mac7[10], show_mac7[11], show_mac7[12]);
          mac8_table.push(show_mac8[1], show_mac8[2], show_mac8[3], show_mac8[4], show_mac8[5], show_mac8[6], show_mac8[7], show_mac8[8], show_mac8[9]
            , show_mac8[10], show_mac8[11], show_mac8[12]);
        }
        if (Time_start == "12:00:00") {
          Time_chart = [
            "23 P.M.", "0 A.M.", "1 A.M.", "2 A.M.", "3 A.M.", "4 A.M.", "5 A.M.",
            "6 A.M.", "7 A.M.", "8 A.M.", "9 A.M.", "10 A.M.", "11 A.M.", "12 P.M.",];
          mac1_table.push(show_mac1[1], show_mac1[2], show_mac1[3], show_mac1[4], show_mac1[5], show_mac1[6], show_mac1[7], show_mac1[8], show_mac1[9]
            , show_mac1[10], show_mac1[11], show_mac1[12], show_mac1[13]);
          mac2_table.push(show_mac2[1], show_mac2[2], show_mac2[3], show_mac2[4], show_mac2[5], show_mac2[6], show_mac2[7], show_mac2[8], show_mac2[9]
            , show_mac2[10], show_mac2[11], show_mac2[12], show_mac2[13]);
          mac3_table.push(show_mac3[1], show_mac3[2], show_mac3[3], show_mac3[4], show_mac3[5], show_mac3[6], show_mac3[7], show_mac3[8], show_mac3[9]
            , show_mac3[10], show_mac3[11], show_mac3[12], show_mac3[13]);
          mac4_table.push(show_mac4[1], show_mac4[2], show_mac4[3], show_mac4[4], show_mac4[5], show_mac4[6], show_mac4[7], show_mac4[8], show_mac4[9]
            , show_mac4[10], show_mac4[11], show_mac4[12], show_mac4[13]);
          mac5_table.push(show_mac5[1], show_mac5[2], show_mac5[3], show_mac5[4], show_mac5[5], show_mac5[6], show_mac5[7], show_mac5[8], show_mac5[9]
            , show_mac5[10], show_mac5[11], show_mac5[12], show_mac5[13]);
          mac6_table.push(show_mac6[1], show_mac6[2], show_mac6[3], show_mac6[4], show_mac6[5], show_mac6[6], show_mac6[7], show_mac6[8], show_mac6[9]
            , show_mac6[10], show_mac6[11], show_mac6[12], show_mac6[13]);
          mac7_table.push(show_mac7[1], show_mac7[2], show_mac7[3], show_mac7[4], show_mac7[5], show_mac7[6], show_mac7[7], show_mac7[8], show_mac7[9]
            , show_mac7[10], show_mac7[11], show_mac7[12], show_mac7[13]);
          mac8_table.push(show_mac8[1], show_mac8[2], show_mac8[3], show_mac8[4], show_mac8[5], show_mac8[6], show_mac8[7], show_mac8[8], show_mac8[9]
            , show_mac8[10], show_mac8[11], show_mac8[12], show_mac8[13]);
        }
        if (Time_start == "13:00:00") {
          Time_chart = [
            "23 P.M.", "0 A.M.", "1 A.M.", "2 A.M.", "3 A.M.", "4 A.M.", "5 A.M.",
            "6 A.M.", "7 A.M.", "8 A.M.", "9 A.M.", "10 A.M.", "11 A.M.", "12 P.M.", "1 P.M.",];
          mac1_table.push(show_mac1[1], show_mac1[2], show_mac1[3], show_mac1[4], show_mac1[5], show_mac1[6], show_mac1[7], show_mac1[8], show_mac1[9]
            , show_mac1[10], show_mac1[11], show_mac1[12], show_mac1[13], show_mac1[14]);
          mac2_table.push(show_mac2[1], show_mac2[2], show_mac2[3], show_mac2[4], show_mac2[5], show_mac2[6], show_mac2[7], show_mac2[8], show_mac2[9]
            , show_mac2[10], show_mac2[11], show_mac2[12], show_mac2[13], show_mac2[14]);
          mac3_table.push(show_mac3[1], show_mac3[2], show_mac3[3], show_mac3[4], show_mac3[5], show_mac3[6], show_mac3[7], show_mac3[8], show_mac3[9]
            , show_mac3[10], show_mac3[11], show_mac3[12], show_mac3[13], show_mac3[14]);
          mac4_table.push(show_mac4[1], show_mac4[2], show_mac4[3], show_mac4[4], show_mac4[5], show_mac4[6], show_mac4[7], show_mac4[8], show_mac4[9]
            , show_mac4[10], show_mac4[11], show_mac4[12], show_mac4[13], show_mac4[14]);
          mac5_table.push(show_mac5[1], show_mac5[2], show_mac5[3], show_mac5[4], show_mac5[5], show_mac5[6], show_mac5[7], show_mac5[8], show_mac5[9]
            , show_mac5[10], show_mac5[11], show_mac5[12], show_mac5[13], show_mac5[14]);
          mac6_table.push(show_mac6[1], show_mac6[2], show_mac6[3], show_mac6[4], show_mac6[5], show_mac6[6], show_mac6[7], show_mac6[8], show_mac6[9]
            , show_mac6[10], show_mac6[11], show_mac6[12], show_mac6[13], show_mac6[14]);
          mac7_table.push(show_mac7[1], show_mac7[2], show_mac7[3], show_mac7[4], show_mac7[5], show_mac7[6], show_mac7[7], show_mac7[8], show_mac7[9]
            , show_mac7[10], show_mac7[11], show_mac7[12], show_mac7[13], show_mac7[14]);
          mac8_table.push(show_mac8[1], show_mac8[2], show_mac8[3], show_mac8[4], show_mac8[5], show_mac8[6], show_mac8[7], show_mac8[8], show_mac8[9]
            , show_mac8[10], show_mac8[11], show_mac8[12], show_mac8[13], show_mac8[14]);
        }
        if (Time_start == "14:00:00") {
          Time_chart = [
            "23 P.M.", "0 A.M.", "1 A.M.", "2 A.M.", "3 A.M.", "4 A.M.", "5 A.M.",
            "6 A.M.", "7 A.M.", "8 A.M.", "9 A.M.", "10 A.M.", "11 A.M.", "12 P.M.", "1 P.M.", "2 P.M.",];
          mac1_table.push(show_mac1[1], show_mac1[2], show_mac1[3], show_mac1[4], show_mac1[5], show_mac1[6], show_mac1[7], show_mac1[8], show_mac1[9]
            , show_mac1[10], show_mac1[11], show_mac1[12], show_mac1[13], show_mac1[14], show_mac1[15]);
          mac2_table.push(show_mac2[1], show_mac2[2], show_mac2[3], show_mac2[4], show_mac2[5], show_mac2[6], show_mac2[7], show_mac2[8], show_mac2[9]
            , show_mac2[10], show_mac2[11], show_mac2[12], show_mac2[13], show_mac2[14], show_mac2[15]);
          mac3_table.push(show_mac3[1], show_mac3[2], show_mac3[3], show_mac3[4], show_mac3[5], show_mac3[6], show_mac3[7], show_mac3[8], show_mac3[9]
            , show_mac3[10], show_mac3[11], show_mac3[12], show_mac3[13], show_mac3[14], show_mac3[15]);
          mac4_table.push(show_mac4[1], show_mac4[2], show_mac4[3], show_mac4[4], show_mac4[5], show_mac4[6], show_mac4[7], show_mac4[8], show_mac4[9]
            , show_mac4[10], show_mac4[11], show_mac4[12], show_mac4[13], show_mac4[14], show_mac4[15]);
          mac5_table.push(show_mac5[1], show_mac5[2], show_mac5[3], show_mac5[4], show_mac5[5], show_mac5[6], show_mac5[7], show_mac5[8], show_mac5[9]
            , show_mac5[10], show_mac5[11], show_mac5[12], show_mac5[13], show_mac5[14], show_mac5[15]);
          mac6_table.push(show_mac6[1], show_mac6[2], show_mac6[3], show_mac6[4], show_mac6[5], show_mac6[6], show_mac6[7], show_mac6[8], show_mac6[9]
            , show_mac6[10], show_mac6[11], show_mac6[12], show_mac6[13], show_mac6[14], show_mac6[15]);
          mac7_table.push(show_mac7[1], show_mac7[2], show_mac7[3], show_mac7[4], show_mac7[5], show_mac7[6], show_mac7[7], show_mac7[8], show_mac7[9]
            , show_mac7[10], show_mac7[11], show_mac7[12], show_mac7[13], show_mac7[14], show_mac7[15]);
          mac8_table.push(show_mac8[1], show_mac8[2], show_mac8[3], show_mac8[4], show_mac8[5], show_mac8[6], show_mac8[7], show_mac8[8], show_mac8[9]
            , show_mac8[10], show_mac8[11], show_mac8[12], show_mac8[13], show_mac8[14], show_mac8[15]);
        }
        if (Time_start == "15:00:00") {
          Time_chart = [
            "23 P.M.", "0 A.M.", "1 A.M.", "2 A.M.", "3 A.M.", "4 A.M.", "5 A.M.", "6 A.M.", "7 A.M.",
            "8 A.M.", "9 A.M.", "10 A.M.", "11 A.M.", "12 P.M.", "1 P.M.", "2 P.M.", "3 P.M.",];
          mac1_table.push(show_mac1[1], show_mac1[2], show_mac1[3], show_mac1[4], show_mac1[5], show_mac1[6], show_mac1[7], show_mac1[8], show_mac1[9]
            , show_mac1[10], show_mac1[11], show_mac1[12], show_mac1[13], show_mac1[14], show_mac1[15], show_mac1[16]);
          mac2_table.push(show_mac2[1], show_mac2[2], show_mac2[3], show_mac2[4], show_mac2[5], show_mac2[6], show_mac2[7], show_mac2[8], show_mac2[9]
            , show_mac2[10], show_mac2[11], show_mac2[12], show_mac2[13], show_mac2[14], show_mac2[15], show_mac2[16]);
          mac3_table.push(show_mac3[1], show_mac3[2], show_mac3[3], show_mac3[4], show_mac3[5], show_mac3[6], show_mac3[7], show_mac3[8], show_mac3[9]
            , show_mac3[10], show_mac3[11], show_mac3[12], show_mac3[13], show_mac3[14], show_mac3[15], show_mac3[16]);
          mac4_table.push(show_mac4[1], show_mac4[2], show_mac4[3], show_mac4[4], show_mac4[5], show_mac4[6], show_mac4[7], show_mac4[8], show_mac4[9]
            , show_mac4[10], show_mac4[11], show_mac4[12], show_mac4[13], show_mac4[14], show_mac4[15], show_mac4[16]);
          mac5_table.push(show_mac5[1], show_mac5[2], show_mac5[3], show_mac5[4], show_mac5[5], show_mac5[6], show_mac5[7], show_mac5[8], show_mac5[9]
            , show_mac5[10], show_mac5[11], show_mac5[12], show_mac5[13], show_mac5[14], show_mac5[15], show_mac5[16]);
          mac6_table.push(show_mac6[1], show_mac6[2], show_mac6[3], show_mac6[4], show_mac6[5], show_mac6[6], show_mac6[7], show_mac6[8], show_mac6[9]
            , show_mac6[10], show_mac6[11], show_mac6[12], show_mac6[13], show_mac6[14], show_mac6[15], show_mac6[16]);
          mac7_table.push(show_mac7[1], show_mac7[2], show_mac7[3], show_mac7[4], show_mac7[5], show_mac7[6], show_mac7[7], show_mac7[8], show_mac7[9]
            , show_mac7[10], show_mac7[11], show_mac7[12], show_mac7[13], show_mac7[14], show_mac7[15], show_mac7[16]);
          mac8_table.push(show_mac8[1], show_mac8[2], show_mac8[3], show_mac8[4], show_mac8[5], show_mac8[6], show_mac8[7], show_mac8[8], show_mac8[9]
            , show_mac8[10], show_mac8[11], show_mac8[12], show_mac8[13], show_mac8[14], show_mac8[15], show_mac8[16]);
        }
        if (Time_start == "16:00:00") {
          Time_chart = [
            "23 P.M.", "0 A.M.", "1 A.M.", "2 A.M.", "3 A.M.", "4 A.M.", "5 A.M.", "6 A.M.", "7 A.M.", "8 A.M.", "9 A.M.",
            "10 A.M.", "11 A.M.", "12 P.M.", "1 P.M.", "2 P.M.", "3 P.M.", "4 P.M.",];
          mac1_table.push(show_mac1[1], show_mac1[2], show_mac1[3], show_mac1[4], show_mac1[5], show_mac1[6], show_mac1[7], show_mac1[8], show_mac1[9]
            , show_mac1[10], show_mac1[11], show_mac1[12], show_mac1[13], show_mac1[14], show_mac1[15], show_mac1[16], show_mac1[17]);
          mac2_table.push(show_mac2[1], show_mac2[2], show_mac2[3], show_mac2[4], show_mac2[5], show_mac2[6], show_mac2[7], show_mac2[8], show_mac2[9]
            , show_mac2[10], show_mac2[11], show_mac2[12], show_mac2[13], show_mac2[14], show_mac2[15], show_mac2[16], show_mac2[17]);
          mac3_table.push(show_mac3[1], show_mac3[2], show_mac3[3], show_mac3[4], show_mac3[5], show_mac3[6], show_mac3[7], show_mac3[8], show_mac3[9]
            , show_mac3[10], show_mac3[11], show_mac3[12], show_mac3[13], show_mac3[14], show_mac3[15], show_mac3[16], show_mac3[17]);
          mac4_table.push(show_mac4[1], show_mac4[2], show_mac4[3], show_mac4[4], show_mac4[5], show_mac4[6], show_mac4[7], show_mac4[8], show_mac4[9]
            , show_mac4[10], show_mac4[11], show_mac4[12], show_mac4[13], show_mac4[14], show_mac4[15], show_mac4[16], show_mac4[17]);
          mac5_table.push(show_mac5[1], show_mac5[2], show_mac5[3], show_mac5[4], show_mac5[5], show_mac5[6], show_mac5[7], show_mac5[8], show_mac5[9]
            , show_mac5[10], show_mac5[11], show_mac5[12], show_mac5[13], show_mac5[14], show_mac5[15], show_mac5[16], show_mac5[17]);
          mac6_table.push(show_mac6[1], show_mac6[2], show_mac6[3], show_mac6[4], show_mac6[5], show_mac6[6], show_mac6[7], show_mac6[8], show_mac6[9]
            , show_mac6[10], show_mac6[11], show_mac6[12], show_mac6[13], show_mac6[14], show_mac6[15], show_mac6[16], show_mac6[17]);
          mac7_table.push(show_mac7[1], show_mac7[2], show_mac7[3], show_mac7[4], show_mac7[5], show_mac7[6], show_mac7[7], show_mac7[8], show_mac7[9]
            , show_mac7[10], show_mac7[11], show_mac7[12], show_mac7[13], show_mac7[14], show_mac7[15], show_mac7[16], show_mac7[17]);
          mac8_table.push(show_mac8[1], show_mac8[2], show_mac8[3], show_mac8[4], show_mac8[5], show_mac8[6], show_mac8[7], show_mac8[8], show_mac8[9]
            , show_mac8[10], show_mac8[11], show_mac8[12], show_mac8[13], show_mac8[14], show_mac8[15], show_mac8[16], show_mac8[17]);
        }
        if (Time_start == "17:00:00") {
          Time_chart = [
            "23 P.M.", "0 A.M.", "1 A.M.", "2 A.M.", "3 A.M.", "4 A.M.", "5 A.M.", "6 A.M.",
            "7 A.M.", "8 A.M.", "9 A.M.", "10 A.M.", "11 A.M.", "12 P.M.", "1 P.M.", "2 P.M.", "3 P.M.", "4 P.M.", "5 P.M.",];
          mac1_table.push(show_mac1[1], show_mac1[2], show_mac1[3], show_mac1[4], show_mac1[5], show_mac1[6], show_mac1[7], show_mac1[8], show_mac1[9]
            , show_mac1[10], show_mac1[11], show_mac1[12], show_mac1[13], show_mac1[14], show_mac1[15], show_mac1[16], show_mac1[17], show_mac1[18]);
          mac2_table.push(show_mac2[1], show_mac2[2], show_mac2[3], show_mac2[4], show_mac2[5], show_mac2[6], show_mac2[7], show_mac2[8], show_mac2[9]
            , show_mac2[10], show_mac2[11], show_mac2[12], show_mac2[13], show_mac2[14], show_mac2[15], show_mac2[16], show_mac2[17], show_mac2[18]);
          mac3_table.push(show_mac3[1], show_mac3[2], show_mac3[3], show_mac3[4], show_mac3[5], show_mac3[6], show_mac3[7], show_mac3[8], show_mac3[9]
            , show_mac3[10], show_mac3[11], show_mac3[12], show_mac3[13], show_mac3[14], show_mac3[15], show_mac3[16], show_mac3[17], show_mac3[18]);
          mac4_table.push(show_mac4[1], show_mac4[2], show_mac4[3], show_mac4[4], show_mac4[5], show_mac4[6], show_mac4[7], show_mac4[8], show_mac4[9]
            , show_mac4[10], show_mac4[11], show_mac4[12], show_mac4[13], show_mac4[14], show_mac4[15], show_mac4[16], show_mac4[17], show_mac4[18]);
          mac5_table.push(show_mac5[1], show_mac5[2], show_mac5[3], show_mac5[4], show_mac5[5], show_mac5[6], show_mac5[7], show_mac5[8], show_mac5[9]
            , show_mac5[10], show_mac5[11], show_mac5[12], show_mac5[13], show_mac5[14], show_mac5[15], show_mac5[16], show_mac5[17], show_mac5[18]);
          mac6_table.push(show_mac6[1], show_mac6[2], show_mac6[3], show_mac6[4], show_mac6[5], show_mac6[6], show_mac6[7], show_mac6[8], show_mac6[9]
            , show_mac6[10], show_mac6[11], show_mac6[12], show_mac6[13], show_mac6[14], show_mac6[15], show_mac6[16], show_mac6[17], show_mac6[18]);
          mac7_table.push(show_mac7[1], show_mac7[2], show_mac7[3], show_mac7[4], show_mac7[5], show_mac7[6], show_mac7[7], show_mac7[8], show_mac7[9]
            , show_mac7[10], show_mac7[11], show_mac7[12], show_mac7[13], show_mac7[14], show_mac7[15], show_mac7[16], show_mac7[17], show_mac7[18]);
          mac8_table.push(show_mac8[1], show_mac8[2], show_mac8[3], show_mac8[4], show_mac8[5], show_mac8[6], show_mac8[7], show_mac8[8], show_mac8[9]
            , show_mac8[10], show_mac8[11], show_mac8[12], show_mac8[13], show_mac8[14], show_mac8[15], show_mac8[16], show_mac8[17], show_mac8[18]);
        }
        if (Time_start == "18:00:00") {
          Time_chart = [
            "23 P.M.", "0 A.M.", "1 A.M.", "2 A.M.", "3 A.M.", "4 A.M.", "5 A.M.",
            "6 A.M.", "7 A.M.", "8 A.M.", "9 A.M.", "10 A.M.", "11 A.M.", "12 P.M.", "1 P.M.",
            "2 P.M.", "3 P.M.", "4 P.M.", "5 P.M.", "6 P.M.",];
          mac1_table.push(show_mac1[1], show_mac1[2], show_mac1[3], show_mac1[4], show_mac1[5], show_mac1[6], show_mac1[7], show_mac1[8], show_mac1[9]
            , show_mac1[10], show_mac1[11], show_mac1[12], show_mac1[13], show_mac1[14], show_mac1[15], show_mac1[16], show_mac1[17], show_mac1[18], show_mac1[19]);
          mac2_table.push(show_mac2[1], show_mac2[2], show_mac2[3], show_mac2[4], show_mac2[5], show_mac2[6], show_mac2[7], show_mac2[8], show_mac2[9]
            , show_mac2[10], show_mac2[11], show_mac2[12], show_mac2[13], show_mac2[14], show_mac2[15], show_mac2[16], show_mac2[17], show_mac2[18], show_mac2[19]);
          mac3_table.push(show_mac3[1], show_mac3[2], show_mac3[3], show_mac3[4], show_mac3[5], show_mac3[6], show_mac3[7], show_mac3[8], show_mac3[9]
            , show_mac3[10], show_mac3[11], show_mac3[12], show_mac3[13], show_mac3[14], show_mac3[15], show_mac3[16], show_mac3[17], show_mac3[18], show_mac3[19]);
          mac4_table.push(show_mac4[1], show_mac4[2], show_mac4[3], show_mac4[4], show_mac4[5], show_mac4[6], show_mac4[7], show_mac4[8], show_mac4[9]
            , show_mac4[10], show_mac4[11], show_mac4[12], show_mac4[13], show_mac4[14], show_mac4[15], show_mac4[16], show_mac4[17], show_mac4[18], show_mac4[19]);
          mac5_table.push(show_mac5[1], show_mac5[2], show_mac5[3], show_mac5[4], show_mac5[5], show_mac5[6], show_mac5[7], show_mac5[8], show_mac5[9]
            , show_mac5[10], show_mac5[11], show_mac5[12], show_mac5[13], show_mac5[14], show_mac5[15], show_mac5[16], show_mac5[17], show_mac5[18], show_mac5[19]);
          mac6_table.push(show_mac6[1], show_mac6[2], show_mac6[3], show_mac6[4], show_mac6[5], show_mac6[6], show_mac6[7], show_mac6[8], show_mac6[9]
            , show_mac6[10], show_mac6[11], show_mac6[12], show_mac6[13], show_mac6[14], show_mac6[15], show_mac6[16], show_mac6[17], show_mac6[18], show_mac6[19]);
          mac7_table.push(show_mac7[1], show_mac7[2], show_mac7[3], show_mac7[4], show_mac7[5], show_mac7[6], show_mac7[7], show_mac7[8], show_mac7[9]
            , show_mac7[10], show_mac7[11], show_mac7[12], show_mac7[13], show_mac7[14], show_mac7[15], show_mac7[16], show_mac7[17], show_mac7[18], show_mac7[19]);
          mac8_table.push(show_mac8[1], show_mac8[2], show_mac8[3], show_mac8[4], show_mac8[5], show_mac8[6], show_mac8[7], show_mac8[8], show_mac8[9]
            , show_mac8[10], show_mac8[11], show_mac8[12], show_mac8[13], show_mac8[14], show_mac8[15], show_mac8[16], show_mac8[17], show_mac8[18], show_mac8[19]);
        }
        if (Time_start == "19:00:00") {
          Time_chart = [
            "23 P.M.", "0 A.M.", "1 A.M.", "2 A.M.", "3 A.M.", "4 A.M.", "5 A.M.", "6 A.M.", "7 A.M.", "8 A.M.",
            "9 A.M.", "10 A.M.", "11 A.M.", "12 P.M.", "1 P.M.", "2 P.M.", "3 P.M.", "4 P.M.", "5 P.M.", "6 P.M.", "7 P.M.",];
          mac1_table.push(show_mac1[1], show_mac1[2], show_mac1[3], show_mac1[4], show_mac1[5], show_mac1[6], show_mac1[7], show_mac1[8], show_mac1[9]
            , show_mac1[10], show_mac1[11], show_mac1[12], show_mac1[13], show_mac1[14], show_mac1[15], show_mac1[16], show_mac1[17], show_mac1[18], show_mac1[19]
            , show_mac1[20]);
          mac2_table.push(show_mac2[1], show_mac2[2], show_mac2[3], show_mac2[4], show_mac2[5], show_mac2[6], show_mac2[7], show_mac2[8], show_mac2[9]
            , show_mac2[10], show_mac2[11], show_mac2[12], show_mac2[13], show_mac2[14], show_mac2[15], show_mac2[16], show_mac2[17], show_mac2[18], show_mac2[19]
            , show_mac2[20]);
          mac3_table.push(show_mac3[1], show_mac3[2], show_mac3[3], show_mac3[4], show_mac3[5], show_mac3[6], show_mac3[7], show_mac3[8], show_mac3[9]
            , show_mac3[10], show_mac3[11], show_mac3[12], show_mac3[13], show_mac3[14], show_mac3[15], show_mac3[16], show_mac3[17], show_mac3[18], show_mac3[19]
            , show_mac3[20]);
          mac4_table.push(show_mac4[1], show_mac4[2], show_mac4[3], show_mac4[4], show_mac4[5], show_mac4[6], show_mac4[7], show_mac4[8], show_mac4[9]
            , show_mac4[10], show_mac4[11], show_mac4[12], show_mac4[13], show_mac4[14], show_mac4[15], show_mac4[16], show_mac4[17], show_mac4[18], show_mac4[19]
            , show_mac4[20]);
          mac5_table.push(show_mac5[1], show_mac5[2], show_mac5[3], show_mac5[4], show_mac5[5], show_mac5[6], show_mac5[7], show_mac5[8], show_mac5[9]
            , show_mac5[10], show_mac5[11], show_mac5[12], show_mac5[13], show_mac5[14], show_mac5[15], show_mac5[16], show_mac5[17], show_mac5[18], show_mac5[19]
            , show_mac5[20]);
          mac6_table.push(show_mac6[1], show_mac6[2], show_mac6[3], show_mac6[4], show_mac6[5], show_mac6[6], show_mac6[7], show_mac6[8], show_mac6[9]
            , show_mac6[10], show_mac6[11], show_mac6[12], show_mac6[13], show_mac6[14], show_mac6[15], show_mac6[16], show_mac6[17], show_mac6[18], show_mac6[19]
            , show_mac6[20]);
          mac7_table.push(show_mac7[1], show_mac7[2], show_mac7[3], show_mac7[4], show_mac7[5], show_mac7[6], show_mac7[7], show_mac7[8], show_mac7[9]
            , show_mac7[10], show_mac7[11], show_mac7[12], show_mac7[13], show_mac7[14], show_mac7[15], show_mac7[16], show_mac7[17], show_mac7[18], show_mac7[19]
            , show_mac7[20]);
          mac8_table.push(show_mac8[1], show_mac8[2], show_mac8[3], show_mac8[4], show_mac8[5], show_mac8[6], show_mac8[7], show_mac8[8], show_mac8[9]
            , show_mac8[10], show_mac8[11], show_mac8[12], show_mac8[13], show_mac8[14], show_mac8[15], show_mac8[16], show_mac8[17], show_mac8[18], show_mac8[19]
            , show_mac8[20]);
        }
        if (Time_start == "20:00:00") {
          Time_chart = [
            "23 P.M.", "0 A.M.", "1 A.M.", "2 A.M.", "3 A.M.", "4 A.M.", "5 A.M.", "6 A.M.", "7 A.M.", "8 A.M.", "9 A.M.", "10 A.M.",
            "11 A.M.", "12 P.M.", "1 P.M.", "2 P.M.", "3 P.M.", "4 P.M.", "5 P.M.", "6 P.M.", "7 P.M.", "8 P.M.",];
          mac1_table.push(show_mac1[1], show_mac1[2], show_mac1[3], show_mac1[4], show_mac1[5], show_mac1[6], show_mac1[7], show_mac1[8], show_mac1[9]
            , show_mac1[10], show_mac1[11], show_mac1[12], show_mac1[13], show_mac1[14], show_mac1[15], show_mac1[16], show_mac1[17], show_mac1[18], show_mac1[19]
            , show_mac1[20], show_mac1[21]);
          mac2_table.push(show_mac2[1], show_mac2[2], show_mac2[3], show_mac2[4], show_mac2[5], show_mac2[6], show_mac2[7], show_mac2[8], show_mac2[9]
            , show_mac2[10], show_mac2[11], show_mac2[12], show_mac2[13], show_mac2[14], show_mac2[15], show_mac2[16], show_mac2[17], show_mac2[18], show_mac2[19]
            , show_mac2[20], show_mac2[21]);
          mac3_table.push(show_mac3[1], show_mac3[2], show_mac3[3], show_mac3[4], show_mac3[5], show_mac3[6], show_mac3[7], show_mac3[8], show_mac3[9]
            , show_mac3[10], show_mac3[11], show_mac3[12], show_mac3[13], show_mac3[14], show_mac3[15], show_mac3[16], show_mac3[17], show_mac3[18], show_mac3[19]
            , show_mac3[20], show_mac3[21]);
          mac4_table.push(show_mac4[1], show_mac4[2], show_mac4[3], show_mac4[4], show_mac4[5], show_mac4[6], show_mac4[7], show_mac4[8], show_mac4[9]
            , show_mac4[10], show_mac4[11], show_mac4[12], show_mac4[13], show_mac4[14], show_mac4[15], show_mac4[16], show_mac4[17], show_mac4[18], show_mac4[19]
            , show_mac4[20], show_mac4[21]);
          mac5_table.push(show_mac5[1], show_mac5[2], show_mac5[3], show_mac5[4], show_mac5[5], show_mac5[6], show_mac5[7], show_mac5[8], show_mac5[9]
            , show_mac5[10], show_mac5[11], show_mac5[12], show_mac5[13], show_mac5[14], show_mac5[15], show_mac5[16], show_mac5[17], show_mac5[18], show_mac5[19]
            , show_mac5[20], show_mac5[21]);
          mac6_table.push(show_mac6[1], show_mac6[2], show_mac6[3], show_mac6[4], show_mac6[5], show_mac6[6], show_mac6[7], show_mac6[8], show_mac6[9]
            , show_mac6[10], show_mac6[11], show_mac6[12], show_mac6[13], show_mac6[14], show_mac6[15], show_mac6[16], show_mac6[17], show_mac6[18], show_mac6[19]
            , show_mac6[20], show_mac6[21]);
          mac7_table.push(show_mac7[1], show_mac7[2], show_mac7[3], show_mac7[4], show_mac7[5], show_mac7[6], show_mac7[7], show_mac7[8], show_mac7[9]
            , show_mac7[10], show_mac7[11], show_mac7[12], show_mac7[13], show_mac7[14], show_mac7[15], show_mac7[16], show_mac7[17], show_mac7[18], show_mac7[19]
            , show_mac7[20], show_mac7[21]);
          mac8_table.push(show_mac8[1], show_mac8[2], show_mac8[3], show_mac8[4], show_mac8[5], show_mac8[6], show_mac8[7], show_mac8[8], show_mac8[9]
            , show_mac8[10], show_mac8[11], show_mac8[12], show_mac8[13], show_mac8[14], show_mac8[15], show_mac8[16], show_mac8[17], show_mac8[18], show_mac8[19]
            , show_mac8[20], show_mac8[21]);
        }
        if (Time_start == "21:00:00") {
          Time_chart = [
            "23 P.M.", "0 A.M.", "1 A.M.", "2 A.M.", "3 A.M.", "4 A.M.", "5 A.M.", "6 A.M.", "7 A.M.", "8 A.M.", "9 A.M.",
            "10 A.M.", "11 A.M.", "12 P.M.", "1 P.M.", "2 P.M.", "3 P.M.", "4 P.M.", "5 P.M.", "6 P.M.", "7 P.M.", "8 P.M.", "9 P.M.",];
          mac1_table.push(show_mac1[1], show_mac1[2], show_mac1[3], show_mac1[4], show_mac1[5], show_mac1[6], show_mac1[7], show_mac1[8], show_mac1[9]
            , show_mac1[10], show_mac1[11], show_mac1[12], show_mac1[13], show_mac1[14], show_mac1[15], show_mac1[16], show_mac1[17], show_mac1[18], show_mac1[19]
            , show_mac1[20], show_mac1[21], show_mac1[22]);
          mac2_table.push(show_mac2[1], show_mac2[2], show_mac2[3], show_mac2[4], show_mac2[5], show_mac2[6], show_mac2[7], show_mac2[8], show_mac2[9]
            , show_mac2[10], show_mac2[11], show_mac2[12], show_mac2[13], show_mac2[14], show_mac2[15], show_mac2[16], show_mac2[17], show_mac2[18], show_mac2[19]
            , show_mac2[20], show_mac2[21], show_mac2[22]);
          mac3_table.push(show_mac3[1], show_mac3[2], show_mac3[3], show_mac3[4], show_mac3[5], show_mac3[6], show_mac3[7], show_mac3[8], show_mac3[9]
            , show_mac3[10], show_mac3[11], show_mac3[12], show_mac3[13], show_mac3[14], show_mac3[15], show_mac3[16], show_mac3[17], show_mac3[18], show_mac3[19]
            , show_mac3[20], show_mac3[21], show_mac3[22]);
          mac4_table.push(show_mac4[1], show_mac4[2], show_mac4[3], show_mac4[4], show_mac4[5], show_mac4[6], show_mac4[7], show_mac4[8], show_mac4[9]
            , show_mac4[10], show_mac4[11], show_mac4[12], show_mac4[13], show_mac4[14], show_mac4[15], show_mac4[16], show_mac4[17], show_mac4[18], show_mac4[19]
            , show_mac4[20], show_mac4[21], show_mac4[22]);
          mac5_table.push(show_mac5[1], show_mac5[2], show_mac5[3], show_mac5[4], show_mac5[5], show_mac5[6], show_mac5[7], show_mac5[8], show_mac5[9]
            , show_mac5[10], show_mac5[11], show_mac5[12], show_mac5[13], show_mac5[14], show_mac5[15], show_mac5[16], show_mac5[17], show_mac5[18], show_mac5[19]
            , show_mac5[20], show_mac5[21], show_mac5[22]);
          mac6_table.push(show_mac6[1], show_mac6[2], show_mac6[3], show_mac6[4], show_mac6[5], show_mac6[6], show_mac6[7], show_mac6[8], show_mac6[9]
            , show_mac6[10], show_mac6[11], show_mac6[12], show_mac6[13], show_mac6[14], show_mac6[15], show_mac6[16], show_mac6[17], show_mac6[18], show_mac6[19]
            , show_mac6[20], show_mac6[21], show_mac6[22]);
          mac7_table.push(show_mac7[1], show_mac7[2], show_mac7[3], show_mac7[4], show_mac7[5], show_mac7[6], show_mac7[7], show_mac7[8], show_mac7[9]
            , show_mac7[10], show_mac7[11], show_mac7[12], show_mac7[13], show_mac7[14], show_mac7[15], show_mac7[16], show_mac7[17], show_mac7[18], show_mac7[19]
            , show_mac7[20], show_mac7[21], show_mac7[22]);
          mac8_table.push(show_mac8[1], show_mac8[2], show_mac8[3], show_mac8[4], show_mac8[5], show_mac8[6], show_mac8[7], show_mac8[8], show_mac8[9]
            , show_mac8[10], show_mac8[11], show_mac8[12], show_mac8[13], show_mac8[14], show_mac8[15], show_mac8[16], show_mac8[17], show_mac8[18], show_mac8[19]
            , show_mac8[20], show_mac8[21], show_mac8[22]);
        }
        if (Time_start == "22:00:00") {
          Time_chart = [
            "23 P.M.", "0 A.M.", "1 A.M.", "2 A.M.", "3 A.M.", "4 A.M.", "5 A.M.", "6 A.M.", "7 A.M.", "8 A.M.", "9 A.M.", "10 A.M.", "11 A.M.", "12 P.M.",
            "1 P.M.", "2 P.M.", "3 P.M.", "4 P.M.", "5 P.M.", "6 P.M.", "7 P.M.", "8 P.M.", "9 P.M.", "10 P.M.",];
          mac1_table.push(show_mac1[1], show_mac1[2], show_mac1[3], show_mac1[4], show_mac1[5], show_mac1[6], show_mac1[7], show_mac1[8], show_mac1[9]
            , show_mac1[10], show_mac1[11], show_mac1[12], show_mac1[13], show_mac1[14], show_mac1[15], show_mac1[16], show_mac1[17], show_mac1[18], show_mac1[19]
            , show_mac1[20], show_mac1[21], show_mac1[22], show_mac1[23]);
          mac2_table.push(show_mac2[1], show_mac2[2], show_mac2[3], show_mac2[4], show_mac2[5], show_mac2[6], show_mac2[7], show_mac2[8], show_mac2[9]
            , show_mac2[10], show_mac2[11], show_mac2[12], show_mac2[13], show_mac2[14], show_mac2[15], show_mac2[16], show_mac2[17], show_mac2[18], show_mac2[19]
            , show_mac2[20], show_mac2[21], show_mac2[22], show_mac2[23]);
          mac3_table.push(show_mac3[1], show_mac3[2], show_mac3[3], show_mac3[4], show_mac3[5], show_mac3[6], show_mac3[7], show_mac3[8], show_mac3[9]
            , show_mac3[10], show_mac3[11], show_mac3[12], show_mac3[13], show_mac3[14], show_mac3[15], show_mac3[16], show_mac3[17], show_mac3[18], show_mac3[19]
            , show_mac3[20], show_mac3[21], show_mac3[22], show_mac3[23]);
          mac4_table.push(show_mac4[1], show_mac4[2], show_mac4[3], show_mac4[4], show_mac4[5], show_mac4[6], show_mac4[7], show_mac4[8], show_mac4[9]
            , show_mac4[10], show_mac4[11], show_mac4[12], show_mac4[13], show_mac4[14], show_mac4[15], show_mac4[16], show_mac4[17], show_mac4[18], show_mac4[19]
            , show_mac4[20], show_mac4[21], show_mac4[22], show_mac4[23]);
          mac5_table.push(show_mac5[1], show_mac5[2], show_mac5[3], show_mac5[4], show_mac5[5], show_mac5[6], show_mac5[7], show_mac5[8], show_mac5[9]
            , show_mac5[10], show_mac5[11], show_mac5[12], show_mac5[13], show_mac5[14], show_mac5[15], show_mac5[16], show_mac5[17], show_mac5[18], show_mac5[19]
            , show_mac5[20], show_mac5[21], show_mac5[22], show_mac5[23]);
          mac6_table.push(show_mac6[1], show_mac6[2], show_mac6[3], show_mac6[4], show_mac6[5], show_mac6[6], show_mac6[7], show_mac6[8], show_mac6[9]
            , show_mac6[10], show_mac6[11], show_mac6[12], show_mac6[13], show_mac6[14], show_mac6[15], show_mac6[16], show_mac6[17], show_mac6[18], show_mac6[19]
            , show_mac6[20], show_mac6[21], show_mac6[22], show_mac6[23]);
          mac7_table.push(show_mac7[1], show_mac7[2], show_mac7[3], show_mac7[4], show_mac7[5], show_mac7[6], show_mac7[7], show_mac7[8], show_mac7[9]
            , show_mac7[10], show_mac7[11], show_mac7[12], show_mac7[13], show_mac7[14], show_mac7[15], show_mac7[16], show_mac7[17], show_mac7[18], show_mac7[19]
            , show_mac7[20], show_mac7[21], show_mac7[22], show_mac7[23]);
          mac8_table.push(show_mac8[1], show_mac8[2], show_mac8[3], show_mac8[4], show_mac8[5], show_mac8[6], show_mac8[7], show_mac8[8], show_mac8[9]
            , show_mac8[10], show_mac8[11], show_mac8[12], show_mac8[13], show_mac8[14], show_mac8[15], show_mac8[16], show_mac8[17], show_mac8[18], show_mac8[19]
            , show_mac8[20], show_mac8[21], show_mac8[22], show_mac8[23]);
        }
        if (Time_start == "23:00:00") {
          Time_chart = [
            "23 P.M.", "0 A.M.", "1 A.M.", "2 A.M.", "3 A.M.", "4 A.M.", "5 A.M.", "6 A.M.", "7 A.M.", "8 A.M.", "9 A.M.", "10 A.M.", "11 A.M.", "12 P.M."
            , "1 P.M.", "2 P.M.", "3 P.M.", "4 P.M.", "5 P.M.", "6 P.M.", "7 P.M.", "8 P.M.", "9 P.M.", "10 P.M.", "11 P.M.",];
          mac1_table.push(show_mac1[1], show_mac1[2], show_mac1[3], show_mac1[4], show_mac1[5], show_mac1[6], show_mac1[7], show_mac1[8], show_mac1[9]
            , show_mac1[10], show_mac1[11], show_mac1[12], show_mac1[13], show_mac1[14], show_mac1[15], show_mac1[16], show_mac1[17], show_mac1[18], show_mac1[19]
            , show_mac1[20], show_mac1[21], show_mac1[22], show_mac1[23], show_mac1[24]);
          mac2_table.push(show_mac2[1], show_mac2[2], show_mac2[3], show_mac2[4], show_mac2[5], show_mac2[6], show_mac2[7], show_mac2[8], show_mac2[9]
            , show_mac2[10], show_mac2[11], show_mac2[12], show_mac2[13], show_mac2[14], show_mac2[15], show_mac2[16], show_mac2[17], show_mac2[18], show_mac2[19]
            , show_mac2[20], show_mac2[21], show_mac2[22], show_mac2[23], show_mac2[24]);
          mac3_table.push(show_mac3[1], show_mac3[2], show_mac3[3], show_mac3[4], show_mac3[5], show_mac3[6], show_mac3[7], show_mac3[8], show_mac3[9]
            , show_mac3[10], show_mac3[11], show_mac3[12], show_mac3[13], show_mac3[14], show_mac3[15], show_mac3[16], show_mac3[17], show_mac3[18], show_mac3[19]
            , show_mac3[20], show_mac3[21], show_mac3[22], show_mac3[23], show_mac3[24]);
          mac4_table.push(show_mac4[1], show_mac4[2], show_mac4[3], show_mac4[4], show_mac4[5], show_mac4[6], show_mac4[7], show_mac4[8], show_mac4[9]
            , show_mac4[10], show_mac4[11], show_mac4[12], show_mac4[13], show_mac4[14], show_mac4[15], show_mac4[16], show_mac4[17], show_mac4[18], show_mac4[19]
            , show_mac4[20], show_mac4[21], show_mac4[22], show_mac4[23], show_mac4[24]);
          mac5_table.push(show_mac5[1], show_mac5[2], show_mac5[3], show_mac5[4], show_mac5[5], show_mac5[6], show_mac5[7], show_mac5[8], show_mac5[9]
            , show_mac5[10], show_mac5[11], show_mac5[12], show_mac5[13], show_mac5[14], show_mac5[15], show_mac5[16], show_mac5[17], show_mac5[18], show_mac5[19]
            , show_mac5[20], show_mac5[21], show_mac5[22], show_mac5[23], show_mac5[24]);
          mac6_table.push(show_mac6[1], show_mac6[2], show_mac6[3], show_mac6[4], show_mac6[5], show_mac6[6], show_mac6[7], show_mac6[8], show_mac6[9]
            , show_mac6[10], show_mac6[11], show_mac6[12], show_mac6[13], show_mac6[14], show_mac6[15], show_mac6[16], show_mac6[17], show_mac6[18], show_mac6[19]
            , show_mac6[20], show_mac6[21], show_mac6[22], show_mac6[23], show_mac6[24]);
          mac7_table.push(show_mac7[1], show_mac7[2], show_mac7[3], show_mac7[4], show_mac7[5], show_mac7[6], show_mac7[7], show_mac7[8], show_mac7[9]
            , show_mac7[10], show_mac7[11], show_mac7[12], show_mac7[13], show_mac7[14], show_mac7[15], show_mac7[16], show_mac7[17], show_mac7[18], show_mac7[19]
            , show_mac7[20], show_mac7[21], show_mac7[22], show_mac7[23], show_mac7[24]);
          mac8_table.push(show_mac8[1], show_mac8[2], show_mac8[3], show_mac8[4], show_mac8[5], show_mac8[6], show_mac8[7], show_mac8[8], show_mac8[9]
            , show_mac8[10], show_mac8[11], show_mac8[12], show_mac8[13], show_mac8[14], show_mac8[15], show_mac8[16], show_mac8[17], show_mac8[18], show_mac8[19]
            , show_mac8[20], show_mac8[21], show_mac8[22], show_mac8[23], show_mac8[24]);
        }
        console.log(Time_chart.length)
        for (loop_range = 0; loop_range < Time_chart.length; loop_range++) {
          set_range1.push(Max_range);
          set_range2.push(Min_range);
        }
        let Total_mac1; let Total_mac2; let Total_mac3; let Total_mac4; let Total_mac5; let Total_mac6; let Total_mac7; let Total_mac8;
        Total_mac1 = parseFloat(mac1_table.reduce(FuncTotal)).toFixed(2);
        Total_mac2 = parseFloat(mac2_table.reduce(FuncTotal)).toFixed(2);
        Total_mac3 = parseFloat(mac3_table.reduce(FuncTotal)).toFixed(2);
        Total_mac4 = parseFloat(mac4_table.reduce(FuncTotal)).toFixed(2);
        Total_mac5 = parseFloat(mac5_table.reduce(FuncTotal)).toFixed(2);
        Total_mac6 = parseFloat(mac6_table.reduce(FuncTotal)).toFixed(2);
        Total_mac7 = parseFloat(mac7_table.reduce(FuncTotal)).toFixed(2);
        Total_mac8 = parseFloat(mac8_table.reduce(FuncTotal)).toFixed(2);
        let time_length = Time_chart.length - 1;
        let mac1_av = parseFloat(Total_mac1 / time_length).toFixed(2);
        let mac2_av = parseFloat(Total_mac2 / time_length).toFixed(2);
        let mac3_av = parseFloat(Total_mac3 / time_length).toFixed(2);
        let mac4_av = parseFloat(Total_mac4 / time_length).toFixed(2);
        let mac5_av = parseFloat(Total_mac5 / time_length).toFixed(2);
        let mac6_av = parseFloat(Total_mac6 / time_length).toFixed(2);
        let mac7_av = parseFloat(Total_mac7 / time_length).toFixed(2);
        let mac8_av = parseFloat(Total_mac8 / time_length).toFixed(2);
        if (isNaN(Total_mac1)) { mac1_av = "-"; Total_mac1 = "-"; }
        if (isNaN(Total_mac2)) { mac2_av = "-"; Total_mac2 = "-"; }
        if (isNaN(Total_mac3)) { mac3_av = "-"; Total_mac3 = "-"; }
        if (isNaN(Total_mac4)) { mac4_av = "-"; Total_mac4 = "-"; }
        if (isNaN(Total_mac5)) { mac5_av = "-"; Total_mac5 = "-"; }
        if (isNaN(Total_mac6)) { mac6_av = "-"; Total_mac6 = "-"; }
        if (isNaN(Total_mac7)) { mac7_av = "-"; Total_mac7 = "-"; }
        if (isNaN(Total_mac8)) { mac8_av = "-"; Total_mac8 = "-"; }
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
          labels: Time_chart,
          datasets: [
            {
              label: "range UP",
              data: set_range1,
              borderColor: "rgb(0, 204, 0)",
              borderWidth: 1,
              fill: false,
              pointRadius: 0,
              borderDash: [5, 5],
              pointBorderColor: "rgb(0, 204, 0)",

            },
            {
              label: "range DOWN",
              data: set_range2,
              borderColor: "rgb(204, 51, 0)",
              borderWidth: 1,
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
            Time_hours: "0 A.M.",
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
            Time_hours: "1 A.M.",
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
            Time_hours: "2 A.M.",
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
            Time_hours: "3 A.M.",
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
            Time_hours: "4 A.M.",
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
            Time_hours: "5 A.M.",
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
            Time_hours: "6 A.M.",
            machine_no1: mac1_table[6],
            machine_no2: mac2_table[6],
            machine_no3: mac3_table[6],
            machine_no4: mac4_table[6],
            machine_no5: mac5_table[6],
            machine_no6: mac6_table[6],
            machine_no7: mac7_table[6],
            machine_no8: mac8_table[6],
          },
          {
            Time_hours: "7 A.M.",
            machine_no1: mac1_table[7],
            machine_no2: mac2_table[7],
            machine_no3: mac3_table[7],
            machine_no4: mac4_table[7],
            machine_no5: mac5_table[7],
            machine_no6: mac6_table[7],
            machine_no7: mac7_table[7],
            machine_no8: mac8_table[7],
          },
          {
            Time_hours: "8 A.M.",
            machine_no1: mac1_table[8],
            machine_no2: mac2_table[8],
            machine_no3: mac3_table[8],
            machine_no4: mac4_table[8],
            machine_no5: mac5_table[8],
            machine_no6: mac6_table[8],
            machine_no7: mac7_table[8],
            machine_no8: mac8_table[8],
          },
          {
            Time_hours: "9 A.M.",
            machine_no1: mac1_table[9],
            machine_no2: mac2_table[9],
            machine_no3: mac3_table[9],
            machine_no4: mac4_table[9],
            machine_no5: mac5_table[9],
            machine_no6: mac6_table[9],
            machine_no7: mac7_table[9],
            machine_no8: mac8_table[9],
          },
          {
            Time_hours: "10 A.M.",
            machine_no1: mac1_table[10],
            machine_no2: mac2_table[10],
            machine_no3: mac3_table[10],
            machine_no4: mac4_table[10],
            machine_no5: mac5_table[10],
            machine_no6: mac6_table[10],
            machine_no7: mac7_table[10],
            machine_no8: mac8_table[10],

          },
          {
            Time_hours: "11 A.M.",
            machine_no1: mac1_table[11],
            machine_no2: mac2_table[11],
            machine_no3: mac3_table[11],
            machine_no4: mac4_table[11],
            machine_no5: mac5_table[11],
            machine_no6: mac6_table[11],
            machine_no7: mac7_table[11],
            machine_no8: mac8_table[11],
          },
          {
            Time_hours: "12 P.M.",
            machine_no1: mac1_table[12],
            machine_no2: mac2_table[12],
            machine_no3: mac3_table[12],
            machine_no4: mac4_table[12],
            machine_no5: mac5_table[12],
            machine_no6: mac6_table[12],
            machine_no7: mac7_table[12],
            machine_no8: mac8_table[12],
          },
          {
            Time_hours: "1 P.M.",
            machine_no1: mac1_table[13],
            machine_no2: mac2_table[13],
            machine_no3: mac3_table[13],
            machine_no4: mac4_table[13],
            machine_no5: mac5_table[13],
            machine_no6: mac6_table[13],
            machine_no7: mac7_table[13],
            machine_no8: mac8_table[13],
          },
          {
            Time_hours: "2 P.M.",
            machine_no1: mac1_table[14],
            machine_no2: mac2_table[14],
            machine_no3: mac3_table[14],
            machine_no4: mac4_table[14],
            machine_no5: mac5_table[14],
            machine_no6: mac6_table[14],
            machine_no7: mac7_table[14],
            machine_no8: mac8_table[14],
          },
          {
            Time_hours: "3 P.M.",
            machine_no1: mac1_table[15],
            machine_no2: mac2_table[15],
            machine_no3: mac3_table[15],
            machine_no4: mac4_table[15],
            machine_no5: mac5_table[15],
            machine_no6: mac6_table[15],
            machine_no7: mac7_table[15],
            machine_no8: mac8_table[15],

          },
          {
            Time_hours: "4 P.M.",
            machine_no1: mac1_table[16],
            machine_no2: mac2_table[16],
            machine_no3: mac3_table[16],
            machine_no4: mac4_table[16],
            machine_no5: mac5_table[16],
            machine_no6: mac6_table[16],
            machine_no7: mac7_table[16],
            machine_no8: mac8_table[16],
          },
          {
            Time_hours: "5 P.M.",
            machine_no1: mac1_table[17],
            machine_no2: mac2_table[17],
            machine_no3: mac3_table[17],
            machine_no4: mac4_table[17],
            machine_no5: mac5_table[17],
            machine_no6: mac6_table[17],
            machine_no7: mac7_table[17],
            machine_no8: mac8_table[17],
          },
          {
            Time_hours: "6 P.M.",
            machine_no1: mac1_table[18],
            machine_no2: mac2_table[18],
            machine_no3: mac3_table[18],
            machine_no4: mac4_table[18],
            machine_no5: mac5_table[18],
            machine_no6: mac6_table[18],
            machine_no7: mac7_table[18],
            machine_no8: mac8_table[18],
          },
          {
            Time_hours: "7 P.M.",
            machine_no1: mac1_table[19],
            machine_no2: mac2_table[19],
            machine_no3: mac3_table[19],
            machine_no4: mac4_table[19],
            machine_no5: mac5_table[19],
            machine_no6: mac6_table[19],
            machine_no7: mac7_table[19],
            machine_no8: mac8_table[19],
          },
          {
            Time_hours: "8 P.M.",
            machine_no1: mac1_table[20],
            machine_no2: mac2_table[20],
            machine_no3: mac3_table[20],
            machine_no4: mac4_table[20],
            machine_no5: mac5_table[20],
            machine_no6: mac6_table[20],
            machine_no7: mac7_table[20],
            machine_no8: mac8_table[20],
          },
          {
            Time_hours: "9 P.M.",
            machine_no1: mac1_table[21],
            machine_no2: mac2_table[21],
            machine_no3: mac3_table[21],
            machine_no4: mac4_table[21],
            machine_no5: mac5_table[21],
            machine_no6: mac6_table[21],
            machine_no7: mac7_table[21],
            machine_no8: mac8_table[21],
          },
          {
            Time_hours: "10 P.M.",
            machine_no1: mac1_table[22],
            machine_no2: mac2_table[22],
            machine_no3: mac3_table[22],
            machine_no4: mac4_table[22],
            machine_no5: mac5_table[22],
            machine_no6: mac6_table[22],
            machine_no7: mac7_table[22],
            machine_no8: mac8_table[22],
          },
          {
            Time_hours: "11 P.M.",
            machine_no1: mac1_table[23],
            machine_no2: mac2_table[23],
            machine_no3: mac3_table[23],
            machine_no4: mac4_table[23],
            machine_no5: mac5_table[23],
            machine_no6: mac6_table[23],
            machine_no7: mac7_table[23],
            machine_no8: mac8_table[23],
          },
        ]);
        setTotal([Total_mac1, Total_mac2, Total_mac3, Total_mac4, Total_mac5, Total_mac6, Total_mac7, Total_mac8]);
        setAverage([mac1_av, mac2_av, mac3_av, mac4_av, mac5_av, mac6_av, mac7_av, mac8_av]);
        setOpen(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  useEffect(() => {
    let newDate = new Date();
    let Hours = ("0" + newDate.getHours()).slice(-2);
    setTimeFrom(Hours + ":00:00");
  }, []);
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
                  <div className="mui--align ">
                    <Form.Label>Select Time</Form.Label>
                    <Form.Control as="select" name="timefrom" onChange={handleChangeTimeFrom} value={timefrom} required>
                      <option value="00:00:00">00:00</option><option value="01:00:00">01:00</option>
                      <option value="02:00:00">02:00</option><option value="03:00:00">03:00</option>
                      <option value="04:00:00">04:00</option><option value="05:00:00">05:00</option>
                      <option value="06:00:00">06:00</option><option value="07:00:00">07:00</option>
                      <option value="08:00:00">08:00</option><option value="09:00:00">09:00</option>
                      <option value="10:00:00">10:00</option><option value="11:00:00">11:00</option>
                      <option value="12:00:00">12:00</option><option value="13:00:00">13:00</option>
                      <option value="14:00:00">14:00</option><option value="15:00:00">15:00</option>
                      <option value="16:00:00">16:00</option><option value="17:00:00">17:00</option>
                      <option value="18:00:00">18:00</option><option value="19:00:00">19:00</option>
                      <option value="20:00:00">20:00</option><option value="21:00:00">21:00</option>
                      <option value="22:00:00">22:00</option><option value="23:00:00">23:00</option>
                    </Form.Control>
                  </div>
                </Form.Group>
              </div>
              <div className="px-2 mb-auto">
                <Form.Group class="col-2">
                  <Form.Label>Machine From</Form.Label>
                  <Form.Control as="select" name="machinefrom" onChange={handleChangeMachine} value={MachineNumber} required>
                    <option value="1">01</option><option value="2">02</option>
                    <option value="3">03</option><option value="4">04</option>
                    <option value="5">05</option><option value="6">06</option>
                    <option value="7">07</option><option value="8">08</option>
                  </Form.Control>
                </Form.Group>
              </div>
              <div className="px-2 mb-auto">
                <Form.Group class="col-2">
                  <Form.Label>Machine To</Form.Label>
                  <Form.Control as="select" name="machineto" onChange={handleChangeMachineTo} value={MachineNumberTo} required>
                    <option value="1">01</option><option value="2">02</option>
                    <option value="3">03</option><option value="4">04</option>
                    <option value="5">05</option><option value="6">06</option>
                    <option value="7">07</option><option value="8">08</option>
                  </Form.Control>
                </Form.Group>
              </div>
              <div className="px-2 mb-auto ">
                <Form.Group><br />
                  <div className="mui--align ">
                    <ColorButton variant="contained" color="primary" size="large" onClick={fetchData}>Submit</ColorButton>
                    <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
                      <Alert onClose={handleClose} severity="success">This is a success message!</Alert>
                    </Snackbar>
                  </div>
                </Form.Group>
              </div>
              <div className="px-2 mb-auto"><br />
                <RadioGroup row aria-label="position" name="position" defaultValue="Temp">
                  <FormControlLabel value="Temp" onChange={handleChange} control={<Radio color="primary" />} label="Temp" />
                  <FormControlLabel value="Vacuum" onChange={handleChange} control={<Radio color="primary" />} label="Vacuum" />
                  <FormControlLabel value="Pressure1" onChange={handleChange} control={<Radio color="primary" />} label="Pressure First" />
                  <FormControlLabel value="Pressure2" onChange={handleChange} control={<Radio color="primary" />} label="Presuure Second" />
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
                          beginAtZero: true
                        },
                      },],
                  },
                }} />
                <Table className="Showgraph-table" aria-label="simple table" id="emp">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center"><font size="2">Time</font></TableCell>
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
                        <TableCell component="th" scope="row" align="center">{" "}<font size="1">{val.Time_hours}</font></TableCell>
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