import Image from 'next/image';
import cn from 'classnames';
import Button from 'components/Button';

import styles from './styles.module.scss';

const AboutUs = ({ info }) => {
  return (
    <div className={cn( styles.about,'app_bg','flex_center','section_padding' )} id='about'>
      {/*<div className={cn( styles.about_overlay,'flex_center' )}>
        <div className={styles.about_overlay_img}>
          <Image src={info?.metadata?.initials?.imgix_url} layout='fill' objectFit='cover' alt='overlay'/>
        </div>
      </div>*/}
      <div className={cn(styles.about_content, 'flex_center')}>
        <div className={styles.about_content_about}>
          <h1 className='headtext_cormorant'>ABOUT US</h1>
          <p className='opensans'>BORN FROM THE PASSION OF TWO FRIENDS FOR EXPLORING DIFFERENT CULTURAL CUISINES, COOLFOODS ALLOWS HIGH-QUALITY CUISINES TO REACH FOODIES EVERYWHERE, EVEN THOSE FAR FROM THE VENDOR. WITH COOLFOODS, FOOD VENDORS CAN EXPAND PAST THEIR LOCALITY AND SHARE THEIR CULINARY CREATIONS WITH FOODIES ALL AROUND CANADA.</p>
          <Button name='Know More' path='#intro' />
        </div>
        <div className={cn(styles.about_content_knife, 'flex_center')}>
          <div className={styles.about_content_img}>
            <Image src='https://i.imgur.com/Re3dwo7.png' layout='fill' objectFit='contain' alt='about_knife'  priority/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;