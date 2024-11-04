import { useRef, useState } from "react";
import Axios from "axios";
import { useEffect } from "react";
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { MotionConfig } from 'framer-motion';


function App() {
    let id = useRef()
    let name = useRef()
    let firstName = useRef()
    let city = useRef()
    let src = useRef()
  const [db, setdb] = useState({
    client: [],
  });
  useEffect(() => {
    Axios.get("http://localhost:8000/clients").then((res) =>
      setdb({ client: res.data })
    );
  }, []);
  const addCustmer=()=> {
  

    const imgRef = ref(imageDB, `files/${uuidv4()}`);

    uploadBytes(imgRef, src).then(() => {
      getDownloadURL(imgRef).then((url) => {
        this.tdata.push({
          id: gestionClient.id,
          nom: name,
          prenom: firstName,
          city: city,
          src: url,
        });
        this.setState({
          t: [
            ...this.state.t,
            {
              id: gestionClient.id,
              nom: name,
              prenom: firstName,
              city: city,
              src: url,
            },
          ],
        });
      });
    });
    gestionClient.id++;
    this.clearData();

    return alert("Ajouter succes");
  }

   
  const deletHandeler = (id) => {
    return window.confirm("are you sur?")
      ? Axios.delete(`http://localhost:8000/clients/${id}`).then((resp) =>
          setdb({ ...db, client: db.client.filter((e) => e.id != id) })
        )
      : "";

    // if ( window.confirm("are you sur?")) {
    //     Axios.delete(`http://localhost:8000/clients/${id}`).then((resp) =>
    //      setdb({ ...db, client: db.client.filter((e) => e.id != id) }))
    // }
  };
  
  const editHandeler = (id) => {

//    Axios.put(`http://localhost:8000/clients/${id},${}`).then((resp) =>
//           setdb({ ...db, client: db.client.splice()})
//         )
   

    // if ( window.confirm("are you sur?")) {
    //     Axios.delete(`http://localhost:8000/clients/${id}`).then((resp) =>
    //      setdb({ ...db, client: db.client.filter((e) => e.id != id) }))
    // }
  };

  return (
    <>
     <Form/>
      <h1 class="mb-4 text-4xl font-bold my-9  leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
      Table de client :
      </h1>
      <table class="table" border="1">
        <thead class="thead-dark">
          <th scope="col">id</th>
          <th scope="col">nom</th>
          <th scope="col">age</th>
          <th scope="col">action</th>
        </thead>
        <tbody>
          {db.client.map((e, i) => (
            <tr scope="row" key={i}>
              <th>{e.id}</th>
              <td>{e.nom}</td>

              <td>{e.age}</td>
              <td>
                <input
                  type="button"
                  className="btn btn-danger"
                  value="X"
                  onClick={() => deletHandeler(e.id)}
                />
                <input
                  type="button"
                  className="btn btn-primary"
                  value="edit"
                  onClick={() => editHandeler(e.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
function Form() {
    let [isVisibl,setisVisibl] = useState(true);
    return (
  <div>
          <motion.h1
        animate={{scale:[0,1]}}
        transition={{duration:1}} 
          
          className=" text-5xl relative font-mono font-extrabold 
        mb-20 p-9 bg-yellow-400 text-white w-full text-center "
        >
          Ajouter des Clients
        </motion.h1>
        <MotionConfig
          transition={{
            duration: 2,
          }}
        >
          <AnimatePresence mode="popLayout"  >
            {" "}
            {isVisibl && (
              <motion.div
              
                className="flex flex-col mb-[20px] mr-4 "
                exit={{ scale: 0  }}
                transition={{
                  duration:0.5
                }}
              >
                <motion.div
                  className="grid"
                  initial={{
                    x: "-1100px",
                  }}
                  animate={{
                    x: "0px",
                  }}
                  transition={{
                    delay: 0.5,
                    duration: 1,

                    ease: "backInOut",
                  }}
                  type="text"
                >
                  Nom:
                  <input id="nom" className="w-[650px] mr-4 max-md:w-[350px]" />
                </motion.div>
                <motion.div
                  className="grid"
                  initial={{
                    x: "-1100px",
                  }}
                  animate={{
                    x: "0px",
                  }}
                  transition={{
                    delay: 1,
                    duration: 1,

                    ease: "backInOut",
                  }}
                  type="text"
                >
                  Prenom:
                  <input
                    id="prenom"
                    type="text"
                    className="w-[650px] mr-4 max-md:w-[350px]"
                  />
                </motion.div>

                <motion.div
                  className="grid"
                  initial={{
                    x: "-1100px",
                  }}
                  animate={{
                    x: "0px",
                  }}
                  transition={{
                    delay: 1.5,
                    duration: 1,

                    ease: "backInOut",
                  }}
                  type="text"
                >
                  city
                  <motion.select id="city">
                    <option value="casa" key="">
                      casa
                    </option>
                    <option value="fes" key="">
                      fes
                    </option>
                    <option value="rabat" key="">
                      rabat
                    </option>
                  </motion.select>
                </motion.div>
                <motion.div
                  className="grid"
                  initial={{
                    x: "-1100px",
                  }}
                  animate={{
                    x: "0px",
                  }}
                  transition={{
                    delay: 2,
                    duration: 1,

                    ease: "backInOut",
                  }}
                  type="text"
                >
                  Photo
                  <motion.input type="file" name="photo" id="photo" />
                </motion.div>
                <motion.button
                  onClick={() => this.addCustmer()}
                  whileHover={{ rotate: "-2.2deg" }}
                  transition={{ duration: 0.3 }}
                  className="bg-slate-400 mt-6 py-2 px-4 rounded-lg text-white hover:bg-slate-600  mb-[60px] "
                >
                  Ajouter Client
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </MotionConfig>

        <motion.button
        layout
        transition={{delay:0.1}}
          onClick={() => setisVisibl(!isVisibl)}
        >
          show/hide
        </motion.button>
  </div>
    )
}

export default App;
