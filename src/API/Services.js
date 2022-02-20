const API_TOKEN = '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';

export const CreateIssue = (titleIssue, bodyText) => {
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


export const UpdateIssue = (issue_number, state) => {
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

export const LoadItem = (setColumns) => {
  fetch("https://api.github.com/repos/garlife/react3-hw15/issues")
    .then((response) => response.json())
    .then((data) =>
      data.map((item) => ({
        id: `${item.number}`,
        content: item.title,
        data,
        state: item.state,
      }))
    )
    .then((data) => {
      const columns = {
        open: {
          name: "Open",
          items: [],
        },
        close: {
          name: "Close",
          items: [],
        },
      };
      console.log(data);
      for (let key of data
        .map((el) => el.state)
        .filter((value, index, array) => array.indexOf(value) === index)) {
        columns[key] = {
          name: key,
          items: data.filter((el) => el.state === key),
        };
      }

      // console.log(columns);
      return columns;
    })
    .then((data) => setColumns(data));
};


export default UpdateIssue;