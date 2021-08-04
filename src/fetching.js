import React from "react";
import Displaying from './displaying'
import Switching from './switching'

export default class Fetching extends React.Component{
    constructor(props){
    super(props);
    this.state={
        actors:'',
        sensors:'',
        loading:true,
    }
    this.handler = this.handler.bind(this)

}
    async componentDidMount(){
        const apiUrl1 = 'http://webswitch.ir:3000/actors';
        const response = await fetch(apiUrl1);
        const data1 = await response.json();
        this.setState({actors:data1.actors})

        const apiUrl2 = 'http://webswitch.ir:3000/sensors';
        const response2 = await fetch(apiUrl2);
        const data2 = await response2.json();
        this.setState({sensors:data2.sensors,
                     loading: false})
    };
    handler(id, status) {
  
        var newstatus= status==1 ? 0 : 1

        
        
        this.switch(id, newstatus)
        

      }
      async switch(id , newstatus){
        const apiUrl1 = 'http://webswitch.ir:3000/actors';
        const updateddata = {'actorid': id, 'actorstatus':newstatus}
        console.log (updateddata)
        const response = await fetch(apiUrl1,{ method:'POST', headers:{'Content-type':'application/json', 'Accept':'application/json'}, body:JSON.stringify(updateddata)});
        const data1 = await response.json();
        this.componentDidMount()


    };
    render(){
    if (this.state.loading){
        return(
            <h1>loading ....</h1>
        )};
    if (this.state.sensors) {
        return(
            <div>
                <table className="table table-striped ">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Percentage</th>
                    </tr>
                </thead>
                <tbody>
                        {this.state.sensors.map((sensor,i) => <Displaying key={i} sensor={sensor}/>)}
                 </tbody>
                 </table>
                 <table className="table table-dark">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Switch</th>
                    </tr>
                </thead>
                <tbody>
                        {this.state.actors.map((actor,i) => <Switching key={i} actor={actor} handler={this.handler} />)}
                 </tbody>
                 </table>
            </div>
        )

    };
}
}
