// redux/reducers.js
const initialState = {
    jobPosts: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SUBMIT_JOB_POST':
        return {
          ...state,
          jobPosts: [...state.jobPosts, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  