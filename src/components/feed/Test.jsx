import React from 'react'
import './test.css'
import DeleteIcon from '@mui/icons-material/Delete';



function Test() {
  return (
    <div className='testWrapper'>
      <h3>Test</h3>
      <DeleteIcon color="primary"/>
      <img src="/assets/atom.png" alt='' className='imageicon'/>
      </div>
  )
}

export default Test