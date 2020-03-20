//Index ts es el encargado de arrancar la aplicación
import app from './app';
import { startConnection } from './database';
import colors from 'colors';

async function main() {
    startConnection();
    await app.listen(app.get('port'));
    console.log(`${colors.magenta('Server on port')} ${colors.green(app.get('port'))}`)
};

main();