const ImageGalleryItem = ({ id, url, alt }) => (
	<>
		<img src={url} alt={alt} className="ImageGalleryItem-image" />
	</>
);
 
export default ImageGalleryItem;