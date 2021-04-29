import axios from 'axios';

// Your API key: 20542752-0490219c09a6da4a08c0fa17e
// https://pixabay.com/api/?key=20542752-0490219c09a6da4a08c0fa17e&q=yellow+flowers&image_type=photo

const fetchPics = () => {
  return axios
    .get(
      'https://pixabay.com/api/?key=20542752-0490219c09a6da4a08c0fa17e&q=yellow+flowers&image_type=photo',
    )
    .then(console.log);
};

export default { fetchPics };
