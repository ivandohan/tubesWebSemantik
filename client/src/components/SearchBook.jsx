import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import Map from "./Map"

const SearchBook = () => {
    const [keyword, setKeyword] = useState("");
    const [books, setBooks] = useState([]);
    const [detailBook, setDetailBook] = useState([])
    const [isShowDetail, setISD] = useState(false);
    const [isShowAuthor, setISA] = useState(false);
    const [authorDetail, setAuthor] = useState([]);

    const handleChange = (e) => {
        setKeyword(e.target.value);
    }

    const handleClick = async (e) => {
        e.preventDefault()

        try {
            let res = await axios.get("http://localhost:5000/api/books/search?keyword="+keyword)
            console.log(res.data)
            setBooks(res.data)
        } catch(err){
            console.log(err);
        }
    }

    const handleDetail = async () => {
        setISD(!isShowDetail)

        let id = ""

        books.map(book => {id = book["no"]["value"]})
        
        try {
            let res = await axios.get("http://localhost:5000/api/books/details?id="+id)
            console.log(res.data)
            setDetailBook(res.data)
        } catch(err){
            console.log(err);
        }
    }

    const handleAuthor = async (author) => {
        setISA(!isShowAuthor)
        try {
            let res = await axios.get("http://localhost:5000/api/books/author?authorname="+author)
            // console.log(res.data)
            setAuthor(res.data)
        } catch(err){
            console.log(err);
        }
    }

    return (
    <>
        <Row>
            <section className="searchBook" id="connect">
                <Container>
                    <Row className="align-items-center">
                        <Col>
                            <TrackVisibility>
                                {({isVisible}) => 
                                    <div className={isVisible ? "animate_animated animate_fadeIn" : ""}>
                                        <h2>Search Book</h2>
                                        <form>
                                            <Row>
                                                <Col size={12} sm={11} className="px-1">
                                                    <input type="text" onChange={handleChange} name="keyword" placeholder="Search by title..." autoComplete="off"/>
                                                </Col>
                                                <Col size={12} sm={1}>
                                                    <button onClick={handleClick}><span>Search</span></button>                                                    
                                                </Col>
                                            </Row>
                                        </form>
                                    </div>
                                }
                            </TrackVisibility>
                        </Col>
                    </Row>
                    <Row className="align-items-center mt-2">
                        <Col>
                            <div>
                                <h2>
                                    {
                                        (books.length > 0) ? "Result" : ""
                                    }
                                </h2>
                                <p>
                                    {
                                        (books.length < 1) ? "No result found" : ""
                                    }
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        {
                            isShowAuthor ? 
                            <>
                                {
                                (authorDetail.length < 1) ? 
                                    <Col>
                                        <Card className="bg-dark">
                                            <Card.Header>Details</Card.Header>
                                            <Card.Body>No data found in dbpedia</Card.Body>
                                            <Card.Body>
                                                <Button onClick={() => setISA(!isShowAuthor)} variant="primary">Hide</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    :
                                authorDetail.map((detail) => (
                                    <Col size={12} sm={12} className="mt-2">
                                    <Card className="bg-dark">
                                        <Card.Header>Details</Card.Header>
                                        <Card.Body>
                                            <Card.Title>{detail["name"]["value"]}</Card.Title>
                                        </Card.Body>
                                        <Card.Body>
                                            <Table striped bordered hover variant="dark">
                                                <thead>
                                                    <tr>
                                                        <th>No.</th>
                                                        <th>Key</th>
                                                        <th>Value</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Country</td>
                                                        <td>{detail["country"]["value"]}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Bio</td>
                                                        <td>{detail["bio"]["value"]}</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Card.Body>
                                        {
                                            detail["lat"]["value"] ? 
                                            <Card.Body className="mapws">
                                                <Map lat={detail["lat"]["value"]} lng={detail["long"]["value"]}/>
                                            </Card.Body>
                                            :
                                            <Card.Body>
                                                <p>Unknown geo location</p>
                                            </Card.Body>
                                        }
                                        <Button onClick={() => setISA(!isShowAuthor)} variant="primary">Hide</Button>
                                    </Card>
                                </Col>
                                ))}
                            </>
                            :
                            books.map((book) => (
                                <>
                                    <Col size={12} sm={3} className="mt-2 ">
                                        <Card style={{ width: '18rem' }} className="bg-dark justify-content-center align-items-center">
                                            <Card.Img variant="top" src={book["image"]["value"]} className="px-2 mt-3"/>
                                            <Card.Body>
                                                <Card.Title>{book["title"]["value"]}</Card.Title>
                                                <Card.Text>
                                                    <a onClick={() => handleAuthor(book['author']['value'])}>
                                                        {book["author"]["value"]}
                                                    </a>
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Body>
                                                <Button onClick={handleDetail}>Details</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    {
                                        isShowDetail && detailBook.map((detail) => (
                                            <Col size={12} sm={9} className="mt-2">
                                                <Card className="bg-dark">
                                                    <Card.Header>Details</Card.Header>
                                                    <Card.Body>
                                                        <Card.Title>{detail["title"]["value"]}</Card.Title>
                                                    </Card.Body>
                                                    <Card.Body>
                                                        <Table striped bordered hover variant="dark">
                                                            <thead>
                                                                <tr>
                                                                    <th>No.</th>
                                                                    <th>Key</th>
                                                                    <th>Value</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>Author</td>
                                                                    <td>
                                                                        <a onClick={() => handleAuthor(book['author']['value'])}>
                                                                            {book["author"]["value"]}
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>Publisher</td>
                                                                    <td>{detail["publisher"]["value"]}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>ISBN</td>
                                                                    <td>{detail["isbn"]["value"]}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>4</td>
                                                                    <td>Publication Year</td>
                                                                    <td>{detail["year"]["value"]}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>5</td>
                                                                    <td>Page Totals</td>
                                                                    <td>{detail["page"]["value"]}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>6</td>
                                                                    <td>Summary</td>
                                                                    <td>{detail["summary"]["value"]}</td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </Card.Body>
                                                    <Button onClick={() => setISD(!isShowDetail)} variant="primary">Hide</Button>
                                                </Card>
                                            </Col>
                                        ))
                                    }
                                </>
                            ))
                        }
                    </Row>
                </Container>
            </section>
        </Row>
        
    </>
    )
}

export default SearchBook