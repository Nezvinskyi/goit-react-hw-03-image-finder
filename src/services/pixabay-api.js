import axios from 'axios';

const API_KEY = '20542752-0490219c09a6da4a08c0fa17e';

const fetchPics = ({ searchQuery = '' }) => {
  return axios
    .get(
      `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&page=1&per_page=12&image_type=photo`,
    )
    .then(response => response.data.hits);
};

export default { fetchPics };
