// Sistema de automatización de copias de seguridad

//REVIEW: Modules
import cron from 'node-cron';
import { exec } from 'child_process';

//NOTE: Prompt inicial

console.log('Bienvenido al sistema de automatización de copias de seguridad');

cron.schedule('50 10 * * 2', () => {
	//REVIEW: first: minute, second: hour, third: all, forty: all, fifty: Tuesday
	exec('bash ./script.sh', (error, stdout, stderr) => {
		if (error) {
			console.error(`Error: ${error.message}`);
			return;
		}
		if (stderr) {
			console.error(`stderr: ${stderr}`);
			return;
		}
		console.log(`stdout: ${stdout}`);
		console.log(
			'El proceso de backup se termino se volvera ejecutar el proximo martes'
		);
	});
});
