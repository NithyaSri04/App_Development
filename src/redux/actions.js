// redux/actions.js
export const submitJobPost = (jobPost) => {
    return {
      type: 'SUBMIT_JOB_POST',
      payload: jobPost,
    };
  };
  