
import Script from 'next/script';
import PostCard from '../../components/blog/PostCard';
import PostBody from '../../components/blog/PostBody';
import PostFooter from '../../components/blog/PostFooter';
import client from '../../sanity/client';

export default function SinglePost({ post }) {
    return (
        <div className="text-primary ">
           <PostCard post = { post  } onHome = { false }/>
           <PostBody body={ post.body } />
           <PostFooter author = { post.author } />

        </div>
    );
}






export async function getStaticProps(context) {
    const slug = context.params.slug;
    const query = '*[_type == "post" && slug.current == "'+ slug +'"]{author->{name, image}, body, slug, title, _updatedAt, mainImage, byline}';

    const resp = await client.fetch(query);
    console.log(resp[0])

    return {
        props: {
            post: resp[0]
        }, // will be passed to the page component as props
    }
}



export async function getStaticPaths() {
 

    const query = '*[_type == "post"]';
    const resp = await client.fetch(query);
    const paths = resp.map((post) => {
        return {
            params: {
                slug: post.slug.current
            }
        }
    });
    return {
        paths,
        fallback: false // false or 'blocking'
    };
}














