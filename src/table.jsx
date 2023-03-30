// import { Table } from 'antd';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function TableComponent() {
//   const [tableData, setTableData] = useState([]);

//   useEffect(() => {
//     axios.post('http://localhost:3000/getPmList')
//       .then(response => {
//         setTableData(response.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);

//   const columns = [
//     {
//       title: 'jobCode',
//       dataIndex: 'table',
//       key: 'table',
//     },
//     {
//       title: 'Address',
//       dataIndex: 'col',
//       key: 'col',
//     },

//   ];

//   return (
//     <Table columns={columns} dataSource={tableData} />
//   );
// }
// export default TableComponent;
