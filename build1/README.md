# GrapeCity Documents PDF Viewer

A full-featured JavaScript PDF viewer that comes free with [GrapeCity Documents for PDF](https://www.grapecity.com/documents-api-pdf).

GrapeCity Documents PDF Viewer (GcDocs PDF Viewer) is a fast, modern JavaScript based PDF Viewer that runs on any major browser.
With a combination of .NET Core supported PDF Document API, this viewer can be used as a cross platform solution to view PDF documents
on Windows, MAC, Linux, iOS and Android devices in their respective browsers.
It is currently included in  [GrapeCity Documents for PDF](https://www.grapecity.com/documents-api-pdf).


Product highlights:

- Works in all modern browsers, including IE11, Edge, Chrome, FireFox, Opera, Safari
- Works with frameworks such as React, Preact, Angular
- Supports form filling; filled forms can be printed or form data can be submitted to the server
- Provides caret for text selection/copy, including vertical and RTL texts
- Includes thumbnails, text search, outline, attachments and articles panels
- Allows to open PDF files from local disks
- Supports annotations including text, free text, rich text etc.
- Supports redact annotations (including appearance streams), allows to hide/show redacts
- Supports sound annotations
- Allows to rotate and print the rotated document
- Supports article threads navigaion
- Fully supports file attachments (both attachment annotations and document level attachments)
- Comes with several themes, custom themes can be added
- Supports external CMaps
- ...and more

## Release notes (see version.txt for more details)

### 0.7.29
- Fixed
  - Text outside of the GCPdfViewer can not be selected. (DOC-1413)
  - Navigation buttons: next page does not scroll up when the page is already visible. (DOC-1414)
  
### 0.7.28
- Fixed
  - When a form is posted, incorrect names are sent for combo and list boxes. (DOC-1388)

### 0.7.27

- Added
  - Document Properties dialog (including fonts). (DOC-1339)

### 0.7.24

- Fixed
  - Thumbnails show incorrectly for non-standard page sizes. (DOC-1346)
  - Incorrect page orientation in print preview in some cases. (DOC-1347)

### 0.7.23

- Fixed
  - The zoom out button disappears in Internet explorer. (DOC-1333)
  - License icon does not show fully in Edge browser. (DOC-1302)
  - Radio button and checkbox cannot be selected in Edge browser. (DOC-1336)
  - FreeText callout lines are not shown when the annotation's appearance is specified by an appearance stream. (DOC-1317)
- Changed
  - If a FreeText annotation has an appearance stream, but it includes text that requires an external CMap
    that cannot be located, the text specified in the annotation is shown instead of the appearance stream. (DOC-1317)
- Added
  - Added the ability to hide FreeText annotations using the 'Hide Annotations' button.
  - Added support for CID-keyed fonts with external CMap tables. (DOC-1328)

### 0.7.21

- Fixed
  - Fixed Zoom button in IE. (COREUI-14)
  - Fixed Clear button in SearchPanel. (ARJ-650)
  - PDF content is not displayed correctly. (DOC-1317)
- Changed
  - Zoom In/Out buttons behavior: the zoom step is now 10% for zoom factors below 100%,
    and 25% for zoom factors above 100%. Also added 150% zoom value. (ARJ-606)

### 0.7.20

- First public release.

## See it in action

The [GrapeCity Documents for PDF Sample Browser](http://demos.componentone.com/gcdocs/gcpdf) uses the viewer to show sample PDFs.
The samples demonstrate most of the viewer features.

## Installation

### To install the latest release version:

```sh
npm install @grapecity/gcpdfviewer
```

### To install from the zip archive:

Go to https://www.grapecity.com/download/documents-pdf and follow the directions on that page to get your 30-day evaluation and deployment license key.
The license key will allow you to develop and deploy your application to a test server.
Unzip the viewer distribution files (list below) to an appropriate location accessible from the web page where the viewer will live.

Viewer zip includes the following files:

- README.md
- gcpdfviewer.js
- gcpdfviewer.worker.js
- version.txt
- package.json
- index.html (sample page)
- Theme files:
  - themes/dark-yellow.jscss
  - themes/light-blue.css
  - themes/light-blue.jscss
  - themes/viewer.css
  - themes/viewer.jscss
  - themes/dark-yellow.css
- Predefined CMap files for Chinese, Japanese, or Korean text output:
  - resource/bcmaps/*.bin
- TypeScript declaration files:
  - lib/*.*

## Documentation

Online documentation is available [here](https://help.grapecity.com/gcdocs/gcpdf/onlinehelp/webframe.html#grapecitydocumentspdfviewer.html).

## Licensing

GrapeCity Documents PDF Viewer is a commercially licensed product. Please [visit this page](https://www.grapecity.com/licensing/documents-api) for details.

## Getting more help

GrapeCity Documents PDF Viewer is distributed as part of GrapeCity Documents for PDF.
You can ask any questions about the viewer, or report bugs using the
[Documents for PDF public forum](https://www.grapecity.com/forums/documents-pdf).

## More details on using the viewer

### Adding the viewer to an HTML page:

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <title>GrapeCity Documents PDF Viewer</title>
	<script type="text/javascript" src="lib/gcpdfviewer.js"></script>
    <script>
        function loadPdfViewer(selector) {
            var viewer = new GcPdfViewer(selector,
              {
                /* Specify options here */
                renderInteractiveForms: true
              });
            // Skip the 'report list' panel:
            // viewer.addReportListPanel();
            viewer.addDefaultPanels();
            // Optionally, open a PDF (will only work if this runs from a server):
            viewer.open('HelloWorld.pdf');
            // Change default toolbar:
            var toolbar = viewer.toolbar;
            toolbar.updateLayout({
                default: ['$navigation', '$split', 'text-selection', 'pan', '$zoom', '$fullscreen',
                    'save', 'print', 'rotate', 'view-mode', 'doc-title']
            });
        }
    </script>
  </head>
  <body onload="loadPdfViewer('#root')">
    <div id="root"></div>
  </body>
</html>
```

### How to license the viewer:

Set the GcPdfViewer Deployment key to the GcPdfViewer.License property before you create and initialize GcPdfViewer.
This must precede the code that references the js files.

```javascript
  // Add your license
  GcPdfViewer.LicenseKey = 'xxx';
  // Add your code
  const viewer = new GcPdfViewer("#viewer1", { file: 'helloworld.pdf' });
  viewer.addDefaultPanels();
```

### Keyboard shortcuts:

- ```Ctrl +``` - zoom in
- ```Ctrl -``` - zoom out
- ```Ctrl 0``` - zoom to 100%
- ```Ctrl 9``` - zoom to window
- ```Ctrl A``` - select all
- ```R``` - rotate clockwise
- ```Shift R``` - rotate counterclockwise
- ```H``` - enable pan tool
- ```S``` - enable selection tool
- ```V``` - enable selection tool
- ```Ctrl O``` - open local PDF
- ```Ctrl F``` - text search
- ```Ctrl P``` - print
- ```Home``` - go to start of line
- ```Ctrl Home``` - go to start of document
- ```Shift Home``` - select  to start of line
- ```Shift Ctrl Home``` - select  to start of document
- ```End``` - go to end of line
- ```Ctrl End``` - go to end of document
- ```Shift End``` - select  to end of line
- ```Shift Ctrl End``` - select to end of document
- ```Left``` - go left
- ```Shift Left``` - select left
- ```Alt Left``` - go back in history
- ```Right``` - go right
- ```Shift Right``` - select right
- ```Alt Right``` - go forward in history
- ```Up``` - go up
- ```Shift Up``` - select up
- ```Down``` - go down
- ```Shift Down``` - select down
- ```PgUp``` - page up
- ```PgDown``` - page down
- ```Shift PgUp``` - select page up
- ```Shift PgDown``` - select page down

### Toolbar items:

The default viewer toolbar items layout (items starting with '$' are inherited from the base viewer, other items are PDF viewer specific.):

```
['$navigation', '$split', 'text-selection', 'pan', '$zoom', '$fullscreen', 'open', 'save', 'print', 'rotate', 'view-mode', 'theme-change', 'doc-title']
```

The full list of the PDF-viewer specific toolbar items:

```
'text-selection', 'pan', 'open', 'save', 'print', 'rotate', 'theme-change', 'doc-title', 'view-mode', 'single-page', 'continues-view'
```

The full list of base viewer toolbar items:

```
'$navigation' '$refresh', '$history', '$mousemode', '$zoom', '$fullscreen', '$split'
```

You can get default base viewer items by using the getDefaultToolbarItems() method, e.g.:

```javascript
 const toolbar: Toolbar = viewer.toolbar;
 let buttons = toolbar.getDefaultToolbarItems();
 buttons = buttons.filter(b => b !== '$refresh');
```

To specify a custom set of toolbar items, use the updateLayout() method, e.g.:

```javascript
 const toolbar: Toolbar = viewer.toolbar;
 toolbar.updateLayout({
    default: ["$navigation", 'doc-title']
 });
```

Here is an example of how to create your own custom toolbar button:

```javascript
  const toolbar: Toolbar = viewer.toolbar;
  toolbar.addItem({
    key: 'my-custom-button',
    iconCssClass: 'mdi mdi-bike',
    title: 'Custom button',
    enabled: false,
    action: () => {
      alert("Custom toolbar button clicked");
    },
    onUpdate: (args) => ({ enabled: args.state.session.status === ViewerStatus.Ready }),
  });
  toolbar.updateLayout({
    default: ['$navigation', 'my-custom-button']
  });
```

### Using the viewer in Preact

Add a reference to the viewer script.

```HTML
<body>
  <script type="text/javascript" src="/lib/gcpdfviewer/gcpdfviewer.js"></script>
  ...
```

Add the placeholder to your App template, e.g.:

```HTML
<section id="pdf"></section>
```

Render the viewer:

```javascript
let viewer = new GcPdfViewer('section#pdf');
viewer.addDefaultPanels();
```

---
_The End._
