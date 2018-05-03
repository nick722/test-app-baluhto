import { articles } from './data';

function loadArticles() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(articles);
    }, 1000)
  });
}

export { loadArticles };
