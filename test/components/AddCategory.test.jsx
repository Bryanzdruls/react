import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory";

describe('pruebas en <AddCategory.jsx/>', () => {
  
    test('debe cambiar el valor dela caja de texto ', () => {
      render( <AddCategory onNewCategory={ () => {} }/>);

      const input = screen.getByRole('textbox');

      fireEvent.input( input,{
        target: {
            value: 'Goku'
        }
      })
      screen.debug();
    })

    test('debe de llamar onNewCategory si el input tiene un valor ', () => {
        
        const inputvalue = 'Goku';
        //TODO: ????
        const onNewCategory =jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory }/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
      
        fireEvent.input( input,{
            target: {
                value: 'Goku'
            }
        });
        fireEvent.submit( form, )
        screen.debug();
        expect( input.value ).toBe('');
        expect( onNewCategory ).toHaveBeenCalledTimes(1); 
        expect( onNewCategory ).toHaveBeenCalledWith( inputvalue ); 
    })
    
    test('no debe de llamar el onNewCategory si el input esta vacio', () => {
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory }/> );
        
        const form = screen.getByRole('form');

        
        fireEvent.submit( form );
        expect( onNewCategory ).not.toHaveBeenCalled();
    })
    
})
