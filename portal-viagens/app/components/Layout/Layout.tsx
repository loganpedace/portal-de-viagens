import Link from "next/link";
import styles from "./Layout.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <span className={styles.logo}>✈️ Portal de Viagens Brasil</span>
                <nav className={styles.nav}>
                    <Link href={"/"}>Início</Link>
                    <Link href="/destinos">Destinos</Link>
                </nav>
            </header>

            <main className={styles.main}>{children}</main>
        

        <footer className={styles.footer}>
                <p>&copy; 2026 Portal de Viagens Brasil - Todos os Direitos Reservados</p>
        </footer>
    </div>
    );
}