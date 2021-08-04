import React from "react";






// var gaugeElement = document.querySelector(".gauge");


export default class Displaying extends React.Component{
  constructor(props) {

    super(props);
    };
    //  setGaugeValue( value) {
    //   if (value < 0 || value > 1) {
    //     return;
    //   }
    
    //   gaugeElement.querySelector(".gauge__fill").style.transform = `rotate(${
    //     value / 2
    //   }turn)`;

    //   gaugeElement.querySelector(".gauge__cover").textContent = `${Math.round(
    //     value * 100
    //   )}%`;
    // }

    render(){
      

      return (
        <tr>
        <th scope="row">{this.props.sensor.sensorid}</th>
        <td>{this.props.sensor.sensorname}</td>
        {this.props.sensor.sensortype==2 &&
        <td>
        <div className="progress">
          <div className="progress-bar" role="progressbar" aria-valuenow={this.props.sensor.sensordata}
              aria-valuemin="0" aria-valuemax="100" style={{width:`${this.props.sensor.sensordata}%`}}>
              {this.props.sensor.sensordata} %
          </div>
        </div>        
        </td>
    }
      {this.props.sensor.sensortype==1 &&
        <td>
              <div class="gauge">
            <div class="gauge__body">
              <div class="gauge__fill" style={{transform:`rotate(${this.props.sensor.sensordata /200}turn)`}}></div>
              <div class="gauge__cover">{this.props.sensor.sensordata}%</div>
            </div>
          </div>
        </td>
    }

      </tr>
      );
}
}

















