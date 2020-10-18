import React from 'react'
import * as S from './contentEntry.styled'
import PropTypes from "prop-types";

const ContentEntry = ({title, description, image, fullText, slug }) => (
  <S.Wrapper>
   <S.EntryTitle>{title}</S.EntryTitle>
   <S.ImageContainer> 
     <img src={image} alt={title} />
     </S.ImageContainer>
   <S.EntryText>{description}</S.EntryText>
   <S.EntryText>{fullText}</S.EntryText>
  </S.Wrapper>
)


BlogPost.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  fullText: PropTypes.string,
  slug: PropTypes.string,
};

export default ContentEntry