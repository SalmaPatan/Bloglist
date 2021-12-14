import './index.css'

const BlogItem = props => {
  const {blog} = props
  const {title, description, publishedDate} = blog
  return (
    <li className="list-item">
      <div className="list-content">
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div>
          <p>{publishedDate}</p>
        </div>
      </div>
    </li>
  )
}

export default BlogItem
