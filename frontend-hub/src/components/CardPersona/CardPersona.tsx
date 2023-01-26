import styles from "./CardPersona.module.scss";
import {ImageObject} from "@/interfaces/ImageObject";
import Image from "next/image";

export interface Persona {
    id: number
    attributes: {
        Nome: string,
        Slug: string,
        Imagem: {
            data: ImageObject
        }
    }
}

const HOST = 'http://localhost:1337';

export default function CardPersona({persona}: { persona: Persona }) {
    const {attributes} = persona;
    return (
        <a href={`/persona/${attributes.Slug}`}>
            <article className={styles.cardPersona}>
                <Image src={`${HOST}${attributes.Imagem?.data?.attributes?.url || ''}`}
                       alt={attributes.Imagem?.data?.attributes?.alternativeText || ''}
                       width={attributes.Imagem?.data?.attributes?.width}
                       height={attributes.Imagem?.data?.attributes?.height}/>
                <div>
                    <h3>{attributes.Nome}</h3>
                    <i>-&gt;</i>
                </div>
            </article>
        </a>
    );
}