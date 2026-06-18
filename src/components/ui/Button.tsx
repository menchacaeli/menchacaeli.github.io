import styles from './Button.module.css';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  href?: string;
  children: React.ReactNode;
}

export function Button({ variant = 'primary', href, children }: ButtonProps) {
  if (href) {
    const isExternal = href.startsWith('http');
    return (
      <a
        href={href}
        className={`${styles.button} ${styles[variant]}`}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={`${styles.button} ${styles[variant]}`}>
      {children}
    </button>
  );
}
