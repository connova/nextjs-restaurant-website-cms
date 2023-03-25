import cn from 'classnames';
import styles from './styles.module.scss';

const Form = () => {

    return(

        <form className={styles.form}/*action="/send-data-here"*/ method="post">
            
            <label className={styles.first} for="first">First name:</label>
            <input className={styles.first} type="text" id="first" name="first" />
            <br />
            <label className={styles.last} for="last">Last name:</label>
            <input className={styles.last} type="text" id="last" name="last" />
            <br />
            <label className={styles.email} for="email">Email:</label>
            <input className={styles.email} type="email" id="email" name="email" />
            <br />
            <button type="submit">Submit</button>
        </form>

    )

}

export default Form;