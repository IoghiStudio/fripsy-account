import { sign } from 'crypto';
import React, { useState } from 'react';
import './App.scss';

const posts = [
  {
    id: 1,
    title: 'Meteo',
    message: 'Today will rain with metal',
  },
  {
    id: 2,
    title: 'Bodybuilding',
    message: 'Nicusor is the best!',
  },
  {
    id: 3,
    title: 'Coocking Chef',
    message: 'Denisa won world chefs championship',
  },
  {
    id: 4,
    title: 'Tech news',
    message: 'IoghiStudio #1! on leaderboard',
  },
  {
    id: 5,
    title: 'Animated movies 2023',
    message: 'Kung fu panda!!!!',
  },
  {
    id: 6,
    title: 'Reteta de prajitura',
    message: 'Lapte oua si smantana nu mai mananc niciodata',
  },
];

export const App: React.FC = () => {
  const [signIn, setSignIn] = useState(true);
  const [signInPressed, setSignInPressed] = useState(false);
  const [username, setUsername] = useState('Denisa');
  const [newPosts] = useState(posts);
  const [searchField, setSearchField] = useState('');
  const [showProfile, setShowProfile] = useState(false);

  let visibleNewPosts = newPosts;

  if (searchField) {
    visibleNewPosts = newPosts.filter(post => {
      return post.title.toLowerCase().includes(searchField.toLowerCase())
    })
  }


  return (
    <div className='app'>
      <header className='header'>
        <div className='header__input'>
          <label htmlFor="searchField">
            Search: 
          </label>
          <input
            className='header__searchField' 
            type="text"
            id='searchField'
            value={searchField}
            onChange={(e) => {
              setSearchField(e.target.value)
            }}
          />
        </div>

  
        {signIn
          ? (
            <p
              className='welcomeText'
              onClick={() => {
                setShowProfile(true);
              }}
            >
              Welcome {username}
            </p>
          ) : (
            <button
              className='header__signin'
              type='button'
              onClick={() => {
                setSignInPressed(true);
              }}
            >
              SignIn
            </button>
          )}
      </header>

      {(signInPressed && !signIn) && (
        <div className='form'>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSignIn(true);
            }}
          >
            <fieldset>
              <legend>Sign In Here!</legend>
              <label htmlFor="username">Username: </label>

              <input
                id='username'
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />

              <button
                type="submit"
              >
                Sign in !
              </button>
            </fieldset>
          </form>
        </div>
      )}

      {(signIn && showProfile) && (
        <div className='profile'>
          <h1 className='profile__title'>
            {username} profile
          </h1>
        </div>
      )}

      {(signIn && !showProfile) && (
        <main className='main'>
          <div className='main__content'>
            <h1 className='main__title'>
              Top Daily News
            </h1>

            <div className='postList'>
              {visibleNewPosts.map(post => (
                <div
                  className='postItem'
                  key={post.id}
                >
                  <h2>{post.title}</h2>
                  <p>{post.message}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
      )}

      {(!signIn && !signInPressed) && (
        <p className='notSignedIn'>You should sign in</p>
      )}
    </div>
  );
};

