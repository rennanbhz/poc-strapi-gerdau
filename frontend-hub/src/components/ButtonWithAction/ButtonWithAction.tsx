import styles from "./ButtonWithAction.module.scss";

export interface Button {
    id: number
    attributes: {
        Label: string,
        Tipo: string,
        AncoraURL: string,
        TextoModal: string,
        Filtro: JSON,
    }
}

const HOST = 'http://localhost:1337';

export default function ButtonWithAction({button}: { button: Button }) {
    const {attributes} = button;
    return (
        <a href={`${attributes.AncoraURL}`}>
            <article className={styles.buttonWithAction}>
                <div>
                    <h3>{attributes.Label}</h3>
                </div>
            </article>
        </a>
    );
}