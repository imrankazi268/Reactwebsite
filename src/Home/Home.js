import React, { Component } from "react";
import { Button, Card, Table, ListGroup } from 'react-bootstrap';
import history from './../history';
import "./Home.css";

export default class Home extends Component {
  constructor(){
    super();
    this.state = {
      name: {title: '', first: '', last: ''},
      image: '',
      thumb:'',email:'',dob:'',phone:'',login:'',
      myoptions:[]
    };
    // fix the this value
    this.getUser = this.getUser.bind(this);
  }

  componentWillMount() {
    this.getUser();
  
  }

  getUser() {
    fetch('https://randomuser.me/api/')
    .then(response => {
      if(response.ok) return response.json();
      throw new Error('Request failed.');
    })
    .then(data => {
      this.setState({name: data.results[0].name,
                image: data.results[0].picture.large,thumb:data.results[0].picture.thumbnail,email:data.results[0].email,
                dob:data.results[0].dob.age,phone:data.results[0].phone,login:data.results[0].login.username})
    })
    .catch(error => {
      console.log(error);
    });

  }

  render() {
    return (
      <div className="">
        <div className="">
  
  <div >

    <Table>
    <tr><td>   <Card border="info" style={{ width: '18rem' }}>
    <Card.Header style={{background:'#ffcccee'}}><h5>Welcome to 
    Podar</h5></Card.Header>
   <Card.Img src={this.state.image} />
   <Card.Body>
   
     <Card.Text>
       Welcome : <b>{`${this.state.name.first}`} </b>        
         <p>
 It is a long established fact that a reader will be distracted by the readable content</p>
     </Card.Text>
     <Button variant="danger" onClick={this.getUser}>Get New user</Button>


   </Card.Body>
 </Card></td><td> 


<ListGroup as="ul" style={{'text-align':'left', float:'right'}}>

<ListGroup.Item as="li"><b>Name :</b> {`${this.state.name.title} ${this.state.name.first} ${this.state.name.last}`}</ListGroup.Item>
  <ListGroup.Item as="li"><b>Email :</b> {this.state.email}</ListGroup.Item>
  <ListGroup.Item as="li"><b>Age :</b> {this.state.dob}</ListGroup.Item>
  <ListGroup.Item as="li" >
  <b>Phone :</b> {this.state.phone}
  </ListGroup.Item>
  <ListGroup.Item as="li"><b>Username :</b>{this.state.login}</ListGroup.Item>
  <ListGroup.Item as="li" >
  <form>
            <Button variant="btn btn-success" onClick={() => history.push('/Products')}>View products</Button>
          </form></ListGroup.Item>
</ListGroup></td></tr>  
    </Table>
 
  </div>
      
        </div>
      </div>
    );
  }
}
