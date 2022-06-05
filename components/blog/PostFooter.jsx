import client from "../../sanity/client";
import imageUrlBuilder from '@sanity/image-url'

const PostFooter = ({ author }) => {

    const builder = imageUrlBuilder(client)

    function urlFor(source) {
        return builder.image(source)
    }


    return (
        <div className="container d-flex align-items-center  justify-content-center justify-content-lg-start section_posts">
            <img  src={urlFor(author.image).url()} alt="" className="img-fluid rounded-circle author_image" />
            <div className="h4 ms-3">  Post By   {author.name}  </div>
        </div>
    );
}

export default PostFooter;