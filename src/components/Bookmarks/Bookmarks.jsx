
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'
const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3">
            <h3 className='text-2xl font-bold bg-slate-600 p-4 my-9 rounded-lg'>Spent on Reading Time: {readingTime}</h3>
            <h2>Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark=><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};


Bookmarks.propTypes ={
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number
}
export default Bookmarks;