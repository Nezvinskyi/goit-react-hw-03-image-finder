const ImageGalleryItem = ({ url, alt }) => (
	<>
		<img src={url} alt={alt} className="ImageGalleryItem-image" />
	</>
);
 
export default ImageGalleryItem;