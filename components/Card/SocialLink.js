import styled from 'styled-components';

const Link = styled.a`
  opacity: ${(props) => (props.hasUrl ? '1' : '0.5')};
	cursor: ${(props) => (props.hasUrl ? 'default' : 'not-allowed')};
`;

const Icon = styled.img`
	height: 20px;
	padding-right: 8px;
	width: 20px;
`;

const createUrl = (props) => {
	if (!props.url) {
		return;
	}

	return props.url;
};

const SocialLink = (props) => (
  <Link href={createUrl(props)} hasUrl={props.url} target="_blank">
		<Icon alt={`${props.name} ${props.type}`} src={`/static/icon/${props.type}.svg`} />
	</Link>
);

export default SocialLink;
