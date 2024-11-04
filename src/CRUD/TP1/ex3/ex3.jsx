import { Component } from "react";
import "./ex3Sty.css";

export default class Ex3 extends Component {

   data = ["laila", "anass", "ikram"];
 state =  {
    fData : [...this.data]
 }
  changeHandel(e){
    // alert(e.target.value.toLowerCase())
    const val = e.target.value.toLowerCase()
    // alert(val)
    let fData = this.data.filter((n,i)=>n.includes(val))
    // alert(fData)
    this.setState({fData})
  }
  AddName(){
    let nomm = document.getElementById("nom").value.toLowerCase();
    alert(nomm)
    this.data.push( nomm );
    // alert(this.data)
    this.setState({...this.state.fData,nomm});
    return alert("Ajouter succes");
  }
  
  render() {
    return (
            <div className="bg-slate-200 rounded-3xl">
        <h1 className="text-center font-mono text-4xl p-4">Gestion des Clients</h1>

       
          <div className="font-light text-xl">
          
              <label >Nome:</label>
              <input id="nom" type="text" className=" shadow-gray-900  w-full outline-none rounded-xl hover:ring-1
               hover:ring-blue-200 focus:ring-blue-500 " />
      

            <button
              onClick={() => this.AddName()}
              className="btn btn-success mt-3"
            >
              Ajouter Nome
            </button>
     
        </div>


        <div></div>
        <input type="text" placeholder="Rechercher here ..." className="form-control inpCss" onInput={(e)=>this.changeHandel(e)} />
        <div>
          <h2>Liste des Nome :</h2>
          <table className="table table-bordered table-striped">
            
            <tbody>
              {this.state.fData.map((c, i) => (
                <tr scope="row" key={i}>
                  <td>{c}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
