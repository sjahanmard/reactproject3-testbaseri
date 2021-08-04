import { max } from "d3-array";
import React from "react";



export default class Displaying extends React.Component{ 
    constructor(props) {
        super(props);
        
        // if (this.state == null){
        // // this.state = {
        // //     [`s${this.props.actor.actorid}`]: false
        // // }
        // console.log(this.state.s1)
        // }


  
        }
        switchUpdate = () => {

                this.props.handler(this.props.actor.actorid, this.props.actor.actorstatus);
                console.log(this.props.actor.actorid, ' this is the child')
  

            // this.setState(()=>({toggleVar:[...this.state.toggleVar, this.props.actor.actorid]}))

            // this.setState(prevState => ({toggleVar:!prevState.toggleVar}))
            
            
        }


    render(){

    return (
        <tr>
        <th scope="row">{this.props.actor.actorid}</th>
        <td>{this.props.actor.actorname}</td>
        <td>
        <div className="form-check form-switch ">
  <input className="form-check-input " type="checkbox" id="flexSwitchCheckDefault" checked={this.props.actor.actorstatus} onChange={this.switchUpdate}/>

</div>
        </td>

      </tr>
      );}}
 
