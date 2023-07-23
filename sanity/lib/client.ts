import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "sklBnFHiu2YOEMws3XzFdoI6XhoRvsF0GYT1bgsBPu07IdRI7hPgnJsRli6AkgANwMAArYosXKskWtKZpSAZQ46QgdsD6XltC1KoZqw7ZGfIrdwnwFC31lnPsEQRsKZ6sUwmyG7CSunRr7GSr9BgSJaf0AD4N3Kx2n5dIb8ak9ltArYt5wWb",
})
