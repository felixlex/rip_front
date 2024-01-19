import { FC, Dispatch } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Button, Container, Row } from "react-bootstrap";

interface FilterData {
    search: string,
    setSearch: Dispatch<string>,
    send: (prevCount: any) => any,
}

const Filter: FC<FilterData> = ({ search, setSearch, send }) => {
    const handleSend = () => {
        send((prevCount: any) => prevCount + 1)
    }
    const {is_moderator} = useAuth()
    return (
        <Container id="filter">
            <Row><h3 className="filter-title">Фильтр</h3></Row>
            <form action="" method="get" id="filter-form">   
                <Container>
                    <Row style={{ display: "flex", transform: "translateY(-20%)" }}>
                        <input className="filter-input"
                            type="text"
                            autoComplete="off"
                            size={30}
                            placeholder="Название"
                            name="title"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </Row>
                    {!is_moderator && <Row><Button variant="warning" style={{height:"40px"}} type="button" onClick={handleSend}>Применить</Button></Row>}
                    {is_moderator && <Row style={{display:"inline-flex",width:"100%"}}>
                                        <Button variant="warning" style={{height:"40px",width:"49%",marginInline:"auto"}} type="button" onClick={handleSend}>Применить</Button>
                                        <Button variant="warning" style={{height:"40px",width:"49%",marginInline:"auto"}} type="button" href="/edit/0">Создать новый рекорд</Button>
                                    </Row>}
                </Container>
            </form>
        </Container>
    )
}

export default Filter;