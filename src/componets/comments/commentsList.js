import Comments from '../Video/currentVideoPlayer'
import video from '../Video/currentVideoPlayer'
import './comments.scss'


export default function CommentList({commentList }) { 

    return(
            <section className="comments-list__display">
                   {commentList
                   .map((comment, index ) => {
                        return (
                            <Comments 
                            key={index}
                            name={comment.name}
                            date={comment.timestamp}
                            comment={comment.comment}
                            />
                        )
                })}
                
            </section>
        )
}