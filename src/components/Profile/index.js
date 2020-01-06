import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Avatar from '../Avatar'

import getThemeColor from '../../utils/getThemeColor'

import * as S from './styled';

const Profile = () => {
    const { site: { siteMetadata: { title, position, description } } } = useStaticQuery(
        graphql`
			query MySiteMetadata {
				site {
					siteMetadata {
						title
						position
						description
					}
				}
			}
    `)

    return (
        <S.ProfileWrapper>
            <S.ProfileLink 
            to="/"
            cover
            direction="right"
            duration={.6}
            bg={getThemeColor()}>
                <Avatar />
                <S.ProfileAuthor>
                    {title}
                    <S.ProfilePosition>{position}</S.ProfilePosition>
                    </S.ProfileAuthor>
                <S.ProfileDescription>{description}</S.ProfileDescription>
            </S.ProfileLink>
        </S.ProfileWrapper>

    )
}

export default Profile;