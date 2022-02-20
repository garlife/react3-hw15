const API_TOKEN = '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';

// const API_TOKEN = '';

const UpdateIssue = (issue_number, state) => {
  fetch(
    `https://api.github.com/repos/garlife/react3-hw15/issues/${issue_number}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${btoa('garlife' + ':' + API_TOKEN.toString())}`,
      },
      body: JSON.stringify({
        owner: 'garlife',
        repo: 'react3-hw15',
        issue_number: issue_number,
        state: state,
      }),
    }
  );
};

export default UpdateIssue;