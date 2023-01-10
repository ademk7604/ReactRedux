import Jsx1 from "./components/03-jsx/jsx1";
import Jsx2 from "./components/03-jsx/jsx2";
import HelloWorld from "./components/01-hello-world/hello-world";
import HelloReact from "./components/02-hello-react/hello-react";
import Jsx3 from "./components/03-jsx/jsx3";
import Jsx4 from "./components/03-jsx/jsx4";
import Jsx5 from "./components/03-jsx/jsx5";
import Jsx6 from "./components/03-jsx/jsx6";
import Style1 from "./components/04-styles/style1";
import Style2 from "./components/04-styles/style2";
import Style3 from "./components/04-styles/style3";
import Style4 from "./components/04-styles/style4";
import Clock1 from "./components/05-clock1/clock1";
import Greetings from "./components/06-props/greetings";
import Products from "./components/07-props-1/products";
import Clock2 from "./components/08-clock2/clock2";
import Image from "./components/09-image/image";
import Gallery from "./components/09-image/gallery";
import ProfileCard from "./components/10-profile-card/profile-car";


const App = () => {
  return (
    <div>
      
      {/*  
      <HelloWorld />
      <HelloReact />
      <Jsx1 /> 
      <Jsx2 /> 
      <Jsx3 />
      <Jsx4 />
      <Jsx5 />
      <Jsx6 />
      <Style1/>
      <Style2/>
      <Style3/>
      <Style4/>
      <Clock1/>
      <Jsx6 />
      <Greetings/>
      <Products/>
      <Clock1/>
      <Greetings/>
      //component isimleri büyük harfle başlar, export yapmazsak componenti başka yerde kullanamayız
      <Products/>
      <Clock2 textColor="blue" bgColor="yellow" />
      <Image/>
       <Gallery/>

      */}
      
      
      
      
     
      <ProfileCard avatar="profile.jpg" name="Ali Gel" location="Turkey, Istanbul" shot="3" followers="23432" following="234"/>      
      
  
    </div>
  );
};
export default App; 
