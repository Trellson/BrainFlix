


export default function ({name, date, comment}){



    return(
        <div className="comment__component">
            <div className="comment__component--photo">
            </div>
            <div className="comment__component--content">
                <div className="comment__component--content-header">
                    <div className="comment__component--content-name">
                        {name}
                    </div>
                    <div className="comment__component--content-date">
                    {new Date(date).toLocaleDateString()}
                    </div>
                </div>
                <div className="comment__component--content-comment">
                    {comment}
                </div>
            </div>
        </div>

    )
}