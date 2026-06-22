import destinos from "@/data/destinos";
import CardDestino from "@/app/components/CardDestino/CardDestino";
import Link from "next/link";
import styles from "./page.module.css";

export default function Destinos() {
    return (
        <div>
            <h1 className={styles.titulo}>Destinos Turísticos</h1>
            <div className={styles.grid}>
                {destinos.map((destino, index) => (
                    <Link key={destino.id} href={`/destinos/${destino.id}`}>
                        <CardDestino nome={destino.nome} imagem={destino.imagem} priority={index === 0} />
                    </Link>
                ))}
            </div>
        </div>
    )
}