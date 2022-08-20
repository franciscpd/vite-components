import './styles.scss'

type ButtonProps = {
  label: string
  onClick: () => void
  type?: string
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'primary' }) => {
  return (
    <button onClick={onClick} type='button' className={`btn btn--${type}`}>
      {label}
    </button>
  );
}

export default Button;