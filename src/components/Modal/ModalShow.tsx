import { Modal } from "react-bootstrap";
import Image from "../Image/Image";
import Video from "../Video/Video";
import { ModalShowProps } from "./ModalShow.Interface";

function ModalShow(props: ModalShowProps) {
    return (
        <Modal
            size="lg"
            show={props.lgShow}
            onHide={() => props.setLgShow(false)}
            aria-labelledby="gif-renderitions-modal"
        >
            <Modal.Header closeButton>
                <Modal.Title id="gif-renderitions-modal">
                    GIF Renditions
                </Modal.Title>
            </Modal.Header>

            {props.images && <Modal.Body>
                {props.images['480w_still'] && <Image src={props.images['480w_still']?.url} />}
                {props.images['downsized'] && <Image src={props.images['downsized']?.url} />}
                {props.images['downsized_large'] && <Image src={props.images['downsized_large']?.url} />}
                {props.images['downsized_medium'] && <Image src={props.images['downsized_medium']?.url} />}
                {props.images['downsized_small'] && <Video src={props.images['downsized_small']?.mp4} />}
                {props.images['downsized_still'] && <Image src={props.images['downsized_still']?.url} />}
                {props.images['fixed_height'] && <Image src={props.images['fixed_height']?.url} />}
                {props.images['fixed_height_downsampled'] && <Image src={props.images['fixed_height_downsampled']?.url} />}
                {props.images['fixed_height_downsampled'] && <Image src={props.images['fixed_height_downsampled']?.url} />}
                {props.images['fixed_height_small'] && <Image src={props.images['fixed_height_small']?.url} />}
                {props.images['fixed_height_small_still'] && <Image src={props.images['fixed_height_small_still']?.url} />}
                {props.images['fixed_height_still'] && <Image src={props.images['fixed_height_still']?.url} />}
                {props.images['fixed_width'] && <Image src={props.images['fixed_width']?.url} />}
                {props.images['fixed_width_downsampled'] && <Image src={props.images['fixed_width_downsampled']?.url} />}
                {props.images['fixed_width_small'] && <Image src={props.images['fixed_width_small']?.url} />}
                {props.images['fixed_width_small_still'] && <Image src={props.images['fixed_width_small_still']?.url} />}
                {props.images['fixed_width_still'] && <Image src={props.images['fixed_width_still']?.url} />}
                {props.images['hd'] && <Video src={props.images['hd']?.mp4} />}
                {props.images['looping'] && <Video src={props.images['looping']?.mp4} />}
                {props.images['original'] && <Image src={props.images['original']?.url} />}
                {props.images['original_mp4'] && <Video src={props.images['original_mp4']?.mp4} />}
                {props.images['original_still'] && <Image src={props.images['original_still']?.url} />}
                {props.images['fixed_width_still'] && <Image src={props.images['fixed_width_still']?.url} />}
                {props.images['preview'] && <Video src={props.images['preview']?.mp4} />}
                {props.images['preview_gif'] && <Image src={props.images['preview_gif']?.url} />}
                {props.images['preview_webp'] && <Image src={props.images['preview_webp']?.url} />}
            </Modal.Body>
            }
        </Modal >)
}

export default ModalShow;