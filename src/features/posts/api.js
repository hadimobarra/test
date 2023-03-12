import axios from "axios";

export const fetchPosts = async(inp) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
}
