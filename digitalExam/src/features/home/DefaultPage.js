import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import axios from 'axios';
import * as actions from './redux/actions';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

export class DefaultPage extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };
   constructor() {
    super();
    this.state =
      {
        usPresident: '',
        longestRiver: '',
        largestCountry: '',
        southafrica: '',
        multiply: 0,
        multiply2: 0,
        largestNumber: 0,
        primenumber: 0,
        herbivores: '',
        mammal: '',
        human: '',
        spider: '',
      };
    this.onsubmit = this.onsubmit.bind(this);
  }
  componentWillMount() {}
  onsubmit(){
    const query = {
        url: 'http://localhost:8000/test',
        method: 'post',
        data: {
            usPresident: this.state.usPresident.toLocaleUpperCase().trim(),
            longestRiver: this.state.longestRiver.toLocaleUpperCase().trim(),
            largestCountry: this.state.largestCountry.toLocaleUpperCase().trim(),
            southafrica: this.state.southafrica.toLocaleUpperCase().trim(),
            multiply: this.state.multiply,
            multiply2: this.state.multiply2,
            largestNumber: this.state.largestNumber,
            primenumber: this.state.primenumber,
            herbivores: this.state.herbivores.toLocaleUpperCase().trim(),
            human: this.state.human.toLocaleUpperCase().trim(),
            spider: this.state.spider.toLocaleUpperCase().trim(),
            mammal: this.state.mammal.toLocaleUpperCase().trim(),
        },
      };
      axios(query).then((res) => {
        Swal.fire({
          title: 'Your total score?',
          html: `Text -  ${res.data.scoreText} out of 80 <br> Numeric -  ${res.data.scoreNumeric} out of 80 <br> Binary -  ${res.data.scoreBinary} out of 80`,
          type: 'success',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
        }).then((result) => {
          if (result.value) {
            window.location.reload();
          }
        })     
      }).catch((err) => {
       Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong...',
        });
      });
  }
  render() {
    return (
      <div className="home-default-page">
        <header className="app-header"><br/>
          <h1 className="app-title">Complete Digital Exam</h1>
        </header>
        <br/>
        <div style={{margin:10, padding:10}}>
          <h1>Text Questions</h1><hr/>
          <Form >
            <FormGroup row>
            <Label sm={5}>1. President of USA?</Label>
            <Col sm={4}>
              <Input type="text" onChange={e => this.setState({ usPresident: e.target.value })}/>
            </Col>            
            </FormGroup>
            <FormGroup row>
              <Label sm={5}>2. What is the longest river in the world?</Label>
              <Col sm={4}>
                <Input type="text" onChange={e => this.setState({ longestRiver: e.target.value })}/>
              </Col>            
            </FormGroup>
            <FormGroup row>
              <Label sm={5}>3. Which is the largest country (by land area)?</Label>
              <Col sm={4}>
                <Input type="text" onChange={e => this.setState({ largestCountry: e.target.value })}/>
              </Col>            
            </FormGroup>
            <FormGroup row>
              <Label sm={5}>4. South Africa's currency?</Label>
              <Col sm={4}>
                <Input type="text" onChange={e => this.setState({ southafrica: e.target.value })}/>
              </Col>            
            </FormGroup>
          </Form>
           <h1>Numeric</h1><hr/>
          <Form >
            <FormGroup row>
            <Label sm={5}>1. 10 x 2 - 8?</Label>
            <Col sm={4}>
              <Input type="text" onChange={e => this.setState({ multiply: e.target.value })}/>
            </Col>            
            </FormGroup>
            <FormGroup row>
              <Label sm={5}>2. Divide a thousand by a hundred?</Label>
              <Col sm={4}>
                <Input type="text" onChange={e => this.setState({ multiply2: e.target.value })}/>
              </Col>            
            </FormGroup>
            <FormGroup row>
              <Label sm={5}>3. What is the largest prime number less than 20?</Label>
              <Col sm={4}>
                <Input type="text" onChange={e => this.setState({ largestNumber: e.target.value })}/>
              </Col>            
            </FormGroup>
            <FormGroup row>
              <Label sm={5}>4. Which of the following is a prime number ?(81,33,97)</Label>
              <Col sm={4}>
                <Input type="text" onChange={e => this.setState({ primenumber: e.target.value })}/>
              </Col>            
            </FormGroup>            
          </Form>
           <h1>Binary Answers</h1><hr/>
          <Form >
            <FormGroup row>
            <Label sm={5}>1. Sharks are mammals?</Label>
            <Col sm={4}>
              <Input type="text" onChange={e => this.setState({ mammal: e.target.value })} placeholder="yes / no"/>
            </Col>            
            </FormGroup>
            <FormGroup row>
              <Label sm={5}>2. The human body has four lungs?</Label>
              <Col sm={4}>
                <Input type="text" onChange={e => this.setState({ human: e.target.value })} placeholder="yes / no"/>
              </Col>            
            </FormGroup>
            <FormGroup row>
              <Label sm={5}>3. Herbivores eat meat?</Label>
              <Col sm={4}>
                <Input type="text" onChange={e => this.setState({ herbivores: e.target.value })} placeholder="yes / no"/>
              </Col>            
            </FormGroup>
            <FormGroup row>
              <Label sm={5}>4. Spiders have six legs?</Label>
              <Col sm={4}>
                <Input type="text" onChange={e => this.setState({ spider: e.target.value })} placeholder="yes / no"/>
              </Col>            
            </FormGroup>            
          </Form>
          <Button onClick={this.onsubmit}>Submit</Button>
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    home: state.home,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultPage);
