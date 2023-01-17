import React, { useState } from 'react';
import './App.scss';

const posts = [
  {
    id: 1,
    title: 'Negrese',
    imageUrl: '../../images/negreasa.jpg',
  },
  {
    id: 2,
    title: 'Clatite',
    imageUrl: '../../images/clatite.jpg',
  },
  {
    id: 3,
    title: 'Eclere',
    imageUrl: '../../images/eclere.jpg',
  },
  {
    id: 4,
    title: 'Tort',
    imageUrl: '../../images/tort.jpg',
  },
];

export const App: React.FC = () => {
  const [signIn, setSignIn] = useState(true);
  const [signInPressed, setSignInPressed] = useState(false);
  const [username, setUsername] = useState('');
  const [recipes] = useState(posts);

  return (
    <div className='app'>
      <header className='header'>
        <img src="../../images" alt="" />

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

            <div className='recipeList'>
              {recipes.map(recipe => (
                <div
                  className='recipeItem'
                  key={recipe.id}
                >
                  <h2>{recipe.title}</h2>
                  <img src='../../images/eclere.jpg' alt={'' + recipe.id} />
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

