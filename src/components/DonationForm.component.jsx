import React, { Component } from 'react'
import axios from 'axios'
import { TextField, Button } from '@material-ui/core'

export class DonationForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      cardNumber: '4242424242424242',
      expiryMonth: '04',
      expiryYear: '2024',
      cvc: '123',
      amount: '5'
    }
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = async e => {
    e.preventDefault()

    const {
      name,
      email,
      cardNumber,
      expiryMonth,
      expiryYear,
      cvc,
      amount
    } = this.state

    const token = await axios
      .post('http://localhost:8000/donate', {
        name: name,
        email: email,
        number: cardNumber,
        exp_month: expiryMonth,
        exp_year: expiryYear,
        cvc: cvc,
        amount: amount
      })
      .then(token => console.log(token.data))
      .catch(err => console.log(err))
    return token
  }

  render() {
    const {
      name,
      email,
      cardNumber,
      expiryMonth,
      expiryYear,
      cvc,
      amount
    } = this.state

    return (
      <form className='donation-form'>
        <TextField
          className='form-field'
          name='name'
          label='Full name'
          placeholder='Enter your full name'
          type='text'
          value={name}
          variant='outlined'
          onChange={this.handleChange}
        />
        <TextField
          className='form-field'
          name='email'
          label='E-mail'
          placeholder='Enter your e-mail'
          type='email'
          value={email}
          variant='outlined'
          onChange={this.handleChange}
        />
        <TextField
          className='form-field'
          name='cardNumber'
          label='Card number'
          placeholder='Enter your credit card number'
          type='text'
          value={cardNumber}
          variant='outlined'
          onChange={this.handleChange}
        />
        <TextField
          className='form-field'
          name='expiryMonth'
          label='Expiry month'
          placeholder="Enter your card's expiry month"
          type='text'
          value={expiryMonth}
          variant='outlined'
          onChange={this.handleChange}
        />
        <TextField
          className='form-field'
          name='expiryYear'
          label='Expiry year'
          placeholder="Enter your card's expiry year"
          type='text'
          value={expiryYear}
          variant='outlined'
          onChange={this.handleChange}
        />
        <TextField
          className='form-field'
          name='cvc'
          label='CVC'
          placeholder="Enter your card's CVC"
          type='text'
          value={cvc}
          variant='outlined'
          onChange={this.handleChange}
        />
        <TextField
          className='form-field'
          name='amount'
          label='Amount'
          placeholder='Amount to donate'
          type='text'
          value={amount}
          variant='outlined'
          onChange={this.handleChange}
        />
        <Button variant='contained' color='primary' onClick={this.handleSubmit}>
          Charge
        </Button>
      </form>
    )
  }
}

export default DonationForm
