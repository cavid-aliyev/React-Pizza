import React from 'react'
import classNames from 'classnames';
import PropTypes from "prop-types";

const Button = ({outline, children, onClick, className}) => {
    return (
        <div>
            {/* for dinamic classes */}
            <button onClick={onClick} 
                    className={classNames('button', className,
            {
                'button--outline': outline,
            },
            )}>
                {children}
            </button>
        </div>
    )
}

Button.propTypes = {
    onClick: PropTypes.func
}


export default Button
