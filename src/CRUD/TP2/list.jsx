import { Component } from "react";
import "./listCss.css";
import Line from "./line.jsx";

export default class Crud extends Component {
  static idd = 4;
  tClientsO= [
      { idd: Crud.idd, nom: "taha", age: 25, photo: "pc1.png" },
      { idd: Crud.idd + 1, nom: "ali", age: 32, photo: "pc2.png" },
      { idd: 2 + Crud.idd, nom: "amira", age: 19, photo: "pc3.png" },
      { idd: Crud.idd + 3, nom: "omar", age: 45, photo: "pc4.png" },
    ]
  state = {
    tClients: [
      { idd: Crud.idd, nom: "taha", age: 25, photo: "pc1.png" },
      { idd: Crud.idd + 1, nom: "ali", age: 32, photo: "pc2.png" },
      { idd: 2 + Crud.idd, nom: "amira", age: 19, photo: "pc3.png" },
      { idd: Crud.idd + 3, nom: "omar", age: 45, photo: "pc4.png" },
    ],
    
    msg: "",
    classMsg: "",
  };

  render() {
    return (
     <form>
       <div style={{ margin: 100 }}>
        <center>
          {" "}
          <h1>C.Client</h1>
        </center>
        <br />
        <br />
        <br />
        <br />

        <fieldset>
          <div>
            ID : <input readOnly type="text" value={Crud.idd} />
            Nom: <input type="text" id="nom" />
          </div>
          <div>
            Age: <input type="number" id="age" />
            photo :
            <input type="file" id="photo" accept="image/*" />
          </div>
          <br />
          <br />
          <button onClick={(e) => this.ajouter(e)}>Ajouter</button>
        </fieldset>
        <br />
        <br />
        <fieldset>
          chercher par id,nom,age... : <input id="text" onInput={(e)=>this.chercher()} type="text" />
          <p></p>
        </fieldset>
        <br />
        <br />
        <h2>
          <b>Liste des clients :</b>
        </h2>
        <table border={1}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Age</th>
              <th>Photo</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.tClients.map((c, i) => (
              <Line key={i} data={c}   />
            ))}
          </tbody>
        </table>
      </div>
     </form>
    );
  }
   chercher=()=>{
  
    let text = document.getElementById("text").value.toLowerCase()
    if (text.length) {
      let tClients = this.tClientsO.filter((e)=> e.idd === text || e.nom === text|| e.age === text)
      this.setState({tClients})
    } else {
      
    }

  }
  sup=(e,pos)=>{
    e.preventDefault()
    let saveName =this.data[pos]
    if (window.confirm(`Are you sure to delete ${saveName}?`)) {
      let tt = this.data.splice(pos, 1);
      this.setState({ tt });
      return alert(`Deleted ${saveName} succes`);
    }

  }

  ajouter() {
    let nomm = document.getElementById("nom").value;
    let agee = document.getElementById("age").value;
    let src = document.getElementById("photo").files[0].name;


    if (src) {
      this.setState({
        tClients: [
          ...this.state.tClients,
          { idd: Crud.idd, nom: nomm, age: agee, photo: src },
        ],
      });
      alert("ajoute success")
      // document.forms[0].reset()
      nomm = ""
      agee = ""
      Crud.idd++
    }
  }
}
