import { FC, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Record, get_Record_List } from '../../modules/getDataFromAPI'
import Record_Card from '../../components/Record_Card/Record_Card';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import "./Record_List_Page.css"
import {  Filter }  from '../../components/Filter/Filter';

import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// TODO
// 5. Navbar из списка базовых страниц
// 7. Развернуть фронтенд на Github Pages
// 8. ТЗ

const RecordListPage: FC = () => {
    const [records, setProducts] = useState<Record[]>([]);
    const [count,setCount] = useState(0)

    const location = useLocation();
    const request = new URLSearchParams(location.search);
    const requestName = request.get('name_filter');

    const [title,setTitle] = useState(requestName ? requestName : '');
    useEffect(() => {
        get_Record_List(title)
            .then((response) => {
                setProducts(response);
            });
    },[count]);
    return (
        <Container>

            <Row>
            <Col style={{ width: "22%", margin: "30px" }}>
                    <Filter
                        title={title}
                        changeTitle={setTitle}
                        count={count}
                        send = {setCount}
                    />
                </Col>
            </Row>
            <Row style={{ display: "flex" }}>
                <Col style={{ marginBottom: "30px", marginLeft: "10px" }}>
                    <div id="box">
                        {records && records.map((record) => (
                            <Record_Card key={record.record_id.toString()}
                                record_id={record.record_id}
                                rec_name={record.rec_name}
                                description={record.description}
                                photo_record={record.photo_record}/>
                        ))}
                    </div>
                </Col>
            </Row>
            </Container>
    );
}

export default RecordListPage