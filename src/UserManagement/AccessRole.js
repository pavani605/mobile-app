import React, { useEffect } from 'react'
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import axios from 'axios';

const AccessRole = () => {
  const data = [
    { id: 1, name: 'John Doe', age: 28, city: 'New York' },
    { id: 2, name: 'Jane Smith', age: 34, city: 'Los Angeles' },
    { id: 3, name: 'Paul Brown', age: 45, city: 'Chicago' },
    { id: 4, name: 'Anna White', age: 25, city: 'San Francisco' }
  ];

  const datafetching=()=>{
    debugger;
    axios.get('http://localhost:7174/api/Products').then(res=>{
      console.log(res,'hgtffhff');
    })
    .catch(error=>{
      console.log(error)
    })
   }
   useEffect(()=>{
    datafetching()
   })
  
  return (
    <div>
      <h1>KendoReact Grid - Static Data Binding</h1>
      <Grid data={data}>
        <GridColumn field="id" title="ID" />
        <GridColumn field="name" title="Name" />
        <GridColumn field="age" title="Age" />
        <GridColumn field="city" title="City" />
      </Grid>
    </div>
  )
}

export default AccessRole