import React, { useEffect, useState } from "react";
import { Row, Col, Container, Alert } from 'react-bootstrap';
import AlertLabel from "../components/Alert/AlertLabel";
import Gifs from "../components/Gifs/Gifs";
import Loader from "../components/Loader/loader";
import Paginate from "../components/Pagination/Pagination";
import SearchBar from "../components/SearchBar/SearchBar";
import { getSearchingGifs, getTrendingGifs } from "../services/GiphyService";

const Giphy = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    let [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [currentState, setCurrentState] = useState("Trending");

    useEffect(() => {
        if (currentState === "Trending") {
            renderTrendingData(offset);
        }
        else {
            renderSearchData(offset, search);
        }
    }, [offset]);

    useEffect(() => {
        pageSelected(1);
    }, []);

    const pageSelected = async (page_number: number) => {
        setCurrentPage(page_number);
        let pages = 50 * (page_number - 1)
        setOffset(pages)
        setIsLoading(true);
    }

    const renderTrendingData = async (offset: any) => {
        await getTrendingGifs(offset).then((data) => {
            setData(data.data)
            setIsLoading(false)
            if (data.pagination.count !== 0) {
                setTotalPages(Math.floor(data.pagination.total_count / data.pagination.count))
            }
        }).catch((error) => {
            console.log('Error rending Trending GIFs', error);
            setIsLoading(false)
        });;
    }

    const renderSearchData = async (offset: any, searchVal: any) => {
        setIsLoading(true);
        setCurrentState("Search");
        await getSearchingGifs(offset, searchVal).then((data) => {
            setData(data.data)
            setIsLoading(false)
            if (data.pagination.count !== 0) {
                setTotalPages(Math.floor(data.pagination.total_count / data.pagination.count))
            }
        }).catch((error) => {
            console.log('Error rending Serached GIFs', error);
            setIsLoading(false)
        });;
    }

    const handleSearch = (value: any, currentState: any) => {
        if(!value){
            renderTrendingData(offset);
        }
        setCurrentState(currentState)
        setSearch(value)
    }

    return (
        <Container>
            {!isLoading && data.length === 0 && <Alert>No Gifs to load</Alert>}
            <br/>
            <Row>
                <Col/>
                <Col><h1>Gif Finder</h1></Col>
                <Col>
                    <SearchBar onClick={() => handleSearch(0, search)} onChange={(e: any) => handleSearch(e.target.value, "search")} onKeyDown={(e: any) => { if (e.key === "Enter") { handleSearch(e.target.value, "Search"); renderSearchData(0, search); } }} />
                </Col>
            </Row>
            <br/>
            {!isLoading && data.length === 0 && <AlertLabel text="Loading issue. Please try again" variant="danger" />}
            {totalPages !== 0 && !isLoading && <Paginate
                totPages={totalPages}
                currentPage={currentPage}
                pageClicked={(ele: any) => {
                    pageSelected(ele);
                }}
            >
                <Gifs data={data} />
            </Paginate>}
            {isLoading && <Loader/>}
        </Container>
    );
};

export default Giphy;