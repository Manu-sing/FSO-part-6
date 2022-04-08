import { connect } from "react-redux"
import { filterAnecdotes } from "../reducers/filterReducer"

const Filter = (props) => {
    
    
    const handleChange = (e) => {
        props.filterAnecdotes(e.target.value) 
      }
      const style = {
        marginBottom: 10
      }
    
      return (
        <div style={style}>
          Filter by words: <input onChange={handleChange} />
        </div>
      )
}

export default connect(null, { filterAnecdotes })(Filter)