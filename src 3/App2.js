import React, { Component } from 'react'

export default class App2 extends Component {
    constructor(){
        super();
        this.state={
            Users:[
            {"Userid":101,"Username":"Raj"},
            {"Userid":102,"Username":"Rajee"},
            {"Userid":103,"Username":"Raj kumar"}
            ]


        }
    }
  render() {
    return (
      <div>App2
<table border="1" cellPadding="0" cellSpacing="0">
        <tr>
            <th>UserId</th>
            <th>UserName</th>
           
        </tr>

{
    this.state.Users.map(item=>
        
      <tr>
        <td>{item.Userid}</td>
        <td>{item.Username}</td>
       
      </tr>
        
       
  
    )
}
</table>



      </div>
    )
  
}
}

