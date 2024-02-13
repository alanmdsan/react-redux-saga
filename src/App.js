import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCatsFetch } from './catState'
import './App.css'

function App() {
  const { cats, isLoading } = useSelector((state) => state.cats)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCatsFetch())
  }, [dispatch])

  return (
    <div className="App">
      <h1>CAT SPECIES GALLERY</h1>
      <p>Different cats</p>
      <hr />
      {isLoading && <div>Loading...</div>}
      <div className="Gallery">
        {cats.map((cat) => (
          <div key={cat.id} className="row">
            <div className="column column-left">
              <h1>{cat.name}</h1>
              <h2>{cat.origin}</h2>
              <h3>{cat.temperament}</h3>
            </div>
            <div className="column column-right">
              <p>{cat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
