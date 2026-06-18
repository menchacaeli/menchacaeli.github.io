import styles from './Button.module.css';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  href?: string;
  children: React.ReactNode;
}

export function Button({ variant = 'primary', href, children }: ButtonProps) {
  if (href) {
    return (
      <a
        href={href}
        className={`${styles.button} ${styles[variant]}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  return (
    <button className={`${styles.button} ${styles[variant]}`}>
      {children}
    </button>
  );
}
