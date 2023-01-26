type ImageSizes = "large" | "small" | "medium" | "thumbnail";

export interface ImageAttributes {
    name: string,
    hash: string,
    ext: string,
    mime: string,
    url: string,
    size: number,
    width: number,
    height: number,
}

export interface ImageObject {
    id: number,
    attributes: ImageAttributes & {
        caption: string,
        alternativeText: string,
        formats: {
            [K in ImageSizes]: ImageAttributes & {
                path?: string | number,
            }
        }
    }
}