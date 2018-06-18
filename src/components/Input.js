import React from 'react';


const input = ( props ) => {
    let inputElement = null;

    switch (props.elementType) {
        case ('input'):
            inputElement = 
            break;
        case ('textarea'):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                value={props.value}
                onChange={props.changed}
                {...props.elementConfig}/>
            break;
        case ('select'):
        // option.value refers to value property in individual option object
        // that sits in the select elements config options array
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option value={option.value} key={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;

        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                value={props.value}
                onChange={props.changed}
                {...props.elementConfig}/>
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );

};

export default input;
