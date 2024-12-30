import Gallery from "@/components/UI/GalleryPage";
import ProductsPage from "@/components/UI/Products";

export default function Page() {

    const photos = [
        '/gallery/1.JPG',
        '/gallery/2.JPG',
        '/gallery/3.JPG',
        '/gallery/4.JPG',
        '/gallery/5.JPG',
        '/gallery/6.JPG',
        '/gallery/7.JPG',
        '/gallery/8.JPG',
        '/gallery/9.JPG',
        '/gallery/10.JPG',
        '/gallery/11.JPG',
        '/gallery/12.JPG',
        '/gallery/13.JPG',
    ]

    return (
        <Gallery images={photos}/>
    )
}
