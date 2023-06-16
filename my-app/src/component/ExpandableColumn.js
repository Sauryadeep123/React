import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
const columns = [{
    dataField: 'id',
    text: 'Product ID'
  }, {
    dataField: 'name',
    text: 'Product Name'
  }, {
    dataField: 'price',
    text: 'Product Price'
  }];
  const products=[{
    id:"1",
    name:"pen",
    price:"1000"
  },{
    id:"2",
    name:"book",
    price:"2000"
  }]
  
  const expandRow = {
    renderer: row => (
      <div>
        <p>{ `This Expand row is belong to rowKey ${row.id}` }</p>
        <p>You can render anything here, also you can add additional data on every row object</p>
        <p>expandRow.renderer callback will pass the origin row object to you</p>
      </div>
    )
  };
function Table() {
  return (
    <div>
        <BootstrapTable
  keyField='id'
  data={ products }
  columns={ columns }
  expandRow={ expandRow }
/>
    </div>
  )
}

export default Table;