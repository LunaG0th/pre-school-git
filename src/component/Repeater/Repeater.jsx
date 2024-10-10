import Title from '../Title/Title';
import './Repeater.css';

const img = [
  {
    name: 'img01',
    image: './apple.png',
    title: 'Early Learning and Exploring',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam laudantium totam veritatis consequuntur ad sapiente explicabo fuga numquam consequatur velit,',
    color: 'var(--clr-violet)'
  },
  {
    name: 'img01',
    image: './pencil.png',
    title: 'Creative Arts Development',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam laudantium totam veritatis consequuntur ad sapiente ',
    color: 'var(--clr-cream)'
  },
  {
    name: 'img01',
    image: './school building.png',
    title: 'Communication Development',
    description: 'Quisquam laudantium totam veritatis consequuntur ad sapiente explicabo fuga numquam consequatur velit,',
    color: 'var(--clr-yellow)'
  },
];

function Repeater() {
  return (
    <section>
      <div className='repeater container'>
        <Title title='Our Core Value' sub='program'/>
        <ul className='repeater__items'>
          {img.map((item) => (
           <ListItem itemObj={item} key={item.name} />
          ))}
        </ul>
        
      </div>
    </section>
  );
}

function ListItem({itemObj}) {
  return (
    <li className='list-item' style={{backgroundColor: `${itemObj.color}`}}>
      <div className="item">
        <img className='list__image' src={itemObj.image} alt={itemObj.name} />
        <h2>{itemObj.title}</h2>
      </div>
      <div className='caption'>
        <span class="material-symbols-outlined">edit_calendar</span>
        <p>{itemObj.description}</p>
        <h4>Enroll Now</h4>
      </div>
    </li>
  );
}

export default Repeater;
