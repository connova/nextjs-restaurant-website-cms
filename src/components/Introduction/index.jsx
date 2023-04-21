import React, { useRef, useEffect } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';



const Introduction = ({ info }) => {
  

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const store = new Image();
    store.src = 'https://i.imgur.com/CGiZRrB.png'
    const customer = new Image()
    customer.src = 'https://i.imgur.com/d6VIoX3.png'
    const plane = new Image()
    plane.src = 'https://i.imgur.com/bMcH665.png'

    store.onload = () => {
      context.imageSmoothingQuality = "high";
      context.drawImage(store, 0, 120, store.width/15, store.height/15)
    }

    customer.onload = () => {
      context.imageSmoothingQuality = 'high';
      context.drawImage(customer, 600, 120, customer.width/15, customer.height/15)
    }

    plane.onload = () => {
      context.imageSmoothingQuality = 'high'
      context.drawImage(plane, 300, 0, plane.width/15, plane.height/15)
    }

  }, []);

  return (
    <div className={cn('app_bg', 'app_wrapper', 'section_padding')} id='intro'>
      <div /*className={cn('app_wrapper_img','app_wrapper_img_reverse')}*/>
        <div /*className={cn(styles.wrapper_img, 'img_padding')}*/ >
          <canvas
            ref={canvasRef} width={750} height={300}
          />
        </div>
    </div>
    
    <div className='app_wrapper_info'>
        <h1 className='headtext_cormorant'>How It Works</h1>
        <div className={styles.intro_content}>
            <p>1) A Long Distance Customer Orders Food From Your Online Store On CoolFoods</p>
            <p>2) CoolFoods Picks Up The Order From Your Location and Perserves It Using Dry Ice </p>
            <p>3) CoolFoods Delivers It To The Customer Using Rapid Delivery</p>
            <p>4) The Customer Receives Your Food and You Get Paid</p>
          <div className={styles.intro_content_quote}>
            <p className='opensans'>FROM VENDOR TO FOODIES ACROSS CANADA. GOURMET FOOD HAS NEVER REACHED THIS FAR BEFORE.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction;