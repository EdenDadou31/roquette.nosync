const strapiToken =
  "e24e7ee34e64972cab7df9368200925eb7cc2da87c86e6f1c4029100fe02867210dec48031d2f7ed48d9c12c1dc31cc3f8eb92992e12c1e0ff0c3cf942287eaf0e682b0e6eca0b368aeb4737ed8387e0f284bcc558b19ae3060d9118af83895e0109bcc1905909c418943a49d3307f93310a11dc75f1630efd96c5a50ebfbe73";

export interface IResult {
  data: any[];
  meta: any;
}
interface IMessageArguments {
  field: string;
}
interface IErrorMessageDetails {
  code: string;
  field: string;
  message: string;
  messageArgs: IMessageArguments;
  messageArguments: IMessageArguments;
  value: string;
}
export interface IResponseErrorJSON {
  name: "ForbiddenError" | "ResponseError" | "ValidationError";
  code: string;
  message: string;
  statusCode: number;
  messageDetails?: IErrorMessageDetails | IErrorMessageDetails[];
  messageArguments?: IMessageArguments;
}

export class ResponseError extends Error {
  public response: Response;
  code: string;
  name: "ResponseError";

  constructor(response: Response) {
    super(response.statusText);
    this.response = response;
    this.name = "ResponseError";
    this.code = "errorglobal";
  }

  toJSON(): IResponseErrorJSON {
    return {
      name: this.name,
      code: this.code,
      message: this.message,
      statusCode: this.response.status,
    };
  }
}

export class ForbiddenError extends Error {
  code: string;
  statusCode: number;
  name: "ForbiddenError";

  constructor(statusCode: number) {
    super();
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ForbiddenError);
    }
    this.name = "ForbiddenError";
    // Informations de déboguage personnalisées
    this.code = "errorforbidden";
    this.statusCode = statusCode;
  }
  toJSON(): IResponseErrorJSON {
    return {
      name: this.name,
      code: this.code,
      message: this.message,
      statusCode: this.statusCode,
    };
  }
}

export class ValidationError extends Error {
  messageDetails: IErrorMessageDetails | IErrorMessageDetails[];
  code: string;
  messageArguments: IMessageArguments;
  statusCode: number;
  name: "ValidationError";

  constructor(
    message: string,
    messageDetails: IErrorMessageDetails | IErrorMessageDetails[],
    code: string,
    messageArguments: IMessageArguments,
    statusCode: number
  ) {
    // Passer les arguments restants (incluant ceux spécifiques au vendeur) au constructeur parent
    super();

    // Maintenir dans la pile une trace adéquate de l'endroit où l'erreur a été déclenchée (disponible seulement en V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ValidationError);
    }
    this.name = "ValidationError";
    // Informations de déboguage personnalisées
    this.message = message;
    this.messageDetails = messageDetails;
    this.messageArguments = messageArguments;
    this.code = code;
    this.statusCode = statusCode;
  }
  toJSON(): IResponseErrorJSON {
    return {
      name: this.name,
      code: this.code,
      message: this.message,
      messageDetails: this.messageDetails,
      messageArguments: this.messageArguments,
      statusCode: this.statusCode,
    };
  }
}
/**
 * Parses the JSON returned by a network request
 *
 */
async function parseJSON(response: Response, isResponseText?: boolean) {
  if (response.status === 200 || response.status === 201) {
    try {
      if (isResponseText) {
        const body = await response.text();
        return body;
      } else {
        const body = await response.json();
        return body;
      }
    } catch (e) {
      console.warn(e, "might be better to send a 204 code");
      return null;
    }
  }

  if (response.status === 204 || response.status === 205) {
    return null;
  }
  const contentType = response.headers.get("content-type");
  if (contentType && contentType.indexOf("text") !== -1) {
    const txt = await response.text();
    return {
      message: txt,
    };
  }

  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
async function checkStatus(response: Response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  if (response.status === 400) {
    const json = await response.json();
    const error = new ValidationError(
      json.message,
      json.messageDetails,
      json.code,
      json.messageArguments,
      response.status
    );
    throw error;
  }
  if (response.status === 401) {
    const error = new ForbiddenError(response.status);
    throw error;
  }
  const error = new ResponseError(response);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default async function request<T>(
  url: string,
  options?: RequestInit,
  isFile?: boolean,
  isResponseText?: boolean
): Promise<T> {
  if (!options) {
    options = {};
  }

  if (options && !options.headers && !isFile) {
    const headers = new Headers();
    headers.set("Content-Type", "application/json");
    headers.set("Authorization", `Bearer ${strapiToken}`);
    options.headers = headers;
  }
  options.credentials = "include";

  const fetchResponse = await fetch(url, options);
  const response = await checkStatus(fetchResponse);

  return parseJSON(response, isResponseText);
}
