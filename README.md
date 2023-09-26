# Datalumni public iframes

<!-- TOC -->
- [Latest job offers](#latest-job-offers)
    - [URL](#url)
    - [Parameters](#parameters)
    - [Serve example iframe locally](#serve-example-iframe-locally)
<!-- /TOC -->

## Latest job offers

This iframe shows the latest job offers listed on a Datalumni platform.

The results may be filtered by *Business Sector* and/or *Contract Type* (see [Parameters](#parameters)).

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

Any of the following parameters can be appended to the base URL (as query string) in order to filter out results.

- `bs=<int>`, optional, default: `(empty)` (no filters applied)
    - Business Sector's ID. List of IDs is shown when using `debug=true` parameter.

- `ct=<int>`, optional, default: `(empty)` (no filters applied)
    - Contract Type's ID. List of IDs is shown when using `debug=true` parameter.

- `debug=<boolean>`, optional, default: `false`
    - Lists all available IDs for above parameters to console.

```html
?bs=<int: null>&ct=<int: null>&debug=<boolean: false>
```

*Examples:*

- `https://welcome.datalumni.com/api/jobs/public/latest/?bs=1&ct=7`
- `https://welcome.datalumni.com/api/jobs/public/latest/?debug=true`

### Serve example iframe locally

```sh
cd ./latest-jobs
node main.js

# Application started : http://localhost:3210
```
