import React from "react"
import Link from "next/link"
import NextImage from "./image"

const Card = ({ article }) => {
  return (
    <Link href={`/article/${article.slug}`}>
      <a className="uk-link-reset">
        <div className="uk-card uk-card-muted">
          <div className="uk-card-media-top">
            <NextImage image={article.image} width='200' />
          </div>
          {/* className="uk-card-body"> */}
          <div className='card__body'>
            <p id="category" className="uk-text-uppercase">
              {article.category.name}
            </p>
            <h6 id="title" className="uk-text-large">
              {article.title}
            </h6>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Card
