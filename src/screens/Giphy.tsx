import React, { useEffect, useState } from "react";
import { Row, Col, Container, Alert } from 'react-bootstrap';
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
            if(data.pagination.count !== 0) {
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
            if(data.pagination.count !== 0) {
                setTotalPages(Math.floor(data.pagination.total_count / data.pagination.count))
            }
        }).catch((error) => {
            console.log('Error rending Serached GIFs', error);
            setIsLoading(false)
        });;
    }

    const handleSearch = (value: any, currentState: any) => {
        setCurrentState(currentState)
        setSearch(value)
    }

    return (
        <Container>
            {!isLoading && data.length === 0 && <Alert>No Gifs to load</Alert>}
            <Row>
                <Col><h1>Giphy API</h1></Col>
            </Row>
        </Container>
    );
};

export default Giphy;