

import {  FaBookmark } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
   const {title, cover, author, author_img, reading_time, posted_date, hashtags} = blog;
    return (
        <div className='mb-20 space-y-4 '>
            <img className='mb-5 rounded-lg ' src={cover} alt={`Cover Picture of ${title}`}/>
            <div className='flex justify-between items-center '>
                <div className='flex gap-6 items-center'>
                    <img className='w-14 rounded-full  ' src={author_img} alt="" />
                    <div>
                        <h4>{author}</h4>
                        <p>{posted_date}</p>
                    </div>
                </div>

                <div>
                    <h4><span>{reading_time}</span>min read
                    <button onClick={()=>handleAddToBookmark(blog)}>
                        <FaBookmark></FaBookmark>
                        </button>
                    </h4>
                </div>
            </div>
            <h2 className="text-3xl font-bold my-5">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx)=><span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button 
            onClick={()=>handleMarkAsRead(reading_time)}
            className='text-purple-600 underline font-bold '
            >Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
   handleAddToBookmark:PropTypes.func,
   handleMarkAsRead: PropTypes.func
}
export default Blog;