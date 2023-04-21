import Navbar from 'components/Navbar';

import styles from './styles.module.scss';

const Layout = ({children}) => (
    <main className={styles.layout}>
      <Navbar />
      <section className={styles.container}>
        {children}
      </section>
    </main>
);

export default Layout;