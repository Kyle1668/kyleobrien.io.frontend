import React from "react";
import styled from "styled-components";
import Button from "../../shared/Button";
import IExperience from "../../library/IExperience";

const ExperienceContainer = styled.div`
	font-family: Lato;
	margin-top: 2rem;
	margin-bottom: 2rem;
`;

const ExperienceContainerHead = styled.div`
	padding-bottom: 15px;
	border-bottom: 2px solid #c4c4c4;
	:h1 {
		font-size: 24px;
	}
`;

const ExperienceContainerBodyText = styled.p`
	font-size: 18px;
	line-height: 30px;
	margin-top: 25px;
	margin-bottom: 35px;
`;

const ExperienceButton = styled(Button)`
	color: #ffffff;
	font-size: 14;
	background: #343a40;
	padding-top: 10px;
	padding-bottom: 10px;
	margin-right: 10px;
`;

interface HeadingeTitleProps {
	headingWeight: 1 | 2 | 3 | 4;
}

const ExperienceHeading = styled.h1<HeadingeTitleProps>`
	font-size: ${(props) => (props.headingWeight === 1 ? "32px" : "18px")};
	color: ${(props) => (props.headingWeight === 1 ? "#343a40" : "#595959")};
`;

const renderSummarySections = (rawSummary: string[]): JSX.Element[] =>
	rawSummary.map((section: string) => (
		<ExperienceContainerBodyText>{section}</ExperienceContainerBodyText>
	));

const ExperienceTagsRow = styled.div`
	display: flex;
	flex-direction: row;
`;

const renderTags = (rawTags: string[]): JSX.Element[] =>
	rawTags.map((tag: string) => <ExperienceButton>{tag}</ExperienceButton>);

const Experience: React.FC<IExperience> = (props: IExperience) => {
	const { company, title, startDate, endDate, summarySections, tags } = props;

	return (
		<ExperienceContainer>
			<ExperienceContainerHead>
				<ExperienceHeading headingWeight={1}>{company}</ExperienceHeading>
				<ExperienceHeading headingWeight={2}>{title}</ExperienceHeading>
				<ExperienceHeading headingWeight={2}>
					{startDate} - {endDate}
				</ExperienceHeading>
			</ExperienceContainerHead>
			{renderSummarySections(summarySections)}
			<ExperienceTagsRow>{renderTags(tags)}</ExperienceTagsRow>
		</ExperienceContainer>
	);
};

export default Experience;
