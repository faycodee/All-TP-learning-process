import { createStore } from './../../../node_modules/redux/src/createStore';
const initState = {
  cpt: 0,
  users: [
    {
      id: 1,
      name: "John Doe",
      age: 30,
      position: "Software Engineer",
    },
    {
      id: 2,
      name: "Hmed Doe",
      age: 30,
      position: "Software Senior",
    },
    {
      id: 3,
      name: "Ali loon",
      age: 30,
      position: "UI/UX",
    },
  ],
};

const Reducer=(state=initState,action)=>{
  switch (action.type) {
    case "ADD":
        
        break;
  
    default:
        break;
  }
}
const store = createStore(Reducer)