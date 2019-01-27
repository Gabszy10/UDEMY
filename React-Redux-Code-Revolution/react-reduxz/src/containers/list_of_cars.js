import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

class ListOfCars extends Component {
   
    listOfCars = ({list}) => {
        if(list){
            return list.map((car) => {
                return(
                    <Link key={car.id} to={`/car/${car.id}`} className="car_item">
                        <div className="left">
                            <img src={`/images/${car.image}`}/>
                        </div>

                        <div className="right">
                            <h4>{car.model}</h4>
                            <h6>{car.brand}</h6>
                        </div>

                    </Link>
                )
            })
        }
    }

    render() { 
        return (  
            <div>
                {this.listOfCars(this.props.cars)}
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        cars:state.cars
    }
}
 
export default connect(mapStateToProps)(ListOfCars);