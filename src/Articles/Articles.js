import * as React from 'react';

const MyListItem = (props) => (
  <li key={props.id}>
    <button onClick={props.clickHandler}>{props.children}</button>
  </li>
);

// TODO:
// - Loading indicator
// - Render Articles
// - Add sponsor badge

class Articles extends React.Component {

  componentDidMount() {
    this.props.actions.loadArticles();
  }

  clickHandler = () => {
    console.log('CLICK!!!');
    this.props.clickHandler();
  }

  renderArticles = (articles = []) => {
    console.log('ARTICLES >>> ', articles);
    return articles.map((article) => (
      <MyListItem clickHandler={this.clickHandler} id={article.id}>{article.fields.title}</MyListItem>
    ))
  }

  render() {
    return (
      <ul>
        {this.renderArticles(this.props.articles.data)}
      </ul>
    );
  }
}

export default Articles;
