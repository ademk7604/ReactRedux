import React from 'react'

const ChildComp = ({handleCounter1}) => {
  return (
    <div>

        <button onClick={()=> handleCounter1(10)}></button>

    </div>
  )
}

export default ChildComp