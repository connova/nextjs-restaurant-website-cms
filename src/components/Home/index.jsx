import Image from 'next/image';
import cn from 'classnames';

import SubHeading from 'components/SubHeading';
import Button from 'components/Button';

import styles from './styles.module.scss';

const Home = ( { info } ) => (
    <div className={cn(styles.header, 'section_padding')} id='home'>
      <div className={cn('app_container', 'app_wrapper')}>
        <div className={styles.wrapper_info}>
          <SubHeading title={"Bring Your Culinary Creations to Foodies Across Canada"} />
          <h1 className={styles.header_h1}>{"Expand Your Reach with Coolfoods"}</h1>
          <p className={cn(styles.header_p, 'opensans')}>
          Coolfoods connects you with customers across Canada, allowing you to share your culinary creations with food lovers who can't travel to your region. Our easy-to-use platform makes it simple to manage your orders, track your sales, and get paid on time.
          </p>
          <Button name='Join The Waitlist Now' path='#contact' />
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