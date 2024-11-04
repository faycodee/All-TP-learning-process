import React from "react";

class Ligne extends React.Component{
    
    render(){
      let {pos,data, handleDelete, handleUpdate} = this.props;
        return <tr key={pos}><td>{data.id}</td><td>{data.nom}</td><td>{data.age}</td>
        <td><img src={"../img/"+data.photo} height="40" alt={data.photo} width="40" style={{borderRadius:20}} /></td><td>
            <button className="btn btn-danger" onClick={()=>handleDelete(data.id)}>X</button> | <button className="btn btn-warning" onClick={()=>handleUpdate(pos)}>M</button>
            </td></tr>
    }
}

export default Ligne
