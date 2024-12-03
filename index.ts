


import * as dotenv from 'dotenv';
import express from 'express';
const env = process.env.NODE_ENV;
console.log(dotenv.config({ path: `.env.${env}` }));
// const app = express();

// const port = process.env.PORT || 3000;
// app.get('/', (req: any, res: any) => {
//     res.send({
//         message: 'Dummy server is working!',
//         port: process.env.PORT,
//         testEnv: process.env.DEV_CON,
//     });
// });

// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });
