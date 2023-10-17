import axios from "axios";
const BASE_URL = 'http://localhost:4000'; // Spring Boot backend URL

const api = axios.create({
  baseURL: BASE_URL,
});
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
    favoriteWord(bookId, word) {
    const url = `http://localhost:4000/api/favoriteWord/${bookId}`;
    const data = { word }; // You may need to format the data as needed.

    return axios.post(url, data);
  }
}

export const getBookIdByTitle = async  (title)=> {
    const url = `http://localhost:4000/api/getBookId/${title}`;
    return axios.get(url)

    // try {
    //   const response =  axios.get(`http://localhost:4000/api/getBookId/${title}`);
    //   if (response.data && response.data.bookId) {
    //     return response.data.bookId;
    //   } else {
    //     throw new Error('Book not found');
    //   }
    // } catch (error) {
    //   throw error; // Handle errors as needed
    // }
}
export default new Book();
