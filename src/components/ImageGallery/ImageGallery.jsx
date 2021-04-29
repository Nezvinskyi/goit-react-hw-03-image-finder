import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({pics}) => (
	<ul className="ImageGallery">
		{pics.map(({ id, webformatURL, tags }) => (
			<li className="ImageGalleryItem" key={id}>
				<ImageGalleryItem
					url={webformatURL}
					alt={tags}
				/>
			</li>
		))}
	</ul>
)
 
export default ImageGallery;