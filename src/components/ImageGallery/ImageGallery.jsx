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
 
export default ImageGallery;