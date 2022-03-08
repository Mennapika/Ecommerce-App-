import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import"../Directory/Directory.styles.scss"
import{withRouter} from"react-router-dom"

 class Directory extends Component {
    constructor({history}){
    super();
    this.state={
        sections:[
            {
               name:"ALL",
               id:1
            }
            ,
            {
                name:"Tech",
                id:2
            },,
            {
                name:"clothes",
                id:3
            }
        ]
    }
    }   
  render() {
    return (
      <div className='directory-nav'>
          <ul className='directory-list'>
          {this.state.sections.map(({name,id})=>(
             <li key={id}> 
             <Link className='directory-item' onClick={()=>this.props.history.push(`${name}`)} >{name}</Link>
             </li>
          ))}
          </ul>
      </div>
    )
  }
}
export default withRouter(Directory)