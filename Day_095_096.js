let url = new URL('https://example.com?foo=1&bar=2');
let params = new URLSearchParams(url.search.slice(1));

//Add a third parameter.
params.set('baz', 3);