import styles from "./CardPersona.module.scss";
import {ImageObject} from "@/interfaces/ImageObject";
import Image from "next/image";
import Persona from "@/interfaces/Persona";

const HOST = 'http://localhost:1337';

export default function CardPersona({persona}: { persona: Persona }) {
    const {attributes} = persona;
    return (
        <a href={`/persona/${attributes.Slug}`}  className={styles.cardPersona}>
            <article>
                <Image className={styles.cardPersona__image}
                    src={`${HOST}${attributes.Imagem?.data?.attributes?.url || ''}`}
                       alt={attributes.Imagem?.data?.attributes?.alternativeText || ''}
                       width={attributes.Imagem?.data?.attributes?.width}
                       height={attributes.Imagem?.data?.attributes?.height}/>
                <div className={styles.cardPersona__details}>
                    <h3>{attributes.Nome}</h3>
                    <i>-&gt;</i>
                </div>
            </article>
        </a>
    );
}