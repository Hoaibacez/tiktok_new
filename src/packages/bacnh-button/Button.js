import styles from "./Button.module.scss";

function Button({
  size = "m",
  type = "primary",
  children = null,
  underline = false,
  onClick = () => {}
}) {
  const classNames = [
    styles.wrapper,
    styles[type],
    styles[size],
    underline ? styles.underline : ""
  ];
  return (
    <button className={classNames.join(" ")} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
}

export default Button;
