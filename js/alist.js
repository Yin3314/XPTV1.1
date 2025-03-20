const cheerio = createCheerio()
const UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_2 like Mac OS X) AppleWebKit/604.1.14 (KHTML, like Gecko)'

const appConfig = {
	ver: 1,
	title: 'AList',
	site: 'http://127.0.0.1:8120/',

}

async function getConfig() {
	return jsonify(appConfig)
}

async function getCards(ext) {
	ext = argsify(ext)
	let cards = []
	
	const { data } = await $fetch.get(appConfig.site, {
		headers: {
			'User-Agent': UA,
		},
	})
  $utils.openSafari('http://127.0.0.1:8120')
	

	return jsonify({
		list: cards,
	})
}