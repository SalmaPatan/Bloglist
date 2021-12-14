import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogDetails} = props
  return (
    <ul>
      {blogDetails.map(eachBlog => (
        <BlogItem blog={eachBlog} key={eachBlog.id} />
      ))}
    </ul>
  )
}

export default BlogList
