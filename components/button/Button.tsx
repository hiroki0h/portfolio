interface ButtonProps {
    size?: 'small';
    action?: 'top';
    label: string;
    onClick?: () => void;
}

export const Button = ({ size, action, label, onClick}: ButtonProps) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={[`button button--${size} button--${action}`].join(' ')}
        >
            {label}
        </button>
    );
};

export default Button;