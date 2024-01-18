import { FC } from 'react'
import { Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
interface BreadcrumbsProps {
    link: string,
    title: string
}

const Breadcrumbs: FC<{ pages: BreadcrumbsProps[] }> = ({ pages }) =>  (
    <Container id="breadcrumbs">
        <Row style={{ display: "block" }}>
        <Link to="rip_front/">Список рекордов</Link>
            /
            {pages && pages.map((page) => (
                <a href={ page.link } style={{ textDecoration: "None" }}>{page.title }</a>
            ))}
        </Row>
    </Container>
)

export default Breadcrumbs