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
interface Props_Add {
    record_id: Number,
    rec_name: string,
    description: string,
    photo_record: string,
	add_to_cart: Function
}
// "data:image/jpeg;base64,"+
export const Record_Card: FC<Props> = ({ record_id, rec_name, description, photo_record }) => (
    <Card style={{ width: '20rem',height: '24rem',  marginRight: '2rem', marginTop: '2em'  }}>
	    <Card.Body>
	    	<Card.Title>{rec_name}</Card.Title>
	    	<Card.Img variant="top" src={`data:image/jpeg;base64,${photo_record}`} height={150} width={200} />
		    <Card.Text>
		          {description}
		    </Card.Text>
	    	<Button href={"/records/" + record_id.toString()} variant="warning">Подробнее</Button>
	    </Card.Body>
    </Card>
)

export const Record_Card_with_Cart: FC<Props_Add> = ({ record_id, rec_name, description, photo_record,add_to_cart }) => (
    <Card style={{ width: '20rem',height: '24rem',  marginRight: '2rem', marginTop: '2em'  }}>
	    <Card.Body>
	    	<Card.Title>{rec_name}</Card.Title>
	    	<Card.Img variant="top" src={`data:image/jpeg;base64,${photo_record}`} height={150} width={200} />
		    <Card.Text>
		          {description}
		    </Card.Text>
	    	<Button style={{margin:"5px"}} href={"/records/" + record_id.toString()} variant="warning">Подробнее</Button>
			<Button style={{margin:"5px"}} variant="warning" onClick={() => {add_to_cart(record_id)}}>Добавить в корзину</Button>
	    </Card.Body>
    </Card>
)

