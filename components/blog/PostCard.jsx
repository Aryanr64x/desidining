import Link from "next/link";
import imageUrlBuilder from '@sanity/image-url'
import client from "../../sanity/client";

const PostCard = ( { post , onHome}) => {
    const builder = imageUrlBuilder(client)

    function urlFor(source) {
        return builder.image(source)
    }

    const redirect = ()=>{
        
    }
    return (
        <div className="container section_posts post_card" onClick={redirect}>
            <div className="row">
                <div className={ (onHome) ? 'col-lg-1' : '' }></div>
                <div className={ (onHome) ? 'col-lg-3 d-flex justify-content-center' : 'col-lg-4 d-flex justify-content-center' }>
                    <img className="img-fluid" src={urlFor(post.mainImage).url()} alt="sample2-2" />
                </div>
                <div className={ (onHome) ? 'col-lg-7 mt-4 mt-lg-0 d-flex flex-column justify-content-between' : 'col-lg-8 mt-4 mt-lg-0 d-flex flex-column justify-content-between' }>
                    <div>
                    <div className="display-6 text-center text-lg-start title">
                      {
                          (onHome) ? ( <Link href={'/blog/'+ post.slug.current} className="postcard_link">
                          { post.title } 
                          </Link>) : ( <span>  { post.title } </span> )
                      }
                    </div>
                    <div className="h5 text-center text-lg-start ">
                        { post.byline }
                    </div>
                    </div>
                    <div className="d-flex justify-content-between mt-4">
                        <div>
                            Last Updated : 2 days ago 
                        </div>
                        <div>
                            4 min read
                        </div>
                    </div>
                </div>
                <div className={ (onHome) ? 'col-lg-1' : '' }></div>            </div>
        </div>
    );
}

export default PostCard;