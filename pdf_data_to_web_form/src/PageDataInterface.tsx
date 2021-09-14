

    export interface Word {
        rect: number[];
        fontSize: number;
        fontFamily: string;
        text: string;
    }

    export interface Line {
        words: Word[];
        rect: number[];
    }

    export interface Text {
        lines: Line[];
        rect: number[];
    }

    export interface Annotation {
        fontFamily: string;
        inputHelper: string;
        rect: number[];
        charLimit: number;
        required: boolean;
        name: string;
        id: string;
        multiline: boolean;
        widgetType: string;
        textColor: string;
        type: string;
        textAlign: string;
        borderWidth: number;
        hidden: boolean;
        fontSize: number;
        formattedValue: string;
        readonly: boolean;
        keystrokeRegExps: string[];
        events: string[];
        value: string;
        signed?: boolean;
        inputDateFormat: string;
        tooltipText: string;
    }

    export interface PageData {
        text: Text[];
        annotations: Annotation[];
        pageId: string;
    }
export default PageData;


