import { Browsers } from '@adiwajshing/baileys';
import Client from './libs/whatsapp.libs';
import { sessionName } from './settings/settings.json';

const aruga = new Client({
  browser: Browsers.appropriate('Desktop'),
  generateHighQualityLinkPreview: true,
  sessionName,
  syncFullHistory: true,
});

const start = () => {
  aruga.ev.on('messages.upsert', (m) => console.log(m));
  aruga.ev.on('call', (c) => console.log(c));
};

aruga
  .startClient()
  .then(start)
  .catch(async () => {
    await aruga.DB.$disconnect();
    process.exit(0);
  });
