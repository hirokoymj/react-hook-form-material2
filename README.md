# Material UI v5

## Outside of a React component

If you need to access the t function or the i18next instance from outside of a React component you can simply import your ./i18n.js and use the exported i18next instance:

```js
import i18next from "./i18n";

i18next.t("my.key");
```

## Translate your content - Using the hook

```js
import React from "react";

// the hook
import { useTranslation } from "react-i18next";

function MyComponent() {
  const { t, i18n } = useTranslation();
  return <h1>{t("Welcome to React")}</h1>;
}
```
