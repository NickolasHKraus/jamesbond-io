import React from 'react';

import {formatName, formatFilePath, GlobalStyle} from '../components/Utils';
import Button from '../components/Button.js';
import Card from '../components/Card';
import Grid from '../components/Grid.js';
import Footer from '../components/Footer.js';

import {THEMES} from './themes';
import NavBar from '../components/NavBar';

const createCard = (theme) => (
    <Card key={theme.name}>
        <Card.Header>
          <Card.Image alt={formatName(theme.name)} src={`/static/img/${formatFilePath(theme.name)}.png`}/>
          <Card.Logo alt={formatName(theme.name)} src={`/static/logo/${formatFilePath(theme.name)}.png`}/>
          <Card.Category>{theme.category}</Card.Category>
          <Card.Title>{formatName(theme.name)}</Card.Title>
        </Card.Header>
        <Card.Text>{theme.description}</Card.Text>
        <Card.Footer>
          <div>
            <Card.SocialLink name={theme.name} type="github" url={theme.github} />
          </div>
          <Button as="a" href={theme.demo} target="_blank">{'Demo'}
          </Button>
        </Card.Footer>
    </Card>
);

const Page = () => (
    <>
        <GlobalStyle />
        <NavBar />
        <Grid>{THEMES.map((theme) => createCard(theme))}</Grid>
        <Footer />
    </>
);

//
export default Page;
