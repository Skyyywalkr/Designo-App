import React, { Component } from 'react'
import './App.css';
import Twit from './twit';
import Aspect from './aspect'
import Review from './review'
import Table from './table'
import Button from './button'

export default class App extends Component {
  render() {
    return (
      <div>
        <Twit />
        <Aspect />
        <Review />
         <Button />
        <Table />

      </div>
    )
  }
}
