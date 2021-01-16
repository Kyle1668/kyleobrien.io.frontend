import React from "react";
import styled from "styled-components";
import Button from "../../shared/Button";
import IArticle from "../../library/IArticle";

interface ArticleTitleProps {
	headingWeight: 1 | 2 | 3 | 4;
}

const Article: React.FC<IArticle> = (props: IArticle) => {
	const { title, subTitle, date, body, url } = props;

	return (
		<ArticleContainer>
			<ArticleContainerHead>
				<ArticleTitle headingWeight={1}>{title}</ArticleTitle>
				<ArticleTitle headingWeight={2}>{subTitle}</ArticleTitle>
				<ArticleTitle headingWeight={2}>{date}</ArticleTitle>
			</ArticleContainerHead>
			<ArticleContainerBodyText>{body}</ArticleContainerBodyText>
			<ArticleButtonLinkWrapper href={url}>
				<ArticleButton>Continue</ArticleButton>
			</ArticleButtonLinkWrapper>
		</ArticleContainer>
	);
};

export default Article;

const ArticleContainer = styled.div`
  font-family: Lato, monospace;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const ArticleContainerHead = styled.div`
  padding-bottom: 15px;
  border-bottom: 2px solid #c4c4c4;

  .h1 {
    font-size: 24px;
  }
`;

const ArticleTitle = styled.h1<ArticleTitleProps>`
	font-size: ${(props) => (props.headingWeight === 1 ? "32px" : "18px")};
	color: ${(props) => (props.headingWeight === 1 ? "#343a40" : "#595959")};
`;

const ArticleContainerBodyText = styled.p`
	font-size: 18px;
	line-height: 30px;
	margin-top: 25px;
	margin-bottom: 35px;
`;

const ArticleButtonLinkWrapper = styled.a`
	text-decoration: none;
`;

const ArticleButton = styled(Button)`
  color: #ffffff;
  font-size: 14px;
  background: #343a40;
  width: 150px;
  padding: 10px 30px;
`;
