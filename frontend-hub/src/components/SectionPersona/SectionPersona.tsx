import {useEffect, useState} from "react";
import styles from "./SectionPersona.module.scss";
import CardPersona from "@/components/CardPersona/CardPersona";
import Persona from "@/interfaces/Persona";

const HOST = 'http://localhost:1337';
export default function SectionPersona() {
    const [content, setContent] = useState<Persona[]>([]);

    useEffect(() => {
        fetch(`${HOST}/api/personas?populate=Imagem`)
            .then(response => response.json())
            .then(body => setContent(body?.data || []));
    }, []);

    if (!content)
        return (
            <section className={styles.sectionPersona__loading}>
                <h2><i>+</i> <span>Carregando...</span></h2>
            </section>
        );
    return (
        <section className={styles.sectionPersona}>
            <div className={styles.sectionPersona__container}>
                {content.map((persona, index) =>
                    <CardPersona key={`card-persona-${index}`} persona={persona}/>)}
            </div>
        </section>
    );
}