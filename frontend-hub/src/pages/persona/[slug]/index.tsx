import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import Persona from "@/interfaces/Persona";
import HeaderPage from "@/components/HeaderPage/HeaderPage";

const HOST = 'http://localhost:1337';

export default function PersonaBySlug() {
    const router = useRouter()
    const {slug = ''} = router.query;

    const [persona, setPersona] = useState<Persona | null>(null);
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
    }, [slug]);

    if (loading)
        return <main>
            {slug} Carregando...
        </main>
    return <main>
        <HeaderPage title={`Com você, ${persona?.attributes?.Nome}`}/>
        {slug}
    </main>
}