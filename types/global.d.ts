declare module 'is-invalid-path';
declare module '@editorjs/*';
declare module '*.scss';

declare interface Window {
    WebComponents :any;
    ShadyDOM: any;
    loadScript: any;
    CustomElementRegistry: {
      forcePolyfill: any
    }
}

declare interface LitPage {
  path: string,
  hash: string,
  query: string,
  queryObject: any,
  paramObject: any
}

interface AddFilePrompt {
  destinationpath: string,
  filename: string,
  description: string
}

interface AddDocumentPagePrompt {
  name: string,
  destinationpath: string | null,
  isIndex: boolean,
  weight: number
}
