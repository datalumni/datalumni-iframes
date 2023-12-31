# Datalumni public iframes

<!-- TOC -->
- [Latest job offers](#latest-job-offers)
  - [How to insert the iframe into a website?](#how-to-insert-the-iframe-into-a-website)
  - [URL](#url)
  - [URL parameters](#url-parameters)
    - [Step 1: Use IDs with query parameters](#step-1-use-ids-with-query-parameters)
    - [Step 2: how do I know the IDs I should use?](#step-2-how-do-i-know-the-ids-i-should-use)
    - [Example of complete URL with filters](#example-of-complete-url-with-filters)
  - [Optional - Use styles query parameters](#optional---use-styles-query-parameters)
    - [Choose between column or inline job ads](#choose-between-column-or-inline-job-ads)
    - [Rounded corners and button](#rounded-corners-and-button)
    - [Use your platform colors](#use-your-platform-colors)
    - [Sizing](#sizing)
    - [example of styles adjustments (CSS script)](#example-of-styles-adjustments-css-script)
  - [Serve example iframe locally](#serve-example-iframe-locally)
<!-- /TOC -->

## Latest job offers

This iframe shows the latest job offers listed on a Datalumni platform.

The results may be filtered by *Business Sector* and/or *Contract Type* (see [URL parameters](#url-parameters)).

The results can be displayed inline or in columns (see [Optional - Use styles query parameters](#optional---use-styles-query-parameters))

### How to insert the iframe into a website?

In order to display the latest job offers listed on a Datalumni platform through an iframe, copy / paste the code below onto your page (this is usually done using an HTML editor).

```html
<iframe
    id="iframe-jobs"
    src="<!-- INSERT URL HERE -->"
    title="<!-- INSERT TITLE HERE -->"
    scrolling="<!-- Scrolling Option -->"
></iframe>
```

- **URL** (`src`): Insert the URL of the iframe in the `src` attribute. (See [URL](#url) and [Parameters](#parameters) sections below)

- **Title** (`title`): This title will not be displayed on your site, but it's good practice to fill it in for accessibility reasons. (See [`iframe` accessibility](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#accessibility_concerns))

- **Scrolling option** :
  - `no`, hides scrollbars and artifacts
  - `auto`, automatically adds scrollbars when content overflows, (it let a grey vertical scrollbar artifact when content does not overflow)

### URL

- Base URL: `/api/jobs/public/latest/`

```html
<!-- Using Datalumni subdomain -->
https://<platform-subdomain>.datalumni.com/api/jobs/public/latest/

<!-- When Datalumni platform has a custom domain -->
https://<platform-domain>/api/jobs/public/latest/
```

### URL parameters

The job offers listed on this iframe can be filtered by *Business Sector* and / or *Contract Type*, using target value IDs.

#### Step 1: Use IDs with query parameters

Any of the following parameters can be appended to the base URL (as query parameters) in order to filter out results.

- `bs=<number>`
  - Replace `<number>` with a list of Business Sector's ID to apply filters.
  - You can insert multiple values, separated by a comma "`,`" (no whitespaces around, example: `1,2,3`)
  - This parameter is optional. If it is omitted, all data is displayed.

- `ct=<number>`
  - Replace `<number>` with a list of Contract Type's ID to apply filters.
  - You can insert multiple values, separated by a comma "`,`" (no whitespaces around, example: `1,2,3`)
  - This parameter is optional. If it is omitted, all data is displayed.

- `nb=<number>`
  - Replace `<number>` with th enumber of offers to be displayed.
  - There can be up to 12 job offers displayed (between 1 and 12).
  - This parameter is optional. If it is omitted, defaults to 3.

#### Step 2: How do I know the IDs I should use?

You can get an exhaustive list of usable IDs using the parameter `debug=true`.

```html
<!-- Example -->
https://<platform-subdomain>.datalumni.com/api/jobs/public/latest/?debug=true
```

#### Example of complete URL with filters

```html
<!-- A single Business Sector -->
https://<platform-subdomain>.datalumni.com/api/jobs/public/latest/?bs=1

<!-- A Business Sector and a Contract type -->
https://<platform-subdomain>.datalumni.com/api/jobs/public/latest/?bs=2&ct=3

<!-- Multiple Business Sectors and multiple Contract Types -->
https://<platform-subdomain>.datalumni.com/api/jobs/public/latest/?bs=4,5&ct=6,7,8
```

### Optional - Use styles query parameters

Extra parameters you can be used in order to customize the iframe content.

#### Choose between column or inline job ads

- `inline=true/false`
  - Replace `true/false` with the correct boolean, it could display offers in column or inline
  - This parameter is optional. If it is omitted, it display by default in column.

- in column

![column](pics/column.png)

- inline

![inline](pics/inline.png)

#### Rounded corners and button

- `rounded=true/false` (only for inline usage)
  - Replace `true/false` with the correct boolean, it rounds corners and buttons to inline cards
  - This parameter is optional. If it is omitted, it display squared corners.
  - Need `inline=true` to be used

![rounded](pics/rounded.png)

#### Use your platform colors

- `color=true/false` (only for inline usage no buttons in column)
  - Replace `true/false` with the correct boolean, it change the button background color to `your platform` primary color
  - This parameter is optional. If it is omitted, it displays default background color (blue).
  - Need `inline=true` to be used

![color](pics/color.png)

#### Sizing

Minimum size of iframe needed to show correctly tiles *(see adjustment with your web designer, scripts maybe needed)*

- column offers:
  - minimum heigth: 200 pixels
  - minimum width: 325 pixels

- inlines offers:
  - minimum height: 473 pixels
  - minimum width: 325 pixels

#### example of styles adjustments (CSS script)

```css
    .container { /* container class of your content */
      width: 100%;
      margin: 0 auto;
    }
    .offers { /* parent block containing offers */
      display: flex;
      flex-direction: row;
    }
    #jobs123 { /* iframe HTML Element ID */
      height: 473px;
      width: 680px;
    }
    
    @media (max-width: 780px) { /* responsive adjustments */
        .container {
          width: 100%;
        }
        .offers {
          flex-direction: column;
        }
        #jobs123 {
          width: 100%;
          /* use this to times by the count of offers you want to see */
          /* when users are on small screens */
          height: calc(473px * 2);
        }
    }
```

### Contribution

#### Serve example iframe locally

```sh
cd ./latest-jobs
node main.js

# Application started : http://localhost:3210
```
