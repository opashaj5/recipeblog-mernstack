export default function EditPost(props) {
    return (
        <div className="edit-post">
            <h2>Edit Recipe:</h2>
            <div>
                <form action={`/?_method=PUT`} method="POST">
                    Recipe Name: <input className="input-style" name="title" type="text" /><br />
                    Image URL: <input className="input-style" name="img" type="url" /><br />
                    Entry: <textarea className="entry-style" name="entry" /><br />
                    <input id="btn" type="submit" value="Submit" />
                </form>
                <form action={`/?_method=DELETE`} method="POST">
                    <input id="btn" type="submit" value="Delete" />
                </form>
                <a href="/users/home"><button>Back To Main Page</button></a>
            </div>
        </div>
    )
};