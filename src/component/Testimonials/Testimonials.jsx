import { useRef } from 'react';
import './Testimonials.css';
import Title from '../Title/Title';

const users = [
  {
    userPic: '../../user01.jpg',
    name: 'Sam sample',
    location: 'Glendale, CA',
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, optio. Aliquam ut inventore consectetur, explicabo animi unde voluptas ab aperiam temporibus, dolor magni architecto voluptatum, soluta quam! Placeat, facere ducimus.',
  },
  {
    userPic: '../../user02.jpg',
    name: 'Some Someon',
    location: 'Lancaster, CA',
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, optio. Aliquam ut inventore consectetur, explicabo animi unde voluptas ab aperiam temporibus.',
  },
  {
    userPic: '../../user03.jpg',
    name: 'Test Tell',
    location: 'Texas, TX',
    comment:
      'Lorem ipsum dolor ut inventore consectetur, explicabo animi unde voluptas ab aperiam temporibus, dolor magni architecto voluptatum, soluta quam!.',
  },
  {
    userPic: '../../user04.jpg',
    name: 'Sam Apple',
    location: 'New York, NY',
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, optio. Aliquam ut inventore consectetur, explicabo animi unde voluptas ab aperiam temporibus, dolor magni architecto voluptatum, soluta quam! Placeat, facere ducimus.',
  },
];

function Testimonials() {

  const slider = useRef()
  let trx = 0

  const next =()=>{
    if( trx > -50 ){
      trx -= 25
    }
    slider.current.style.transform = `translateX(${trx}%)`
  }
   const prev =()=>{
    if( trx < 0 ){
      trx += 25
    }
    slider.current.style.transform = `translateX(${trx}%)`
  }

  return (
    <section id='testimonials' name='testimonials'>
      <div className='testimoni container'>
       <Title title='Student Review'  sub='testimonials'  />
        <div className='testimoni__row'>
          <div className='testimoni__slider'>
            <ul ref={slider}>
              {users.map((user) => (
                <UserList userObj={user} key={user.name} />
              ))}
            </ul>
          </div>
          <button class="material-symbols-outlined test-btn prev" onClick={prev} >chevron_left</button>
          <button class="material-symbols-outlined test-btn next" onClick={next} >chevron_right</button>
        </div>
      </div>
    </section>
  );
}

function UserList({userObj}) {
  return (
    <li>
      <div className='slide'>
        <div className='user__info'>
            <img src={userObj.userPic} alt={userObj.name} />
            <div>
                <h4>{userObj.name}</h4>
                <span>{userObj.location}</span>
            </div>
        </div>
        <div className="user__comment">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, optio.
                Aliquam ut inventore consectetur, explicabo animi unde voluptas ab
                aperiam temporibus, dolor magni architecto voluptatum, soluta quam!
                Placeat, facere ducimus.
            </p>
        </div>
      </div>
    </li>
);
}

export default Testimonials;
