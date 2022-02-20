const API_TOKEN = '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';

// const API_TOKEN = '';

const CreateIssue = (titleIssue, bodyText) => {
  fetch(
    `https://api.github.com/repos/garlife/react3-hw15/issues`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${btoa('garlife' + ':' + API_TOKEN.toString())}`,
      },
      body: JSON.stringify({
        owner: 'garlife',
        repo: 'react3-hw15',
        title: titleIssue,
        body: bodyText,
      }),
    }
  );
  
};

export default CreateIssue;