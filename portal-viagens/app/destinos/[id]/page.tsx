import destinos from "@/data/destinos";
import Image from "next/image";
import styles from "./page.module.css";

type Props = {
    params: Promise<{ id: string }>;
}


export default async function DetalheDestino({ params }: Props) {
    // Aguarda a promise para obter os parâmetros
    const { id } = await params;
    // Busca o destino com o ID correspondente
    const destino = destinos.find((d) => d.id === Number(id));

    if (!destino) {
        return <p>Destino não encontrado</p>
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>{destino.nome}</h1>
            <Image src={destino.imagem} alt={destino.nome} width={600} height={400} priority />
            <p className={styles.descricao}>{destino.descricao}</p>
        </div>
    );
}