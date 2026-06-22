import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Bem-vindo ao Portal de Viagens do Brasil</h1>
      <p className={styles.descricao}>Descubra os melhores destinos turísticos, seja do Brasil ou do mundo todo!</p>
      <Link href="/destinos" className={styles.botao}>
        Ver Destinos
      </Link>
    </div>
  );
}
