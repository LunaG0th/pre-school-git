import styles from './Title.module.css';

function Title({ title, sub }) {
  return (
    <div className={`${styles.title} container`}>
      <p>{sub}</p>
      <h4>{title}</h4>
    </div>
  );
}

export default Title;
