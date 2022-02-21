---
title: Roadmap
author: Raaid Arshad
date: '2022-02-21'
layout: blog
---

We have a variety of ideas and features in various stages of development. Some are very experimental, while others are simply a matter of time.

### Sooner
- [x] Data pipelines to pull article content from sources
- [x] Machine learning pipelines to group together articles about the same topic
- [x] Latest articles, grouped by topic
- [x] Endpoint that accepts an article URL and returns a list of similar articles
- [x] A simplified page view using the similar-article endpoint
- [x] A Firefox browser extension using the similar-article endpoint
- [x] A Chrome browser extension using the similar-article endpoint
- [ ] A Twitter bot that uses the similar-article endpoint
- [ ] A Reddit bot that uses the similar-article endpoint
- [ ] A daily email of topic-grouped articles
- [ ] A weekly email of topic-grouped articles

### Later
- [ ] Storing the similarity measure between articles
- [ ] Using the similarity measure to better sort articles
- [ ] Data visualization of article similarities within and across clusters
- [ ] Alternative card view of articles
- [ ] "Opinion" article flag

### Even Later
- [ ] Subjectivity/objectivity measurement
- [ ] Inflammatory language flag
- [ ] Topic summarization
- [ ] Identify spread of story within a topic

### Perpetual
- Adding more sources


<div id="form-container">
	<iframe id="feature-form" src="https://docs.google.com/forms/d/e/1FAIpQLSfRShkfVqTmiCaBvpv5PMoKsZW14kgXN8b16hlyafgVCtXJwQ/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
</div>

<style>
    h3 {
        margin-bottom: 20px;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }

    #form-container {
		margin-top: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	#feature-form {
		width: 640px;
		height: 700px;
	}

	@media screen and (max-width: 790px) {
		#feature-form {
			width: 400px;
			height: 1000px;
		}
	}
</style>