import Link from 'next/Link';

const PostLink = (props) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <Link href={`/post?id=${props.id}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  )
}

export default PostLink;