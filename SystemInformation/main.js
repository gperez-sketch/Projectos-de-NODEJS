// const si = require('systeminformation');
import si from 'systeminformation';

async function monitor() {
	const cpu = await si.currentLoad();
	const mem = await si.mem();
	const disk = await si.fsSize();

	let cpuMonitor = `CPU: ${cpu.currentLoad.toFixed(2)}'%'`;
	let menMonitor = `RAM: ${(mem.used / 1024 / 1024).toFixed(0)}MB`;
	let diskMonitor = `Disco: ${disk[0].use}%`;

	console.log(`El uso de CPU es del, ${cpuMonitor}`);
	console.log(`El uso de Memoria es de, ${menMonitor}`);
	console.log(`El uso de Espacio es del, ${diskMonitor}`);
}

monitor();
