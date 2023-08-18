import './index.css'

const BlogItem = props => {
  const {user12} = props
  const {title, description, publishedDate} = user12
  return (
    <li>
      <div className="BlogItemsList">
        <h1 className="heading12">{title}</h1>
        <p className="Description">{publishedDate}</p>
      </div>
      <p className="Description">{description}</p>
    </li>
  )
}

export default BlogItem
