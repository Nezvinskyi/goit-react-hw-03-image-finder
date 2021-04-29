const ImageGalleryItem = ({ url, alt, onClick }) => (
	<>
		<img
			src={url}
			alt={alt}
			onClick={onClick} className="ImageGalleryItem-image"
		/>
	</>
);
 
export default ImageGalleryItem;