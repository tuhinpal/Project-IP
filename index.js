addEventListener('fetch', event => {
  event.respondWith(handle(event.request))
})

async function handle(request) {
const url = new URL(request.url);
 return new Response(request.headers.get("cf-connecting-ip") + '\n' ,{
  status: 200,
  statusText: (request.headers.get("cf-connecting-ip"))
  })
}
