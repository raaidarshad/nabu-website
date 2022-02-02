const SEARCH_ENDPOINT = 'https://www.nabu.news/submitSearch';
const content = document.getElementById('content');

// eslint-disable-next-line no-undef
chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
	const tab = tabs[0];
	const url = new URL(tab.url);

	// if (!supportedDomain) {
	//   content = `<div> This website is not supported </div>`
	//   return;
	// }

	content.innerHTML = loading();

	fetch(SEARCH_ENDPOINT, {
		method: 'POST',
		body: JSON.stringify({
			// target: 'https://www.nytimes.com/2022/01/31/world/europe/ukraine-russia-united-nations.html'
			target: url
		})
	})
		.then((r) => r.json())
		.then((data) => {
			const articles = data.rows;
			// const articleListHTML = articles.map((article) => buildRow(article)).join('');
			content.innerHTML = articleList(articles);
		})
		.catch((e) => {
			content.innerHTML = `error`;
			console.log(e);
		});
});

const loading = () => `
  <div id="loading">
    loading...
  </div>
`;

/*
 ** Articles = [Article]
 */
const articleList = (articles) => {
	if (articles.length) {
		return `
      <ol id="articleList">
        ${articles.map(article).join('')}
      </ol>
    `;
	}

	return `
    <div style="width: 120px">
      Could not find similar news articles
    </div>
  `;
};

/*
 ** Article = {
 **  url: string
 **  date: string
 **  title: string
 **  source: string
 ** }
 */
const article = ({ url, title, source, date }) => {
	return `
    <div style="width: 500px">
      <a href=${url} target="_blank">${title}</a>
      <p>${source} - ${date.split('T')[0]}</p>
    </div>
  `;
};
