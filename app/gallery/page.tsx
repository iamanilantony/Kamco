import Gallery from "@/components/UI/GalleryPage";
import ProductsPage from "@/components/UI/Products";

export default function Page() {
  const photos = [
    "/new_images/gallery/img1.webp",
    "/new_images/gallery/img2.webp",
    "/new_images/gallery/img3.webp",
    "/new_images/gallery/img4.webp",
    "/new_images/gallery/img5.webp",
    "/new_images/gallery/img6.webp",
    "/new_images/gallery/img7.webp",
    "/new_images/gallery/img8.webp",
    "/new_images/gallery/img9.webp",
    "/new_images/gallery/img10.webp",
    "/new_images/gallery/img11.webp",
    "/new_images/gallery/img12.webp",
  ];

  return <Gallery images={photos} />;
}
