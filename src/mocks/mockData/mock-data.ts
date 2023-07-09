import { MockData } from '../../interfaces';

export const MOCK_DATA: MockData = {
  data: {
    name: 'new-test-day',
    slug: 'new-test-day',
    questions: [
      {
        type: 'single',
        options: [
          { label: 'Skating', value: 'skating' },
          { label: 'Shooting', value: 'shooting' },
          { label: 'Passing', value: 'passing' },
          { label: 'Stickhandling', value: 'stickhandling' }
        ],
        label: 'What is your favorite skill in ice hockey?',
        key: 'favorite_skill'
      },
      {
        type: 'single',
        options: [
          { label: 'Forward', value: 'forward' },
          { label: 'Defense', value: 'defense' },
          { label: 'Goaltender', value: 'goaltender' }
        ],
        label: 'What position do you play in ice hockey?',
        key: 'position'
      },
      {
        type: 'single',
        options: [
          { label: 'Yes', value: 'yes' },
          { label: 'No', value: 'no' }
        ],
        label: 'Have you ever attended an ice hockey game?',
        key: 'attended_game'
      },
      {
        type: 'multiple',
        options: [
          { label: 'NHL', value: 'nhl' },
          { label: 'Olympics', value: 'olympics' },
          { label: 'World Championships', value: 'world_championships' },
          { label: 'Youth Leagues', value: 'youth_leagues' },
          { label: 'No on the above', value: 'none', custom: { deselectAll: true } }
        ],
        label: 'Which ice hockey events have you watched or followed?',
        description: 'Select all that apply.',
        key: 'watched_events'
      },
      {
        type: 'single',
        options: [
          { label: 'Yes', value: 'yes' },
          { label: 'No', value: 'no' }
        ],
        label: 'Do you play ice hockey regularly?',
        key: 'regular_player'
      },
      {
        type: 'single',
        options: [
          { label: 'Morning', value: 'morning' },
          { label: 'Afternoon', value: 'afternoon' },
          { label: 'Evening', value: 'evening' },
          { label: 'Night', value: 'night' }
        ],
        label: 'What is your preferred time of day to play ice hockey?',
        key: 'preferred_time'
      },
      {
        type: 'multiple',
        options: [
          { label: 'Power Play', value: 'power_play' },
          { label: 'Penalty Kill', value: 'penalty_kill' },
          { label: 'Faceoffs', value: 'faceoffs' },
          { label: 'Breakaways', value: 'breakaways' },
          { label: 'Checking', value: 'checking' }
        ],
        label: 'Which aspect of ice hockey do you enjoy the most?',
        description: 'Select all that apply.',
        key: 'enjoy_aspect'
      },
      {
        type: 'info',
        label: 'Did you know?',
        description: 'Ice hockey is one of the fastest team sports played on a slippery surface.',
        key: 'info_block'
      },
      {
        type: 'input',
        label: 'What is your name?',
        inputLabel: 'Name',
        key: 'name_input'
      }
    ]
  }
};
