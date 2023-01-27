import {useEffect, useState} from "react";
import styles from "./SectionDestaque.module.scss";
import {ImageObject} from "@/interfaces/ImageObject";
import Image from "next/image";

export interface Destaque {
    id: number
    attributes: {
        TextoDeDestaque: string,
        LabelBotao: string,
        UrlBotao: string,
        Descricao: string,
        Imagem: {
            data: [
                ImageObject
            ]
        }
    }
}

const HOST = 'http://localhost:1337';
export default function SectionDestaque() {
    const [content, setContent] = useState<Destaque[]>([]);

    useEffect(() => {
        fetch(`${HOST}/api/Destaques?populate=Imagem`)
            .then(response => response.json())
            .then(body => setContent(body?.data || []));
    }, []);

    if (!content || content.length == 0)
        return (
            <section className={styles.sectionDestaque__loading}>
                <h2><i>+</i> <span>Carregando...</span></h2>
            </section>
        );
    return (
        <section className={styles.sectionDestaque}>
            <div className={styles.sectionDestaque__container}>
                <Image src={`${HOST}${content[0].attributes.Imagem?.data[0].attributes?.url || ''}`}
                       alt={content[0].attributes.Imagem?.data[0].attributes?.alternativeText || ''}
                       layout='fill'/>
                <div className={styles.sectionDestaque__bottomLeft}>
                    <h3>{content[0].attributes.TextoDeDestaque}</h3>
                    <p>{content[0].attributes.Descricao}</p>
                    <div className={styles.sectionDestaque__buttonRedirect}>
                        <a href={`${content[0].attributes.UrlBotao}`}>
                            <span>{content[0].attributes.LabelBotao}</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}