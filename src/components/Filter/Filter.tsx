import { FC } from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


export interface FilterData {
    title: string,
    changeTitle:Function,
    count: number,
    send: Function
}

export const Filter: FC<FilterData> = ({ title,changeTitle,count,send}) => {


    return (
        <Container id="filter">
                    <Row style={{ display: "flex" }}>
                        <div>
                        <input className="filter-input" name="name_filter" type="text" size={30} placeholder="Введите название" value={title} onChange={(e) => changeTitle(e.target.value)} />
                        </div>
                        <div>
                        <input type="button" onClick={()=>{send(count+1)}} value='Поиск'/>
                            </div> 
                    </Row>
        </Container>
    )
}