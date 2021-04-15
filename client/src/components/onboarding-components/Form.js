import react from 'react';

export default function Form(props){
    return(
        <form onSubmit={props.handleClick}>
            <h2>{props.question}</h2>
            {props.children}
            <button type="submit" >{props.last? 'Finish':'Continue'}</button>
        </form>
    )
}