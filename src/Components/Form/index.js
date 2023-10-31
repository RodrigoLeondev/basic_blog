import React, {  useContext, useState } from 'react'
import { ContentBlogContext } from '../../App';

export default function Form() {
    const [entry, setEntry] = useState({});
    const { blogEntries, setBlogEntries  } = useContext(ContentBlogContext)
console.log(ContentBlogContext);
    const changeHandler = (event) => {
      const value = event.target.value; //valor input
      const property = event.target.name;
      setEntry({ ...entry, [property]: value });
    };
    const saveHandler = () => {
      setBlogEntries([...blogEntries, entry]);
    };
  return (
    <div className="main-wrap">
    <div className="form-wrap">
      <form action="">
        <div className="form-group">
          <label htmlFor="">Imagen</label>
          <input type="text" name="image" onChange={changeHandler} />
        </div>
        <div className="form-group">
          <label htmlFor="">Titulo</label>
          <input type="text" name="title" onChange={changeHandler} />
        </div>
        <div className="form-group">
          <label htmlFor="">Contenido</label>
          <input type="text" name="content" onChange={changeHandler} />
        </div>
        <button type="button" onClick={saveHandler}>
          Save
        </button>
      </form>
    </div>
  </div>
  )
}
