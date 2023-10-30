import { useState } from "react";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const [blogEntries, setBlogEntries] = useState([
    {
      title: "Title 1",
      content:
        "Qui irure cupidatat ex quis in cillum commodo commodo ex ea excepteur consectetur sunt. Amet labore quis eu enim r.",
      image:
        "https://as01.epimg.net/motor/imagenes/2018/01/18/formula_1/1516271196_671590_1516271497_noticia_normal.jpg",
    },
    {
      title: "Title 2",
      content:
        "Qui irure cupidatat ex quis in cillum commodo commodo ex ea excepteur consectetur sunt. Amet labore quis eu enim reprehenderit deserunt. Magna officia ipsum deserunt ullamco mollit et. Quis sint do magna laborum ex officia.",
      image:
        "https://as01.epimg.net/motor/imagenes/2018/01/18/formula_1/1516271196_671590_1516271497_noticia_normal.jpg",
    },
    {
      title: "Title 3",
      content:
        "Qui irure cupidatat ex quis in cillum commodo commodo ex ea excepteur consectetur sunt. Amet labore quis eu enim reprehenderit deserunt. Magna officia ipsum deserunt ullamco mollit et.",
      image:
        "https://as01.epimg.net/motor/imagenes/2018/01/18/formula_1/1516271196_671590_1516271497_noticia_normal.jpg",
    },
  ]);
  const [ entry, setEntry ] = useState ({})

  const changeHandler = event => {
    const value = event.target.value //valor input
    const property = event.target.name
    setEntry ( { ...entry, [property] : value})
  } 
const saveHandler = () => {
  setBlogEntries([...blogEntries, entry])
}

  return (
    <div className="App">
      <h1>Blog Prueba</h1>

      <div className="main-wrap">
        <div className="form-wrap">
          <form action="">
            <div className="form-group">
              <label htmlFor="">Imagen</label>
              <input type="text" name="image" onChange={changeHandler}/>
            </div>
            <div className="form-group">
              <label htmlFor="">Titulo</label>
              <input type="text" name="title" onChange={changeHandler}/>
            </div>
            <div className="form-group">
              <label htmlFor="">Contenido</label>
              <input type="text" name="content" onChange={changeHandler}/>
            </div>
            <button type="button" onClick={saveHandler}>Save</button>
          </form>
        </div>
      </div>
      
      <div className="wrapper">
        {blogEntries.map((entry) => (
          <Card entryData={entry} />
        ))}
      </div>
    </div>
  );
}

export default App;
