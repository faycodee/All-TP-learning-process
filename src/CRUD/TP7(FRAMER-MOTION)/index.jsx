import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  useParams,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function Home() {
  const [data, setData] = useState({
    db: [
      {
        idS: "S1",
        nom: " salle 1",
        posts: [
          { idP: "P1", desg: "dell", dd: 256, ram: 8, img: "pc1.jpeg" },
          { idP: "P2", desg: "dell", dd: 256, ram: 8, img: "pc1.jpeg" },
          { idP: "P3", desg: "dell", dd: 256, ram: 8, img: "pc1.jpeg" },
          { idP: "P4", desg: "dell", dd: 256, ram: 8, img: "pc1.jpeg" },
          { idP: "P5", desg: "dell", dd: 256, ram: 8, img: "pc1.jpeg" },
        ],
      },
      {
        idS: "S2",
        nom: "salle 2",
        posts: [
          { idP: "P6", desg: "hp", dd: 256, ram: 8, img: "pc2.jpeg" },
          { idP: "P7", desg: "hp", dd: 256, ram: 8, img: "pc2.jpeg" },
          { idP: "P8", desg: "hp", dd: 256, ram: 8, img: "pc2.jpeg" },
          { idP: "P9", desg: "hp", dd: 256, ram: 8, img: "pc2.jpeg" },
          { idP: "P10", desg: "hp", dd: 256, ram: 8, img: "pc2.jpeg" },
        ],
      },
      {
        idS: "S3",
        nom: "salle 3",
        posts: [
          { idP: "P11", desg: "lenovo", dd: 256, ram: 8, img: "pc3.jpeg" },
          { idP: "P12", desg: "lenovo", dd: 256, ram: 8, img: "pc3.jpeg" },
          { idP: "P13", desg: "lenovo", dd: 256, ram: 8, img: "pc3.jpeg" },
          { idP: "P14", desg: "lenovo", dd: 256, ram: 8, img: "pc3.jpeg" },
          { idP: "P15", desg: "lenovo", dd: 256, ram: 8, img: "pc3.jpeg" },
          { idP: "P16", desg: "lenovo", dd: 256, ram: 8, img: "pc3.jpeg" },
          { idP: "P17", desg: "lenovo", dd: 256, ram: 8, img: "pc3.jpeg" },
        ],
      },
    ],
  });

  const [isAlertVisible, setAlertVisible] = useState(false);

  const handleAjouterClick = (val) => {
    setAlertVisible(val);
  };

  return (
    <BrowserRouter>
      <div>
        <header>
          <NavBar />
        </header>
        <section>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/salles">
              <Route
                index
                element={
                  <Salles
                    data={data.db}
                    handleAjouterClick={handleAjouterClick}
                    isVisible={isAlertVisible}
                  />
                }
              />
              <Route path="salle/:idS" element={<Posts data={data.db} />} />
            </Route>
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
}

// NavBar comp
function NavBar() {
  return (
    <nav className="flex w-[100vw] justify-between">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex justify-start m-4 font-extrabold"
      >
        OFPPT
      </motion.h1>
      <ul className="flex justify-end">
        <li className="m-4 bg-lime-300 hover:bg-lime-500 p-2 rounded-2xl">
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li className="m-4 bg-lime-300 hover:bg-lime-500 p-2 rounded-2xl">
          <NavLink to="/salles">Salles</NavLink>
        </li>
      </ul>
    </nav>
  );
}

// Accueil comp
function Accueil() {
  return (
    <motion.div className="flex justify-center">
      <motion.h1
        className=" font-bold text-[50px] text-blue-400 flex justify-center items-center "
        style={{
          width: "500px",
          height: "500px",
        }}
        whileInView={{
          backgroundColor: [
            "rgb(147 197 253)",
            "rgb(23 37 84)",
            "rgb(255 255 255)",
          ],
          color: ["rgb(23 37 84)", "rgb(147 197 253)"],
          scale: [1, 1.5, 1.5, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
        }}
      >
        Welcome to OFPPT!
      </motion.h1>
    </motion.div>
  );
}

// Salles comp
function Salles({ data, handleAjouterClick, isVisible }) {
  return (
    <>
      <motion.h1
        className="text-center text-[30px] my-[70px] text-blue-400 font-mono"
        initial={{ opacity: 0, translateY: "-30px" }}
        whileInView={{ scale: 1.2, opacity: 1, translateY: "0px" }}
        transition={{ duration: 2 }}
        
      >
        Liste des salles
      </motion.h1>
      {isVisible && <Alert onClose={() => handleAjouterClick(false)} />}
      <motion.table
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 7 }}
        className="table"
      >
        <thead>
          <tr className="text-center">
            <th>id Salle</th>
            <th>Nom Salle</th>
            <th>Postes</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {data.map((salle, i) => (
            <tr className="text-center" key={i}>
              <th>{salle.idS}</th>
              <td>{salle.nom}</td>
              <td>
                <Link to={"salle/" + salle.idS}>posts</Link>
              </td>
              <td>
                <button className="text-red-500">Delete</button>/
                <button className="text-green-500">Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </motion.table>
      <div className="w-full flex justify-center">
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 5 }}
          onClick={() => handleAjouterClick(true)}
          className="bg-green-300 p-4 rounded-md"
        >
          Ajouter une salle
        </motion.button>
      </div>
    </>
  );
}

// Posts comp
function Posts({ data }) {
  const { idS } = useParams();
  const salle = data.find((salle) => salle.idS === idS);

  return (
    <>
      <h1>{salle.nom}</h1>
      <table>
        <thead>
          <tr>
            <th>id Poste</th>
            <th>Designation</th>
            <th>Ram</th>
            <th>DD</th>
            <th>img</th>
          </tr>
        </thead>
        <tbody>
          {salle.posts.map((post, i) => (
            <tr key={i}>
              <th>{post.idP}</th>
              <td>{post.desg}</td>
              <td>{post.ram}</td>
              <td>{post.dd}</td>
              <td>
                <img src={"../../public/images/" + post.img} alt="" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

// Alert comp
function Alert({ onClose }) {
  return (
    <AnimatePresence mode="popLayout">
      <div className="flex justify-center">
        <motion.div
          className="absolute flex flex-col top-40 items-center w-[90vw] md:w-[70vw] min-h-[40vh]  bg-blue-300 z-10 p-4"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1 }}
          
          exit={{ scale: 1.2 }}
        >
          <h1 className="text-center text-[30px] font-bold">
            Ajouter une nouvelle salle
          </h1>
          <motion.button
          layout
            onClick={onClose}
            className="bg-black  text-white p-2 rounded-full absolute top-3 right-4"
          >
            X
          </motion.button>
         
      <form className="flex justify-center flex-col items-center mt-[50px]">
        <table>
          <tr>
            <td>idS :</td>
            <td>
              <input className="w-[290px]" type="text" />
            </td>
          </tr>
          <tr>
            <td>nom Salle :</td>
            <td>
              <input className="w-[290px]" type="text" />
            </td>
          </tr>
          {/* { idP: "P12", desg: "lenovo", dd: 256, ram: 8, img: "pc3.jpeg" }, */}

          <tr>
            <td>post id</td>
            <td>
              <input className="w-[290px]" type="text" />
            </td>
          </tr>
          <tr>
            <td>post Designation</td>
            <td>
              <input className="w-[290px]" type="text" />
            </td>
          </tr>
          <tr>
            <td>post Ram</td>
            <td>
              <input className="w-[290px]" type="number" />
            </td>
          </tr>
          <tr>
            <td>post dd</td>
            <td>
              <input className="w-[290px]" type="number" />
            </td>
          </tr>
          <tr>
            <td>post image</td>
            <td>
              <input className="w-[290px]" type="file" />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input className="w-[290px] bg-slate-200 rounded-xl mt-3" type="button"  value="add Post"/>
            </td>
          </tr>
          <tr>
            <td>posts added :</td>
            <td>
              
            </td>
          </tr>
        </table>
        <button className=" mt-[60px] bg-blue-900 rounded-2xl px-3 py-2 text-white">Save</button>
       
      </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default Home;
