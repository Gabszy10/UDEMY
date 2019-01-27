import React, { Component } from 'react';
import './product-condensed.css';

class ProductCondensed extends Component {
    state = {  }
    render() { 
        return (  
            <li className="list-group-item pc-condensed">
                <div className="row">
                    <div className="col-lg-2 col-md-12 col-xs-12">
                        <a className="btn btn-outline-danger">X</a>
                    </div>
                    <div className="col-lg-7 col-md-12 col-xs-12">
                        <p>{this.props.product.title} | <b>${this.props.product.price}</b></p>
                    </div>
                    <div className="col"></div>
                </div>
            </li>
        );
    }
}
 
export default ProductCondensed;
