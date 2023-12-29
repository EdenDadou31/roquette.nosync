import "./../styles/App.scss";

interface IButtonProps {
  color: string;
  label: string;
  onClick?: () => void;
  textColor?: string;
}

function Button({ color, label, onClick, textColor }: IButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color, color: textColor || "white" }}
      className="button"
    >
      {label}
    </button>
  );
}

export default Button;
