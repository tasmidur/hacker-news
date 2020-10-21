export default {
    APPEND_TOP_STORY: (state, article) => {
      state.topStories.push(article);
    },
    APPEND_NEW_STORY: (state, article) => {
      state.newStories.push(article);
    },
    APPEND_SHOW_STORY: (state, article) => {
        state.showStories.push(article);
    },
    APPEND_JOB_STORY: (state, article) => {
        state.jobStories.push(article);
    },
    APPEND_ASK_STORY: (state, article) => {
        state.askStories.push(article);
    }
  }; 

  //topstories newstories askstories showstories jobstories