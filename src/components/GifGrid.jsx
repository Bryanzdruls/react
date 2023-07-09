import { GifGridItem } from './GifGridItem';

import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

  const {images, isLoading} = useFetchGifs( category );

  /* const [images, setImages] = useState([])

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  }


  useEffect(() => {
    getImages();

  }, []) */
  console.log(isLoading)
  return (
    <>
      <h3> {category} </h3>
      {
        isLoading &&
        (<h2>Loading...</h2>)
        
      }
      <div className='card-grid'>
        {
          images.length != 0? 
          images.map((image) => (
            <GifGridItem 
              key={image.id} 
              {...image}
            />
          ))
          :<h2>No se encontraron imagenes, por favor pruebe otra palabra</h2>
        }
      </div>
    </>
  )
}
