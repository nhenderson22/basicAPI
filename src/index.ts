import  express from "express";
import {config} from './config/config'
import {Pool} from 'pg';
import threadRoutes from './routes/threads';
import postRoutes from './routes/posts';
import userRoutes from './routes/users'
import commentRoutes from './routes/comments';

const app = express();


export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'For',
    port: 5432,
  })

// Middleware that is used
app.use(express.json());

//All of the routes that I have defined
app.use('/threads',threadRoutes);
app.use('/posts', postRoutes);
app.use('/users',userRoutes);
app.use('/comments', commentRoutes);

app.listen(9090);