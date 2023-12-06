import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Record, get_Record } from '../../modules/getDataFromAPI.ts'
import Record_Info, {Param} from '../../components/Record_Info/Record_Info.tsx'
import "./Record_Page.css"
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs.tsx';
import { Container, Row } from 'react-bootstrap';
import { getBase } from '../../../path_config.ts';

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

    useEffect(() => {
        id && get_Record(id)
            .then((response) => {
                setRecord(response);
                setParameters(getParams(response));
            })
            .then(() => {
                console.log(record);
                console.log(parameters);
            })
    }, [id]);

    return (
        <Container>
            <Row>
                {id && record && <Breadcrumbs pages={[ { link: `${getBase()}/classes_of_records/${id}/`, title: `${record.rec_name}` } ]} />}
            </Row>
            <Row>
                {record && parameters && id && <Record_Info record_id={parseInt(id)} rec_name={record.rec_name} description={record.description} parameters={parameters} photo_record={record.photo_record} />}
            </Row>
        </Container>
    )
}

export default Record_Page;