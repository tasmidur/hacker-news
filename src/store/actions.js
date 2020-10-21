import axios from "axios";
//topstories newstories askstories showstories jobstories
export default {
  fetch_top_stories: ({ commit }) => {
    axios
      .get("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then(resp => {
        let results = resp.data.slice(0, 25);
        results.forEach(element => {
          axios
            .get(
              "https://hacker-news.firebaseio.com/v0/item/" + element + ".json"
            )
            .then(result => {
              commit("APPEND_TOP_STORY", result);
            })
            .catch(err => {
              console.log(err);
            });
        });
      })
      .catch(err => {
        console.log(err);
      });
  },
  fetch_new_stories: ({ commit }) => {
    axios
      .get("https://hacker-news.firebaseio.com/v0/newstories.json")
      .then(resp => {
        let results = resp.data.slice(0, 25);
        results.forEach(element => {
          axios
            .get(
              "https://hacker-news.firebaseio.com/v0/item/" + element + ".json"
            )
            .then(result => {
              commit("APPEND_NEW_STORY", result);
            })
            .catch(err => {
              console.log(err);
            });
        });
      })
      .catch(err => {
        console.log(err);
      });
  },
  fetch_ask_stories: ({ commit }) => {
    axios
      .get("https://hacker-news.firebaseio.com/v0/askstories.json")
      .then(resp => {
        let results = resp.data.slice(0, 25);
        results.forEach(element => {
          axios
            .get(
              "https://hacker-news.firebaseio.com/v0/item/" + element + ".json"
            )
            .then(result => {
              commit("APPEND_ASK_STORY", result);
            })
            .catch(err => {
              console.log(err);
            });
        });
      })
      .catch(err => {
        console.log(err);
      });
  },
  fetch_show_stories: ({ commit }) => {
    axios
      .get("https://hacker-news.firebaseio.com/v0/showstories.json")
      .then(resp => {
        let results = resp.data.slice(0, 25);
        results.forEach(element => {
          axios
            .get(
              "https://hacker-news.firebaseio.com/v0/item/" + element + ".json"
            )
            .then(result => {
              commit("APPEND_SHOW_STORY", result);
            })
            .catch(err => {
              console.log(err);
            });
        });
      })
      .catch(err => {
        console.log(err);
      });
  },
  fetch_job_stories: ({ commit }) => {
    axios
      .get("https://hacker-news.firebaseio.com/v0/jobstories.json")
      .then(resp => {
        let results = resp.data.slice(0, 25);
        results.forEach(element => {
          axios
            .get(
              "https://hacker-news.firebaseio.com/v0/item/" + element + ".json"
            )
            .then(result => {
              commit("APPEND_JOB_STORY", result);
            })
            .catch(err => {
              console.log(err);
            });
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
};