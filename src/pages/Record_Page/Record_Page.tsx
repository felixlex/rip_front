import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Record_Info, {Param} from '../../components/Record_Info/Record_Info'
import "./Record_Page.css"
import { Container, Row } from 'react-bootstrap';
import axios from 'axios'
import My_Navbar_Without_Cart from '../../components/Navbar/Navbar';

export interface Record {
    record_id: number,
    rec_name: string,
    units?: string,
    env_measur?: string,
    status_rec: string,
    description: string,
    photo_record: string
}

const Record_Page: FC = () => {
    const { id } = useParams();

    const [record, setRecord] = useState<Record>();
    const [parameters, setParameters] = useState<Param[]>([]);

    const getParams = (source: Record) => {
        let params: Param[] = []
        source.units && params.push({key: "Еденицы измерения", value: source.units})
        source.env_measur &&  params.push({key: "Среда обитания", value: source.env_measur})
        return params
    }

    const get_Record = async () => {
        const {data} = await axios(`http://127.0.0.1:8000/records/${id}`, {
            method: "Get",
        })
        setRecord(data);
        setParameters(getParams(data));
    }
    useEffect(() => {
        get_Record()
    }, [id]);

    return (
        <Container>
            <My_Navbar_Without_Cart/>
            <Row>
                {record && parameters && id && <Record_Info record_id={parseInt(id)} description={record.description} rec_name={record.rec_name} parameters={parameters} photo_record={record.photo_record} />}
            </Row>
        </Container>
    )
}

export default Record_Page;