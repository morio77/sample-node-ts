import express from 'express';

const app = express();

app.get('/', (_: any, res: any) => {
    res.send('Hello world');
});

app.get('/morio77', (_: any, res: any) => {
    res.send('Hello morio77');
});

app.listen(3001, () => console.log('Server is running'));