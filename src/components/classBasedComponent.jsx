import React from 'react'

class ClassBasedComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
           count:0
        }
    }
       inc=()=>{
        this.setState( {count:this.state.count+1})
       }

       dnc=()=>{
        this.setState( {count:this.state.count-1})
       }
        
        
        render(){
        return(
            <>
            <h1> this is {this.props.name}from{this.props.children}
            </h1>
           <button onClick={()=>{this.inc()}}>Inc</button>
           <button onClick={()=>{this.dnc()}}>Dnc</button>
           <h1>count is{this.state.count}</h1>
          
           </>
            
        );
    }

  }
export default ClassBasedComponent;