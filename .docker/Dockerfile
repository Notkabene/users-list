FROM node:20.5.1-alpine

# делаем каталог 'app' текущим рабочим каталогом
WORKDIR /app

# копируем файлы и каталоги проекта в текущий рабочий каталог (т.е. в каталог 'app')
COPY . .
RUN npm install
RUN npm run build

EXPOSE 3000
CMD [ "node", ".output/server/index.mjs" ]
