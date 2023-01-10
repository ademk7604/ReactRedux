import React from "react";

const Jsx4 = () => {
  const age = 18; /* burayi degistirdigimde asagida mantigi cozer farkli cozumleri verirr short circuit  */

  return (
    <div>
      {age >= 18 && <h1>Ehliyet alabilir</h1>}
      {age >= 18 || <h1>Ehliyet alamaz</h1>}
    </div>
  );
};

export default Jsx4;
