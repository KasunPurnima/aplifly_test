import logo from './logo.svg';
import './App.css';
import React from 'react';
import DataTable from 'react-data-table-component';

function App() {
  const columns =[
{
  name :'AccName',
  selector:row => row.name
},
{
  name :"Acc",
  selector:row => row.acc
}
  ];
  const data =[
    {
    id:1,
    name:'saving',
    acc:'8115008445'
  },
  {
    id:2,
    name:'current',
    acc:'8115008448'
  }

]
  return(
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>,
    <div className='container mt-5'>
      <DataTable
      columns={columns}
      data={data}
      ></DataTable>
    </div>
    
  )
 
}

export default App;
 // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );