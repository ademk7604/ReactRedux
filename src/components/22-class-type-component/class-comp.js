import { Component } from "react";




 class ClassComp extends Component{
constructor(props){ /* state kismi burda tanimlaniyor. props lari burada karsiliyoruz */
//props lar extend edilen class in conts. ina gonderiyor
    super(props);

    this.state ={ /* ClassComp un statesini tanimliyor burda */
    message: "Hello World",
    hour: 15,
    minute: 35
    }
}
/* prevState degismeden bir onceki halini veriyor
componentDidUpdate  */





render() {
    return <div>
        <h1>{this.state.message}</h1>
        <h2>{this.state.hour}:{this.state.minute}</h2>

        <button>Set Hour</button>
        <button>Set Minute</button>
    </div>;
  }
}
