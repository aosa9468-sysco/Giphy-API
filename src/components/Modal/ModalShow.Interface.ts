import { ImageInterface } from "../Gifs/Gifs.Interface";

export interface ModalShowProps {
    lgShow: boolean;
    setLgShow(lgShow: boolean): void;
    images: ImageInterface;
}