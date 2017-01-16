//State argument is not application state, only the state
//this reducer is responsible for

//We set the state to null initially because the user hasn't
//clicked on a book yet.
export default function(state = null, action) {
  switch(action.type) {
  case 'BOOK_SELECTED':
    return action.payload;
  }

  return state; 
}