import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import Persona from "@/interfaces/Persona";
import HeaderPage from "@/components/HeaderPage/HeaderPage";
import SectionPersonaPosts from "@/components/SectionPersonaPosts/SectionPersonaPosts";

const HOST = 'http://localhost:1337';

export default function PersonaBySlug() {
    const router = useRouter();
    const {slug = ''} = router.query;

    const [persona, setPersona] = useState<Persona>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (!slug) return;
        fetch(`${HOST}/api/personas?filters[Slug][$eq]=${slug}`)
            .then(res => res.json())
            .then(async body => {
                const retrivedPersona = body?.data?.[0] || null;
                console.log(body);
                if (retrivedPersona) {
                    setPersona(retrivedPersona);
                    setLoading(false);
                } else {
                    await router.push('/404')
                }
            });
    }, [router, slug]);

    if (loading)
        return <>
            {slug} Carregando...
        </>
    return <>
        <HeaderPage title={`Com você, ${persona?.attributes?.Nome}`}/>
        <SectionPersonaPosts title={'Vamos construir sua melhor obra'}
                             personaId={persona?.id as number}/>
    </>
}