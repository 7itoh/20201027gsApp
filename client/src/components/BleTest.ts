import net from 'net';
import fireStore from '@react-native-firebase/firestore';
const db = fireStore();

export class devReceiver {
  port: number;
  host: string;

  config: {
    enableRawOutput: boolean;
    format: string;
  };
  client: net.Socket;
  constructor() {
    this.port = 13854;
    this.host = '127.0.0.1';
    this.config = {
      enableRawOutput: true,
      format: 'Json',
    };
    this.client = new net.Socket();
  }

  connectOn() {
    this.client.connect(this.port, this.host, () => {
      this.client.write(JSON.stringify(this.config));
    });
    this.client.on('data', (data) => {
      try {
        const json = JSON.parse(data.toString());
        if (json.eegPower !== undefined) {
          console.log(json.eegPower);
          db.collection('newwaves').add(json.eegPower);
        }
      } catch (e) {
        console.log(e);
      }
    });
  }
}
