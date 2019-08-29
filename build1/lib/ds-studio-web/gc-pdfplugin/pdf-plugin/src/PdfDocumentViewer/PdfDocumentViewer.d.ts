//@ts-ignore
import { View } from '@grapecity/viewer-core/lib/components/DocumentViewer/View';
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'gc-pdfpane': HTMLAttributes;
        }
    }
}
export declare class PdfDocumentViewer extends View {
    constructor();
    render(): JSX.Element;
}
