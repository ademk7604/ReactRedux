import React from 'react'
import { useContext } from 'react'
import StoreContext from '../../assets/store'
import Content from './content'
import Topbar from './topbar'

const Exchange = () => {
    const store = useContext(StoreContext)
  return (
    <div>
        <Topbar/>
        <Content/>
    </div>
  )
}

export default Exchange