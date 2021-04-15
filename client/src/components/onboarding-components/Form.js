import react from 'react';

const Form = (props) => {
    return (
        <form>
            <h2>{props.question}</h2>
            {props.children}
            <button type='submit' onClick={props.handleClick}>
                {props.last ? 'Finish' : 'Continue'}
            </button>
        </form>
    )
}

export default Form;