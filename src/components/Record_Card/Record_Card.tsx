import { FC } from 'react'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Record_Card.css'

interface Props {
    record_id: Number,
    rec_name: string,
    description: string,
    photo_record: string,
}

// "data:image/jpeg;base64,"+
const Ship_Card: FC<Props> = ({ record_id, rec_name, description, photo_record }) => (
    <Card style={{ marginRight: '1rem', marginTop: '2em'  }}>
	    <Card.Body>
	    	<Card.Img variant="top" src={`data:image/jpeg;base64,${photo_record}`} height = '349px' width='253px' border-radius = '15px'/>
			<Card.Title>{rec_name}</Card.Title>
		    <Card.Text>
		          {description}
		    </Card.Text>
			<div className= "button_class">
	    	<Button  href={"record_of_animal/" + record_id.toString()} variant="light">Подробнее</Button>
			</div>
		</Card.Body>
    </Card>
)

export default Ship_Card