import React, { Component } from 'react';

//COMPONENTS
import Featured from './featured';
import Subscriptions from './subscriptions';
import Blocks from './blocks';
import Poll from './poll';

const URL_HOME = 'http://localhost:3004/home';

class Home extends Component {
    state = {  
        home: ''
    }

    componentDidMount(){
        fetch(URL_HOME,{method:'GET'})
        .then(res => res.json())
        .then(json => {
             this.setState({
                 home: json
             })
        })
    }

    render() { 
        return (  
            <div>
                <Featured slides={this.state.home.slider}/>
                <Subscriptions/>
                <Blocks blocks={this.state.home.blocks}/>
                <Poll/>
            </div>
        );
    }
}
 
export default Home;