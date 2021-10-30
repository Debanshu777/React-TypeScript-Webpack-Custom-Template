import './styles.css'
import demo from '../public/images/demo.PNG'

export const App = () => {
  const num = 'hello'
  return (
    <>
      <h1>
        Hello world!-{num} {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src={demo} alt="" />
    </>
  )
}
