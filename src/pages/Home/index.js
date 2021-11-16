import Start from '../Start'
import Main from '../Main'

export default function Home() {
  if (!localStorage.getItem('auth')) {
    return <Main />
  }

  if (localStorage.getItem('auth')) {
    return <Start />
  }
}
