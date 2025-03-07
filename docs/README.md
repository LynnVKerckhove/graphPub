Assessment 2 Knowledge Graphs

lynnvankerckhove@L043-CUL-2022 ~ % curl -I https://lynnvkerckhove.github.io/graphPub/#me            
HTTP/2 200 
server: GitHub.com
content-type: text/html; charset=utf-8 <!--- disadvantage of this system: content html, only hidden RDF --->
permissions-policy: interest-cohort=()
last-modified: Thu, 06 Mar 2025 20:53:23 GMT
access-control-allow-origin: * <!--- but CORS is good on Github: allows all --->
strict-transport-security: max-age=31556952
etag: "67ca0b43-3a2"
expires: Thu, 06 Mar 2025 21:09:40 GMT
cache-control: max-age=600 <!--- caching based on expiration --->
x-proxy-cache: MISS
x-github-request-id: 75D4:394A50:649F73:655DCF:67CA0CBA
accept-ranges: bytes
age: 0
date: Thu, 06 Mar 2025 20:59:40 GMT
via: 1.1 varnish
x-served-by: cache-bru1480078-BRU
x-cache: MISS
x-cache-hits: 0
x-timer: S1741294780.344333,VS0,VE167
vary: Accept-Encoding
x-fastly-request-id: e308d8c09ed54f9dbd2cac1cb344e3c21846a104
content-length: 930

lynnvankerckhove@L043-CUL-2022 ~ % curl -I https://lynnvkerckhove.github.io/graphPub/docs/LynnVK.ttl                
HTTP/2 200 
server: GitHub.com
content-type: text/turtle; charset=utf-8 <!--- here actual turtle --->
permissions-policy: interest-cohort=()
last-modified: Thu, 06 Mar 2025 22:58:27 GMT
access-control-allow-origin: *
strict-transport-security: max-age=31556952
etag: "67ca2893-264"
expires: Thu, 06 Mar 2025 23:12:21 GMT
cache-control: max-age=600
x-proxy-cache: MISS
x-github-request-id: F9C9:AAAB1:963687:9752AF:67CA2978
accept-ranges: bytes
age: 0
date: Thu, 06 Mar 2025 23:02:21 GMT
via: 1.1 varnish
x-served-by: cache-bru1480079-BRU
x-cache: MISS
x-cache-hits: 0
x-timer: S1741302141.400714,VS0,VE102
vary: Accept-Encoding
x-fastly-request-id: 38952a577a74fb83321905077cc5f722ac6da6b9
content-length: 612