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
    favoriteWord(filepath, word, userId) {
      const url = `http://localhost:4000/api/addFavoriteWord`; // The backend API endpoint
      console.log("***////:",filepath, word, userId)
      const data = {
        filePath: filepath,
        word: word,
        userId: userId
      };
    
      return axios.post(url, data, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`
        }
      });
    }
    
  getBookIdByTitle(title){
    const url = `http://localhost:4000/api/getBookId/${title}`;
    return axios.get(url)
  }
  // Add a method to fetch books by user in your bookService
getBooksByUser(userId) {
  const url = `${BASE_URL}/api/getBooksByUser`;
  return axios.post(url, { userId });
}
getBooksByUser(userId) {
  const url = `${BASE_URL}/api/getBooksByUser/${userId}`;
  return api.get(url);
}
}

// export const getBookIdByTitle = async  (title)=> {
//     const url = `http://localhost:4000/api/getBookId/${title}`;
//     return axios.get(url)

//     // try {
//     //   const response =  axios.get(`http://localhost:4000/api/getBookId/${title}`);
//     //   if (response.data && response.data.bookId) {
//     //     return response.data.bookId;
//     //   } else {
//     //     throw new Error('Book not found');
//     //   }
//     // } catch (error) {
//     //   throw error; // Handle errors as needed
//     // }
// }
export default new Book();
