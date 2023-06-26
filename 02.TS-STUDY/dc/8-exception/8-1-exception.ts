// Java : Exception
// Javascript : Error

// Error(Exception) Handlng : try -> catch -> finally

function readFile(fileName: string): string {
	if (fileName === 'not exist') {
		throw new Error(`file not exist: ${fileName}`);
	}

	return 'file contents';
}

function closeFile(fileName: string) {}

const fileName = 'file';

try {
	console.log(readFile(fileName));
} catch (error) {
	console.log(`catched ${error}`);
}

closeFile(fileName);