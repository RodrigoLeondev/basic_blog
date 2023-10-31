import { createContext, useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import Form from "./Components/Form";
export const ContentBlogContext = createContext();

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

  return (
    <div className="App">
      <h1>Blog Prueba</h1>
      <ContentBlogContext.Provider value={{blogEntries, setBlogEntries}}>
        <Form />
      </ContentBlogContext.Provider>

      <div className="wrapper">
          {blogEntries.map((entry) => (
            <Card entryData={entry} />
          ))}
        </div>
    </div>
  );
}

export default App;
