# imgur-user [![Build Status](https://travis-ci.org/gillstrom/imgur-user.svg?branch=master)](https://travis-ci.org/gillstrom/imgur-user)

> Get the profile of an imgur user


## Install

```
$ npm install --save imgur-user
```


## Usage

```js
const imgurUser = require('imgur-user');

imgurUser('gillstrom').then(res => {
	console.log(res);
	/*
	{ 
		id: 7553828,
		url: 'gillstrom',
		bio: 'Hello everybody',
		reputation: 0,
		created: 1383001804,
		pro_expiration: false
	 }
	 */
});
```


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
