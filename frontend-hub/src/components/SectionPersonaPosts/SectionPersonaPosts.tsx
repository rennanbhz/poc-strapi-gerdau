import {useEffect, useState} from "react";
import qs from 'qs';
import Post from "@/interfaces/Post";
import CardPost from "@/components/CardPost/CardPost";
import styles from './SectionPersonaPosts.module.scss';
import {AeonikFono} from "@/fonts/AeonicFono";

const HOST = 'http://localhost:1337';

export default function SectionPersonaPosts(
    {personaId, title}
        : { personaId: number, title: string }
) {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const urlQuery = qs.stringify({
            populate: 'Thumbnail,TipoPost',
            filters: {
                Personas: {id: {$eq: personaId}}
            },
            sort: ['publishedAt:desc']
        });

        fetch(`${HOST}/api/posts?${urlQuery}`)
            .then(res => res.json())
            .then(body => {
                setPosts(body?.data || []);
                setLoading(false);
            })
    }, [personaId]);

    if (loading)
        return <section className={styles.sectionPersonaPost__loading}>
            <p>
                <i>+</i> <span>Carregando</span>
            </p>
        </section>;

    return <section className={styles.sectionPersonaPost}>
        <h1 className={[styles.sectionPersonaPost__title, AeonikFono.className].join(' ')}>{title}</h1>
        {posts.length > 0 && <div className={styles.sectionPersonaPost__filter}/>}
        <hr className={styles.sectionPersonaPost__divisor}/>
        {
            posts.length
                ? <div className={styles.sectionPersonaPost__cardsContainer}>
                    {posts.map(post =>
                        <CardPost key={`card-post-${post.id}`} post={post}/>)}
                </div>
                : <h2 className={styles.sectionPersonaPost__warning}>
                    Não há posts para este contexto.
                </h2>
        }
    </section>;
}