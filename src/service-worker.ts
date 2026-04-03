/// <reference lib="webworker" />
/// <reference types="@sveltejs/kit" />

import { version } from '$service-worker';

const sw = self as unknown as ServiceWorkerGlobalScope;

// sorgt dafür, dass sich service-worker.js bei jedem Deploy ändert
void version;

sw.addEventListener('install', () => {
  // kein skipWaiting hier – das UI entscheidet
});

sw.addEventListener('activate', (event) => {
  event.waitUntil(sw.clients.claim());
});

sw.addEventListener('message', (event) => {
  const data = event.data as { type?: string } | undefined;

  if (data?.type === 'SKIP_WAITING') {
    sw.skipWaiting();
  }
});

export {};
