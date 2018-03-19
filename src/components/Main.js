import React, { Component } from 'react';
import Property from './Property';
import {getProperties} from '../Logic/requestAPI';


const styles={
  property : {
    width: '80%',
    padding: 50,
    maxHeight: 200,
      border:"2px solid #898f99"
  },
  img:{
    float: "left"
  },
  title:{
      float: "left",
      marginLeft:"12px"
  },
  add:{
      align:"left",
      marginLeft:"12px",
      display:"inline-block"
  }
};
export default class Main extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      properties : []
    }
  }

  renderProperties = () => {
    getProperties().then(res=>{
      console.log(res);
      this.setState({properties:res.data.property_data});
    }).catch(err=>{
      console.log(err);
    })
  };

  componentDidMount(){
    this.renderProperties();
  }

  render(){
    return(
        <div>
            {
                this.state.properties.map(prop =>{
                    return(
                        <ul className="list-group">
                            <li className="list-group-item"><Property id={prop.id} title={prop.title} add={prop.address} img={prop.picture}/></li>
                        </ul>

                    )
                })
            }
        </div>
        )
  }
}
