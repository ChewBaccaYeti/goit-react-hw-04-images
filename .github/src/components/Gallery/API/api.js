import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

const API_KEY = '35193871-7d122815c37d1c9f4ada7ea8e';

const fetchImages = async (query, page) => {
  const { data } = await axios.get(
    `/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};

export default fetchImages;
