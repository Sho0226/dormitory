import { Layout } from 'layouts/Layout';
import styles from './index.module.css';

const Home = () => {
  return <Layout render={() => <div className={styles.container}></div>} />;
};

export default Home;
