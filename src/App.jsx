import React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Input, Select, Space } from 'antd';
import TableComponent from './table';
import { Table ,Button, Form} from 'antd';

import axios from 'axios';
import './App.css';

function App() {

  const [options, setOptions] = useState([]);
  const [change, setChange] = useState("");
  const [tableData, setTableData] = useState([]);
  const [data, setData] = useState([])
  const { TextArea } = Input;
const tac =[]
const newData = [...tableData];
const handleInputChange =(event,record)=> {
 
  
  const index = newData.findIndex((item)=> record.jobCode === item.jobCode);
// console.log(newData[index].Address)
tac.push({index})
  if(index > -1){
    newData[index].inputValue = event.target.value;
   setTableData(newData);
 
  }
}
  
 console.log(tableData)
// console.log(tac)
  const columns = [
    {
      title: 'Job Code',
      dataIndex: 'jobCode',
      key: 'jobCode',
    },
    {
      title: 'Project Address',
      dataIndex: 'Address',
      key: 'Address',
    },
  {
    title: 'Report',
    dataIndex: 'input',
    key: 'input',
    render: (text, record) => (
      <TextArea
value={record.inputValue}
        onChange={(event) => handleInputChange(event, record)}
      />
    ),
  },];
  useEffect(() => {
    axios.get('http://localhost:3000/getPmList').then((response) => {
        setOptions(response.data);
      
      
      });
    }, []); 
    async function handleSubmit(event){
event.preventDefault();
const response = await fetch('http://localhost:3000/getData',{
  method:'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body:JSON.stringify({change})
});
const result = await response.json();
// setTableData(response.data)
// console.log(tableData)
console.log(result);
setTableData(result)

// console.log(change)
    }
      function handleChannge(event){
        setChange(event.target.value);
     
      }
      console.log(change)
    


      function onFinish(){
      fetch('http://localhost:3000/getDailyReport',{
        method: 'post',
        headers:{'Content-Type':'application/json',
        'Accept':'application/json',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'
       
       
        },
        body :JSON.stringify({
          tableData:tableData,
      
        }
        )
      }).then((result)=>{
        console.log("result",result);
       }); 
       

      }
  
  return (
  <div>
  <div></div>
      <form onSubmit={handleSubmit} id="WW">

        <select onChange={handleChannge} id="dd">

          {options.map((value) => (<option key={value} value={value}>{value}</option>))}
        </select>
        <Button type="primary" htmlType="submit" > Get Details </Button>
      </form>
      <Form onFinish={onFinish}>
      <Table columns={columns} dataSource={tableData}  />
      <Button type="primary" htmlType="submit" style={{float: 'right'}}> submit report </Button></Form>
   
      
    </div>

   
  )
}

export default App;
