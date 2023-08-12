import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url)

export const __dirname = dirname(__filename) //Path del archivo (o sea, el directorio actual en donde se encuentra path.js)