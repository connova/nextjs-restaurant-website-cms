import Image from 'next/image';
import Form from './Form';
import cn from 'classnames';

import SocialMedia from 'components/Contact/SocialMedia';

import styles from './styles.module.scss';

const Contacts = ({ info }) => (
  <div className={cn('app_bg', 'app_wrapper', 'section_padding')} id='contact'>
    <div className={cn('app_container', 'app_wrapper')}>
      <div className={cn(styles.contact_info, 'app_wrapper_info')}>
        <h1 className='headtext_cormorant'>{info?.metadata?.title}</h1>
        <div className={cn(styles.contact_title, 'app_wrapper_content')}>
            <Form />
        </div>
        <h1 className={cn(styles.follow_title,'headtext_cormorant' )}>{info?.metadata?.details?.[1]?.title}</h1>
        <div className={styles.contact_social}>
          <SocialMedia />
        </div>
      </div>
      <div className='app_wrapper_img'>
        <div className={cn(styles.wrapper_img, 'img_padding')} >
          <Image
            src={info?.metadata?.picture?.imgix_url}
            alt='find_us_img'
            objectFit='contain'
            width={500}
            height={550}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Contacts;