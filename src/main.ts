import Engine from './Engine';

const source: any = JSON.stringify({
    "entities": [
        {
            "action": "",
            "description": "Sample description.",
            "group": "Services",
            "id": "PrintingService",
            "implements": [],
            "name": "Printing service",
            "parent": "",
            "type": "service"
        },
        {
            "action": "",
            "description": "Sample description.",
            "group": "Printables",
            "id": "Printable",
            "implements": [],
            "name": "Printable",
            "parent": "",
            "type": "model"
        },
        {
            "action": "",
            "description": "Sample description.",
            "group": "Printables",
            "id": "PrintableText",
            "implements": [],
            "name": "Printable text",
            "parent": "Printable",
            "type": "model"
        }
    ]
});

let engine: Engine = null;

setTimeout( () => {
    engine = new Engine();
}, 1000 );
