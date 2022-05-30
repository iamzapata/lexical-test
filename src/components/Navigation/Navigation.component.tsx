import { Link } from 'react-router-dom'

export function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Playground</Link>
        </li>
      </ul>
    </nav>
  )
}
