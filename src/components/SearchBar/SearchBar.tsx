
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { SearchBarProps } from "./SearchBar.Interface";

function SearchBar(props: SearchBarProps) {
    return (
        <InputGroup size="lg">
            <FormControl
                placeholder="Search Gifs"
                aria-label="Search Gifs"
                aria-describedby="basic-addon2"
                onKeyDown={props.onKeyDown}
                onChange={props.onChange}
            />
            <Button variant="primary" id="button-addon2" onClick={props.onClick}>
                Search
            </Button>
        </InputGroup>
    )
}

export default SearchBar;

