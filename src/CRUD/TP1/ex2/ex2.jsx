import { Component } from "react";
import "./ex2Sty.css";

export default class Ex2 extends Component {
  static id = 0;
  state = { t: [] };

  render() {
    return (
      <div className="container mt-4">
        <h1 className="mb-4">Ajouter des Clients</h1>

        <div className="row mb-4">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="nom">Nome:</label>
              <input id="nom" type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="age">Age:</label>
              <input id="age" type="number" className="form-control" />
            </div>
            <button
              onClick={() => this.changeH1()}
              className="btn btn-success mt-3"
            >
              Ajouter Client
            </button>
          </div>
        </div>

        <div>
          <h2>Liste des Clients :</h2>
          <table className="table table-bordered table-striped">
            <thead className="table-success">
              <tr key="0">
                <th>Id</th>
                <th>Nome Prenome</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {this.state.t.map((c, i) => this.childTr({ data: c, key: i }))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  changeH1() {
    let nomm = document.getElementById("nom").value;
    let agee = document.getElementById("age").value;

    this.setState({
      t: [...this.state.t, { id: Ex2.id, nome: nomm, age: agee }],
    });
    Ex2.id++;
    return alert("Ajouter succes");
  }
  delet(id) {
    let pos = this.state.t.findIndex((e) => e.id === id);
    if (window.confirm("Are you sure to delete this client?")) {
      let tt = this.state.t.splice(pos, 1);
      this.setState({ tt });
      return alert("Deleted succes");
    }
  }
  childTr(props) {
    return (
      <tr>
        <td>{props.data.id}</td>
        <td>{props.data.nome}</td>
        <td>{props.data.age}</td>
        <td>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => this.delet(props.data.id)}  >
            X
          </button>
        </td>
      </tr>
    );
  } 
}
