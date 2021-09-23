import React from 'react';

class Headlines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      headlines: []
    };
  }
  componentDidMount() {
    this.makeApiCall()
    console.log("hello")
  }
  makeApiCall = async () => {
   const result =  await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)
   const data = await result.json()
      console.log(data.results)
    this.setState({
      isLoaded: true,
      headlines: data.results,
    })
      // console.log(data)
  }

  render() {
    const { error, isLoaded, headlines } = this.state;
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (!isLoaded) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <h1>Headlines</h1>
          <ul>
            {headlines.map((headline, index) =>
              <li key={index}>
                <h3><a href={headline.url}>{headline.title}</a></h3>
                <p>{headline.abstract}</p>
                <p>{headline.published_date}</p>
                <p>{headline.subsection}</p>
              </li>
            )}
          </ul>
        </React.Fragment>
      );
    }
  }
}
export default Headlines;