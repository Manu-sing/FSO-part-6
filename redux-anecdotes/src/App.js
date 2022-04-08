import { useEffect } from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'
import ConnectedNotification from './components/Notification'



const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
   dispatch(initializeAnecdotes())
  }, [])
 
 return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <ConnectedNotification />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App