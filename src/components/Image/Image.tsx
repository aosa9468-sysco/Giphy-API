import "./Image.css"
import { ImageProps } from "./Image.Interface";

function Image(props: ImageProps) {
    return (
        <div className="img-wrap">
            <img src={props.src} onClick={props.onClick} alt="Gifs" loading="lazy" />
        </div>)
}

export default Image;