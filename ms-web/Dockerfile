FROM alpine

RUN apk update && \
    apk add nodejs && \
    apk add nodejs-npm && \
    mkdir /app && \
    npm install express -g

WORKDIR /app

COPY ./ .

RUN chmod +x start.sh && \ 
    npm i 

EXPOSE 5000

CMD ["./start.sh"]
