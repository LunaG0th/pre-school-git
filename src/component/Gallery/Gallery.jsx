import Title from '../Title/Title';
import './Gallery.css';

const media = [
  {
    image: '../../student01.jpg',
    id: 1
  },
  {
    image: '../../student02.jpg',
    id: 2
  },
  {
    image: '../../student03.jpg',
    id: 3
  },
  {
    image: '../../student04.jpg',
    id: 4
  },
];

function Gallery() {
  return (
    <section id='gallery'>
        <div className='gallery container'>
          <Title title='School Photos' sub='gallery' />
          <div className='gallery__row'>
              {media.map((image, id) => (
              <MediaList  mediaObj={image} key={id}/>
              ))}
              
          </div>
        </div>
    </section>
  );
}


function MediaList({mediaObj}) {
    return(
        <img src={mediaObj.image} alt='' />
    )
}
export default Gallery;
