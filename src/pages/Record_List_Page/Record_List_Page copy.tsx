import { FC, useState, useEffect } from 'react';
import { useSsid } from "../../hooks/useSsid.ts";
import { useAuth } from '../../hooks/useAuth.ts';
import axios from "axios";
import { getDefaultResponse } from '../../assets/Mock_Objects.tsx';
import { useDispatch } from 'react-redux';
import { saveFilter } from "../../store/RecordFilterSlice.ts";
import { useStore } from 'react-redux';
import {Record_Card,Record_Card_with_Cart} from "../../components/Record_Card/Record_Card.tsx";
import Filter from '../../components/Filter/Filter.tsx';
import Loader from '../../components/Loader/Loader.tsx';
import My_Navbar_With_Cart from '../../components/Navbar/Navbar_with_cart.tsx';
import './Record_List_Page.css'
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom"


import { Button, Col, Container, Row } from 'react-bootstrap';


export interface Record {
    record_id: number,
    rec_name: string,
    units?: string,
    env_measur?: string,
    status_rec: string,
    description: string,
    photo_record: string
}

interface Response {
    draft_id: number,
    data: Record[]
}
const default_pic = `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`

const Record_List_Table: FC = () => {
    const [ loading, setLoading ] = useState(true)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [ respons, setResponse ] = useState<Response> ({
        draft_id:-1,
        data: [],
    })
    let n = useStore().getState().filter.name_filter
    const [ searchValue, setSearchValue ] = useState<string> (String(n))
    const [ filterSendCount, setFilterSendCount ] = useState<number> (0)
    const { session_id } = useSsid()
    //const { addToCart } = useCart()
    const { is_authenticated, is_moderator } = useAuth()
    const addToCart = async (record_id: number) => {
        await axios(`http://localhost:8000/records/${record_id}/post/`, {
            method: "POST",
            headers: {
                'authorization': session_id
            },
        })
        await getFilteredRecords()
    }

    const deleteRecord = async (id: number) => {
        try {
            await axios(`http://localhost:8000/records/${id}/delete/`, {
                method: "DELETE",
                headers: {
                    'authorization': session_id
                }
            })
            setFilterSendCount(filterSendCount+1)
        } catch (error) {
            console.log(error)
        }
    }
    const editRecord = async (id: number) => {
        try {
            navigate(`/edit/${id}`)
        } catch (error) {
            console.log(error)
        }
    }

    const getFilteredRecords = async () => {
        try {

            const { data } = await axios(`http://127.0.0.1:8000/records`, {
                method: "GET",
                headers: {
                    'authorization': session_id
                },
                params: {
                    name_filter: searchValue,
                },
                signal: AbortSignal.timeout(1000)
            })
            //setFiler(searchValue)
            dispatch(saveFilter(searchValue));
            console.log(data)
            for (let i = 0; i < data.data.length;i++ ) {
                if(data.data[i]['photo_record']){}else{
                    data.data[i]['photo_record'] = default_pic
                }}
            setResponse(data)
        } catch (error) {
            console.log(error)

            setResponse(getDefaultResponse())
        }
    }
    useEffect(() => {
        getFilteredRecords().then(() => {
            setLoading(false)
        }).catch((error) => {
            console.log(error)
            setLoading(false)
        })
    }, [filterSendCount,dispatch])
    //dispatch(saveFilter(searchValue ? searchValue : '' ))
//{record.cnt > 0 ? <button className="main-add-button" onClick={() => {handleAddToCart(product.pk)}}>Добавить в корзину</button> :
    if (!is_moderator){
    return ('')}else{
        return(
            <> {loading ? <Loader /> :
            <Container style={{display:'flex-block'}}>
                        <My_Navbar_With_Cart
            draft_id={respons.draft_id}
            />
                <Row>
                    <Col style={{ width: "100%", margin: "30px" }}>
                        <Filter
                            search={searchValue}
                            setSearch={setSearchValue}
                            send={setFilterSendCount}
                        />
                    </Col> 
                </Row>
                <Row style={{width:"95%",marginInline:'auto'}}>
                    <Table striped bordered hover variant="white">
                        <thead>
                            <tr>
                                <th> Название</th>
                                <th> Размерность</th>
                                <th> Среда обитания</th>
                                <th> Удалить</th>
                                <th> Редактировать</th>
                            </tr>
                        </thead>
                        <tbody>
                        {respons.data.map((record) => (
                            <tr>
                                <td>{record.rec_name}</td>
                                <td>{record.units}</td>
                                <td>{record.env_measur}</td>
                                <td><Button onClick={() => {deleteRecord(record.record_id)}}>Удалить</Button></td>
                                <td><Button onClick={() => {editRecord(record.record_id)}}>Редактировать</Button></td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Row>
            </Container>}</>
        )
    }
}

export default Record_List_Table;