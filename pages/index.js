import styles from '../styles/Home.module.css'
import Link from 'next/link';
export default function index() {
  return (
    <>
      <nav>
        <ul>
          <Link href='/'>
            <a>Home</a>
          </Link>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
          <Link href='/about'>
            <a>About</a>
          </Link>
          <Link href='/product'>
            <a>Product</a>
          </Link>
        </ul>
      </nav>
    </>
  )
}
