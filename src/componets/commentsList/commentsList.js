import SingleComment from '../comments/comment'
import '../comments/comments.scss'


export default function CommentList({commentList }) { 

    return(
            <section className="comments-list__display">
                   {commentList
                   .map((comment, index ) => {
                        return (
                            <SingleComment 
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