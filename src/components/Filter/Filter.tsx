import { FC } from 'react'
import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


export interface FilterData {
    title: string
}

export const Filter: FC<FilterData> = ({ title}) => {
    const [inputTitle, setInputTitle] = useState(title);

    return (
        <Container id="filter">
            <form action="" method="get" id="filter-form">
                <Container style={{ transform: "translateY(-40%)", paddingBottom: "20px", paddingLeft: "20px", borderBottom: "solid 1px #9e9b9b" }}>
                    <Row style={{ display: "flex", transform: "translateY(-20%)" }}>
                        <input className="filter-input" name="name_filter" type="text" size={30} placeholder="Введите название" value={inputTitle} onChange={(e) => setInputTitle(e.target.value)} /> 
                        <input type="submit" hidden />   
                    </Row>

                </Container>
            </form>
        </Container>
    )
}