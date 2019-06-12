import React, { Component } from "react";
import api from "~/services/api";

import more from "~/assets/more.svg";
import like from "~/assets/like.svg";
import comment from "~/assets/comment.svg";
import send from "~/assets/send.svg";

export default class Feed extends Component {
  state = {
    feed: []
  };

  async componentDidMount() {
    const response = await api.get("posts");

    this.setState({ feed: response.data });
  }
  render() {
    const { feed } = this.state;
    return (
      <div>
        <section id="post-list">
          {_.map(feed, post => (
            <article>
              <header>
                <div className="user-info">
                  <span>{post.author}</span>
                  <span className="place">{post.place}</span>
                </div>

                <img src={more} alt="mais" />
              </header>

              <img
                src={`http://localhost:3333/files/${post.image}`}
                alt="mais"
              />

              <footer>
                <div className="actions">
                  <img src={like} alt="" />
                  <img src={comment} alt="" />
                  <img src={send} alt="" />
                </div>

                <strong>{post.likes} curtidas</strong>

                <p>
                  {post.description} <span>{post.hashtags}</span>
                </p>
              </footer>
            </article>
          ))}
        </section>
      </div>
    );
  }
}
