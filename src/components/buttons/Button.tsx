import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React from "react";

type ButtonType = {
    name: string,
    bg: string,
    textColor: string,
    border: string,
    icon?: IconProp,
}

function Button(prop: ButtonType) {
    return (
        <div className={classNames(prop.bg, prop.border, 'flex items-center justify-center w-56 h-full rounded-md')}>
            {
                prop.icon ? <FontAwesomeIcon icon={ prop.icon } className={classNames('w-4 h-4 mr-2', prop.textColor)}/> : ''
            }
            
            <p className={classNames('h-9 content-center font-medium', prop.textColor)}>{ prop.name }</p>
        </div>
    );    
}

export default Button;