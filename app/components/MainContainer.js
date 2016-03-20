import Radium from 'radium';
import styles from '../styles';


const MainContainer = (props) => {
    return (
        <div
            className='jumbotron col-sm-12 text-center'
            styles={[styles.transparentBg]}>
            {props.children}
        </div>
    );
};

export default Radium(MainContainer);
