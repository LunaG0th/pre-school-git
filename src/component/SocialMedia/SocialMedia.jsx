import './SocialMedia.css';

const icons = [
  {
    account: 'facebook',
    url: 'facebook.com',
    dir: './facebook.png'
  },
  {
    account: 'instagram',
    url: 'instagram.com',
    dir: './instagram.png'
  },
  {
    account: 'youtube',
    url: 'youtube.com',
    dir: './youtube.png'
  },
];

function SocialMedia() {
  return (
    <ul className='social-icon'>
      {icons.map((icon) => (
        <IconList iconObj={icon} key={icon.account} />
      ))}
    </ul>
  );
}

function IconList({ iconObj }) {
  return (
    <li>
      <a href={iconObj.url}>
        <img src={iconObj.dir} alt={iconObj.account} />
      </a>
    </li>
  );
}

export default SocialMedia;
