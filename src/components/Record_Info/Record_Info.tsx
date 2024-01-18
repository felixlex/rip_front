import { FC } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";

export interface Param {
    key: string,
    value: string
}

interface Props {
    record_id: Number,
    rec_name: string,
    description: string,
    photo_record: string,
    parameters: Param[],
}

// "data:image/jpeg;base64,"+
const Ship_Info: FC<Props> = ({ record_id, rec_name, description, photo_record  , parameters}) => (
    <div className="product">
        <div className="product-info" key={record_id.toString()}>
            <h4 className="product-title">{rec_name}</h4>
            <div className="product-image-wrap">
                <img src={`data:image/jpeg;base64,${photo_record}`} alt="картинка" className="product-image" />
            </div>
            <div className="product-bar">
                <label htmlFor="product-params" className="product-params-text">{description}</label>
            </div>
            <table className="product-params">
                <tbody>
                {parameters && parameters.map((param) => (
                    param.value && <tr className="product-param">
                    <td className="property-key">
                        <h4 className="property-key-text">{param.key}</h4>
                        <h4 className="property-key-dots"></h4>
                    </td>
                    <td className="property-value">{param.value}</td>
                </tr>
                ))}</tbody>
            </table>
        <Link to="rip_front/">Назад</Link>
        </div>
    </div>
)

export default Ship_Info