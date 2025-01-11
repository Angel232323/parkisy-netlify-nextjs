import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="../public/reparar.png" alt="Netlify Logo" className={styles.logo} />
      </footer>
    </>
  )
}
