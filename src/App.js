//import {useState} from 'react';
import React from 'react';
import './App.css';
import './Modal.css';
import NurseRecords from './nurse_list.json';
import ShiftRecords from './shift_list.json';
import { Container } from "react-bootstrap";
import Modal from './Modal.js';


function FetchData(){
  return(
<React.Fragment>
      <>
        <Modal />
      </>
        <Container className="content">
        <div className="row">
          <div className="col-sm-8">
         <table className="table text-white table-bordered mt-2">
              <thead>
                <tr>              
                  <th scope="col">Shift</th>
                  <th scope="col">Start Time</th>
                  <th scope="col">End Time</th>
                  <th scope="col">Certification Required</th>
                  <th scope="col">Assigned Nurse</th>         
                </tr>
              </thead>
              <tbody> 
                {
                    ShiftRecords.map( (shifts)=> (
                    NurseRecords.map( (users, index)=>(
                    <tr key={index}>                 
                  <th>{ shifts.name}</th>
                  <td>{ shifts.start} </td>
                  <td>{ shifts.end} </td>
                  <td>{ shifts.qual_required} </td>
                  <td>{ users.first_name} { users.last_name} , { users.qualification}</td>                  
                </tr>
                  ))
                  ))
                }             
              </tbody>
            </table>
        </div>
        </div>
     </Container>
</React.Fragment>

);
}

export default FetchData;
