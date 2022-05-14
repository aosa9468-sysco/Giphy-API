import { VideoProps } from "./Video.Interface";

function Video(props: VideoProps) {
    return (
        <video width="100%" height="300px" src={props.src} autoPlay loop />
    )
}

export default Video;