# Projeto integrado ao Backend com JWT



## Clonar o projeto Backend

git clone https://github.com/ricardoleme/dogWalkerBack.git

cd dogWalkerBack

yarn

Renomear o arquivo .env example para .env e informar:

MONGODB_URI=mongodb://localhost:27017

MONGODB_DB=dogWalker

SECRET_KEY=SuaSuperChaveSecreta

EXPIRES_IN=24h

MAP_QUEST_API_KEY=SuaAPIKey

Para obter a ApiKey, acesse:

https://developer.mapquest.com/user/login/sign-up

Para carregar o projeto, no Terminal digite:

yarn dev (abra o navegador em http://localhost:4000)

## Projeto Mobile integrado ao Backend

expo init dogWalkerMobile

cd dogWalkerMobile

expo install react-native-screens react-native-safe-area-context

yarn add @react-navigation/native-stack

yarn add @react-navigation/bottom-tabs

yarn add styled-components

## Instalando as fontes

expo install expo-font @expo-google-fonts/montserrat 

                       @expo-google-fonts/cabin

expo install expo-app-loading

yarn add react-native-svg

### Site para imagens SVG

https://undraw.co/

https://react-svgr.com/playground/