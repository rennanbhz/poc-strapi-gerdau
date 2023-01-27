import {useEffect, useState} from "react";
import styles from "./SectionHeaderMenu.module.scss";
import ButtonWithAction, {Button} from "@/components/ButtonWithAction/ButtonWithAction";

const HOST = 'http://localhost:1337';
export default function sectionHeaderMenu() {
    const [content, setContent] = useState<Button[]>([]);

    useEffect(() => {
        fetch(`${HOST}/api/item-header-menus`)
            .then(response => response.json())
            .then(body => setContent(body?.data || []));
    }, []);

    if (!content)
        return (
            <section className={styles.sectionHeaderMenu__loading}>
                <h2><i>+</i> <span>Carregando...</span></h2>
            </section>
        );
    return (
        <section className={styles.sectionHeaderMenu}>
            <div className={styles.sectionHeaderMenu__container}>
                {content.map((button, index) =>
                    <ButtonWithAction key={`button-${index}`} button={button}/>)}
            </div>
        </section>
    );
}