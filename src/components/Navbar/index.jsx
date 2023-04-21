import { useState } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

import styles from './styles.module.scss';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  
  const navbarItems = ['Home', 'About', 'Contact'];

  const handleToggle = () => {
    setToggleMenu( prev => !prev );
  };
  
  return (
    <nav className={styles.navbar_container} id='navigation'>
      <Link href='/#home' passHref>
        <div className={styles.navbar_logo}>
          <Image
            src='https://i.imgur.com/879rcEs.png'
            layout='fill'
            objectFit='cover'
            alt='logo' />
        </div>
      </Link>
        <ul className={styles.navbar_links}>
          {navbarItems.map((item, index) => (
            <li className={cn(styles.menu_item, 'opensans')} key={index}>
              <Link href={`/#${item?.toLowerCase()}`} passHref>
                <a>{item}</a>
              </Link>
            </li>
          ))}
        </ul>
    </nav>
  );
}

export default Navbar;
