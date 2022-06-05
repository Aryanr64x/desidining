
import Script from 'next/script';
import client from '../../sanity/client';
import PostCard from '../../components/blog/PostCard';

export default function BlogHome(props) {
    return (
        <div className="text-primary ">
            <div className="section_posts">
                <div className="container">
                    <div className="display-3 title text-center">
                        WELCOME TO MY BLOG
                    </div>
                    <div className="mt-2 h5  text-center">
                        Here you wil find exclusive content on Online Marketing related to Indian Restaurants
                    </div>
                </div>
            </div>
            <div className="section_posts">
                {
                    (props.posts.length == 1) ? (<div className="h5 container text-center"> Sorry , No Posts To Show For Now ... </div>) : (<div> {
                        props.posts.map((post) => {
                            return (<PostCard post={post} key={post.slug.current} onHome={true} />)
                        })
                    } </div>)
                }
            </div>

        </div>
    );
}



export async function getStaticProps(context) {

    const query = '*[_type == "post"]';
    const resp = await client.fetch(query);
    console.log(resp);
    return {
        props: {
            posts: resp
        }, // will be passed to the page component as props
    }
}
