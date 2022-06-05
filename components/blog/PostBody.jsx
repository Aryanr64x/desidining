import { PortableText } from '@portabletext/react'
import imageUrlBuilder from '@sanity/image-url'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'
import { TwitterTweetEmbed } from 'react-twitter-embed';


import client from '../../sanity/client';

const PostBody = ( { body } )=>{
    function urlFor(source) {
        return imageUrlBuilder(client).image(source)

    }
    const ptComponents = {
        marks: {
            underline: ({ children }) => {
                return (
                    <span className="" style={{ textDecoration: 'underline' }}>
                        {children}
                    </span>
                );
            }
        },
        types: {
            "video ": ({ value }) => {
                const  url  = value.url
                const id = getYouTubeId(url)
                return (<YouTube videoId={id} />)
            },
            "tweet":  ({ value }) => {
                const { url } = value;
                const tweetId = url.split('/').slice(-1)[0];
                return ( <TwitterTweetEmbed tweetId={tweetId} /> );
            },
            image: ({ value }) => {
                if (!value?.asset?._ref) {
                    return null
                }
                return (
                    <img
                        alt={value.alt || ' '}
                        loading="lazy"
                        src={urlFor(value).width(600).height(300).fit('max').auto('format')}
                    />
                )
            }
        }
    }
    return (
        <div className="container section_posts h5 blog_content text-center text-lg-start">
               <PortableText
                value={body}
                components={ptComponents}
            />
        </div>
    );
}

export default PostBody;