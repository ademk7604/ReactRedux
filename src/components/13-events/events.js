import React from 'react'

const Events = () => {
    //Event handler
    const sayHello1 = ()=> {
        alert("Hello")
    }

    

  return (
    <div>
    <div onClick={sayHello1}>Say Hello</div>
    <div onClick={sayHello1}>Say Hello</div>

    {/*  onClick= event listener*/}
    </div>
  )
}

export default Events