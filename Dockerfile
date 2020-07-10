FROM node:7 
WORKDIR /CompanyZ 
COPY package.json /CompanyZ 
RUN npm install
COPY  .  /CompanyZ 
CMD node CompanyZ.js 
EXPOSE 3000