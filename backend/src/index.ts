// src/index.ts
import api from './apiHandler/profile';


const port = process.env.PORT || 3000;


api.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});