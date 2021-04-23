import React from 'react'
import classNames from 'classnames'

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

export default Button
