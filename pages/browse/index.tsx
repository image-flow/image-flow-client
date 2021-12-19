import Gallery from "react-photo-gallery";
import { Images } from "./Images";
import { useState, useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Navbar from "@components/Navbar/Navbar";

const Browse = () => {

	const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

	return (
		<>
		<Navbar />
		<div style={{marginTop: "4rem"}}></div>
		

		<div style={{padding: "1rem"}}>
			<center style={{marginTop: "-1rem"}}><h1>Image Gallery</h1></center>
			<Gallery photos={Images} onClick={openLightbox}/>
			<ModalGateway>
							{viewerIsOpen ? (
								<Modal onClose={closeLightbox}>
									<Carousel
										currentIndex={currentImage}
										views={Images.map(x => ({
											...x,
											srcset: x.srcSet,
											caption: x.title
										}))}
									/>
								</Modal>
							) : null}
						</ModalGateway>
		</div>

		</>
	)
}

export default Browse;