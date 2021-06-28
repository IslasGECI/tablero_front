FROM node:lts
WORKDIR /workdir
COPY . .
RUN npm install --global http-server
EXPOSE 80
CMD ["http-server", "./public_html", "--port", "80"]
