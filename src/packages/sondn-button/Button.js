import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

function Button({
    to = '',
    href = '',
    size = 'm',
    type = 'primary',
    children = null,
    openNewTab = false,
    underline = false,
    onClick = () => {},
}) {
    const classNames = [
        styles.wrapper,
        styles[type],
        styles[size],
        underline ? styles.underline : '',
    ]
    const props = {
        
    }
    let Component = 'button'
    if (href) {
        Component = 'a'
        props.href = href


        if (openNewTab) {
            props.target = "_blank"
        }
    }
    if (to) {
        Component = Link
        props.to = to
    }
    return (
        <Component
            {...props}
            className={classNames.join(' ')}
            onClick={onClick}
        >
            <span>{children}</span>
        </Component>
    )
}

export default Button
