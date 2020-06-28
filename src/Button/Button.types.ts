export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: 'default' | 'outlined'
  color?: 'default' | 'primary' | 'error'
  size?: 'sm' | 'md' | 'lg'
}
