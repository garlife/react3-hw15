const API_TOKEN = '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';

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
        repo: 'react3-p9-10',
        issue_number: issue_number,
        state: state,
      }),
    }
  );
};

export default UpdateIssue;