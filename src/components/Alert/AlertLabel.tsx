import { Alert } from "react-bootstrap";
import { AlertLabelProps } from "./AlertLabel.Interface";

function AlertLabel(props: AlertLabelProps) {
    return (
        <Alert variant={props.variant}>
            {props.text ? props.text : "Unexpected Error Occured"}
        </Alert>
    )
}

export default AlertLabel;