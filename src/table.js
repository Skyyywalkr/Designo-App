import React, { Component } from 'react'
import { Table } from 'reactstrap';
export default class table extends Component {
    render() {
        return (
            <div>
                <Table size="sm">
      <thead>
        <tr style={{backgroundColor: "#202020", color : "white"}}>
          <th>#</th>
          <th>Twit</th>
          <th>Aspect</th>
          <th>Review</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row"></th>
          <td></td>
          <td></td>
          <td></td>
          <td><button>Positive</button> <button>Nagitive</button></td>
        </tr>
       
      </tbody>
    </Table>

                
            </div>
        )
    }
}
