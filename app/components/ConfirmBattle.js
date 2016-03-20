import Radium from 'radium';


const puke = (object) => {
    return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

const ConfirmBattle = (props) => {
    return props.isLoading
        ? <p> LOADING... </p>
        : <div> CONFIRM BATTLE: {puke(props)}</div>
}

export default Radium(ConfirmBattle);
