import { Link } from 'react-router-dom'
import { Mail, Twitter, Linkedin, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="border-t bg-white dark:bg-transparent text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div className="space-y-2">
            <a href="https://www.aicade.io/" target="_blank" rel="noreferrer">
              <img src="/aicade_full_logo.svg" alt="Aicade" width={144} />
            </a>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Create Games with Just Text
            </p>
            <div className="flex items-center gap-3 text-white/50">
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:pushkar@aicade.io"
              >
                <Mail size={28} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="http://twitter.com/playaicade"
              >
                <Twitter />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/company/aicade"
              >
                <Linkedin />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/@aicade"
              >
                <Youtube size={32} />
              </a>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold uppercase text-gray-700 dark:text-gray-300">
              Content
            </h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link to="/" className="text-gray-400  hover:text-orange-500">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-400  hover:text-orange-500"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <a
                  href="https://play.aicade.io/"
                  target="_blank"
                  className="text-gray-400  hover:text-orange-500"
                >
                  Play
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-semibold uppercase text-gray-700 dark:text-gray-300">
              Connect
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              pushkarverma@aicade.io
            </p>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Aicade. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
