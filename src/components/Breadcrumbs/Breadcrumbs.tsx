import { FC } from 'react'
import { Container, Row } from 'react-bootstrap';
import { getBase } from '../../../path_config.ts';

interface BreadcrumbsProps {
    link: string,
    title: string
}

const Breadcrumbs: FC<{ pages: BreadcrumbsProps[] }> = ({ pages }) =>  (
    <Container id="breadcrumbs">
        <Row style={{ display: "block" }}>
            <a href={`${getBase()}/`} style={{ textDecoration: "None" }}>Список услуг</a>
            /
            {pages && pages.map((page) => (
                <a href={ page.link } style={{ textDecoration: "None" }}>{page.title }</a>
            ))}
        </Row>
    </Container>
)

export default Breadcrumbs