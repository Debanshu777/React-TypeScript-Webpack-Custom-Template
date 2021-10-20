import './styles.css'

export const App = () => {
  const num = 'hello'
  return (
    <h1>
      Hello world!-{num} {process.env.NODE_ENV} {process.env.name}
    </h1>
  )
}
