import styles from "./CardPost.module.scss";
import Post from "@/interfaces/Post";
import Image from "next/image";

const HOST = 'http://localhost:1337';

export default function CardPost({post}: { post: Post }) {
    const {
        attributes: {
            TipoPost = null,
            Thumbnail,
            publishedAt,
            Titulo
        }
    } = post;

    return <article className={styles.cardPost}>
        <div className={styles.cardPost__thumbnail}>
            {Thumbnail?.data &&
                <Image className={styles.cardPersona__image}
                       src={`${HOST}${Thumbnail?.data?.attributes?.url || ''}`}
                       alt={Thumbnail?.data?.attributes?.alternativeText || ''}
                       width={Thumbnail?.data?.attributes?.width}
                       height={Thumbnail?.data?.attributes?.height}/>}
            <div className={styles.cardPost__tags}>
                <span>{TipoPost?.data?.attributes?.Nome}</span>
            </div>
        </div>
        <div className={styles.cardPost__details}>
            <small>{(new Date(publishedAt)).toLocaleString()}</small>
            <h2>{Titulo}</h2>
            <p>Lorem Ipsum adsjdnas sadjnfasl asdlkfnasf asldkfnasf aslkdnasf</p>
        </div>
    </article>;
}