import React from "react"
import Link from "next/link"
import NextImage from "./image"
import { Heading } from '@chakra-ui/react'

const Card = ({ article }) => {
  return (
    // <Link as={`/article/${article.slug}`} href="/article/[id]">
    //   <a className="uk-link-reset">
    //     <div className="uk-card uk-card-muted">
    //       <div className="uk-card-media-top">
    //         <NextImage image={article.image} />
    //       </div>
    //       <div className="uk-card-body">
    //         <p id="category" className="uk-text-uppercase">
    //           {article.category.name}
    //         </p>
    //         <p id="title" className="uk-text-large">
    //           {article.title}
    //         </p>
    //       </div>
    //     </div>
    //   </a>
    // </Link>
    <Heading>Card Component which loops articles component</Heading>
  )
}

export default Card
