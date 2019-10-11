import { showLoading, hideLoading } from "react-redux-loading";

import { saveLikeToggle, saveTweet } from "./../utils/api";

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const TOGGLE_TWEET = "TOGGLE_TWEET";
export const ADD_TWEET = "ADD_TWEET";
export const REMOVE_TWEET = "REMOVE_TWEET";

// action creators
export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets
  };
}

function toggleTweet({ id, hasLiked, authedUser }) {
  return {
    type: TOGGLE_TWEET,
    id,
    authedUser,
    hasLiked
  };
}

function addTweet(tweet) {
  return {
    type: ADD_TWEET,
    tweet
  };
}

export function handleAddTweet(text, replyingTo) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    return saveTweet({
      text,
      author: authedUser,
      replyingTo
    })
      .then(tweet => {
        dispatch(addTweet(tweet));
      })
      .then(() => dispatch(hideLoading()))
      .catch(e => {
        console.warn("Error in handleAddTweet: ", e);
        alert("There was an error adding the tweet");
      });
  };
}

export function handleToggleTweet(info) {
  return dispatch => {
    dispatch(toggleTweet(info));
    return saveLikeToggle(info).catch(e => {
      console.error("Enrror in handleToggleTweet: ", e);
      dispatch(toggleTweet(info));
      alert("There was an error liking the tweet, please try again");
    });
  };
}
