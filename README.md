# Datalumni public iframes

<!-- TOC -->
- [Latest job offers](#latest-job-offers)
    - [How to insert the iframe into a website?](#how-to-insert-the-iframe-into-a-website)
    - [URL](#url)
    - [Parameters](#parameters)
        - [Step 1: how do I know the IDs I should use?](#step-1-how-do-i-know-the-ids-i-should-use)
        - [Step 2: Use IDs with query parameters](#step-2-use-ids-with-query-parameters)
        - [Example of complete URL with filters](#example-of-complete-url-with-filters)
    - [Serve example iframe locally](#serve-example-iframe-locally)
<!-- /TOC -->

## Latest job offers

This iframe shows the latest job offers listed on a Datalumni platform.

The results may be filtered by *Business Sector* and/or *Contract Type* (see [Parameters](#parameters)).

### How to insert the iframe into a website?

In order to display the latest job offers listed on a Datalumni platform through an iframe, copy / paste the code below onto your page (this is usually done using an HTML editor).

```html
<iframe
    id="iframe-jobs"
    src="<!-- INSERT URL HERE -->"
    title="<!-- INSERT TITLE HERE -->"
    style="border: 0; width: 100%;"
></iframe>
```

- **URL** (`src`): Insert the URL of the iframe in the `src` attribute. (See [URL](#url) and [Parameters](#parameters) sections below)

- **Title** (`title`): This title will not be displayed on your site, but it's good practice to fill it in for accessibility reasons. (See [`iframe` accessibility](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#accessibility_concerns))

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

### Parameters

The job offers listed on this iframe may be filtered by *Business Sector* and / or *Contract Type*, using target value IDs.

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

### Serve example iframe locally

```sh
cd ./latest-jobs
node main.js

# Application started : http://localhost:3210
```
