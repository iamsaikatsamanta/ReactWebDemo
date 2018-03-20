import React from 'react';
import {Route,Link} from 'react-router-dom'
const style={
    main:{
        margin:"10px auto"
    },
    cont:{
        paddingLeft:"12px"
    }
};

const Property = (props)=>{
    const r="/"+props.id;
    return (
            <div className="media" style={style.main}>
                <div className="img-thumbnail"><img className="mr-3" src={props.img} alt="Generic placeholder image"/></div>
                <div className="media-body" style={style.cont}>
                    <h4 className="mt-0">{props.title}</h4>
                    <h5>{props.add}</h5>
                    <Link className="btn btn-primary" to={r}>MoreInfo</Link>
                </div>
                <Route path={r} render={()=>
                    <h1></h1>
                }
                />
            </div>
    );
};

export default Property;