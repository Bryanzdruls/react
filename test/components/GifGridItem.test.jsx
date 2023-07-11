
import { render, screen } from "@testing-library/react"
import { GifGridItem } from "../../src/components/GifGridItem"

describe('Probando GifGrid TArea', () => {
  const title ='naruto';
  const url ='https://www.luffy.com/onepiece';
  
  
  test('Deberia recibir titulo y url', () => {
    render(<GifGridItem title={title} url={url}></GifGridItem>);
    expect(render).toMatchSnapshot();
  })

  test('debe de mostrar una imagen coin el URL y el ALT indicado ', () => {
    render(<GifGridItem title={title} url={url}></GifGridItem>);
    
    screen.debug();
    /* expect( screen.getByRole('img').src ).toBe( url );
    expect( screen.getByRole('img').alt ).toBe( title ); */
    const {src, alt }=screen.getByRole( 'img' );
    expect( src ).toBe( url );
    expect( alt ).toBe( title );
  
  })
  
  test('Debe de mostrar que el titulo existe', () => {
    render( <GifGridItem title={ title } url={ url } /> );
    expect( screen.getByText( title ) ).toBeTruthy();
    
  })
  
})
