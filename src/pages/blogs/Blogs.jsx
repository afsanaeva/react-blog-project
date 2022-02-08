import "./blogs.css";

export default function Blogs() {
  return (
    <div className="blogs">
      <img
        className="blogsImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="blogsForm">
        <div className="blogsFormGroup">
          <label htmlFor="fileInput">
            <i className="blogsIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="blogsInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="blogsFormGroup">
          <textarea
            className="blogsInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </div>
        <button className="blogsSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}