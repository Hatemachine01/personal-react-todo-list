import React from "react"; 
import Header from "../../TimerHeader/components/TimerHeader";
import Display from "../../TimerDisplay/components/TimerDisplay";
import TimerButton from "../../TimerButton/components/TimerButton";

const Timer = ()=> (

<div className="Cotainer-fluid">
              <Header />
              <Display />
              <TimerButton  />
                <div className="row">
                 <h2 className="text-primary"> Set Timer</h2>
                <div className="row control-row ">
                  <div className="form-group">
                    <div className="col-sm-3">
                      <label htmlFor="hours">Hours </label>
                    </div>
                    <div className="col-sm-9">
                    <input id="hours" className="form-control" type="number"/>
                    </div>
                  </div>
                  </div>
                  <div className="row control-row">
                  <div className="form-group">
                    <div className="col-sm-3">
                      <label htmlFor="minutes"> Minutes </label>
                    </div>
                    <div className="col-sm-9">
                    <input id="hours" className="form-control" type="number"/>
                    </div>
                  </div>
                  <div className="row control-row">
                    </div><div className="form-group">
                      <div className="col-sm-3">
                        <label htmlFor="seconds"> Seconds  </label>
                      </div>
                      <div className="col-sm-9">
                      <input id="hours" className="form-control" type="number"/>
                      </div>
                  </div>
                </div>
              </div>
            </div>
)

export default Timer;