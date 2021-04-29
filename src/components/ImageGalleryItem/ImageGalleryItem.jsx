import PropTypes from 'prop-types';

const ImageGalleryItem = ({ url, alt, onClick }) => (
	<>
		<img
			src={url}
			alt={alt}
			onClick={onClick} className="ImageGalleryItem-image"
		/>
	</>
);

ImageGalleryItem.propTypes = {
	url: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
}
 
export default ImageGalleryItem;