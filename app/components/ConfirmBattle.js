import Radium from 'radium';

const ConfirmBattle = (props) => {
    return props.isLoading
        ? <p> LOADING... </p>
        : <p> CONFIRM BATTLE </p>
}

export default Radium(ConfirmBattle);
