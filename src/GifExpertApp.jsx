import { useState } from 'react'
import { AddCategory, GifGrid } from './components'


export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (NewCategory) => {
    if (categories.includes(NewCategory)) return;
    setCategories([NewCategory, ...categories]);
    //setCategories(  cat =>[...categories,'Valorant'] );
  }


  return (
    <>
      {/*Titulo  */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory
        //onAddCategory={ setCategories }
        onNewCategory={(event) => onAddCategory(event)}
      />
      {/* Listado de tarjetas */}        
      {categories.map(cat => (
        <GifGrid 
          key={cat} 
          category={cat }
        />
      ))
      }
      {/* gif item */}
    </>
  )
}


