import * as Sentry from "@sentry/react";

function init() {
  // Sentry.init({
  //   dsn:
  //     "https://af57468fdaee4328948f299169e50327@o439488.ingest.sentry.io/5406351",
  //   integrations: [new Integrations.BrowserTracing()],
  //   tracesSampleRate: 1.0,
  // });
}

function log(error) {
  console.error(error);
  // Sentry.captureException(error);
}

export default {
  init,
  log,
};
