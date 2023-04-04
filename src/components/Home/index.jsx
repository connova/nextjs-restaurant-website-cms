import Image from 'next/image';
import cn from 'classnames';

import Button from 'components/Button';

import styles from './styles.module.scss';

const Home = ( { info } ) => (
    <div className={cn(styles.header, 'section_padding')} id='home'>
      <div className={cn('app_container', 'app_wrapper')}>
        <div className={styles.wrapper_info}>
          <h1 className={styles.header_h1}>Expand Your Reach</h1>
          <h1 className={styles.header_h1}>Grow Your Target Market</h1>
          <p className={cn(styles.header_p, 'opensans')}>
          Share your culinary creations with foodies across Canada. 
          <br />
          Make it simple to manage your sales and get paid seamlessly.
          </p>
          <Button name='Join Waitlist' path='#contact' />
        </div>
        <div className='app_wrapper_img'>
          <div className={cn(styles.wrapper_img, 'img_padding')} >
            <Image
              src={info?.metadata?.picture?.imgix_url}
              alt='header_img'
              objectFit='cover'
              width={450}
              height={500}
              priority
              />
          </div>
        </div>
      </div>
    </div>
);

export default Home;