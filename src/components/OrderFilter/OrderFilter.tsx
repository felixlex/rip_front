import { FC, Dispatch, ChangeEvent } from 'react';
import { Button, Container, Row, FloatingLabel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

type Filter = {
    Active: boolean;
    Decline: boolean;
    Aprove: boolean;
}

type FilterByStatusProps = {
    state: Filter,
    setFilter: Dispatch<Filter>,
    start_date: string,
    setStartDate: Dispatch<string>,
    end_date: string,
    setEndDate: Dispatch<string>,
    send: (prevCount: any) => any
}

const OrderFilterMod: FC<FilterByStatusProps> = ({ state, setFilter,start_date, setStartDate,end_date,setEndDate,send }) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target;
        setFilter((prevState) => ({
        ...prevState,
        [name as keyof Filter]: checked,
        }));
    };

    const getBeginOfDay = (date: Date) => {
        if (date == null || !date || date.getTime() == 0) {
            return undefined
        }
        const newStartDate = new Date(date);
        newStartDate.setHours(0);
        newStartDate.setMinutes(0);
        newStartDate.setSeconds(0);
        return newStartDate;
    }
    
    const getEndOfDay = (date: Date) => {
        const newEndDate = new Date(date);
        if (date == null || !date || date.getTime() == 0) {
            return undefined
        }
        newEndDate.setHours(23);
        newEndDate.setMinutes(59);
        newEndDate.setSeconds(59);
        return newEndDate;
    }
    const handleSend = () => {
        send((prevCount: any) => prevCount + 1)
    }
    return (
        <Container>
            <Form onSubmit={handleSend} style={{width:"50%", marginInline:"auto",marginTop:"10px"}}>
            <FormGroup style={{display:"inline-block",marginTop:"10px"}}>
                    <FormControlLabel control={<Checkbox name='Active' defaultChecked={state.Active} onChange={handleChange}/>} label="Отправлен" />
                    <FormControlLabel control={<Checkbox name='Aprove' defaultChecked={state.Aprove} onChange={handleChange}/>} label="Принят" />
                    <FormControlLabel control={<Checkbox name="Decline" defaultChecked={state.Decline} onChange={handleChange}/>} label="Отклонен" />
            </FormGroup>
            <FormGroup style={{marginTop:"10px"}}>
            <FloatingLabel label='Дата начала'>
                <Form.Control type="date" onChange={(e) => setStartDate(e.target.value)} value={start_date} placeholder="Дата начала"/>
            </FloatingLabel>
            </FormGroup>
            <FormGroup style={{marginTop:"10px"}}>
            <FloatingLabel label='Дата конца'>
                <Form.Control type="date" onChange={(e) => setEndDate(e.target.value)} value={end_date} placeholder="Дата конца"/>
            </FloatingLabel>
            </FormGroup>
            <Button variant="warning" style={{width:"100%", marginTop:"20px",marginBottom:"30px"}} onClick={handleSend}>Поиск</Button>
            </Form>
            <Row>
            </Row>
            <Container id="filter-date">
        </Container>
        </Container>
    )
}

export default OrderFilterMod;