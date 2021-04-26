export const initialState = {
  surveys: [
    {
      id: 1,
      title: 'React tools',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      totalAnswers: 1,
      questions: [
        {
          id: 1,
          description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          answerType: 'SELECT',
          selectAnswer: [
            {
              id: 1,
              description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
            {
              id: 2,
              description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
            {
              id: 3,
              description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
            {
              id: 4,
              description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
          ],
          answers: [
            {
              id: 1,
              answerId: 1,
              answerType: 'SELECT',
              answerDescription: '',
            }
          ],
        },
        {
          id: 2,
          description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          answerType: 'OPEN',
          selectAnswer: [],
          answers: [
            {
              id: 1,
              answerId: 0,
              answerType: 'OPEN',
              answerDescription: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
          ],
        },
      ],
    },
  ],
  answerTypes: [
    'OPEN',
    'SELECT',
  ],
  survey: {},
}