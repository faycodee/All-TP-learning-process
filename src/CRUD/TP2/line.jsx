





export default function Line(props) {
    return (
      <tr>
        <td>{props.data.idd}</td>
        <td>{props.data.nom}</td>
        <td>{props.data.age}</td>
        <td>
          <img src={`./img/${props.data.photo}`} alt={`./img/${props.data.photo}`} width={50} />
        </td>
        <td>
          <button onClick={(e)=>props.sup(e,props.data.idd)}>X</button>  |
        </td>
        <td>
           <button>Mod</button>
        </td>
      </tr>
    );
  }