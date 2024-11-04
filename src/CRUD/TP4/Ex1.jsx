import { Component } from "react";
export default class Stagiaires extends Component {
  state = {
    msg:"",
  };
  stagiaires = [
    { nom: "Fatima", note: 14, option: "ID" },
    { nom: "Ali", note: 12, option: "DEV" },
    { nom: "Salma", note: 10, option: "TDI" },
    { nom: "Rachid", note: 15, option: "ID" },
    { nom: "Karim", note: 11, option: "DEV" },
    { nom: "Karim", note: 11, option: "TDI" },
  ];
  textOpt = "";



  render() {
    return (
   
    <div>
        {/* <div >
            <h3>Q1 :</h3>
        le min est :
        { this.stagiaires.filter((e) => e.option === "DEV").reduce((min, e) => (min.note < e.note ? min : e), this.stagiaires[0] ).nom
        }
    </div>
    <div>
    <h3>Q2 :</h3>
    {this.stagiaires.map((e)=>e.nom.toUpperCase()+" ")}
        
    </div> */}
    <div>
    <h3>Q3 :</h3>
    { this.stagiaires=[...this.stagiaires]}
    </div>
    </div>

    );
  }
}
