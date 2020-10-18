import React from 'react'
import * as S from './contentEntry.styled'
import PropTypes from "prop-types";
import Link from 'gatsby-link'

const ContentEntry = ({title, description, image, fullText, slug, isHomePage }) => (
  <S.Wrapper>
   <S.EntryTitle>
   {title}
   </S.EntryTitle>
   <S.ImageContainer>
     <img src={image} alt={title} />
     </S.ImageContainer>
   <S.EntryText>{description}</S.EntryText>
   <S.EntryText
   dangerouslySetInnerHTML={{ __html: fullText }}
   />
   <S.ReadMoreLink isHomePage={isHomePage}>
   <Link to={`/airplaneModels/${slug}`}> Read more 	&rarr; </Link>
   </S.ReadMoreLink>
  </S.Wrapper>
)


ContentEntry.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  fullText: PropTypes.string,
  slug: PropTypes.string,
  isHomePage: PropTypes.bool,
};

export default ContentEntry