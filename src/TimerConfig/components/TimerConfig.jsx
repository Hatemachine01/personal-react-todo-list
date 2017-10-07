import React, {Component} from "react";
import moment from 'moment';



class TimerConfig extends Component {

constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    }

handleChange(event) {
    const newBaseTime = moment.durantion(0);
        if (event.target.id === 'hours') newBaseTime.add(event.target.value, 'hours');
        if (event.target.id === 'minutes')newBaseTime.add(event.target.value, 'minutes');
        if (event.target.id === 'seconds')newBaseTime.add(event.target.value, 'seconds');

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
                    <input id="hours" className="form-control" type="number" defaultValue={this.props.BaseTime.get('hours')}/>
                    </div>
                  </div>
                  </div>
                  <div className="row control-row">
                  <div className="form-group">
                    <div className="col-sm-3">
                      <label htmlFor="minutes"> Minutes </label>
                    </div>
                    <div className="col-sm-9">
                    <input id="minutes" className="form-control" type="number" defaultValue={this.props.BaseTime.get('minutes')}/>
                    </div>
                  </div>
                  <div className="row control-row">
                    </div><div className="form-group">
                      <div className="col-sm-3">
                        <label htmlFor="seconds"> Seconds  </label>
                      </div>
                      <div className="col-sm-9">
                      <input id="seconds" className="form-control" type="number" defaultValue={this.props.BaseTime.get('seconds')}/>
                      </div>
                  </div>
                </div>
              </div>

        
);
    }
}
export default TimerConfig; 