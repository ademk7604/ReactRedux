import React from 'react'

const Style2 = () => {
    const styleTitle ={
        fontSize: "2rem",
        color: "red",
        fontWeight:"bold",
        textAlign:"center"
    };


  return (
    <div>
        <h2 style={styleTitle}>JSX Loops</h2>
        <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus ut
        autem enim sint. Inventore sint tempore, voluptate sequi exercitationem
        nesciunt consectetur totam vel nostrum animi dolorem commodi nihil quam
        </p>
        {/* shallow copy uygulayarak ozelliklerinden istedigini degistirebiliuyorun */}
        <h2 style={{...styleTitle, color:"blue"}}>Component Props</h2>
        <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus ut
        autem enim sint. Inventore sint tempore, voluptate sequi exercitationem
        nesciunt consectetur totam vel nostrum animi dolorem commodi nihil quam
        </p>
    </div>
  )
}

export default Style2