
# [RAGE MP] Server Boilerplate
A boilerplate for [RAGE MP] with [MongoDB] and [Typescript]!

# Quick start
1. Clone or download repository.
2. Copy [RAGE MP] server-files files and paste here.
3. Open terminal and:
	- Type `yarn`.
	- `cp .env.example .env`
	- Edit .env with your configs.
	- Type `yarn start`

# Development
1. Run `tsc -w` in `src/server` and `src/client` folders
2. Run `yarn watch` to make server restart with every change
3. Run `yarn lint` to lint the code
4. Run `yarn build` to compile both `server`, `client` and `views`

# Modules
Gameplay code should be placed within [modules (server)](https://github.com/Wuzi/ragemp-boilerplate/tree/master/src/server/modules) and [modules (client)](https://github.com/Wuzi/ragemp-boilerplate/blob/master/src/client/modules), after creating the module you need to add to the modules array in modules entry-point.

# Languages
You can set the language of the gamemode changing the [.env](https://github.com/Wuzi/ragemp-boilerplate/blob/master/.env.example) file, if your language is not here you can create it [here](https://github.com/Wuzi/ragemp-boilerplate/tree/master/src/server/lang) and [here](https://github.com/Wuzi/ragemp-boilerplate/tree/master/src/client/lang) and import them in the lang.loader.

# Contributing
Contributions are greatly appreciated. Please fork this repository and open a pull request to add snippets, make grammar tweaks, etc.

[RAGE MP]: <https://rage.mp/>
[Typescript]: <https://www.typescriptlang.org/>
[MongoDB]: <https://www.mongodb.com/>
