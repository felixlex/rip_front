import { default_Record } from "../assets/Mock_Objects"

export interface Record {
    record_id: number,
    rec_name: string,
    units?: string,
    env_measur?: string,
    status_rec: string,
    description: string,
    photo_record: string
}



export const default_pic = "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"

export const get_Record_List = async ( name: string): Promise<Record[]> => {
    // return fetch(`http://127.0.0.1:8080/records/?status=A&type=${type}&price_min=${priceMin}&price_max=${priceMax}&title=${title}`)
    //     .then((response) => response.json())
    //     .catch(() => [])
    try {
        const response = await fetch(`http://127.0.0.1:8000/records?name_filter=${name}`)
        const result = await response.json()
        for (let i = 0; i < result.length;i++ ) {
            if(result[i]['photo_record']){}else{
                result[i]['photo_record'] = default_pic
            }
        }
        return result
    } catch (error) {
        console.log('Error')
        let result = []
        for (let i = 1; i <= 5; ++i) {
            result.push(default_Record(i))
        }
        result = result.filter((record) => {
            return (name == '' || record.rec_name.toLowerCase().includes(name.toLowerCase()))
        })
        return result
    }
    
}


export const get_Record = async (id: string): Promise<Record> => {
    // return fetch(`http://127.0.0.1:8080/products/${id}/`)
    //     .then((response) => response.json())
    //     .catch(() => undefined)
    try {
        const response = await fetch(`http://127.0.0.1:8000/records/${id}/`)
        const result = await response.json()
        return result
    } catch (error) {
        return default_Record(Number(id))
    }
    
}
