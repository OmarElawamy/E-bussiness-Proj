import React, {Component} from "react";
import './LinkComp.css'; 
class LinkComp extends Component{
    render(){
        return(
            <div>
                <a href="www.google.com">google</a>
                <p>this is my paragarph</p>
                <p>{this.props.name}</p>
            </div>
            
        )
    }
}
export default LinkComp;