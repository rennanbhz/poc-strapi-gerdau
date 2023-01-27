import {useEffect, useState} from "react";
import styles from "./SectionPersona.module.scss";
import CardPersona from "@/components/CardPersona/CardPersona";
import Persona from "@/interfaces/Persona";

const HOST = 'http://localhost:1337';
export default function SectionPersona() {
    const [content, setContent] = useState<Persona[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch(`${HOST}/api/personas?populate=Imagem`)
            .then(response => response.json())
            .then(body => {
                setContent(body?.data || []);
                setLoading(false);
            });
    }, []);

    if (loading)
        return (
            <section className={styles.sectionPersona__loading}>
                <h2><i>+</i> <span>Carregando...</span></h2>
            </section>
        );
    return (
        <section className={styles.sectionPersona}>
            {
                content.length
                    ? <div className={styles.sectionPersona__container}>
                        {content.map((persona, index) =>
                            <CardPersona key={`card-persona-${index}`} persona={persona}/>)}
                    </div>
                    : <h2 className={styles.sectionPersona__warning}>
                        Não há personas para este contexto.
                    </h2>
            }
        </section>
    );
}