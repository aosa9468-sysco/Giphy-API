export interface Image{
    '480w_still'?: ImageProps;
    downsized?: ImageProps;
    downsized_large?: ImageProps;
    downsized_medium?: ImageProps;
    downsized_small?: VideoProps;
    downsized_still?: ImageProps;
    fixed_height?: ImageProps;
    fixed_height_downsampled?: ImageProps;
    fixed_height_small?: ImageProps;
    fixed_height_small_still?: ImageProps;
    fixed_height_still?: ImageProps;
    fixed_width?: ImageProps;
    fixed_width_downsampled?: ImageProps;
    fixed_width_small?: ImageProps;
    fixed_width_small_still?: ImageProps;
    fixed_width_still?: ImageProps;
    looping?: VideoProps;
    original?: ImageProps;
    original_mp4?: VideoProps;
    original_still?: ImageProps;
    preview?: VideoProps;
    hd?: ImageProps;
    preview_gif?: ImageProps;
    preview_webp?: ImageProps;
}

interface ImageProps {
    height: string;
    mp4: string;
    size: string;
    url: string;
    width: string;
}

interface VideoProps {
    height: string;
    mp4: string;
    mp4_size: string;
    width: string;
}

interface Gifs {
    content_url?: string;
    embed_url?: string;
    id?: string;
    images: Image[];
    import_datetime?: string;
    is_sticker?: number;
    rating?: string;
    slug?: string;
    source?: string;
    source_post_url?: string;
    source_tld?: string;
    title?: string;
    trending_datetime?: string;
    type?: string;
    url?: string;
    username?: string;
}


interface Meta {
    msg: string;
    status: number;
    response_id: string;
}

interface Pagination {
    total_count: number;
    count: number;
    offset: number;  
}

export interface GifsProps {
    data: Array<Gifs>;
    meta?: Meta;
    pagination?: Pagination;
}