import { useRouter } from "next/router";

export default function SobreIndex() {
    const router = useRouter()
    const { nome = '' } = router.query
    return <div>
        Produto Relacionados: {nome}
        <ul>
            <li>GG70</li>
            <li>GG40</li>
        </ul>
    </div>;
}