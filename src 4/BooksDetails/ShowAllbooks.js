import React, { Component } from 'react'


import {Table} from 'react-bootstrap';
export default class ShowAllbooks extends Component {
constructor()
{
    super();
    this.state={Books:[]};
}
showallbooks()
{
    const url="https://localhost:44320/api/books";
    fetch(url).then(res=>res.json()).
    then(resultdata=>{
        this.setState({Books:resultdata})
    })
}
componentDidMount()
{
    this.showallbooks();
}


  render() {
    const {Books}=this.state;
    return (
        <><div>Book info</div>
        <Table striped bordered hover size='StrictMode'>
              <tr>
                  <th>Book Id</th>
                  <th>Title</th>
                  <th>Description first_name</th>
          
              
              </tr>
  
              {
             Books.map(x => <tr>
                  <td> {x.id}  </td>
                  <td> {x.title}  </td>
                  <td> {x.description}  </td>
               
  
              </tr>
  
              )
             }
  
  
          </Table></>
  
      )
}

}