# Establecer la imagen base (version de node.js)
FROM node:21.3.0

# Crear y establecer el directorio de mi contenidor
WORKDIR /parte-1

# Variable de entorno
# ENV DB_URI = mongodbatlas

# Agregar argumentos para el .env, por defecto en desarrollo
ARG ENV_FILE=.env.development

# Comando para ejecutar en produccion: docker build --build-arg ENV_FILE = .env.production -t test:production
# * significa cualquier cosa (en este caso, -lock)
# Nombre del archivo ruta del archivo
COPY package*.json ./
COPY src ./src
COPY $ENV_FILE ./

# Instalar dependencias

RUN npm install

# Puerto de mi app

EXPOSE 8000

# Comando para iniciar mi app

CMD [ "node", "src/index.js" ]

# Comando para compilar: docker build -t test:1.0.0 .

# Comando para ejecutar: docker run -p  8000:8000 index.js



