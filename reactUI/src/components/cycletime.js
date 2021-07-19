import React from "react";
import { Card, Button, Form, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cycletime.css";
import CanvasJSReact from "../assets/canvasjs.react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
function Cycletime() {
  const [timefrom, setTimeFrom] = useState(0);
  const [datefrom, setDateFrom] = useState(new Date());
  const [chartData, setChartData] = useState([]);
  const [open, setOpen] = useState(false);
 
  async function fetchData() {
    const res = await fetch(
      `http://localhost:3002/cycletime/${datefrom}.${timefrom}`
    );
    res
      .json()
      .then((res) => {
        setChartData(res.rr);
        setOpen(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleChangeDateFrom(e) {
    setDateFrom(e.target.value);
  }
  function handleChangeTimeFrom(e) {
    setTimeFrom(e.target.value);
  }
  useEffect(() => {
    let newDate = new Date();
    let date = ("0" + newDate.getDate()).slice(-2);
    let month = ("0" + (newDate.getMonth() + 1)).slice(-2);
    let year = newDate.getFullYear();
    setDateFrom(year + "-" + month + "-" + date);
  }, []);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  useEffect(() => {
    let newDate = new Date();
    let Hours = ("0" + newDate.getHours()).slice(-2);
    setTimeFrom(Hours + ":00:00");
  }, []);
  return (
    <div className="cycletime-background">
        <div>
          <Card className="cycletime-card">
            <Card.Body>
              <Card.Text>
                <Form.Row>
                  <div className="px-2 mb-auto">
                    <Form.Group class="col-2">
                      <div className="mui--align ">
                        <Form.Label>Form</Form.Label>
                        <Form.Control
                          name="dateFrom"
                          type="date"
                          onChange={handleChangeDateFrom}
                          value={datefrom}
                        />
                      </div>
                    </Form.Group>
                  </div>
                  <div className="px-2 mb-auto">
                    <Form.Group as={Col}>
                      <Form.Label>From Time</Form.Label>
                      <Form.Control
                        as="select"
                        name="timefrom"
                        onChange={handleChangeTimeFrom}
                        value={timefrom}
                        required
                      >
                        <option value=""></option>
                        <option value="00:00:00">00:00</option>
                        <option value="01:00:00">01:00</option>
                        <option value="02:00:00">02:00</option>
                        <option value="03:00:00">03:00</option>
                        <option value="04:00:00">04:00</option>
                        <option value="05:00:00">05:00</option>
                        <option value="06:00:00">06:00</option>
                        <option value="07:00:00">07:00</option>
                        <option value="08:00:00">08:00</option>
                        <option value="09:00:00">09:00</option>
                        <option value="10:00:00">10:00</option>
                        <option value="11:00:00">11:00</option>
                        <option value="12:00:00">12:00</option>
                        <option value="13:00:00">13:00</option>
                        <option value="14:00:00">14:00</option>
                        <option value="15:00:00">15:00</option>
                        <option value="16:00:00">16:00</option>
                        <option value="17:00:00">17:00</option>
                        <option value="18:00:00">18:00</option>
                        <option value="19:00:00">19:00</option>
                        <option value="20:00:00">20:00</option>
                        <option value="21:00:00">21:00</option>
                        <option value="22:00:00">22:00</option>
                        <option value="23:00:00">23:00</option>
                      </Form.Control>
                    </Form.Group>
                  </div>
                  <div className="px-2 mb-2 "></div>
                  <Form.Group>
                    <br />
                    <Button onClick={fetchData} variant="primary" type="submit">
                      Submit
                    </Button>
                    <Snackbar
                      open={open}
                      autoHideDuration={1000}
                      onClose={handleClose}
                    >
                      <Alert onClose={handleClose} severity="success">
                        This is a success message!
                      </Alert>
                    </Snackbar>
                  </Form.Group>
                </Form.Row>
                <CanvasJSChart
                  options={{
                    colorSet: "green",
                    theme: "light2",
                    backgroundColor: "#EAFAF1",
                    animationEnabled: true,
                    zoomEnabled: true,
                    title: {
                      text: "Cycle Time",
                    },
                    axisX: {
                      labelAngle: -90,
                      labelAutoFit: false,
                      interval: 1,
                    },
                    axisY: {
                      title: "Time (sec)",
                      includeZero: false,
                    },
                    toolTip: {
                      shared: true,
                    },
                    legend: {
                      cursor: "pointer",
                      verticalAlign: "top",
                    },
                    data: [
                      {
                        type: "boxAndWhisker",
                        name: "Box CT",
                        showInLegend: true,
                        dataPoints: chartData.map((a) => {
                          let daa = a.y
                            .filter((a) => a < 40)
                            .map((v) => parseFloat(v).toFixed(2) - 0)
                            .sort((a, b) => a - b);
                          let min = Math.min(...daa);
                          let max = Math.max(...daa);
                          let q1 =
                            daa[parseInt(((daa.length + 1) * 1) / 4)] - 0;
                          let q2 =
                            daa[parseInt(((daa.length + 1) * 2) / 4)] - 0;
                          let q3 =
                            daa[parseInt(((daa.length + 1) * 3) / 4)] - 0;
                          let length = daa.length;
                          console.log("EQUIP >> ", a.label);
                          console.log("data", daa);
                          console.table([min, q1, q2, q3, max, length]);
                          return {
                            label: [a.label],
                            y: [
                              min, // min
                              q1, //q1
                              q3, //q3
                              max, // max
                              q2, //q2
                            ],
                          };
                        }),
                      },
                      {
                        type: "line",
                        name: "Mean",
                        showInLegend: true,
                        dataPoints: chartData.map((a) => {
                          let daa = a.y
                            .filter((a) => a < 40)
                            .map((v) => parseFloat(v).toFixed(2) - 0)
                            .sort((a, b) => a - b);
                          let mean =
                            parseFloat(
                              daa.reduce((result, number) => result + number) /
                                daa.length
                            ).toFixed(2) - 0;
                          return {
                            label: [a.label],
                            y: mean,
                          };
                        }),
                      },
                    ],
                  }}
                />
                <Table
                  className="Showgraph-table"
                  aria-label="simple table"
                  id="emp"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">
                        <font size="3">Machine No.</font>
                      </TableCell>
                      <TableCell align="center">
                        <font size="3">Max</font>
                      </TableCell>
                      <TableCell align="center">
                        <font size="3">Min</font>
                      </TableCell>
                      <TableCell align="center">
                        <font size="3">Median</font>
                      </TableCell>
                      <TableCell align="center">
                        <font size="3">Mean</font>
                      </TableCell>
                      <TableCell align="center">
                        <font size="3">Load In</font>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {chartData.map((a, id) => {
                      let daa = a.y
                        .filter((a) => a < 40)
                        .map((v) => parseFloat(v).toFixed(2) - 0)
                        .sort((a, b) => a - b);
                      let min = Math.min(...daa);
                      let max = Math.max(...daa);
                      let q1 = daa[parseInt(((daa.length + 1) * 1) / 4)] - 0;
                      let q2 = daa[parseInt(((daa.length + 1) * 2) / 4)] - 0;
                      let q3 = daa[parseInt(((daa.length + 1) * 3) / 4)] - 0;
                      let length = daa.length;
                      let mean =
                        parseFloat(
                          daa.reduce((result, number) => result + number) /
                            daa.length
                        ).toFixed(2) - 0;
                      return (
                        <TableRow key={id}>
                          <TableCell component="th" scope="row" align="center">
                            <font size="3">{a.label}</font>
                          </TableCell>
                          <TableCell align="center">
                            <font size="3">{max}</font>
                          </TableCell>
                          <TableCell align="center">
                            <font size="3">{min}</font>
                          </TableCell>
                          <TableCell align="center">
                            <font size="3">{q1}</font>
                          </TableCell>
                          <TableCell align="center">
                            <font size="3">{mean}</font>
                          </TableCell>
                          <TableCell align="center">
                            <font size="3">{length}</font>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
    </div>
  );
}

export default Cycletime;
