import React, { Component } from "react";
import Ligne from "./Ligne";
class Liste extends Component {
  static cpt = 4;
  state = {
    db: [
      { id: 1, nom: "khaldi", age: 22, photo: "pc1.png" },
      { id: 2, nom: "alami", age: 23, photo: "pc2.png" },
      { id: 3, nom: "alaoui", age: 24, photo: "pc3.png" },
    ],
    tSearch: [],
    msg: "",
    curCl: {},
    btnVal: "Ajouter",
  };
  render() {
    return (
      <div style={{ width: "80%", margin: "auto" }}>
        <h2 style={{ color: "orange", textAlign: "center" }}>G.Clients</h2>
        <hr />
        <form id="frm">
          <table className="form-control" cellPadding="5px">
            <tbody>
              <tr>
                <th>ID : </th>
                <td>
                  <input
                    type="text"
                    defaultValue={this.state.curCl.id}
                    id="txtId"
                    readOnly
                  />
                </td>
                <th>Nom :</th>
                <td>
                  <input
                    type="text"
                    defaultValue={this.state.curCl.nom}
                    id="txtNom"
                  />
                </td>
              </tr>
              <tr>
                <th>Age : </th>
                <td>
                  <input
                    type="text"
                    defaultValue={this.state.curCl.age}
                    id="txtAge"
                  />
                </td>
                <th>Photo : </th>
                <td>
                  <input
                    type="file"
                    defaultValue={this.state.curCl.photo}
                    id="txtPhoto"
                  />
                </td>
              </tr>
              <tr>
                <th colSpan="2">
                  <input
                    type="button"
                    id="btn1"
                    className="btn btn-success"
                    onClick={this.handleAjouter}
                    value={this.state.btnVal}
                  />
                </th>
              </tr>
            </tbody>
          </table>
        </form>
        <div>
          <div className="form-control">
            Chercher par nom :{" "}
            <input
              type="search"
              placeholder="Search"
              onInput={(e) => this.handleInput(e)}
            />
            <span style={{ color: "red" }}>{this.state.msg}</span>
          </div>
          <h2>Liste des clients :</h2>
          {this.lister()}
        </div>
      </div>
    );
  }
  lister = () => {
    let t =
      [...this.state.tSearch].length > 0
        ? [...this.state.tSearch]
        : [...this.state.db];
    console.log(t.length);
    return t.length > 0 ? (
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nom</th>
            <th scope="col">Age</th>
            <th scope="col">photo</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {t.map((cl, i) => (
            <Ligne
              data={cl}
              pos={i}
              key={i}
              handleDelete={this.handleDelete}
              handleUpdate={this.handleUpdate}
            />
          ))}
        </tbody>
      </table>
    ) : (
      <span style={{ color: "red", fontSize: "14px" }}>Base vide!!!</span>
    );
  };
  handleDelete = (id) => {
    let t = null;
    return window.confirm("Are you sure?")
      ? this.setState({
          db: this.state.db.filter((cl) => cl.id !== parseInt(id)),
        })
      : null;
  };
  handleAjouter = () => {
    let t = null;
    let { txtId, txtNom, txtAge, txtPhoto } = document.getElementById("frm");
    let src = txtPhoto.files[0].name;
    if (this.state.btnVal === "Modifier") {
      t = [...this.state.db];
      let pos = t.findIndex(
        (c) => c.id === parseInt(document.getElementById("txtId").value)
      );
      t.splice(pos, 1, {
        id: txtId.value,
        nom: txtNom.value,
        age: txtAge.value,
        photo: src,
      });
    } else {
      t = [
        ...this.state.db,
        { id: Liste.cpt++, nom: txtNom.value, age: txtAge.value, photo: src },
      ];
    }
    this.setState({ db: t, curCl: {}, btnVal: "Ajouter" });
    document.getElementById("frm").reset();
    alert("avec succés");
  };
  handleUpdate = (pos) => {
    let cl = this.state.db[pos];
    this.setState({ curCl: cl, btnVal: "Modifier" });
  };
  // ++++++++++++chercher+++++++++++++++++++
  handleInput = (e) => {
    let mot = e.target.value;

    let t = this.state.db.filter((cl) => cl.nom.includes(mot));
    if (t.length > 0) this.setState({ tSearch: t, msg: "" });
    else
      this.setState({
        tSearch: [],
        msg: " Désolé ... l'élément recherché introuvable!!",
      });
  };
  //+++++++++++++++++++++++++++++++++++++++++
}
export default Liste;
