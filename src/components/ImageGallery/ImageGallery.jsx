import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({pics}) => (
	<ul className="ImageGallery">
		{pics.map(({ id, previewURL, tags }) => (
			<li className="ImageGalleryItem" key={id}>
				<ImageGalleryItem
					id={id}
					url={previewURL}
					alt={tags}
				/>
			</li>
		))}
			
			
			
	</ul>
)
 
export default ImageGallery;