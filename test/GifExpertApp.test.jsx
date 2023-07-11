
import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"
import { AddCategory } from "../src/components";

describe('probando el componente <GifExpertApp/>', () => {
  const categories = ['naruto', 'bleach'];

   test('debe probar el onAddCategory debe retornar arreglo de categorias ', () => {        
        render( <GifExpertApp/>);
        //expect(container).toMatchSnapshot();
        screen.debug();
        const addCat =screen.getByRole('AddCategory');
        fireEvent.addCat(AddCategory, 'goku');

        console.log(categories);
        

    })
  
})
