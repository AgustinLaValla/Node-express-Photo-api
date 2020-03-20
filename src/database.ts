import { connect } from 'mongoose';
import mongoose from 'mongoose';
import colors from 'colors';

export async function startConnection() { 
     await connect('mongodb://localhost/photo-galery-db', {
        useNewUrlParser: true,
        useFindAndModify:false
    });
    console.log(`${colors.yellow('Database is connected')}`);
};
