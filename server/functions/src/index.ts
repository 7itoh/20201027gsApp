import * as functions from 'firebase-functions';
import express from 'express';

import { devReceiver } from './components/BleWeve';

const app = express();

const device = new devReceiver;
device.connectOn()

app.get('/hello', (error, request, response) => {
    request.send('Hello Express');
})

export const api = functions.https.onRequest(app);
