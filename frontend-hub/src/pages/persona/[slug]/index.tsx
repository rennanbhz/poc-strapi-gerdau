import {useRouter} from "next/router";

export default function PersonaBySlug() {
    const router = useRouter()
    const { slug = '' } = router.query;

    return <main>
        {slug}
    </main>
}