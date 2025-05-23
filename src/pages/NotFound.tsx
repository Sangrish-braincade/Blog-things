import { Link } from 'react-router-dom'

const NotFound = () => {
  document.title = 'Page Not Found - Aicade - Create | Play | Win'

  return (
    <div className="flex flex-col items-center justify-center py-16">
      <img src="/404.png" alt="Not Found" className="w-[25%]" />
      <Link to="/" className="text-white">
        Return to Home
      </Link>
    </div>
  )
}

export default NotFound
