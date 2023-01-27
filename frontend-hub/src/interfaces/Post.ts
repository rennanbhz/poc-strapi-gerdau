import {ImageObject} from "@/interfaces/ImageObject";
import Persona from "@/interfaces/Persona";
import PostType from "@/interfaces/PostType";

export default interface Post {
    id: number
    attributes: {
        Titulo: string,
        Slug: string,
        ConteudoPost: string,
        createdAt: string,
        updatedAt: string,
        publishedAt: string,
        Thumbnail?: {
            data: ImageObject
        },
        Personas?: {
            data: Persona[]
        },
        TipoPost?: {
            data: PostType
        }
    }
}