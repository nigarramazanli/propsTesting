import { Component } from 'react';
import './Doctor.css'
import Doctor from './Doctor'; // Import edirik Doctor(1) componentini Doctor.jsx(2) file-indan.


class MainDoctorDiv extends Component {
    constructor(){
        super();
        this.state = {
            arrayDoctors: [
                {
                    img_URL:"https://assets.nicepagecdn.com/d2cc3eaa/58817/images/1.jpg",
                    position:"General Dentist",
                    name:"Dr. Bob Brown",
                    abilities:"Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum"

                },
                {
                    img_URL:"https://assets.nicepagecdn.com/d2cc3eaa/58817/images/2.jpg",
                    position:"General Dentist",
                    name:"Dr. Mary Smith",
                    abilities:"Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum"

                },
                {
                    img_URL:"https://assets.nicepagecdn.com/d2cc3eaa/58817/images/jhhhj6.jpg",
                    position:"Orthodontist",
                    name:"Dr. Nick Dark",
                    abilities:"Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum"

                },
                {
                    img_URL:"https://assets.nicepagecdn.com/d2cc3eaa/58817/images/yy.jpg",
                    position:"Endodontist",
                    name:"Dr. May Dowson",
                    abilities:"Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum"

                },
                {
                    img_URL:"https://assets.nicepagecdn.com/d2cc3eaa/58817/images/gffgfgg.jpg",
                    position:"Pediatric Dentist",
                    name:"Dr. Betty Nilson",
                    abilities:"Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum"

                },
                {
                    img_URL:"https://assets.nicepagecdn.com/d2cc3eaa/58817/images/hghg.jpg",
                    position:"Orthodontist",
                    name:"Dr. Adrian Scold",
                    abilities:"Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum"

                }
            ]
        }
    }
    render(){
        return(
            <div className='main_Doctors_Container'>
                <Doctor
                img_URL= {this.state.arrayDoctors[0].img_URL}
                position= {this.state.arrayDoctors[0].position}

                
                name={this.state.arrayDoctors[0].name}
                abilities= {this.state.arrayDoctors[0].abilities}

                />
                <Doctor
                img_URL= {this.state.arrayDoctors[1].img_URL}
                position= {this.state.arrayDoctors[1].position}

                
                name={this.state.arrayDoctors[1].name}
                abilities= {this.state.arrayDoctors[1].abilities}
                 />
                <Doctor
                img_URL= {this.state.arrayDoctors[2].img_URL}
                position= {this.state.arrayDoctors[2].position}

                
                name={this.state.arrayDoctors[2].name}
                abilities= {this.state.arrayDoctors[2].abilities} />
                <Doctor
                img_URL= {this.state.arrayDoctors[3].img_URL}
                position= {this.state.arrayDoctors[3].position}

                
                name={this.state.arrayDoctors[3].name}
                abilities= {this.state.arrayDoctors[3].abilities} />
                <Doctor
                img_URL= {this.state.arrayDoctors[4].img_URL}
                position= {this.state.arrayDoctors[4].position}

                
                name={this.state.arrayDoctors[4].name}
                abilities= {this.state.arrayDoctors[4].abilities} />
                <Doctor
                img_URL= {this.state.arrayDoctors[5].img_URL}
                position= {this.state.arrayDoctors[5].position}

                
                name={this.state.arrayDoctors[5].name}
                abilities= {this.state.arrayDoctors[5].abilities} />




            </div>
        )
    }
}
export default MainDoctorDiv