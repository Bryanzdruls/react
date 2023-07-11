import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('probando <GifGrid.jsx/>', () => {
  const category = 'Goku';

  test('debe de mostrar el loading correctamente ', () => {
    
    useFetchGifs.mockReturnValue({
        images: [],
        isLoading: true,
    })

    render( <GifGrid category={ category }/> );
    screen.debug(); 
    screen.getByText( 'Loading...' );
    screen.getByText( 'Goku' );

  })

  test('debe de mostrar items cuando se cargan las imagenes mediante el usefetch', () => {
    const gifs = 
    [
        {
        id: "abc",
        title:"brian",
        url: "https://brian/luna.jpg",
        },
        {
            id: "abcd",
            title:"luna",
            url: "https://luna/brian.jpg",
        }
    ]

    useFetchGifs.mockReturnValue({
        images: gifs,
        isLoading: false,
    })
    
    render( <GifGrid category={ category }/>);
    //expect( screen.getAllByRole('img').length ).toBe(2);
    expect( screen.getAllByRole('img').length ).toBe(2);
  })
  
})
