import { Component } from 'react';
import './Doctor.css'

class Doctor extends Component {
    constructor(){
        super()
        this.state={

        }

    }
    render(){
        return(
            <div className='doctor_Container'>
            
              <img src={this.props.img_URL} alt="" />
              <h2>{this.props.position}</h2>
              <h1>{this.props.name}</h1>
              <p>{this.props.abilities}</p>
            </div>
        )
    }
}
export default Doctor;
