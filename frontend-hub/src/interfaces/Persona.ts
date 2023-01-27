import {ImageObject} from "@/interfaces/ImageObject";

export default interface Persona {
    id: number
    attributes: {
        Nome: string,
        Slug: string,
        Imagem: {
            data: ImageObject
        }
    }
}