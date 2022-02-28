


export default function (props){

console.log(props)

    return(
        <div className="comment__component">
            <div className="comment__component--photo">
            </div>
            <div className="comment__component--content">
                <div className="comment__component--content-header">
                    <div className="comment__component--content-name">
                        {props.name}
                    </div>
                    <div className="comment__component--content-date">
                        {props.date}
                    </div>
                </div>
                <div className="comment__component--content-comment">
                    {props.comment}
                </div>
            </div>
        </div>

    )
}