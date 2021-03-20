import css from "./Button.module.scss";

const Button = (props) => (
    <button className={css.button}>{props.children}</button>
);

export default Button;
