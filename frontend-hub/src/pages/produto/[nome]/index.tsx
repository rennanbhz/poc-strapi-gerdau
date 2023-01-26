import { useRouter } from "next/router";

export default function SobreIndex() {
    const router = useRouter()
    const { nome = '' } = router.query
    return <div>
        Produto: {nome}
    </div>;
}