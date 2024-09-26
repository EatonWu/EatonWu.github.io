'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b38f7a2ce41e515fdd447ad5f323895a",
".git/config": "8334b3d0dc27e93101d437a1fc8600eb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5ff5c195257b4a4eb4ca13d5b8dc547e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "c5d7b5b998828e1103c02f549e735b05",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "36c1286222bf82d2bdc36ca96d4c94c7",
".git/logs/refs/heads/main": "ac19b2c97e67a8dbfedfe3034a9398f3",
".git/logs/refs/remotes/origin/main": "deaae7ec86168699c987cbf1317f08e6",
".git/objects/04/c44edfa14cb148fc0cf9a1a9d0b652fd619315": "7bf2f2eb48d7c265a39c2c74bb46c245",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/07/737e29fb31ebd13f3392563065fca22b2394c7": "ccb8012d6d45aba1cd140b58559a637c",
".git/objects/08/1d61d9dc5a2f088223ed2b50705561cf8717ad": "ba754d8b3a8c143ddf82af5857d18b93",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/11/18c00fa33a25a03c59e6b10a52c3f1fda38db4": "1e758c8d13d1182a112f5b2a4b7daf87",
".git/objects/11/c238d454793c1f4f03a5d0e221e27c4dcfbccb": "852f2158bb1bc89adf6a323e937b2b0d",
".git/objects/13/566b81b018ad684f3a35fee301741b2734c8f4": "9c29e6900c9ff7f24c6fa14692f16acf",
".git/objects/17/34cd374aa4ebce5779bb991ab4ea5506e68d32": "09b791c1da75a96cd33119cdcd158073",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/2c76724ec5ac4259899aac835d0627f799cf92": "3eb26cc46efe8198d32826c35aa845d3",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/80e24ea1e328a47d881db20abcd02129386084": "574e7d41535d08623b91759c954ff74a",
".git/objects/2f/b3421da6322d5c753d2b4612f970b5e48e398e": "a355ed912fd40944f52a645acb292d3f",
".git/objects/30/ad047d778c4dccceed5dd10319d2036d89f6aa": "4bc68dde62ae7f067be6bf91c32a770a",
".git/objects/32/920bb84af7fbd97c85b8d62fbc03774a6418fb": "94cba22788b5922f15955622aaed743c",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/275d2fd9e83eeb1a255fc351560a33f04c908c": "e95d91188f605442ebf77b2eceb299c5",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/9eb2a7dbd0fa1bdcc7d48918546cbbf58e7f9b": "dd62555f485ec4052cbca771d32e9cb5",
".git/objects/4f/8e64e2667a68d4afdd6a5cbd013902c51643ac": "934c78d2cd396217c35443264abd2aaa",
".git/objects/56/462cd23cd66fd54d100d5b269f9cd5e0aba831": "0ead0c8eeaa45a69d39023628bdf184a",
".git/objects/58/837ceb55ba653007788e9a3cf0e93c5bde4b7e": "ddfd6b43daf2a8bb6149daaec8b55445",
".git/objects/5f/d2bca3bb9b0fbb305839dbf900381660d9aa20": "da0c35795ce63d1226302eb330a16ef1",
".git/objects/63/9900d13c6182e452e33a3bd638e70a0146c785": "488924a8ec51457535ebf377a60e23c8",
".git/objects/66/0fdfc14a006e7e62cae3b09801dbbf86a5dbd3": "ba775f94e1c2cad3503ceaa5c1749d21",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6f/2aa0be7bb9f2b6f4c289f432e7a1b07cd2839b": "d50746e6a5ef527070ff5c5b44635a80",
".git/objects/77/bef6f89c33668ebb069448408b06d114ac27e8": "8d225a49d5c5f865f7187b5928a1b04a",
".git/objects/7b/a674653bca74e02475e30e510563bfb498cf0d": "73a3657e3290b743627a9a65e81c3d99",
".git/objects/7f/a79521432b51ea61241ef36c067f99aa0a48e2": "1fdd449c28e136b45291756dcfaa43fe",
".git/objects/81/0d4beb9f11497f496a0fc9352976dd5f858735": "8dde820a5f6eea98ce6da5ac2524c255",
".git/objects/81/83942911834c411827c8b8f9208d2a7c532e97": "8cda2d1e95d4d79dba7bd316c04a6976",
".git/objects/83/1c248a4f0ebc86a9a667c9b2ba1759e349ecf2": "ee27376f79f5d44d3813d6f769def675",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/c68db619e575ecaae3a8823a88ac9d75a9f81d": "22f078404877cc35582b7987e0f3cd56",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/94/a25f7f4cb416c083d265558da75d457237d671": "f4ba8c706b5e4a214d83e95a0099370a",
".git/objects/95/58a86ebde39a026f9030c76189f494c7e89549": "08bc2029b6d6a5f7562d18d9462a0805",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9f/4a6f5b288f3587b3ca2923d506b6adea04353a": "c42a63af9542687c139e58045ad51c71",
".git/objects/a7/c799b49dc73921d7dd7d041c7513b6b486ee86": "4a3a7d2912852af97f02fbdf9e552be5",
".git/objects/a9/5bfa2f4ea02879422af110c12132df4ff8d105": "b6e43166dea778c07837ed9e9c90bbce",
".git/objects/a9/dd7df8c380185ed205915f91780dbfe3a55b0f": "e4feae9fd8277d98ec7e3b321a73ee5c",
".git/objects/ac/d86528b33c12ac97a40b1f1d8b567698ee118d": "93acca6f99e82f590536d88e644501ab",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b2/8f1233e503eddfb2961101aaf73008eddd36eb": "bbfdf86f121939d62fc5c035e2e8ec36",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/7518e9b7ed36bb0660ffd63029ecfeec1201f6": "9d714099c826c067ed6f5df5182a1679",
".git/objects/bd/a9f0532cea86c48a04cede2fdb4f6a5eeb2d69": "bf3b12a6247a898fa86fa31dfd9f01d7",
".git/objects/c1/6621d977320c937f92101b598f3e9e1fde5291": "e387c0dd157f08e8cb3e8bdaece596fe",
".git/objects/c5/319be991f38550136158d44ceda7865847a0e6": "d7305ec4df624dae6705e6c80175d8fd",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/ce/aa6381478b4158f1c917c4df6ffe374355ab74": "ce2479f67df51bc62dd58676d658780b",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d2/21b9369236d2c4be1b5c9e52709e72359a353a": "a2adbaa71db9bfd56e8887e62ec812f4",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/d8/8ddf3943ce84af0a8410e07adefdf897d8bf09": "7526710cc26855694048191390830202",
".git/objects/d9/f10cadd395d71c6fc53c85918174f7dd5d778d": "6504c6282e1f362c46ea8c462880c88b",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dd/8d67cf82608b0ceb541d58e8cb2c9ae1964b72": "24af612f2d1990d3893ce10eb24f1f94",
".git/objects/e1/44ac45a301408e18deff58ec09cc8e3e3ee786": "afef8f30003e4434baa21a1d7b935f80",
".git/objects/e7/1fb7f630e9770a4d07714055de0de53f5a1eea": "4560c7614cccd669046b9dae6b1f6e14",
".git/objects/ea/c7714a18c0aac6e076d19bd18c69e1616e483a": "09252eac9087677ae4d7d555d9433140",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/c25f55e58e9427b59fd597c6d806dda6b3034b": "39cc29d37376033236b13b5db8e5a34f",
".git/objects/f0/d9f8988c97d1ab803154000990524ef0cedd21": "0e7858570b723600dbb0d3b62b3d8271",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/f2d4c634468e8cbd889036b65e7bf07803c9b7": "bd366ae4775120e1321186bffca8e813",
".git/objects/f4/49aa05a6f34a240a40839390f179365881fb19": "aeee7a04c97c71909be949c73271e7f4",
".git/objects/f5/7c62a7580418d516f065e6ebab682dc6f4d9f3": "9509c2d5fb5d050743b7aff24c05800f",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/fb/d81f8e2fa2400c2437118e77c01a5aba3e57cf": "0c0de33a7577e363843424936c4c1787",
".git/ORIG_HEAD": "5a20d5c06d501e21a1655fcbc5e4caa6",
".git/refs/heads/main": "e798733902d935428740755a156f9dc2",
".git/refs/remotes/origin/main": "e798733902d935428740755a156f9dc2",
".idea/inspectionProfiles/Project_Default.xml": "891db2a776923f1132d15c5550f34c20",
".idea/misc.xml": "d4f288593ec15175e0ab2246a477dada",
".idea/modules.xml": "9e76b956e97dbf7d14a4b3d83c8c2375",
".idea/vcs.xml": "a8b625cb090fe904fb7338f6447f50ac",
".idea/web.iml": "24742e734b568c3f23d56498828ad0f3",
".idea/workspace.xml": "3f54c1c34c18c3aa4e6f1155084716ab",
"assets/AssetManifest.bin": "fbd8dd373b8513a70200f1bd95938a87",
"assets/AssetManifest.bin.json": "18c92a0f5575967ac652cc4ca00fe6db",
"assets/AssetManifest.json": "f89b8c61ec13a4c081e76972052658aa",
"assets/assets/cgg_demo_assets/cgg_logo.png": "ff19c1a9861547eacbadb8de6acb8c70",
"assets/assets/cgg_demo_assets/default_background.jpg": "f4248373916da5db3f8fac625b066153",
"assets/assets/cgg_demo_assets/default_c8.png": "8638cde1cb1547a0e49a8bca64b697a2",
"assets/assets/cgg_demo_assets/locations.json": "1bea8f6b59479e441bf17f7706aaf419",
"assets/assets/cgg_demo_assets/shops.json": "25751462d8fd7e5ca10d2728c0324086",
"assets/assets/cgg_demo_assets/transparent_cgg_logo.png": "349e50ce3efe45ebabf0527c7dbe2ae3",
"assets/assets/EatonWuResume.pdf": "fe393c86134e2ce2731a8ddcef012b4a",
"assets/assets/luncheon.jpg": "734a9d9973d3ec5bc33a42083e1faadd",
"assets/assets/radio.jpg": "a8fd18d848d697c96696b5f352b0cd96",
"assets/assets/sexydude;).png": "bebf1f7a6734eb9ac494759f5e394c9c",
"assets/assets/signature.png": "815aa3bc78a4e67452e1cd2013efe9c7",
"assets/assets/ukg.png": "0dffb67442d3a06376b55e25b1805001",
"assets/assets/wiring_diagram.png": "a55a57b451cc5f27b1e852d3d14cff78",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "ed79be4c3f63720fd89f793f012183f0",
"assets/NOTICES": "ad0075fbef1adcdcdbfec0115ce9076a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"CNAME": "929107bdc91c2712a734a91c9da5f352",
"favicon-32x32.png": "b0126409bd4d6c4eec2e84966f27a9ae",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "a831af34614676bcad169a59e887d5cb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "88b7837e203f37c4c43970472474baf7",
"/": "88b7837e203f37c4c43970472474baf7",
"main.dart.js": "46f52d9cc284fdc6131961b7385ef8a2",
"manifest.json": "b254ea969dba77cb3196fde79c062e70",
"version.json": "3d580c8884ce2e572a5ba7fd382bd4a3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
