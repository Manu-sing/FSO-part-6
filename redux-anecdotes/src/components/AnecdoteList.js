import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdoteOf } from '../reducers/anecdoteReducer'
import { handleNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.anecdotes)
    const filterState = useSelector(state => state.filter.newFil)

    const filtered = !filterState ?
    anecdotes :
    anecdotes.filter(a => a.content.toLowerCase().includes(filterState.toLowerCase()))

    const handleAnecdoteVote = async (id) => {
      const anecdoteToVote = anecdotes.find(an => an.id === id)
      const votedAnecdote = {...anecdoteToVote, votes: anecdoteToVote.votes + 1}
      dispatch(voteAnecdoteOf(id, votedAnecdote))
      const message = `You have added 1 vote to '${anecdoteToVote.content}'.`
      dispatch(handleNotification(message, 5000))
    }  


    return (
    <div>{filtered.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleAnecdoteVote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}</div>
  )
}

export default AnecdoteList