type myresponse = {
    status: number;
    headers?: object;
    body?: {msg: string};
  };

export function post(req: {body: {name: string, email: string, message: string}}): myresponse {
    if (!req.body.name) {
        return {status: 400, body: {msg: "No name provided. Please enter a name."} }
    } else if (!req.body.email) {
        return {status: 400, body: {msg: "No email provided. Please enter an email so we can respond to you."} }
    } else if (!req.body.message) {
        return {status: 400, body: {msg: "No message provided. Please enter a message."} }
    } else {
        return {status: 200, body: {msg:"Message sent"}}
    }
}
