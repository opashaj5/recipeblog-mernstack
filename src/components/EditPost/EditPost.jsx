export default function EditPost(props) {
    return (
        <div className="edit-post">
            <h2>Edit Recipe:</h2>
            <div>
                <form action={`/${post._id}?_method=PUT`} method="POST">
                    Recipe Name: <input className="input-style" defaultValue={post.title} name="title" type="text" /><br />
                    Image URL: <input className="input-style" defaultValue={post.img} name="img" type="url" /><br />
                    Entry: <textarea className="entry-style" defaultValue={post.entry} name="entry" /><br />
                    <input id="btn" type="submit" value="Submit" />
                </form>
                <form action={`/${post._id}?_method=DELETE`} method="POST">
                    <input id="btn" type="submit" value="Delete" />
                </form>
                <a href="/users/home"><button>Back To Main Page</button></a>
            </div>
        </div>
    )
};