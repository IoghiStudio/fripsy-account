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
  

];

export const App: React.FC = () => {
  const [signIn, setSignIn] = useState(true);
  const [signInPressed, setSignInPressed] = useState(false);
  const [username, setUsername] = useState('');
  const [newPosts] = useState(posts);

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
          />
        </div>

  
        {signIn
          ? (
            <p >Welcome {username}</p>
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

      {signIn && (
        <main className='main'>
          <div className='main__content'>
            <h1 className='main__title'>
              Top Daily Recipes
            </h1>

            <div className='postList'>
              {newPosts.map(post => (
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

