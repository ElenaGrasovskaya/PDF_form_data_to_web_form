    export interface Page {
        id: string;
        width: number;
        height: number;
    }

    export interface SignatureWidgetsPosition {
        signed: boolean;
        pageId: string;
        readonly: boolean;
        annotationId: string;
        rect: number[];
        fieldName: string;
    }

    export interface CustomPdfEngine {
        userEmail: string;
        baseFileName: string;
        groups: string[];
        companyName: string;
    }

    export interface DebugDocument {
        env: string;
        source: string;
    }

    export interface Context {
        apiUrl: string;
        customPdfEngine: CustomPdfEngine;
        debugDocument: DebugDocument;
    }

    export interface PageStatusData   {
        pages: Page[];
        readonly: boolean;
        formType: string;
        signatureWidgetsPositions: SignatureWidgetsPosition[];
        status: string;
        context: Context;
    }


export default PageStatusData;

