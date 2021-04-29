import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({pics, onClick}) => (
	<ul className="ImageGallery">
		{pics.map(({ id, webformatURL, largeImageURL, tags }) => (
			<li className="ImageGalleryItem" key={id}>
				<ImageGalleryItem
					url={webformatURL}
					alt={tags}
					onClick={()=>onClick(largeImageURL, tags)}
				/>
			</li>
		))}
	</ul>
)

ImageGallery.propTypes = {
	pics: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
	})),
	onClick: PropTypes.func.isRequired,
}
 
export default ImageGallery;