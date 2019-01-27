import React, { Component } from 'react';

const URL_TEAM = 'http://localhost:3004/teams'

class Team extends Component {
    state = {  
        data:[]
    }

    componentDidMount(){
        fetch(`${URL_TEAM}?name=${this.props.match.params.id}`, {method: 'GET'})
        .then(res => res.json())
        .then(json => {
            this.setState({
                data:json
            })
        })
            
    }

    renderSquad = (squad) => {
        return squad.map((item) => {
            return(
                <div key={item.name} className="item player_wrapper">
                        <img src={`/images/avatar.png`}/>
                        <h4>{item.name}</h4>
                        <div className="node">
                            <span>Number:</span>{item.number}
                        </div>
                        <div className="node">
                            <span>PPG:</span>{item.PPG}
                        </div>
                        <div className="node">
                            <span>APG:</span>{item.APG}
                        </div>  

                </div>
            )
        })
    }

    renderData = ({data}) => {
        console.log(data);
        return data.map((item) => {
            
            return(
                <div key={item.id} className="team_data_wrapper">
                    <div className="left">
                        <img src={`/images/teams/${item.logo}`} alt={item.name}/>
                    </div>
                    <div className="right">
                        <h1>{item.name}</h1>
                        <p>{item.description}</p>
                        <hr/>
                        <div className="squad">
                            {this.renderSquad(item.squad)}
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() { 
        return (  
            <div className="team_data">
                {this.renderData(this.state)}
            </div>
        );
    }
}
 
export default Team;