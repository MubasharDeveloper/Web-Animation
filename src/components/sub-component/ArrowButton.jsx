import React from 'react'

export default function ArrowButton({ varient, text, type, classes}) {
    if (type.toLowerCase() == 'button') {
        return (
            <button className={`btn btn-${varient} ${classes}`}>{text}</button>
        )
    } else if (type.toLowerCase() == 'link') {
        return (
            <a className={`btn btn-${varient} ${classes}`} href={'#'}>{text}</a>
        )
    }
}
