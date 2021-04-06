import styles from './Button.module.scss'

function Button({
    type='primary',
    title='',
    onClick= () => {}
}) {
    const classNames = [styles.wraper, styles.type]

    return (
        <button
            className={classNames.join(' ')}
            onClick={onClick}
        >
            <span>{title}</span>
        </button>
    )
}

export default Button