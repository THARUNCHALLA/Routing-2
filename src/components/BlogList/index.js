import BlogItem from '../BlogItem'

const BlogList = props => {
  const {user} = props
  return (
    <ul>
      {user.map(each => (
        <BlogItem user12={each} key={each.id} />
      ))}
    </ul>
  )
}

export default BlogList
