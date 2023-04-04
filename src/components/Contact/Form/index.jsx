import cn from 'classnames';
import styles from './styles.module.scss';
import Button from 'components/Button';

const Form = () => {

    return(

        <form className={styles.form}/*action="/send-data-here"*/ method="post">
            
            <label className={styles.first} htmlFor="first">First name:</label>
            <input className={styles.first} type="text" id="first" name="first" />
            <br />
            <label className={styles.last} htmlFor="last">Last name:</label>
            <input className={styles.last} type="text" id="last" name="last" />
            <br />
            <label className={styles.email} htmlFor="email">Email:</label>
            <input className={styles.email} type="email" id="email" name="email" />
            <br />
            <Button name='Join Waitlist' path='' />
        </form>

    )

}

export default Form;