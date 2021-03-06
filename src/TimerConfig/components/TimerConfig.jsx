import React, {Component} from "react";
import moment from 'moment';



class TimerConfig extends Component {

constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    }

handleChange(event) {
    const newBaseTime = this.props.BaseTime
        if (event.target.id === 'hours') newBaseTime.subtract(newBaseTime.get('hours', 'hours')).add(parseInt(event.target.value, 10), 'hours');
        if (event.target.id === 'minutes') newBaseTime.subtract(newBaseTime.get('minutes','minutes')).add(parseInt(event.target.value, 10), 'minutes');
        if (event.target.id === 'seconds') newBaseTime.subtract(newBaseTime.get('seconds', 'seconds')).add(parseInt(event.target.value, 10),'seconds');

    this.props.setBaseTime(newBaseTime);
 


    }
render() {
    return (
    
    <div className="row">
                 <h2 className="text-primary"> Set Timer</h2>
                <div className="row control-row ">
                  <div className="form-group">
                    <div className="col-sm-3">
                      <label htmlFor="hours">Hours </label>
                    </div>
                    <div className="col-sm-9">
                    <input id="hours" 
                    className="form-control"
                    type="number" defaultValue={this.props.BaseTime.get('hours')}
                    onChange={this.handleChange}
                     />
                    </div>
                  </div>
                  </div>
                  <div className="row control-row">
                  <div className="form-group">
                    <div className="col-sm-3">
                      <label htmlFor="minutes"> Minutes </label>
                    </div>
                    <div className="col-sm-9">
                    <input id="minutes"
                     className="form-control"
                     type="number" defaultValue={this.props.BaseTime.get('minutes')}
                     onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="row control-row">
                    </div><div className="form-group">
                      <div className="col-sm-3">
                        <label htmlFor="seconds"> Seconds  </label>
                      </div>
                      <div className="col-sm-9">
                      <input id="seconds" 
                      className="form-control" 
                      type="number" 
                      defaultValue={this.props.BaseTime.get('seconds')}
                      onChange={this.handleChange}
                      />
                      </div>
                  </div>
                </div>
              </div>

        
);
    }
}
export default TimerConfig; 