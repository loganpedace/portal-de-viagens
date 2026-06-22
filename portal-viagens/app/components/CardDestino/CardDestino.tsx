import Image from "next/image";
import styles from "./CardDestino.module.css";

// Interface para definir as propriedades do componente
type Props = {
    nome: string;
    imagem: string;
    priority?: boolean;
};

// Componente funcional que recebe nome, imagem e priority como props
export default function CardDestino({ nome, imagem, priority }: Props) {
    return (
        <div className={styles.card}>
            <Image src={imagem} alt={nome} width={300} height={200} priority={priority} />
            <h2 className={styles.nome}>{nome}</h2>
        </div>
    );
}