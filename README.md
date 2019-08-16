
# [RAGE MP] Server Boilerplate
A boilerplate for [RAGE MP] with [MongoDB] and [Typescript]!

# Quick start
1. Clone or download repository.
2. Copy [RAGE MP] server-files files and paste here.
3. Open terminal and:
	- Type `npm install`.
	- `cp .env.example .env`
	- Edit .env with your configs.
	- Type `npm start`

# Development
1. Run `tsc -w` in `src/server` and `src/client` folders
2. Run `npm run watch` to make server restart with every change
3. Run `npm run lint` to lint the code
4. Run `npm run build` to compile both `server` and `client`

# Modules
All the gameplay code should be placed within [modules](https://github.com/Wuzi/ragemp-boilerplate/tree/master/src/server/modules) folder, they are loaded automatically on server-side, you need to require them in [index.ts](https://github.com/Wuzi/ragemp-boilerplate/blob/master/src/client/index.ts) on client-side though.

# Contributing
Contributions are greatly appreciated. Please fork this repository and open a pull request to add snippets, make grammar tweaks, etc.

[RAGE MP]: <https://rage.mp/>
[Typescript]: <https://www.typescriptlang.org/>
[MongoDB]: <https://www.mongodb.com/>
