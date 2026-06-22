import Image from "next/image";
import styles from "./CardDestino.module.css";

type Props = {
    nome: string;
    imagem: string;
    priority?: boolean;
};

export default function CardDestino({ nome, imagem, priority }: Props) {
    return (
        <div className={styles.card}>
            <Image src={imagem} alt={nome} width={300} height={200} priority={priority} />
            <h2 className={styles.nome}>{nome}</h2>
        </div>
    );
}