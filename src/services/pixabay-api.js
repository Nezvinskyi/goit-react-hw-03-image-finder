/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const API_KEY = '20542752-0490219c09a6da4a08c0fa17e';

const fetchPics = ({ searchQuery = '', currentPage = 1 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&page=${currentPage}&orientation=horizontal&per_page=12&image_type=photo`,
    )
    .then(response => response.data.hits);
};

export default { fetchPics };
