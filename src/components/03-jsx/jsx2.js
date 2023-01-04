import React from "react";

const Jsx2 = () => {
  const user = {
    name: "Ali Gel",
    email: "ali@gel.com",
    occupation: "Developer",
  };
  /* burada js adina hersey kullanabilioriz hersey serberst */

  return (
    <div>
      <div>Name: {user.name} </div>
      <div>Email: {user.email} </div>
      <div>Occupation: {user.occupation} </div>
      {/* eger js ifadesi koyacaksam {} kullanmaliyom reac {}gorunce burda js var diyo */}
    </div>
  );
};

export default Jsx2;
