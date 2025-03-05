// this code does seem to work, the data gets loaded, but in the end it throws an error because of course a jsonld file is not an array

import { RdfStore } from "rdf-stores";
// import { DataFactory } from "rdf-data-factory";
import { readFileSync } from "fs";
import * as N3 from "n3";
import { streamifyArray } from "streamify-array"; // not the right tool, not an array ...

const turtleFile = "LynnVK.ttl";
const jsonldFile = "LynnVK.jsonld";

const store = RdfStore.createDefault();
// const DF = new DataFactory();

async function loadTurtle(filePath: string) {
    const data = readFileSync(filePath, "utf8");
    const parser = new N3.Parser();
    const quads = parser.parse(data);
    quads.forEach(quad => {
        store.addQuad(quad); 
    });
    console.log(`Turtle data from ${filePath} loaded.`);
}

async function loadJSONLD(filePath: string) {
    const jsonld = JSON.parse(readFileSync(filePath, "utf8"));
    const quadStream = streamifyArray(jsonld); // this json is not an array of course 
    store.import(quadStream);
    console.log(`JSON-LD data from ${filePath} loaded.`);
}

async function showTriples() {
    const triples = store.getQuads();
    console.log("\n ** All triples in the store: **");
    triples.forEach(triple => {
        console.log(`${triple.subject.value} ${triple.predicate.value} ${triple.object.value}`);
    });

    console.log(`\n Number of triples: ${triples.length} - this is the right number, because a triple that already exists is overridden (there will never be a double in the store)`);
}


async function main() {
    await loadTurtle(turtleFile);
    await loadJSONLD(jsonldFile);
    await showTriples();
}

main().catch(console.error);