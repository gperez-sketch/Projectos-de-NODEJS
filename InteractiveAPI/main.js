//NOTE: Module
import { GoogleGenAI } from '@google/genai';

const KeyAPI = 'iZAsYbB1em382tUKGFE_joO3ScPADsWiAEWUIe'; //NOTE: esta api no es la real

const ai = new GoogleGenAI({
	apiKey: KeyAPI,
});

async function main() {
	const response = await ai.models.generateContent({
		model: 'gemini-3-flash-preview',
		contents: 'Como uso un api de Google studio en js',
		config: {
			systemInstruction:
				'Responde  en español cualquier duda',
		},
	});
	console.log(response.text);
}

await main();
