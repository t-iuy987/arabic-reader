import axios from "axios";

class Book{
    create(formData){
        const url = "http://localhost:4000/api/uploadBook";
        const config = {
            headers :{
                "content-type" :"multipart/form-data"
            }
        };
        return axios.post(url, formData, config)
    }
    getBooks()
    {
        const url = "http://localhost:4000/api/getBooks";
        return axios.get(url)
    }
 
}
export default new Book();