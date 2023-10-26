# Datalumni public iframes

<!-- TOC -->
- [Latest job offers](#latest-job-offers)
  - [How to insert the iframe into a website?](#how-to-insert-the-iframe-into-a-website)
  - [URL](#url)
  - [Sizing](#sizing)
    - [example of styles adjustments (CSS script)](#example-of-styles-adjustments-css-script)
  - [Parameters](#parameters)
    - [How can i add parameters ?](#how-can-i-add-parameters-)
    - [Example of adding parameters](#example-of-adding-parameters)
    - [Step 1: how do I know the IDs I should use?](#step-1-how-do-i-know-the-ids-i-should-use)
    - [Step 2: Use IDs with query parameters](#step-2-use-ids-with-query-parameters)
    - [Example of complete URL with filters](#example-of-complete-url-with-filters)
    - [Optional - Use styles query parameters](#optional---use-styles-query-parameters)
  - [Serve example iframe locally](#serve-example-iframe-locally)
<!-- /TOC -->

## Latest job offers

This iframe shows the latest job offers listed on a Datalumni platform.

The results may be filtered by *Business Sector* and/or *Contract Type* (see [Parameters](#parameters)).

It result can be stylized, inline or in columns (see [Optional - Use styles query parameters](#optional---use-styles-query-parameters))

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

- **Sizing** : See [Sizing](#sizing) section below

- **Scrolling option** :
  - `no`, clears the movement bars (no scrollbars, no artifacts)
  - `auto`, add automaticaly scrollbars when content overflowes, (it let a grey vertical scrollbar artifact when content did not overflowes)

### URL

- Base URL: `/api/jobs/public/latest/`

```html
<!-- Using Datalumni subdomain -->
https://<platform-subdomain>.datalumni.com/api/jobs/public/latest/
Example: https://welcome.datalumni.com/api/jobs/public/latest/

<!-- When Datalumni platform has a custom domain -->
https://<platform-domain>/api/jobs/public/latest/
Example: https://www.my-platform-domain.com/api/jobs/public/latest/
```

### Sizing

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

### Parameters

The job offers listed on this iframe may be filtered by *Business Sector* and / or *Contract Type*, using target value IDs.

#### How can i add parameters ?

You can add parameters throught the URL link, by addding at the end

- `'?'` before the first parameters

- `'&'` before any additionnal parameters

Each parameters must writed like `<parameter_name>=<parameter_value>` *- without `'<'` and `'>'` signs*

#### Example of adding parameters

```html
<!-- first parameter -->
https://welcome.datalumni.com/api/jobs/public/latest/?first=value
<!-- any others parameters -->
https://welcome.datalumni.com/api/jobs/public/latest/?first=value&second=value&others=value
```

#### Step 1: how do I know the IDs I should use?

You can get an exhaustive list of usable IDs using the parameter `debug=true`.

```html
<!-- Example -->
https://welcome.datalumni.com/api/jobs/public/latest/?debug=true
```

#### Step 2: Use IDs with query parameters

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
  - Replace `<number>` with a count of offers you want to see
  - Count of offers available is between 1 and 12
  - This parameter is optional. If it is omitted, default count is 3 offers.

```html
?bs=<number>&ct=<number>
```

#### Example of complete URL with filters

```html
<!-- A single Business Sector -->
https://welcome.datalumni.com/api/jobs/public/latest/?bs=1

<!-- A Business Sector and a Contract type -->
https://welcome.datalumni.com/api/jobs/public/latest/?bs=2&ct=3

<!-- Multiple Business Sectors and multiple Contract Types -->
https://welcome.datalumni.com/api/jobs/public/latest/?bs=4,5&ct=6,7,8
```

#### Optional - Use styles query parameters

Like filters you can use some styles

- `inline=true/false`
  - Replace `true/false` with the correct boolean, it could display offers in column or inline
  - This parameter is optional. If it is omitted, it display by default in column.

- `rounded=true/false` (only for inline usage)
  - Replace `true/false` with the correct boolean, it round corners and buttons to inline cards
  - This parameter is optional. If it is omitted, it display squared corners.
  - Need `inline=true` to be used

- `wrap=true/false` (only for inline usage, column are already in correct side)
  - Replace `true/false` with the correct boolean, it wrap cards on small screens
  - This parameter is optional. If it is omitted, it display cards side by side.
  - Need `inline=true` to be used

- `color=true/false` (only for inline usage no buttons in column)
  - Replace `true/false` with the correct boolean, it change the button background color to `your platform` primary color
  - This parameter is optional. If it is omitted, it display default background color.
  - Need `inline=true` to be used

### Serve example iframe locally

```sh
cd ./latest-jobs
node main.js

# Application started : http://localhost:3210
```
