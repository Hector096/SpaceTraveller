import TestRenderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
import '@testing-library/jest-dom';

describe('Header component Test', () => {
  test('matches Header snapshot', () => {
    const tree = TestRenderer.create(
      <Router>
        <Header />
      </Router>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('expects header text to exist', () => {
    render(
      <Router>
        <Header />
      </Router>,
    );
    const headerText = screen.getByText("Space Traveler's Hub");
    expect(headerText).toBeInTheDocument();
  });
  test('rendering links', () => {
    render(
      <Router>
        <Header />
      </Router>,
    );
    const rocketsLink = screen.getByText('Rockets');
    const missionsLink = screen.getByText('Missions');
    const profileLink = screen.getByText('My Profile');

    expect(rocketsLink).toBeInTheDocument();
    expect(missionsLink).toBeInTheDocument();
    expect(profileLink).toBeInTheDocument();
  });
});
